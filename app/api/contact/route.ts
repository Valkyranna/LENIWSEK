import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, message } = body;

        // In a real application, you would send this to an email service
        // like Resend, SendGrid, or AWS SES.
        // For now, we'll log it to the console as requested.
        console.log('Contact form submission:', { email, message });

        return NextResponse.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact form API error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send message' },
            { status: 500 }
        );
    }
}
