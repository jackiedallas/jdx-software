import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with JDX Software for your documentation, automation, and digital clarity needs.',
  openGraph: {
    title: 'Contact JDX Software',
    description: 'Get in touch with JDX Software for your documentation, automation, and digital clarity needs.',
    url: 'https://jdxsoftware.com/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <header>
                <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            </header>
            <section>
                <p className="text-lg mb-4">
                    Ready to discuss your documentation, automation, or digital clarity needs?
                </p>
                <p className="text-lg">
                    Contact JDX Software today to learn how we can help your business.
                </p>
            </section>
        </div>
    )
}
