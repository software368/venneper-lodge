import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import { teamMembers } from '../data/team'

const galleryPhotos = [
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/venneper-lodge-is-de-mooiste-horeca-locatie-van-nieuw-vennep-lisserbroek-lisse-en-hoofddorp.png', alt: 'Het gebouw van Venneper Lodge' },
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/wat-is-het-beste-restaurant-van-nieuw-vennep-lisserbroek-lisse-en-hoofddorp-dat-is-venneper-lodge.png', alt: 'Het interieur van de lodge' },
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/wat-is-het-beste-terras-van-nieuw-vennep-lisserbroek-lisse-en-hoofddorp.png', alt: 'Het terras in de zomer' },
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/horeca-bij-mooi-weer_drink-ijskoffie_venneper-lodge_nieuw_vennep_hoofddorp.jpg', alt: 'IJskoffie op het terras' },
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/welk-restaurant-kan-je-lekker-eten-en-goed-drinken-in-nieuw-vennep-lisserbroek-lisse-en-hoofdorp--dat-is-bij-venneper-lodge.png', alt: 'Lekker eten en drinken' },
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/fantastische-horecazaak-hoofddorp-nieuw-vennep_het-beste-restaurant-venneper-lodge.jpg', alt: 'Het Venneperhout' },
]

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6 },
}

export default function OverOns() {
  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Over Ons"
        description="Leer meer over Venneper Lodge, ons team en onze passie voor gastvrijheid. Gelegen aan de rand van het Venneperhout in Nieuw-Vennep."
        path="/over-ons"
      />
      {/* Story */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="rounded-2xl overflow-hidden mb-16 aspect-[21/9]">
            <img
              src="https://media-01.imu.nl/storage/venneperlodge.nl/23681/venneper-lodge-is-de-beste-en-mooiste-horeca-locatie-van-nieuw-vennep-lisserbroek-lisse-en-hoofddorp.png"
              alt="Venneper Lodge panorama"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Over ons"
              title="Welkom bij Venneper Lodge"
            />
            <motion.div {...fadeIn} className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
              <p>
                Aan de rand van de prachtige natuur van Venneperhout staat Venneper Lodge. Als u vanaf onze ruime parkeerplaats richting het restaurant loopt ziet u een prachtige moderne houten Lodge met een mooi groene aangelegde tuin en een speeltuin waar kinderen zich kunnen uitleven.
              </p>
              <p>
                Het ruime terras met lounge is een unieke plek om buiten te genieten van een heerlijke maaltijd. Het natuurlijke interieur met landelijke meubels en oude houten muurplanken geven het restaurant een gezellige warme uitstraling. Het restaurant is ruimtelijk opgezet en toch intiem. Voor de kinderen is er binnen een indoorspeeltuin.
              </p>
              <p>
                U wordt met een vriendelijke lach welkom geheten en alles wordt compleet verzorgd door onze gastvrouwen en gastheren. De keukenbrigade bakt de lekkerste klassieke &amp; eigentijdse pannenkoeken en maakt de heerlijkste salades, vis- en vleesgerechten. Voor de kinderen hebben wij een speciale kinderkaart met cadeautjes.
              </p>
              <p className="font-semibold text-charcoal text-xl font-display">
                Kom genieten en laat u verrassen bij Venneper Lodge!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-warm-sand/30">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Ons team"
            title="De mensen achter de Lodge"
            description="Met passie en plezier staat ons team iedere dag voor je klaar."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover rounded-2xl mb-4"
                />
                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                <p className="text-charcoal/70 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Sfeerimpressie"
            title="De Lodge in beeld"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={photo.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden aspect-[3/2]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Locatie"
            title="Waar vind je ons?"
          />
          <div className="rounded-2xl overflow-hidden aspect-[21/9] bg-warm-sand/30">
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
        </div>
      </section>
    </div>
  )
}
