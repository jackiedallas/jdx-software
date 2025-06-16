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
            
            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000)

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <motion.section
            className={`bg-transparent text-neutral-900 min-h-screen flex flex-col justify-center items-center text-center px-4 ${ibmPlexSans.className}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
        >
            <section className="text-neutral-900 min-h-screen relative z-10 flex flex-col justify-center items-center text-center px-4">
                {/* JDX Software Title - Animates First */}
                <motion.h1
                    className="text-4xl md:text-6xl mb-4"
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
                
                {/* Rest of Content - Delayed by 2 seconds */}
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: 'easeOut', delay: 2.0 }}
                >
                    <p className="text-lg md:text-xl text-gray-500 max-w-xl mb-6">
                        Building high-impact tools for documentation, automation, and digital clarity.
                    </p>

                    {/* Coming Soon Text */}
                    <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8">
                        Our website is coming soon.
                    </p>

                    {/* Email Signup Form */}
                    <div className="w-full max-w-md">
                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                            Be the first to know when we launch
                        </p>
                        
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !email}
                                    className="px-6 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isLoading ? 'Signing up...' : 'Notify Me'}
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex items-center justify-center space-x-2 py-3 px-4 bg-green-50 text-green-700 rounded-lg border border-green-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
                                className="mt-3 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm"
                            >
                                {error}
                            </motion.div>
                        )}
                        
                        <p className="text-xs text-gray-400 mt-3">
                            No spam, unsubscribe at any time
                        </p>
                    </div>
                </motion.div>
            </section>
        </motion.section>
    )
}