'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';

// ── Client Testimonials Data ──────────────────────────────────────────────
const clientReviews = [
  {
    rating: "5.0 ★",
    title: "+340% ROAS Increase",
    client: "Sarah Jenkins",
    role: "CMO, Lumina E-Commerce",
    desc: "MyAdSphere completely overhauled our Meta & Google ad campaigns. Our ROAS jumped from 1.6x to 5.2x while scaling budget by 300%. They are strategic powerhouses.",
    icon: "📈",
  },
  {
    rating: "5.0 ★",
    title: "12,000+ High-Intent Leads",
    client: "Marcus Vance",
    role: "VP Growth, CloudScale SaaS",
    desc: "Their funnel optimization and paid search campaigns quadrupled our sales demo volume. The transparency and weekly performance reporting are best-in-class.",
    icon: "⚡",
  },
  {
    rating: "5.0 ★",
    title: "$4.2M Sales Pipeline",
    client: "Elena Rostova",
    role: "Marketing Director, Horizon Real Estate",
    desc: "MyAdSphere generated high-intent buyer leads for our luxury development launches. Their lead validation framework saved us hundreds of wasted hours.",
    icon: "🏢",
  },
  {
    rating: "5.0 ★",
    title: "Category Brand Dominance",
    client: "David Chen",
    role: "Founder, Nova Nutrition D2C",
    desc: "The ad creative execution and influencer campaigns made our brand stand out in a saturated market. Conversion rates jumped 48% within 60 days.",
    icon: "🏆",
  },
  {
    rating: "5.0 ★",
    title: "#1 Organic Search Rankings",
    client: "Dr. Amanda Cole",
    role: "CEO, BioHealth Labs",
    desc: "Their technical SEO and content cluster strategy took our platform from page 4 to ranking #1 for key competitive healthcare terms.",
    icon: "🔍",
  }
];

// ── Main Component ────────────────────────────────────────────────────────
export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicating items for infinite effect
  const duplicatedReviews = [...clientReviews, ...clientReviews];

  return (
    <section id="journey" className="relative bg-black py-32 px-4 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-24 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
            <span className="text-[90px] md:text-[140px] font-black text-transparent tracking-tighter leading-none"
              style={{ WebkitTextStroke: '1px rgba(255,74,23,0.08)' }}>
              REVIEWS
            </span>
          </div>
          <div className="relative z-10 pt-10">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#FF4A17]/40" />
              <p className="text-[10px] text-[#FF4A17] tracking-[0.4em] uppercase font-bold">Client Impact</p>
              <div className="h-px w-8 bg-[#FF4A17]/40" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                What Brands Say
              </span>
            </h2>
          </div>
        </div>

        {/* ── Scrolling Timeline / Testimonials Container ── */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused] py-10">
            {duplicatedReviews.map((review, i) => (
              <div
                key={i}
                className="w-[320px] md:w-[400px] flex-shrink-0 group relative rounded-2xl border border-white/[0.12] bg-zinc-950/80 backdrop-blur-md p-8 hover:border-[#FF4A17]/50 hover:bg-zinc-900/90 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Rating & Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 rounded-md bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[11px] font-bold text-[#FF4A17] tracking-widest uppercase">
                      {review.rating}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF4A17]/20 to-transparent border border-[#FF4A17]/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {review.icon}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-white text-xl font-bold tracking-tight mb-1">
                      {review.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed font-normal mb-6">
                    &quot;{review.desc}&quot;
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-bold text-sm">{review.client}</p>
                  <p className="text-[#FF4A17] text-xs font-medium">{review.role}</p>
                </div>

                {/* Subtle shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 opacity-0 group-hover:opacity-5 group-hover:animate-[shine_1.5s_ease-in-out] pointer-events-none bg-gradient-to-r from-transparent via-[#FF4A17] to-transparent -skew-x-12" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="mt-16 text-center">
          <div className="flex flex-col items-center">
            <div className="h-12 w-px bg-gradient-to-b from-[#FF4A17]/50 to-transparent mb-6" />
            <h3 className="text-xl font-bold text-zinc-300 tracking-tight italic">
              &quot;Engineered for maximum ROI and predictable growth.&quot;
            </h3>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 16px)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
}
