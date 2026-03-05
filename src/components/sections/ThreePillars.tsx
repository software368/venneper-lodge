import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pillars } from '../../lib/content'

export default function ThreePillars() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.items.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link to={pillar.link} className="group block relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-lodge/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-warm-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-warm-sand/80 text-sm">
                    {pillar.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
