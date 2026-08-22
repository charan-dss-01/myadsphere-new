'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Plus, Edit3, Trash2, CheckCircle2, Lock, LogOut, ArrowUpRight, X, ShieldAlert, Eye, EyeOff } from 'lucide-react';

interface Job {
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
}

export default function AdminCareersPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [deletingJobId, setDeletingJobId] = useState<string | null>(null);

  // Form Fields
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [workType, setWorkType] = useState<'Remote' | 'Hybrid' | 'On-site'>('Hybrid');
  const [employmentType, setEmploymentType] = useState<'Full Time' | 'Part Time' | 'Contract' | 'Internship'>('Full Time');
  const [shortDescription, setShortDescription] = useState('');
  const [aboutRole, setAboutRole] = useState('');
  const [responsibilitiesText, setResponsibilitiesText] = useState('');
  const [requirementsText, setRequirementsText] = useState('');
  const [niceToHaveText, setNiceToHaveText] = useState('');
  const [status, setStatus] = useState<'published' | 'draft'>('published');

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/jobs');
      const data = await res.json();
      if (data.success) {
        setJobs(data.jobs);
      }
    } catch (err) {
      console.error('Failed to fetch admin jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });

      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        fetchJobs();
      } else {
        setLoginError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setLoginError('Authentication request failed');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    setIsAuthenticated(false);
  };

  const openAddModal = () => {
    setEditingJob(null);
    setTitle('');
    setDepartment('');
    setLocation('');
    setWorkType('Hybrid');
    setEmploymentType('Full Time');
    setShortDescription('');
    setAboutRole('');
    setResponsibilitiesText('');
    setRequirementsText('');
    setNiceToHaveText('');
    setStatus('published');
    setIsModalOpen(true);
  };

  const openEditModal = (job: Job) => {
    setEditingJob(job);
    setTitle(job.title);
    setDepartment(job.department);
    setLocation(job.location);
    setWorkType(job.workType);
    setEmploymentType(job.employmentType);
    setShortDescription(job.shortDescription);
    setAboutRole(job.aboutRole || '');
    setResponsibilitiesText(job.responsibilities ? job.responsibilities.join('\n') : '');
    setRequirementsText(job.requirements ? job.requirements.join('\n') : '');
    setNiceToHaveText(job.niceToHave ? job.niceToHave.join('\n') : '');
    setStatus(job.status);
    setIsModalOpen(true);
  };

  const handleSaveJob = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      title,
      department,
      location,
      workType,
      employmentType,
      shortDescription,
      aboutRole,
      responsibilities: responsibilitiesText.split('\n').filter(Boolean),
      requirements: requirementsText.split('\n').filter(Boolean),
      niceToHave: niceToHaveText.split('\n').filter(Boolean),
      status,
    };

    if (editingJob) {
      // Update Job
      const res = await fetch(`/api/admin/jobs/${editingJob.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setIsModalOpen(false);
        fetchJobs();
      }
    } else {
      // Create Job
      const res = await fetch('/api/admin/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setIsModalOpen(false);
        fetchJobs();
      }
    }
  };

  const handleDeleteJob = async (id: string) => {
    const res = await fetch(`/api/admin/jobs/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      setDeletingJobId(null);
      fetchJobs();
    }
  };

  const toggleStatus = async (job: Job) => {
    const newStatus = job.status === 'published' ? 'draft' : 'published';
    await fetch(`/api/admin/jobs/${job.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchJobs();
  };

  // ── 1. LOGIN SCREEN ──
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6 antialiased selection:bg-[#FF4A17] selection:text-white">
        <div className="w-full max-w-md p-8 rounded-3xl border border-white/15 bg-zinc-950/90 shadow-2xl backdrop-blur-xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/30 flex items-center justify-center text-[#FF4A17] mx-auto mb-4">
              <Lock size={20} />
            </div>
            <h1 className="text-xl font-bold uppercase tracking-wider text-white">MYADSPHERE CAREERS ADMIN</h1>
            <p className="text-zinc-500 text-xs mt-1">Management Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {loginError && (
              <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-sans">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-2">
                Admin Security Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4A17]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#FF4A17] hover:bg-[#FF4A17]/90 text-white font-bold text-xs uppercase tracking-widest shadow-lg transition-all"
            >
              LOGIN TO DASHBOARD
            </button>
          </form>

          <div className="mt-8 text-center border-t border-white/10 pt-4">
            <Link href="/careers" className="text-xs text-zinc-500 hover:text-white font-sans transition-colors">
              ← Return to Careers
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── 2. ADMIN DASHBOARD ──
  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-[#FF4A17] selection:text-white pt-36 pb-16 md:pt-44 md:pb-24 px-6 md:px-12">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/15 mb-12 gap-4">
          <div>
            <span className="text-[#FF4A17] font-sans text-xs font-bold tracking-widest uppercase block mb-1">
              INTERNAL RECRUITMENT PORTAL
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              Careers Admin Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openAddModal}
              className="px-5 py-2.5 rounded-full bg-[#FF4A17] hover:bg-[#FF4A17]/90 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
            >
              <Plus size={16} /> + ADD POSITION
            </button>

            <button
              onClick={handleLogout}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* Job Openings Table */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-12 text-zinc-500 font-sans text-xs">
              Loading openings...
            </div>
          ) : jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl border border-white/10 bg-zinc-950/90 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-white font-bold text-lg">{job.title}</span>
                    <button
                      onClick={() => toggleStatus(job)}
                      title="Click to toggle visibility"
                      className={`px-2.5 py-0.5 rounded text-[10px] font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                        job.status === 'published'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900'
                          : 'bg-amber-950 text-amber-400 border border-amber-500/30 hover:bg-amber-900'
                      }`}
                    >
                      {job.status === 'published' ? 'PUBLISHED (VISIBLE)' : 'HIDDEN (DRAFT)'}
                    </button>
                  </div>
                  <p className="text-zinc-400 text-xs font-sans">
                    {job.department} • {job.location} • {job.workType} • {job.employmentType}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Hide / Unhide Toggle Button */}
                  <button
                    onClick={() => toggleStatus(job)}
                    className={`px-3 py-2 rounded-lg border text-xs flex items-center gap-1.5 font-sans transition-colors font-bold uppercase tracking-wider ${
                      job.status === 'published'
                        ? 'bg-amber-950/40 border-amber-500/30 text-amber-300 hover:bg-amber-900/60'
                        : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60'
                    }`}
                  >
                    {job.status === 'published' ? (
                      <>
                        <EyeOff size={14} /> HIDE ROLE
                      </>
                    ) : (
                      <>
                        <Eye size={14} /> UNHIDE ROLE
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => openEditModal(job)}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-[#FF4A17]/60 text-xs flex items-center gap-1 font-sans"
                  >
                    <Edit3 size={14} /> EDIT
                  </button>

                  <button
                    onClick={() => setDeletingJobId(job.id)}
                    className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 hover:bg-red-950/80 text-xs flex items-center gap-1 font-sans"
                  >
                    <Trash2 size={14} /> DELETE
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-zinc-500 font-sans text-xs">
              No positions created yet. Click "+ ADD POSITION" to get started.
            </div>
          )}
        </div>

      </div>

      {/* ── 3. ADD / EDIT JOB MODAL ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-hidden">
          <div className="w-full max-w-2xl max-h-[85vh] bg-zinc-950 border border-white/15 rounded-3xl shadow-2xl flex flex-col relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Fixed Header */}
            <div className="flex items-center justify-between px-6 py-4 md:px-8 border-b border-white/10 shrink-0 bg-zinc-950">
              <h2 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider">
                {editingJob ? 'Edit Position' : '+ Add New Position'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <form onSubmit={handleSaveJob} className="flex flex-col flex-1 overflow-hidden">
              <div className="p-6 md:p-8 overflow-y-auto space-y-5 flex-1">
                <div>
                  <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-1.5">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Performance Marketing Manager"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4A17]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-1.5">
                      Department *
                    </label>
                    <input
                      type="text"
                      required
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      placeholder="Performance Marketing"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4A17]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-1.5">
                      Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Hyderabad · Hybrid"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4A17]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-1.5">
                      Work Type
                    </label>
                    <select
                      value={workType}
                      onChange={(e) => setWorkType(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4A17]"
                    >
                      <option value="Hybrid">Hybrid</option>
                      <option value="Remote">Remote</option>
                      <option value="On-site">On-site</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-1.5">
                      Employment Type
                    </label>
                    <select
                      value={employmentType}
                      onChange={(e) => setEmploymentType(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4A17]"
                    >
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-1.5">
                      Visibility / Status
                    </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4A17]"
                    >
                      <option value="published">Published (Visible)</option>
                      <option value="draft">Hidden (Draft)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-1.5">
                    Short Description *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    placeholder="Concise 1-2 line summary of role..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4A17] leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-1.5">
                    About Role (Overview)
                  </label>
                  <textarea
                    rows={3}
                    value={aboutRole}
                    onChange={(e) => setAboutRole(e.target.value)}
                    placeholder="Detailed role background..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4A17] leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-1.5">
                    Responsibilities (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={responsibilitiesText}
                    onChange={(e) => setResponsibilitiesText(e.target.value)}
                    placeholder="Design ad campaigns&#10;Manage ad budgets..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4A17] leading-relaxed font-sans text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-1.5">
                    Requirements (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={requirementsText}
                    onChange={(e) => setRequirementsText(e.target.value)}
                    placeholder="3+ years performance marketing experience&#10;Proficiency in Meta Ads Manager..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4A17] leading-relaxed font-sans text-xs"
                  />
                </div>
              </div>

              {/* Modal Fixed Footer */}
              <div className="px-6 py-4 md:px-8 border-t border-white/10 flex items-center justify-end gap-3 shrink-0 bg-zinc-950">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-xs font-sans transition-colors"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#FF4A17] hover:bg-[#FF4A17]/90 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  {editingJob ? 'UPDATE POSITION' : 'PUBLISH POSITION'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ── 4. DELETE CONFIRMATION MODAL ── */}
      {deletingJobId && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="w-full max-w-md bg-zinc-950 border border-red-500/40 p-8 rounded-3xl text-center shadow-2xl">
            <ShieldAlert size={40} className="text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white uppercase mb-2">Delete Position?</h3>
            <p className="text-zinc-400 text-xs mb-6">
              This action cannot be undone. The position will be permanently deleted.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setDeletingJobId(null)}
                className="px-5 py-2.5 rounded-xl bg-white/5 text-zinc-300 hover:text-white text-xs font-sans"
              >
                CANCEL
              </button>
              <button
                onClick={() => handleDeleteJob(deletingJobId)}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider"
              >
                DELETE POSITION
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
