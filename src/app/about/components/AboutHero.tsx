import { IBM_Plex_Sans } from 'next/font/google'
import ConstellationBackground from '../../components/ConstellationBackground'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function AboutHero() {
    return (
        <>
            <ConstellationBackground />
            <div className="pt-16"> {/* Account for navbar */}
                <section
                    className={`bg-transparent text-neutral-900 min-h-screen flex flex-col justify-start items-center text-center px-4 sm:px-6 lg:px-8 py-8 ${ibmPlexSans.className}`}
                >
                    <div className="w-full max-w-6xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
                        {/* Header */}
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                                <span className="text-neutral-900 font-light">
                                    Who We Are
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Meet the team behind JDX Software. We&apos;re passionate about building tools that make a real difference.
                            </p>
                        </div>

                        {/* Team Section */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="p-8 lg:p-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
                                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                        The passionate individuals behind JDX Software, dedicated to building tools that make a difference.
                                    </p>
                                </div>

                                {/* Team Member */}
                                <div className="max-w-2xl mx-auto">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Jackie Johnson-Dallas</h3>
                                        <p className="text-lg text-blue-600 font-medium mb-4">Founder & Lead Developer</p>
                                        
                                        <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
                                            With a passion for creating elegant solutions to complex problems, Jackie founded JDX Software 
                                            to build tools that truly matter. Specializing in full-stack development and user experience design, 
                                            Jackie brings years of experience in crafting software that businesses love to use.
                                        </p>

                                        <div className="flex flex-wrap justify-center gap-3 mb-6">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Full-Stack Development</span>
                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Product Design</span>
                                            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">DevOps</span>
                                            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">Business Strategy</span>
                                        </div>

                                        <div className="flex space-x-4">
                                            <a
                                                href="https://github.com/jackiedallas"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                                aria-label="GitHub"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/jackie-dallas"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                                aria-label="LinkedIn"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </a>
                                            <a
                                                href="mailto:info@jdxsoftware.com"
                                                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                                aria-label="Email"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company Values */}
                        <div className="text-center pb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                                    <p className="text-gray-600 text-sm">We push boundaries and explore new technologies to create cutting-edge solutions.</p>
                                </div>
                                
                                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
                                    <p className="text-gray-600 text-sm">Every product we build meets the highest standards of performance and reliability.</p>
                                </div>
                                
                                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact</h3>
                                    <p className="text-gray-600 text-sm">We focus on building tools that create meaningful value for our users and their businesses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}