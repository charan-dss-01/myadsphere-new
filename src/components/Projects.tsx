'use client';

import React from 'react';
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

// ── Case Studies Data ─────────────────────────────────────────────────────
const projectItems = [
  {
    title: "E-Commerce ROAS",
    value: "ecommerce",
    content: (
      <ProjectTabContent
        title="D2C Revenue Surge"
        category="Performance Marketing & Meta Ads"
        desc="Achieved 340% ROAS increase for a high-growth retail brand by optimizing ad creatives, implementing dynamic retargeting funnels, and enhancing checkout conversion."
        src="/assets/agri-connect.png"
        href="#contact"
        tech={["Meta Ads", "Google Ads", "Shopify CRO", "Retargeting"]}
        metric="+340% ROAS"
      />
    ),
  },
  {
    title: "SaaS Lead Engine",
    value: "saas",
    content: (
      <ProjectTabContent
        title="Enterprise Lead Pipeline"
        category="B2B Paid Search & SEO"
        desc="Generated 12,000+ qualified demo leads for a SaaS provider by restructuring high-intent Google Search campaigns and deploying high-converting landers."
        src="/assets/ee.png"
        href="#contact"
        tech={["Google Ads", "LinkedIn Ads", "GA4 Analytics", "Landing CRO"]}
        metric="12k+ Demo Leads"
      />
    ),
  },
  {
    title: "D2C Brand Scale",
    value: "brand",
    content: (
      <ProjectTabContent
        title="Social Brand Scaling"
        category="Social Media & Creative Strategy"
        desc="Scaled a consumer brand from startup to market leader with 5.2M+ video impressions on TikTok and Instagram, multiplying monthly revenue 4.5x."
        src="/assets/CareerPilot.png"
        href="#contact"
        tech={["TikTok Ads", "Instagram Growth", "Video Creatives", "Influencer"]}
        metric="5.2M+ Reach"
      />
    ),
  },
  {
    title: "Real Estate Funnel",
    value: "realestate",
    content: (
      <ProjectTabContent
        title="Luxury Buyer Acquisition"
        category="Geotargeted Paid Media & Lead Gen"
        desc="Built an automated lead generation framework for a high-end property developer, driving $4.2M in qualified buyer pipeline in under 120 days."
        src="/assets/securedocs.jpg"
        href="#contact"
        tech={["Geotargeted Ads", "Meta Ads", "CRM Integration", "Funnel CRO"]}
        metric="$4.2M Pipeline"
      />
    ),
  },
  {
    title: "HealthTech SEO",
    value: "healthtech",
    content: (
      <ProjectTabContent
        title="Organic Search Dominance"
        category="Technical SEO & Content Clusters"
        desc="Engineered an organic SEO strategy securing #1 Google rankings across 45+ high-volume terms, scaling monthly organic traffic to 280,000 visitors."
        src="/assets/sparshakala.png"
        href="#contact"
        tech={["Technical SEO", "Content Clusters", "GA4 Tracking", "Link Building"]}
        metric="#1 Search Rank"
      />
    ),
  }
];

// ── Sub-component for Tab Content ─────────────────────────────────────────
function ProjectTabContent({ title, category, desc, src, href, tech, metric }: {
  title: string, category: string, desc: string, src: string, href: string, tech: string[], metric: string
}) {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-[32px] md:rounded-[40px] p-8 md:p-14 text-white bg-zinc-950/70 backdrop-blur-2xl border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
      
      {/* Top-Left Specular Surface Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_65%)] pointer-events-none" />

      {/* Subtle Orange Glow Ambient Spot */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF4A17]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-20 flex flex-col h-full">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF4A17] animate-pulse" />
              <p className="text-[11px] text-[#FF4A17] font-mono font-bold tracking-[0.4em] uppercase">{category}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-none uppercase">{title}</h3>
              <span className="px-3.5 py-1 rounded-full bg-[#FF4A17]/15 border border-[#FF4A17]/35 text-[#FF4A17] text-xs font-mono font-bold uppercase tracking-wider">
                {metric}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {tech.map(t => (
              <span key={t} className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-[10px] font-mono font-bold text-zinc-300 uppercase tracking-widest backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="text-zinc-400 text-base md:text-lg max-w-2xl font-light leading-relaxed mb-8">
          {desc}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <Link
            href={href}
            className="w-full md:w-auto px-8 py-4 rounded-full bg-[#FF4A17]/90 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#FF4A17] hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,74,23,0.35)] flex items-center justify-center gap-3"
          >
            <span>Inquire About Similar Campaign</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="relative mt-auto w-full h-[300px] md:h-[480px] rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group bg-zinc-900/90">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
          <div className="absolute inset-0 rounded-[24px] md:rounded-[32px] border border-white/10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-24 md:py-40 px-4 overflow-hidden select-none">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Dynamic Header Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#FF4A17]/[0.06] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF4A17]/50" />
              <p className="text-[11px] text-[#FF4A17] tracking-[0.5em] uppercase font-bold font-mono">Selected Case Studies</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF4A17]/50" />
            </div>

            <div className="relative group">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none relative z-10 uppercase">
                <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                  Our Work
                </span>
              </h2>
            </div>

            <div className="w-24 h-1 bg-[#FF4A17]/30 rounded-full mt-8 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#FF4A17] to-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Tabs Container ── */}
        <div className="h-[52rem] md:h-[72rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start">
          <Tabs
            tabs={projectItems}
            containerClassName="mb-10 md:mb-14 mx-auto p-2 bg-zinc-950/80 backdrop-blur-xl rounded-[24px] border border-white/10"
            activeTabClassName="bg-[#FF4A17] text-white shadow-[0_0_20px_rgba(255,74,23,0.35)]"
            tabClassName="text-zinc-400 hover:text-white px-6 md:px-8 py-3.5 font-bold text-xs font-mono uppercase tracking-widest transition-all duration-300"
          />
        </div>

      </div>
    </section>
  );
}
