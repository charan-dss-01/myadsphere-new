import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/projectsData';
import { ArrowUpRight, ChevronRight, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug];
  if (!project) return { title: 'Case Study Not Found | MyAdSphere' };

  return {
    title: project.metaTitle,
    description: project.metaDescription,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  // Related Projects (excluding current)
  const relatedProjects = Object.values(projectsData)
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-[#FF4A17] selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* ── 1. CASE STUDY HERO ── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-24 px-6 md:px-12 border-b border-white/10 overflow-hidden select-none">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[350px] bg-[#FF4A17]/[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Minimal Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/our-work" className="hover:text-white transition-colors">Our Work</Link>
            <ChevronRight size={12} />
            <span className="text-[#FF4A17] font-semibold">{project.title}</span>
          </div>

          {/* Category & Client Header */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[#FF4A17] font-mono text-xs font-bold uppercase tracking-wider">
              PROJECT {project.number} · {project.category}
            </span>
            <span className="text-zinc-500 font-mono text-xs">CLIENT: {project.client.toUpperCase()}</span>
          </div>

          {/* Project Title & Tagline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase mb-6">
            {project.title}
          </h1>
          <p className="text-zinc-400 text-base md:text-xl font-light leading-relaxed max-w-3xl mb-12">
            {project.tagline}. {project.shortDesc}
          </p>

          {/* Key Metrics Header Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-2xl border border-white/15 bg-zinc-950/90 backdrop-blur-xl mb-12">
            {project.metrics.map((m) => (
              <div key={m.label} className="space-y-1">
                <p className="text-2xl md:text-4xl font-black text-[#FF4A17] font-mono">{m.value}</p>
                <p className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Hero Visual Image Banner */}
          <div className="relative h-[350px] md:h-[550px] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* ── 2. THE CHALLENGE ── */}
      <section className="relative py-20 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-md">
            <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              01 — THE CHALLENGE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-6">
              Growth Bottlenecks & Market Barriers
            </h2>
            <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. THE APPROACH ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16">
            <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase block mb-3">
              02 — THE APPROACH
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              Strategic Solution & Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.approach.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-white/10 bg-zinc-950/90 hover:border-[#FF4A17]/50 transition-all duration-300"
              >
                <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-widest block mb-4">
                  STAGE 0{idx + 1}
                </span>
                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                  {pillar}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. WORK EXECUTED & PLATFORMS ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Executed List */}
          <div className="lg:col-span-7">
            <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase block mb-3">
              03 — WORK EXECUTED
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-8">
              Capabilities Deployed
            </h3>

            <div className="space-y-4">
              {project.workExecuted.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-zinc-950/80">
                  <CheckCircle2 size={18} className="text-[#FF4A17] shrink-0" />
                  <span className="text-zinc-200 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Industries */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl border border-white/10 bg-zinc-950/90">
              <h4 className="text-xs font-mono font-bold text-[#FF4A17] uppercase tracking-widest mb-4">
                Platforms & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.platforms.map((p) => (
                  <span key={p} className="px-3 py-1.5 rounded bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-zinc-950/90">
              <h4 className="text-xs font-mono font-bold text-[#FF4A17] uppercase tracking-widest mb-4">
                Market Verticals
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.industries.map((ind) => (
                  <span key={ind} className="px-3 py-1.5 rounded bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. RELATED CASE STUDIES ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-b border-white/10 select-none">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase mb-2">
                EXPLORE MORE WORK
              </p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase">
                Related Case Studies
              </h2>
            </div>
            <Link
              href="/our-work"
              className="text-xs font-mono font-bold text-zinc-400 hover:text-[#FF4A17] transition-colors flex items-center gap-1"
            >
              View Portfolio ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                href={`/our-work/${rel.slug}`}
                className="group relative rounded-2xl border border-white/12 bg-zinc-950/70 backdrop-blur-xl p-8 hover:border-[#FF4A17]/50 hover:bg-zinc-900/60 hover:-translate-y-1 transition-all duration-500 block overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
              >
                {/* Top-Left Specular Surface Highlight */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#FF4A17] font-mono text-xs font-bold">{rel.number}</span>
                    <span className="text-[10px] text-zinc-400 font-mono uppercase font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      {rel.category}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-xl uppercase mb-2 group-hover:text-[#FF4A17] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-zinc-400 text-xs font-light line-clamp-2 leading-relaxed">
                    {rel.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. FINAL HIGH-CONVERSION CTA ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black text-center select-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,74,23,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase mb-4">
            HAVE A GROWTH CHALLENGE?
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-8">
            Let's Build Your Next Growth Story.
          </h2>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF4A17]/90 hover:bg-[#FF4A17] text-white font-bold text-xs uppercase tracking-widest backdrop-blur-xl border border-[#FF4A17]/60 shadow-[0_0_30px_rgba(255,74,23,0.5)] transition-all duration-300 hover:scale-105"
          >
            Start a Project <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
