import SectionBg from './SectionBg'

const experiences = [
  {
    company: 'Jodi Fitzgerald | Keller Williams',
    role: 'Real Estate Leads Caller',
    period: '2025',
    description:
      'Conducted outbound calls to real estate prospects for Jodi Fitzgerald under Keller Williams. Managed and organised extensive lead lists, qualifying FSBO (For Sale By Owner) properties priced under $400K across 20+ US states. Focused on call-to-set workflows with no appointment requirements.',
    highlights: [
      'Managed 200+ prospect leads per working session',
      'Qualified FSBO properties across 20+ US states',
      'Maintained meticulous lead tracking in Google Sheets',
      'Coordinated appointment-setting pipeline for agents',
      'Worked through RingCentral VoIP calling platform',
    ],
    images: ['/images/jodi.jpg', '/images/jodi1.jpg'],
  },
  {
    company: 'SolarStamp.io',
    role: 'Sales & Social Media Specialist',
    period: '2024',
    description:
      'Supported SolarStamp.io\'s outreach and brand growth by creating promotional graphic assets and managing social media campaigns on Instagram. Helped attract solar companies to their free engineering stamps and letter services.',
    highlights: [
      'Designed promotional graphics for Instagram outreach campaigns',
      'Managed post scheduling and social media calendar',
      'Generated qualified leads for engineering stamp services',
      'Crafted compelling captions and CTAs for solar industry audience',
      'Tracked campaign engagement and post performance',
    ],
    images: ['/images/bolt.jpg', '/images/larson.jpg'],
  },
]

const platforms = [
  'Vulcan 7',
  'RingCentral',
  'Listing Lead Sheet',
  'Go HighLevel',
]

const skills = [
  'Cold Calling',
  'Lead Qualification',
  'Appointment Setting',
  'CRM Management',
  'Objection Handling',
  'Google Sheets',
  'Social Media Outreach',
  'Follow-up Sequences',
]

export default function SalesCaller() {
  return (
    <section id="sales" className="relative overflow-hidden py-28 px-6">
      <SectionBg primary="#3b82f6" secondary="#06b6d4" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium tracking-[0.2em] uppercase text-xs mb-3" data-animate="fade-down">
            Outreach & Sales
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4" data-animate="fade-up">
            Sales &amp; <span className="grad-blue">Leads Caller</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base" data-animate="fade-up">
            Driving results through strategic outreach, lead qualification, and
            persuasive communication across real estate and energy sectors.
          </p>
        </div>

        {/* Experience blocks */}
        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-10 items-start ${
                i % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
              data-animate="fade-up"
            >
              {/* Info card */}
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 font-medium mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                    {exp.description}
                  </p>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-slate-300 text-sm"
                      >
                        <span className="text-blue-400 mt-0.5 shrink-0 text-xs">
                          ▸
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Proof images */}
              <div
                className={`grid grid-cols-1 gap-4 ${
                  i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                {exp.images.map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt={`${exp.company} work sample`}
                    className="w-full h-52 object-cover object-top rounded-2xl border border-white/5"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Platforms & Skills */}
        <div className="mt-16 space-y-6">
          <div className="text-center" data-animate="fade-up">
            <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">
              Platforms & Tools
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 bg-blue-500/15 border border-blue-500/30 text-blue-200 text-sm rounded-full font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center" data-animate="fade-up">
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
    </section>
  )
}
