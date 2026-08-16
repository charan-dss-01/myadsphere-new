import fs from 'fs';
import path from 'path';

export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  workType: 'Remote' | 'Hybrid' | 'On-site';
  employmentType: 'Full Time' | 'Part Time' | 'Contract' | 'Internship';
  shortDescription: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  status: 'published' | 'draft';
  createdAt: string;
  updatedAt: string;
}

const filePath = path.join(process.cwd(), 'src', 'data', 'jobsData.json');

export function getJobs(): Job[] {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data) as Job[];
  } catch (error) {
    console.error('Error reading jobsData.json:', error);
    return [];
  }
}

export function saveJobs(jobs: Job[]): boolean {
  try {
    fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing jobsData.json:', error);
    return false;
  }
}

export function getPublishedJobs(): Job[] {
  return getJobs().filter((job) => job.status === 'published');
}

export function getJobBySlug(slug: string): Job | undefined {
  return getJobs().find((job) => job.slug === slug);
}

export function addJob(newJobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt'>): Job {
  const jobs = getJobs();
  const id = `job-${Date.now()}`;
  const now = new Date().toISOString();
  
  const newJob: Job = {
    ...newJobData,
    id,
    createdAt: now,
    updatedAt: now,
  };

  jobs.unshift(newJob);
  saveJobs(jobs);
  return newJob;
}

export function updateJob(id: string, updatedData: Partial<Job>): Job | null {
  const jobs = getJobs();
  const index = jobs.findIndex((j) => j.id === id);
  if (index === -1) return null;

  const updatedJob: Job = {
    ...jobs[index],
    ...updatedData,
    updatedAt: new Date().toISOString(),
  };

  jobs[index] = updatedJob;
  saveJobs(jobs);
  return updatedJob;
}

export function deleteJob(id: string): boolean {
  const jobs = getJobs();
  const filtered = jobs.filter((j) => j.id !== id);
  if (filtered.length === jobs.length) return false;

  return saveJobs(filtered);
}
