import { NextResponse } from 'next/server';
import { updateJob, deleteJob } from '@/data/jobsStore';
import { cookies } from 'next/headers';

interface RouteProps {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(request: Request, { params }: RouteProps) {
  try {
    const cookieStore = await cookies();
    const adminSession = cookieStore.get('myadsphere_admin_session');

    if (!adminSession || adminSession.value !== 'authenticated') {
      return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
    }

    const { id } = await params;
    const updatedData = await request.json();

    const updatedJob = updateJob(id, updatedData);
    if (!updatedJob) {
      return NextResponse.json({ success: false, error: 'Job position not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, job: updatedJob, message: 'POSITION UPDATED' });
  } catch (error) {
    console.error('Error updating job:', error);
    return NextResponse.json({ success: false, error: 'Failed to update position.' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteProps) {
  try {
    const cookieStore = await cookies();
    const adminSession = cookieStore.get('myadsphere_admin_session');

    if (!adminSession || adminSession.value !== 'authenticated') {
      return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
    }

    const { id } = await params;
    const success = deleteJob(id);

    if (!success) {
      return NextResponse.json({ success: false, error: 'Job position not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'POSITION REMOVED' });
  } catch (error) {
    console.error('Error deleting job:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete position.' }, { status: 500 });
  }
}
