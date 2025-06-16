'use client'

import { motion } from 'framer-motion'
import { IBM_Plex_Sans } from 'next/font/google'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function MotionHeaderSection() {
    return (
        <motion.section
            className={`bg-transparent text-neutral-900 min-h-screen flex flex-col justify-center items-center text-center px-4 ${ibmPlexSans.className}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
        >
            <section className="text-neutral-900 min-h-screen relative z-10 flex flex-col justify-center items-center text-center px-4">
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
                <motion.p
                    className="text-lg md:text-xl text-gray-500 max-w-xl mb-6"
                    initial={{ scale: 0.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'linear' }}
                >
                    Building high-impact tools for documentation, automation, and digital clarity.
                </motion.p>
            </section>
        </motion.section>
    )
}