import { IBM_Plex_Sans } from 'next/font/google'
import StaticBackground from '../../components/StaticBackground'
import NewsletterSignupForm from './NewsletterSignupForm'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function NewsletterHero() {
    return (
        <>
            <StaticBackground />
            <div className="pt-16"> {/* Account for navbar */}
                <section
                    className={`bg-transparent text-neutral-900 min-h-screen flex flex-col justify-start items-center text-center px-4 sm:px-6 lg:px-8 py-8 ${ibmPlexSans.className}`}
                >
                    <div className="w-full max-w-6xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
                        {/* Header */}
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                                <span className="text-neutral-900 font-light">
                                    JDX Newsletter
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Stay updated with JDX Software's latest developments, new blog posts, product updates, and insights from our founder's journey in building modern software tools.
                            </p>
                        </div>

                        {/* Newsletter Signup Section */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="p-8 lg:p-12">
                                <div className="max-w-4xl mx-auto">
                                    {/* Header */}
                                    <div className="text-center mb-8">
                                        <div className="flex items-center justify-center space-x-3 mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 rounded-lg flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                                Join the JDX Newsletter
                                            </h2>
                                        </div>
                                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                            Get the latest blog posts, product updates, and behind-the-scenes insights delivered directly to your inbox.
                                        </p>
                                    </div>

                                    {/* Newsletter Signup Form */}
                                    <div className="flex justify-center">
                                        <NewsletterSignupForm />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Value Proposition */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">New Blog Posts</h3>
                                <p className="text-gray-600 text-sm">Get notified immediately when we publish new insights, tutorials, and founder stories.</p>
                            </div>

                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Updates</h3>
                                <p className="text-gray-600 text-sm">Stay informed about new features, improvements, and releases across our software suite.</p>
                            </div>

                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Behind the Scenes</h3>
                                <p className="text-gray-600 text-sm">Exclusive looks at our development process, challenges, and lessons learned.</p>
                            </div>

                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Founder Insights</h3>
                                <p className="text-gray-600 text-sm">Personal reflections on entrepreneurship, technology, and building software that matters.</p>
                            </div>
                        </div>

                        {/* Recent Blog Posts Preview */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="p-8 lg:p-12">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                        Recent from the Blog
                                    </h2>
                                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                        Get a taste of what you'll receive in your inbox
                                    </p>
                                </div>
                                
                                <div className="text-center">
                                    <a
                                        href="/blog"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:via-sky-500 hover:to-emerald-600 transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                        Read Our Blog
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Footer section */}
                        <div className="text-center pb-16">
                            <p className="text-gray-500 text-sm">
                                No spam, ever. Unsubscribe at any time. Read our{' '}
                                <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}