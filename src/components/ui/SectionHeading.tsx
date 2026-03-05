interface Props {
  label?: string
  title: string
  description?: string
  light?: boolean
  center?: boolean
}

export default function SectionHeading({ label, title, description, light, center = true }: Props) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      {label && (
        <span className={`text-sm font-semibold uppercase tracking-widest ${light ? 'text-burnt-amber/80' : 'text-burnt-amber'}`}>
          {label}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 ${light ? 'text-warm-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-warm-sand/80' : 'text-charcoal/70'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
