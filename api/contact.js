/**
 * Vercel Serverless Function — Contact form proxy
 * POST /api/contact → forwards to n8n webhook
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const N8N_WEBHOOK = 'https://artev0906.app.n8n.cloud/webhook/solcrest-website-lead'

  try {
    const body = req.body
    const payload = typeof body === 'string' ? body : JSON.stringify(body)

    const n8nRes = await fetch(N8N_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
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
