'use client'

import { motion } from 'framer-motion'

export default function AnimatedLogo({ className }: { className?: string }) {
    return (
        <motion.svg 
            className={className}
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            viewBox="0 0 500 500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <defs>
                <style>
                {`
                    .st0, .st1, .st2 {
                        fill: #231f20;
                    }
                    .st3, .st1, .st2 {
                        isolation: isolate;
                    }
                    .st4 {
                        fill: #00ecff;
                    }
                    .st5 {
                        fill: #009fff;
                    }
                    .st1 {
                        letter-spacing: -.02em;
                    }
                    .st1, .st2 {
                        font-family: ArialMT, Arial;
                        font-size: 60.04px;
                    }
                `}
                </style>
            </defs>
            
            {/* JD Text - appears first */}
            <motion.path 
                className="st0" 
                d="M118.05,222.81l-.11-4.07h13.88v4.99c0,8.76,6.28,13.85,15.76,13.85s16.09-5.09,16.09-13.85v-35.34h-10.8v-11.71h24.57v46.14c0,16.3-11.79,26.48-29.42,26.48h-.55c-17.63,0-29.42-10.19-29.42-26.48h0Z"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.path 
                className="st0" 
                d="M187.91,176.67h29.2c22.92,0,37.13,14.06,37.13,35.24s-14.21,36.06-37.13,36.06h-29.2v-71.3ZM215.78,236.25c15.43,0,24.68-9.47,24.68-23.73s-9.25-24.14-24.68-24.14h-14.1v47.87h14.1Z"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            />
            
            {/* Software text - appears second */}
            <motion.g 
                className="st3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <text className="st2" transform="translate(113.28 307.84) scale(1.08 1)"><tspan x="0" y="0">S</tspan></text>
                <text className="st2" transform="translate(152.13 307.84) scale(1.08 1)"><tspan x="0" y="0">o</tspan></text>
                <text className="st2" transform="translate(189.47 307.84) scale(1.08 1)"><tspan x="0" y="0">f</tspan></text>
                <text className="st2" transform="translate(212.68 307.84) scale(1.08 1)"><tspan x="0" y="0">t</tspan></text>
                <text className="st2" transform="translate(237.13 307.84) scale(1.08 1)"><tspan x="0" y="0">w</tspan></text>
                <text className="st2" transform="translate(288.05 307.84) scale(1.08 1)"><tspan x="0" y="0">a</tspan></text>
                <text className="st1" transform="translate(326.82 307.84) scale(1.08 1)"><tspan x="0" y="0">r</tspan></text>
                <text className="st2" transform="translate(349.91 307.84) scale(1.08 1)"><tspan x="0" y="0">e</tspan></text>
            </motion.g>
            
            {/* Lightning bolt style X animation */}
            <motion.g>
                {/* Electric outline glow - flickers then persists */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.7, 1, 0.3, 1, 0.8] }}
                    transition={{ 
                        duration: 0.6, 
                        delay: 2.5,
                        times: [0, 0.1, 0.2, 0.3, 0.7, 0.9, 1]
                    }}
                >
                    <polygon 
                        points="279.31 212.32 253.11 176.68 279.31 176.68 293.08 195.43 331.72 248.06 306.08 248.06 292.67 231.11 281.3 248.06 254.25 248.06 279.31 212.32"
                        fill="none"
                        stroke="#00ecff"
                        strokeWidth="3"
                        style={{ filter: 'drop-shadow(0 0 8px #00ecff)' }}
                    />
                    <path 
                        d="M321.41,197.41c4.46-6.91,8.93-13.83,13.39-20.74h-26.77c-4.37,6.91-8.75,13.83-13.12,20.74h26.51-.01Z"
                        fill="none"
                        stroke="#00ecff"
                        strokeWidth="3"
                        style={{ filter: 'drop-shadow(0 0 8px #00ecff)' }}
                    />
                </motion.g>

                {/* Main X - lightning strike effect */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: 3.1 }}
                >
                    <motion.polygon 
                        className="st5" 
                        points="279.31 212.32 253.11 176.68 279.31 176.68 293.08 195.43 331.72 248.06 306.08 248.06 292.67 231.11 281.3 248.06 254.25 248.06 279.31 212.32"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3, delay: 3.1 }}
                        style={{ 
                            filter: 'drop-shadow(0 0 4px #009fff)'
                        }}
                    />
                    <motion.path 
                        className="st4" 
                        d="M321.41,197.41c4.46-6.91,8.93-13.83,13.39-20.74h-26.77c-4.37,6.91-8.75,13.83-13.12,20.74h26.51-.01Z"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3, delay: 3.3 }}
                        style={{ 
                            filter: 'drop-shadow(0 0 4px #00ecff)'
                        }}
                    />
                </motion.g>


                {/* Final bright flash */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ 
                        duration: 0.2, 
                        delay: 3.4,
                    }}
                >
                    <polygon 
                        points="279.31 212.32 253.11 176.68 279.31 176.68 293.08 195.43 331.72 248.06 306.08 248.06 292.67 231.11 281.3 248.06 254.25 248.06 279.31 212.32"
                        fill="rgba(255, 255, 255, 0.9)"
                        style={{ filter: 'blur(2px)' }}
                    />
                    <path 
                        d="M321.41,197.41c4.46-6.91,8.93-13.83,13.39-20.74h-26.77c-4.37,6.91-8.75,13.83-13.12,20.74h26.51-.01Z"
                        fill="rgba(255, 255, 255, 0.9)"
                        style={{ filter: 'blur(2px)' }}
                    />
                </motion.g>
            </motion.g>
        </motion.svg>
    )
}