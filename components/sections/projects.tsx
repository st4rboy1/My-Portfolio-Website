'use client'

import Image from 'next/image'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { SectionHeading } from '@/components/section-heading'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface Project {
  title: string
  description: string
  fullDescription?: string
  features?: string[]
  myRole?: string
  tags: string[]
  image: string
  github: string
  live: string
  badge?: string
  isPartOfCapstone?: boolean
  isFeatured?: boolean
}

const GITHUB_REPO = 'https://github.com/st4rboy1'

const projects: Project[] = [
  {
    title: 'Material Management System',
    description:
      'Solo-built 12-module Material Management System deployed at Titan Collection and Credit Management Inc., replacing company-wide Excel-based inventory tracking for 11–20 active users. Delivered production-ready within 3 months.',
    fullDescription:
      'A comprehensive, production-ready Material Management System built solo in 3 months for Titan Collection and Credit Management Inc. Replaces Excel-based inventory tracking with a real-time analytics dashboard, purchase order lifecycle management, automated low-stock email alerts, and a full audit log — providing management visibility previously unavailable.',
    myRole:
      'Sole developer — owned all frontend, backend, database design, and internal server deployment. Built React 18 + TypeScript frontend, Node.js/Express backend with 40+ REST endpoints, PostgreSQL via Prisma ORM, Docker deployment, and a GitHub Actions CI/CD pipeline with 4 security tools and 109 automated tests (unit, integration, component, E2E with Playwright, load with k6).',
    features: [
      '12 fully integrated modules',
      'Real-time analytics dashboard',
      'Purchase order lifecycle management',
      'Automated low-stock email alerts',
      'Full audit log & activity tracking',
      '40+ REST endpoints (Node.js/Express)',
      '109 automated tests across 5 layers',
      '4 security tools in CI/CD pipeline',
    ],
    tags: ['React 18', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Docker', 'GitHub Actions', 'Playwright', 'k6'],
    image: '/projects/material-management-system.jpg',
    github: GITHUB_REPO,
    live: '',
    badge: 'Solo Internship Project',
    isFeatured: true,
  },
  {
    title: 'Web-Based Enrollment System',
    description:
      'Production-grade enrollment system for Christian Bible Heritage Learning Center built with a team of 4. Covers the full student enrollment lifecycle: multi-role access control, billing & invoicing, document management, email notifications, and PDF report generation.',
    fullDescription:
      'A comprehensive, production-grade enrollment system built for Christian Bible Heritage Learning Center. Handles the full student enrollment lifecycle with sophisticated role-based access control, financial management, document verification, and automated communications. Built with a team of 4, deployed via Docker and GitHub Actions CI/CD.',
    myRole:
      'Key contributor with the team (1,575+ commits total). Built multi-role authorization (5 roles, 11 access control policies), billing, invoicing, payment tracking, document management, and 16-type email notification system via Resend. Contributed to CI/CD pipeline with 7 parallel GitHub Actions jobs and 50% minimum coverage across 163 test files.',
    features: [
      'Multi-role authorization — 5 roles, 11 policies',
      'Guardian & student management interface',
      'Automated billing and invoice generation',
      'Document upload and verification workflows',
      'Email notification system — 16 types via Resend',
      'PDF report generation (DomPDF)',
      'Docker containerization + GitHub Actions CI/CD',
      '163 test files, Pest PHP + PHPStan/Larastan',
    ],
    tags: ['Laravel 12', 'React 18', 'Inertia.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Docker'],
    image: '/projects/enrollment-system.jpg',
    github: GITHUB_REPO,
    live: '',
    badge: 'Capstone Project',
    isFeatured: true,
  },
  {
    title: 'TrustABro Website',
    description:
      'A responsive business website for TrustABro focused on clear service presentation, mobile-friendly sections, and a conversion-oriented contact flow.',
    fullDescription:
      'A polished website built for TrustABro with a strong emphasis on clean layout, responsive design, and user-friendly navigation. The project presents the brand clearly and makes it easy for visitors to understand the offering and get in touch.',
    myRole:
      'Developed the website structure, responsive sections, and content presentation to keep the experience clear across desktop and mobile.',
    tags: ['Website Design', 'Responsive UI', 'Frontend Development'],
    image: '/projects/trustabro-website.jpg',
    github: 'https://github.com/st4rboy1/TrustABro-Website',
    live: 'https://trust-a-bro-website.vercel.app/#how-it-works',
    badge: 'Website Project',
    isFeatured: true,
  },
  {
    title: 'Digital Equity Website',
    description:
      'A responsive website for Digital Equity designed to present information clearly, support accessibility, and work well across screen sizes.',
    fullDescription:
      'A modern website experience for Digital Equity that focuses on clear communication, responsive layouts, and accessible presentation. The project is structured to help visitors quickly understand the content and navigate through the site smoothly.',
    myRole:
      'Built the front-facing website experience with attention to structure, readability, and responsive behavior.',
    tags: ['Website Design', 'Accessibility', 'Responsive UI'],
    image: '/projects/digital-equity-website.jpg',
    github: 'https://github.com/st4rboy1/Digital-Equity-Website',
    live: 'https://digital-equity-two.vercel.app/',
    badge: 'Website Project',
    isFeatured: true,
  },
]

const moduleProjects: Project[] = [
  {
    title: 'Billing & Invoice Module',
    description:
      'Guardian-focused billing system with automated invoice generation, payment tracking, and email notifications.',
    fullDescription:
      'A sophisticated billing module designed for guardians to manage tuition and fees. Automates invoice generation, tracks payment status, and sends timely notifications about pending and confirmed payments.',
    myRole: 'Sole developer for this module. Built the invoice generation pipeline, PDF export, and payment status tracking from scratch.',
    features: [
      'Automated invoice generation on enrollment',
      'Payment status tracking & history',
      'Email notifications for invoices and reminders',
      'Guardian portal for viewing invoices',
      'PDF invoice download via DomPDF',
      'Comprehensive financial reporting dashboard',
    ],
    tags: ['Laravel 12', 'React 18', 'DomPDF', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80',
    github: GITHUB_REPO,
    live: '',
    isPartOfCapstone: true,
  },
  {
    title: 'Multi-Role Authorization',
    description:
      'Granular access control for 5 user roles — Super Admin, Admin, Registrar, Guardian, and Student — using Spatie Laravel Permission.',
    fullDescription:
      'Built with Spatie Laravel Permission, this module provides granular role-based access control across all system features. Each role has specific permissions tuned to their responsibilities, with activity logging and audit trails.',
    myRole: 'Designed the permission matrix and implemented role assignment, guards, and middleware across the entire application.',
    features: [
      'Super Admin — full system control',
      'Admin — system management and reporting',
      'Registrar — student records management',
      'Guardian — financial and student info access',
      'Student — personal records and account',
      'Granular permission assignment per role',
      'Activity logging and audit trails',
    ],
    tags: ['Laravel 12', 'Spatie Permission', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop&q=80',
    github: GITHUB_REPO,
    live: '',
    isPartOfCapstone: true,
  },
  {
    title: 'Document Management',
    description:
      'Upload, verify, and reject student documents with a full approval workflow — integrated into the enrollment system.',
    fullDescription:
      'Handles student record documentation with a complete verification workflow. Documents uploaded by guardians are reviewed by administrators, and can be approved or rejected with structured feedback.',
    myRole: 'Built the document upload UI, verification dashboard, and rejection feedback mechanism.',
    features: [
      'Document upload interface for guardians',
      'Document categorization and organization',
      'Admin verification workflow',
      'Rejection with structured feedback',
      'Document history and version tracking',
      'Secure file storage and retrieval',
    ],
    tags: ['React 18', 'Laravel 12', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=400&fit=crop&q=80',
    github: GITHUB_REPO,
    live: '',
    isPartOfCapstone: true,
  },
  {
    title: 'Email Notification System',
    description:
      '16-type automated notification system for enrollment status, document updates, payment events, and system announcements.',
    fullDescription:
      'Keeps all stakeholders informed with 16 distinct notification types covering enrollment progress, document status, payments, and system events. Built with queued jobs for reliability.',
    myRole: 'Designed the notification taxonomy and implemented queued mail delivery, template system, and notification logs.',
    features: [
      'Enrollment & admission status notifications',
      'Document verification alerts',
      'Payment reminders and confirmations',
      'System announcement distribution',
      'Customizable email templates',
      'Queued delivery and notification history',
    ],
    tags: ['Laravel 12', 'Laravel Mail', 'Queue'],
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop&q=80',
    github: GITHUB_REPO,
    live: '',
    isPartOfCapstone: true,
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showModules, setShowModules] = useState(false)

  return (
    <section id="projects" className="py-20 md:py-32 px-4 relative" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A set of production systems and client work that show product thinking, execution depth, and polish."
          />
        </ScrollReveal>

        {/* Featured projects */}
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={0.1}>
            <motion.div
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-xl overflow-hidden glass-morphism hover:bg-white/20 transition-all duration-300 cursor-pointer mb-8 md:mb-12"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Featured badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                  {project.badge}
                </span>
              </div>

              <div className="md:grid md:grid-cols-2 md:min-h-[340px]">
                {/* Image */}
                <div className="relative h-56 md:h-auto overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 hidden md:block" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-base text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 rounded-full text-xs bg-white/10 text-primary font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <ChevronRight className="w-4 h-4" />
                      Click to see full details
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* Capstone sub-modules */}
        <ScrollReveal delay={0.2}>
          <div className="border border-white/10 rounded-xl p-6 md:p-8 glass-morphism">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">Enrollment System Sub-Modules</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Individual modules built within the enrollment system above — each a significant piece of engineering on its own.
                </p>
              </div>
              <motion.button
                onClick={() => setShowModules(!showModules)}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1 flex-shrink-0"
                whileTap={{ scale: 0.95 }}
                aria-expanded={showModules}
              >
                {showModules ? 'Hide modules' : 'Show modules'}
                <ChevronRight className={`w-4 h-4 transition-transform ${showModules ? 'rotate-90' : ''}`} />
              </motion.button>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {moduleProjects.map((m) => (
                <span key={m.title} className="px-3 py-1 rounded-full text-xs bg-white/5 text-muted-foreground border border-white/10">
                  {m.title}
                </span>
              ))}
            </div>

            {showModules && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-4 mt-6"
              >
                {moduleProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    onClick={() => setSelectedProject(project)}
                    className="group relative rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={project.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-xs font-medium text-white/60 border border-white/20 rounded px-2 py-0.5 bg-black/30">
                        Part of Capstone
                      </span>
                    </div>

                    <div className="p-5">
                      <h4 className="text-base font-bold mb-1.5 text-foreground">{project.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2.5 py-0.5 rounded-full text-xs bg-white/10 text-primary font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </ScrollReveal>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-bold">{selectedProject.title}</DialogTitle>
                {selectedProject.isPartOfCapstone && (
                  <p className="text-sm text-muted-foreground">Part of the Web-Based Enrollment System capstone</p>
                )}
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Image */}
                <div className="rounded-lg overflow-hidden h-64 relative">
                  <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.title} screenshot`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overview */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                {/* My Role */}
                {selectedProject.myRole && (
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/15">
                    <h3 className="text-sm font-semibold text-primary mb-1">My Contribution</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.myRole}</p>
                  </div>
                )}

                {/* Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-2">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${selectedProject.title} on GitHub`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    View Code on GitHub
                  </motion.a>
                  {selectedProject.live ? (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo of ${selectedProject.title}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-sm font-medium text-muted-foreground bg-white/5">
                      <ExternalLink className="w-5 h-5" />
                      Live demo unavailable
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
