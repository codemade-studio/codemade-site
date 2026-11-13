import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const steps = [
  'Send your brief or Figma files',
  'Get a quote within 24 hours',
  'We build, with regular progress updates',
  'Review, revise, and launch',
]

export default function Process() {
  return (
    <section id="process" className="border-t border-line bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <SectionHeader eyebrow="Process" title="How we work" />
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((label, i) => (
            <Reveal key={label} delay={i * 80} as="li">
              <div className="relative h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_16px_40px_rgb(12_31_74/0.08)]">
                <div className="font-display text-3xl font-bold tabular-nums tracking-tight text-blue">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-display mt-5 text-lg font-bold leading-snug tracking-tight text-navy">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
