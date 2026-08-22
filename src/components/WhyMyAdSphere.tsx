'use client';

import React from 'react';
import { motion } from 'motion/react';

const pillars = [
  {
    number: "01",
    title: "STRATEGY FIRST",
    description: "Every campaign begins with business objectives — not channels, not trends, not templates."
  },
  {
    number: "02",
    title: "CREATIVE THAT GETS ATTENTION",
    description: "Ideas designed to stand out in a feed that is actively trying to scroll past you."
  },
  {
    number: "03",
    title: "DATA BEHIND EVERY DECISION",
    description: "Performance measured continuously, with the discipline to kill what isn't working."
  },
  {
    number: "04",
    title: "GROWTH THAT COMPOUNDS",
    description: "We build systems and assets that keep returning, instead of temporary spikes."
  }
];

export default function WhyMyAdSphere() {
  return (
    <section className="relative bg-black py-28 px-6 md:px-12 border-t border-white/10 overflow-hidden">
      
      {/* Background Atmosphere & Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FF4A17]/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[#FF4A17] font-sans text-xs font-bold tracking-widest">04</span>
          <div className="h-px w-6 bg-zinc-800" />
          <span className="text-zinc-400 font-sans uppercase text-[11px] font-semibold tracking-[0.35em]">
            WHY MYADSPHERE
          </span>
        </div>

        {/* Large Two-Tone Headline (Exact Reference Copy) */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] uppercase mb-16 max-w-4xl">
          <span className="text-white block">WE DON'T JUST RUN</span>
          <span className="text-white block">CAMPAIGNS.</span>
          <span className="bg-gradient-to-r from-[#FF4A17] via-orange-400 to-amber-500 bg-clip-text text-transparent block mt-1">WE BUILD GROWTH</span>
          <span className="bg-gradient-to-r from-[#FF4A17] via-orange-400 to-amber-500 bg-clip-text text-transparent block">SYSTEMS.</span>
        </h2>

        {/* 4 Pillars List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-white/[0.015] transition-colors px-2 md:px-4"
            >
              {/* Number + Pillar Title */}
              <div className="md:col-span-6 flex items-center gap-6">
                <span className="text-[#FF4A17] font-sans text-xs font-bold tracking-widest shrink-0">
                  {pillar.number}
                </span>
                <h3 className="text-white font-black text-xl md:text-2xl tracking-wider uppercase group-hover:text-[#FF4A17] transition-colors">
                  {pillar.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
