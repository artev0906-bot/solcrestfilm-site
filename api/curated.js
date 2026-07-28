/**
 * Vercel Serverless Function — Curated posts CMS
 * GET  /api/curated           → returns the full curated posts list
 * GET  /api/curated?view=grid → same list, tile fields only
 * POST /api/curated           → saves curated posts list (requires password)
 *
 * The stored entries carry carousel slides and the original Instagram caption,
 * which a grid of thumbnails never reads — and those two fields are most of the
 * payload. `view=grid` drops them so a page that only renders tiles does not
 * download the lightbox data with them. Redis is untouched either way.
 */

import { Redis } from '@upstash/redis'

const redis = new Redis({
  url:   process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
})

/**
 * Fields a thumbnail grid actually reads. `pinned` is in the list because the
 * homepage picks its category showcase from it — without the flag that section
 * would silently fall back to a plain feed.
 */
function toGridEntry(post) {
  return {
    id: post.id,
    visible: post.visible,
    thumb: post.thumb,
    permalink: post.permalink,
    media_type: post.media_type,
    caption: post.caption,
    category: post.category,
    pinned: post.pinned,
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://solcrestfilm.com')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()

  // GET — return curated list (public)
  if (req.method === 'GET') {
    try {
      const posts = (await redis.get('curated')) ?? []
      const view = String(req.query?.view || '')
      const payload = view === 'grid' ? posts.map(toGridEntry) : posts
      res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=120')
      return res.status(200).json({ posts: payload })
    } catch (err) {
      console.error('Redis get error:', err)
      return res.status(200).json({ posts: [] }) // fail gracefully
    }
  }

  // POST — save curated list (password protected)
  if (req.method === 'POST') {
    const adminPass = (process.env.ADMIN_PASSWORD || '').trim()
    let body = req.body
    if (typeof body === 'string') {
      try { body = JSON.parse(body) } catch { return res.status(400).json({ error: 'Invalid JSON' }) }
    }

    if (!adminPass || body?.password !== adminPass) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    // Password-only check (no save needed)
    if (body._check) {
      return res.status(200).json({ ok: true })
    }

    try {
      await redis.set('curated', body.posts ?? [])
      return res.status(200).json({ ok: true })
    } catch (err) {
      console.error('Redis set error:', err)
      return res.status(500).json({ error: 'Save failed' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
