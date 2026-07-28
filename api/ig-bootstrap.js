/**
 * Vercel Serverless Function — one-off token bootstrap
 * GET /api/ig-bootstrap   (Authorization: Bearer $CRON_SECRET)
 *
 * Takes the token currently sitting in INSTAGRAM_TOKEN, refreshes it, and
 * stores the result in Redis so the daily cron can keep it alive from there.
 *
 * Run once, then set IG_BOOTSTRAP_ENABLED to anything other than "true".
 * The token is never returned in the response and never written to a log.
 */

import { redis, TOKEN_KEY, isAuthorized, refreshToken, daysLeft } from './_ig.js'

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if ((process.env.IG_BOOTSTRAP_ENABLED || '').trim() !== 'true') {
    return res.status(404).json({ error: 'Not found' })
  }

  if (!isAuthorized(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const seed = (process.env.INSTAGRAM_TOKEN || '').replace(/\s+/g, '')
  if (!seed) {
    return res.status(500).json({ error: 'INSTAGRAM_TOKEN is not set' })
  }

  try {
    const record = await refreshToken(seed)
    await redis.set(TOKEN_KEY, { ...record, source: 'bootstrap' })
    return res.status(200).json({
      ok: true,
      expiresAt: record.expiresAt,
      daysLeft: daysLeft(record.expiresAt),
      refreshedAt: record.refreshedAt,
    })
  } catch (err) {
    // err.message is written by refreshToken and contains no token material.
    console.error('ig-bootstrap failed:', err.message)
    return res.status(502).json({ ok: false, error: 'Token refresh failed' })
  }
}
