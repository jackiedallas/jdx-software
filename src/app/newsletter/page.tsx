import { Metadata } from 'next'
import NewsletterHero from './components/NewsletterHero'

export const metadata: Metadata = {
  title: 'JDX Newsletter | Software Development Insights & Updates',
  description: 'Subscribe to the JDX Newsletter for the latest blog posts, product updates, and insights from our founder\'s journey building modern software tools.',
  openGraph: {
    title: 'JDX Newsletter | Software Development Insights & Updates',
    description: 'Subscribe to the JDX Newsletter for the latest blog posts, product updates, and insights from our founder\'s journey building modern software tools.',
    url: 'https://jdxsoftware.com/newsletter',
  },
  alternates: {
    canonical: '/newsletter',
  },
}

export default function NewsletterPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NewsletterHero />
    </main>
  )
}