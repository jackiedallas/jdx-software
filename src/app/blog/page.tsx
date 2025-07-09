import { Metadata } from 'next'
import BlogComingSoon from './components/BlogComingSoon'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest insights on software development, documentation tools, automation, and digital clarity from JDX Software.',
  openGraph: {
    title: 'JDX Software Blog',
    description: 'Read the latest insights on software development, documentation tools, automation, and digital clarity from JDX Software.',
    url: 'https://jdxsoftware.com/blog',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="pt-16"> {/* Account for navbar */}
        <BlogComingSoon />
      </div>
    </main>
  )
}