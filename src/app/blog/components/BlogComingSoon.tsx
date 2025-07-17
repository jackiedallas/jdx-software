'use client'

import { motion } from 'framer-motion'
import { IBM_Plex_Sans } from 'next/font/google'
import { useState } from 'react'
import Link from 'next/link'
import StaticBackground from '../../components/StaticBackground'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function BlogComingSoon() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsLoading(true)
        setError('')

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to subscribe')
            }

            setIsSubmitted(true)
            setEmail('')
            
            setTimeout(() => setIsSubmitted(false), 5000)

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <StaticBackground />
            <motion.section
                className={`bg-transparent text-neutral-900 min-h-screen flex flex-col justify-center items-center text-center px-3 sm:px-6 lg:px-8 ${ibmPlexSans.className}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            >
                <div className="w-full max-w-4xl mx-auto space-y-8 sm:space-y-10">
                    {/* Blog Title */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight"
                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: 'linear' }}
                    >
                        <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 bg-clip-text text-transparent font-bold">
                            JDX
                        </span>{' '}
                        <span className="text-neutral-900 font-light">
                            Blog
                        </span>
                    </motion.h1>
                    
                    {/* Content Container */}
                    <motion.div
                        className="flex flex-col items-center space-y-6 sm:space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, ease: 'easeOut', delay: 2.0 }}
                    >
                        {/* Coming Soon Message */}
                        <div className="text-center mb-6 sm:mb-8">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-medium mb-3 sm:mb-4">
                                Coming Soon
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
                                We&apos;re crafting insightful content about software development, automation, and digital innovation.
                            </p>
                        </div>

                        {/* What to Expect */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl w-full mb-6 sm:mb-8 px-2">
                            <motion.div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 2.3 }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Tech Insights</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">Deep dives into software development, emerging technologies, and industry trends.</p>
                            </motion.div>

                            <motion.div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 2.5 }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Automation Tips</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">Practical guides for automating workflows and increasing productivity.</p>
                            </motion.div>

                            <motion.div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 2.7 }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Behind the Scenes</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">Stories from building JDX Software tools and lessons learned.</p>
                            </motion.div>
                        </div>

                        {/* Newsletter Signup */}
                        <motion.div
                            className="w-full max-w-md px-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.9 }}
                        >
                            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg font-medium">
                                Get notified when we publish
                            </p>
                            
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200"
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !email}
                                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 text-white font-semibold text-sm sm:text-base rounded-lg hover:from-blue-600 hover:via-sky-500 hover:to-emerald-600 transform hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        {isLoading ? 'Subscribing...' : 'Notify Me'}
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex items-center justify-center space-x-2 py-3 sm:py-4 px-3 sm:px-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-sm sm:text-base"
                                >
                                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Thanks! You&apos;ll be notified when we launch.</span>
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="mt-3 sm:mt-4 p-3 sm:p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm sm:text-base"
                                >
                                    {error}
                                </motion.div>
                            )}
                            
                            <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
                                No spam • Unsubscribe anytime
                            </p>
                        </motion.div>

                        {/* Back to Home */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 3.1 }}
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}