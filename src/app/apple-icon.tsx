import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 180,
    height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 48,
                    background: 'linear-gradient(45deg, #3b82f6, #10b981)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                }}
            >
                JDX
            </div>
        ),
        {
            ...size,
        }
    )
}