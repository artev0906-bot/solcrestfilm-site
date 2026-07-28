/**
 * Vercel Serverless Function — sync health
 * GET /api/ig-status   (Authorization: Bearer $CRON_SECRET)
 *
 * Reports when the token expires and how the last sync went. The token itself
 * is never included, in whole or in part.
 */

import { redis, STATUS_KEY, META_KEY, isAuthorized, readTokenRecord, daysLeft } from './_ig.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!isAuthorized(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const record = await readTokenRecord()
  const status = (await redis.get(STATUS_KEY)) ?? {}
  const meta = (await redis.get(META_KEY)) ?? {}

  return res.status(200).json({
    token: record
      ? {
          expiresAt: record.expiresAt,
          daysLeft: daysLeft(record.expiresAt),
          refreshedAt: record.refreshedAt,
          source: record.source ?? 'redis',
        }
      : null,
    lastSync: status.lastSync ?? null,
    lastError: status.lastError ?? null,
    backupAt: meta.backupAt ?? null,
  })
}
