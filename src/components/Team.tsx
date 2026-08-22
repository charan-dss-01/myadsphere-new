'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Mudragada Anudeep",
    role: "Founder & CEO",
    specialty: "Business & Growth Strategy",
    image: "/assets/anudeep.jpeg"
  },
  {
    name: "Greeshma Gaddam",
    role: "Managing Director",
    specialty: "Strategy & Operations",
    image: "/assets/greeshma.jpeg"
  },
  {
    name: "Sushanth Maharana",
    role: "Creative Head",
    specialty: "Creative Strategy & Brand Direction",
    image: "/assets/sushanth.jpeg"
  },
  {
    name: "Donthu Sri Simha Charan",
    role: "Full Stack Developer",
    specialty: "Web Development & Technology",
    image: "/assets/charan.jpeg"
  },
  {
    name: "Akhil",
    role: "Chief Technology Officer",
    specialty: "Technology & Digital Innovation",
    image: "/assets/akhil.jpeg"
  },
  {
    name: "Sathwik",
    role: "UI/UX Designer",
    specialty: "UI/UX Design & Product Experience",
    image: "/assets/satwik.jpeg"
  },
  {
    name: "Dinesh",
    role: "Senior Graphic Designer",
    specialty: "Graphic Design & Visual Communication",
    image: "/assets/dinesh.jpeg"
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
              <span className="text-[#FF4A17] font-sans text-xs font-bold tracking-widest">07</span>
              <div className="h-px w-6 bg-zinc-800" />
              <span className="text-zinc-400 font-sans uppercase text-[11px] font-semibold tracking-[0.35em]">
                LEADERSHIP & GROWTH MINDS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                MEET THE MINDS BEHIND{" "}
              </span>
              <span className="bg-gradient-to-r from-[#FF4A17] via-[#FF6B3D] to-[#FF8F6B] bg-clip-text text-transparent">
                MYADSPHERE
              </span>
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
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[#FF4A17] text-[10px] font-sans font-bold uppercase tracking-widest mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-white text-xl font-bold tracking-tight mb-2 group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-sans">
                  <span>Specialty</span>
                  <span className="text-zinc-300 font-semibold truncate ml-2 max-w-[170px]" title={member.specialty}>
                    {member.specialty}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
