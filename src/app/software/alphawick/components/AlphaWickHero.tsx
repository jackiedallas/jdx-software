'use client'

import { IBM_Plex_Sans } from 'next/font/google'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import StaticBackground from '../../../components/StaticBackground'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function AlphaWickHero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isVisible, setIsVisible] = useState<Record<number, boolean>>({})

    const screenshots = [
        { src: '/alphawick/IMG_4814.PNG', alt: 'AlphaWick Dark Home Screen' },
        { src: '/alphawick/IMG_4823.PNG', alt: 'AlphaWick Light Home Screen' },
        { src: '/alphawick/IMG_4816.PNG', alt: 'AlphaWick Dark Favorites Screen' },
        { src: '/alphawick/IMG_4821.PNG', alt: 'AlphaWick Light Favorites Screen' },
        { src: '/alphawick/IMG_4831.PNG', alt: 'AlphaWick Dark Analysis View' },
        { src: '/alphawick/IMG_4824.PNG', alt: 'AlphaWick Light Analysis View' },
    ]

    const features = [
        {
            title: 'Real-Time Stock Data',
            description: 'Access live market data and track stock prices in real-time with comprehensive charts and analytics',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'AI-Powered Analysis',
            description: 'Get intelligent insights and pattern recognition powered by advanced AI algorithms',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Educational Content',
            description: 'Learn technical analysis and market fundamentals with guided tutorials and insights',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            gradient: 'from-green-500 to-teal-500'
        },
        {
            title: 'Personal Watchlists',
            description: 'Create and manage custom watchlists to track your favorite stocks and investments',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            gradient: 'from-red-500 to-orange-500'
        },
        {
            title: 'Technical Indicators',
            description: 'Comprehensive technical analysis tools including RSI, MACD, moving averages, and more',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            title: 'Light & Dark Modes',
            description: 'Choose between light and dark themes for comfortable viewing in any environment',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ),
            gradient: 'from-yellow-500 to-gray-600'
        }
    ]

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % screenshots.length)
        }, 8000)
        return () => clearInterval(interval)
    }, [screenshots.length])

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observers: IntersectionObserver[] = []
        const elements = document.querySelectorAll('.animate-on-scroll')

        elements.forEach((element, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [index]: true }))
                    }
                },
                { threshold: 0.1, rootMargin: '50px' }
            )
            observer.observe(element)
            observers.push(observer)
        })

        return () => {
            observers.forEach(observer => observer.disconnect())
        }
    }, [])

    return (
        <>
            <StaticBackground />
            <div className="pt-16">
                <section
                    className={`bg-transparent text-neutral-900 min-h-screen flex flex-col justify-start items-center text-center px-4 sm:px-6 lg:px-8 py-8 ${ibmPlexSans.className}`}
                >
                    <div className="w-full max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
                        {/* Header - Animated */}
                        <div className="text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000" style={{
                            opacity: isVisible[0] ? 1 : 0,
                            transform: isVisible[0] ? 'translateY(0)' : 'translateY(2rem)'
                        }}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                                <span className="text-blue-600 font-light">
                                    AlphaWick
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                                AI-powered stock analysis mobile app for educational purposes
                            </p>

                            {/* Status Badge */}
                            <div className="flex justify-center mb-8">
                                <span className="px-6 py-3 bg-blue-100 text-blue-800 text-lg font-semibold rounded-full animate-pulse">
                                    Coming to App Store
                                </span>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 opacity-75 cursor-not-allowed"
                                >
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    Download on App Store
                                </a>
                                <a
                                    href="/privacy/alphawick"
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-lg hover:bg-gray-50 transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Privacy Policy
                                </a>
                            </div>
                        </div>

                        {/* Dynamic Screenshot Showcase */}
                        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200" style={{
                            opacity: isVisible[1] ? 1 : 0,
                            transform: isVisible[1] ? 'translateY(0)' : 'translateY(2rem)'
                        }}>
                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                                <div className="p-8 lg:p-12">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                                        Experience AlphaWick
                                    </h2>

                                    {/* Main Phone Display with Floating Animation */}
                                    <div className="flex justify-center mb-12">
                                        <div className="relative">
                                            <div className="phone-container transform hover:scale-105 transition-all duration-500">
                                                <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                                                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                                                        {/* Phone Notch */}
                                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                                                        {/* Screenshot */}
                                                        <Image
                                                            src={screenshots[currentImageIndex].src}
                                                            alt={screenshots[currentImageIndex].alt}
                                                            width={300}
                                                            height={600}
                                                            className="w-full h-full object-cover transition-all duration-700"
                                                            style={{
                                                                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Floating Elements */}
                                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-60"></div>
                                            <div className="absolute -top-2 -right-6 w-6 h-6 bg-purple-500 rounded-full animate-bounce opacity-60 delay-150"></div>
                                            <div className="absolute -bottom-4 -left-6 w-10 h-10 bg-green-500 rounded-full animate-bounce opacity-60 delay-300"></div>
                                            <div className="absolute -bottom-2 -right-4 w-7 h-7 bg-orange-500 rounded-full animate-bounce opacity-60 delay-75"></div>
                                        </div>
                                    </div>

                                    {/* Screenshot Thumbnails */}
                                    <div className="flex justify-center space-x-4 mb-8 overflow-x-auto pb-4">
                                        {screenshots.map((screenshot, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`flex-shrink-0 w-16 h-32 rounded-xl overflow-hidden transition-all duration-300 ${index === currentImageIndex
                                                        ? 'ring-4 ring-blue-500 scale-110 shadow-lg'
                                                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                                                    }`}
                                            >
                                                <Image
                                                    src={screenshot.src}
                                                    alt={screenshot.alt}
                                                    width={60}
                                                    height={120}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>

                                    <p className="text-center text-gray-600 text-lg font-medium">
                                        {screenshots[currentImageIndex].alt}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Features Grid with Staggered Animation */}
                        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-400" style={{
                            opacity: isVisible[2] ? 1 : 0,
                            transform: isVisible[2] ? 'translateY(0)' : 'translateY(2rem)'
                        }}>
                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                                <div className="p-8 lg:p-12">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                                        Powerful Features for Learning
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="feature-card text-center group hover:scale-105 transition-all duration-500"
                                                style={{
                                                    animationDelay: `${index * 100}ms`
                                                }}
                                            >
                                                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                                    {feature.icon}
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Educational Disclaimer with Slide-in Animation */}
                        <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 delay-600" style={{
                            opacity: isVisible[3] ? 1 : 0,
                            transform: isVisible[3] ? 'translateX(0)' : 'translateX(2rem)'
                        }}>
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-3xl p-8 shadow-xl">
                                <div className="flex items-start space-x-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Educational Purpose Only
                                        </h3>
                                        <p className="text-blue-800 leading-relaxed text-lg">
                                            AlphaWick is designed exclusively for learning and educational purposes.
                                            It provides market analysis tools and educational content to help users understand
                                            technical analysis and market patterns. This app does not provide financial advice,
                                            investment recommendations, or facilitate actual trading.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coming Soon Section with Final Animation */}
                        <div className="animate-on-scroll opacity-0 scale-95 transition-all duration-1000 delay-800" style={{
                            opacity: isVisible[4] ? 1 : 0,
                            transform: isVisible[4] ? 'scale(1)' : 'scale(0.95)'
                        }}>
                            <div className="text-center pb-16">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                    Coming Soon to the App Store
                                </h2>
                                <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                                    AlphaWick is currently in development and will be available on the iOS App Store soon.
                                    Stay tuned for updates on the launch date and early access opportunities.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <a
                                        href="/newsletter"
                                        className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 text-white text-xl font-semibold rounded-xl hover:from-blue-600 hover:via-sky-500 hover:to-emerald-600 transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-xl"
                                    >
                                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 17h5v5l-5-5zM3 4h18v12H3z" />
                                        </svg>
                                        Get Launch Updates
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                .phone-container {
                    animation: float 3s ease-in-out infinite;
                }

                .feature-card {
                    animation: slideInUp 0.6s ease-out forwards;
                    opacity: 0;
                    transform: translateY(30px);
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(1deg); }
                }

                @keyframes slideInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-on-scroll {
                    transition: all 0.6s ease-out;
                }
            `}</style>
        </>
    )
}