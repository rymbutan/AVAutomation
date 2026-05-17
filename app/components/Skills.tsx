const skillCategories = [
  {
    category: 'AI & Automation',
    icon: '🤖',
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
    icon: '🎯',
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
    icon: '💻',
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
    icon: '⚡',
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
    icon: '🎨',
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
    icon: '✅',
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

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className={`card border ${cat.color} group hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${cat.iconBg}`}>
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
          ))}
        </div>

        {/* Availability banner */}
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
      </div>
    </section>
  )
}
