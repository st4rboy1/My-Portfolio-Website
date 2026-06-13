import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { AnimatedBackground } from '@/components/animated-background'

import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Christian Kyle Masangcay | Full Stack Developer',
  description: 'Christian Kyle Masangcay — IT student and full-stack developer specializing in Laravel 12, React 18, and production-grade web systems. Based in Metro Manila, Philippines.',
  openGraph: {
    title: 'Christian Kyle Masangcay | Full Stack Developer',
    description: 'IT student and full-stack developer specializing in Laravel 12, React 18, and production-grade web systems. Based in Metro Manila, Philippines.',
    url: 'https://ckmasangcay.vercel.app',
    siteName: 'Kyle Masangcay Portfolio',
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christian Kyle Masangcay | Full Stack Developer',
    description: 'IT student and full-stack developer specializing in Laravel 12, React 18, and production-grade web systems.',
    creator: '@kaayl_x',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://ckmasangcay.vercel.app',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Christian Kyle Masangcay',
              url: 'https://ckmasangcay.vercel.app',
              jobTitle: 'Full Stack Developer',
              email: 'masangcaykyle11@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Metro Manila',
                addressCountry: 'PH',
              },
              sameAs: [
                'https://github.com/st4rboy1',
                'https://www.linkedin.com/in/kyle-masangcay-12a9923a7/',
                'https://x.com/kaayl_x',
              ],
            }),
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
