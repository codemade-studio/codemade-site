import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const points = [
  {
    title: 'Founder-led',
    body: 'Yeuwei Lim, a designer-developer based in Malaysia.',
  },
  {
    title: 'End-to-end',
    body: 'Design in Figma through development and custom systems, one partner.',
  },
  {
    title: 'White-label & NDA',
    body: 'We work under your brand. Your clients only see you.',
  },
  {
    title: 'Timezone-friendly',
    body: 'GMT+8 overlap with Australia, NZ, and Asia; overnight handoff for the UK, EU, and US.',
  },
]

const stack = [
  'Figma',
  'React',
  'WordPress',
  'Webflow',
  'Custom systems',
  'Integrations',
  'AI chatbots',
]

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeader
                eyebrow="About"
                title="A designer-developer built for agencies."
                description="Codemade Studio was founded by Yeuwei Lim, a designer-developer based in Malaysia."
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
                <p>
                  One partner covers the work from design in Figma through development
                  in React, WordPress, and Webflow, to custom web apps, systems,
                  integrations, and AI chatbots. You work with someone who can take a
                  brief or a design file and ship the build.
                </p>
                <p>
                  We plug into agency teams as an extension of your studio. Work goes
                  out under your brand, protected by NDA, so your clients only ever
                  see you.
                </p>
                <p>
                  Based in Malaysia (GMT+8), we share the working day with Australia,
                  New Zealand, and Asia, and offer an overnight handoff for teams in
                  the UK, Europe, and the US. Communication stays clear, with daily
                  updates so you always know where things stand.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-soft px-3 py-1 text-xs font-semibold text-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-navy px-8 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgb(12_31_74/0.22)] transition-all hover:bg-blue hover:shadow-[0_10px_24px_rgb(46_107_255/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
              >
                Start a project
              </a>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <ul className="overflow-hidden rounded-2xl border border-line bg-white">
              {points.map((item, i) => (
                <li
                  key={item.title}
                  className={`p-7 ${i !== 0 ? 'border-t border-line' : ''}`}
                >
                  <div className="font-display text-sm font-bold tabular-nums text-blue">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display mt-3 text-[1.15rem] font-bold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
