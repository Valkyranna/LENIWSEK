import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, message } = data;

        // Create a transporter using standard SMTP Authentication
        // This works with ANY email provider (Gmail, Outlook, ProtonMail Bridge, Private Hosting)
        // You own the account, you own the credentials.
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send the email
        await transporter.sendMail({
            from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER, // e.g. "My Site <me@mysite.com>"
            to: 'leniwsek@protonmail.com', // Your personal inbox
            replyTo: email, // So you can hit "Reply" to answer the visitor
            subject: `New Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('SMTP Error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
