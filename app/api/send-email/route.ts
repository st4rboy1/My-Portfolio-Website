import emailjs from '@emailjs/browser'

const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const win = hits.get(ip)?.filter(t => now - t < 60_000) ?? []
  if (win.length >= 3) return true
  win.push(now)
  hits.set(ip, win)
  return false
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
  if (rateLimited(ip)) {
    return Response.json({ error: 'Too many requests' }, { status: 429 })
  }

  const { name, email, message } = await req.json()
  if (!name || !email || !message) {
    return Response.json({ error: 'Missing fields' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email' }, { status: 400 })
  }

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { from_name: name, from_email: email, message, to_email: 'masangcaykyle11@gmail.com' },
      process.env.EMAILJS_PUBLIC_KEY!
    )
    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Failed to send. Try again later.' }, { status: 500 })
  }
}
