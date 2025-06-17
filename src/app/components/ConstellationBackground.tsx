'use client'

import { useEffect, useRef } from 'react'

// Responsive constellation parameters
const getResponsiveConfig = () => {
    if (typeof window === 'undefined') return { nodeCount: 100, connectionDistance: 200 }
    
    const width = window.innerWidth
    if (width < 640) return { nodeCount: 80, connectionDistance: 180 }  // Mobile
    if (width < 1024) return { nodeCount: 120, connectionDistance: 220 }  // Tablet
    return { nodeCount: 150, connectionDistance: 250 }  // Desktop
}

const NODE_SIZE_RANGE = [1.5, 3.5]  // Slightly smaller for mobile
const LINE_OPACITY = 0.15           // Reduced for better performance
const NODE_OPACITY = 0.20

interface Node {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
}

export default function ConstellationBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const nodesRef = useRef<Node[]>([])
    const animationRef = useRef<number>(0)
    const configRef = useRef(getResponsiveConfig())

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            
            // Update config based on new screen size
            configRef.current = getResponsiveConfig()
            initializeNodes()
        }

        const initializeNodes = () => {
            const { nodeCount } = configRef.current
            nodesRef.current = Array.from({ length: nodeCount }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4, // Slower movement for better performance
                vy: (Math.random() - 0.5) * 0.4,
                size: NODE_SIZE_RANGE[0] + Math.random() * (NODE_SIZE_RANGE[1] - NODE_SIZE_RANGE[0]),
                opacity: NODE_OPACITY * (0.7 + Math.random() * 0.6)
            }))
        }

        updateCanvasSize()
        
        const handleResize = () => {
            updateCanvasSize()
        }
        
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
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

        let lastTime = 0
        const targetFPS = 30 // Reduced for mobile performance

        const animate = (currentTime: number) => {
            if (currentTime - lastTime < 1000 / targetFPS) {
                animationRef.current = requestAnimationFrame(animate)
                return
            }
            lastTime = currentTime

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const nodes = nodesRef.current
            const { connectionDistance } = configRef.current

            // Update node positions
            nodes.forEach(node => {
                node.x += node.vx
                node.y += node.vy

                // Wrap around edges
                if (node.x < 0) node.x = canvas.width
                if (node.x > canvas.width) node.x = 0
                if (node.y < 0) node.y = canvas.height
                if (node.y > canvas.height) node.y = 0

                // Reduced direction changes for performance
                if (Math.random() < 0.005) {
                    node.vx += (Math.random() - 0.5) * 0.05
                    node.vy += (Math.random() - 0.5) * 0.05
                    
                    const maxVel = 0.6
                    node.vx = Math.max(-maxVel, Math.min(maxVel, node.vx))
                    node.vy = Math.max(-maxVel, Math.min(maxVel, node.vy))
                }
            })

            // Draw connections (optimized)
            ctx.lineWidth = 0.8
            for (let i = 0; i < nodes.length - 1; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        const alpha = (1 - distance / connectionDistance) * LINE_OPACITY
                        ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`
                        
                        ctx.beginPath()
                        ctx.moveTo(nodes[i].x, nodes[i].y)
                        ctx.lineTo(nodes[j].x, nodes[j].y)
                        ctx.stroke()
                    }
                }
            }

            // Draw nodes
            nodes.forEach(node => {
                ctx.fillStyle = `rgba(0, 0, 0, ${node.opacity})`
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
                ctx.fill()
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
                className="absolute inset-0 w-full h-full opacity-50 sm:opacity-60"
                style={{ background: 'transparent' }}
            />
        </div>
    )
}