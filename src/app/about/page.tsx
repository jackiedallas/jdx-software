import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about JDX Software and our mission to build high-impact tools for documentation, automation, and digital clarity.',
  openGraph: {
    title: 'About JDX Software',
    description: 'Learn about JDX Software and our mission to build high-impact tools for documentation, automation, and digital clarity.',
    url: 'https://jdxsoftware.com/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <header>
                <h1 className="text-4xl font-bold mb-8">About JDX Software</h1>
            </header>
            <section>
                <p className="text-lg mb-4">
                    JDX Software is dedicated to building high-impact tools for documentation, automation, and digital clarity.
                </p>
                <p className="text-lg">
                    Our mission is to provide professional software solutions that help modern businesses streamline their processes and improve their digital presence.
                </p>
            </section>
        </div>
    )
}