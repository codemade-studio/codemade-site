import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const iconClass = 'h-6 w-6'

const services = [
  {
    title: 'Custom Web Apps & Systems',
    body: 'React-based web apps, dashboards, admin panels, and client portals, built under your brand.',
    featured: true,
    icon: (
      <svg viewBox="0 0 32 32" className={iconClass} aria-hidden="true" fill="none">
        <rect x="4" y="5" width="24" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 10h24" stroke="currentColor" strokeWidth="1.6" />
        <rect x="7" y="13" width="6" height="5" rx="1" fill="#E8EEFF" stroke="#2E6BFF" strokeWidth="1.2" />
        <path d="M16 14h8M16 18h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="8" y="24" width="16" height="3" rx="1" fill="#0C1F4A" opacity="0.85" />
      </svg>
    ),
  },
  {
    title: 'Design to Code',
    body: 'Pixel-perfect builds from your Figma files in React, WordPress, or Webflow.',
    icon: (
      <svg viewBox="0 0 32 32" className={iconClass} aria-hidden="true" fill="none">
        <rect x="4" y="6" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="12" y="10" width="16" height="16" rx="2" fill="#E8EEFF" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 16h8M16 20h5" stroke="#2E6BFF" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'WordPress & Webflow Development',
    body: 'Custom themes, CMS setup, and clean client handoff on the platforms agencies use most.',
    icon: (
      <svg viewBox="0 0 32 32" className={iconClass} aria-hidden="true" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 12h24" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8.5" cy="9" r="1" fill="#2E6BFF" />
        <circle cx="12.5" cy="9" r="1" fill="currentColor" opacity="0.3" />
        <rect x="8" y="16" width="11" height="6" rx="1.2" fill="#E8EEFF" />
      </svg>
    ),
  },
  {
    title: 'E-commerce Builds & Custom Features',
    body: 'Shopify and WooCommerce stores, plus custom checkout, product, and integration work.',
    icon: (
      <svg viewBox="0 0 32 32" className={iconClass} aria-hidden="true" fill="none">
        <path
          d="M9 10h14l-1.2 12.2A2 2 0 0 1 19.8 24H12.2a2 2 0 0 1-2-1.8L9 10Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12 10V8.5A4 4 0 0 1 20 8.5V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M13 16h6" stroke="#2E6BFF" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Integrations & Automations',
    body: 'Connect CRMs, payments, booking tools, and internal systems, or automate workflows with Zapier, Make, or n8n.',
    icon: (
      <svg viewBox="0 0 32 32" className={iconClass} aria-hidden="true" fill="none">
        <circle cx="7" cy="16" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="25" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="25" cy="23" r="3" fill="#E8EEFF" stroke="#2E6BFF" strokeWidth="1.6" />
        <path d="M10 16h6.5M16.5 16l5.2-5.2M16.5 16l5.2 5.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'AI & Chatbot Integration',
    body: "Add AI features and support or sales chatbots to your clients' existing websites and apps.",
    icon: (
      <svg viewBox="0 0 32 32" className={iconClass} aria-hidden="true" fill="none">
        <rect x="5" y="7" width="22" height="15" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 22v3h8l-3-3" fill="#E8EEFF" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path
          d="M16 11.2l.7 1.6 1.7.3-1.3 1.1.4 1.7-1.5-.9-1.5.9.4-1.7-1.3-1.1 1.7-.3z"
          fill="#2E6BFF"
        />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    body: 'Clean, conversion-focused interfaces designed in Figma and ready for development.',
    icon: (
      <svg viewBox="0 0 32 32" className={iconClass} aria-hidden="true" fill="none">
        <rect x="5" y="8" width="22" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="16" r="3" stroke="#2E6BFF" strokeWidth="1.6" />
        <path d="M18 14h6M18 18h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
]

const cardClass =
  'group h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_16px_40px_rgb(12_31_74/0.08)]'

export default function Services() {
  const featured = services.find((s) => s.featured)
  const rest = services.filter((s) => !s.featured)

  return (
    <section id="services" className="border-t border-line bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <SectionHeader eyebrow="Services" title="What we do" />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured && (
            <Reveal className="sm:col-span-2 lg:col-span-3">
              <article className={`${cardClass} bg-paper/70 md:flex md:items-center md:gap-8 md:p-8 lg:p-10`}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-soft text-navy transition-transform duration-300 group-hover:scale-105">
                  {featured.icon}
                </div>
                <div className="mt-6 md:mt-0 md:max-w-3xl">
                  <h3 className="font-display text-xl font-bold tracking-tight text-navy md:text-[1.35rem]">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted md:text-base">
                    {featured.body}
                  </p>
                </div>
              </article>
            </Reveal>
          )}

          {rest.map((item, i) => (
            <Reveal key={item.title} delay={80 + i * 70}>
              <article className={cardClass}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft text-navy transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="font-display mt-6 text-[1.15rem] font-bold tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
