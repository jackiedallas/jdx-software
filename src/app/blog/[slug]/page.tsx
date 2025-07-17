import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostSlugs, getPostHtml } from '../../../lib/mdx'
import SocialShareButtons from '../../../components/seo/SocialShareButtons'
import '../blog-content.css'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = await getPostHtml(slug)
    const postUrl = `https://jdxsoftware.com/blog/${slug}`
    const ogImage = `https://jdxsoftware.com/api/og?title=${encodeURIComponent(post.meta.title)}&description=${encodeURIComponent(post.meta.description)}&v=2`
    
    return {
      title: `${post.meta.title} | JDX Software Blog`,
      description: post.meta.description,
      authors: [{ name: 'JDX Software' }],
      keywords: post.meta.keywords || ['software development', 'automation', 'developer tools'],
      openGraph: {
        title: post.meta.title,
        description: post.meta.description,
        url: postUrl,
        siteName: 'JDX Software',
        type: 'article',
        publishedTime: post.meta.date,
        modifiedTime: post.meta.updatedDate || post.meta.date,
        authors: ['JDX Software'],
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: post.meta.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.meta.title,
        description: post.meta.description,
        images: [ogImage],
        creator: '@jdxcode',
        site: '@jdxcode',
      },
      alternates: {
        canonical: `/blog/${slug}`,
      },
    }
  } catch {
    return {
      title: 'Post Not Found | JDX Software Blog',
      description: 'The requested blog post could not be found.',
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params
    const post = await getPostHtml(slug)
    const postUrl = `https://jdxsoftware.com/blog/${slug}`

    return (
      <main className="min-h-screen pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <article className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-8 lg:p-12 border border-gray-200">
            <header className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3 sm:gap-4">
                <time className="text-sm text-gray-500" dateTime={post.meta.date}>
                  {new Date(post.meta.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-gray-500 mr-1 sm:mr-2">Share:</span>
                  <SocialShareButtons
                    url={postUrl}
                    title={post.meta.title}
                    description={post.meta.description}
                    hashtags={Array.isArray(post.meta.tags) ? post.meta.tags : ['jdx', 'software', 'development']}
                    platforms={['linkedin', 'facebook', 'reddit']}
                    size="small"
                    variant="minimal"
                  />
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                {post.meta.title}
              </h1>
              
              {post.meta.description && (
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {post.meta.description}
                </p>
              )}
            </header>

            <div 
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
            />
            
            <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Share this post</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Found this helpful? Share it with your network!</p>
                </div>
                
                <SocialShareButtons
                  url={postUrl}
                  title={post.meta.title}
                  description={post.meta.description}
                  hashtags={Array.isArray(post.meta.tags) ? post.meta.tags : ['jdx', 'software', 'development']}
                  platforms={['linkedin', 'facebook', 'reddit', 'copy']}
                  size="medium"
                  showLabels={false}
                  variant="default"
                  className="flex-wrap justify-center"
                />
              </div>
            </footer>
          </article>

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:via-sky-500 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              More Posts
            </Link>
          </div>
        </div>
      </main>
    )
  } catch {
    notFound()
  }
}