import ScrollReveal from './ScrollReveal'

const stats = [
  {
    value: '5+',
    label: 'Years Remote Experience',
    description: 'In QA, client engagement & VA roles',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '3',
    label: 'Production Automations',
    description: 'Live Zapier workflows for MBG Media',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    value: '$750',
    label: 'Daily Upsell Revenue',
    description: 'Generated through QA-driven chat systems',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '20%',
    label: 'Conversion Rate Lift',
    description: 'Through scripted & AI-assisted engagement',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section className="py-12 border-y border-slate-800/60 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-teal-500/10 text-teal-400 rounded-lg mb-3 group-hover:bg-teal-500/20 transition-colors">
                  {stat.icon}
                </div>
                <div className="font-display text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-slate-500 text-xs hidden sm:block leading-snug">{stat.description}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
