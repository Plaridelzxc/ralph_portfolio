import { useState, useEffect, useRef } from 'react'
import SectionBg from './SectionBg'

const designs = [
  {
    src: '/images/fit.jpg',
    title: 'Cycling Motivation',
    client: 'Cameron Clark Fitness',
    category: 'fitness',
  },
  {
    src: '/images/ness.jpg',
    title: 'Mindset Quote Graphic',
    client: 'Cameron Clark Fitness',
    category: 'fitness',
  },
  {
    src: '/images/roon.jpg',
    title: '"Never Give Up" Poster',
    client: 'Fitness Client',
    category: 'fitness',
  },
  {
    src: '/images/coach-josh.png',
    title: 'Fitness Coach Promo',
    client: 'Coach Josh · Kylie Fitness Gym',
    category: 'fitness',
  },
  {
    src: '/images/io.jpg',
    title: 'Free Engineering Stamps',
    client: 'SolarStamp.io',
    category: 'solar',
  },
  {
    src: '/images/solar.jpg',
    title: 'Attention Solar Companies',
    client: 'SolarStamp.io',
    category: 'solar',
  },
  {
    src: '/images/sular.jpg',
    title: 'Free Engineering Letters',
    client: 'SolarStamp.io',
    category: 'solar',
  },
  {
    src: '/images/locals.jpg',
    title: 'Christmas Raffle Ticket',
    client: 'Bacolod Filipino Cantonese Civic Foundation',
    category: 'events',
  },
]

const filters = ['All', 'Fitness', 'Solar', 'Events']

const tools = [
  { label: 'Canva', type: 'app' },
  { label: 'Adobe Photoshop', type: 'app' },
  { label: 'CapCut', type: 'app' },
]

const skills = [
  'Social Media Graphics',
  'Brand Posters',
  'Event Materials',
  'Print Design',
  'Video Editing',
]

export default function GraphicDesign() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add('visible')
      },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Close lightbox on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const filtered =
    filter === 'All'
      ? designs
      : designs.filter((d) => d.category === filter.toLowerCase())

  return (
    <section id="graphic-design" className="relative overflow-hidden py-28 px-6 bg-black/30">
      <SectionBg primary="#a855f7" secondary="#ec4899" flip />
      <div ref={ref} className="reveal relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-400 font-medium tracking-[0.2em] uppercase text-xs mb-3">
            Creative Work
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Graphic <span className="grad-purple">Design</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Creating compelling visuals for fitness brands, energy companies,
            and community events.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-slate-500 hover:text-slate-300 border border-white/10 hover:border-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox(item)}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                <p className="text-white font-semibold text-sm leading-snug">
                  {item.title}
                </p>
                <p className="text-slate-300 text-xs mt-0.5 truncate">
                  {item.client}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Tools & Skills */}
        <div className="mt-14 space-y-6">
          <div className="text-center">
            <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">
              Software & Tools
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((t) => (
                <span
                  key={t.label}
                  className="px-4 py-2 bg-purple-500/15 border border-purple-500/30 text-purple-200 text-sm rounded-full font-medium"
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">
              Skills
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-slate-300 text-sm rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/96 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-semibold text-lg">{lightbox.title}</p>
              <p className="text-slate-400 text-sm mt-1">{lightbox.client}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center text-2xl transition-colors leading-none"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
