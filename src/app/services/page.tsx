'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { servicesData, ServiceData } from '@/data/servicesData';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Sparkles, 
  TrendingUp, 
  Search, 
  Share2, 
  Megaphone, 
  FileText, 
  Palette, 
  Users, 
  Filter, 
  Globe,
  ShoppingBag,
  Cpu,
  Bot,
  Newspaper
} from 'lucide-react';

const categories = ['ALL', 'PERFORMANCE', 'ORGANIC GROWTH', 'CREATIVE', 'CONVERSION', 'INTELLIGENCE'] as const;

// Unique Lucide icons mapped to all 12 service slugs
const serviceIcons: Record<string, React.ReactNode> = {
  'branding-identity': <Palette className="w-4 h-4 text-white" />,
  'content-creative-production': <FileText className="w-4 h-4 text-white" />,
  'social-media-marketing': <Share2 className="w-4 h-4 text-white" />,
  'website-design-development': <Globe className="w-4 h-4 text-white" />,
  'seo': <Search className="w-4 h-4 text-white" />,
  'performance-marketing': <TrendingUp className="w-4 h-4 text-white" />,
  'google-ads-ppc': <Megaphone className="w-4 h-4 text-white" />,
  'meta-ads': <Sparkles className="w-4 h-4 text-white" />,
  'lead-generation': <Users className="w-4 h-4 text-white" />,
  'ecommerce-marketing': <ShoppingBag className="w-4 h-4 text-white" />,
  'pr-media': <Newspaper className="w-4 h-4 text-white" />,
  'marketing-automation-crm': <Newspaper className="w-4 h-4 text-white" />,
  'ai-solutions-automation': <Bot className="w-4 h-4 text-white" />
};

export default function ServicesOverviewPage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // De-duplicate in case of legacy alias keys in servicesData
  const uniqueServices = Object.values(servicesData).filter(
    (service, index, self) => index === self.findIndex((s) => s.slug === service.slug)
  );

  const filteredServices = activeCategory === 'ALL'
    ? uniqueServices
    : uniqueServices.filter(s => s.category === activeCategory);

  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-[#FF4A17] selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* ── 1. SERVICES HERO SECTION ── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 border-b border-white/10 overflow-hidden select-none">
        
        {/* Ambient Background Glow & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF4A17]/[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950/90 border border-white/15 text-[#FF4A17] font-sans text-[11px] font-bold tracking-[0.3em] uppercase mb-8 shadow-xl">
            <Sparkles size={13} className="animate-pulse" />
            WHAT WE DO — DIGITAL GROWTH OPERATING SYSTEM
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase mb-8">
            <span className="text-white block">Growth Isn't One Channel.</span>
            <span className="bg-gradient-to-r from-[#FF4A17] via-orange-400 to-amber-500 bg-clip-text text-transparent block">
              It's The System Behind Them.
            </span>
          </h1>

          {/* Subhead Paragraph */}
          <p className="text-zinc-400 text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
           Myadsphere brings strategy, creative, performance marketing, SEO, technology and AI together to help brands attract the right audience, generate qualified leads and achieve measurable growth.
          </p>

        </div>
      </section>

      {/* ── 2. CATEGORY FILTERS & SERVICES GRID ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16 select-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-sans font-bold tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#FF4A17] text-white shadow-[0_0_20px_rgba(255,74,23,0.4)] border border-[#FF4A17]'
                    : 'bg-zinc-950/80 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative rounded-2xl border border-white/10 bg-zinc-950/90 p-8 flex flex-col justify-between h-full hover:border-[#FF4A17]/60 hover:bg-zinc-900/90 transition-all duration-500 shadow-2xl block overflow-hidden"
                >
                  {/* Subtle Corner Ambient Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4A17]/[0.03] group-hover:bg-[#FF4A17]/10 blur-2xl transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Top Card Bar: Icon & Category */}
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#FF4A17] group-hover:border-[#FF4A17] group-hover:scale-105 transition-all duration-300 shadow-md">
                        {serviceIcons[service.slug] || <Sparkles className="w-4 h-4 text-white" />}
                      </div>
                      <span className="text-[10px] text-zinc-500 font-sans uppercase tracking-widest font-semibold">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-2xl font-bold tracking-tight mb-4 group-hover:text-white transition-colors flex items-center justify-between">
                      {service.title}
                      <ArrowUpRight size={20} className="text-zinc-500 group-hover:text-[#FF4A17] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Platforms Tech Stack Pills */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                      {service.platforms.slice(0, 3).map((platform) => (
                        <span key={platform} className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[10px] font-sans text-zinc-400">
                          {platform}
                        </span>
                      ))}
                      {service.platforms.length > 3 && (
                        <span className="px-2 py-1 rounded bg-white/[0.04] text-[10px] font-sans text-zinc-500">
                          +{service.platforms.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. BOTTOM CTA BANNER ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-t border-white/10 text-center select-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,74,23,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#FF4A17] font-sans text-xs font-bold tracking-[0.35em] uppercase mb-4">
            READY TO SCALE YOUR BRAND?
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-8">
            Build Your Predictable Growth Engine Today.
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
