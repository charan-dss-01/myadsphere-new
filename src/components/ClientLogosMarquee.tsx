'use client';

import React from 'react';
import { motion } from 'motion/react';

// 20 Unique Brand Partner Logos from /public/logos/ (Zero Duplicates)
const clientLogosRow1 = [
  { id: 'airtic', name: 'Airtic Travel Intelligence', src: '/logos/airtic.png' },
  { id: 'amsu', name: 'AMSU', src: '/logos/amsu.png' },
  { id: 'crime-mirror', name: 'Crime Mirror', src: '/logos/crime-mirror1.png' },
  { id: 'etv-win', name: 'ETV Win', src: '/logos/etv-win.png' },
  { id: 'ever-after', name: 'EverAfter By Shashank', src: '/logos/ever-after.png' },
  { id: 'flygrad', name: 'FlyGrad Overseas Education', src: '/logos/flygrad.png' },
  { id: 'global-travel-tourism', name: 'Global Travel N Tourism', src: '/logos/global-travel-tourism.png' },
  { id: 'gulte', name: 'Gulte.com', src: '/logos/gulte.png' },
  { id: 'hotel-trilok', name: 'Hotel Trilok', src: '/logos/hotel-trilok.png' },
  { id: 'h', name: 'Hyrudayam', src: '/logos/hrudhayam.png' },
  { id: 'bombey-irani1', name: 'bombey-irani', src: '/logos/bombey-irani1.png' },
];

const clientLogosRow2 = [
  { id: 'login-automation', name: 'Login Home Automation', src: '/logos/login-automation.png' },
  { id: 'moderne-accounting', name: 'Moderne Accounting & Co', src: '/logos/moderne-accounting.png' },
  { id: 'niam', name: 'NIAM Multi Designer Store', src: '/logos/niam.png' },
  { id: 'rdx-forma', name: 'RDX Forma', src: '/logos/rdx-forma.png' },
  { id: 'romeo-juliet-salon', name: 'Romeo & Juliet Salon', src: '/logos/romeo-juliet-salon.png' },
  { id: 'smartcase', name: 'Smartcase', src: '/logos/smartcase.png' },
  { id: 'transcriptskart', name: 'Transcriptskart', src: '/logos/transcriptskart.png' },
  { id: 'trujet', name: 'TruJet Airlines', src: '/logos/trujet.png' },
  { id: 'vara-mahalakshmi-silks', name: 'Vara Mahalakshmi Silks', src: '/logos/vara-mahalakshmi-silks.png' },
  { id: 'vvc-group', name: 'VVC Group', src: '/logos/vvc-group.png' },
  { id: 'v', name: 'haaraai', src: '/logos/haaraai.png' },
  { id: 'bvss', name: 'bvss', src: '/logos/bvss.png' },
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
        <p className="text-xs md:text-sm font-sans text-zinc-400 tracking-[0.25em] uppercase font-light">
          Trusted by 95+ Clients Globally
        </p>
      </div>

      {/* Marquee Row 1 (Left to Right) */}
      <div className="flex overflow-hidden py-4 relative z-10">
        <motion.div
          className="flex shrink-0 gap-12 md:gap-20 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {[...clientLogosRow1, ...clientLogosRow1].map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="shrink-0 cursor-default"
            >
              <img 
                src={client.src} 
                alt={client.name} 
                className="h-10 md:h-12 w-auto max-w-[160px] md:max-w-[200px] object-contain brightness-0 invert opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Right to Left) */}
      <div className="flex overflow-hidden py-4 mt-4 relative z-10">
        <motion.div
          className="flex shrink-0 gap-12 md:gap-20 items-center"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {[...clientLogosRow2, ...clientLogosRow2].map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="shrink-0 cursor-default"
            >
              <img 
                src={client.src} 
                alt={client.name} 
                className="h-10 md:h-12 w-auto max-w-[160px] md:max-w-[200px] object-contain brightness-0 invert opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
