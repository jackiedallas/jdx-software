import { Metadata } from 'next'
import SoftwareHero from './components/SoftwareHero'

export const metadata: Metadata = {
  title: 'Software Solutions',
  description: 'Discover JDX Software\'s comprehensive suite of tools for documentation, automation, and digital clarity.',
  openGraph: {
    title: 'JDX Software Solutions',
    description: 'Discover JDX Software\'s comprehensive suite of tools for documentation, automation, and digital clarity.',
    url: 'https://jdxsoftware.com/software',
  },
  alternates: {
    canonical: '/software',
  },
}

export default function SoftwarePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SoftwareHero />
    </main>
  )
}