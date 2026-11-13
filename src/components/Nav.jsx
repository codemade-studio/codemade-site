import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why us' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? 'border-line/80 bg-white/90 shadow-[0_8px_30px_rgb(12_31_74/0.05)] backdrop-blur-md'
          : 'border-transparent bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-6">
        <Logo markHeight={28} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/65 transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-full bg-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
          >
            Start a project
          </a>
        </nav>

        <button
          type="button"
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-paper lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="relative block h-3.5 w-[18px]" aria-hidden="true">
            <span
              className={`absolute left-0 block h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute top-1.5 left-0 block h-[1.5px] w-full rounded-full bg-current transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line bg-white transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[100dvh] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
        aria-label="Mobile"
      >
        <nav className="flex min-h-[calc(100dvh-4.5rem)] flex-col px-6 pt-6 pb-10">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display rounded-xl px-1 py-3 text-[2rem] font-bold tracking-tight text-navy"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex h-14 items-center justify-center rounded-full bg-navy text-base font-semibold text-white hover:bg-blue"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  )
}
