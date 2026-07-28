/**
 * Shared Instagram helpers for the token/sync endpoints.
 *
 * Files prefixed with an underscore are not routed by Vercel, so this stays a
 * plain module rather than an endpoint.
 *
 * The access token lives in Redis under `ig:token` because a long-lived
 * Instagram User token has to be refreshed every 60 days and a serverless
 * function cannot write back to the project's environment variables.
 * INSTAGRAM_TOKEN is only ever a seed for the first bootstrap.
 */

import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
})

export const TOKEN_KEY = 'ig:token'
export const STATUS_KEY = 'ig:status'
export const META_KEY = 'ig:meta'
export const CURATED_KEY = 'curated'
export const BACKUP_KEY = 'curated:backup'

export const GRAPH = 'https://graph.instagram.com/v21.0'

/** Vercel sends `Authorization: Bearer $CRON_SECRET` on scheduled invocations. */
export function isAuthorized(req) {
  const secret = (process.env.CRON_SECRET || '').trim()
  if (!secret) return false
  const header = req.headers?.authorization || ''
  const query = req.query?.secret || ''
  return header === `Bearer ${secret}` || query === secret
}

/** Never returns the token itself — only what is safe to surface. */
export async function readTokenRecord() {
  const record = await redis.get(TOKEN_KEY)
  if (record && record.token) return record
  const seed = (process.env.INSTAGRAM_TOKEN || '').replace(/\s+/g, '')
  return seed ? { token: seed, expiresAt: null, refreshedAt: null, source: 'env' } : null
}

export async function readToken() {
  const record = await readTokenRecord()
  return record?.token || ''
}

/**
 * Exchanges a long-lived token for a fresh one. Instagram requires the token to
 * be at least 24 hours old and not yet expired; an expired token cannot be
 * refreshed at all and needs a manual re-authorisation.
 */
export async function refreshToken(currentToken) {
  const url = `${GRAPH.replace('/v21.0', '')}/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(currentToken)}`
  const res = await fetch(url)
  const data = await res.json()
  if (!res.ok || data.error || !data.access_token) {
    // Deliberately does not include the response body: it can echo the token.
    throw new Error(`refresh_access_token failed with status ${res.status}`)
  }
  const now = Date.now()
  return {
    token: data.access_token,
    expiresAt: new Date(now + Number(data.expires_in || 0) * 1000).toISOString(),
    refreshedAt: new Date(now).toISOString(),
  }
}

export function daysLeft(expiresAt) {
  if (!expiresAt) return null
  return Math.floor((new Date(expiresAt).getTime() - Date.now()) / 86400000)
}

/** Walks the whole feed. Children are deliberately left out — they are fetched
 *  per media later, and only for the posts we actually store. */
export async function fetchFeed(token, { maxPages = 12, pageSize = 100 } = {}) {
  const fields = ['id', 'caption', 'media_type', 'media_url', 'thumbnail_url', 'permalink', 'timestamp'].join(',')
  const posts = []
  let url = `${GRAPH}/me/media?fields=${fields}&limit=${pageSize}&access_token=${encodeURIComponent(token)}`
  let pages = 0

  while (url && pages < maxPages) {
    const res = await fetch(url)
    const data = await res.json()
    if (data.error) throw new Error(`feed page ${pages + 1}: ${data.error.type || 'error'} ${data.error.code || ''}`)
    posts.push(...(data.data || []))
    pages += 1
    url = data.paging?.next || ''
  }

  return { posts, pages }
}

/** Carousel slides for one media id, in their original order. */
export async function fetchChildren(token, mediaId) {
  const url = `${GRAPH}/${mediaId}?fields=children{id,media_type,media_url,thumbnail_url}&access_token=${encodeURIComponent(token)}`
  const res = await fetch(url)
  const data = await res.json()
  if (data.error) throw new Error(`children ${mediaId}: ${data.error.type || 'error'}`)
  return (data.children?.data || []).map((child) => ({
    id: child.id,
    media_type: child.media_type,
    url: child.media_url || '',
    thumb: child.media_type === 'VIDEO' ? child.thumbnail_url || null : null,
  }))
}

/** Cover image for the grid: a video shows its poster, never the video file. */
export function thumbFor(post) {
  if (post.media_type === 'VIDEO') return post.thumbnail_url || post.media_url || ''
  return post.media_url || post.thumbnail_url || ''
}

/**
 * Rebuilds the curated list from a feed snapshot.
 *
 * Media fields are replaced, editorial fields are carried through untouched:
 * caption, category, visible and pinned belong to the admin UI, and the order
 * of the array is the running order of the gallery. Entries the feed no longer
 * returns are left exactly as they are rather than dropped.
 */
export function buildNextCurated({ curated, byId, childrenById, freshPosts, syncedAt }) {
  let updated = 0

  const merged = curated.map((entry) => {
    const post = byId.get(entry.id)
    if (!post) return entry
    updated += 1
    return {
      ...entry,
      media_type: post.media_type,
      permalink: post.permalink || entry.permalink || '',
      thumb: thumbFor(post),
      videoUrl: post.media_type === 'VIDEO' ? post.media_url || null : null,
      children: childrenById.get(entry.id) ?? entry.children ?? [],
      sourceCaption: post.caption || '',
      takenAt: post.timestamp || entry.takenAt || null,
      syncedAt,
    }
  })

  for (const post of freshPosts) {
    merged.push({
      id: post.id,
      media_type: post.media_type,
      permalink: post.permalink || '',
      thumb: thumbFor(post),
      videoUrl: post.media_type === 'VIDEO' ? post.media_url || null : null,
      children: childrenById.get(post.id) ?? [],
      caption: '',
      sourceCaption: post.caption || '',
      category: '',
      visible: false,
      pinned: false,
      takenAt: post.timestamp || null,
      syncedAt,
    })
  }

  return { merged, updated, added: freshPosts.length }
}

/** Small pool so a few hundred lookups neither stall the function nor trip the
 *  API's rate limit. */
export async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length)
  let cursor = 0
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++
      results[index] = await worker(items[index], index)
    }
  })
  await Promise.all(runners)
  return results
}
