import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import './globals.css'
import SmoothScroll from './components/SmoothScroll'
import ScrollProgress from './components/ScrollProgress'
import PageTransition from './components/PageTransition'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffbc95',
}

export const metadata: Metadata = {
  title: 'Arym Vendiola | Freelance AI Automation Specialist',
  description:
    'Freelance AI automation specialist. I build Zapier, Make and CRM workflows that take repetitive work off founders and small teams.',
  keywords: ['AI Automation', 'Technical VA', 'CRM Automation', 'Zapier', 'Make.com', 'n8n'],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Arym Vendiola',
  },
  openGraph: {
    title: 'Arym Vendiola | Freelance AI Automation Specialist',
    description: 'I build Zapier, Make and CRM workflows that take repetitive work off your plate.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className={`${jakarta.variable} ${fraunces.variable} font-jakarta bg-cream text-grey antialiased`}>
        <ScrollProgress />
        <PageTransition />
        <div className="top-glow" aria-hidden="true" />
        <SmoothScroll>
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
