import { NextResponse } from 'next/server';
import dbConnect, { Project } from '../../../lib/db';

// GET all projects
export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({}).sort({ order: 1 });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST new project
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Simple secret check for protection (can be moved to header for more security)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const project = await Project.create(body);
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
