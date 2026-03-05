import { motion } from 'framer-motion'

const blocks = [
  {
    image: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/fantastische-horecazaak-hoofddorp-nieuw-vennep_het-beste-restaurant-venneper-lodge.jpg',
    title: 'Aan de rand van het Venneperhout',
    text: 'Als u vanaf onze ruime parkeerplaats richting het restaurant loopt ziet u een prachtige moderne houten Lodge met een mooi groene aangelegde tuin en een speeltuin waar kinderen zich kunnen uitleven. Het ruime terras met lounge is een unieke plek om buiten te genieten van een heerlijke maaltijd.',
  },
  {
    image: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/welk-restaurant-heeft-een-goed-terras-in-nieuw-vennep-lisserbroek-lisse-en-hoofdorp--dat-is-bij-venneper-lodge.png',
    title: 'Een hippe plek voor iedereen',
    text: 'Waar vindt u toch dat ene restaurant waar het voor werkelijk iedereen oprecht genieten is? Blije kids en blije ouders? Heerlijk spelen en relaxed genieten? De heerlijkste gerechten en drankjes voor klein en groot? Zoek niet verder, want Venneper Lodge wordt uw vaste plek!',
  },
]

export default function StoryStrip() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-warm-sand/30">
      <div className="mx-auto max-w-7xl space-y-20">
        {blocks.map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            <div className="lg:w-1/2">
              <img
                src={block.image}
                alt={block.title}
                className="rounded-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                {block.title}
              </h2>
              <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
                {block.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
