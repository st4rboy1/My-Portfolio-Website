'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className="fixed inset-0 -z-10 overflow-hidden bg-background" aria-hidden="true" />
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -30, 20, 0],
          y: [0, -50, 30, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-bl from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 30, -20, 0],
          y: [0, 50, -30, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -50, 20, 0],
          y: [0, -30, 50, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* Light mode additional blob */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.3, 0.5, 0.3, 0.3],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
