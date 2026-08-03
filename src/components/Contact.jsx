import SectionBg from './SectionBg'

const contactLinks = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'tillanaralphjudiel@gmail.com',
    href: 'mailto:tillanaralphjudiel@gmail.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/ralphtillana',
    href: 'https://www.linkedin.com/in/ralph-tillana-5b4708314/',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/Plaridelzxc',
    href: 'https://github.com/Plaridelzxc',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 px-6 bg-black/30">
      <SectionBg primary="#6366f1" secondary="#a855f7" flip />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Header */}
        <p className="text-indigo-400 font-medium tracking-[0.2em] uppercase text-xs mb-3" data-animate="fade-down">
          Get in Touch
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6" data-animate="fade-up">
          Let&apos;s <span className="grad-purple">Connect</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mb-14 leading-relaxed" data-animate="fade-up">
          Have a project in mind, need creative support, or just want to say
          hi? My inbox is always open — I&apos;ll get back to you as soon as possible.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12 stagger">
          {contactLinks.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/20 group"
              data-animate="zoom-in"
            >
              <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                {c.icon}
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">
                  {c.label}
                </p>
                <p className="text-white text-xs sm:text-sm font-medium break-all">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:tillanaralphjudiel@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/25 text-base"
          data-animate="fade-up"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Send me a message
        </a>
      </div>
    </section>
  )
}
