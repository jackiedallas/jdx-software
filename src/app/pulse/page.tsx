import PulseHero from './components/PulseHero'

export default function PulsePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="pt-16"> {/* Account for navbar */}
        <PulseHero />
      </div>
    </main>
  )
}