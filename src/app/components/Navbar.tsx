'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/software', label: 'Software' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' }
    ]

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center"
                    >
                        <Image
                            src="/jdx-x.svg"
                            alt="JDX Software"
                            width={40}
                            height={40}
                            className="h-20 w-20 sm:h-40 sm:w-40"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors duration-200 ${
                                    pathname === item.href
                                        ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`block text-base font-medium transition-colors duration-200 ${
                                    pathname === item.href
                                        ? 'text-blue-600 bg-blue-50 px-3 py-2 rounded-lg'
                                        : 'text-gray-700 hover:text-blue-600 px-3 py-2'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}