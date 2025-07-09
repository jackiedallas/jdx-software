import { Metadata } from 'next'
import PulseHero from './components/PulseHero'

export const metadata: Metadata = {
  title: 'Pulse',
  description: 'Experience Pulse by JDX Software - our innovative solution for real-time monitoring and automation.',
  openGraph: {
    title: 'Pulse by JDX Software',
    description: 'Experience Pulse by JDX Software - our innovative solution for real-time monitoring and automation.',
    url: 'https://jdxsoftware.com/pulse',
  },
  alternates: {
    canonical: '/pulse',
  },
}

export default function PulsePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="pt-16"> {/* Account for navbar */}
        <PulseHero />
      </div>
    </main>
  )
}