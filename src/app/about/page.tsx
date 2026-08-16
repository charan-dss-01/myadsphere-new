'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientLogosMarquee from '@/components/ClientLogosMarquee';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  Target, 
  Search, 
  Share2, 
  Megaphone, 
  FileText, 
  Palette, 
  Users, 
  Filter, 
  BarChart3,
  CheckCircle2,
  Linkedin,
  Activity,
  Layers,
  Zap,
  TrendingUp,
  Download
} from 'lucide-react';

// ── 02 & 03: MISSION, VISION, VALUES DATA ──
const principles = [
  {
    id: '01',
    label: 'OUR MISSION',
    title: 'Turn Attention Into Actionable Revenue.',
    desc: 'We help ambitious brands turn digital attention into measurable, compounding growth through data-backed strategy, high-converting creative, and performance advertising.'
  },
  {
    id: '02',
    label: 'OUR VISION',
    title: 'To Become The Growth Partner Behind The World\'s Most Ambitious Brands.',
    desc: 'We are engineering the digital operating system of modern marketing—where creativity, media, search, and revenue attribution function as one seamless growth engine.'
  },
  {
    id: '03',
    label: 'OUR VALUES',
    title: 'Clarity. Ownership. Velocity. Impact.',
    desc: 'We take 100% accountability for outcomes. We value clean data over opinions, rapid execution over red tape, and compounding impact over short-term vanity metrics.'
  }
];

// ── 04: GROWTH SYSTEM NODES ──
const systemNodes = [
  { step: '01', title: 'STRATEGY', desc: 'Market Positioning & Intent' },
  { step: '02', title: 'CREATIVE', desc: 'Hook-Driven Assets' },
  { step: '03', title: 'MEDIA', desc: 'Algorithmic Bidding' },
  { step: '04', title: 'SEO', desc: 'Organic Authority' },
  { step: '05', title: 'CONTENT', desc: 'Educational Lead Magnets' },
  { step: '06', title: 'DATA', desc: '100% Attribution' },
  { step: '07', title: 'OPTIMIZATION', desc: 'Compounding Velocity' }
];

// ── 05: ECOSYSTEM SHOWCASE ITEMS ──
const ecosystemItems = [
  {
    icon: <TrendingUp className="w-5 h-5 text-[#FF4A17]" />,
    title: "PERFORMANCE MARKETING",
    desc: "Paid acquisition built around profitable growth, high ROAS, and customer LTV."
  },
  {
    icon: <Search className="w-5 h-5 text-[#FF4A17]" />,
    title: "SEO & ORGANIC SCALING",
    desc: "Build search engine dominance and domain topical authority that compounds over time."
  },
  {
    icon: <Palette className="w-5 h-5 text-[#FF4A17]" />,
    title: "CREATIVE & BRANDING",
    desc: "Persuasive ad design and messaging systems engineered to stop user scrolling."
  },
  {
    icon: <Megaphone className="w-5 h-5 text-[#FF4A17]" />,
    title: "PAID MEDIA ENGINE",
    desc: "High-intent search and shopping pipelines across Google, Meta, and LinkedIn."
  },
  {
    icon: <FileText className="w-5 h-5 text-[#FF4A17]" />,
    title: "CONTENT & PRODUCTION",
    desc: "Authority articles, case studies, and lead magnets that educate and convert."
  },
  {
    icon: <Filter className="w-5 h-5 text-[#FF4A17]" />,
    title: "CONVERSION RATE (CRO)",
    desc: "Extract maximum revenue from existing site traffic through A/B split testing."
  },
  {
    icon: <Users className="w-5 h-5 text-[#FF4A17]" />,
    title: "LEAD GENERATION",
    desc: "Automated B2B pipelines delivering qualified, high-ticket prospects."
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-[#FF4A17]" />,
    title: "ANALYTICS & DATA",
    desc: "Unify multi-channel signals into Looker Studio executive attribution dashboards."
  }
];

// ── 07: TEAM MEMBERS DATA ──
const teamMembers = [
  {
    name: "Alex Thorne",
    role: "Founder & Growth Director",
    specialty: "Performance Marketing & Funnel Strategy",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    bio: "Ex-Meta strategist with 8+ years scaling D2C and SaaS brands past 8-figure revenue milestones.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sophia Chen",
    role: "Head of Paid Media",
    specialty: "Google Ads & Programmatic Media",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    bio: "Data-driven media buyer who has managed over $15M in multi-channel paid search and display campaigns.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Marcus Miller",
    role: "Creative Director",
    specialty: "Video Ad Strategy & Brand Identity",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Award-winning designer producing high-converting short-form motion graphics and brand systems.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Elena Rostova",
    role: "Lead SEO Strategist",
    specialty: "Technical SEO & Authority Building",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "SEO architect specializing in organic keyword domination, technical site architecture, and content clusters.",
    linkedin: "https://linkedin.com"
  }
];

export default function AboutUsPage() {
  const [activePrincipleId, setActivePrincipleId] = useState<string>('01');
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const ecosystemScrollRef = React.useRef<HTMLDivElement>(null);

  const handleScrollEcosystem = (direction: 'left' | 'right') => {
    if (ecosystemScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      ecosystemScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-[#FF4A17] selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* ── 01. CINEMATIC "OUR STORY" HERO ── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 border-b border-white/10 overflow-hidden select-none">
        
        {/* Subtle Background Grid & Orange Atmosphere */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-[#FF4A17]/[0.05] blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column: Story Headline & Text */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950/90 border border-white/15 text-[#FF4A17] font-mono text-[11px] font-bold tracking-[0.3em] uppercase shadow-xl">
              <Sparkles size={13} className="animate-pulse" />
              OUR STORY — ATTENTION MEANS NOTHING WITHOUT ACTION
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase">
              <span className="text-white block">We Build Brands</span>
              <span className="block">
                <span className="text-white">That </span>
                <span className="bg-gradient-to-r from-white via-orange-300 to-[#FF4A17] bg-clip-text text-transparent">
                  Move People
                </span>
              </span>
              <span className="bg-gradient-to-r from-[#FF4A17] to-orange-500 bg-clip-text text-transparent block">
                And Business.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-zinc-400 text-base md:text-xl font-light leading-relaxed max-w-2xl">
              MyAdSphere is a digital growth agency built around one simple belief: <strong className="text-white font-medium">attention means nothing without action</strong>. We combine strategy, creative, performance marketing, SEO, content and data to turn attention into measurable business growth.
            </p>

            {/* Sub-Stats Row */}
            <div className="flex items-center gap-8 pt-4 border-t border-white/10">
              <div>
                <p className="text-2xl font-black text-white font-mono">150+</p>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Campaigns Scaled</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-black text-[#FF4A17] font-mono">98%</p>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Client Retention</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-black text-white font-mono">$10M+</p>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Revenue Generated</p>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Growth Globe & Network Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center pointer-events-none select-none">
              
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-[#FF4A17]/15 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-white/10" />

              {/* 3D Atmospheric Sphere Representation */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border border-[#FF4A17]/30 bg-gradient-to-tr from-zinc-950 via-zinc-900 to-[#FF4A17]/20 flex items-center justify-center shadow-[0_0_60px_rgba(255,74,23,0.15)]">
                
                {/* Orbit Rings */}
                <div className="absolute inset-2 rounded-full border border-dashed border-[#FF4A17]/40 animate-spin" style={{ animationDuration: '40s' }} />
                <div className="absolute inset-8 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

                {/* Core Icon & Brand Node */}
                <div className="w-24 h-24 rounded-full bg-black border border-[#FF4A17]/60 flex flex-col items-center justify-center shadow-2xl z-10">
                  <Activity className="w-8 h-8 text-[#FF4A17] animate-pulse mb-1" />
                  <span className="text-[9px] font-mono font-bold tracking-widest text-white uppercase">MYADSPHERE</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── CLIENT LOGOS MARQUEE ── */}
      <ClientLogosMarquee />

      {/* ── 02 & 03: WHAT MOVES AND DEFINES US (MISSION / VISION / VALUES) ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Title */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase block">
              02 — CORE PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-white uppercase">
              What Moves And Defines Us.
            </h2>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              We operate as an extension of your growth team—combining strategic intent, data clarity, and execution speed.
            </p>
          </div>

          {/* Right Interactive Editorial Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {principles.map((p) => {
              const isActive = activePrincipleId === p.id;

              return (
                <div
                  key={p.id}
                  onClick={() => setActivePrincipleId(p.id)}
                  className={`cursor-pointer rounded-2xl border p-7 md:p-9 transition-all duration-500 relative overflow-hidden select-none ${
                    isActive
                      ? 'border-[#FF4A17] bg-zinc-950/90 shadow-[0_0_30px_rgba(255,74,23,0.12)]'
                      : 'border-white/10 bg-zinc-950/40 hover:border-white/20 hover:bg-zinc-900/40'
                  }`}
                >
                  {/* Left Active Accent Bar */}
                  {isActive && <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#FF4A17]" />}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-[#FF4A17] font-mono text-sm font-bold">{p.id}</span>
                      <h3 className={`text-xl md:text-2xl font-bold tracking-tight uppercase transition-colors ${
                        isActive ? 'text-[#FF4A17]' : 'text-white'
                      }`}>
                        {p.label}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-colors ${
                      isActive ? 'border-[#FF4A17] text-[#FF4A17] bg-[#FF4A17]/10' : 'border-white/10 text-zinc-500'
                    }`}>
                      {isActive ? '↓' : '→'}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="pt-6 mt-6 border-t border-white/10 space-y-3"
                      >
                        <p className="text-white font-bold text-base md:text-lg">
                          "{p.title}"
                        </p>
                        <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                          {p.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 04. HOW WE THINK — GROWTH ISN'T A CHANNEL. IT'S A SYSTEM. ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase block">
              03 — SYSTEMIC ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-white uppercase">
              Growth Isn't A Channel.<br />
              <span className="text-[#FF4A17]">It's A System.</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
              We don't treat marketing as isolated campaigns. We connect strategy, creative, media, search, content and data into one growth system designed to continuously learn and improve.
            </p>
          </div>

          {/* Interactive Horizontal Pipeline Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-6">
            {systemNodes.map((node, idx) => {
              const isCurrent = activeNodeIndex === idx;

              return (
                <div
                  key={node.step}
                  onClick={() => setActiveNodeIndex(idx)}
                  className={`cursor-pointer p-5 rounded-2xl border text-center transition-all duration-300 relative ${
                    isCurrent
                      ? 'border-[#FF4A17] bg-zinc-900/90 shadow-[0_0_20px_rgba(255,74,23,0.25)] scale-105 z-10'
                      : 'border-white/10 bg-zinc-950/60 hover:border-white/20'
                  }`}
                >
                  <span className="text-[10px] font-mono text-[#FF4A17] font-bold block mb-2">
                    {node.step}
                  </span>
                  <h4 className="text-white font-bold text-xs md:text-sm tracking-wider uppercase mb-1">
                    {node.title}
                  </h4>
                  <p className="text-[10px] font-mono text-zinc-500 font-light">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 05. THE MYADSPHERE GROWTH ECOSYSTEM (HORIZONTAL SCROLL) ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10 select-none overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase block mb-2">
                04 — FULL-STACK CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                The Growth Ecosystem
              </h2>
            </div>

            {/* Left / Right Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleScrollEcosystem('left')}
                className="w-12 h-12 rounded-full border border-white/15 bg-zinc-950/80 hover:bg-[#FF4A17] hover:border-[#FF4A17] text-white flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Scroll Left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleScrollEcosystem('right')}
                className="w-12 h-12 rounded-full border border-white/15 bg-zinc-950/80 hover:bg-[#FF4A17] hover:border-[#FF4A17] text-white flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Scroll Right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Cards Container */}
          <div
            ref={ecosystemScrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ecosystemItems.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[300px] sm:w-[340px] snap-start rounded-2xl border border-white/10 bg-zinc-950/90 p-7 flex flex-col justify-between hover:border-[#FF4A17]/60 hover:bg-zinc-900/90 transition-all duration-500 shadow-xl group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FF4A17]/10 border border-[#FF4A17]/25 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg tracking-tight uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>CAPABILITY</span>
                  <span className="text-[#FF4A17] font-bold group-hover:translate-x-1 transition-transform">Explore ↗</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 06. OUR IMPACT — BUILT FOR MEASURABLE IMPACT ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10 select-none text-center">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase block">
              05 — PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Built For Measurable Impact.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl border border-white/10 bg-zinc-950/80 hover:border-[#FF4A17]/50 transition-all duration-300">
              <p className="text-5xl sm:text-7xl font-black text-white font-mono tracking-tight mb-4">
                150<span className="text-[#FF4A17]">+</span>
              </p>
              <div className="h-px w-12 bg-[#FF4A17]/40 mx-auto mb-4" />
              <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest font-bold">
                CAMPAIGNS SCALED
              </p>
            </div>

            <div className="p-10 rounded-3xl border border-white/10 bg-zinc-950/80 hover:border-[#FF4A17]/50 transition-all duration-300">
              <p className="text-5xl sm:text-7xl font-black text-[#FF4A17] font-mono tracking-tight mb-4">
                98<span className="text-white">%</span>
              </p>
              <div className="h-px w-12 bg-white/20 mx-auto mb-4" />
              <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest font-bold">
                CLIENT RETENTION RATE
              </p>
            </div>

            <div className="p-10 rounded-3xl border border-white/10 bg-zinc-950/80 hover:border-[#FF4A17]/50 transition-all duration-300">
              <p className="text-5xl sm:text-7xl font-black text-white font-mono tracking-tight mb-4">
                $10M<span className="text-[#FF4A17]">+</span>
              </p>
              <div className="h-px w-12 bg-[#FF4A17]/40 mx-auto mb-4" />
              <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest font-bold">
                REVENUE GENERATED
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 07. OUR PEOPLE — THE PEOPLE BEHIND THE GROWTH ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase block mb-2">
                06 — TEAM LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                The People Behind The Growth.
              </h2>
            </div>
            <p className="text-zinc-400 text-xs md:text-sm font-light max-w-md">
              Strategists, creators, performance marketers, analysts and operators working together to build what comes next.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-white/10 bg-zinc-950/90 overflow-hidden group hover:border-[#FF4A17]/60 hover:bg-zinc-900/90 transition-all duration-500 shadow-2xl flex flex-col justify-between"
              >
                {/* Photo */}
                <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#FF4A17] hover:border-[#FF4A17] transition-all duration-300"
                  >
                    <Linkedin size={15} />
                  </a>
                </div>

                {/* Bio & Role */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[#FF4A17] text-[10px] font-mono font-bold uppercase tracking-widest mb-1">
                      {member.role}
                    </p>
                    <h3 className="text-white text-xl font-bold tracking-tight mb-2">
                      {member.name}
                    </h3>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[10px] text-zinc-500 font-mono flex items-center justify-between">
                    <span>SPECIALTY</span>
                    <span className="text-zinc-300 font-semibold">{member.specialty.split('&')[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 08. CULTURE / PHILOSOPHY — VISUAL STATEMENT ── */}
      <section className="relative py-32 px-6 md:px-12 bg-black border-b border-white/10 text-center select-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,74,23,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 space-y-8">
          <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.4em] uppercase block">
            OUR PHILOSOPHY
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase">
            <span className="text-white block">We Don't Chase Attention.</span>
            <span className="bg-gradient-to-r from-[#FF4A17] via-orange-400 to-amber-500 bg-clip-text text-transparent block mt-2">
              We Turn It Into Momentum.
            </span>
          </h2>
        </div>
      </section>

      {/* ── 09. FINAL CTA ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black text-center select-none overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase mb-4">
            READY TO GROW?
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase mb-6">
            Let's Build What's Next.
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
            Tell us where your brand is today. We'll help you figure out where it can go next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF4A17]/90 hover:bg-[#FF4A17] text-white font-bold text-xs uppercase tracking-widest backdrop-blur-xl border border-[#FF4A17]/60 shadow-[0_0_30px_rgba(255,74,23,0.5)] transition-all duration-300 hover:scale-105"
            >
              Start a Project <ArrowUpRight size={18} />
            </Link>

            <a
              href="/assets/myadsphereportfolio.pdf"
              download="MyAdSphere_Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-950 border border-white/15 text-white font-bold text-xs uppercase tracking-widest hover:border-white/30 transition-all duration-300"
            >
              Download Portfolio <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
