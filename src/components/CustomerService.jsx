import { useState, useEffect, useRef } from 'react'
import SectionBg from './SectionBg'

const highlights = [
  {
    icon: '🎯',
    title: 'Client Relations',
    description:
      'Building strong, trust-based relationships with clients through clear and attentive communication.',
  },
  {
    icon: '✉️',
    title: 'Written Communication',
    description:
      'Crafting professional correspondence, proposals, and presentations that get results.',
  },
  {
    icon: '⚡',
    title: 'Quick Turnaround',
    description:
      'Delivering client requests on time while maintaining quality and accuracy.',
  },
  {
    icon: '🤝',
    title: 'Problem Solving',
    description:
      'Identifying client needs and providing effective, thoughtful solutions.',
  },
]

const clientWork = [
  {
    client: 'Dezee | Vacation Express',
    role: 'Travel Coordinator & Design Support',
    description:
      'Collaborated closely with client Dezee of Vacation Express to prepare detailed luxury travel quote proposals for group bookings at Royalton Splash Riviera Cancun. Designed room presentation decks — handling layout, pricing, and room selection accuracy from the resort\'s catalogue.',
    image: '/images/des.jpg',
    proofImage: '/images/roy.jpg',
    tags: ['Travel Proposals', 'Resort Coordination', 'Presentation Design', 'Client Chat'],
    accentColor: 'amber',
  },
  {
    client: 'FutureThink Hub',
    role: 'Content & Community Support',
    description:
      'Supported FutureThink Hub — a Baltimore-based community organization — by creating promotional event materials and coordinating community giveaway content. Contributed to their web presence and event promotion pipeline.',
    image: '/images/futurethink.jpg',
    proofImage: null,
    tags: ['Event Promotion', 'Content Creation', 'Community Management', 'Web Support'],
    accentColor: 'amber',
  },
]

const skills = [
  'Client Communication',
  'Email & Chat Support',
  'Proposal Writing',
  'Presentation Design',
  'Attention to Detail',
  'Time Management',
  'Problem Resolution',
  'Follow-ups & Coordination',
]

export default function CustomerService() {
  const ref = useRef(null)
  const [lightbox, setLightbox] = useState(null)

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

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="customer-service" className="relative overflow-hidden py-28 px-6">
      <SectionBg primary="#f59e0b" secondary="#f97316" />
      <div ref={ref} className="reveal relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 font-medium tracking-[0.2em] uppercase text-xs mb-3">
            Client Relations
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Customer <span className="grad-amber">Service</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Delivering exceptional client experiences through proactive
            communication, quality deliverables, and dedicated support.
          </p>
        </div>

        {/* Strength cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/20"
            >
              <div className="text-3xl mb-3">{h.icon}</div>
              <h3 className="font-display font-semibold text-white mb-2">
                {h.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {h.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client work */}
        <div className="space-y-16">
          {clientWork.map((work, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-10 items-start ${
                i % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Info */}
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="glass rounded-2xl p-8">
                  <p className="text-amber-400 font-medium text-xs uppercase tracking-widest mb-2">
                    {work.role}
                  </p>
                  <h3 className="font-display font-bold text-xl text-white mb-4">
                    {work.client}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-6">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Images */}
              <div
                className={`space-y-4 ${
                  i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <button
                  onClick={() => setLightbox({ src: work.image, caption: work.client })}
                  className="w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-2xl"
                >
                  <img
                    src={work.image}
                    alt={work.client}
                    className="w-full h-56 object-cover object-top rounded-2xl border border-white/5 hover:border-amber-500/20 transition-colors"
                  />
                </button>
                {work.proofImage && (
                  <button
                    onClick={() => setLightbox({ src: work.proofImage, caption: `${work.client} — Work Sample` })}
                    className="w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-2xl"
                  >
                    <img
                      src={work.proofImage}
                      alt={`${work.client} proof`}
                      className="w-full h-40 object-cover object-left rounded-2xl border border-white/5 hover:border-amber-500/20 transition-colors"
                    />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-5">
            Customer Service Skills
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm rounded-full"
              >
                {s}
              </span>
            ))}
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
              alt={lightbox.caption}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            {lightbox.caption && (
              <p className="text-center text-slate-400 text-sm mt-4">
                {lightbox.caption}
              </p>
            )}
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
