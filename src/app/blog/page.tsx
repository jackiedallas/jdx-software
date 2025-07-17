import { Metadata } from 'next'
import Link from 'next/link'
import { IBM_Plex_Sans } from 'next/font/google'
import { getAllPosts } from '../../lib/mdx'
import BlogComingSoon from './components/BlogComingSoon'
import StaticBackground from '../components/StaticBackground'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Pulse',
  description: 'Read the latest insights on software development, documentation tools, automation, and digital clarity from JDX Software.',
  openGraph: {
    title: 'JDX Pulse',
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
      <main className="flex min-h-screen flex-col">
        <BlogComingSoon />
      </main>
    )
  }

  return (
    <>
      <StaticBackground />
      <div className="pt-16">
        <main className={`bg-transparent text-neutral-900 min-h-screen flex flex-col justify-start items-center text-center px-3 sm:px-6 lg:px-8 py-6 sm:py-8 ${ibmPlexSans.className}`}>
          <div className="w-full max-w-6xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16 xl:space-y-20">
            {/* Header */}
            <div className="text-center px-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight">
                <span className="text-neutral-900 font-light">
                  Pulse
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Insights on software development, automation, and digital innovation
              </p>
            </div>

            {/* Blog Posts */}
            <div className="space-y-6 sm:space-y-8 px-2">
              {posts.map(({ slug, meta }) => (
                <article key={slug} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-200">
                  <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
                    <div className="flex flex-col space-y-3 sm:space-y-4 text-left">
                      <div className="flex items-center text-xs sm:text-sm text-gray-500">
                        <time dateTime={meta.date}>
                          {new Date(meta.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                        <Link 
                          href={`/blog/${slug}`}
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          {meta.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {meta.description}
                      </p>
                      
                      <div className="pt-2 sm:pt-4">
                        <Link
                          href={`/blog/${slug}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-sm sm:text-base"
                        >
                          Read more
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}