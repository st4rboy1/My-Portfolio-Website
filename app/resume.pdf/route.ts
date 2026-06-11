import { readFileSync } from 'fs'
import path from 'path'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  const resumePath = path.join(process.cwd(), 'MASANGCAY-RESUME-SINGLE-PAGE.pdf')
  const resumeBuffer = readFileSync(resumePath)
  const url = new URL(request.url)
  const previewMode = url.searchParams.get('preview') === '1' || url.searchParams.get('preview') === 'true'

  return new Response(resumeBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `${previewMode ? 'inline' : 'attachment'}; filename="Christian-Kyle-Masangcay-Resume.pdf"`,
      'Cache-Control': 'no-store',
    },
  })
}