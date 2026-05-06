'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';

// ── Journey Data ──────────────────────────────────────────────────────────
const journeySteps = [
  {
    year: "2021",
    title: "Hello World",
    subtitle: "C & Logic Foundations",
    desc: "Started with C programming. Learned the magic of logic, data structures, and memory management. The moment I realized code is a superpower.",
    icon: "💻",
  },
  {
    year: "2022",
    title: "The OOP Deep Dive",
    subtitle: "Java & Software Design",
    desc: "Explored Object-Oriented Programming with Java. Classes, inheritance, and patterns—learning to build structured, professional software.",
    icon: "☕",
  },
  {
    year: "2023-Now",
    title: "The MERN Stack",
    subtitle: "Full Stack Revolution",
    desc: "Built my first full-stack apps. React for the UI, Node/Express for the brain, and MongoDB for the memory. Deployed 10+ projects.",
    icon: "🌐",
  },
  {
    year: "2026",
    title: "Hackathon Winner",
    subtitle: "Team Sigma Coders",
    desc: "4x Hackathon Winner.",
    icon: "🏆",
  },
  {
    year: "2024–Now",
    title: "Building the Future",
    subtitle: "MERN & AI Innovation",
    desc: "Focused on Next.js, AI tools, and high-performance UX. Always learning, always building, always shipping.",
    icon: "🚀",
  }
];

// ── Main Component ────────────────────────────────────────────────────────
export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicating items for infinite effect
  const duplicatedSteps = [...journeySteps, ...journeySteps];

  return (
    <section id="journey" className="relative bg-black py-32 px-4 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-24 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
            <span className="text-[100px] md:text-[140px] font-black text-transparent tracking-tighter leading-none"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.06)' }}>
              JOURNEY
            </span>
          </div>
          <div className="relative z-10 pt-10">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/20" />
              <p className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase font-bold">The Evolution</p>
              <div className="h-px w-8 bg-white/20" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                My Tech Path
              </span>
            </h2>
          </div>
        </div>

        {/* ── Scrolling Timeline Container ── */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused] py-10">
            {duplicatedSteps.map((step, i) => (
              <div
                key={i}
                className="w-[320px] md:w-[400px] flex-shrink-0 group relative rounded-2xl border border-white/[0.15] bg-zinc-900/60 backdrop-blur-md p-8 hover:border-white/[0.3] hover:bg-zinc-800/60 transition-all duration-500 shadow-xl"
              >
                {/* Year Badge */}
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-md bg-white/[0.06] border border-white/[0.1] text-[10px] font-mono font-bold text-zinc-300 tracking-widest uppercase">
                    {step.year}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/[0.1] to-transparent border border-white/[0.1] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-xs font-bold tracking-wider uppercase">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                  {step.desc}
                </p>

                {/* Subtle shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 opacity-0 group-hover:opacity-5 group-hover:animate-[shine_1.5s_ease-in-out] pointer-events-none bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="mt-20 text-center">
          <div className="flex flex-col items-center">
            <div className="h-12 w-px bg-gradient-to-b from-white/30 to-transparent mb-6" />
            <h3 className="text-xl font-bold text-zinc-400 tracking-tight italic">
              &quot;Always learning, always building.&quot;
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
