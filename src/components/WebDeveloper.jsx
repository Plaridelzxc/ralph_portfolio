import SectionBg from './SectionBg'

const projects = [
  {
    name: 'La Chow Website',
    description:
      'Event and retail space website showcasing venue options, booking inquiry forms, tenant portal access, and room gallery.',
    image: '/images/la-chow.jpg',
    tech: ['WordPress', 'Elementor', 'PHP'],
    type: 'Website',
    year: '2025',
    accent: 'teal',
    link: 'https://www.thelachow.com/',
  },
  {
    name: 'Org Portal',
    description:
      'School management system for Kupal National Highschool. Handles teachers, students, classes, grading periods, attendance, report cards, and employer portals. Deployed for FutureThink Hub as FutureThinkEdge.',
    image: '/images/org-portal.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    type: 'Web App',
    year: '2025',
    accent: 'violet',
    link: 'https://futurethinkedge.org/login',
  },
  {
    name: 'FutureThink Hub',
    description:
      'Baltimore-based community organization. Contributed to their web presence, content creation, and event promotion pipeline supporting local programs and initiatives.',
    image: '/images/futurethink.jpg',
    tech: ['Web Support', 'Content'],
    type: 'Website',
    year: '2025',
    accent: 'cyan',
    link: 'https://www.futurethinkhub.org/',
  },
  {
    name: 'HRIS System',
    description:
      'Human Resource Information System for DevTeam. Features attendance time-in/out, leave management, payroll, performance evaluations, analytics, and role-based access control.',
    image: '/images/hris.jpg',
    tech: ['Laravel', 'Livewire', 'MySQL', 'Tailwind CSS'],
    type: 'Web App',
    year: '2025',
    accent: 'emerald',
  },
  {
    name: 'Balay2 E-Commerce Store',
    description:
      'Full-featured online clothing store with product catalog, cart system, search, and an admin dashboard for managing inventory and orders.',
    image: '/images/store.jpg',
    tech: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
    type: 'E-Commerce',
    year: '2025',
    accent: 'emerald',
    link: 'https://github.com/Plaridelzxc/e-store',
  },
  {
    name: 'RentNav',
    description:
      'Mobile property rental platform for Bacolod City. Lets users browse commercial, market, and residential listings with favourites and notifications.',
    image: '/images/rentnv.jpg',
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    type: 'Mobile App',
    year: '2025',
    accent: 'cyan',
    link: 'https://github.com/Plaridelzxc/RentNav',
  },
]

const techCategories = [
  {
    label: 'Languages',
    items: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Python'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'React Native', 'Laravel', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Android Studio', 'VS Code', 'Git', 'Firebase', 'MySQL', 'WordPress'],
  },
]

const aiTools = [
  { name: 'Claude Code', use: 'Coding Assistant' },
  { name: 'Claude AI', use: 'Coding & Problem Solving' },
  { name: 'ChatGPT', use: 'Writing, Grammar & Emails' },
  { name: 'Gemini AI', use: 'Image Generation' },
]

const badgeColor = {
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  teal: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
}

export default function WebDeveloper() {
  return (
    <section id="web-dev" className="relative overflow-hidden py-28 px-6 bg-black/30">
      <SectionBg primary="#10b981" secondary="#14b8a6" flip />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-medium tracking-[0.2em] uppercase text-xs mb-3" data-animate="fade-down">
            Projects
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4" data-animate="fade-up">
            Web <span className="grad-emerald">Developer</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base" data-animate="fade-up">
            Building functional, responsive, and scalable applications — from
            admin dashboards to mobile apps and games.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {projects.map((project, i) => {
            const Wrapper = project.link ? 'a' : 'div'
            const wrapperProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            return (
            <Wrapper
              key={i}
              {...wrapperProps}
              className="glass rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/20 block"
              data-animate="fade-up"
            >
              {/* Screenshot */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-full border backdrop-blur-sm ${
                      badgeColor[project.accent]
                    }`}
                  >
                    {project.type}
                  </span>
                </div>
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-slate-300 text-[11px] rounded-full">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <p className="mt-4 text-emerald-400 text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    View Project
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </p>
                )}
              </div>
            </Wrapper>
          )})}
        </div>

        {/* Tech stack */}
        <div className="mt-16 space-y-6">
          {techCategories.map((cat) => (
            <div key={cat.label} className="text-center" data-animate="fade-up">
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">
                {cat.label}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Tools */}
        <div className="mt-10">
          <div className="text-center mb-6" data-animate="fade-up">
            <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">
              AI Tools
            </p>
            <p className="text-slate-600 text-xs">Integrated into my daily workflow</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 stagger">
            {aiTools.map((ai) => (
              <div
                key={ai.name}
                className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-center hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
                data-animate="zoom-in"
              >
                <p className="text-indigo-300 font-semibold text-sm">{ai.name}</p>
                <p className="text-slate-500 text-xs mt-1 leading-snug">{ai.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
