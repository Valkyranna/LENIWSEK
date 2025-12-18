import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, message } = data;

        // To have NO third-party redirects, we send the data to a carrier API.
        // Resend is the standard choice for Vercel/Next.js.
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'LENIWSEK Site <onboarding@resend.dev>',
                to: 'leniwsek@protonmail.com',
                subject: `New Message from ${name}`,
                reply_to: email,
                text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            }),
        });

        if (res.ok) {
            return NextResponse.json({ success: true });
        } else {
            const errorData = await res.json();
            console.error('Email API Error:', errorData);
            return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 });
        }
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
