import { ArrowLeft } from 'lucide-react'

export default function ResumePreviewPage() {
  return (
    <main className="min-h-screen px-4 py-8 md:py-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Resume Preview</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Christian Kyle Masangcay</h1>
            <p className="text-muted-foreground mt-2">Preview the same single-page resume that the download button serves.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/10 text-foreground font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
          <iframe
            src="/resume.pdf?preview=1"
            title="Christian Kyle Masangcay resume preview"
            className="w-full h-[85vh] bg-white"
          />
        </div>
      </div>
    </main>
  )
}