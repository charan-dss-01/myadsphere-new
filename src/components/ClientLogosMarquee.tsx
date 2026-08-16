'use client';

import React from 'react';
import { motion } from 'motion/react';

// Monochrome SVG & Typographic Client Logos from Image 2
const clientLogosRow1 = [
  {
    id: 'nirsoul',
    name: 'nirsoul',
    svg: (
      <div className="flex items-center gap-2 font-sans">
        <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">nir</span>
        <svg className="w-5 h-5 text-white inline-block" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
        </svg>
        <span className="text-xl md:text-2xl font-light text-white tracking-tight">oul</span>
      </div>
    )
  },
  {
    id: 'svision-hospital',
    name: 'SVISION HOSPITAL',
    svg: (
      <div className="flex items-center gap-2.5">
        <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-sm md:text-base font-black tracking-widest text-white leading-none">SVISION.HOSPITAL</span>
          <span className="text-[8px] font-mono tracking-[0.25em] text-zinc-400 uppercase mt-0.5">EXPECT EXCELLENCE</span>
        </div>
      </div>
    )
  },
  {
    id: 'mangatrai',
    name: 'MANGATRAI',
    svg: (
      <div className="flex items-center gap-2.5">
        <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-sm md:text-base font-black tracking-widest text-white leading-none">MANGATRAI</span>
          <span className="text-[7px] font-mono tracking-[0.2em] text-zinc-400 uppercase mt-0.5">THE HYDERABAD JEWELLER SINCE 1905</span>
        </div>
      </div>
    )
  },
  {
    id: 'hydhub',
    name: 'HYDHUB',
    svg: (
      <div className="flex items-center">
        <span className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase font-mono">HYDHUB</span>
      </div>
    )
  },
  {
    id: 'dizitec-ai',
    name: 'dizitec AI',
    svg: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 border-2 border-white rounded-lg flex items-center justify-center font-black text-xs text-white">D</div>
        <span className="text-lg md:text-xl font-bold tracking-tight text-white">dizitec <span className="font-light text-zinc-300">AI</span></span>
      </div>
    )
  },
  {
    id: 'cosmic-line',
    name: 'COSMIC LINE',
    svg: (
      <div className="flex flex-col items-center">
        <svg className="w-16 h-3 text-white" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0 10 Q 50 0 100 10" />
        </svg>
        <span className="text-sm md:text-base font-light tracking-[0.2em] text-white uppercase">COSMIC <span className="font-bold">LINE</span></span>
      </div>
    )
  },
  {
    id: 'sania-mirza',
    name: 'SANIA MIRZA ACADEMY',
    svg: (
      <div className="flex flex-col text-left">
        <span className="text-sm md:text-base font-bold tracking-widest text-white uppercase">SANIA MIRZA</span>
        <span className="text-[8px] font-mono tracking-[0.3em] text-zinc-400 uppercase">TENNIS ACADEMY</span>
      </div>
    )
  }
];

const clientLogosRow2 = [
  {
    id: 'vortex',
    name: 'VORTEX CONSULTANTS',
    svg: (
      <div className="flex items-center gap-2.5">
        <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-sm md:text-base font-black tracking-widest text-white uppercase leading-none">VORTEX</span>
          <span className="text-[7px] font-mono tracking-[0.2em] text-zinc-400 uppercase mt-0.5">EDUCATIONAL CONSULTANTS</span>
        </div>
      </div>
    )
  },
  {
    id: 'lohre-farms',
    name: 'LOHRE FARMS',
    svg: (
      <div className="flex items-center gap-2.5">
        <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M6 12h12" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-sm md:text-base font-bold tracking-widest text-white uppercase leading-none">LOHRE FARMS</span>
          <span className="text-[7px] font-mono tracking-[0.25em] text-zinc-400 uppercase mt-0.5">ORGANIC & FRESH</span>
        </div>
      </div>
    )
  },
  {
    id: 'green-fleck',
    name: 'GREEN FLECK',
    svg: (
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 border border-white flex flex-col justify-between p-0.5 shrink-0">
          <div className="h-1 bg-white w-full" />
          <div className="h-1 bg-white w-2/3" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-sm md:text-base font-bold tracking-widest text-white uppercase leading-none">GREEN FLECK</span>
          <span className="text-[7px] font-mono tracking-[0.2em] text-zinc-400 uppercase mt-0.5">CONSTRUCTIONS LLP</span>
        </div>
      </div>
    )
  },
  {
    id: 'sunheri',
    name: 'SUNHERI BEAUTY',
    svg: (
      <div className="flex flex-col text-left">
        <span className="text-base md:text-lg font-serif tracking-[0.25em] text-white uppercase leading-none">SUNHERI</span>
        <span className="text-[7px] font-mono tracking-[0.3em] text-zinc-400 uppercase mt-1">BEAUTY BY INDIA</span>
      </div>
    )
  },
  {
    id: 'diaitasure',
    name: 'DIAITASURE',
    svg: (
      <div className="flex items-center gap-2">
        <div className="flex flex-col text-left">
          <span className="text-sm md:text-base font-bold tracking-widest text-white uppercase leading-none">DIAITASURE</span>
          <span className="text-[7px] font-mono tracking-[0.18em] text-zinc-400 mt-0.5">The Prescribed Way of Living</span>
        </div>
      </div>
    )
  },
  {
    id: 'rams-group',
    name: 'RAMS GROUP',
    svg: (
      <div className="flex items-center gap-2.5">
        <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M5 21V10l7-5 7 5v11" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-sm md:text-base font-black tracking-wider text-white uppercase leading-none">RAM'S GROUP</span>
          <span className="text-[6px] font-mono tracking-[0.15em] text-zinc-400 uppercase mt-0.5">ARCHITECTURE · CONSTRUCTION · REAL ESTATE</span>
        </div>
      </div>
    )
  },
  {
    id: 'bazzinga',
    name: 'BAZZINGA',
    svg: (
      <div className="flex items-center">
        <span className="text-xl md:text-2xl font-black tracking-widest text-white uppercase font-mono">BAZZINGA</span>
      </div>
    )
  }
];

export default function ClientLogosMarquee() {
  return (
    <section className="relative bg-black py-16 overflow-hidden border-y border-white/10 select-none">
      
      {/* Background Subtle Grid & Fade Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-28 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <p className="text-xs md:text-sm font-mono text-zinc-400 tracking-[0.25em] uppercase font-light">
          Trusted by 95+ Clients Globally
        </p>
      </div>

      {/* Marquee Row 1 (Left to Right) */}
      <div className="flex overflow-hidden py-4 relative z-10">
        <motion.div
          className="flex shrink-0 gap-12 md:gap-20 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {[...clientLogosRow1, ...clientLogosRow1].map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 shrink-0 filter grayscale cursor-default"
            >
              {client.svg}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Right to Left) */}
      <div className="flex overflow-hidden py-4 mt-4 relative z-10">
        <motion.div
          className="flex shrink-0 gap-12 md:gap-20 items-center"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        >
          {[...clientLogosRow2, ...clientLogosRow2].map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 shrink-0 filter grayscale cursor-default"
            >
              {client.svg}
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
