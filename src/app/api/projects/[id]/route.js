import { NextResponse } from 'next/server';
import dbConnect, { Project } from '../../../../lib/db';

const checkAuth = (request) => {
    const authHeader = request.headers.get('authorization');
    return authHeader === `Bearer ${process.env.ADMIN_SECRET}`;
};

// UPDATE project
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    if (!checkAuth(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    const project = await Project.findByIdAndUpdate(id, body, { new: true });
    
    if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE project
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    if (!checkAuth(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const project = await Project.findByIdAndDelete(id);
    
    if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Project deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
