import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import SmoothScroll from './components/SmoothScroll'
import Cursor from './components/Cursor'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arym Vendiola | AI Automation & Technical VA',
  description:
    'Freelance AI Automation Specialist & Technical VA. I build systems that work while you sleep — from CRM automation to full-stack development.',
  keywords: [
    'AI Automation',
    'Technical VA',
    'CRM Automation',
    'Workflow Optimization',
    'Full-Stack Development',
    'Zapier',
    'n8n',
  ],
  openGraph: {
    title: 'Arym Vendiola | AI Automation & Technical VA',
    description:
      'Freelance AI Automation Specialist & Technical VA. 5 years automating systems that never stop.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-jakarta bg-cream text-grey antialiased`}>
        <div className="top-glow" aria-hidden="true" />
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
