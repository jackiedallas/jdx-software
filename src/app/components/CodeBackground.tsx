'use client'

import { useEffect, useRef } from 'react'

// Code rain parameters
const COLUMN_COUNT = 100        // Number of falling code columns
const FALL_SPEED = 1.0          // How fast code falls
const CODE_OPACITY = 0.2        // Visibility of code
const GLOW_OPACITY = 0.4        // Visibility of leading characters
const FONT_SIZE = 16            // Size of code characters
const LINE_HEIGHT = 20          // Spacing between lines
const TRAIL_LENGTH = 25         // Length of each code trail

// Code characters to use - moved outside component
const codeChars = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F',
    '{', '}', '(', ')', '[', ']',
    '=', '+', '-', '*', '/', '%',
    ';', ':', '.', ',', '!', '?', '@', '#', '$', '^', '&', '_', '|', '<', '>', '~',
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

interface CodeColumn {
    x: number
    y: number
    speed: number
    characters: string[]
    trailLength: number
    nextSpawnTime: number
}

export default function CodeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const columnsRef = useRef<CodeColumn[]>([])
    const animationRef = useRef<number>(0)
    const gradientRef = useRef<CanvasGradient | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initializeColumns()
            createGradient()
        }

        const createGradient = () => {
            const ctx = canvas.getContext('2d')
            if (!ctx) return

            // Create your blue → sky → emerald gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
            gradient.addColorStop(0, '#3b82f6')    // blue-500
            gradient.addColorStop(0.5, '#0ea5e9')  // sky-500  
            gradient.addColorStop(1, '#10b981')    // emerald-500
            
            gradientRef.current = gradient
        }

        const initializeColumns = () => {
            const columnWidth = canvas.width / COLUMN_COUNT
            
            columnsRef.current = Array.from({ length: COLUMN_COUNT }, (_, i) => ({
                x: i * columnWidth + columnWidth / 2,
                y: -TRAIL_LENGTH * LINE_HEIGHT * 0.3 - Math.random() * canvas.height * 0.2,
                speed: 0.8 + Math.random() * 1.5,
                characters: Array.from({ length: TRAIL_LENGTH }, () => 
                    codeChars[Math.floor(Math.random() * codeChars.length)]
                ),
                trailLength: TRAIL_LENGTH,
                nextSpawnTime: Math.random() * 3000
            }))
        }

        updateCanvasSize()
        window.addEventListener('resize', updateCanvasSize)

        return () => {
            window.removeEventListener('resize', updateCanvasSize)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        ctx.font = `${FONT_SIZE}px 'Courier New', monospace`
        ctx.textAlign = 'center'

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const columns = columnsRef.current

            columns.forEach(column => {
                column.y += column.speed * FALL_SPEED

                if (column.y > canvas.height) {
                    column.y = -column.trailLength * LINE_HEIGHT
                    column.speed = 0.8 + Math.random() * 1.5
                    
                    column.characters = Array.from({ length: TRAIL_LENGTH }, () => 
                        codeChars[Math.floor(Math.random() * codeChars.length)]
                    )
                }

                for (let i = 0; i < column.characters.length; i++) {
                    const charY = column.y + (i * LINE_HEIGHT)
                    
                    if (charY < -LINE_HEIGHT || charY > canvas.height + LINE_HEIGHT) continue

                    const char = column.characters[i]
                    
                    if (i === 0) {
                        ctx.fillStyle = gradientRef.current || '#3b82f6'
                        ctx.globalAlpha = GLOW_OPACITY
                        ctx.shadowColor = '#0ea5e9'
                        ctx.shadowBlur = 10
                    } else if (i < 6) {
                        ctx.fillStyle = gradientRef.current || '#3b82f6'
                        ctx.globalAlpha = GLOW_OPACITY * (1 - i / 6)
                        ctx.shadowColor = '#0ea5e9'
                        ctx.shadowBlur = 5
                    } else {
                        const opacity = CODE_OPACITY * (1 - (i - 6) / (column.trailLength - 6))
                        
                        if (i < column.trailLength / 3) {
                            ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`
                        } else if (i < column.trailLength * 2 / 3) {
                            ctx.fillStyle = `rgba(14, 165, 233, ${opacity})`
                        } else {
                            ctx.fillStyle = `rgba(16, 185, 129, ${opacity})`
                        }
                        
                        ctx.globalAlpha = 1
                        ctx.shadowBlur = 0
                    }

                    ctx.fillText(char, column.x, charY)
                    
                    ctx.shadowBlur = 0
                    ctx.globalAlpha = 1
                }

                if (Math.random() < 0.03) {
                    const randomIndex = Math.floor(Math.random() * column.characters.length)
                    column.characters[randomIndex] = codeChars[Math.floor(Math.random() * codeChars.length)]
                }
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-90"
                style={{ background: 'transparent' }}
            />
        </div>
    )
}