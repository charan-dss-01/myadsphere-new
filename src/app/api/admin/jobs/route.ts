import { NextResponse } from 'next/server';
import { addJob } from '@/data/jobsStore';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const adminSession = cookieStore.get('myadsphere_admin_session');

    if (!adminSession || adminSession.value !== 'authenticated') {
      return NextResponse.json({ success: false, error: 'Unauthorized. Admin session required.' }, { status: 401 });
    }

    const jobData = await request.json();

    if (!jobData.title || !jobData.department || !jobData.location || !jobData.shortDescription) {
      return NextResponse.json({ success: false, error: 'Missing required job fields.' }, { status: 400 });
    }

    const slug = jobData.slug || jobData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const newJob = addJob({
      ...jobData,
      slug,
      responsibilities: Array.isArray(jobData.responsibilities) ? jobData.responsibilities : [jobData.responsibilities || ''],
      requirements: Array.isArray(jobData.requirements) ? jobData.requirements : [jobData.requirements || ''],
      niceToHave: Array.isArray(jobData.niceToHave) ? jobData.niceToHave : [jobData.niceToHave || ''],
    });

    return NextResponse.json({ success: true, job: newJob, message: 'POSITION PUBLISHED' });
  } catch (error) {
    console.error('Error adding job:', error);
    return NextResponse.json({ success: false, error: 'Unable to publish position.' }, { status: 500 });
  }
}
