import { Star } from 'lucide-react'

interface Review {
  name: string
  rating: number
  text: string
  date: string
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-warm-sand/30">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-burnt-amber text-burnt-amber" />
        ))}
      </div>
      <p className="text-charcoal/80 leading-relaxed mb-4">"{review.text}"</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-charcoal">{review.name}</span>
        <span className="text-xs text-charcoal/50">{review.date}</span>
      </div>
    </div>
  )
}
