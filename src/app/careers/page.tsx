'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Sparkles, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Upload, 
  Send,
  ArrowRight,
  User,
  Mail,
  Phone,
  Globe,
  Linkedin,
  FileText
} from 'lucide-react';

interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  workType: string;
  employmentType: string;
  shortDescription: string;
  status: string;
}

const whyPillars = [
  { number: '01', title: 'OWN YOUR WORK', desc: 'Take full ownership of high-impact client growth engines and strategic campaign assets.' },
  { number: '02', title: 'THINK BIG', desc: 'Work at the intersection of performance marketing, viral short-form creative, and data.' },
  { number: '03', title: 'MOVE FAST', desc: 'Experiment, iterate rapidly, and scale proven marketing channels without red tape.' },
  { number: '04', title: 'GROW TOGETHER', desc: 'Build alongside senior strategists who challenge, elevate, and support your career velocity.' },
];

export default function CareersOverviewPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeDept, setActiveDept] = useState<string>('ALL');

  // Universal Form State
  const [selectedRoleTitle, setSelectedRoleTitle] = useState<string>('General Application');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    fetch('/api/jobs')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Public page only displays published jobs
          const published = (data.jobs as Job[]).filter((j) => j.status === 'published');
          setJobs(published);
          if (published.length > 0) {
            setSelectedRoleTitle(published[0].title);
          }
        }
      })
      .catch((err) => console.error('Failed to load jobs:', err))
      .finally(() => setLoading(false));
  }, []);

  const departments = ['ALL', ...Array.from(new Set(jobs.map((j) => j.department)))];

  const filteredJobs = activeDept === 'ALL'
    ? jobs
    : jobs.filter((j) => j.department === activeDept);

  // Synchronized Selection: Click job card on left -> Select role & scroll on mobile
  const handleSelectJob = (jobTitle: string) => {
    setSelectedRoleTitle(jobTitle);
    setErrorMsg('');
    
    // Smooth scroll to application form if on mobile view
    if (window.innerWidth < 1024) {
      const formEl = document.getElementById('apply-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const allowedExts = ['.pdf', '.doc', '.docx'];
      const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      if (!allowedExts.includes(ext)) {
        setErrorMsg('Please upload a valid resume in PDF, DOC, or DOCX format.');
        setResumeFile(null);
        return;
      }
      setErrorMsg('');
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !coverNote) {
      setErrorMsg('Please fill in all required fields (Full Name, Email Address, and Cover Note).');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('role', selectedRoleTitle || 'General Application');
      formData.append('portfolio', portfolio);
      formData.append('linkedin', linkedin);
      formData.append('coverNote', coverNote);
      if (resumeFile) {
        formData.append('resume', resumeFile);
      }

      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setSuccessMsg(data.message);
      } else {
        setErrorMsg(data.error || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg('We could not submit your application. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-[#FF4A17] selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* ── 1. CINEMATIC CAREERS HERO ── */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 px-6 md:px-12 border-b border-white/10 overflow-hidden select-none">
        
        {/* Ambient Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF4A17]/[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950/90 border border-white/15 text-[#FF4A17] font-sans text-[11px] font-bold tracking-[0.3em] uppercase mb-8 shadow-xl">
            <Sparkles size={13} className="animate-pulse" />
            CAREERS — JOIN MYADSPHERE
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase mb-6">
            <span className="text-white block">Build What's Next</span>
            <span className="bg-gradient-to-r from-[#FF4A17] via-orange-400 to-amber-500 bg-clip-text text-transparent block">
              With Us.
            </span>
          </h1>

          {/* Subhead Paragraph */}
          <p className="text-zinc-400 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We are building a team of strategists, creators, performance marketers, and thinkers turning ambitious ideas into measurable growth.
          </p>

        </div>
      </section>

      {/* ── 2. SPLIT-SCREEN EXPERIENCE: OPEN POSITIONS (LEFT) & UNIVERSAL FORM (RIGHT) ── */}
      <section className="relative py-20 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ─────────────────────────────────────────────
              LEFT COLUMN: OPEN POSITIONS (~58%)
          ───────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <p className="text-[#FF4A17] font-sans text-xs font-bold tracking-[0.35em] uppercase mb-3">
                CURRENT OPPORTUNITIES
              </p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
                Open Positions
              </h2>
            </div>

            {/* Department Filter Pills */}
            {departments.length > 2 && (
              <div className="flex flex-wrap items-center gap-2 select-none pt-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveDept(dept)}
                    className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans font-bold tracking-wider transition-all duration-300 ${
                      activeDept === dept
                        ? 'bg-[#FF4A17] text-white border border-[#FF4A17] shadow-[0_0_15px_rgba(255,74,23,0.3)]'
                        : 'bg-zinc-950 border border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            )}

            {/* Job Cards List */}
            {loading ? (
              <div className="text-center py-16 text-zinc-500 font-sans text-xs">
                Loading current openings...
              </div>
            ) : filteredJobs.length > 0 ? (
              <div className="space-y-4">
                {filteredJobs.map((job) => {
                  const isSelected = selectedRoleTitle === job.title;

                  return (
                    <motion.div
                      key={job.id}
                      onClick={() => handleSelectJob(job.title)}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className={`group cursor-pointer rounded-2xl p-6 md:p-7 border transition-all duration-300 relative overflow-hidden select-none ${
                        isSelected
                          ? 'border-[#FF4A17] bg-zinc-900/90 shadow-[0_0_30px_rgba(255,74,23,0.15)]'
                          : 'border-white/10 bg-zinc-950/80 hover:border-white/25 hover:bg-zinc-900/60'
                      }`}
                    >
                      {/* Active Indicator Bar */}
                      {isSelected && (
                        <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#FF4A17]" />
                      )}

                      <div className="flex flex-col justify-between h-full space-y-4">
                        <div>
                          {/* Metadata row */}
                          <div className="flex flex-wrap items-center gap-2.5 mb-3 text-[11px] font-sans">
                            <span className="text-[#FF4A17] font-bold uppercase tracking-wider">
                              {job.department}
                            </span>
                            <span className="text-zinc-600">•</span>
                            <span className="text-zinc-400 flex items-center gap-1">
                              <MapPin size={11} /> {job.location}
                            </span>
                            <span className="text-zinc-600">•</span>
                            <span className="text-zinc-400 flex items-center gap-1">
                              <Briefcase size={11} /> {job.workType} · {job.employmentType}
                            </span>
                          </div>

                          {/* Job Title */}
                          <h3 className={`font-bold text-xl md:text-2xl tracking-tight transition-colors mb-2 ${
                            isSelected ? 'text-[#FF4A17]' : 'text-white group-hover:text-white'
                          }`}>
                            {job.title}
                          </h3>

                          {/* Description */}
                          <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                            {job.shortDescription}
                          </p>
                        </div>

                        {/* Action Callout */}
                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                          <span className={`text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
                            isSelected ? 'text-[#FF4A17]' : 'text-zinc-400 group-hover:text-white'
                          }`}>
                            {isSelected ? 'SELECTED ROLE' : 'APPLY FOR ROLE'}
                            <ArrowRight size={14} className={`transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                          </span>

                          {isSelected && (
                            <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#FF4A17]/20 border border-[#FF4A17]/40 text-[#FF4A17]">
                              Active in Form
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              /* No Published Jobs Fallback */
              <div className="p-8 rounded-2xl border border-white/10 bg-zinc-950/80 text-center">
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  No Specific Roles Open Right Now
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                  Select "General Application" in the form to send us your profile anytime.
                </p>
                <button
                  onClick={() => handleSelectJob('General Application')}
                  className="px-5 py-2.5 rounded-full bg-[#FF4A17] text-white text-xs font-bold uppercase tracking-wider"
                >
                  General Application →
                </button>
              </div>
            )}

          </div>

          {/* ─────────────────────────────────────────────
              RIGHT COLUMN: UNIVERSAL APPLICATION FORM (~42%)
          ───────────────────────────────────────────── */}
          <div id="apply-form" className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-8 rounded-3xl border border-white/15 bg-zinc-950/90 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4A17]/[0.05] blur-2xl pointer-events-none" />

              <div className="mb-8 border-b border-white/10 pb-6">
                <span className="text-[#FF4A17] font-sans text-[11px] font-bold tracking-[0.35em] uppercase block mb-2">
                  APPLY TO MYADSPHERE
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                  Join MyAdSphere
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Tell us a little about yourself and the role you're interested in.
                </p>
              </div>

              {successMsg ? (
                /* Success State Card */
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FF4A17]/20 border border-[#FF4A17]/50 flex items-center justify-center mx-auto text-[#FF4A17]">
                    <CheckCircle2 size={32} className="animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                    APPLICATION RECEIVED
                  </h4>
                  <p className="text-zinc-300 text-xs font-light leading-relaxed max-w-sm mx-auto">
                    {successMsg}
                  </p>
                  <button
                    onClick={() => {
                      setSuccessMsg('');
                      setFullName('');
                      setEmail('');
                      setPhone('');
                      setPortfolio('');
                      setLinkedin('');
                      setCoverNote('');
                      setResumeFile(null);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full border border-white/20 text-zinc-300 hover:text-white hover:border-white/40 text-xs font-sans font-semibold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                /* Universal Application Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-sans">
                      {errorMsg}
                    </div>
                  )}

                  {/* Role Dropdown Selector */}
                  <div>
                    <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-2">
                      Role You're Applying For *
                    </label>
                    <select
                      value={selectedRoleTitle}
                      onChange={(e) => setSelectedRoleTitle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 text-white text-xs font-semibold focus:outline-none focus:border-[#FF4A17] transition-colors cursor-pointer"
                    >
                      <option value="General Application">General Application</option>
                      {jobs.map((j) => (
                        <option key={j.id} value={j.title}>
                          {j.title} ({j.department})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-3.5 text-zinc-500" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF4A17] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-3.5 text-zinc-500" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sarah@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF4A17] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-3.5 text-zinc-500" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF4A17] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Portfolio & LinkedIn */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-2">
                        Portfolio / Website
                      </label>
                      <div className="relative">
                        <Globe size={15} className="absolute left-3.5 top-3.5 text-zinc-500" />
                        <input
                          type="url"
                          value={portfolio}
                          onChange={(e) => setPortfolio(e.target.value)}
                          placeholder="https://portfolio.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF4A17] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-2">
                        LinkedIn Profile
                      </label>
                      <div className="relative">
                        <Linkedin size={15} className="absolute left-3.5 top-3.5 text-zinc-500" />
                        <input
                          type="url"
                          value={linkedin}
                          onChange={(e) => setLinkedin(e.target.value)}
                          placeholder="https://linkedin.com/in/..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF4A17] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Cover Note */}
                  <div>
                    <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-2">
                      Cover Note / Introduction *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={coverNote}
                      onChange={(e) => setCoverNote(e.target.value)}
                      placeholder="Tell us about your strategic achievements and why you want to join MyAdSphere..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF4A17] leading-relaxed transition-colors"
                    />
                  </div>

                  {/* Upload Resume */}
                  <div>
                    <label className="block text-xs font-sans text-zinc-400 uppercase tracking-wider mb-2">
                      Upload Resume (PDF, DOC, DOCX) *
                    </label>
                    <div className="relative border border-dashed border-white/20 rounded-xl p-4 text-center bg-zinc-900/60 hover:border-[#FF4A17]/60 transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <Upload size={18} className="text-[#FF4A17] mx-auto mb-1.5" />
                      <p className="text-xs text-zinc-300 font-semibold mb-0.5">
                        {resumeFile ? resumeFile.name : 'Choose file or drag & drop here'}
                      </p>
                      <p className="text-[10px] text-zinc-500 font-sans">Formats: PDF, DOC, DOCX (Max 10MB)</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-[#FF4A17] hover:bg-[#e03e0e] text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(255,74,23,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
                  >
                    {submitting ? 'Submitting Application...' : 'Submit Application'} <Send size={15} />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ── 3. CULTURE & WHY MYADSPHERE ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#FF4A17] font-sans text-xs font-bold tracking-widest">01</span>
              <div className="h-px w-6 bg-zinc-800" />
              <span className="text-zinc-400 font-sans uppercase text-[11px] font-semibold tracking-[0.35em]">
                CULTURE & VALUES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Why MyAdSphere
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 rounded-2xl border border-white/10 bg-zinc-950/80 hover:border-[#FF4A17]/60 hover:bg-zinc-900/80 transition-all duration-300 shadow-xl"
              >
                <span className="text-[#FF4A17] font-sans text-xs font-bold tracking-widest block mb-4">
                  {pillar.number}
                </span>
                <h3 className="text-white font-bold text-lg tracking-wider uppercase mb-3">
                  {pillar.title}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
