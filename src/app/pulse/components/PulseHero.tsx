'use client'

import { motion } from 'framer-motion'
import { IBM_Plex_Sans } from 'next/font/google'
import { useState } from 'react'
import ConstellationBackground from '../../components/ConstellationBackground'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function PulseHero() {
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
            const response = await fetch('/api/pulse-newsletter', {
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
            <ConstellationBackground />
            <motion.section
                className={`bg-transparent text-neutral-900 min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 ${ibmPlexSans.className}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            >
                <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 lg:space-y-12">
                    {/* JDX Pulse Title */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 md:mb-8 leading-tight"
                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: 'linear' }}
                    >
                        <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 bg-clip-text text-transparent font-bold">
                            JDX
                        </span>{' '}
                        <span className="text-neutral-900 font-light">
                            Pulse
                        </span>
                    </motion.h1>
                    
                    {/* Content Container */}
                    <motion.div
                        className="flex flex-col items-center space-y-6 sm:space-y-8 lg:space-y-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, ease: 'easeOut', delay: 2.0 }}
                    >
                        {/* Main Description */}
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-2xl lg:max-w-3xl mb-6 sm:mb-8 px-2 sm:px-0 leading-relaxed font-medium">
                            AI-curated newsletter delivering the internet&apos;s top trends from Reddit, YouTube, GitHub, and more.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl w-full mb-8 sm:mb-12">
                            <div className="flex items-start space-x-3 p-4 sm:p-6 bg-white/80 rounded-lg border border-gray-200">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Curation</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">Smart algorithms identify and summarize the most relevant trending content across platforms.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 p-4 sm:p-6 bg-white/80 rounded-lg border border-gray-200">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Delivery</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">Get your curated digest delivered straight to your inbox every morning.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 p-4 sm:p-6 bg-white/80 rounded-lg border border-gray-200">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2M9 17h6" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Platform Coverage</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">Reddit, YouTube, GitHub, Hacker News, and more - all in one place.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 p-4 sm:p-6 bg-white/80 rounded-lg border border-gray-200">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Concise Summaries</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">No fluff - just the key insights from trending content, powered by GPT-4.</p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="w-full max-w-md">
                            <p className="text-gray-600 mb-6 text-lg sm:text-xl font-medium">
                                Stay ahead of the curve
                            </p>
                            
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-4 py-4 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200"
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !email}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 text-white font-semibold text-base rounded-lg hover:from-blue-600 hover:via-sky-500 hover:to-emerald-600 transform hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        {isLoading ? 'Subscribing...' : 'Subscribe to JDX Pulse'}
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex items-center justify-center space-x-2 py-4 px-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-base"
                                >
                                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Welcome to JDX Pulse! Check your inbox.</span>
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-base"
                                >
                                    {error}
                                </motion.div>
                            )}
                            
                            <p className="text-sm text-gray-400 mt-4">
                                Free newsletter • Unsubscribe anytime • No spam
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}