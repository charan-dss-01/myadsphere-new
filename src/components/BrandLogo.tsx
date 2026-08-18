'use client';

import React from 'react';

interface BrandLogoProps {
  className?: string;
  height?: number | string;
}

export default function BrandLogo({ className = "h-9 w-auto", height }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`} style={height ? { height } : undefined}>
      {/* ── RED/ORANGE EMBLEM ── */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0 drop-shadow-[0_0_12px_rgba(255,74,23,0.4)]"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4A17" />
            <stop offset="50%" stopColor="#FF6B38" />
            <stop offset="100%" stopColor="#E03E0E" />
          </linearGradient>
          <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Sphere Base / Outer Ring Slices */}
        <path
          d="M 20 2 C 10.059 2 2 10.059 2 20 C 2 29.941 10.059 38 20 38 C 29.941 38 38 29.941 38 20 C 38 10.059 29.941 2 20 2 Z"
          fill="url(#logoGradient)"
        />

        {/* Dynamic Sliced Arrow / Sphere Cutout */}
        <path
          d="M 12 26 L 28 12 L 20 28 L 16 20 Z"
          fill="#FFFFFF"
        />

        {/* Glossy Overlay Curve */}
        <path
          d="M 6 16 C 10 8 20 6 30 10 C 24 12 14 16 6 16 Z"
          fill="url(#shineGradient)"
          opacity="0.5"
        />
      </svg>

      {/* ── TYPOGRAPHY ── */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline font-black tracking-tight uppercase text-white font-[family-name:var(--font-poppins)] text-lg md:text-xl">
          <span className="text-[#FF4A17]">my</span>
          <span>adsphere</span>
        </div>
        <span className="text-[8px] md:text-[9px] font-mono tracking-[0.25em] text-zinc-400 font-bold uppercase pl-0.5 mt-0.5">
          Think Beyond
        </span>
      </div>
    </div>
  );
}
