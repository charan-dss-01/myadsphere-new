'use client'

import React, { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

const capabilities = [
  {
    category: "Paid Acquisition",
    icon: "📈",
    items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "Retargeting"],
  },
  {
    category: "Organic Scaling",
    icon: "🔍",
    items: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO", "Authority Building"],
  },
  {
    category: "Creative & Brand",
    icon: "🎨",
    items: ["Ad Creatives", "Brand Identity", "Copywriting", "Video Ads", "Landing Pages"],
  },
  {
    category: "Analytics & CRO",
    icon: "⚡",
    items: ["GA4 Tracking", "Funnel CRO", "A/B Testing", "Attribution Models", "ROI Dashboards"],
  },
];

const methodology = [
  {
    step: "01",
    title: "Audit & Market Intelligence",
    sub: "Deep Data Analysis",
    desc: "We analyze your audience, historical campaign performance, competitors, and conversion gaps to identify high-potential growth opportunities.",
  },
  {
    step: "02",
    title: "Strategy & Funnel Architecture",
    sub: "Custom Blueprint",
    desc: "We design a customized marketing blueprint linking high-converting messaging, multi-channel targeting, and optimized landing funnels.",
  },
  {
    step: "03",
    title: "Creative Launch & Testing",
    sub: "Agile Execution",
    desc: "Deploying high-impact ad creatives, precision-targeted campaigns, and continuous real-time A/B testing to lower customer acquisition costs.",
  },
  {
    step: "04",
    title: "Revenue Scaling & Expansion",
    sub: "Predictable Growth",
    desc: "Scaling winning campaigns aggressively, unlocking new customer segments, and delivering transparent real-time ROI dashboards.",
  },
];

const values = [
  { icon: "⚡", label: "Performance First", desc: "Every campaign is engineered around measurable metrics, profit, and revenue growth." },
  { icon: "🎯", label: "Data-Driven Precision", desc: "No guesswork. Every budget decision is backed by analytics and user behavior." },
  { icon: "🎨", label: "Creative Distinction", desc: "Scroll-stopping visuals and compelling copy that capture market share." },
  { icon: "📈", label: "Relentless Scaling", desc: "We continuously test, optimize, and expand your brand's market reach." },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CardLabel({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-7">
      <div className="w-8 h-8 rounded-lg bg-[#FF4A17]/10 border border-[#FF4A17]/20 flex items-center justify-center text-sm shrink-0 text-[#FF4A17]">
        {icon}
      </div>
      <span className="text-[11px] text-[#FF4A17] tracking-[0.22em] uppercase font-bold">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-black py-32 px-4 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <FadeIn className="text-center mb-24 relative">
          {/* Ghost outline background text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <span className="text-[70px] sm:text-[110px] md:text-[150px] font-black text-transparent tracking-tighter leading-none"
              style={{ WebkitTextStroke: '1px rgba(255,74,23,0.08)' }}>
              MYADSPHERE
            </span>
          </div>

          <div className="relative z-10 pt-8">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#FF4A17]/40" />
              <p className="text-[11px] text-[#FF4A17] tracking-[0.35em] uppercase font-bold">About Our Agency</p>
              <div className="h-px w-8 bg-[#FF4A17]/40" />
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Who We Are
              </span>
            </h2>

            <p className="text-zinc-400 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              A high-performance digital growth agency engineered to scale ambitious brands through strategy, media, and creative excellence.
            </p>

            {/* Decorative accent line */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF4A17]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF4A17]" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF4A17]/50" />
            </div>
          </div>
        </FadeIn>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* 1. Agency Overview — 2 cols */}
          <FadeIn delay={0.05} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-white/[0.1] bg-zinc-950/80 backdrop-blur-sm p-6 md:p-9 group hover:border-[#FF4A17]/40 transition-all duration-500">
              <CardLabel icon="🚀" label="The Agency" />
              <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
                At <span className="font-bold text-white">MyAdSphere</span>, we bridge the gap between{" "}
                <span className="text-[#FF4A17] font-semibold">creative marketing</span> and{" "}
                <span className="text-white font-semibold">measurable ROI</span>.
              </p>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-5">
                We manage multi-channel digital strategies designed to acquire customers, scale brand visibility, and increase enterprise revenue. By unifying data analytics with high-converting creative execution, we turn digital marketing into a predictable growth engine.
              </p>
            </div>
          </FadeIn>

          {/* 2. Agency Metrics */}
          <FadeIn delay={0.1}>
            <div className="h-full rounded-2xl border border-white/[0.1] bg-zinc-950/80 backdrop-blur-sm p-6 md:p-9 group hover:border-[#FF4A17]/40 transition-all duration-500">
              <CardLabel icon="📊" label="Performance Snapshot" />
              <div className="space-y-6">
                {[
                  { val: "150+", label: "Successful Campaigns" },
                  { val: "5.2x", label: "Average Campaign ROAS" },
                  { val: "98%", label: "Client Retention Rate" },
                  { val: "$10M+", label: "Managed Ad Spend ROI" },
                ].map(({ val, label }) => (
                  <div key={label} className="flex items-baseline justify-between border-b border-white/[0.05] pb-4 last:border-0 last:pb-0">
                    <span className="text-zinc-400 text-sm font-medium">{label}</span>
                    <span className="text-white font-black text-2xl tabular-nums text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 3. Capabilities Matrix — full width */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <div className="rounded-2xl border border-white/[0.1] bg-zinc-950/80 backdrop-blur-sm p-6 md:p-9 group hover:border-[#FF4A17]/40 transition-all duration-500">
              <CardLabel icon="🛠️" label="Core Capabilities" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {capabilities.map((cat, catIdx) => (
                  <FadeIn key={cat.category} delay={0.18 + catIdx * 0.06}>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-base">{cat.icon}</span>
                        <p className="text-white text-sm font-bold tracking-wide">{cat.category}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs hover:bg-[#FF4A17]/10 hover:border-[#FF4A17]/40 hover:text-white transition-all duration-200 cursor-default"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 4. Core Values */}
          <FadeIn delay={0.2} className="lg:col-span-1">
            <div className="h-full rounded-2xl border border-white/[0.1] bg-zinc-950/80 backdrop-blur-sm p-6 md:p-9 group hover:border-[#FF4A17]/40 transition-all duration-500">
              <CardLabel icon="✨" label="Our Philosophy" />
              <div className="space-y-6">
                {values.map((v) => (
                  <div key={v.label} className="flex gap-4">
                    <span className="text-xl mt-0.5 shrink-0">{v.icon}</span>
                    <div>
                      <p className="text-white text-base font-bold">{v.label}</p>
                      <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 5. Growth Methodology Timeline — 2 cols */}
          <FadeIn delay={0.25} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-white/[0.1] bg-zinc-950/80 backdrop-blur-sm p-6 md:p-9 group hover:border-[#FF4A17]/40 transition-all duration-500">
              <CardLabel icon="🗓️" label="Our Growth Process" />
              <div className="space-y-7">
                {methodology.map((item, i) => (
                  <FadeIn key={item.title} delay={0.28 + i * 0.07}>
                    <div className="flex gap-5">
                      {/* Step badge */}
                      <div className="shrink-0 pt-0.5">
                        <span className="inline-block px-3 py-1 rounded-md bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[#FF4A17] text-[11px] font-mono font-bold tracking-wide whitespace-nowrap">
                          STEP {item.step}
                        </span>
                      </div>
                      <div className="border-l border-white/[0.08] pl-5">
                        <p className="text-white text-base font-bold leading-tight">{item.title}</p>
                        <p className="text-[#FF4A17] text-xs font-semibold mt-0.5">{item.sub}</p>
                        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
