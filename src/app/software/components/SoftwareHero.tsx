import { IBM_Plex_Sans } from 'next/font/google'
import Image from 'next/image'
import StaticBackground from '../../components/StaticBackground'
import PulseNewsletterForm from './PulseNewsletterForm'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function SoftwareHero() {
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
                                    Software
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Innovative SaaS solutions that streamline workflows, enhance productivity, and drive business growth. We build software tools that make a difference.
                            </p>
                        </div>

                        {/* Featured Product - Manualize */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                                {/* Content */}
                                <div className="flex flex-col justify-center space-y-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center space-x-3">
                                            <Image 
                                                src="/manualize-logo-final-black.svg" 
                                                alt="Manualize Logo" 
                                                width={140}
                                                height={40}
                                                className="h-8 w-auto"
                                            />
                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Live</span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Transform your documentation workflow with AI-powered tools that make creating, maintaining, and sharing knowledge effortless. Built for teams who value clarity and efficiency.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">AI-powered writing</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Team collaboration</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Version control</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Easy publishing</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="https://manualize.app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:via-sky-500 hover:to-emerald-600 transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Visit Manualize
                                        </a>
                                        <button
                                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>

                                {/* Manualize Screenshot */}
                                <div className="flex items-center justify-center">
                                    <div className="w-full max-w-md">
                                        <Image 
                                            src={`/manualize-landing.png?v=${Date.now()}`} 
                                            alt="Manualize App Screenshot" 
                                            width={400}
                                            height={300}
                                            className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* JDX Pulse Section */}
                        <div id="pulse" className="relative -top-20"></div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="flex justify-center p-8 lg:p-12">
                                {/* Content */}
                                <div className="flex flex-col justify-center space-y-6 max-w-2xl text-center">
                                    <div className="flex items-center justify-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">JDX Newsletter</h3>
                                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Live</span>
                                    </div>

                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        AI-curated newsletter delivering the internet&apos;s top trends from Reddit, YouTube, GitHub, and more. Stay ahead of the curve with concise summaries powered by GPT-4.
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm text-gray-600">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">AI-powered curation</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Daily delivery</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Multi-platform coverage</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Concise summaries</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-center'>
                                        <PulseNewsletterForm />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Coming Soon Section */}
                        <div className="text-center pb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">More Tools Coming Soon</h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                                We&apos;re building a suite of powerful SaaS tools to help businesses automate workflows, improve documentation, and enhance productivity.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automation Tools</h3>
                                    <p className="text-gray-600 text-sm">Streamline repetitive tasks and workflows</p>
                                </div>

                                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Platform</h3>
                                    <p className="text-gray-600 text-sm">Actionable insights for data-driven decisions</p>
                                </div>

                                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Collaboration</h3>
                                    <p className="text-gray-600 text-sm">Enhanced productivity for remote teams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}