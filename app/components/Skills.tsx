import ScrollReveal from './ScrollReveal'

const skillCategories = [
  {
    category: 'AI & Automation',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: 'border-teal-500/30 bg-teal-500/5',
    iconBg: 'bg-teal-500/15 text-teal-400',
    skills: [
      'Zapier (Multi-step Workflows)',
      'Zapier Paths & Filters',
      'AI by Zapier',
      'Make.com (Integromat)',
      'ChatGPT / OpenAI',
      'Google Apps Script',
      'Business Process Automation',
      'Webhook Integration',
    ],
  },
  {
    category: 'CRM & Lead Management',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
    color: 'border-cyan-500/30 bg-cyan-500/5',
    iconBg: 'bg-cyan-500/15 text-cyan-400',
    skills: [
      'HubSpot',
      'GoHighLevel',
      'Lead Lifecycle Automation',
      'Asana',
      'Airtable',
      'Mailchimp',
      'Lead Scoring & Routing',
      'Email Sequence Automation',
    ],
  },
  {
    category: 'Full-Stack Development',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: 'border-indigo-500/30 bg-indigo-500/5',
    iconBg: 'bg-indigo-500/15 text-indigo-400',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'PHP',
      'MySQL',
      'Java',
      'Unity (ARCore)',
    ],
  },
  {
    category: 'Productivity & Admin',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: 'border-amber-500/30 bg-amber-500/5',
    iconBg: 'bg-amber-500/15 text-amber-400',
    skills: [
      'Google Workspace',
      'Microsoft 365',
      'Slack',
      'Zoom',
      'Notion',
      'Process Documentation',
      'Workflow Optimization',
      'Database Administration',
    ],
  },
  {
    category: 'Design & Content',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    color: 'border-rose-500/30 bg-rose-500/5',
    iconBg: 'bg-rose-500/15 text-rose-400',
    skills: [
      'Figma (Intermediate)',
      'Canva',
      'CapCut',
      'Adobe Express',
      'Content Formatting',
      'Multi-platform Publishing',
    ],
  },
  {
    category: 'QA & Communication',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: 'border-emerald-500/30 bg-emerald-500/5',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    skills: [
      'Quality Assurance Protocols',
      'Cross-Cultural Communication',
      'Team Onboarding',
      'Inbox Management',
      'English (Fluent)',
      'Filipino (Native)',
      'Process On-boarding',
      'Technical Troubleshooting',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-3">Toolbox</p>
            <h2 className="section-title mb-4">
              Skills &{' '}
              <span className="gradient-text">Tech Proficiency</span>
            </h2>
            <p className="section-subtitle mx-auto max-w-xl">
              A cross-functional stack spanning automation, development, CRM, and operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={i * 80}>
              <div
                className={`card border ${cat.color} group hover:-translate-y-1 transition-all duration-300 h-full`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${cat.iconBg}`}>
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-white">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Availability banner */}
        <ScrollReveal delay={100}>
          <div className="mt-12 card border-teal-500/30 bg-gradient-to-r from-teal-500/10 to-cyan-500/5 text-center py-8">
            <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-2">
              Availability
            </p>
            <p className="text-white font-semibold text-lg mb-1">
              Part-time · Remote · Flexible Time Zones
            </p>
            <p className="text-slate-400 text-sm">
              US EST/PST &nbsp;·&nbsp; UK GMT &nbsp;·&nbsp; AU AEST
            </p>
            <a href="#contact" className="btn-primary mt-6 inline-flex">
              Check Availability
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
