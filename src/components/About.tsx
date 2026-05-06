'use client'

import React, { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

const techStack = [
  {
    category: "Frontend",
    icon: "🖥️",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT Auth"],
  },
  {
    category: "Database",
    icon: "🗄️",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & Tools",
    icon: "☁️",
    items: ["AWS", "Git", "Cloudinary", "Postman"],
  },
];

const timeline = [
  {
    year: "2024–Now",
    title: "Full Stack Developer (MERN)",
    sub: "Personal Projects & Team Builds",
    desc: "Building scalable full-stack applications using MongoDB, Express, React, and Node.js with real-world deployments, authentication, and API integrations.",
  },
  {
    year: "2023–Now",
    title: "B.Tech Computer Science",
    sub: "MVSR Engineering College",
    desc: "Focused on Data Structures, Web Development, Cloud, and system design through hands-on project building.",
  },
  {
    year: "2024–Now",
    title: "Hackathons & AI Innovation",
    sub: "Team Sigma Coders",
    desc: "4x Hackathon Winner and shortlisted Top 150/1200+ teams at T-Hub AI Hackathon. Building impactful AI-driven solutions like CareerPilot AI.",
  },
  {
    year: "2023–Now",
    title: "10+ Projects Deployed",
    sub: "MERN · APIs . NEXT.Js",
    desc: "Developed and deployed projects like Jarurat Care (AI NGO platform), CareerPilot AI, EventEasy, SecureDocs, and Agri Marketplace.",
  },
];
const values = [
  { icon: "⚡", label: "Performance First", desc: "Clean, scalable code that ships fast and stays maintainable." },
  { icon: "🎯", label: "Problem Solver", desc: "I break complex problems into elegant, simple solutions." },
  { icon: "🤝", label: "Team Player", desc: "Strong communicator — dependable in collaborative environments." },
  { icon: "📈", label: "Continuous Learner", desc: "Always exploring new tech, always shipping something new." },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CardLabel({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-7">
      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm shrink-0">
        {icon}
      </div>
      <span className="text-[11px] text-zinc-500 tracking-[0.22em] uppercase font-medium">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-black py-32 px-4 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <FadeIn className="text-center mb-24 relative">
          {/* Ghost outline background text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <span className="text-[80px] sm:text-[120px] md:text-[160px] font-black text-transparent tracking-tighter leading-none"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.04)' }}>
              ABOUT
            </span>
          </div>

          <div className="relative z-10 pt-8">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/20" />
              <p className="text-[11px] text-zinc-500 tracking-[0.35em] uppercase font-medium">About Me</p>
              <div className="h-px w-8 bg-white/20" />
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Who I Am
              </span>
            </h2>

            <p className="text-zinc-500 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              A builder, learner, and problem solver — passionate about creating things that make a difference.
            </p>

            {/* Decorative accent line */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
            </div>
          </div>
        </FadeIn>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* 1. Bio — 2 cols */}
          <FadeIn delay={0.05} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-white/[0.07] bg-zinc-950/70 backdrop-blur-sm p-6 md:p-9 group hover:border-white/[0.14] transition-all duration-500">
              <CardLabel icon="👨‍💻" label="The Person" />
              <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
                I&apos;m{" "}
                <span className="font-semibold text-white">Charan Donthu</span>, a passionate
                Full Stack Developer pursuing B.Tech in Computer Science at{" "}
                <span className="text-zinc-300">MVSR Engineering College</span>.
              </p>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-5">
                I build robust, scalable web applications with a focus on clean code, elegant UI, and innovative solutions. From eCommerce platforms to AI-powered tools, I love turning complex ideas into real products that people use.
              </p>
            </div>
          </FadeIn>

          {/* 2. Quick Stats */}
          <FadeIn delay={0.1}>
            <div className="h-full rounded-2xl border border-white/[0.07] bg-zinc-950/70 backdrop-blur-sm p-6 md:p-9 group hover:border-white/[0.14] transition-all duration-500">
              <CardLabel icon="📊" label="At a Glance" />
              <div className="space-y-6">
                {[
                  { val: "15+", label: "Projects Shipped" },
                  { val: "20+", label: "Technologies" },
                  { val: "6+", label: "Certifications" },
                  { val: "1+", label: "Years Experience" },
                ].map(({ val, label }) => (
                  <div key={label} className="flex items-baseline justify-between border-b border-white/[0.05] pb-4 last:border-0 last:pb-0">
                    <span className="text-zinc-400 text-base">{label}</span>
                    <span className="text-white font-bold text-3xl tabular-nums">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 3. Tech Stack — full width */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <div className="rounded-2xl border border-white/[0.07] bg-zinc-950/70 backdrop-blur-sm p-6 md:p-9 group hover:border-white/[0.14] transition-all duration-500">
              <CardLabel icon="🛠️" label="Technical Proficiency" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {techStack.map((cat, catIdx) => (
                  <FadeIn key={cat.category} delay={0.18 + catIdx * 0.06}>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-base">{cat.icon}</span>
                        <p className="text-zinc-400 text-sm font-medium tracking-wide">{cat.category}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-white transition-all duration-200 cursor-default"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 4. Core Values */}
          <FadeIn delay={0.2} className="lg:col-span-1">
            <div className="h-full rounded-2xl border border-white/[0.07] bg-zinc-950/70 backdrop-blur-sm p-6 md:p-9 group hover:border-white/[0.14] transition-all duration-500">
              <CardLabel icon="✨" label="Core Values" />
              <div className="space-y-6">
                {values.map((v) => (
                  <div key={v.label} className="flex gap-4">
                    <span className="text-xl mt-0.5 shrink-0">{v.icon}</span>
                    <div>
                      <p className="text-white text-base font-semibold">{v.label}</p>
                      <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 5. Timeline — 2 cols */}
          <FadeIn delay={0.25} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-white/[0.07] bg-zinc-950/70 backdrop-blur-sm p-6 md:p-9 group hover:border-white/[0.14] transition-all duration-500">
              <CardLabel icon="🗓️" label="Journey So Far" />
              <div className="space-y-7">
                {timeline.map((item, i) => (
                  <FadeIn key={item.title} delay={0.28 + i * 0.07}>
                    <div className="flex gap-5">
                      {/* Year badge */}
                      <div className="shrink-0 pt-0.5">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-500 text-[11px] font-mono tracking-wide whitespace-nowrap">
                          {item.year}
                        </span>
                      </div>
                      <div className="border-l border-white/[0.07] pl-5">
                        <p className="text-white text-base font-semibold leading-tight">{item.title}</p>
                        <p className="text-zinc-500 text-sm mt-0.5 font-medium">{item.sub}</p>
                        <p className="text-zinc-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
