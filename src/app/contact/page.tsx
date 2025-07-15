import { Metadata } from 'next'
import ContactHero from './components/ContactHero'

export const metadata: Metadata = {
  title: 'Contact JDX Software',
  description: 'Get in touch with JDX Software. Send us an inquiry about our services or discuss your next project.',
  openGraph: {
    title: 'Contact JDX Software',
    description: 'Get in touch with JDX Software. Send us an inquiry about our services or discuss your next project.',
    url: 'https://jdxsoftware.com/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContactHero />
    </main>
  )
}
