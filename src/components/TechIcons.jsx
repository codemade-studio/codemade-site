export function IconReact({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="-11.5 -10.23 23 20.46" className={className} aria-hidden="true">
      <circle r="2.05" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

export function IconWordPress({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1.15 17.68c-.3-.05-1.36-.73-2.6-2.93l2.6-7.53v10.46zm1.15.07V8.27l2.9 8.66c-.91.43-1.88.72-2.9.82zm7.2-2.22c-.27.76-.8 1.45-1.44 1.98L13.8 9.38c.42-.03.82-.07 1.1-.07.46 0 .58.12.77.58.02.04.54 2.05.86 3.22l.73 2.67c.14.52.28 1.03.39 1.54.15-.08.3-.17.44-.27zM4.35 12c0-1.62.51-3.12 1.37-4.35L9.9 19.3A8.03 8.03 0 0 1 4.35 12zm11.28-6.34A7.94 7.94 0 0 0 12 4.25c-.9 0-1.76.15-2.57.42l-.04-.02C8.27 4.92 6.3 7.4 6.3 10.45c0 .62.08 1.22.22 1.8L4.88 8.1A8.02 8.02 0 0 1 12 3.98c1.78 0 3.42.58 4.75 1.57-.05.04-.08.08-.12.11zM20.3 12c0 1.85-.6 3.55-1.63 4.93-.1-.55-.24-1.1-.4-1.66l-1.66-6.14c-.16-.47-.33-.62-.8-.62-.2 0-.55.03-.96.08A8.04 8.04 0 0 1 20.3 12z" />
    </svg>
  )
}

export function IconWebflow({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.45 3.25h-4.08l-2.36 8.86-2.4-8.86H3.02L.5 20.75h3.93l1.74-8.2 2.28 8.2h3.2l2.36-8.2 1.7 8.2h3.97L17.45 3.25zM23.5 3.25h-3.86l-2.52 17.5h3.86l2.52-17.5z" />
    </svg>
  )
}

export function IconFigma({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M8 2a3.5 3.5 0 0 0 0 7h3.5V5.5A3.5 3.5 0 0 0 8 2zm3.5 7H8a3.5 3.5 0 0 0 0 7h3.5V9zM8 16a3.5 3.5 0 1 0 3.5 3.5V16H8zm4.5-7a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12.5 9zM16 2h-3.5v7H16a3.5 3.5 0 0 0 0-7z" />
    </svg>
  )
}


export function IconShopify({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M7.2 8h9.6l-.85 10.2A1.6 1.6 0 0 1 14.36 19.6H9.64a1.6 1.6 0 0 1-1.59-1.4L7.2 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9.2 8V6.8A2.8 2.8 0 0 1 14.8 6.8V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconAutomation({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="5.5" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="6.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="17.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.7 12h4.2M11.9 12l4.4-4.2M11.9 12l4.4 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconAI({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2.2l1.55 6.15L20 10l-6.45 1.65L12 17.8l-1.55-6.15L4 10l6.45-1.65L12 2.2z" />
      <path d="M18.6 15.2l.7 2.15 2.2.55-2.15.85-.55 2.15-.85-2.15-2.15-.85 2.15-.55.7-2.15z" />
    </svg>
  )
}

const items = [
  { name: 'React', Icon: IconReact },
  { name: 'WordPress', Icon: IconWordPress },
  { name: 'Webflow', Icon: IconWebflow },
  { name: 'Figma', Icon: IconFigma },
  { name: 'Shopify', Icon: IconShopify },
  { name: 'Automation', Icon: IconAutomation },
  { name: 'AI', Icon: IconAI },
]

export default function TechStrip({ className = '' }) {
  return (
    <ul
      className={`grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4 lg:flex lg:flex-wrap lg:items-center lg:gap-x-7 lg:gap-y-4 ${className}`}
      aria-label="Technologies we work with"
    >
      {items.map(({ name, Icon }) => (
        <li key={name} className="flex items-center gap-2.5 text-navy/55">
          <Icon className="h-[1.15rem] w-[1.15rem]" />
          <span className="text-sm font-medium tracking-wide">{name}</span>
        </li>
      ))}
    </ul>
  )
}
