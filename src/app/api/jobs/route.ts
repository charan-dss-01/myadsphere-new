import { NextResponse } from 'next/server';
import { getPublishedJobs, getJobs } from '@/data/jobsStore';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const adminSession = cookieStore.get('myadsphere_admin_session');

    // If authenticated admin, return all jobs (including drafts). Otherwise return published jobs only.
    if (adminSession && adminSession.value === 'authenticated') {
      return NextResponse.json({ success: true, jobs: getJobs() });
    }

    return NextResponse.json({ success: true, jobs: getPublishedJobs() });
  } catch (error) {
    console.error('API /jobs error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch jobs' }, { status: 500 });
  }
}
