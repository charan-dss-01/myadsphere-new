'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData, ProjectData } from '@/data/projectsData';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Activity } from 'lucide-react';

const categories = ['ALL', 'PERFORMANCE', 'SEO', 'SOCIAL', 'CREATIVE'] as const;

const workPillars = ['STRATEGY', 'CREATIVE', 'MEDIA', 'CONTENT', 'SEO', 'DATA', 'CONVERSION'];

const industryList = [
  { name: 'D2C & E-COMMERCE', tag: 'Retail & Brands' },
  { name: 'ENTERPRISE SAAS', tag: 'B2B Software' },
  { name: 'HEALTHCARE & MED', tag: 'HealthTech Systems' },
  { name: 'LUXURY REAL ESTATE', tag: 'Property Development' },
  { name: 'FINTECH & FINANCIALS', tag: 'Wealth & Banking' },
  { name: 'EDUCATION & EDTECH', tag: 'Higher Education' },
  { name: 'LIFESTYLE & FITNESS', tag: 'Consumer Brands' },
  { name: 'PROFESSIONAL SERVICES', tag: 'Consulting & Legal' }
];

export default function OurWorkOverviewPage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const allProjects = Object.values(projectsData);
  const featuredProject = allProjects[0];
  const galleryProjects = allProjects.slice(1);

  const filteredGallery = activeCategory === 'ALL'
    ? galleryProjects
    : galleryProjects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-[#FF4A17] selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* ── 1. COMPACT HERO SECTION ── */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 border-b border-white/10 overflow-hidden select-none">
        
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF4A17]/[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950/90 border border-white/15 text-[#FF4A17] font-sans text-[11px] font-bold tracking-[0.3em] uppercase mb-8 shadow-xl">
            <Sparkles size={13} className="animate-pulse" />
            OUR WORK — CURATED CASE STUDIES
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase mb-6">
            <span className="text-white block">We Don't Just Make Campaigns.</span>
            <span className="bg-gradient-to-r from-[#FF4A17] via-orange-400 to-amber-500 bg-clip-text text-transparent block">
              We Build Momentum.
            </span>
          </h1>

          {/* Subhead Paragraph */}
          <p className="text-zinc-400 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            A selection of growth systems, paid media campaigns, and digital experiences built to turn attention into measurable business outcomes.
          </p>

          {/* Campaign Signal Visual Element */}
          <div className="pt-8 border-t border-white/10 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-400">
            <div className="flex items-center gap-2 text-[#FF4A17]">
              <Activity size={14} className="animate-pulse" />
              <span className="font-bold tracking-widest uppercase">CAMPAIGN SIGNAL</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['STRATEGY', 'CREATIVE', 'MEDIA', 'DATA', 'GROWTH'].map((step, i) => (
                <React.Fragment key={step}>
                  <span className="px-2.5 py-1 rounded bg-zinc-950 border border-white/10 text-[10px] font-semibold text-zinc-300">
                    {step}
                  </span>
                  {i < 4 && <span className="text-zinc-600">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. FEATURED PROJECT SHOWCASE (PROJECT 01) ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[#FF4A17] font-sans text-xs font-bold tracking-widest">01</span>
            <div className="h-px w-6 bg-zinc-800" />
            <span className="text-zinc-400 font-sans uppercase text-[11px] font-semibold tracking-[0.35em]">
              FEATURED CASE STUDY
            </span>
          </div>

          <a
            href={featuredProject.websiteUrl || '#'}
            className="group relative block rounded-[32px] border border-white/15 bg-zinc-950/70 backdrop-blur-2xl overflow-hidden hover:border-[#FF4A17]/50 hover:-translate-y-1.5 transition-all duration-500 shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
          >
            {/* Top-Left Specular Reflection Layer */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_65%)] pointer-events-none" />

            {/* Visual Header */}
            <div className="relative h-[380px] md:h-[520px] w-full overflow-hidden bg-zinc-900/90">
              <img
                src={featuredProject.heroImage}
                alt={featuredProject.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              {/* Soft Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
              
              {/* Project Number Watermark */}
              <span className="absolute top-6 right-8 text-6xl md:text-8xl font-black text-white/10 font-sans select-none">
                01
              </span>
            </div>

            {/* Content Details */}
            <div className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[#FF4A17] font-sans text-[10px] font-bold uppercase tracking-widest">
                    {featuredProject.category}
                  </span>
                  <span className="text-zinc-500 text-xs font-sans tracking-wider">{featuredProject.client}</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                  {featuredProject.title}
                </h2>
                <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                  {featuredProject.shortDesc}
                </p>
              </div>

              {/* Verified Metrics Strip & Link Button */}
              <div className="flex flex-col items-start md:items-end gap-6 shrink-0">
                <div className="flex items-center gap-6">
                  {featuredProject.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="text-left md:text-right">
                      <p className="text-2xl md:text-3xl font-black text-[#FF4A17] font-sans tracking-tight">{m.value}</p>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold font-sans">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.05] group-hover:bg-[#FF4A17] border border-white/15 group-hover:border-[#FF4A17] text-white text-xs font-bold uppercase tracking-widest shadow-lg transition-all duration-300">
                  <span>Visit Website</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>

          </a>

        </div>
      </section>

      {/* ── 3. PROJECT GALLERY & CATEGORY FILTER ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 select-none">
            <div>
              <p className="text-[#FF4A17] font-sans text-xs font-bold tracking-[0.35em] uppercase mb-3">
                CURATED GALLERY
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
                Selected Work
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-sans font-bold tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#FF4A17] text-white border border-[#FF4A17] shadow-[0_0_15px_rgba(255,74,23,0.3)]'
                      : 'bg-zinc-950 border border-white/10 text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project List (Alternating Layout Rhythm with Smoked Glass Material) */}
          <div className="space-y-10">
            {filteredGallery.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <a
                    href={project.websiteUrl || '#'}
                    className="group relative rounded-[28px] border border-white/12 bg-zinc-950/70 backdrop-blur-xl p-7 md:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#FF4A17]/45 hover:bg-zinc-900/60 hover:-translate-y-1.5 transition-all duration-500 block overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)]"
                  >
                    {/* Top-Left Specular Surface Highlight */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />

                    {/* Visual Thumbnail */}
                    <div className={`relative h-64 md:h-80 rounded-2xl overflow-hidden bg-zinc-900/90 ${isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'}`}>
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/20 to-transparent" />
                    </div>

                    {/* Content Block */}
                    <div className={`relative z-10 flex flex-col justify-between h-full ${isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'}`}>
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[#FF4A17] font-sans text-xs font-bold tracking-widest">{project.number}</span>
                          <span className="text-[10px] text-zinc-400 font-sans uppercase tracking-widest font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase mb-3 group-hover:text-[#FF4A17] transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                          {project.shortDesc}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {project.metrics.slice(0, 1).map((m) => (
                            <span key={m.label} className="text-xs font-sans font-semibold text-zinc-300">
                              <strong className="text-[#FF4A17] font-black text-sm md:text-base mr-1.5">{m.value}</strong> {m.label}
                            </span>
                          ))}
                        </div>

                        <span className="text-xs font-sans font-bold text-white uppercase tracking-wider group-hover:text-[#FF4A17] flex items-center gap-1.5 transition-colors">
                          Visit Website <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 4. CAPABILITIES TICKER ("THE WORK BEHIND THE WORK") ── */}
      <section className="py-12 bg-black border-y border-white/10 overflow-hidden select-none">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-12 items-center text-sm md:text-base font-sans font-bold tracking-[0.3em] uppercase text-zinc-500"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {[...workPillars, ...workPillars, ...workPillars].map((pillar, idx) => (
              <span key={idx} className="flex items-center gap-12 hover:text-[#FF4A17] transition-colors cursor-default">
                <span>{pillar}</span>
                <span className="text-[#FF4A17]/60">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. INDUSTRIES ("BUILT ACROSS INDUSTRIES") ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-b border-white/10 select-none">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="text-[#FF4A17] font-sans text-xs font-bold tracking-[0.35em] uppercase mb-3">
              CROSS-INDUSTRY EXPERTISE
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Built Across Industries
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryList.map((ind) => (
              <div
                key={ind.name}
                className="group p-6 rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl hover:border-[#FF4A17]/50 hover:bg-zinc-900/90 transition-all duration-300 text-center shadow-lg"
              >
                <h4 className="text-white font-bold text-xs md:text-sm tracking-wider uppercase mb-1 group-hover:text-[#FF4A17] transition-colors">
                  {ind.name}
                </h4>
                <p className="text-zinc-500 text-[10px] font-sans uppercase">{ind.tag}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. FINAL HIGH-CONVERSION CTA ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black text-center select-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,74,23,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#FF4A17] font-sans text-xs font-bold tracking-[0.35em] uppercase mb-4">
            YOUR NEXT GROWTH STORY COULD BE HERE
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-8">
            Tell us your goals. We'll build the system to get you there.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF4A17]/90 hover:bg-[#FF4A17] text-white font-bold text-xs uppercase tracking-widest backdrop-blur-xl border border-[#FF4A17]/60 shadow-[0_0_30px_rgba(255,74,23,0.5)] transition-all duration-300 hover:scale-105"
            >
              Start a Project <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-widest border border-white/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
