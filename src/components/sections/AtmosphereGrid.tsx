import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const photos = [
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/wat-is-het-beste-terras-van-nieuw-vennep-lisserbroek-lisse-en-hoofddorp.png', alt: 'Het terras van Venneper Lodge', span: 'col-span-2 row-span-2' },
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/venneper-lodge-heeft-het-beste-personeel-en-cocktails-500x333.jpg', alt: 'Koffie en personeel', span: '' },
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/waar-heb-je-lekkere-drankjes-in-nieuw-vennep-lisserbroek-lisse-en-hoofdorp--dat-is-bij-venneper-lodge.png', alt: 'Cocktails aan de bar', span: '' },
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/leukste-speeltuin-voor-kinderen-met-horeca_venneper-lodge_nieuw_vennep_hoofddorp.jpg', alt: 'Kinderen in de speeltuin', span: '' },
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/een-ruime-menukeuze-bij-venneper-lodge-in-nieuw-vennep-800x600.jpg', alt: 'Ruime menukeuze', span: '' },
  { src: 'https://media-01.imu.nl/storage/venneperlodge.nl/23681/venneper-lodge-is-de-beste-en-mooiste-horeca-locatie-van-nieuw-vennep-lisserbroek-lisse-en-hoofddorp.png', alt: 'Venneper Lodge locatie', span: 'col-span-2' },
]

export default function AtmosphereGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Sfeerimpressie"
          title="Beleef de lodge"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[250px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl overflow-hidden ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/venneper_lodge/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-forest-green font-semibold hover:text-burnt-amber transition-colors"
          >
            Volg ons op Instagram &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
