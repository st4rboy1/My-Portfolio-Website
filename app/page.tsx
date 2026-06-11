'use client'

import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Experience } from '@/components/sections/experience'
import { Hero } from '@/components/sections/hero'
import { Navbar } from '@/components/sections/navbar'
import { Projects } from '@/components/sections/projects'
import { useEffect, useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
