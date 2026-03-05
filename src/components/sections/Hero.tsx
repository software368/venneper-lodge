import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden grain-overlay">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
        role="img"
        aria-label="Venneper Lodge aan de rand van het Venneperhout"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-lodge/80 via-deep-lodge/40 to-deep-lodge/20" />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-warm-white"
        >
          Venneper Lodge
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 text-xl sm:text-2xl text-warm-sand/90 font-light tracking-wide"
        >
          Een hippe plek voor ALLE leeftijden
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <Link
            to="/contact#reserveren"
            className="inline-block rounded-full bg-burnt-amber px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-burnt-amber/90 hover:scale-105 shadow-lg shadow-burnt-amber/30"
          >
            Reserveer een tafel
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-warm-sand/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-warm-sand/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
