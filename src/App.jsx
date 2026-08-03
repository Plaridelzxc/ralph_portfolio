import { useState, useEffect } from 'react'
import MovingBackground from './components/MovingBackground'
import ScrollAnimator from './components/ScrollAnimator'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import GraphicDesign from './components/GraphicDesign'
import SalesCaller from './components/SalesCaller'
import WebDeveloper from './components/WebDeveloper'
import CustomerService from './components/CustomerService'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen">
      <MovingBackground />
      {/* All page content sits above the canvas */}
      <div className="relative z-10">
      <ScrollAnimator />
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <GraphicDesign />
      <SalesCaller />
      <WebDeveloper />
      <CustomerService />
      <Contact />
      <Footer />
      </div>
    </div>
  )
}
