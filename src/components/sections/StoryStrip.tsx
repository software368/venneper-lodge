import { motion } from 'framer-motion'
import { story } from '../../lib/content'

export default function StoryStrip() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-warm-sand/30">
      <div className="mx-auto max-w-7xl space-y-20">
        {story.blocks.map((block, i) => (
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
