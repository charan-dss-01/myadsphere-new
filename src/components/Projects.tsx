'use client';

import React from 'react';
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'motion/react';

// ── Project Data ──────────────────────────────────────────────────────────
const projectItems = [
  {
    title: "AgriConnect",
    value: "agriconnect",
    content: (
      <ProjectTabContent
        title="AgriConnect"
        category="MERN Marketplace"
        desc="A full-stack platform connecting farmers directly with consumers, enabling fair pricing, product listings, and transparent transactions without middlemen."
        src="/assets/agri-connect.png"
        href="https://agriconnect07.netlify.app/"
        tech={["React", "Node.js", "MongoDB", "Express", "Redux"]}
      />
    ),
  },
  {
    title: "EventEasy",
    value: "eventeasy",
    content: (
      <ProjectTabContent
        title="EventEasy"
        category="Event Management SaaS"
        desc="A scalable event management system with ticket booking, admin dashboards, and real-time event handling for seamless user experience."
        src="/assets/ee.png"
        href="https://eventease07.netlify.app/"
        tech={["Next.js", "MongoDB", "Cloudinary", "Express"]}
      />
    ),
  },
  {
    title: "CareerPilot AI",
    value: "careerpilot",
    content: (
      <ProjectTabContent
        title="CareerPilot AI"
        category="AI Career Platform"
        desc="An AI-powered career decision system that analyzes user skills and goals to generate personalized roadmaps, resources, and interview preparation strategies."
        src="/assets/CareerPilot.png"
        href="https://career-pilot-ai-nine.vercel.app/"
        tech={["Next.js", "Gemini AI", "APIs"]}
      />
    ),
  },
  {
    title: "SecureDocs",
    value: "securedocs",
    content: (
      <ProjectTabContent
        title="SecureDocs"
        category="Document Security Platform"
        desc="A secure document management system with encrypted storage, controlled access, and safe sharing features for sensitive files."
        src="/assets/securedocs.jpg"
        href="#"
        tech={["React", "Node.js", "MongoDB", "Cloudinary"]}
      />
    ),
  },
  {
    title: "SparshaKala",
    value: "sparshakala",
    content: (
      <ProjectTabContent
        title="SparshaKala"
        category="Cultural Platform"
        desc="A digital platform promoting art and culture by showcasing events, artists, and creative works with an engaging and responsive UI."
        src="/assets/sparshakala.png"
        href="https://sparshakala.netlify.app/"
        tech={["React", "Tailwind CSS"]}
      />
    ),
  }
];
// ── Sub-component for Tab Content ─────────────────────────────────────────
function ProjectTabContent({ title, category, desc, src, href, tech }: {
  title: string, category: string, desc: string, src: string, href: string, tech: string[]
}) {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-[40px] p-8 md:p-14 text-white bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-20 flex flex-col h-full">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
              <p className="text-[11px] text-zinc-400 font-bold tracking-[0.4em] uppercase">{category}</p>
            </div>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">{title}</h3>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {tech.map(t => (
              <span key={t} className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/10 text-[10px] font-bold text-zinc-300 uppercase tracking-widest backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="text-zinc-300 text-lg md:text-2xl max-w-2xl font-light leading-relaxed mb-10">
          {desc}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          {href !== "#" && (
            <Link
              href={href}
              target="_blank"
              className="w-full md:w-auto px-10 py-4 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3"
            >
              Launch App
              <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
            </Link>
          )}
          <div className="hidden md:flex gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-colors cursor-pointer">
              <i className="fa-brands fa-github text-lg" />
            </div>
          </div>
        </div>

        <div className="relative mt-auto w-full h-[320px] md:h-[580px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
          <div className="absolute inset-0 rounded-[32px] border border-white/5 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-24 md:py-40 px-4 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Dynamic Header Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-white/[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section Header (Premium Redesign) ── */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
              <p className="text-[11px] text-zinc-500 tracking-[0.5em] uppercase font-bold">Selected Work</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
            </div>

            <div className="relative group">
              <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none relative z-10">
                <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent group-hover:via-white transition-all duration-700">
                  Projects
                </span>
              </h2>
              {/* Ghost text backdrop */}
              <div className="absolute -inset-x-20 -inset-y-10 flex items-center justify-center opacity-10 blur-[2px] select-none pointer-events-none">
                <span className="text-[140px] md:text-[220px] font-black text-white/10 tracking-tighter uppercase">Work</span>
              </div>
            </div>

            <div className="w-24 h-1 bg-white/10 rounded-full mt-10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Aceternity Tabs Container ── */}
        <div className="h-[52rem] md:h-[72rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start">
          <Tabs
            tabs={projectItems}
            containerClassName="mb-10 md:mb-14 mx-auto p-2 bg-zinc-900/50 backdrop-blur-xl rounded-[24px] border border-white/5"
            activeTabClassName="bg-white shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            tabClassName="text-zinc-500 hover:text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest transition-all duration-300"
          />
        </div>

      </div>
    </section>
  );
}
