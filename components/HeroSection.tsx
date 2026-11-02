'use client'

import { motion } from 'framer-motion'
import config from '@/data/config.json'

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 px-4 overflow-hidden">
      {/* Fondo animado con Framer Motion */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'linear-gradient(90deg, #0a1428 0%, #1a2d54 25%, #dc2626 50%, #1a2d54 75%, #0a1428 100%)',
            'linear-gradient(90deg, #1a2d54 0%, #dc2626 25%, #1a2d54 50%, #0a1428 75%, #1a2d54 100%)',
            'linear-gradient(90deg, #dc2626 0%, #1a2d54 25%, #0a1428 50%, #1a2d54 75%, #dc2626 100%)',
            'linear-gradient(90deg, #0a1428 0%, #1a2d54 25%, #dc2626 50%, #1a2d54 75%, #0a1428 100%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {config.titulo}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {config.subtitulo}
        </motion.p>

        <motion.div
          className="pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#catalogo"
            className="inline-block bg-accent-red hover:bg-accent-red-light text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-accent-red/30"
          >
            Explorar Catálogo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
