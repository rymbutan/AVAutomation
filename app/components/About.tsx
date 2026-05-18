import ScrollReveal from './ScrollReveal'

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'AI-First Mindset',
    desc: 'I integrate AI models into real business workflows — not as a gimmick, but as force multipliers that eliminate grunt work.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: 'Systems Thinker',
    desc: 'Whether it\'s a Zapier pipeline or a CRM lifecycle, I design for reliability, zero data leakage, and operational scale.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Remote-Ready Pro',
    desc: '100 Mbps fiber, 3-hour UPS backup, MacBook Air M4, and a dedicated office — I show up professionally, every time.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'IT Scholar',
    desc: 'BS Information Technology at Southern Luzon State University. Consistent Dean\'s Lister and DOST Scholarship Awardee.',
  },
]

const remoteStats = [
  {
    icon: (
      <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    label: 'PLDT Fiber 100 Mbps',
  },
  {
    icon: (
      <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h13.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v7.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    label: 'APC UPS 3hr backup',
  },
  {
    icon: (
      <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    label: 'MacBook Air M4',
  },
  {
    icon: (
      <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'EST / PST / GMT / AEST',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <ScrollReveal>
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
          </ScrollReveal>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="card card-hover group h-full">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}

            {/* Remote readiness strip */}
            <ScrollReveal delay={400} className="sm:col-span-2">
              <div className="card border-teal-500/20 bg-teal-500/5">
                <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-3">
                  Remote Work Readiness
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
                  {remoteStats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-2">
                      {stat.icon}
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
