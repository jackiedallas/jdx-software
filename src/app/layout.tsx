// src/app/layout.tsx
import './globals.css'
import type { Metadata, Viewport } from 'next'
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: 'JDX Software - High-Impact SaaS Solutions for Modern Businesses',
    template: '%s | JDX Software'
  },
  description: 'Building innovative SaaS solutions that streamline workflows, enhance productivity, and drive business growth. Professional software tools for modern teams.',
  keywords: ['SaaS solutions', 'business software', 'productivity tools', 'workflow automation', 'software development', 'digital transformation', 'JDX Software'],
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
    title: 'JDX Software - High-Impact SaaS Solutions for Modern Businesses',
    description: 'Building innovative SaaS solutions that streamline workflows, enhance productivity, and drive business growth. Professional software tools for modern teams.',
    siteName: 'JDX Software',
    images: [
      {
        url: '/api/og?v=2',
        width: 1200,
        height: 630,
        alt: 'JDX Software - High-Impact SaaS Solutions for Modern Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JDX Software - High-Impact SaaS Solutions for Modern Businesses',
    description: 'Building innovative SaaS solutions that streamline workflows, enhance productivity, and drive business growth. Professional software tools for modern teams.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jdxsoftware.com" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="facebook-domain-verification" content="7tzh0mrsjl23s3dcr0ll3eypizo5c1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JDX Software",
              "url": "https://jdxsoftware.com",
              "logo": "https://jdxsoftware.com/jdx-logo-full-jpg.jpg",
              "description": "Building innovative SaaS solutions that streamline workflows, enhance productivity, and drive business growth. Professional software tools for modern teams.",
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