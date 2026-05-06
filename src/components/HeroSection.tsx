'use client'
import Image from 'next/image'
import { Spotlight } from "./ui/Spotlight";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const roles = ["Full Stack Developer", "MERN Stack Engineer", "AI Enthusiast", "Problem Solver"];

const stats = [
  { label: "Projects Built", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "Certifications", value: "6+" },
];

const techTags = ["React", "Node.js", "MongoDB", "Next.js", "Java", "AWS"];

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    const resumeUrl = '/assets/Donthu_Charan_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Charan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 py-12 bg-black">
      {/* Single spotlight — left side only */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 pt-16">

        {/* ── LEFT: TEXT CONTENT ── */}
        <motion.div
          className="space-y-7 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-zinc-300 tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Available for Opportunities
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-br from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Charan
            </span>
          </motion.h1>

          {/* Animated role */}
          <motion.div variants={fadeUp} className="h-9 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl text-zinc-400 font-medium tracking-wide"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Passionate engineer specializing in modern web technologies. Pursuing B.Tech in Computer Science at MVSR Engineering College — building impactful digital experiences through clean code and innovative solutions.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start gap-8 py-2">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-zinc-500 mt-0.5 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div variants={fadeUp} className="w-16 h-px bg-white/10 mx-auto lg:mx-0" />

          {/* Action buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-black px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/20"
            >
              <i className="fa-solid fa-download text-xs" />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 border border-zinc-800 text-white hover:bg-white/5 hover:border-zinc-600 px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
            >
              View My Work
              <i className="fa-solid fa-arrow-right text-xs" />
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start gap-5 pt-2">
            {[
              { icon: 'instagram', url: 'https://www.instagram.com/dss_charan_07/' },
              { icon: 'linkedin', url: 'https://www.linkedin.com/in/charandonthu' },
              { icon: 'github', url: 'https://github.com/charan-dss-01/' },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 hover:bg-white/5 transition-all duration-300"
              >
                <i className={`fa-brands fa-${social.icon} text-base`} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: IMAGE ── */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {/* Self-contained image hub — all effects are relative to this wrapper */}
          <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center [--radius:140px] md:[--radius:210px]">

            {/* Ambient glow behind card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[380px] rounded-3xl bg-white/[0.05] blur-3xl" />
            </div>

            {/* Orbit ring 1 — CSS animation, GPU compositor thread */}
            <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-white/[0.07] pointer-events-none animate-orbit-cw" />
            {/* Orbit ring 2 */}
            <div className="absolute w-[330px] h-[330px] md:w-[455px] md:h-[455px] rounded-full border border-dashed border-white/[0.04] pointer-events-none animate-orbit-ccw" />

            {/* Floating tech tags — CSS float animation, no JS jank */}
            {techTags.map((tag, i) => {
              const angle = (i / techTags.length) * 2 * Math.PI - Math.PI / 2;
              // Use a CSS variable for responsiveness to avoid hydration mismatches
              const x = `calc(cos(${angle}rad) * var(--radius, 210px))`;
              const y = `calc(sin(${angle}rad) * var(--radius, 210px))`;
              const delayClass = i > 0 ? `animate-float-delay-${i}` : '';
              return (
                <motion.div
                  key={tag}
                  className={`absolute z-20 px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 text-[10px] font-medium tracking-wide shadow-md whitespace-nowrap animate-float ${delayClass}`}
                  style={{
                    left: `calc(50% + ${x} - 24px)`,
                    top: `calc(50% + ${y} - 11px)`,
                  }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {tag}
                </motion.div>
              );
            })}

            {/* Corner accent brackets around the card */}
            <div className="absolute z-30 pointer-events-none w-[300px] h-[390px]">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-white/25 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-white/25 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-white/25 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-white/25 rounded-br-lg" />
            </div>

            {/* Main portrait card */}
            <div className="relative w-[300px] h-[390px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 z-10">
              <Image
                src="/assets/charan3.jpg"
                alt="Charan Donthu"
                fill
                className="object-cover object-top"
                sizes="300px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <p className="text-white/80 font-semibold text-xs tracking-[0.2em] uppercase">Full Stack Developer</p>
                </div>
                <p className="text-zinc-500 text-[10px] tracking-widest uppercase">MVSR Engineering College</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection
