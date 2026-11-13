import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Why from './components/Why'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Why />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
