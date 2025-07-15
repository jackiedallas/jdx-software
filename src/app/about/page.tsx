import { Metadata } from 'next'
import AboutHero from './components/AboutHero'

export const metadata: Metadata = {
  title: 'About JDX Software',
  description: 'Learn about JDX Software, our mission to build high-impact tools for documentation, automation, and digital clarity.',
  openGraph: {
    title: 'About JDX Software',
    description: 'Learn about JDX Software, our mission to build high-impact tools for documentation, automation, and digital clarity.',
    url: 'https://jdxsoftware.com/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutHero />
    </main>
  )
}