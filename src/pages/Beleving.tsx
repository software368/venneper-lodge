import { motion } from 'framer-motion'
import { TreePine, Film, PartyPopper, Building2, Presentation, Wifi, MonitorPlay, MapPinned } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'

const kidsFeatures = [
  { icon: TreePine, title: 'Buitenspeeltuin', description: 'Een afgeschermd outdoor speelparadijs waar kinderen zich kunnen uitleven met klimtoestellen.' },
  { icon: Film, title: 'Kinderbioscoop', description: 'Binnen een indoorspeeltuin met een eigen bioscoop. De jongste gasten vermaken zich opperbest!' },
  { icon: PartyPopper, title: 'Kinderfeestjes', description: 'Vier je verjaardag bij Venneper Lodge met onze leuke feestpakketten!' },
]

const birthdayPackages = [
  { name: 'Speurtocht Spektakel', description: 'Met z\'n allen "Lang Zal Ze Leven" zingen met vuurwerkfontein, GPS speurtocht in het bos, hapjes met onbeperkt drinken en versierd ijsje als afsluiting.', price: '€20,00 p.p. | Duur: 1,5 uur', image: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/speurtocht-bij-venneper-lodge.png' },
  { name: 'Pannenkoekenfeest', description: 'Met z\'n allen "Lang Zal Ze Leven" zingen met vuurwerkfontein, zelf pannenkoeken versieren, spelen in de speeltuin en bioscoop, en als afsluiting een ijsje.', price: '€19,00 p.p. | Duur: 1,5 uur', image: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/kinderfeestjes_venneper_lodge-500x333.png' },
]

const zakelijkFeatures = [
  { icon: Building2, title: 'Stijlvol & Rustig', description: 'Een prachtige, volledig geluidsdichte ruimte' },
  { icon: Presentation, title: 'Top Faciliteiten', description: 'Groot presentatiescherm, flipover en snel internet' },
  { icon: Wifi, title: 'All-in Ontzorging', description: 'Onbeperkt koffie/thee en een culinaire lunch' },
  { icon: MonitorPlay, title: 'Extra Optie', description: 'Sluit de dag af met een exclusieve private dining ervaring' },
]

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6 },
}

export default function Beleving() {
  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Beleving"
        description="Ontdek de beleving bij Venneper Lodge: speeltuin, kinderfeestjes, speurtocht, groepsarrangementen, private dining en vergaderruimtes in Nieuw-Vennep."
        path="/beleving"
      />

      {/* Kids & Families */}
      <section id="kids" className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="rounded-2xl overflow-hidden mb-16 aspect-[21/9]">
            <img
              src="https://media-01.imu.nl/storage/venneperlodge.nl/23681/leukste-speeltuin-voor-kinderen-met-horeca_venneper-lodge_nieuw_vennep_hoofddorp.jpg"
              alt="Kinderen spelen in de buitenspeeltuin"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <SectionHeading
            label="Kids & Families"
            title="Blije kids en blije ouders"
            description="Kindvriendelijk restaurant in omgeving Nieuw Vennep, Hoofddorp, Lisse en Lisserbroek. Wat dacht u van zowel een indoor en outdoor speelparadijs!"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {kidsFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-warm-sand/20"
              >
                <feature.icon size={40} className="mx-auto text-forest-green" />
                <h3 className="font-display text-xl font-bold mt-4">{feature.title}</h3>
                <p className="mt-2 text-charcoal/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speurtocht */}
      <section id="speurtocht" className="px-4 sm:px-6 lg:px-8 py-24 bg-warm-sand/30">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Speurtocht"
            title="GPS Speurtocht in het Venneperhout"
            description="Beleef een avontuurlijke speurtocht door het prachtige bos naast Venneper Lodge. Leuk voor kinderen 7+ en gezinnen!"
          />

          <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPinned size={24} className="text-forest-green shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal">Hoe werkt het?</p>
                    <p className="text-charcoal/70">Download de "Mijnspeurtochten" app, meld je aan bij de bar van Venneper Lodge, en start de route op je eigen tempo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PartyPopper size={24} className="text-forest-green shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal">Wat krijg je?</p>
                    <p className="text-charcoal/70">Leerzame en leuke puzzels over de omgeving. Na afloop ontvang je een heerlijk broodplankje!</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-2xl font-bold text-burnt-amber">€7,50 p.p.</p>
              <a
                href="mailto:info@venneperlodge.nl?subject=Speurtocht"
                className="inline-block mt-4 rounded-full bg-forest-green px-8 py-3 text-white font-semibold hover:bg-forest-green/90 transition-colors"
              >
                Meer informatie
              </a>
            </div>
            <img
              src="https://media-01.imu.nl/storage/venneperlodge.nl/23681/fantastische-horecazaak-hoofddorp-nieuw-vennep_het-beste-restaurant-venneper-lodge.jpg"
              alt="Speurtocht in het Venneperhout"
              className="rounded-2xl w-full aspect-[3/2] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Verjaardag vieren */}
      <section id="verjaardag" className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Verjaardag vieren"
            title="Vier je verjaardag bij Venneper Lodge"
            description="Van Sweet 16 tot een mooie mijlpaal — wij maken er een onvergetelijk feest van. Met een warme, sfeervolle uitstraling temidden van het groen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {birthdayPackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white shadow-sm border border-warm-sand/30"
              >
                <img src={pkg.image} alt={pkg.name} className="w-full aspect-[5/3] object-cover" />
                <div className="p-6">
                  <h4 className="font-display text-xl font-bold">{pkg.name}</h4>
                  <p className="mt-2 text-charcoal/70">{pkg.description}</p>
                  <p className="mt-3 font-semibold text-burnt-amber">{pkg.price}</p>
                  <a
                    href="mailto:info@venneperlodge.nl?subject=Kinderfeestje"
                    className="inline-block mt-4 rounded-full bg-forest-green px-6 py-2.5 text-sm font-semibold text-warm-white hover:bg-forest-green/90 transition-colors"
                  >
                    Plan een feestje
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="rounded-2xl bg-warm-sand/30 p-8 sm:p-12 text-center">
            <h3 className="font-display text-2xl font-bold">Volwassen verjaardag?</h3>
            <p className="mt-4 text-charcoal/70 max-w-2xl mx-auto">
              Intiem dineren, lunchen of een feestelijke avond met muziek — wij regelen het! Kies uit shared dining, BBQ, borrel of een compleet menu. De bovenverdieping met eigen bar is beschikbaar voor exclusief gebruik.
            </p>
            <a
              href="mailto:info@venneperlodge.nl?subject=Verjaardag"
              className="inline-block mt-6 rounded-full bg-burnt-amber px-8 py-3 text-white font-semibold hover:bg-burnt-amber/90 transition-colors"
            >
              Neem contact op
            </a>
          </motion.div>
        </div>
      </section>

      {/* Groepen & Feesten */}
      <section id="groepen" className="px-4 sm:px-6 lg:px-8 py-24 bg-warm-sand/30">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="rounded-2xl overflow-hidden mb-16 aspect-[21/9]">
            <img
              src="https://media-01.imu.nl/storage/venneperlodge.nl/23681/venneper-lodge-het-mooiste-en-beste-restaurant-van-nieuw-vennep-voor-groepen-1916x500.jpg"
              alt="Prachtig gedekte lange tafel voor een feest"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <SectionHeading
            label="Groepen & Feesten"
            title="Iets te vieren met een groter gezelschap?"
            description="Zowel voor een lunch, borrel of diner hebben wij verschillende mogelijkheden. De ruimte bovenin het restaurant biedt de meeste privacy en heeft plaats voor maximaal 100 personen."
          />

          <motion.div {...fadeIn} className="text-center">
            <p className="text-charcoal/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Bij gezelschappen vanaf 20 personen doen wij een suggestie voor een menu. Wij houden rekening met allergieën en dieetwensen. Neem contact met ons op om de mogelijkheden te bespreken.
            </p>
            <a
              href="mailto:info@venneperlodge.nl?subject=Groepsarrangement"
              className="inline-block mt-8 rounded-full bg-burnt-amber px-10 py-4 text-lg font-semibold text-white hover:bg-burnt-amber/90 transition-colors"
            >
              Neem contact op
            </a>
          </motion.div>
        </div>
      </section>

      {/* Private Dining */}
      <section id="private-dining" className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Private Dining"
            title="Exclusief dineren op de bovenverdieping"
          />

          <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                Wil je dineren op een plek waar je ongestoord kunt genieten met je gezelschap? De bovenverdieping heeft een warme en moderne uitstraling. Je beschikt over een eigen ruimte met een eigen bar, waardoor het voelt alsof de lodge even helemaal van jullie is.
              </p>
              <p className="mt-4 text-charcoal/70 leading-relaxed text-lg">
                Kies uit een meergangendiner, shared dining of een casual lunch. Ons team verzorgt alles — van menuadvies tot sfeer en inrichting. U hoeft alleen maar te genieten.
              </p>
              <a
                href="mailto:info@venneperlodge.nl?subject=Private%20Dining"
                className="inline-block mt-6 rounded-full bg-burnt-amber px-8 py-3 text-white font-semibold hover:bg-burnt-amber/90 transition-colors"
              >
                Neem contact op
              </a>
            </div>
            <img
              src="https://media-01.imu.nl/storage/venneperlodge.nl/23681/beste-restaurant-van-nieuw-vennep-lisserbroek-lisse-en-hoofdorp--kom-naar-venneper-lodge.png"
              alt="Private dining ruimte"
              className="rounded-2xl w-full aspect-[3/2] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Zakelijk */}
      <section id="zakelijk" className="px-4 sm:px-6 lg:px-8 py-24 bg-warm-sand/30">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Zakelijk"
            title="Vergaderen bij Venneper Lodge"
            description="Wilt u zakelijke, besloten bijeenkomsten organiseren? Bekijk snel de mogelijkheden."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {zakelijkFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white text-center"
              >
                <feature.icon size={32} className="mx-auto text-forest-green" />
                <h4 className="font-semibold mt-3">{feature.title}</h4>
                <p className="text-sm text-charcoal/70 mt-1">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="rounded-2xl bg-forest-green p-8 sm:p-12 text-center">
            <h3 className="font-display text-3xl font-bold text-warm-white">All-inclusive vergaderarrangementen</h3>
            <p className="mt-4 text-warm-sand/80 max-w-2xl mx-auto">
              Inclusief vergaderruimte, koffie & thee, lunch, en alle AV-faciliteiten. Ruime gratis parkeerplaats. Vraag vrijblijvend een offerte aan.
            </p>
            <a
              href="mailto:info@venneperlodge.nl?subject=Offerte%20zakelijk"
              className="inline-block mt-8 rounded-full bg-burnt-amber px-10 py-4 text-lg font-semibold text-white hover:bg-burnt-amber/90 transition-colors"
            >
              Offerte aanvragen
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
