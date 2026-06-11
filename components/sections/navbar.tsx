'use client'

import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface NavbarProps {
  activeSection: string
}

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism py-3 md:py-4' : 'py-6 md:py-8'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.button
          onClick={() => scrollToSection('about')}
          className="text-xl md:text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
          aria-label="Kyle Masangcay — scroll to top"
        >
          Kyle Masangcay
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === item.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-current={activeSection === item.id ? 'true' : undefined}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </motion.button>
          ))}

          {/* Download CV */}
          <motion.a
            href="/resume.pdf"
            download="Christian-Kyle-Masangcay-Resume.pdf"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-3.5 h-3.5" />
            CV
          </motion.a>

          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </motion.button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 glass-morphism-dark mt-2 mx-4 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-3 text-sm font-medium text-left transition-colors border-b border-white/10 last:border-b-0 ${
                activeSection === item.id
                  ? 'text-primary bg-white/5'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
              initial={{ opacity: 0 }}
              animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.label}
            </motion.button>
          ))}

          {/* Mobile Download CV */}
          <motion.a
            href="/resume.pdf"
            download="Christian-Kyle-Masangcay-Resume.pdf"
            className="px-4 py-3 text-sm font-medium text-left transition-colors border-t border-white/10 flex items-center gap-2 text-primary hover:bg-white/5"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: navItems.length * 0.05 }}
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.a>

          {/* Mobile Theme Toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="px-4 py-3 text-sm font-medium text-left transition-colors border-t border-white/10 flex items-center gap-2 hover:bg-white/5"
              initial={{ opacity: 0 }}
              animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: (navItems.length + 1) * 0.05 }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-600" />
                  <span>Dark Mode</span>
                </>
              )}
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.nav>
  )
}
