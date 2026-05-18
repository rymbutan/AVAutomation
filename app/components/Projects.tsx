'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

type Tag = 'All' | 'Automation' | 'Development'

const ArrowPathIcon = () => (
  <svg className="w-12 h-12 text-teal-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
)

const FunnelIcon = () => (
  <svg className="w-12 h-12 text-indigo-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
  </svg>
)

const SignalIcon = () => (
  <svg className="w-12 h-12 text-orange-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="w-12 h-12 text-emerald-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
)

const BuildingOfficeIcon = () => (
  <svg className="w-12 h-12 text-blue-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-12 h-12 text-violet-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
)

const MapIcon = () => (
  <svg className="w-12 h-12 text-rose-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
  </svg>
)

const BuildingLibraryIcon = () => (
  <svg className="w-12 h-12 text-yellow-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
  </svg>
)

const projects = [
  {
    tag: 'Automation' as Tag,
    title: 'AI-Powered Lead Lifecycle Orchestration',
    subtitle: 'MBG Media — Production',
    description:
      'Architected a multi-step Zapier workflow that bridges CRM data directly with Asana, automating the full lead lifecycle from capture to task assignment. Eliminated manual data entry and ensured zero lead leakage during handoffs.',
    impact: 'Zero lead leakage · Fully automated task delegation · Eliminated manual entry',
    tools: ['Zapier', 'Asana', 'CRM Automation', 'Gmail'],
    visual: 'from-teal-600/20 to-cyan-600/10',
    icon: <ArrowPathIcon />,
    status: 'Live',
    details: [
      'Multi-step Zapier trigger on CRM status change',
      'Automated Asana task creation with lead data mapping',
      'Email follow-up sequences tied to lifecycle stage',
      'Real-time status sync between CRM and project board',
    ],
  },
  {
    tag: 'Automation' as Tag,
    title: 'High-Logic Lead Intelligence & Sales Router',
    subtitle: 'MBG Media — Production',
    description:
      'Developed a high-logic routing system using Zapier Paths to analyze, score, and filter incoming leads. Conditional logic automatically routes High Priority vs. Low Priority companies to the correct sales pipeline and tailored email sequences.',
    impact: '20% conversion uplift · Automated prioritization · Personalized outreach at scale',
    tools: ['Zapier Paths', 'AI by Zapier', 'Gmail', 'Apollo.io'],
    visual: 'from-indigo-600/20 to-purple-600/10',
    icon: <FunnelIcon />,
    status: 'Live',
    details: [
      'Webhook-triggered lead extraction and enrichment via Apollo',
      'AI scoring logic to classify High Priority vs Low Priority',
      'Branched paths with distinct email sequences per segment',
      'Google Sheets logging for sales team visibility',
    ],
  },
  {
    tag: 'Automation' as Tag,
    title: 'AI-Powered Multi-Post Content Engine',
    subtitle: 'MBG Media — Production',
    description:
      'Built an automated content distribution engine triggered by new file uploads in Google Drive. Integrated AI to extract content from URLs, process and reformat text, and publish dynamically across multiple platforms — all without human intervention.',
    impact: 'Multi-platform publishing · Automated content reformatting · Drive-triggered pipeline',
    tools: ['Zapier', 'Google Drive', 'AI Models', 'Facebook Pages', 'Google Sheets'],
    visual: 'from-orange-600/20 to-amber-600/10',
    icon: <SignalIcon />,
    status: 'Live',
    details: [
      'Triggered by new file in Google Drive folder',
      'AI step extracts and reformats content from source URL',
      'Formatter steps generate platform-specific post variants',
      'Conditional split publishes Video vs Image posts to Facebook Pages',
    ],
  },
  {
    tag: 'Automation' as Tag,
    title: 'Xero-Asana Invoice Reconciliation System',
    subtitle: 'Make.com (Integromat) — Production',
    description:
      'Built a Make.com scenario connecting Asana task completion events to Xero API calls, with an Iterator module to process bulk rows, a Text Aggregator for report generation, and automated Google Sheets logging for financial tracking.',
    impact: 'Real-time financial sync · Bulk processing · Automated audit trail',
    tools: ['Make.com', 'Xero API', 'Asana', 'Google Sheets', 'Router'],
    visual: 'from-emerald-600/20 to-green-600/10',
    icon: <TrendingUpIcon />,
    status: 'Live',
    details: [
      'Asana Watch Completed Tasks trigger',
      'Xero API call for invoice creation/status update',
      'Iterator module for bulk row processing',
      'Text aggregator compiles report, saved to Google Sheets',
    ],
  },
  {
    tag: 'Development' as Tag,
    title: 'InnSight',
    subtitle: 'Property Management System',
    description:
      'A comprehensive property management system designed for hospitality businesses. Handles room booking, guest records, billing, and occupancy reporting with a multi-tier database architecture and role-based access control.',
    impact: 'Full CRUD operations · Role-based access · Occupancy analytics dashboard',
    tools: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript'],
    visual: 'from-blue-600/20 to-sky-600/10',
    icon: <BuildingOfficeIcon />,
    status: 'Academic',
    details: [
      'Multi-role auth (Admin, Staff, Guest) via Supabase Auth',
      'Real-time room availability grid with booking calendar',
      'Automated billing calculations with PDF invoice generation',
      'Occupancy analytics dashboard with date-range filtering',
    ],
  },
  {
    tag: 'Development' as Tag,
    title: 'iSched',
    subtitle: 'Dynamic Scheduling System',
    description:
      'A dynamic scheduling platform that intelligently assigns time slots based on resource availability, priority rules, and conflict detection. Features drag-and-drop rescheduling and automated conflict resolution.',
    impact: 'Conflict-free scheduling · Priority-based allocation · Real-time updates',
    tools: ['Java', 'MySQL', 'PHP', 'REST API'],
    visual: 'from-violet-600/20 to-purple-600/10',
    icon: <CalendarIcon />,
    status: 'Academic',
    details: [
      'Rule-based scheduling engine with conflict detection',
      'Drag-and-drop interface for manual adjustments',
      'Priority queue algorithm for resource allocation',
      'Notification system for schedule changes',
    ],
  },
  {
    tag: 'Development' as Tag,
    title: 'MAPA',
    subtitle: 'Municipal Asset Tracking Dashboard',
    description:
      'A government-facing asset management dashboard for tracking municipal equipment, maintenance schedules, and geographic asset distribution. Features interactive map visualization and microservices-style data pipeline.',
    impact: 'GIS-enabled tracking · Maintenance scheduling · Multi-department access',
    tools: ['PHP', 'MySQL', 'Google Maps API', 'REST API'],
    visual: 'from-rose-600/20 to-pink-600/10',
    icon: <MapIcon />,
    status: 'Academic',
    details: [
      'Geolocation tracking with Google Maps API overlay',
      'Asset lifecycle management from procurement to disposal',
      'Predictive maintenance alerts based on usage logs',
      'Department-specific dashboards with export functionality',
    ],
  },
  {
    tag: 'Development' as Tag,
    title: 'Heritage Tourism App',
    subtitle: 'Mobile Tourism Application',
    description:
      'A mobile application showcasing local heritage sites and cultural landmarks in Lucban, Philippines. Features augmented reality overlays, audio guides, and an offline-capable map for tourists navigating heritage routes.',
    impact: 'AR-enhanced tours · Offline capability · Multi-language support',
    tools: ['Unity', 'ARCore', 'Java', 'Firebase'],
    visual: 'from-yellow-600/20 to-lime-600/10',
    icon: <BuildingLibraryIcon />,
    status: 'Academic',
    details: [
      'AR overlays using Unity ARCore for landmark recognition',
      'Audio guide system with auto-triggered location events',
      'Offline map with cached POI data via Firebase',
      'English and Filipino language toggle',
    ],
  },
]

const tabs: Tag[] = ['All', 'Automation', 'Development']

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tag>('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = activeTab === 'All' ? projects : projects.filter((p) => p.tag === activeTab)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-label mb-3">Portfolio</p>
            <h2 className="section-title mb-4">
              Systems I&apos;ve{' '}
              <span className="gradient-text">Architected & Built</span>
            </h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              From live production automation pipelines to full-stack academic projects — every
              system here solves a real problem.
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-teal-500 text-[#020817] shadow-lg shadow-teal-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => {
            const isExpanded = expandedId === project.title
            return (
              <ScrollReveal key={project.title} delay={i * 80}>
                <div
                  className="card card-hover group cursor-pointer h-full"
                  onClick={() => setExpandedId(isExpanded ? null : project.title)}
                >
                  {/* Visual header */}
                  <div
                    className={`relative h-36 rounded-lg mb-5 bg-gradient-to-br ${project.visual} border border-white/5 flex items-center justify-center overflow-hidden`}
                  >
                    {project.icon}
                    <div className="absolute top-3 right-3 flex gap-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium border ${
                          project.status === 'Live'
                            ? 'bg-teal-500/20 text-teal-400 border-teal-500/30'
                            : 'bg-slate-700/60 text-slate-400 border-slate-600/40'
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-slate-800/80 text-slate-400 border border-slate-700/40">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-1 text-teal-400 text-xs font-semibold uppercase tracking-wider">
                    {project.subtitle}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-teal-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Expanded details */}
                  {isExpanded && (
                    <div className="mb-4 animate-fade-in">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Implementation Details
                      </p>
                      <ul className="space-y-1.5">
                        {project.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="text-teal-400 mt-0.5 flex-shrink-0">→</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact */}
                  <div className="text-xs text-slate-500 italic mb-4 border-l-2 border-teal-500/30 pl-3">
                    {project.impact}
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="tech-pill">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button className="mt-4 text-xs text-slate-500 hover:text-teal-400 transition-colors flex items-center gap-1 cursor-pointer">
                    {isExpanded ? '▲ Collapse' : '▼ Show details'}
                  </button>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
