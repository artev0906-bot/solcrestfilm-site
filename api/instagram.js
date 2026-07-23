/**
 * Vercel Serverless Function — Instagram Graph API proxy
 * GET /api/instagram?limit=50&cursor=xxx
 *
 * Environment variables required (set in Vercel dashboard):
 *   INSTAGRAM_USER_ID   — numeric Instagram Business account ID
 *   INSTAGRAM_TOKEN     — long-lived Page Access Token
 */

export default async function handler(req, res) {
  const token = (process.env.INSTAGRAM_TOKEN || '').replace(/\s+/g, '')
  const igUserId = (process.env.INSTAGRAM_USER_ID || '').trim()

  if (!token || !igUserId) {
    return res.status(500).json({ error: 'Instagram credentials not configured' })
  }

  const limit = Math.min(Number(req.query?.limit) || 50, 100)
  const cursor = req.query?.cursor || ''

  const fields = [
    'id',
    'caption',
    'media_type',
    'media_url',
    'thumbnail_url',
    'permalink',
    'timestamp',
    'children{id,media_url,thumbnail_url,media_type}',
  ].join(',')

  let url = `https://graph.instagram.com/v21.0/me/media?fields=${fields}&limit=${limit}&access_token=${encodeURIComponent(token)}`
  if (cursor) url += `&after=${encodeURIComponent(cursor)}`

  try {
    const igRes = await fetch(url)
    const data = await igRes.json()

    if (data.error) {
      console.error('Instagram API error:', data.error)
      return res.status(502).json({ error: data.error.message })
    }

    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200')
    res.setHeader('Content-Type', 'application/json')
    return res.status(200).json(data)
  } catch (err) {
    console.error('Fetch error:', err)
    return res.status(500).json({ error: 'Failed to fetch Instagram data' })
  }
}
