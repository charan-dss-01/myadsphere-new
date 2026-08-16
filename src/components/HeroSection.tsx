'use client'

import { Spotlight } from "./ui/Spotlight";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

// ── Marketing Service Tags ────────────────────────────────────────────────
const techs = [
  { name: "Performance Marketing", size: "lg" },
  { name: "Google Ads", size: "lg" },
  { name: "Meta Ads", size: "lg" },
  { name: "SEO Scaling", size: "md" },
  { name: "Social Media Strategy", size: "md" },
  { name: "Funnel Conversion (CRO)", size: "md" },
  { name: "Content Marketing", size: "md" },
  { name: "Email & Automation", size: "md" },
  { name: "Analytics & GA4", size: "md" },
  { name: "TikTok Ads", size: "sm" },
  { name: "LinkedIn B2B Ads", size: "sm" },
  { name: "Brand Identity", size: "sm" },
  { name: "Video Ad Production", size: "sm" },
  { name: "Copywriting", size: "sm" },
  { name: "Retargeting Funnels", size: "sm" },
  { name: "Lead Generation", size: "sm" },
  { name: "Influencer Strategy", size: "sm" },
  { name: "Shopify Scaling", size: "sm" },
  { name: "PPC Campaigns", size: "sm" },
  { name: "HubSpot CRM", size: "sm" },
  { name: "Market Intelligence", size: "sm" },
];

const sizeClass = {
  lg: "text-sm font-bold px-4 py-2 border-[#FF4A17]/40 text-white bg-[#FF4A17]/10",
  md: "text-xs font-semibold px-3.5 py-1.5 border-white/20 text-zinc-100",
  sm: "text-[11px] font-medium px-3 py-1 border-white/10 text-zinc-400",
} as const;

// ── Fibonacci sphere — unit positions ────────────────────────────────────
const BASE_POS = techs.map((_, i) => {
  const phi = Math.acos(
    1 - (2 * (i + 0.5)) / techs.length
  );

  const theta =
    Math.PI * (1 + Math.sqrt(5)) * i;

  return {
    x: Math.sin(phi) * Math.sin(theta),
    y: Math.cos(phi),
    z: Math.sin(phi) * Math.cos(theta),
  };
});

const RADIUS = 175;
const PERSPECTIVE = 850;

// ── 3D Tag Sphere ─────────────────────────────────────────────────────────
function TagSphere() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let rotY = 0;
    let mouseRotY = 0;
    let mouseRotX = 0;
    let targetY = 0;
    let targetX = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;

      const r = wrapperRef.current.getBoundingClientRect();

      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;

      targetY =
        ((e.clientX - cx) / (r.width / 2)) * 0.65;

      targetX =
        -((e.clientY - cy) / (r.height / 2)) * 0.4;
    };

    window.addEventListener("mousemove", onMouseMove);

    const tick = () => {
      // Continuous globe rotation
      rotY += 0.0028;

      // Smooth mouse interaction
      mouseRotY +=
        (targetY - mouseRotY) * 0.035;

      mouseRotX +=
        (targetX - mouseRotX) * 0.035;

      const ry = rotY + mouseRotY;

      const rx =
        mouseRotX +
        Math.sin(rotY * 0.45) * 0.15;

      const cosRX = Math.cos(rx);
      const sinRX = Math.sin(rx);

      const cosRY = Math.cos(ry);
      const sinRY = Math.sin(ry);

      BASE_POS.forEach(({ x, y, z }, i) => {
        // 3D Y-axis rotation
        const x1 =
          x * cosRY +
          z * sinRY;

        // 3D X-axis rotation
        const y1 =
          x * sinRX * sinRY +
          y * cosRX -
          z * sinRX * cosRY;

        // Depth calculation
        const z1 =
          -x * cosRX * sinRY +
          y * sinRX +
          z * cosRX * cosRY;

        // Perspective projection
        const scale =
          PERSPECTIVE /
          (PERSPECTIVE - z1 * RADIUS);

        const sx =
          x1 * RADIUS * scale;

        const sy =
          -y1 * RADIUS * scale;

        // Front/back depth
        const depth =
          (z1 + 1) / 2;

        const opacity =
          (0.12 + 0.88 * depth).toFixed(2);

        const tagScale =
          (0.65 + 0.55 * depth).toFixed(3);

        const el =
          tagRefs.current[i];

        if (el) {
          el.style.transform =
            `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px) scale(${tagScale})`;

          el.style.opacity = opacity;

          el.style.zIndex =
            String(Math.round(depth * 100));

          el.style.pointerEvents =
            depth > 0.55
              ? "auto"
              : "none";
        }
      });

      rafId =
        requestAnimationFrame(tick);
    };

    rafId =
      requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);

      window.removeEventListener(
        "mousemove",
        onMouseMove
      );
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto select-none cursor-crosshair"
      style={{
        width: 480,
        height: 440,
        maxWidth: "100%",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[240px] h-[240px] rounded-full bg-[#FF4A17]/[0.06] blur-[80px]" />
      </div>

      {/* Outer ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[360px] h-[360px] rounded-full border border-[#FF4A17]/10" />
      </div>

      {/* 3D Tags */}
      <div className="absolute inset-0 flex items-center justify-center">
        {techs.map((tech, i) => (
          <div
            key={tech.name}
            ref={(el) => {
              tagRefs.current[i] = el;
            }}
            className={`
              absolute
              whitespace-nowrap
              rounded-full
              bg-zinc-950/90
              border
              border-white/10
              backdrop-blur-sm
              shadow-lg
              shadow-black/50
              hover:border-[#FF4A17]/50
              hover:bg-zinc-900
              hover:text-[#FF4A17]
              transition-all
              duration-300
              ease-out
              cursor-pointer
              ${sizeClass[tech.size as keyof typeof sizeClass]}
            `}
          >
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Hero Section ──────────────────────────────────────────────────────────
function HeroSection() {
  const [roleIndex, setRoleIndex] =
    useState(0);

  useEffect(() => {
    const interval =
      setInterval(() => {
        setRoleIndex(
          (prev) =>
            (prev + 1) %
            roles.length
        );
      }, 2800);

    return () =>
      clearInterval(interval);
  }, []);

  const scrollToSection = (
    sectionId: string
  ) => {
    const element =
      document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 28,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [
          0.16,
          1,
          0.3,
          1,
        ],
      },
    },
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 py-12 bg-black">

      {/* Single spotlight */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#FF4A17"
      />

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10 pt-20">

        {/* ─────────────────────────────────────────────
            LEFT: TEXT CONTENT
        ───────────────────────────────────────────── */}
        <motion.div
          className="space-y-7 text-center lg:text-left order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Status badge */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-xs text-zinc-300 tracking-widest uppercase">

              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4A17] opacity-75" />

                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4A17]" />
              </span>

              Scaling Brands Globally
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight"
          >
            <span className="text-white">
              We Turn Attention Into{" "}
            </span>

            <span className="bg-gradient-to-r from-white via-zinc-200 to-[#FF4A17] bg-clip-text text-transparent">
              Measurable Growth
            </span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            variants={fadeUp}
            className="h-9 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.5,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}
                className="text-xl md:text-2xl text-zinc-300 font-medium tracking-wide"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Digital strategies built to make brands impossible to ignore. We deliver high-ROI performance marketing, data-driven paid advertising, organic SEO scaling, and conversion-focused creative campaigns.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start gap-8 py-2"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center lg:text-left"
              >
                <p className="text-2xl font-black text-white">
                  {stat.value}
                </p>

                <p className="text-xs text-zinc-500 mt-0.5 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="w-16 h-px bg-white/10 mx-auto lg:mx-0"
          />

          {/* Action buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() =>
                scrollToSection("contact")
              }
              className="group relative inline-flex items-center justify-center gap-2 bg-[#FF4A17] hover:bg-[#e03e0e] text-white px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,74,23,0.3)]"
            >
              Start a Project

              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() =>
                scrollToSection("projects")
              }
              className="inline-flex items-center justify-center gap-2 border border-zinc-800 text-white hover:bg-white/5 hover:border-zinc-600 px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105"
            >
              Explore Our Work

              <i className="fa-solid fa-layer-group text-xs" />
            </button>
          </motion.div>

          {/* Channels / Icons */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start gap-4 pt-2"
          >
            {[
              {
                icon: "google",
                label: "Google Ads",
              },
              {
                icon: "meta",
                label: "Meta Ads",
              },
              {
                icon: "instagram",
                label: "Instagram Growth",
              },
              {
                icon: "linkedin",
                label: "B2B LinkedIn",
              },
            ].map((social, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-white/5 transition-all duration-300"
                title={social.label}
              >
                <i
                  className={`fa-brands fa-${
                    social.icon === "meta"
                      ? "facebook"
                      : social.icon
                  } text-sm`}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─────────────────────────────────────────────
            RIGHT: 3D TAG GLOBE (Art-Directed Placement & Controlled Scale)
        ───────────────────────────────────────────── */}
        <div className="flex justify-center lg:justify-end items-center relative z-10 order-1 lg:order-2 lg:pt-10">
          <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
            <TagSphere />
          </div>
        </div>

      </div>
    </div>
  );
}

const roles = [
  "Performance Marketing",
  "Social Media Strategy",
  "SEO & Digital Growth",
  "Conversion Optimization",
];

const stats = [
  {
    label: "Campaigns Scaled",
    value: "150+",
  },
  {
    label: "Client Retention",
    value: "98%",
  },
  {
    label: "Revenue Generated",
    value: "$10M+",
  },
];

export default HeroSection;