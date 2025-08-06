import { IBM_Plex_Sans } from 'next/font/google'
import Image from 'next/image'
import StaticBackground from '../../components/StaticBackground'

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

                        {/* AlphaWick Mobile App */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                                {/* Content */}
                                <div className="flex flex-col justify-center space-y-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center space-x-3">
                                            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                AlphaWick
                                            </h3>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">App Store</span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        AI-powered stock analysis mobile app for educational purposes. Learn technical analysis, track your favorite stocks, and gain insights into market patterns with real-time data and intelligent analysis tools.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Real-time stock data</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">AI-powered analysis</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Educational content</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Personal watchlists</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Technical indicators</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Light & Dark modes</span>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <p className="text-sm text-blue-800">
                                            <strong>Educational Purpose:</strong> AlphaWick is designed for learning and educational purposes only. 
                                            It does not provide financial advice or facilitate actual trading.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="#"
                                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 opacity-75 cursor-not-allowed"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                            </svg>
                                            Coming to App Store
                                        </a>
                                        <a
                                            href="/privacy/alphawick"
                                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Privacy Policy
                                        </a>
                                    </div>
                                </div>

                                {/* AlphaWick App Screenshot */}
                                <div className="flex items-center justify-center">
                                    <div className="w-full max-w-sm">
                                        <Image 
                                            src="/LightHomeNew.png"
                                            alt="AlphaWick App Screenshot" 
                                            width={300}
                                            height={600}
                                            className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
                                        />
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