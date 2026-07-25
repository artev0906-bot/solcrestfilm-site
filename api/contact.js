/**
 * Vercel Serverless Function — Contact form proxy
 * POST /api/contact → forwards to n8n webhook
 * Handles both application/json and multipart/form-data (with file uploads)
 */

// Disable Vercel's automatic body parsing so we can forward raw multipart data
export const config = { api: { bodyParser: false } }

const N8N_WEBHOOK = 'https://artev0906.app.n8n.cloud/webhook/solcrest-website-lead'
const ALLOWED_ORIGIN = 'https://solcrestfilm.com'

export default async function handler(req, res) {
  // CORS — only allow our own domain
  const origin = req.headers.origin || ''
  if (origin === ALLOWED_ORIGIN || process.env.NODE_ENV === 'development') {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const contentType = req.headers['content-type'] || ''

    // Collect raw body chunks
    const chunks = []
    for await (const chunk of req) chunks.push(chunk)
    const rawBody = Buffer.concat(chunks)

    const n8nRes = await fetch(N8N_WEBHOOK, {
      method: 'POST',
      headers: { 'content-type': contentType },
      body: rawBody,
    })

    if (!n8nRes.ok) {
      throw new Error(`n8n responded with ${n8nRes.status}`)
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact proxy error:', err)
    return res.status(500).json({ error: 'Failed to forward submission' })
  }
}
