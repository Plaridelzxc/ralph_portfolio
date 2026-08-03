import { useState, useEffect } from 'react'

const roles = [
  'Graphic Designer',
  'Sales & Leads Caller',
  'Web Developer',
  'Customer Service Rep',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          75
        )
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-700/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-700/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[180px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block text-indigo-400 font-medium tracking-[0.2em] uppercase text-xs mb-6 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5">
            Welcome to my portfolio
          </span>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-5">
            Hi, I&apos;m{' '}
            <br className="hidden sm:block" />
            <span className="grad-purple">Ralph Tillana</span>
          </h1>

          <div className="text-xl sm:text-2xl text-slate-300 font-medium mb-8 h-9 flex items-center justify-center lg:justify-start gap-1">
            <span>{displayed}</span>
            <span className="cursor inline-block w-[2px] h-6 bg-indigo-400 rounded-full" />
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            A versatile creative and technical professional from Bacolod City,
            Philippines — turning ideas into visuals, leads into clients, and
            concepts into working applications.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="/Ralph_Tillana_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/25 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-7 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Photo */}
        <div className="relative flex-shrink-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-600/30 blur-2xl scale-110" />
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 scale-[1.08]" />
            <div className="absolute inset-0 rounded-full border border-purple-500/10 scale-[1.15]" />
            <img
              src="/images/profile.png"
              alt="Ralph Tillana"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 glass rounded-2xl px-4 py-2.5 shadow-xl z-20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white text-xs font-semibold">Available for work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-5 h-8 border border-slate-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-indigo-400 rounded-full scroll-bounce" />
        </div>
      </div>
    </section>
  )
}
