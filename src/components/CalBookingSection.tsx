'use client';

import React from 'react';

export default function CalBookingSection() {
  return (
    <section id="book-call" className="relative bg-black py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/10 select-none">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Minimal Header */}
        <div className="text-center mb-12 relative">
          <p className="text-xs text-[#FF4A17] font-sans tracking-[0.3em] uppercase font-bold mb-3">
            1-ON-1 SESSION
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3">
            <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Schedule a{" "}
            </span>
            <span className="bg-gradient-to-r from-[#FF4A17] via-[#FF6B3D] to-[#FFA07A] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,74,23,0.35)]">
              Strategy Call
            </span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm max-w-md mx-auto font-light leading-relaxed">
            Pick a time that works best for you to discuss your growth objectives.
          </p>
        </div>

        {/* Minimal Dark Cal.com Embed */}
        <div className="rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl">
          <iframe
            src="https://cal.com/myadsphere?embed=true&theme=dark"
            width="100%"
            height="500"
            frameBorder="0"
            title="Book a Strategy Call with MyAdSphere"
            className="w-full h-[480px] md:h-[520px] bg-zinc-950"
          />
        </div>

      </div>
    </section>
  );
}
