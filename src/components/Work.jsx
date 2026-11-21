import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { projects } from '../data/work'

function ProjectMock({ slug }) {
  if (slug === 'saas-landing' || slug === 'flowlane') {
    return (
      <div className="relative h-full bg-gradient-to-br from-[#eef3ff] via-[#d9e6ff] to-[#c7d7ff] p-5 sm:p-6">
        <div className="h-full rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-navy/5">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-2 w-16 rounded-full bg-navy/20" />
            <div className="flex gap-1.5">
              <div className="h-2 w-8 rounded-full bg-navy/10" />
              <div className="h-2 w-8 rounded-full bg-blue/70" />
            </div>
          </div>
          <div className="h-3 w-3/5 rounded-full bg-navy/80" />
          <div className="mt-2 h-2 w-4/5 rounded-full bg-navy/15" />
          <div className="mt-2 h-2 w-2/5 rounded-full bg-navy/10" />
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg bg-paper p-2 ring-1 ring-navy/5">
                <div className="mb-2 h-6 w-6 rounded-md bg-blue/20" />
                <div className="h-1.5 w-full rounded-full bg-navy/15" />
                <div className="mt-1 h-1.5 w-2/3 rounded-full bg-navy/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (slug === 'ecommerce-store') {
    return (
      <div className="relative h-full bg-gradient-to-br from-[#f3f6ff] via-[#e4ecff] to-[#cdd9f5] p-5 sm:p-6">
        <div className="grid h-full grid-cols-3 grid-rows-2 gap-2.5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col rounded-xl bg-white/80 p-2 shadow-sm ring-1 ring-navy/5">
              <div className="mb-2 flex-1 rounded-lg bg-gradient-to-br from-blue-soft to-[#c5d4ff]" />
              <div className="h-1.5 w-3/4 rounded-full bg-navy/20" />
              <div className="mt-1 h-1.5 w-1/3 rounded-full bg-blue/50" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (slug === 'ai-chatbot') {
    return (
      <div className="relative h-full bg-gradient-to-br from-[#eef3ff] via-[#dce6ff] to-[#c5d4ff] p-5 sm:p-6">
        <div className="flex h-full flex-col justify-end gap-2.5 rounded-xl bg-white/75 p-4 ring-1 ring-navy/5">
          <div className="max-w-[75%] self-start rounded-2xl rounded-bl-md bg-paper px-3 py-2">
            <div className="h-1.5 w-28 rounded-full bg-navy/20" />
            <div className="mt-1.5 h-1.5 w-16 rounded-full bg-navy/10" />
          </div>
          <div className="max-w-[70%] self-end rounded-2xl rounded-br-md bg-blue px-3 py-2">
            <div className="h-1.5 w-24 rounded-full bg-white/80" />
          </div>
          <div className="max-w-[80%] self-start rounded-2xl rounded-bl-md bg-paper px-3 py-2">
            <div className="h-1.5 w-32 rounded-full bg-navy/20" />
            <div className="mt-1.5 h-1.5 w-20 rounded-full bg-navy/10" />
          </div>
          <div className="mt-1 flex items-center gap-2 rounded-full bg-paper px-3 py-2 ring-1 ring-navy/5">
            <div className="h-1.5 flex-1 rounded-full bg-navy/10" />
            <div className="h-5 w-5 rounded-full bg-blue" />
          </div>
        </div>
      </div>
    )
  }

  // admin-dashboard
  return (
    <div className="relative h-full bg-gradient-to-br from-[#eef2fb] via-[#e3eaff] to-[#d0dcff] p-5 sm:p-6">
      <div className="flex h-full overflow-hidden rounded-xl bg-white/80 shadow-sm ring-1 ring-navy/5">
        <div className="w-8 bg-navy/90 sm:w-10" />
        <div className="flex flex-1 flex-col p-3">
          <div className="mb-3 flex gap-2">
            <div className="h-7 flex-1 rounded-md bg-blue-soft" />
            <div className="h-7 flex-1 rounded-md bg-paper" />
            <div className="h-7 flex-1 rounded-md bg-paper" />
          </div>
          <div className="flex flex-1 items-end gap-1.5 px-1 pb-1">
            {[40, 65, 45, 80, 55, 90, 70, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-blue"
                style={{ height: `${h}%`, opacity: 0.45 + (i % 3) * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="border-t border-line bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Work"
            title="Selected work"
            description="Concept projects designed and built end-to-end by the studio — with more on the way."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const isLive = project.status === 'live' && project.href
            const Wrapper = isLive ? 'a' : 'article'
            const wrapperProps = isLive
              ? {
                  href: project.href,
                  target: '_blank',
                  rel: 'noreferrer',
                  'aria-label': `${project.title} — view live site (opens in a new tab)`,
                }
              : {}

            return (
              <Reveal key={project.slug} delay={i * 80} className="h-full">
                <Wrapper
                  {...wrapperProps}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_18px_44px_rgb(12_31_74/0.08)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} website preview`}
                        width="1200"
                        height="750"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <ProjectMock slug={project.slug} />
                    )}
                    {project.status === 'coming-soon' && (
                      <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy shadow-sm">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-blue-soft px-2.5 py-0.5 text-xs font-semibold text-blue"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.label && (
                        <span className="rounded-full bg-navy px-2.5 py-0.5 text-xs font-semibold text-white">
                          {project.label}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-navy">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.summary}</p>
                    {isLive && (
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                        View live
                        <svg
                          viewBox="0 0 16 16"
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 11 11 5M6 5h5v5" />
                        </svg>
                      </span>
                    )}
                  </div>
                </Wrapper>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
