import { Metadata } from 'next'
import ServicesHero from './components/ServicesHero'

export const metadata: Metadata = {
  title: 'Website Building Services - JDX Software',
  description: 'Professional website building services from JDX Software. Custom web development, responsive design, and digital solutions for your business.',
  openGraph: {
    title: 'Website Building Services - JDX Software',
    description: 'Professional website building services from JDX Software. Custom web development, responsive design, and digital solutions for your business.',
    url: 'https://jdxsoftware.com/services',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ServicesHero />
    </main>
  )
}