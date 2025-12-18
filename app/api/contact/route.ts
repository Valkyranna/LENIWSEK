import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const formId = process.env.FORMSPREE_FORM_ID;

        if (!formId) {
            throw new Error('Missing Formspree ID');
        }

        // Proxy the request to Formspree on the SERVER side.
        // The user's browser never sees Formspree.
        const response = await fetch(`https://formspree.io/f/${formId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return NextResponse.json({ success: true });
        } else {
            const errorData = await response.json();
            console.error('Formspree Error:', errorData);
            return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 });
        }
    } catch (error) {
        console.error('Proxy Error:', error);
        return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }
}
