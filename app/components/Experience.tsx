import ScrollReveal from './ScrollReveal'

const experiences = [
  {
    type: 'work',
    role: 'Quality Assurance & Chat Moderator',
    company: 'MBG Media',
    location: 'US-Based Talent Agency · Remote',
    period: 'Jan 2025 – May 2026',
    color: 'teal',
    bullets: [
      'Developed and implemented QA protocols across new and high-traffic models, achieving a 15% increase in chat quality scores and reducing error rates by 3%.',
      'Trained and onboarded an average of 5 new team members per cycle, reducing ramp-up time by 1 week through structured process documentation.',
      'Managed scripted and unscripted chat engagements applying sales and upselling techniques, generating a daily average of $750 in upsell revenue and increasing conversion rates by 20%.',
      'Architected 3 production Zapier automation workflows (Lead Lifecycle, Sales Router, Content Engine) as part of an expanded technical role.',
    ],
    highlights: ['$750/day upsell revenue', '20% conversion lift', '15% QA improvement'],
  },
  {
    type: 'work',
    role: 'ESL Teacher',
    company: 'YumABC Inc.',
    location: 'Chinese-based Tutoring Agency · Remote',
    period: 'Dec 2021 – Sep 2025',
    color: 'cyan',
    bullets: [
      'Designed engaging ESL lesson plans for 15+ students weekly, improving language acquisition outcomes and maintaining a 4-year retention rate.',
      'Fostered inclusive learning environments for culturally diverse students — building cross-cultural communication skills that directly transfer to remote team collaboration.',
      'Assessed student progress through adaptive evaluation methods, continuously refining instruction based on data-driven insights.',
    ],
    highlights: ['15+ students/week', '4-year retention', 'Cross-cultural communication'],
  },
  {
    type: 'education',
    role: 'Bachelor of Science in Information Technology',
    company: 'Southern Luzon State University',
    location: 'Lucban, Philippines',
    period: 'Expected 2027',
    color: 'indigo',
    bullets: [
      'Consistent Dean\'s Lister maintaining academic excellence across all semesters.',
      'DOST (Department of Science & Technology) Scholarship Awardee — awarded to top science and technology students nationally.',
      'Coursework includes full-stack web development, database administration, mobile development, and software engineering.',
    ],
    highlights: ["Dean's Lister", 'DOST Scholar', 'Full-Stack Track'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-3">Background</p>
            <h2 className="section-title mb-4">
              Experience &{' '}
              <span className="gradient-text">Education</span>
            </h2>
            <p className="section-subtitle mx-auto max-w-xl">
              Nearly 5 years of remote work across QA, client engagement, and technical automation.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.role} delay={i * 120}>
              <div
                className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-teal-500 bg-[#020817] z-10 top-1" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 card card-hover">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                          exp.type === 'education'
                            ? 'bg-indigo-500/15 text-indigo-400'
                            : 'bg-teal-500/15 text-teal-400'
                        }`}
                      >
                        {exp.type === 'education' ? 'Education' : 'Work'}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{exp.period}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-1 leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-teal-400 font-semibold text-sm mb-1">{exp.company}</p>
                  <p className="text-slate-500 text-xs mb-4">{exp.location}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-teal-500 mt-1 flex-shrink-0 text-xs">◆</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="tech-pill">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
