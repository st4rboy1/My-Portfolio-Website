'use client'

import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

interface ExperienceItem {
  title: string
  company: string
  period: string
  current?: boolean
  highlights: string[]
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Full Stack Developer Intern (Solo)',
    company: 'Titan Collection and Credit Management Inc. · Manila, PH',
    period: 'Feb 2026 – May 2026',
    current: false,
    highlights: [
      'Engineered a 12-module Material Management System as the sole developer, replacing company-wide Excel-based inventory tracking for 11–20 active users.',
      'Architected the full stack independently using React 18, TypeScript, Node.js/Express, PostgreSQL via Prisma ORM, Docker, and GitHub Actions.',
      'Built a CI/CD pipeline with 4 automated security tools and 109 automated tests across unit, integration, component, E2E (Playwright), and load (k6) layers.',
    ],
    skills: ['React 18', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Docker', 'GitHub Actions', 'Playwright', 'k6'],
  },
  {
    title: 'Full Stack Developer — Capstone Project',
    company: 'Christian Bible Heritage Learning Center',
    period: 'Feb 2025 – Nov 2025',
    current: false,
    highlights: [
      'Built multi-role authorization for 5 user types using Spatie Laravel Permission with 11 access control policies.',
      'Developed billing, invoicing, and payment tracking modules with invoice auto-generation and document workflows.',
      'Implemented PDF report generation, a 16-type email notification system via Resend, and CI/CD automation with 7 parallel GitHub Actions jobs.',
    ],
    skills: ['Laravel 12', 'React 18', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Docker', 'GitHub Actions', 'Pest PHP'],
  },
  {
    title: 'Junior Front-End Developer',
    company: 'Smart Hyperion · London, UK (Remote)',
    period: 'Jan 2021 – Dec 2022',
    highlights: [
      'Contributed to end-to-end design, development, and deployment of a web application.',
      'Built containerized component-based UI features using React, HTML, CSS, and JavaScript.',
      'Collaborated on implementation details and shipping updates in a remote environment.',
    ],
    skills: ['React', 'HTML', 'CSS', 'JavaScript'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 relative" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block" aria-hidden="true" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 ${
                      exp.current
                        ? 'bg-primary/20 border-primary text-primary'
                        : 'bg-white/10 border-white/20 text-muted-foreground'
                    }`}>
                      <Briefcase className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    className="flex-1 p-6 md:p-8 rounded-lg glass-morphism hover:bg-white/15 transition-all duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.title}</h3>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/25">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-semibold mt-1">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap font-medium px-3 py-1.5 rounded-lg bg-white/5 self-start">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 text-base text-muted-foreground leading-relaxed mb-5 list-disc pl-5">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>{highlight}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 rounded-full text-xs md:text-sm bg-white/10 text-primary font-medium"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
