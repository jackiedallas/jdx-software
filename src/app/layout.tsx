// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

// Performance monitoring
if (typeof window !== 'undefined') {
  import('@/lib/seo/technical-seo').then(({ trackPerformanceMetrics }) => {
    trackPerformanceMetrics();
  });
}

export const metadata: Metadata = {
  title: {
    default: 'JDX Software - High-Impact Tools for Documentation & Automation',
    template: '%s | JDX Software'
  },
  description: 'Building high-impact tools for documentation, automation, and digital clarity. Professional software solutions for modern businesses.',
  keywords: ['software development', 'documentation tools', 'automation', 'digital clarity', 'business tools', 'JDX Software'],
  authors: [{ name: 'JDX Software' }],
  creator: 'JDX Software',
  publisher: 'JDX Software',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jdxsoftware.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jdxsoftware.com',
    title: 'JDX Software - High-Impact Tools for Documentation & Automation',
    description: 'Building high-impact tools for documentation, automation, and digital clarity. Professional software solutions for modern businesses.',
    siteName: 'JDX Software',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JDX Software - High-Impact Tools for Documentation & Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JDX Software - High-Impact Tools for Documentation & Automation',
    description: 'Building high-impact tools for documentation, automation, and digital clarity. Professional software solutions for modern businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://jdxsoftware.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JDX Software",
              "url": "https://jdxsoftware.com",
              "logo": "https://jdxsoftware.com/jdx-logo-full-jpg.jpg",
              "description": "Building high-impact tools for documentation, automation, and digital clarity. Professional software solutions for modern businesses.",
              "sameAs": [
                "https://github.com/jdx"
              ]
            }),
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2YF6QQQSWR"></script>
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2YF6QQQSWR', {
                page_title: document.title,
                page_location: window.location.href,
                custom_map: {
                  dimension1: 'page_type',
                  dimension2: 'user_type'
                }
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow" role="main">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}