'use client'

import { motion } from 'framer-motion'
import { IBM_Plex_Sans } from 'next/font/google'
import { useState } from 'react'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function MotionHeaderSection() {
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
        <motion.section
            className={`bg-transparent text-neutral-900 min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 ${ibmPlexSans.className}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
        >
            <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 lg:space-y-12">
                {/* JDX Software Title - Responsive Typography */}
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-6 leading-tight"
                    initial={{ scale: 0.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'linear' }}
                >
                    <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 bg-clip-text text-transparent font-bold">
                        JDX
                    </span>{' '}
                    <span className="text-neutral-900 font-light">
                        Software
                    </span>
                </motion.h1>
                
                {/* Content Container - Delayed Animation */}
                <motion.div
                    className="flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: 'easeOut', delay: 2.0 }}
                >
                    {/* Tagline - Responsive Text Size */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mb-4 sm:mb-6 px-2 sm:px-0 leading-relaxed">
                        Building high-impact tools for documentation, automation, and digital clarity.
                    </p>

                    {/* Mission Statement */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                        We build powerful SaaS tools that help businesses streamline documentation, automate workflows, and achieve digital clarity. Our flagship product, Manualize, makes professional documentation effortless.
                    </p>

                    {/* Product Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8 sm:mb-10">
                        <motion.a
                            href="/software"
                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 text-white font-medium text-sm sm:text-base rounded-lg hover:from-blue-600 hover:via-sky-500 hover:to-emerald-600 transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.5 }}
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2M9 17h6" />
                            </svg>
                            View Our Software
                        </motion.a>
                        <motion.a
                            href="/pulse"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium text-sm sm:text-base rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.7 }}
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            JDX Pulse Newsletter
                        </motion.a>
                    </div>

                    {/* Email Signup Container */}
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg px-2 sm:px-0">
                            Get updates on new tools and features
                        </p>
                        
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                                {/* Email Input - Full Width on Mobile */}
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200"
                                    disabled={isLoading}
                                />
                                {/* Button - Full Width on Mobile, Adaptive on Desktop */}
                                <button
                                    type="submit"
                                    disabled={isLoading || !email}
                                    className="w-full sm:w-auto px-6 py-3 sm:py-4 bg-neutral-900 text-white font-medium text-sm sm:text-base rounded-lg hover:bg-neutral-700 transform hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
                                >
                                    {isLoading ? 'Signing up...' : 'Notify Me'}
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex items-center justify-center space-x-2 py-3 sm:py-4 px-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-sm sm:text-base"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Thanks! We&#39;ll keep you updated.</span>
                            </motion.div>
                        )}

                        {/* Error Message */}
                        {error && (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="mt-3 p-3 sm:p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm sm:text-base"
                            >
                                {error}
                            </motion.div>
                        )}
                        
                        {/* Privacy Notice */}
                        <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 px-2 sm:px-0">
                            No spam, unsubscribe at any time
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}