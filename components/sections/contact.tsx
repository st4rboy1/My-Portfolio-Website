'use client'

import React from "react"
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { SectionHeading } from '@/components/section-heading'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to send message')
      }
      
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again, or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      sublabel: 'masangcaykyle11@gmail.com',
      href: 'mailto:masangcaykyle11@gmail.com',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      sublabel: 'github.com/st4rboy1',
      href: 'https://github.com/st4rboy1',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      sublabel: 'in/kyle-masangcay',
      href: 'https://www.linkedin.com/in/kyle-masangcay-12a9923a7/',
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'X / Twitter',
      sublabel: '@kaayl_x',
      href: 'https://x.com/kaayl_x',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s Work Together"
            description="Open to junior roles, freelance discussions, and collaboration on practical products."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal delay={0.1}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              aria-label="Contact form"
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about the opportunity or project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading || submitted}
                whileHover={{ scale: !loading && !submitted ? 1.02 : 1 }}
                whileTap={{ scale: !loading && !submitted ? 0.98 : 1 }}
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : submitted ? '✓ Message sent!' : 'Send Message'}
              </motion.button>

              {error && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm" role="alert">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm" role="status">
                  Thanks for reaching out! I&apos;ll get back to you within 24–48 hours.
                </div>
              )}
            </motion.form>
          </ScrollReveal>

          {/* Social Links & Info */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m actively looking for full-time junior developer opportunities. Whether you have a role, a project, or just want to connect — feel free to reach out.
                </p>
              </div>

              {/* Availability */}
              <div className="p-4 rounded-lg bg-primary/8 border border-primary/20 flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary">Currently available</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Open to full-time roles · Usually responds within 24–48 hours
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Metro Manila, Philippines</p>
                  <p className="text-xs text-muted-foreground">Open to remote and on-site opportunities</p>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-2.5">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Connect</p>
                <div className="flex flex-col gap-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      aria-label={`${social.label}: ${social.sublabel}`}
                      className="flex items-center gap-3 p-3 rounded-lg glass-morphism text-foreground hover:text-primary hover:bg-white/20 transition-all group"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-muted-foreground group-hover:text-primary transition-colors">
                        {social.icon}
                      </span>
                      <div>
                        <p className="text-sm font-medium leading-none">{social.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{social.sublabel}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
