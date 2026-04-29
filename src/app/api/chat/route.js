import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/db';
import { Message } from '../../../models/Message';

const checkAuth = (request) => {
    const authHeader = request.headers.get('authorization');
    return authHeader === `Bearer ${process.env.ADMIN_SECRET}`;
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
        const { sessionId, text, sender } = body;

        if (!sessionId || !text || !sender) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (sender === 'admin' && !checkAuth(request)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const message = await Message.create({ sessionId, text, sender });
        
        return NextResponse.json(message, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
