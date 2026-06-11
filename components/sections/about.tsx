'use client'

import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { motion } from 'framer-motion'
import { Code, Database, Box, GitBranch, Server, Palette, Zap, Terminal } from 'lucide-react'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const techStackWithIcons = [
    {
      category: 'Languages',
      skills: [
        { name: 'PHP', icon: Code, primary: true },
        { name: 'JavaScript', icon: Code, primary: true },
        { name: 'TypeScript', icon: Code, primary: true },
        { name: 'SQL', icon: Database, primary: true },
        { name: 'HTML', icon: Code, primary: false },
        { name: 'CSS', icon: Palette, primary: false },
        { name: 'Java', icon: Code, primary: false },
        { name: 'C#', icon: Code, primary: false },
      ],
    },
    {
      category: 'Backend & DB',
      skills: [
        { name: 'Node.js', icon: Server, primary: true },
        { name: 'Express.js', icon: Server, primary: true },
        { name: 'Laravel 12', icon: Server, primary: true },
        { name: 'PostgreSQL', icon: Database, primary: true },
        { name: 'MySQL', icon: Database, primary: true },
        { name: 'Prisma ORM', icon: Database, primary: true },
        { name: 'Inertia.js', icon: Zap, primary: false },
        { name: 'Redis', icon: Database, primary: false },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React 18/19', icon: Zap, primary: true },
        { name: 'Tailwind CSS', icon: Palette, primary: true },
        { name: 'shadcn/ui', icon: Palette, primary: true },
        { name: 'Radix UI', icon: Palette, primary: false },
        { name: 'Recharts', icon: Zap, primary: false },
        { name: 'Vite', icon: Zap, primary: false },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: Box, primary: true },
        { name: 'GitHub Actions', icon: GitBranch, primary: true },
        { name: 'Git', icon: GitBranch, primary: true },
        { name: 'Playwright', icon: Terminal, primary: true },
        { name: 'Jest / Vitest', icon: Terminal, primary: true },
        { name: 'Laravel Forge', icon: Server, primary: false },
        { name: 'Swagger/OpenAPI', icon: Code, primary: false },
        { name: 'Trivy / Gitleaks', icon: Code, primary: false },
      ],
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-4 relative" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I&apos;m an IT student with full-stack development experience across two production systems — a solo-built <strong className="text-foreground">Material Management System</strong> deployed at Titan Collection and Credit Management Inc. (Node.js/Express, React, PostgreSQL), and a team-built enrollment system with <strong className="text-foreground">1,575+ commits</strong> (Laravel 12, React 18).
              </motion.p>
              <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I specialize in full-stack ownership, CI/CD pipelines, multi-layer automated testing, Docker containerization, and security scanning. My experience spans 40+ REST endpoints, multi-role authorization, document management, real-time analytics dashboards, and audit logging.
              </motion.p>
              <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I&apos;m passionate about clean, maintainable code and seamless user experiences. Currently seeking a <strong className="text-foreground">full-time or remote position</strong> to contribute immediately in a professional environment.
              </motion.p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4 text-center">By the numbers</p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { number: '2', label: 'Production Systems', sub: 'solo + team deployed' },
                  { number: '109', label: 'Automated Tests', sub: 'unit, integration, E2E, load' },
                  { number: '40+', label: 'REST Endpoints', sub: 'in solo-built MMS' },
                  { number: '1,575+', label: 'Commits', sub: 'on team enrollment system' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-5 md:p-6 rounded-lg glass-morphism hover:bg-white/20 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm md:text-base text-foreground font-medium">{stat.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </motion.div>

        {/* Tech Stack Section */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 md:mt-24">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold">Technical Stack</h3>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                  Highlighted = used in production
                </span>
              </p>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {techStackWithIcons.map((stack, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-lg glass-morphism hover:bg-white/15 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-lg font-semibold text-primary mb-6">{stack.category}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {stack.skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon
                      return (
                        <motion.div
                          key={skillIndex}
                          className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-colors cursor-default ${
                            skill.primary
                              ? 'bg-primary/10 hover:bg-primary/15 border border-primary/20'
                              : 'bg-white/5 hover:bg-white/10 opacity-60'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <IconComponent className={`w-5 h-5 ${skill.primary ? 'text-primary' : 'text-muted-foreground'}`} />
                          <span className={`text-xs text-center font-medium ${skill.primary ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {skill.name}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
