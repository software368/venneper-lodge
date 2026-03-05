import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { menuHighlights } from '../../lib/content'

export default function MenuHighlights() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label={menuHighlights.sectionLabel}
          title={menuHighlights.title}
          description={menuHighlights.description}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {menuHighlights.dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4]"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-lodge/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-lg font-semibold text-warm-white">
                {dish.name}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/menu"
            className="inline-block rounded-full border-2 border-forest-green px-8 py-3 font-semibold text-forest-green transition-all hover:bg-forest-green hover:text-warm-white"
          >
            {menuHighlights.buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
