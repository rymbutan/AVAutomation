import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import SmoothScroll from './components/SmoothScroll'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import PageTransition from './components/PageTransition'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffbc95',
}

export const metadata: Metadata = {
  title: 'Arym Vendiola | AI Automation Specialist',
  description:
    'Freelance AI Automation Specialist & Technical VA. I build systems that work while you sleep — from CRM automation to full-stack development.',
  keywords: ['AI Automation', 'Technical VA', 'CRM Automation', 'Zapier', 'Make.com', 'n8n'],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Arym Vendiola',
  },
  openGraph: {
    title: 'Arym Vendiola | AI Automation Specialist',
    description: 'Freelance AI Automation Specialist & Technical VA. Systems that work while you sleep.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className={`${jakarta.variable} font-jakarta bg-cream text-grey antialiased`}>
        <ScrollProgress />
        <PageTransition />
        <div className="top-glow" aria-hidden="true" />
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js'))}`,
          }}
        />
      </body>
    </html>
  )
}
