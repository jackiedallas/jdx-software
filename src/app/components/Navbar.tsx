'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const servicesRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()

    useEffect(() => {
        setIsMenuOpen(false)
        setIsServicesOpen(false)
    }, [pathname])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // Only handle click outside for desktop (when mobile menu is closed)
            if (!isMenuOpen && servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/software', label: 'Software' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/newsletter', label: 'Newsletter' },
        { href: '/blog', label: 'Blog' }
    ]

    const servicesItems = [
        { href: '/services', label: 'Websites' }
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
                    <Link
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
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors duration-200 ${
                                    pathname === item.href
                                        ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        
                        {/* Services Dropdown */}
                        <div className="relative" ref={servicesRef}>
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className={`text-sm font-medium transition-colors duration-200 flex items-center ${
                                    pathname.startsWith('/services')
                                        ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`}
                            >
                                Services
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {isServicesOpen && (
                                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    {servicesItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`block px-4 py-3 text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                                                pathname === item.href
                                                    ? 'text-blue-600 bg-blue-50'
                                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                            }`}
                                            onClick={() => setIsServicesOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
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
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block text-base font-medium transition-colors duration-200 ${
                                    pathname === item.href
                                        ? 'text-blue-600 bg-blue-50 px-3 py-2 rounded-lg'
                                        : 'text-gray-700 hover:text-blue-600 px-3 py-2'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        
                        {/* Mobile Services Section */}
                        <div>
                            <button
                                type="button"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className={`w-full text-left text-base font-medium transition-colors duration-200 flex items-center justify-between px-3 py-2 ${
                                    pathname.startsWith('/services')
                                        ? 'text-blue-600 bg-blue-50 rounded-lg'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`}
                            >
                                Services
                                <svg 
                                    className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="mt-2 ml-4 space-y-2">
                                    {servicesItems.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            className={`block text-sm transition-colors duration-200 px-3 py-2 rounded-lg ${
                                                pathname === item.href
                                                    ? 'text-blue-600 bg-blue-50'
                                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                            }`}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}