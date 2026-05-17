import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arym Vendiola | AI Automation & Technical VA',
  description:
    'IT professional specializing in AI model integration, business process automation, and quality assurance. Building systems that work smarter.',
  keywords: [
    'AI Automation',
    'Technical VA',
    'Zapier',
    'CRM Automation',
    'Quality Assurance',
    'Workflow Optimization',
  ],
  openGraph: {
    title: 'Arym Vendiola | AI Automation & Technical VA',
    description:
      'IT professional specializing in AI model integration and business process automation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} font-sans bg-[#020817] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
