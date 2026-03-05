import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

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
              Reserveren
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm-white mt-2">
              Kom genieten en laat u verrassen!
            </h2>
            <p className="mt-4 text-warm-sand/80 text-lg leading-relaxed">
              Weer of geen weer, bij Venneper Lodge heten wij u te allen tijde hartelijk welkom. Jong en oud, groot en klein — het is een fijne plek voor iedereen.
            </p>
            <Link
              to="/contact#reserveren"
              className="inline-block mt-8 rounded-full bg-burnt-amber px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-burnt-amber/90 hover:scale-105"
            >
              Reserveer nu
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
                <p>Getsewoudweg 1, 2151 MS Nieuw Vennep</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={24} className="text-burnt-amber shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-warm-white">Openingstijden</p>
                <p>Zondag t/m donderdag: 09:00 — 21:00</p>
                <p>Vrijdag & zaterdag: 09:00 — 21:30</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={24} className="text-burnt-amber shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-warm-white">Telefoon</p>
                <a href="tel:0252348652" className="hover:text-warm-white transition-colors">0252 348 652</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
