import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { reservationCta } from '../../lib/content'

export default function ReservationCTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-forest-green grain-overlay overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-burnt-amber text-sm font-semibold uppercase tracking-widest">
              {reservationCta.label}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm-white mt-2">
              {reservationCta.heading}
            </h2>
            <p className="mt-4 text-warm-sand/80 text-lg leading-relaxed">
              {reservationCta.text}
            </p>
            <Link
              to={reservationCta.buttonLink}
              className="inline-block mt-8 rounded-full bg-burnt-amber px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-burnt-amber/90 hover:scale-105"
            >
              {reservationCta.buttonText}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-warm-sand/80"
          >
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-burnt-amber shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-warm-white">Adres</p>
                <p>{reservationCta.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={24} className="text-burnt-amber shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-warm-white">Openingstijden</p>
                <p>{reservationCta.openWeekdays}</p>
                <p>{reservationCta.openWeekends}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={24} className="text-burnt-amber shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-warm-white">Telefoon</p>
                <a href={`tel:${reservationCta.phone.replace(/\s/g, '')}`} className="hover:text-warm-white transition-colors">{reservationCta.phone}</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
