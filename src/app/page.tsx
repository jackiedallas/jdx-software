import Hero from './components/Hero'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="pt-16"> {/* Account for navbar */}
        <Hero />
      </div>
    </main>
  )
}



