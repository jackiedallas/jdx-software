import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/app/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                summit: {
                    indigo: '#1A1B41',
                    coral: '#FF6B6B',
                    sand: '#FDF0D5',
                    sky: '#5BC0EB',
                    charcoal: '#333333',
                },
            },
            // Enhanced responsive breakpoints
            screens: {
                'xs': '475px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            animation: {
                'mesh-wave-1': 'mesh-wave-1 8s ease-in-out infinite',
                'mesh-wave-2': 'mesh-wave-2 12s ease-in-out infinite reverse',
                'mesh-wave-3': 'mesh-wave-3 16s ease-in-out infinite',
            },
            keyframes: {
                'mesh-wave-1': {
                    '0%, 100%': {
                        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
                    },
                    '25%': {
                        transform: 'perspective(1000px) rotateX(2deg) rotateY(1deg) translateZ(10px)'
                    },
                    '50%': {
                        transform: 'perspective(1000px) rotateX(-1deg) rotateY(-2deg) translateZ(-5px)'
                    },
                    '75%': {
                        transform: 'perspective(1000px) rotateX(1.5deg) rotateY(0.5deg) translateZ(8px)'
                    },
                },
                'mesh-wave-2': {
                    '0%, 100%': {
                        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
                    },
                    '33%': {
                        transform: 'perspective(1000px) rotateX(-1.5deg) rotateY(2deg) scale(1.02)'
                    },
                    '66%': {
                        transform: 'perspective(1000px) rotateX(2.5deg) rotateY(-1deg) scale(0.98)'
                    },
                },
                'mesh-wave-3': {
                    '0%, 100%': {
                        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) skew(0deg)'
                    },
                    '50%': {
                        transform: 'perspective(1000px) rotateX(1deg) rotateY(3deg) skew(0.5deg)'
                    },
                }
            }
        },
    },
    plugins: [],
}

export default config