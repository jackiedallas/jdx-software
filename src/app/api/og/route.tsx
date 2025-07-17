import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'JDX Pulse'
    const description = searchParams.get('description') || 'Insights on software development, automation, and digital innovation'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #e5e7eb 2px, transparent 0), radial-gradient(circle at 75px 75px, #e5e7eb 2px, transparent 0)',
            backgroundSize: '100px 100px',
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 50%, #10b981 100%)',
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                marginRight: '20px',
              }}
            />
            <div
              style={{
                fontSize: '48px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 50%, #10b981 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
              }}
            >
              JDX
            </div>
            <div
              style={{
                fontSize: '48px',
                color: '#374151',
                fontWeight: '300',
                marginLeft: '10px',
              }}
            >
              Pulse
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 50 ? '36px' : '48px',
              fontWeight: 'bold',
              color: '#111827',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.2,
              marginBottom: '30px',
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '24px',
              color: '#6b7280',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            {description.length > 150 ? description.substring(0, 147) + '...' : description}
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              fontSize: '18px',
              color: '#9ca3af',
            }}
          >
            jdxsoftware.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`${e.message}`)
    } else {
      console.log('An unknown error occurred')
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}