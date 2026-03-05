import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ReviewCard from '../ui/ReviewCard'
import { reviews } from '../../data/reviews'

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0)
  const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1
  const maxIndex = Math.max(0, reviews.length - visibleCount)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [maxIndex])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-warm-sand/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Reviews"
          title="We nemen je mee in ons verhaal"
          description="Vele gasten uit omgeving Nieuw Vennep, Hoofddorp, Lisse en Lisserbroek zijn je al voorgegaan."
        />

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {reviews.slice(index, index + visibleCount).map((review, i) => (
                  <ReviewCard key={`${index}-${i}`} review={review} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setIndex(prev => Math.max(0, prev - 1))}
              className="p-2 rounded-full bg-warm-white border border-warm-sand/50 text-charcoal hover:bg-warm-sand transition-colors"
              aria-label="Vorige reviews"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setIndex(prev => Math.min(maxIndex, prev + 1))}
              className="p-2 rounded-full bg-warm-white border border-warm-sand/50 text-charcoal hover:bg-warm-sand transition-colors"
              aria-label="Volgende reviews"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
