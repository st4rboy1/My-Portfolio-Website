'use client'

import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Experience } from '@/components/sections/experience'
import { Hero } from '@/components/sections/hero'
import { Navbar } from '@/components/sections/navbar'
import { Projects } from '@/components/sections/projects'
import { useEffect, useState } from 'react'

const sectionIds = ['about', 'experience', 'projects', 'contact']

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let nextSection = ''
        let highestRatio = 0

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= highestRatio) {
            highestRatio = entry.intersectionRatio
            nextSection = entry.target.id
          }
        }

        if (nextSection) {
          setActiveSection(nextSection)
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: '-20% 0px -50% 0px',
      }
    )

    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    }

    return () => observer.disconnect()
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <main id="main" className="overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© {currentYear} ckmasangcay. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
