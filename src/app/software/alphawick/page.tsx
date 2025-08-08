import { Metadata } from 'next'
import AlphaWickHero from './components/AlphaWickHero'

export const metadata: Metadata = {
  title: 'AlphaWick - AI-Powered Stock Analysis App - JDX Software',
  description: 'AlphaWick is an educational stock analysis mobile app featuring AI-powered insights, real-time data, technical indicators, and personalized watchlists.',
  openGraph: {
    title: 'AlphaWick - AI-Powered Stock Analysis App - JDX Software',
    description: 'AlphaWick is an educational stock analysis mobile app featuring AI-powered insights, real-time data, technical indicators, and personalized watchlists.',
    url: 'https://jdxsoftware.com/software/alphawick',
  },
  alternates: {
    canonical: '/software/alphawick',
  },
}

export default function AlphaWickPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AlphaWickHero />
    </main>
  )
}