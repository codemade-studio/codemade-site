import { Logo } from './Logo'
import { EMAIL } from '../data/site'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why us' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Logo variant="onDark" markHeight={28} />
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 Codemade Studio</p>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
