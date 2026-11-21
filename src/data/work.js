/**
 * Portfolio projects shown in the Work section.
 *
 * To publish a case study, set `status` to `'live'`, add a `href` (and
 * optionally an `image` path under /public, e.g. '/work/saas.png').
 */
export const projects = [
  {
    slug: 'flowlane',
    title: 'Flowlane',
    stack: ['Figma', 'React', 'Tailwind'],
    summary:
      'SaaS landing page — designed in Figma, built in React. Hero with a live product UI, features, pricing toggle, and FAQs.',
    status: 'live',
    label: 'Concept project',
    href: 'https://flowlane-beta.vercel.app',
    image: '/work/flowlane.webp',
  },
  {
    slug: 'mosswell',
    title: 'Mosswell',
    stack: ['React', 'Tailwind', 'Recharts'],
    summary:
      'Revenue & operations dashboard — charts, data tables, filters, and dark mode. Built in React.',
    status: 'live',
    label: 'Concept project',
    href: 'https://mosswell-bice.vercel.app',
    image: '/work/mosswell.webp',
  },
  {
    slug: 'aldermoor',
    title: 'Aldermoor',
    stack: ['React', 'Tailwind', 'React Router'],
    summary:
      'E-commerce store — product filters, variants, cart and multi-step checkout. Built in React.',
    status: 'live',
    label: 'Concept project',
    href: 'https://aldermoor-eight.vercel.app',
    image: '/work/aldermoor.webp',
  },
  {
    slug: 'ai-chatbot',
    title: 'AI support chatbot integration',
    stack: ['AI', 'React'],
    summary:
      'A support chatbot added to an existing site, designed to handle common questions and hand off to a human when needed.',
    status: 'coming-soon',
    href: null,
    image: null,
  },
]
