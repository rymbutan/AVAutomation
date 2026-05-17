'use client'

import { useState } from 'react'

type Tag = 'All' | 'Automation' | 'Development'

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
    icon: '🔄',
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
    icon: '🎯',
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
    icon: '📡',
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
    icon: '💹',
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
    icon: '🏨',
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
    icon: '📅',
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
    icon: '🗺️',
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
    icon: '🏛️',
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

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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
          {filtered.map((project) => {
            const isExpanded = expandedId === project.title
            return (
              <div
                key={project.title}
                className="card card-hover group cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : project.title)}
              >
                {/* Visual header */}
                <div
                  className={`relative h-36 rounded-lg mb-5 bg-gradient-to-br ${project.visual} border border-white/5 flex items-center justify-center overflow-hidden`}
                >
                  <span className="text-5xl">{project.icon}</span>
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

                <button className="mt-4 text-xs text-slate-500 hover:text-teal-400 transition-colors flex items-center gap-1">
                  {isExpanded ? '▲ Collapse' : '▼ Show details'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
