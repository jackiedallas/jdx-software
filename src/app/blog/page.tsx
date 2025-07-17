import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '../../lib/mdx'
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
  const posts = getAllPosts()

  if (posts.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="pt-16">
          <BlogComingSoon />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 bg-clip-text text-transparent">
              JDX
            </span>{' '}
            <span className="text-neutral-900">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights on software development, automation, and digital innovation
          </p>
        </div>

        <div className="space-y-8">
          {posts.map(({ slug, meta }) => (
            <article key={slug} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center text-sm text-gray-500">
                  <time dateTime={meta.date}>
                    {new Date(meta.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  <Link 
                    href={`/blog/${slug}`}
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {meta.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {meta.description}
                </p>
                
                <div className="pt-4">
                  <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}