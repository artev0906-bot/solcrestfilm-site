/**
 * Vercel Serverless Function — daily Instagram maintenance
 * GET /api/ig-cron   (Authorization: Bearer $CRON_SECRET)
 *
 * Two jobs, in order:
 *   1. Refresh the access token when it is inside its last 30 days.
 *   2. Re-read the feed and refresh the media URLs stored in `curated`.
 *
 * Instagram CDN URLs are signed and expire, so the stored copies have to be
 * rewritten regularly or the gallery quietly fills with broken images. Only the
 * media fields are touched: caption, category, visible, pinned and the order of
 * the array belong to the admin UI and are never overwritten here.
 *
 * Nothing is written unless the whole pass succeeded, and the previous value is
 * copied to `curated:backup` first.
 */

import {
  redis,
  TOKEN_KEY,
  STATUS_KEY,
  META_KEY,
  CURATED_KEY,
  BACKUP_KEY,
  isAuthorized,
  readTokenRecord,
  refreshToken,
  daysLeft,
  fetchFeed,
  fetchChildren,
  mapWithConcurrency,
  buildNextCurated,
} from './_ig.js'

const REFRESH_WHEN_DAYS_LEFT_BELOW = 30
const CHILDREN_CONCURRENCY = 6

export default async function handler(req, res) {
  if (!isAuthorized(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const startedAt = Date.now()
  const status = {
    finishedAt: null,
    ok: false,
    tokenRefreshed: false,
    pagesFetched: 0,
    postsSeen: 0,
    matched: 0,
    updated: 0,
    added: 0,
    childrenFetched: 0,
    durationMs: 0,
  }

  try {
    // ── 1. Token ──────────────────────────────
    let record = await readTokenRecord()
    if (!record?.token) throw new Error('No Instagram token available')

    const left = daysLeft(record.expiresAt)
    if (left === null || left < REFRESH_WHEN_DAYS_LEFT_BELOW) {
      record = { ...(await refreshToken(record.token)), source: 'cron' }
      await redis.set(TOKEN_KEY, record)
      status.tokenRefreshed = true
    }
    const token = record.token

    // ── 2. Feed ───────────────────────────────
    const { posts, pages } = await fetchFeed(token)
    status.pagesFetched = pages
    status.postsSeen = posts.length
    if (posts.length === 0) throw new Error('Feed returned no posts')

    const byId = new Map(posts.map((post) => [post.id, post]))

    const curated = (await redis.get(CURATED_KEY)) ?? []
    if (!Array.isArray(curated)) throw new Error('curated is not an array')

    const matched = curated.filter((entry) => byId.has(entry.id))
    status.matched = matched.length
    if (curated.length > 0 && matched.length === 0) {
      throw new Error('No stored post matched the feed — refusing to write')
    }

    // ── 3. New posts ──────────────────────────
    // "New" means published after the newest post we had seen on a previous
    // run. Without that boundary the first sync would sweep in the entire back
    // catalogue as unpublished entries.
    const meta = (await redis.get(META_KEY)) ?? {}
    const newestSeen = meta.newestTimestamp || null
    const knownIds = new Set(curated.map((entry) => entry.id))
    const freshPosts = newestSeen
      ? posts.filter((post) => !knownIds.has(post.id) && post.timestamp > newestSeen)
      : []

    // ── 4. Children, only where they are needed ──
    const needChildren = [
      ...matched.filter((entry) => byId.get(entry.id).media_type === 'CAROUSEL_ALBUM').map((entry) => entry.id),
      ...freshPosts.filter((post) => post.media_type === 'CAROUSEL_ALBUM').map((post) => post.id),
    ]
    const childrenById = new Map()
    await mapWithConcurrency(needChildren, CHILDREN_CONCURRENCY, async (id) => {
      childrenById.set(id, await fetchChildren(token, id))
    })
    status.childrenFetched = childrenById.size

    // ── 5. Merge ──────────────────────────────
    const syncedAt = new Date().toISOString()
    const { merged: nextCurated, updated, added } = buildNextCurated({
      curated,
      byId,
      childrenById,
      freshPosts,
      syncedAt,
    })
    status.updated = updated
    status.added = added

    // ── 6. Write ──────────────────────────────
    if (curated.length > 0) await redis.set(BACKUP_KEY, curated)
    await redis.set(CURATED_KEY, nextCurated)
    await redis.set(META_KEY, {
      ...meta,
      newestTimestamp: posts.reduce((max, p) => (p.timestamp > max ? p.timestamp : max), newestSeen || ''),
      backupAt: syncedAt,
    })

    status.ok = true
    status.durationMs = Date.now() - startedAt
    status.finishedAt = new Date().toISOString()
    await redis.set(STATUS_KEY, { lastSync: status, lastError: null })

    return res.status(200).json({ ok: true, ...status })
  } catch (err) {
    status.durationMs = Date.now() - startedAt
    status.finishedAt = new Date().toISOString()
    console.error('ig-cron failed:', err.message)
    const previous = (await redis.get(STATUS_KEY)) ?? {}
    await redis.set(STATUS_KEY, {
      ...previous,
      lastError: { message: err.message, at: status.finishedAt, stage: status },
    })
    return res.status(502).json({ ok: false, error: err.message })
  }
}
