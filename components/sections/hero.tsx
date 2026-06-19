'use client'

import { TypingEffect } from '@/components/animations/typing-effect'
import { motion } from 'framer-motion'
import { ArrowDown, Download, FileText } from 'lucide-react'

export function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  const proofPoints = [
    { value: '2', label: 'Production systems shipped' },
    { value: '109', label: 'Automated tests across layers' },
    { value: '40+', label: 'REST endpoints built' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 md:pt-0 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
            Available for Full-Time & Remote Roles
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
        >
          Hi, I&apos;m <span className="gradient-text">Christian Kyle Masangcay</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-muted-foreground mb-4 leading-relaxed"
        >
          <TypingEffect words={['Full Stack Developer', 'Node.js & React Specialist', 'Laravel & TypeScript Dev', 'DevOps & CI/CD Advocate']} speed={60} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Full-stack developer with two production systems — a solo-built Material Management System
          (Node.js/Express, React, PostgreSQL) and a team-built enrollment system with 1,575+ commits.
          Proficient in CI/CD, Docker, and multi-layer automated testing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto mb-8"
        >
          {proofPoints.map((point) => (
            <div key={point.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-primary leading-none">{point.value}</div>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">{point.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"
        >
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-black/10"
          >
            Get In Touch
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary/40 text-foreground font-semibold hover:bg-white/10 transition-colors"
          >
            <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
            View Projects
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download="Christian-Kyle-Masangcay-Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-white/10 text-foreground font-semibold hover:bg-white/10 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
      </motion.button>
    </section>
  )
}
