import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const reasons = [
  {
    title: 'White‑label & NDA‑friendly',
    body: 'We stay behind the scenes. Your client only sees you.',
  },
  {
    title: 'Overlap with your timezone',
    body: 'Based in Malaysia (GMT+8), with working hours that fit APAC, Europe, and US mornings.',
  },
  {
    title: 'Clear communication',
    body: 'Daily updates via Slack or email.',
  },
  {
    title: 'Agency‑friendly pricing',
    body: 'Senior-quality work at a fraction of local rates.',
  },
]

export default function Why() {
  return (
    <section id="why" className="border-t border-line bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Why us"
              title="Why agencies choose Codemade"
              description="We plug into your process, work under your brand, and help you ship without adding overhead."
            />
          </Reveal>

          <ol className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} as="li">
                <div className="h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_16px_40px_rgb(12_31_74/0.08)]">
                  <div className="font-display text-sm font-bold tabular-nums text-blue">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display mt-3 text-[1.15rem] font-bold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
