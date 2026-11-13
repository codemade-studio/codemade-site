export default function SectionHeader({ eyebrow, title, description, invert = false }) {
  return (
    <div className="max-w-2xl">
      <p
        className={`mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${
          invert ? 'text-blue' : 'text-blue'
        }`}
      >
        <span className="inline-block h-2 w-2 rounded-[2px] bg-blue" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] ${
          invert ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-lg leading-relaxed ${invert ? 'text-white/70' : 'text-muted'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
