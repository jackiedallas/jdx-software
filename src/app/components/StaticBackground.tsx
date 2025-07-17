'use client'

export default function StaticBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div 
                className="absolute inset-0 w-full h-full"
                style={{
                    background: `
                        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.02) 0%, transparent 50%),
                        linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%)
                    `,
                    backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%'
                }}
            />
            <div 
                className="absolute inset-0 w-full h-full opacity-40"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)
                    `,
                    backgroundSize: '20px 20px'
                }}
            />
        </div>
    )
}