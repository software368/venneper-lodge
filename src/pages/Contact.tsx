import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'

const faqs = [
  { question: 'Is er parkeergelegenheid?', answer: 'Ja, wij beschikken over een ruim eigen parkeerterrein direct voor de deur. Parkeren is gratis.' },
  { question: 'Kunnen jullie rekening houden met allergieën?', answer: 'Zeker! Laat het ons weten bij de reservering of bij aankomst, en onze keuken past de gerechten aan. We houden rekening met glutenvrij, lactosevrij, noten en andere allergieën.' },
  { question: 'Hoe groot is de maximale groep?', answer: 'De ruimte bovenin het restaurant biedt de meeste privacy en heeft plaats voor maximaal 100 personen. Bij gezelschappen vanaf 20 personen doen wij een suggestie voor een menu.' },
  { question: 'Is het terras overdekt?', answer: 'Een deel van het terras is overdekt en voorzien van terrasverwarmers, zodat je ook bij wisselvallig weer buiten kunt genieten.' },
  { question: 'Zijn honden welkom?', answer: 'Honden zijn welkom op het terras. Wij zorgen voor een bakje water.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Contact & Reserveren"
        description="Reserveer een tafel bij Venneper Lodge in Nieuw-Vennep. Adres: Getsewoudweg 1. Bel 0252 348 652 of mail info@venneperlodge.nl. Gratis parkeren."
        path="/contact"
        schema={faqSchema}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact & Reserveren"
          title="Hartelijk welkom bij Venneper Lodge"
          description="Weer of geen weer, bij Venneper Lodge heten wij u te allen tijde hartelijk welkom. Reserveer een tafel of neem contact met ons op."
        />

        {/* Reservation + Contact info */}
        <div id="reserveren" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Reservation widget placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-warm-sand/30 p-8 sm:p-12 flex flex-col items-center justify-center min-h-[400px]"
          >
            <h3 className="font-display text-2xl font-bold text-charcoal mb-4">Reserveer een tafel</h3>
            <p className="text-charcoal/60 text-center mb-6">
              Hier wordt de reserveringswidget geladen.
            </p>
            <div className="w-full max-w-sm space-y-4">
              <div className="rounded-xl bg-white p-4 border border-warm-sand/50">
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Datum</label>
                <input type="date" className="w-full rounded-lg border border-warm-sand/50 px-3 py-2 text-charcoal" />
              </div>
              <div className="rounded-xl bg-white p-4 border border-warm-sand/50">
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Tijd</label>
                <input type="time" className="w-full rounded-lg border border-warm-sand/50 px-3 py-2 text-charcoal" />
              </div>
              <div className="rounded-xl bg-white p-4 border border-warm-sand/50">
                <label className="block text-sm font-medium text-charcoal/70 mb-1">Aantal personen</label>
                <select className="w-full rounded-lg border border-warm-sand/50 px-3 py-2 text-charcoal">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'persoon' : 'personen'}</option>
                  ))}
                </select>
              </div>
              <button className="w-full rounded-full bg-burnt-amber px-6 py-3 text-white font-semibold hover:bg-burnt-amber/90 transition-colors">
                Beschikbaarheid checken
              </button>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-burnt-amber shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-charcoal">Adres</p>
                  <p className="text-charcoal/70">Getsewoudweg 1, 2151 MS Nieuw Vennep</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-burnt-amber shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-charcoal">Telefoon</p>
                  <a href="tel:0252348652" className="text-charcoal/70 hover:text-burnt-amber transition-colors">0252 348 652</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-burnt-amber shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-charcoal">E-mail</p>
                  <a href="mailto:info@venneperlodge.nl" className="text-charcoal/70 hover:text-burnt-amber transition-colors">info@venneperlodge.nl</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={24} className="text-burnt-amber shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-charcoal">Openingstijden</p>
                  <p className="text-charcoal/70">Zondag t/m donderdag: 09:00 — 21:00</p>
                  <p className="text-charcoal/70">Vrijdag & zaterdag: 09:00 — 21:30</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden aspect-video bg-warm-sand/30">
              <iframe
                title="Venneper Lodge locatie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.5!2d4.6355!3d52.2630!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e5c6c99e9b7d%3A0x1234567890abcdef!2sGetsewoudweg%201%2C%202151%20MS%20Nieuw-Vennep!5e0!3m2!1snl!2snl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-24"
        >
          <h3 className="font-display text-2xl font-bold text-center mb-8">Stuur ons een bericht</h3>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Naam" className="rounded-xl border border-warm-sand/50 px-4 py-3 bg-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-forest-green/30" />
              <input type="email" placeholder="E-mailadres" className="rounded-xl border border-warm-sand/50 px-4 py-3 bg-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-forest-green/30" />
            </div>
            <input type="text" placeholder="Onderwerp" className="w-full rounded-xl border border-warm-sand/50 px-4 py-3 bg-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-forest-green/30" />
            <textarea rows={5} placeholder="Je bericht..." className="w-full rounded-xl border border-warm-sand/50 px-4 py-3 bg-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-forest-green/30 resize-none" />
            <button type="submit" className="rounded-full bg-forest-green px-8 py-3 text-warm-white font-semibold hover:bg-forest-green/90 transition-colors">
              Verstuur bericht
            </button>
          </form>
        </motion.div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            label="Veelgestelde vragen"
            title="FAQ"
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-warm-sand/50 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-charcoal">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-charcoal/50 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-charcoal/70">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
