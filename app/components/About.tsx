const highlights = [
  {
    icon: '🤖',
    title: 'AI-First Mindset',
    desc: 'I integrate AI models into real business workflows — not as a gimmick, but as force multipliers that eliminate grunt work.',
  },
  {
    icon: '🔧',
    title: 'Systems Thinker',
    desc: 'Whether it\'s a Zapier pipeline or a CRM lifecycle, I design for reliability, zero data leakage, and operational scale.',
  },
  {
    icon: '🌐',
    title: 'Remote-Ready Pro',
    desc: '100 Mbps fiber, 3-hour UPS backup, MacBook Air M4, and a dedicated office — I show up professionally, every time.',
  },
  {
    icon: '📚',
    title: 'IT Scholar',
    desc: 'BS Information Technology at Southern Luzon State University. Consistent Dean\'s Lister and DOST Scholarship Awardee.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="section-label mb-3">About Me</p>
            <h2 className="section-title mb-6">
              Where Operations Meet
              <span className="gradient-text"> Engineering</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m Arym — an IT professional from Lucban, Philippines, who sits at the
                intersection of <span className="text-white font-medium">technical automation</span> and{' '}
                <span className="text-white font-medium">operational excellence</span>. Most people
                pick one lane. I built a career bridging both.
              </p>
              <p>
                At MBG Media, I didn&apos;t just moderate chats — I architected the Zapier systems that
                automated lead routing, built the AI engines that generated sales emails, and designed
                the QA protocols that cut error rates by 15%. My background as an ESL teacher trained
                me to communicate complex ideas clearly across cultures, which turns out to be a superpower
                when documenting workflows and onboarding remote teams.
              </p>
              <p>
                I&apos;m currently pursuing my BS in Information Technology (graduating 2027), expanding
                my full-stack skills into Next.js, Supabase, and mobile development — because I believe
                the best automation engineers also understand how systems are built from the ground up.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Work With Me
              </a>
              <a
                href="https://linkedin.com/in/ram-working-b5327b3b4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="card card-hover group">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}

            {/* Remote readiness strip */}
            <div className="sm:col-span-2 card border-teal-500/20 bg-teal-500/5">
              <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-3">
                Remote Work Readiness
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
                <div>
                  <span className="text-white">📡</span> PLDT Fiber 100 Mbps
                </div>
                <div>
                  <span className="text-white">🔋</span> APC UPS 3hr backup
                </div>
                <div>
                  <span className="text-white">💻</span> MacBook Air M4
                </div>
                <div>
                  <span className="text-white">🕐</span> EST / PST / GMT / AEST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
