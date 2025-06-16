// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JDX Software',
  description: 'Crafted software tools for docs, devs, and decision-makers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header/Nav goes here if global */}
        {children}
        {/* Footer goes here if global */}
      </body>
    </html>
  )
}
