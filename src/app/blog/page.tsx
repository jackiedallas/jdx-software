import BlogComingSoon from './components/BlogComingSoon'

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="pt-16"> {/* Account for navbar */}
        <BlogComingSoon />
      </div>
    </main>
  )
}