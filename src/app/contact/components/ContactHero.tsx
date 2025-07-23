'use client'

import { IBM_Plex_Sans } from 'next/font/google'
import { useState } from 'react'
import StaticBackground from '../../components/StaticBackground'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function ContactHero() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message) return

        setIsLoading(true)
        setError('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message')
            }

            setIsSubmitted(true)
            setFormData({
                name: '',
                email: '',
                company: '',
                subject: '',
                message: ''
            })
            
            setTimeout(() => setIsSubmitted(false), 10000)

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }

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
                                    Contact
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Ready to transform your business? Let&apos;s discuss your project and explore how we can help.
                            </p>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                                {/* Contact Information */}
                                <div className="flex flex-col justify-center items-center text-center space-y-6">
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                            Have a project in mind? Looking for a software solution? We&apos;d love to hear from you and discuss how JDX Software can help bring your ideas to life.
                                        </p>
                                    </div>

                                    <div className="w-full flex justify-center">
                                        {/* Mobile Layout - Stacked items */}
                                        <div className="sm:hidden space-y-6">
                                            <div className="flex flex-col items-center text-center space-y-3">
                                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Email</h4>
                                                    <p className="text-gray-600">info@jdxsoftware.com</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center text-center space-y-3">
                                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Response Time</h4>
                                                    <p className="text-gray-600">Within 24 hours</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center text-center space-y-3">
                                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                                                    <p className="text-gray-600">30-minute discovery call</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Desktop Layout - Two columns */}
                                        <div className="hidden sm:grid grid-cols-2 gap-4 items-center">
                                            {/* Icons Column */}
                                            <div className="flex flex-col items-center space-y-6">
                                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            
                                            {/* Text Column */}
                                            <div className="flex flex-col justify-center space-y-6">
                                                <div className="text-center">
                                                    <h4 className="font-semibold text-gray-900">Email</h4>
                                                    <p className="text-gray-600">info@jdxsoftware.com</p>
                                                </div>
                                                <div className="text-center">
                                                    <h4 className="font-semibold text-gray-900">Response Time</h4>
                                                    <p className="text-gray-600">Within 24 hours</p>
                                                </div>
                                                <div className="text-center">
                                                    <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                                                    <p className="text-gray-600">30-minute discovery call</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="w-full">
                                    {!isSubmitted ? (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                        Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200"
                                                        placeholder="Your full name"
                                                        disabled={isLoading}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                        Email *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200"
                                                        placeholder="your@email.com"
                                                        disabled={isLoading}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200"
                                                    placeholder="Your company name"
                                                    disabled={isLoading}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Subject
                                                </label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-200"
                                                    disabled={isLoading}
                                                >
                                                    <option value="">Select a topic</option>
                                                    <option value="general">General Inquiry</option>
                                                    <option value="project">New Project</option>
                                                    <option value="consultation">Free Consultation</option>
                                                    <option value="support">Support</option>
                                                    <option value="partnership">Partnership</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Message *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={6}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200 resize-vertical"
                                                    placeholder="Tell us about your project, goals, or any questions you have..."
                                                    disabled={isLoading}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isLoading || !formData.name || !formData.email || !formData.message}
                                                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 text-white font-semibold text-base rounded-lg hover:from-blue-600 hover:via-sky-500 hover:to-emerald-600 transform hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                {isLoading ? 'Sending Message...' : 'Send Message'}
                                            </button>
                                        </form>
                                    ) : (
                                        <div className="flex items-center justify-center space-x-3 py-12 px-6 bg-green-50 text-green-700 rounded-lg border border-green-200">
                                            <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <div className="text-center">
                                                <h3 className="font-semibold mb-1">Message Sent Successfully!</h3>
                                                <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
                                            </div>
                                        </div>
                                    )}

                                    {error && (
                                        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                                            {error}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}