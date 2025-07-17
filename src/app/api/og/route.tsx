import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || ''
    const description = searchParams.get('description') || 'Innovative SaaS solutions that streamline workflows, enhance productivity, and drive business growth'

    console.log('Generating OG image for:', { title, description })

    // Fetch the JDX logo
    const logoUrl = new URL('/jdx-black.svg', request.url).href
    console.log('Fetching logo from:', logoUrl)
    
    let logoBuffer: ArrayBuffer
    let logoDataUri: string
    
    try {
      const logoResponse = await fetch(logoUrl)
      
      if (!logoResponse.ok) {
        console.error('Failed to fetch logo:', logoResponse.status, logoResponse.statusText)
        throw new Error(`Failed to fetch logo: ${logoResponse.status}`)
      }
      
      logoBuffer = await logoResponse.arrayBuffer()
      console.log('Logo fetched successfully, size:', logoBuffer.byteLength)
      logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoBuffer).toString('base64')}`
    } catch (error) {
      console.error('Error fetching logo, using fallback:', error)
      // Fallback to a simple colored rectangle
      logoDataUri = ''
    }

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
            {logoDataUri ? (
              <svg
                width="180"
                height="180"
                viewBox="0 0 500 500"
                style={{
                  height: '240px',
                  width: '240px',
                }}
              >
                <path fill="#231f20" d="M141.68,259.83l-.11-4.07h13.88v4.99c0,8.76,6.28,13.85,15.76,13.85s16.09-5.09,16.09-13.85v-35.34h-10.8v-11.71h24.57v46.14c0,16.3-11.79,26.48-29.42,26.48h-.55c-17.63,0-29.42-10.19-29.42-26.48h0Z"/>
                <path fill="#231f20" d="M211.54,213.69h29.2c22.92,0,37.13,14.06,37.13,35.24s-14.21,36.06-37.13,36.06h-29.2v-71.3ZM239.41,273.27c15.43,0,24.68-9.47,24.68-23.73s-9.25-24.14-24.68-24.14h-14.1v47.87h14.1Z"/>
                <polygon fill="#009fff" points="302.94 249.34 276.74 213.69 302.94 213.69 316.71 232.44 355.35 285.08 329.71 285.08 316.3 268.13 304.93 285.08 277.88 285.08 302.94 249.34"/>
                <path fill="#00ecff" d="M345.04,234.43c4.46-6.91,8.93-13.83,13.39-20.74h-26.77c-4.37,6.91-8.75,13.83-13.12,20.74h26.51-.01Z"/>
              </svg>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
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
              </div>
            )}
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