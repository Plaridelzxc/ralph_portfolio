import { useEffect, useRef } from 'react'
import SectionBg from './SectionBg'

const stats = [
  { value: '4+', label: 'Roles Mastered' },
  { value: '10+', label: 'Projects Done' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Commitment' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative overflow-hidden py-28 px-6">
      <SectionBg primary="#6366f1" secondary="#8b5cf6" />
      <div ref={ref} className="reveal relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium tracking-[0.2em] uppercase text-xs mb-3">
            Get to know me
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photos collage */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/about-1.jpg"
              alt="Ralph outdoors"
              className="col-span-2 w-full h-60 object-cover object-center rounded-2xl"
            />
            <img
              src="/images/about-2.jpg"
              alt="Ralph casual"
              className="w-full h-48 object-cover object-top rounded-2xl"
            />
            <img
              src="/images/about-3.jpg"
              alt="Ralph at a waterfall"
              className="w-full h-48 object-cover object-center rounded-2xl"
            />
          </div>

          {/* Bio */}
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-5">
              Multi-Skilled Creative &amp;{' '}
              <span className="grad-purple">Technical Professional</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-5">
              I&apos;m Ralph Tillana — a versatile professional from Bacolod City,
              Philippines. My journey spans four distinct but complementary
              disciplines: graphic design, sales &amp; leads calling, web
              development, and customer service.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether I&apos;m crafting a compelling brand visual, qualifying real
              estate prospects over the phone, building a full-stack web
              application, or coordinating client deliverables — I bring the
              same level of energy, attention to detail, and dedication to every
              task.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-5">
                  <div className="font-display font-bold text-3xl grad-purple">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
