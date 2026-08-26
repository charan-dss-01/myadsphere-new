'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Team from '@/components/Team';
import ClientLogosMarquee from '@/components/ClientLogosMarquee';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight,
  ArrowDown,
  Sparkles, 
  Target, 
  Compass, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Cpu, 
  Globe2, 
  Building2, 
  Stethoscope, 
  ShoppingBag, 
  UtensilsCrossed, 
  GraduationCap, 
  Laptop, 
  Briefcase,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// ── 04: JOURNEY TIMELINE DATA ──
const journeyTimeline = [
  {
    year: '2021',
    title: 'THE INITIAL SPARK',
    desc: 'The concept was born from a simple observation — brands needed better ways to turn attention into measurable growth.',
    badge: '01 · CONCEPT & ORIGINS'
  },
  {
    year: '2022',
    title: 'BUILDING THE FOUNDATION',
    desc: 'We began building our core capabilities across strategy, creative, performance marketing and digital experiences.',
    badge: '02 · CORE CAPABILITIES'
  },
  {
    year: '2023',
    title: 'FINDING OUR VOICE',
    desc: 'MyAdSphere evolved into a focused growth partner combining creative thinking, marketing intelligence and technology.',
    badge: '03 · GROWTH PARTNERSHIP'
  },
  {
    year: '2024',
    title: 'SCALING THE ENGINE',
    desc: 'We expanded our capabilities across performance marketing, SEO, branding, content, development and automation.',
    badge: '04 · FULL STACK EXPANSION'
  },
  {
    year: '2025',
    title: "BUILDING WHAT'S NEXT",
    desc: 'We began combining marketing, technology and AI to create smarter growth systems for ambitious brands.',
    badge: '05 · AI & AUTOMATION'
  },
  {
    year: '2026',
    title: 'THE NEXT CHAPTER',
    desc: 'MyAdSphere continues to evolve — building a global growth ecosystem where strategy, creativity, data and technology move together.',
    badge: '06 · GLOBAL ECOSYSTEM'
  }
];

// ── 05: DISCIPLINES DATA ──
const disciplines = [
  {
    title: 'BRAND & CREATIVE',
    desc: 'Brand strategy, identity, campaigns, content, visual communication, and creative production.'
  },
  {
    title: 'WEB & EXPERIENCE',
    desc: 'Website design and development, UI/UX, digital experiences, and conversion-focused interfaces.'
  },
  {
    title: 'ORGANIC GROWTH',
    desc: 'SEO, content strategy, search visibility, local growth, and long-term organic acquisition.'
  },
  {
    title: 'PAID MEDIA',
    desc: 'Performance marketing, Google Ads, Meta Ads, audience strategy, creative testing, and optimization.'
  },
  {
    title: 'LEAD GENERATION',
    desc: 'Campaign funnels, landing pages, customer journeys, qualification, and conversion strategy.'
  },
  {
    title: 'PR & MEDIA',
    desc: 'Brand visibility, media outreach, thought leadership, communication, and reputation.'
  },
  {
    title: 'AI & AUTOMATION',
    desc: 'AI-powered assistants, intelligent workflows, automation, and technology integrations.'
  }
];

// ── 06: TECH & TOOLS STACK ──
const techStack = [
  {
    category: 'Design & Creative',
    tools: ['Figma', 'Adobe Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects']
  },
  {
    category: 'Web & Development',
    tools: ['React', 'Next.js', 'WordPress', 'Shopify', 'Webflow']
  },
  {
    category: 'Performance Marketing',
    tools: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Google Tag Manager']
  },
  {
    category: 'SEO & Analytics',
    tools: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs']
  },
  {
    category: 'CRM & Automation',
    tools: ['HubSpot', 'Zoho', 'GoHighLevel', 'Make', 'Zapier']
  },
  {
    category: 'AI',
    tools: ['OpenAI', 'Anthropic', 'AI APIs', 'Intelligent Workflow Tools']
  }
];

// ── 07: INDUSTRIES WE UNDERSTAND ──
const industries = [
  {
    icon: Building2,
    title: 'Real Estate',
    desc: 'Digital strategies designed around visibility, qualified enquiries, project launches, and customer acquisition.'
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    desc: 'Search, content, websites, local visibility, and digital communication built around trust and accessibility.'
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    desc: 'Creative, performance advertising, digital experiences, and conversion strategies designed around online growth.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality',
    desc: 'Brand storytelling, social content, digital discovery, and campaigns that turn attention into visits and bookings.'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Search, lead generation, content, advertising, and digital experiences designed around student acquisition.'
  },
  {
    icon: Laptop,
    title: 'SaaS & Technology',
    desc: 'Clear positioning, modern websites, UI/UX, demand generation, and growth marketing for technology businesses.'
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    desc: 'Credibility-focused branding, search visibility, lead generation, and digital experiences designed to attract the right clients.'
  }
];

function CinematicJourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative py-32 px-6 md:px-12 bg-black border-b border-white/10 select-none overflow-hidden font-sans">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF4A17]/[0.03] blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FF4A17] text-xs font-bold tracking-[0.4em] uppercase block mb-4"
          >
            OUR JOURNEY
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[1.15] mb-6"
          >
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent block">
              FROM HYDERABAD TO A
            </span>
            <span className="bg-gradient-to-r from-[#FF4A17] via-[#FF6B3D] to-[#FFA07A] bg-clip-text text-transparent block">
              GROWING DIGITAL FOOTPRINT.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto"
          >
            Trace our evolution from a strategic ambition in Hyderabad into an integrated, multi-market digital growth agency.
          </motion.p>
        </div>

        {/* Central Vertical Timeline Container */}
        <div className="relative max-w-5xl mx-auto">

          {/* Top Arrow Badge */}
          <div className="flex justify-center mb-14 relative z-20">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-10 h-10 rounded-full border border-[#FF4A17]/40 bg-zinc-950/90 flex items-center justify-center text-[#FF4A17] shadow-[0_0_25px_rgba(255,74,23,0.4)] backdrop-blur-md"
            >
              <ArrowDown size={16} className="animate-bounce" />
            </motion.div>
          </div>

          {/* BASE LINE: Subtle Dark Line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-16 bottom-16 w-[2px] bg-white/[0.08] pointer-events-none rounded-full" />

          {/* ACTIVE LINE: Dynamic Scroll-driven Illuminated Laser Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 -translate-x-1/2 top-16 bottom-16 w-[2.5px] bg-gradient-to-b from-[#FF4A17] via-[#FF6B3D] to-[#FFA07A] pointer-events-none rounded-full shadow-[0_0_18px_#FF4A17] origin-top z-10"
          />

          {/* Timeline Items */}
          <div className="space-y-20 md:space-y-32">
            {journeyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.year} 
                  className="relative flex flex-col md:flex-row items-center justify-between"
                >
                  {/* Node Dot Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.7, opacity: 0.4 }}
                      whileInView={{ scale: 1.25, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="relative flex items-center justify-center"
                    >
                      {/* Animated Pulse Halo Ring */}
                      <div className="absolute w-9 h-9 rounded-full bg-[#FF4A17]/30 animate-ping pointer-events-none" />
                      
                      {/* Node Circle Outer Glow */}
                      <div className="w-7 h-7 rounded-full bg-zinc-950 border border-[#FF4A17] flex items-center justify-center shadow-[0_0_20px_#FF4A17] backdrop-blur-sm">
                        {/* Node Inner Core Dot */}
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF4A17] shadow-[0_0_8px_#ffffff]" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Left Side Content Slot */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-16">
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0.2, filter: "blur(6px)", y: 40 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        whileHover={{ y: -6, scale: 1.015 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative bg-zinc-950/70 border border-white/10 hover:border-[#FF4A17]/70 backdrop-blur-2xl rounded-3xl p-7 sm:p-9 shadow-2xl transition-all duration-500 group md:text-right overflow-hidden"
                      >
                        {/* Soft Inner Highlight Sheen */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
                        
                        {/* Atmospheric Glow on Active */}
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#FF4A17]/[0.07] blur-3xl pointer-events-none rounded-full group-hover:bg-[#FF4A17]/[0.15] transition-all duration-500" />

                        <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#FF4A17] uppercase block mb-2">
                          {item.badge}
                        </span>

                        <span className="text-4xl sm:text-5xl font-black text-[#FF4A17] tracking-tight block mb-2">
                          {item.year}
                        </span>

                        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                          {item.title}
                        </h3>

                        <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Side Content Slot */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-16 pt-4 md:pt-0">
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0.2, filter: "blur(6px)", y: 40 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        whileHover={{ y: -6, scale: 1.015 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative bg-zinc-950/70 border border-white/10 hover:border-[#FF4A17]/70 backdrop-blur-2xl rounded-3xl p-7 sm:p-9 shadow-2xl transition-all duration-500 group text-left overflow-hidden"
                      >
                        {/* Soft Inner Highlight Sheen */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />

                        {/* Atmospheric Glow on Active */}
                        <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#FF4A17]/[0.07] blur-3xl pointer-events-none rounded-full group-hover:bg-[#FF4A17]/[0.15] transition-all duration-500" />

                        <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#FF4A17] uppercase block mb-2">
                          {item.badge}
                        </span>

                        <span className="text-4xl sm:text-5xl font-black text-[#FF4A17] tracking-tight block mb-2">
                          {item.year}
                        </span>

                        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                          {item.title}
                        </h3>

                        <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-[#FF4A17] selection:text-white relative overflow-hidden font-sans">
      <Navbar />

      {/* Global Background Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF4A17]/[0.06] blur-[150px] rounded-full pointer-events-none" />

      {/* ── 01. HERO SECTION & OUR STORY ── */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-28 px-6 md:px-12 border-b border-white/10 z-10 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FF4A17]/[0.08] blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#FF4A17]/[0.06] blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: HERO CONTENT */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#FF4A17] font-bold tracking-[0.35em] uppercase backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FF4A17] animate-pulse" />
                OUR STORY
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] uppercase">
                <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent block">
                  From Hyderabad’s Digital Edge
                </span>
                <span className="bg-gradient-to-r from-[#FF4A17] via-[#FF6B3D] to-[#FFA07A] bg-clip-text text-transparent block">
                  to Global Growth.
                </span>
              </h1>

              {/* Paragraphs List */}
              <div className="space-y-5 text-zinc-300 font-light text-base md:text-lg leading-relaxed bg-zinc-950/60 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl">
                <p>
                  Founded in 2020, <strong className="text-white font-bold">Myadsphere</strong> began with a simple goal: help businesses grow through smarter marketing, stronger creativity, and better digital experiences.
                </p>

                <p>
                  Today, with <strong className="text-white font-bold">5+ years of experience</strong>, we’re a results-driven <strong className="text-[#FF4A17] font-bold">digital marketing agency in Hyderabad</strong> working with startups, growing businesses, and established brands that want to build a stronger presence, reach the right audience, and generate measurable growth.
                </p>

                <p>
                  Our expertise includes <strong className="text-white font-semibold">SEO, Google Ads, Meta Ads, social media marketing, branding, content creation, lead generation, and website development</strong>. We don’t believe in one-size-fits-all solutions. Every strategy is guided by insight, every creative has a purpose, and every campaign is built around real business objectives.
                </p>

                <p>
                  For us, digital marketing goes beyond visibility. It should help you build trust, create demand, generate qualified leads, increase conversions, and open new opportunities for growth. By bringing together <strong className="text-white font-semibold">creative strategy, data-driven marketing, and modern technology</strong>, we help turn your digital presence into meaningful business impact.
                </p>

                <p className="pt-3 text-white font-normal border-t border-white/10">
                  With our roots in <strong className="text-[#FF4A17] font-bold">Hyderabad</strong> and a growing presence across <strong className="text-white font-bold">DUBAI, UK, and the USA</strong>, myadsphere helps ambitious brands <strong className="text-white font-bold">connect with their audience, compete more effectively, and scale beyond boundaries.</strong>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-[#FF4A17] hover:bg-[#ff5d2e] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(255,74,23,0.4)] flex items-center gap-2 group active:scale-95"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/our-work"
                  className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 backdrop-blur-md active:scale-95"
                >
                  <span>VIEW OUR WORK</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: 3D COSMIC ORBIT PLANET GRAPHIC */}
            <motion.div 
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[480px] order-1 lg:order-2 -mt-6 sm:-mt-10 lg:-mt-14"
            >
              {/* Outer Orbit Ring 1 (Smooth Rotation) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute w-[360px] h-[180px] sm:w-[460px] sm:h-[230px] rounded-[100%] border border-[#FF4A17]/30 pointer-events-none shadow-[0_0_25px_rgba(255,74,23,0.2)]" 
              />
              
              {/* Outer Orbit Ring 2 (Smooth Reverse Rotation) */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-[380px] h-[190px] sm:w-[480px] sm:h-[240px] rounded-[100%] border border-white/10 pointer-events-none" 
              />

              {/* Central Glowing Planet */}
              <div className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-black via-[#0c0604] to-[#FF4A17]/85 shadow-[0_0_100px_rgba(255,74,23,0.5),inset_0_-30px_60px_rgba(0,0,0,0.95),inset_0_15px_40px_rgba(255,107,61,0.7)] border border-[#FF4A17]/40 flex items-center justify-center group overflow-hidden">
                {/* Internal Atmosphere Glow Breathing */}
                <motion.div 
                  animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,107,61,0.5)_0%,transparent_65%)] pointer-events-none" 
                />
              </div>

              {/* Floating Orbiting Pill Tags */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 px-4 py-1.5 rounded-full bg-black/80 border border-white/20 text-xs font-bold text-white shadow-xl backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF4A17] animate-pulse" />
                Strategy
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/3 left-0 sm:-left-4 px-4 py-1.5 rounded-full bg-black/80 border border-white/20 text-xs font-bold text-white shadow-xl backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF4A17] animate-pulse" />
                Creative
              </motion.div>

              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 right-0 sm:-right-4 px-4 py-1.5 rounded-full bg-black/80 border border-white/20 text-xs font-bold text-white shadow-xl backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF4A17] animate-pulse" />
                Technology
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-12 left-6 sm:left-10 px-4 py-1.5 rounded-full bg-black/80 border border-white/20 text-xs font-bold text-white shadow-xl backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF4A17] animate-pulse" />
                Growth
              </motion.div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-6 right-10 sm:right-14 px-4 py-1.5 rounded-full bg-black/80 border border-white/20 text-xs font-bold text-white shadow-xl backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF4A17] animate-pulse" />
                Performance
              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ── 02. WHO WE ARE ── */}
      {/* <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#FF4A17] text-xs font-bold tracking-[0.35em] uppercase block mb-3">
              02 — WHO WE ARE
            </span>
            <p className="text-xs md:text-sm text-zinc-400 font-semibold tracking-widest uppercase mb-2">
              BUILT AT THE INTERSECTION OF
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent">
                STRATEGY, CREATIVITY &amp; TECHNOLOGY.
              </span>
            </h2>
          </div>

          <div className="bg-zinc-950/70 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-10 mb-12">
            <p className="text-lg md:text-xl text-zinc-200 font-light leading-relaxed mb-6">
              We are strategists, designers, marketers, developers, and creative thinkers working together around one objective —{' '}
              <strong className="text-white font-bold">helping businesses grow with clarity and purpose.</strong>
            </p>
            <p className="text-[#FF4A17] font-bold text-base md:text-lg uppercase tracking-wide">
              We don&apos;t believe great results come from isolated campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {[
              { label: 'BRANDING', desc: 'A strong brand needs the right positioning.' },
              { label: 'CREATIVE', desc: 'Great creative needs the right distribution.' },
              { label: 'ADVERTISING', desc: 'Advertising needs strong landing experiences.' },
              { label: 'SEO', desc: 'SEO needs valuable content.' },
              { label: 'TECHNOLOGY', desc: 'Technology needs a clear business purpose.' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-950/60 border border-white/10 hover:border-[#FF4A17]/50 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <span className="text-[10px] text-[#FF4A17] font-bold tracking-widest uppercase block mb-3">0{idx + 1} · {item.label}</span>
                <p className="text-sm text-zinc-300 font-light leading-snug group-hover:text-white transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center text-zinc-300 font-medium text-sm md:text-base">
            That&apos;s why <span className="text-white font-bold">myadsphere</span> connects every discipline into one coordinated digital ecosystem.
          </div>
        </div>
      </section> */}

      {/* ── WHAT MOVES & DEFINES US (MISSION, VISION, VALUES) ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <span className="text-[#FF4A17] text-xs font-bold tracking-[0.35em] uppercase block mb-3">
              WHAT MOVES &amp; DEFINES US
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              MISSION, VISION &amp; CORE VALUES
            </h2>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-[#FF4A17]/10 border border-[#FF4A17]/30 backdrop-blur-2xl rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF4A17]/10 blur-[70px] pointer-events-none rounded-full" />
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF4A17]/15 border border-[#FF4A17]/30 text-[#FF4A17] text-[11px] font-bold tracking-widest uppercase mb-4">
                <Target size={14} /> OUR MISSION
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Turn Attention Into Meaningful Business Growth.
              </h3>
              <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                To help ambitious businesses transform ideas, attention, and digital opportunities into stronger brands, better customer experiences, and measurable business outcomes through strategy, creativity, technology, and continuous improvement.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-white/5 border border-white/15 backdrop-blur-2xl rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase mb-4">
                <Compass size={14} /> OUR VISION
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Build Brands Ready for What&apos;s Next.
              </h3>
              <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                To become a trusted digital growth partner for ambitious businesses across India and global markets by building modern brands, digital experiences, and growth systems that remain relevant in a constantly evolving world.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FF4A17]" />
              OUR VALUES
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Think Beyond', desc: 'We challenge conventional thinking and look for better ways to solve business and creative problems.' },
                { title: 'Strategy Before Execution', desc: 'We understand the objective before choosing the platform, creative direction, or technology.' },
                { title: 'Creativity With Purpose', desc: 'Great ideas should do more than look good. They should communicate, connect, and move people toward action.' },
                { title: 'Stay Transparent', desc: 'Clear communication, honest expectations, and visible performance build stronger partnerships.' },
                { title: 'Keep Improving', desc: 'Digital never stops changing. Neither do we. We continuously test, learn, refine, and evolve.' },
                { title: 'Own the Outcome', desc: 'We take responsibility for the quality of our thinking, execution, and the value we bring to every engagement.' }
              ].map((val, idx) => (
                <div 
                  key={val.title}
                  className="bg-zinc-950/70 border border-white/10 hover:border-[#FF4A17]/60 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 shadow-xl group"
                >
                  <span className="text-[#FF4A17] text-xs font-bold tracking-widest block mb-2">VAL · 0{idx + 1}</span>
                  <h4 className="text-white text-lg font-bold mb-2 group-hover:text-[#FF4A17] transition-colors">{val.title}</h4>
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY (CINEMATIC SCROLL-DRIVEN TIMELINE) ── */}
      <CinematicJourneyTimeline />

      {/* ── THE TOOLS BEHIND THE WORK ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4A17] text-xs font-bold tracking-[0.35em] uppercase block mb-3">
              THE TOOLS BEHIND THE WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
              TECHNOLOGY, CREATIVE &amp; MARKETING STACK
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light max-w-2xl">
              We work with modern platforms and technologies selected around the needs of each project — not simply because they&apos;re trending.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((cat) => (
              <div 
                key={cat.category}
                className="bg-zinc-950/70 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-6 pb-3 border-b border-white/10 flex items-center justify-between">
                  <span>{cat.category}</span>
                  <Cpu size={18} className="text-[#FF4A17]" />
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs text-zinc-300 font-medium hover:border-[#FF4A17]/40 hover:text-white transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE UNDERSTAND ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4A17] text-xs font-bold tracking-[0.35em] uppercase block mb-3">
              INDUSTRIES WE UNDERSTAND
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                DIFFERENT INDUSTRIES.{' '}
              </span>
              <span className="bg-gradient-to-r from-[#FF4A17] via-[#FF6B3D] to-[#FFA07A] bg-clip-text text-transparent">
                ONE FOCUS — MEANINGFUL GROWTH.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => {
              const IconComp = ind.icon;
              return (
                <div 
                  key={ind.title}
                  className="bg-zinc-950/70 border border-white/10 hover:border-[#FF4A17]/60 backdrop-blur-xl rounded-3xl p-8 transition-all duration-300 shadow-xl group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FF4A17]/10 border border-[#FF4A17]/20 text-[#FF4A17] flex items-center justify-center mb-6 group-hover:bg-[#FF4A17] group-hover:text-white transition-all duration-300">
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-white transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE PEOPLE BEHIND THE GROWTH (SHARED TEAM COMPONENT) ── */}
      <Team />

      {/* ── OUR PHILOSOPHY ── */}
      <section className="relative py-32 px-6 md:px-12 bg-black border-b border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,74,23,0.06)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#FF4A17] text-xs font-bold tracking-[0.4em] uppercase block mb-4">
            OUR PHILOSOPHY
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-tight mb-8">
            <span className="block text-white">WE DON&apos;T CHASE ATTENTION.</span>
            <span className="block bg-gradient-to-r from-[#FF4A17] via-[#FF6B3D] to-[#FFA07A] bg-clip-text text-transparent">
              WE TURN IT INTO MOMENTUM.
            </span>
          </h2>

          <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Attention is only the beginning. What matters is what happens next — whether someone remembers your brand, explores your website, starts a conversation, becomes a customer, or comes back again.
          </p>

          <div className="bg-zinc-950/80 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto space-y-4 text-left">
            <p className="text-[#FF4A17] text-xs font-bold tracking-widest uppercase mb-2">MOVEMENT ENGINE</p>
            {[
              'From awareness to interest.',
              'From interest to action.',
              'From action to growth.'
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white font-bold text-lg md:text-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF4A17]" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── READY TO GROW? (CTA SECTION) ── */}
      <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-black via-zinc-950 to-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF4A17]/[0.1] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-[#FF4A17] text-xs font-bold tracking-[0.4em] uppercase block mb-4">
            READY TO GROW?
          </span>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase mb-6">
            LET&apos;S BUILD WHAT&apos;S NEXT.
          </h2>

          <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed mb-10">
            Tell us where your brand is today and where you want it to go. We&apos;ll help you identify the strategy, creative, technology, and opportunities that can move it forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF4A17] hover:bg-[#ff5d2e] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(255,74,23,0.4)] flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>START A PROJECT</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/our-work"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md active:scale-95"
            >
              <span>VIEW OUR WORK</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <ClientLogosMarquee />

      <Footer />
    </main>
  );
}
