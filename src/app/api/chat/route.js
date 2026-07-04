import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '../../../lib/db';
import { Message } from '../../../models/Message';

const checkAuth = (request) => {
    const authHeader = request.headers.get('authorization');
    return authHeader === `Bearer ${process.env.ADMIN_SECRET}`;
};

// Emails the admin that a visitor sent a chat message. Never throws —
// a failed notification must not break message delivery.
const sendChatNotification = async ({ senderName, text }) => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('❌ Email credentials missing — skipping chat notification');
        return;
    }
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
        });

        await transporter.sendMail({
            from: `"Portfolio Chat" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `💬 New chat message from ${senderName || 'a visitor'}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="color: #00F2FE;">New Live Chat Message</h2>
                    <p><strong>From:</strong> ${senderName || 'Anonymous visitor'}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
                        ${String(text).replace(/\n/g, '<br>')}
                    </div>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 0.85rem; color: #555;">Open your Dashboard → <strong>Live Chat</strong> tab to reply.</p>
                </div>
            `
        });
        console.log('📧 Chat notification email sent!');
    } catch (err) {
        console.error('❌ Chat notification email failed:', err.message);
    }
};

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const sessionId = searchParams.get('sessionId');

        if (!sessionId) {
            return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
        }

        await dbConnect();
        
        const isAdmin = checkAuth(request);

        // Fetch messages
        const messages = await Message.find({ sessionId }).sort({ createdAt: 1 });

        // Implicitly mark messages as read based on who is fetching
        if (isAdmin) {
            await Message.updateMany(
                { sessionId, sender: 'user', isRead: false },
                { $set: { isRead: true } }
            );
        } else {
            await Message.updateMany(
                { sessionId, sender: 'admin', isRead: false },
                { $set: { isRead: true } }
            );
        }

        return NextResponse.json(messages);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { sessionId, text, sender, senderName } = body;

        if (!sessionId || !text || !sender) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (sender === 'admin' && !checkAuth(request)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Look at the previous message BEFORE inserting the new one, to decide
        // whether this counts as "new activity" worth an email notification.
        const lastMessage = await Message.findOne({ sessionId }).sort({ createdAt: -1 });

        const message = await Message.create({ sessionId, text, sender, senderName });

        // Notify admin only for visitor messages, and only on new activity
        // (new chat, a reply after the admin, or after a 15-min gap) to avoid spam.
        if (sender === 'user') {
            const FIFTEEN_MIN = 15 * 60 * 1000;
            const shouldNotify =
                !lastMessage ||
                lastMessage.sender === 'admin' ||
                (Date.now() - new Date(lastMessage.createdAt).getTime() > FIFTEEN_MIN);

            if (shouldNotify) {
                await sendChatNotification({ senderName, text });
            }
        }

        return NextResponse.json(message, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
