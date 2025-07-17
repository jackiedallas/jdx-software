'use client'

import { useEffect, useRef } from 'react'

// Static constellation parameters
const getResponsiveConfig = () => {
    if (typeof window === 'undefined') return { nodeCount: 100, connectionDistance: 200 }
    
    const width = window.innerWidth
    if (width < 640) return { nodeCount: 60, connectionDistance: 180 }  // Mobile
    if (width < 1024) return { nodeCount: 90, connectionDistance: 220 }  // Tablet
    return { nodeCount: 120, connectionDistance: 250 }  // Desktop
}

const NODE_SIZE_RANGE = [1.5, 3.5]
const LINE_OPACITY = 0.12
const NODE_OPACITY = 0.18

interface Node {
    x: number
    y: number
    size: number
    opacity: number
}

export default function StaticBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            drawStaticPattern()
        }

        const drawStaticPattern = () => {
            const { nodeCount, connectionDistance } = getResponsiveConfig()
            
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Generate static nodes with deterministic positioning for consistency
            const nodes: Node[] = []
            const gridCols = Math.ceil(Math.sqrt(nodeCount * (canvas.width / canvas.height)))
            const gridRows = Math.ceil(nodeCount / gridCols)
            const cellWidth = canvas.width / gridCols
            const cellHeight = canvas.height / gridRows

            for (let i = 0; i < nodeCount; i++) {
                const col = i % gridCols
                const row = Math.floor(i / gridCols)
                
                // Add some randomness to grid positioning for organic feel
                const baseX = col * cellWidth + cellWidth / 2
                const baseY = row * cellHeight + cellHeight / 2
                const offsetX = (Math.random() - 0.5) * cellWidth * 0.6
                const offsetY = (Math.random() - 0.5) * cellHeight * 0.6

                nodes.push({
                    x: Math.max(0, Math.min(canvas.width, baseX + offsetX)),
                    y: Math.max(0, Math.min(canvas.height, baseY + offsetY)),
                    size: NODE_SIZE_RANGE[0] + Math.random() * (NODE_SIZE_RANGE[1] - NODE_SIZE_RANGE[0]),
                    opacity: NODE_OPACITY * (0.7 + Math.random() * 0.6)
                })
            }

            // Draw connections
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
        }

        updateCanvasSize()
        
        const handleResize = () => {
            updateCanvasSize()
        }
        
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
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