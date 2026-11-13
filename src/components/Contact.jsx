import { LogoMark } from './Logo'
import { EMAIL, MAILTO } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(46,107,255,0.35),transparent_68%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-[4%] hidden -translate-y-1/2 opacity-[0.14] lg:block"
        aria-hidden="true"
      >
        <LogoMark className="h-auto w-[22rem]" variant="onDark" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <p className="mb-5 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue">
          <span className="inline-block h-2 w-2 rounded-[2px] bg-blue" aria-hidden="true" />
          Contact
        </p>
        <h2 className="font-display max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          Have a project in mind?
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
          Let's talk — we usually reply within 24 hours.
        </p>
        <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <a
            href={MAILTO}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue px-8 text-base font-semibold text-white shadow-[0_16px_40px_rgb(46_107_255/0.35)] transition-all hover:bg-white hover:text-navy hover:shadow-[0_16px_40px_rgb(255_255_255/0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Email {EMAIL}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
