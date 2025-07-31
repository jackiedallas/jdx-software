'use client'

import { IBM_Plex_Sans } from 'next/font/google'
import StaticBackground from '../../components/StaticBackground'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function ServicesHero() {
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
                                    Website Packages for Small Businesses & Entrepreneurs
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Affordable website design services for small businesses and entrepreneurs—fast turnaround, mobile-ready, and built to grow with your brand.
                            </p>
                        </div>

                        {/* Service Tiers */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Tier 1: LaunchPad Site */}
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                                <div className="p-8 lg:p-10">
                                    <div className="text-center mb-8">
                                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">LaunchPad Site</h3>
                                        <p className="text-gray-600 mb-4">For local businesses, solopreneurs, side hustlers</p>
                                        <div className="text-lg font-semibold text-blue-600">3–5 business days</div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                                            <ul className="space-y-2 text-sm text-gray-600">
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    1–3 pages (Home, About, Contact)
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    Mobile-responsive layout
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    Branded colors, logo integration, font styling
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    Contact form with email notifications
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    Domain setup + basic SEO
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    Google Analytics or Facebook Pixel
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    30-day post-launch support
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="border-t pt-6">
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium text-gray-700">Build-Only:</span>
                                                    <span className="text-lg font-bold text-gray-900">$500 – $1,500</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium text-gray-700">Managed Plan:</span>
                                                    <span className="text-lg font-bold text-gray-900">$1,000 + $45–$65/mo</span>
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">Built with Wix or Framer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tier 2: Growth Site */}
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                                <div className="p-8 lg:p-10">
                                    <div className="text-center mb-8">
                                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Site</h3>
                                        <p className="text-gray-600 mb-4">For creators, small business owners, coaches, consultants</p>
                                        <div className="text-lg font-semibold text-green-600">1–2 weeks</div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                                            <ul className="space-y-2 text-sm text-gray-600">
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    5–8 custom pages (Home, Services, About, Blog, Contact, etc.)
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    CMS for client-edited content (blog posts, staff, testimonials)
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    Modern layout using reusable components
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    Fully responsive build across devices
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    Contact form with thank-you confirmation
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    SEO-ready setup: meta tags, sitemap, Open Graph
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    Hosted via Vercel (or Netlify if preferred)
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    CMS training via Loom or Manualize
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    30-day support with optional maintenance retainer
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="border-t pt-6">
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium text-gray-700">Build-Only:</span>
                                                    <span className="text-lg font-bold text-gray-900">$2,000 – $4,000</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium text-gray-700">Managed Plan:</span>
                                                    <span className="text-lg font-bold text-gray-900">$3,000 + $85–$125/mo</span>
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">Built with Next.js + Tailwind CSS + CMS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Process Section */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="p-8 lg:p-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                        A simple, streamlined process designed for speed and clarity.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                                            1
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Intake Form</h3>
                                        <p className="text-gray-600 text-sm">Fill out our project intake form with your business details, requirements, and goals.</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                                            2
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Review & Discovery</h3>
                                        <p className="text-gray-600 text-sm">We review your form and may schedule a brief call to clarify your needs and expectations.</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                                            3
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive Proposal</h3>
                                        <p className="text-gray-600 text-sm">Get a custom proposal with timeline, deliverables, and pricing. Pay 50% deposit to get started.</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                                            4
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Build & Launch</h3>
                                        <p className="text-gray-600 text-sm">We build your site, check in mid-project, then launch with 30-day support included.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Get Started Section */}
                        <div className="text-center pb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                                Ready to transform your business with a professional website? Fill out our intake form to get started, or contact us directly to discuss your project.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="https://tally.so/r/n0RlOj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:via-sky-500 hover:to-emerald-600 transform hover:scale-105 active:scale-95 transition-all duration-200"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Start Project Intake Form
                                </a>
                                <a
                                    href="/contact"
                                    className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transform hover:scale-105 active:scale-95 transition-all duration-200"
                                >
                                    Contact Us Directly
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}