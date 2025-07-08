import { NextRequest, NextResponse } from 'next/server'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const SENDGRID_LIST_ID = process.env.SENDGRID_JDX_NEWS_LIST_ID

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json()

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            )
        }

        if (!SENDGRID_API_KEY || !SENDGRID_LIST_ID) {
            return NextResponse.json(
                { error: 'SendGrid configuration missing' },
                { status: 500 }
            )
        }

        // Add contact to SendGrid list (without custom fields)
        const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${SENDGRID_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                list_ids: [SENDGRID_LIST_ID],
                contacts: [
                    {
                        email: email
                    }
                ]
            })
        })

        if (!response.ok) {
            const errorData = await response.text()
            console.error('SendGrid API error:', errorData)
            return NextResponse.json(
                { error: 'Failed to subscribe to newsletter' },
                { status: 500 }
            )
        }

        // Send welcome email (optional)
        await sendWelcomeEmail(email)

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Newsletter signup error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// Optional: Send a welcome email
async function sendWelcomeEmail(email: string) {
    try {
        await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${SENDGRID_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: {
                    email: 'noreply@jdxsoftware.com',
                    name: 'JDX Software'
                },
                reply_to: {
                    email: 'contact@jdxsoftware.com',
                    name: 'JDX Software'
                },
                personalizations: [{
                    to: [{ email }],
                    subject: 'Welcome to JDX Software - Stay Updated!'
                }],
                content: [{
                    type: 'text/html',
                    value: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2 style="color: #333;">Welcome to JDX Software!</h2>
                            <p>Thanks for subscribing to JDX Software updates!</p>
                            <p>We're building powerful SaaS tools that help businesses streamline documentation, automate workflows, and achieve digital clarity.</p>
                            
                            <h3 style="color: #333;">What you'll get:</h3>
                            <ul style="color: #666;">
                                <li>🛠️ Updates on new software tools and features</li>
                                <li>📚 Tips for better documentation and automation</li>
                                <li>🚀 Early access to new product launches</li>
                                <li>💡 Insights on productivity and digital clarity</li>
                            </ul>
                            
                            <p>You'll be the first to know about our latest innovations and how they can help your business.</p>
                            <br>
                            <p>Best regards,<br>The JDX Software Team</p>
                            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                            <p style="font-size: 12px; color: #666;">
                                If you didn't sign up for this, you can safely ignore this email.
                            </p>
                        </div>
                    `
                }]
            })
        })
    } catch (error) {
        console.error('Welcome email error:', error)
        // Don't fail the signup if welcome email fails
    }
}