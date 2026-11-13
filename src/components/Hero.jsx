import { LEFT, SLASH, RIGHT, UNIT, STEP, RX, MARK_W, MARK_H } from './Logo'
import TechStrip from './TechIcons'

function AnimatedMark({ className = '' }) {
  const cells = [
    ...LEFT.map((p, i) => ({ p, kind: 'bracket', delay: 80 + i * 70 })),
    ...SLASH.map((p, i) => ({ p, kind: 'slash', delay: 480 + i * 70 })),
    ...RIGHT.map((p, i) => ({ p, kind: 'bracket', delay: 880 + i * 70 })),
  ]

  return (
    <svg
      viewBox={`0 0 ${MARK_W} ${MARK_H}`}
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {cells.map(({ p: [x, y], kind, delay }) => (
        <rect
          key={`${kind}-${x}-${y}`}
          x={x * STEP}
          y={y * STEP}
          width={UNIT}
          height={UNIT}
          rx={RX}
          fill={kind === 'slash' ? '#2E6BFF' : '#0C1F4A'}
          className={kind === 'slash' ? 'sq-slash' : 'sq-in'}
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </svg>
  )
}

function BrowserMock() {
  return (
    <div className="hero-float relative">
      <div
        className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(46,107,255,0.28),rgba(46,107,255,0.08)_45%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_30px_80px_-24px_rgba(12,31,74,0.35)]">
        <div className="flex h-11 items-center gap-2 border-b border-line bg-paper px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="mx-auto flex h-6 max-w-[11.5rem] flex-1 items-center justify-center rounded-full bg-white text-[11px] font-medium text-navy/45 ring-1 ring-navy/8">
            your-brand.com
          </div>
          <span className="w-10" aria-hidden="true" />
        </div>
        <div className="relative flex aspect-[5/3.4] items-center justify-center overflow-hidden bg-paper pixel-grid sm:aspect-[5/3.2]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-soft/50 to-[#dce6ff]/80" />
          <AnimatedMark className="relative h-auto w-[72%] max-w-[20rem]" />
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_10%,rgba(46,107,255,0.10),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pt-44 lg:pb-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue">
            <span className="inline-block h-2 w-2 rounded-[2px] bg-blue" aria-hidden="true" />
            White-label studio
          </div>

          <h1 className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-[-0.035em] text-navy sm:text-6xl lg:text-[4.5rem]">
            <span className="block">Your white-label</span>
            <span className="block">web team.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Codemade is a design &amp; development studio helping agencies ship
            websites, web apps, and custom features faster — React, WordPress,
            Webflow and Figma, delivered under your brand.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-navy px-8 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgb(12_31_74/0.22)] transition-all hover:bg-blue hover:shadow-[0_10px_24px_rgb(46_107_255/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full border border-navy/12 bg-white px-8 text-[15px] font-semibold text-navy transition-colors hover:border-navy/30 hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
            >
              See our work
            </a>
          </div>
        </div>

        <div className="relative lg:pl-4">
          <BrowserMock />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl border-t border-line/80 px-5 py-8 sm:px-6">
        <TechStrip />
      </div>
    </section>
  )
}
