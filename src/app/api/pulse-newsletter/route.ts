import { NextRequest, NextResponse } from 'next/server'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const SENDGRID_PULSE_LIST_ID = process.env.SENDGRID_JDX_PULSE_LIST_ID

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json()

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            )
        }

        if (!SENDGRID_API_KEY || !SENDGRID_PULSE_LIST_ID) {
            console.error('SendGrid configuration missing:', {
                hasApiKey: !!SENDGRID_API_KEY,
                hasPulseListId: !!SENDGRID_PULSE_LIST_ID
            })
            return NextResponse.json(
                { error: 'SendGrid configuration missing' },
                { status: 500 }
            )
        }

        // Add contact to SendGrid Pulse list
        const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${SENDGRID_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                list_ids: [SENDGRID_PULSE_LIST_ID],
                contacts: [
                    {
                        email: email
                    }
                ]
            })
        })

        if (!response.ok) {
            const errorData = await response.text()
            console.error('SendGrid API error:', {
                status: response.status,
                statusText: response.statusText,
                error: errorData,
                listId: SENDGRID_PULSE_LIST_ID
            })
            return NextResponse.json(
                { error: 'Failed to subscribe to JDX Pulse newsletter' },
                { status: 500 }
            )
        }

        // Send welcome email for Pulse
        await sendPulseWelcomeEmail(email)

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Pulse newsletter signup error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// Send Pulse-specific welcome email
async function sendPulseWelcomeEmail(email: string) {
    try {
        await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${SENDGRID_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: {
                    email: 'pulse@jdxsoftware.com',
                    name: 'JDX Pulse'
                },
                reply_to: {
                    email: 'pulse@jdxsoftware.com',
                    name: 'JDX Pulse'
                },
                personalizations: [{
                    to: [{ email }],
                    subject: 'Welcome to JDX Pulse - Your AI-Curated Newsletter!'
                }],
                content: [{
                    type: 'text/html',
                    value: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2 style="color: #333; background: linear-gradient(to right, #3B82F6, #06B6D4, #10B981); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Welcome to JDX Pulse!</h2>
                            <p>Thanks for subscribing to JDX Pulse - your AI-curated newsletter for the internet's top trends!</p>
                            
                            <h3 style="color: #333;">What to expect:</h3>
                            <ul style="color: #666;">
                                <li>📡 Trending content from Reddit, YouTube, GitHub, and more</li>
                                <li>🤖 AI-powered summaries of the most important stories</li>
                                <li>📧 Daily delivery straight to your inbox</li>
                                <li>🎯 No fluff - just the insights that matter</li>
                            </ul>
                            
                            <p>Your first JDX Pulse newsletter will arrive soon. Get ready to stay ahead of the curve!</p>
                            
                            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                <p style="margin: 0; color: #666;">
                                    <strong>Pro tip:</strong> Add pulse@jdxsoftware.com to your contacts to ensure you never miss an issue.
                                </p>
                            </div>
                            
                            <br>
                            <p>Best regards,<br>The JDX Pulse Team</p>
                            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                            <p style="font-size: 12px; color: #666;">
                                If you didn't sign up for this, you can safely ignore this email or <a href="#" style="color: #3B82F6;">unsubscribe here</a>.
                            </p>
                        </div>
                    `
                }]
            })
        })
    } catch (error) {
        console.error('Pulse welcome email error:', error)
        // Don't fail the signup if welcome email fails
    }
}