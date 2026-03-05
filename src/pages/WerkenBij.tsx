import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import { jobs } from '../lib/content'

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@graph': jobs.map(job => ({
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    employmentType: job.type.includes('Full-time') ? 'FULL_TIME' : 'PART_TIME',
    hiringOrganization: {
      '@type': 'Restaurant',
      name: 'Venneper Lodge',
      sameAs: 'https://venneperlodge.nl',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Getsewoudweg 1',
        addressLocality: 'Nieuw-Vennep',
        postalCode: '2151 MS',
        addressCountry: 'NL',
      },
    },
  })),
}

export default function WerkenBij() {
  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Werken bij Venneper Lodge"
        description="Vacatures bij Venneper Lodge in Nieuw-Vennep. Word onderdeel van ons team! Bekijk openstaande functies in de bediening en keuken."
        path="/werken-bij"
        schema={jobPostingSchema}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Vacatures"
          title="Werken bij Venneper Lodge"
          description="Word onderdeel van ons team! Wij zijn altijd op zoek naar enthousiaste collega's die onze passie voor gastvrijheid delen."
        />

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-warm-sand/50 bg-white p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-forest-green/10 p-3">
                  <Briefcase size={24} className="text-forest-green" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-charcoal">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-warm-sand/50 text-charcoal/70">{job.type}</span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-warm-sand/50 text-charcoal/70">{job.hours}</span>
                  </div>
                  <p className="mt-3 text-charcoal/70 leading-relaxed">{job.description}</p>
                  <a
                    href={`mailto:info@venneperlodge.nl?subject=Sollicitatie ${job.title}`}
                    className="inline-block mt-4 rounded-full bg-forest-green px-6 py-2.5 text-sm font-semibold text-warm-white hover:bg-forest-green/90 transition-colors"
                  >
                    Solliciteer nu
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl bg-warm-sand/30 p-8 text-center"
        >
          <h3 className="font-display text-xl font-bold">Staat jouw functie er niet bij?</h3>
          <p className="mt-2 text-charcoal/70">
            Stuur gerust een open sollicitatie naar{' '}
            <a href="mailto:info@venneperlodge.nl" className="text-burnt-amber font-medium hover:underline">
              info@venneperlodge.nl
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
