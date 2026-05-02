import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/db';
import { Message } from '../../../../models/Message';

const checkAuth = (request) => {
    const authHeader = request.headers.get('authorization');
    return authHeader === `Bearer ${process.env.ADMIN_SECRET}`;
};

export async function GET(request) {
    try {
        if (!checkAuth(request)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        // Get unique sessions with their latest message and unread count
        const sessions = await Message.aggregate([
            {
                $sort: { createdAt: -1 }
            },
            {
                $group: {
                    _id: "$sessionId",
                    userName: { $max: "$senderName" },
                    lastMessage: { $first: "$text" },
                    lastMessageAt: { $first: "$createdAt" },
                    unreadCount: {
                        $sum: {
                            $cond: [{ $and: [{ $eq: ["$sender", "user"] }, { $eq: ["$isRead", false] }] }, 1, 0]
                        }
                    }
                }
            },
            {
                $sort: { lastMessageAt: -1 }
            }
        ]);

        return NextResponse.json(sessions);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
