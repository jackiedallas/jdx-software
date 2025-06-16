'use client'

import { useEffect, useRef } from 'react'

// Constellation parameters
const NODE_COUNT = 150           // Number of stars/nodes
const CONNECTION_DISTANCE = 250 // Max distance to draw connections
const NODE_SIZE_RANGE = [2, 4]  // Min/max node sizes
const LINE_OPACITY = 0.20        // Connection line opacity
const NODE_OPACITY = 0.22        // Node opacity

interface Node {
    x: number
    y: number
    vx: number // velocity x
    vy: number // velocity y
    size: number
    opacity: number
}

export default function ConstellationBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const nodesRef = useRef<Node[]>([])
    const animationRef = useRef<number>(0)

    // Initialize nodes
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        updateCanvasSize()
        window.addEventListener('resize', updateCanvasSize)

        // Create initial nodes
        nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5, // Random drift velocity
            vy: (Math.random() - 0.5) * 0.5,
            size: NODE_SIZE_RANGE[0] + Math.random() * (NODE_SIZE_RANGE[1] - NODE_SIZE_RANGE[0]),
            opacity: NODE_OPACITY * (0.7 + Math.random() * 0.6) // Use NODE_OPACITY with variation
        }))

        return () => {
            window.removeEventListener('resize', updateCanvasSize)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    // Animation loop
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const animate = () => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const nodes = nodesRef.current

            // Update node positions
            nodes.forEach(node => {
                node.x += node.vx
                node.y += node.vy

                // Wrap around edges
                if (node.x < 0) node.x = canvas.width
                if (node.x > canvas.width) node.x = 0
                if (node.y < 0) node.y = canvas.height
                if (node.y > canvas.height) node.y = 0

                // Gentle direction changes
                if (Math.random() < 0.01) {
                    node.vx += (Math.random() - 0.5) * 0.1
                    node.vy += (Math.random() - 0.5) * 0.1
                    
                    // Limit velocity
                    const maxVel = 0.8
                    node.vx = Math.max(-maxVel, Math.min(maxVel, node.vx))
                    node.vy = Math.max(-maxVel, Math.min(maxVel, node.vy))
                }
            })

            // Draw connections
            ctx.strokeStyle = `rgba(0, 0, 0, ${LINE_OPACITY})`
            ctx.lineWidth = 1

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < CONNECTION_DISTANCE) {
                        // Fade line based on distance
                        const alpha = (1 - distance / CONNECTION_DISTANCE) * LINE_OPACITY
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

        animate()

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
                className="absolute inset-0 w-full h-full opacity-60"
                style={{ background: 'transparent' }}
            />
        </div>
    )
}