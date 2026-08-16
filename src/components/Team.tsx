'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "Alex Thorne",
    role: "Founder & Growth Director",
    specialty: "Performance Marketing & Funnel Strategy",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    bio: "Ex-Meta strategist with 8+ years scaling D2C and SaaS brands past 8-figure revenue milestones.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sophia Chen",
    role: "Head of Paid Media",
    specialty: "Google Ads & Programmatic Media",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    bio: "Data-driven media buyer who has managed over $15M in multi-channel paid search and display campaigns.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Marcus Miller",
    role: "Creative Director",
    specialty: "Video Ad Strategy & Brand Identity",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Award-winning designer and ad creative strategist producing high-converting short-form video campaigns.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Elena Rostova",
    role: "Lead SEO Strategist",
    specialty: "Technical SEO & Authority Building",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "SEO architect specializing in organic keyword domination, technical site architecture, and content clusters.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "David Vance",
    role: "Conversion Rate Lead",
    specialty: "CRO & Landing Page Optimization",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Behavioral analytics expert with 1,000+ A/B test iterations increasing page conversion velocity by up to 240%.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sarah Jenkins",
    role: "GA4 & Data Architect",
    specialty: "Attribution Modeling & Custom Dashboards",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop",
    bio: "Data infrastructure engineer building unified cross-channel tracking and revenue attribution models.",
    linkedin: "https://linkedin.com"
  }
];

export default function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="relative bg-black py-28 px-6 md:px-12 overflow-hidden border-t border-white/10 select-none">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF4A17]/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header & Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-widest">07</span>
              <div className="h-px w-6 bg-zinc-800" />
              <span className="text-zinc-400 font-mono uppercase text-[11px] font-semibold tracking-[0.35em]">
                LEADERSHIP & GROWTH MINDS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-white uppercase">
              Meet The <span className="text-[#FF4A17]">Strategists</span>
            </h2>
          </div>

          {/* Left / Right Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full border border-white/15 bg-zinc-950/80 hover:bg-[#FF4A17] hover:border-[#FF4A17] text-white flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95"
              aria-label="Previous Team Member"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full border border-white/15 bg-zinc-950/80 hover:bg-[#FF4A17] hover:border-[#FF4A17] text-white flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95"
              aria-label="Next Team Member"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="shrink-0 w-[290px] sm:w-[320px] snap-start rounded-2xl border border-white/10 bg-zinc-950/90 overflow-hidden group hover:border-[#FF4A17]/60 hover:bg-zinc-900/90 transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Photo Header */}
              <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                {/* LinkedIn Badge */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#FF4A17] hover:border-[#FF4A17] transition-all duration-300"
                >
                  <Linkedin size={16} />
                </a>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[#FF4A17] text-[10px] font-mono font-bold uppercase tracking-widest mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-white text-xl font-bold tracking-tight mb-2 group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>Specialty</span>
                  <span className="text-zinc-300 font-semibold">{member.specialty.split('&')[0]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
