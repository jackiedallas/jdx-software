import { NextRequest, NextResponse } from 'next/server'
import mailchimp from '@mailchimp/mailchimp_marketing'

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json()

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            )
        }

        if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER) {
            return NextResponse.json(
                { error: 'Mailchimp configuration missing' },
                { status: 500 }
            )
        }

        // Configure Mailchimp
        mailchimp.setConfig({
            apiKey: MAILCHIMP_API_KEY,
            server: MAILCHIMP_SERVER,
        })

        // Add subscriber to Mailchimp audience with pulse-specific tags
        const response = await mailchimp.lists.addListMember(MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: 'subscribed',
            tags: ['pulse-newsletter', 'ai-curated']
        })

        return NextResponse.json({ 
            success: true,
            message: 'Successfully subscribed to JDX Pulse!'
        })

    } catch (error: any) {
        console.error('Pulse newsletter signup error:', error)
        
        // Handle specific Mailchimp errors
        if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
            return NextResponse.json(
                { error: 'This email is already subscribed!' },
                { status: 400 }
            )
        }
        
        return NextResponse.json(
            { error: 'Failed to subscribe to JDX Pulse newsletter' },
            { status: 500 }
        )
    }
}

