'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Team from '@/components/Team';
import ClientLogosMarquee from '@/components/ClientLogosMarquee';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
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
    year: '2020',
    title: 'The Beginning',
    desc: 'myadsphere was founded in Hyderabad with a vision to help businesses make digital marketing more strategic, measurable, and accessible.'
  },
  {
    year: '2021',
    title: 'Expanding Our Capabilities',
    desc: 'We moved beyond individual marketing services and expanded into creative, social media, paid advertising, SEO, and brand strategy.'
  },
  {
    year: '2022',
    title: 'Building Digital Experiences',
    desc: 'Website design, development, conversion experiences, and stronger technology capabilities became an important part of our offering.'
  },
  {
    year: '2023',
    title: 'Connecting Creative & Performance',
    desc: 'Our approach evolved into an integrated model where strategy, media, creative, content, and technology work together.'
  },
  {
    year: '2024',
    title: 'Growing Across Industries',
    desc: 'We expanded our experience across sectors including real estate, healthcare, e-commerce, hospitality, education, technology, and professional services.'
  },
  {
    year: '2025',
    title: 'Building Smarter Systems',
    desc: 'Automation, data-driven workflows, and AI began playing a larger role in how we develop marketing and operational solutions.'
  },
  {
    year: '2026',
    title: "Built for What's Next",
    desc: 'Today, myadsphere is evolving into a multidisciplinary digital growth company with ambitions beyond Hyderabad — serving businesses across India and international markets.'
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

export default function AboutUsPage() {
  const journeyScrollRef = useRef<HTMLDivElement>(null);

  const handleJourneyScroll = (direction: 'left' | 'right') => {
    if (journeyScrollRef.current) {
      const amount = direction === 'left' ? -340 : 340;
      journeyScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-[#FF4A17] selection:text-white relative overflow-hidden font-sans">
      <Navbar />

      {/* Global Background Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF4A17]/[0.06] blur-[150px] rounded-full pointer-events-none" />

      {/* ── 01. OUR STORY ── */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-28 px-6 md:px-12 border-b border-white/10 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#FF4A17] font-bold tracking-[0.35em] uppercase mb-6 backdrop-blur-md">
            01 — OUR STORY
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight uppercase mb-8 max-w-5xl">
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              WE BUILD BRANDS THAT MOVE PEOPLE{' '}
            </span>
            <span className="bg-gradient-to-r from-[#FF4A17] via-[#FF6B3D] to-[#FFA07A] bg-clip-text text-transparent">
              AND BUSINESS.
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 bg-zinc-950/70 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-10 shadow-2xl space-y-6 text-zinc-300 font-light leading-relaxed text-base md:text-lg">
              <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                myadsphere is a digital growth agency built around a simple belief:{' '}
                <span className="text-[#FF4A17]">attention means nothing without action.</span>
              </p>
              <p>
                Founded in Hyderabad in 2020, we bring strategy, creativity, performance marketing, technology, and AI together to help ambitious businesses build stronger brands, reach the right audiences, and turn digital opportunities into measurable growth.
              </p>
              <p>
                What started with a clear ambition to help businesses navigate digital marketing has grown into a multidisciplinary team working across branding, content, paid media, SEO, websites, UI/UX, PR, and intelligent digital solutions.
              </p>
              <p>
                Today, we work with startups, growing businesses, and established brands in India and beyond — building digital experiences and growth strategies designed for where business is going next.
              </p>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-[#FF4A17]/10 border border-[#FF4A17]/20 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-between h-full min-h-[340px]">
              <div>
                <span className="text-[#FF4A17] text-xs font-bold tracking-[0.3em] uppercase block mb-3">HYDERABAD · EST. 2020</span>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                  DIGITAL GROWTH ENGINE
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Connecting strategy, creative production, performance marketing, and modern engineering into one synchronized revenue ecosystem.
                </p>
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-3xl font-black text-white">150+</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Campaigns Scaled</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[#FF4A17]">98%</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. WHO WE ARE ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10">
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

          {/* Connected Disciplines Grid */}
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
      </section>

      {/* ── 03. WHAT MOVES & DEFINES US (MISSION, VISION, VALUES) ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <span className="text-[#FF4A17] text-xs font-bold tracking-[0.35em] uppercase block mb-3">
              03 — WHAT MOVES &amp; DEFINES US
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
                  <span className="text-[#FF4A17] text-xs font-bold tracking-widest block mb-2">0{idx + 1}</span>
                  <h4 className="text-white text-lg font-bold mb-2 group-hover:text-[#FF4A17] transition-colors">{val.title}</h4>
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. OUR JOURNEY (2020 - 2026 TIMELINE) ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#FF4A17] text-xs font-bold tracking-[0.35em] uppercase block mb-3">
                04 — OUR JOURNEY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                FROM HYDERABAD TO A GROWING DIGITAL FOOTPRINT.
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleJourneyScroll('left')}
                className="w-12 h-12 rounded-full border border-white/15 bg-zinc-950/80 hover:bg-[#FF4A17] hover:border-[#FF4A17] text-white flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Previous Year"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleJourneyScroll('right')}
                className="w-12 h-12 rounded-full border border-white/15 bg-zinc-950/80 hover:bg-[#FF4A17] hover:border-[#FF4A17] text-white flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Next Year"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={journeyScrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {journeyTimeline.map((item) => (
              <div
                key={item.year}
                className="shrink-0 w-[290px] sm:w-[330px] snap-start rounded-3xl border border-white/10 bg-zinc-950/90 p-8 hover:border-[#FF4A17]/60 hover:bg-zinc-900/90 transition-all duration-500 shadow-2xl flex flex-col justify-between group"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#FF4A17] block mb-4 group-hover:scale-105 transition-transform origin-left">
                    {item.year}
                  </span>
                  <h3 className="text-white text-xl font-bold tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] text-zinc-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#FF4A17]" />
                  <span>MILESTONE ERA</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05. WHAT WE BRING TOGETHER ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4A17] text-xs font-bold tracking-[0.35em] uppercase block mb-3">
              05 — WHAT WE BRING TOGETHER
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              ONE TEAM. MULTIPLE DISCIPLINES.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((disc, idx) => (
              <div 
                key={disc.title}
                className="bg-zinc-950/70 border border-white/10 hover:border-[#FF4A17]/60 backdrop-blur-xl rounded-3xl p-8 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs text-[#FF4A17] font-bold tracking-widest block mb-4">0{idx + 1} · DISCIPLINE</span>
                  <h3 className="text-white text-xl font-black tracking-tight mb-3 group-hover:text-[#FF4A17] transition-colors">
                    {disc.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                    {disc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. THE TOOLS BEHIND THE WORK ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4A17] text-xs font-bold tracking-[0.35em] uppercase block mb-3">
              06 — THE TOOLS BEHIND THE WORK
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

      {/* ── 07. INDUSTRIES WE UNDERSTAND ── */}
      <section className="relative py-28 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4A17] text-xs font-bold tracking-[0.35em] uppercase block mb-3">
              07 — INDUSTRIES WE UNDERSTAND
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

      {/* ── 08. THE PEOPLE BEHIND THE GROWTH (SHARED TEAM COMPONENT) ── */}
      <Team />

      {/* ── 09. OUR PHILOSOPHY ── */}
      <section className="relative py-32 px-6 md:px-12 bg-black border-b border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,74,23,0.06)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#FF4A17] text-xs font-bold tracking-[0.4em] uppercase block mb-4">
            09 — OUR PHILOSOPHY
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

      {/* ── 10. READY TO GROW? (CTA SECTION) ── */}
      <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-black via-zinc-950 to-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF4A17]/[0.1] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-[#FF4A17] text-xs font-bold tracking-[0.4em] uppercase block mb-4">
            10 — READY TO GROW?
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
