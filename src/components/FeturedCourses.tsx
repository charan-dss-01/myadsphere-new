'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

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
  lg: "text-sm  font-bold px-4 py-2 border-[#FF4A17]/40 text-white bg-[#FF4A17]/10",
  md: "text-xs  font-semibold px-3.5 py-1.5 border-white/20 text-zinc-100",
  sm: "text-[11px] font-medium px-3 py-1 border-white/10 text-zinc-400",
} as const;

const bigNumbers = [
  { val: '98%', label: 'Client Satisfaction' },
  { val: '5.2x', label: 'Average ROAS' },
  { val: '150+', label: 'Campaigns Scaled' },
  { val: '24/7', label: 'Live Monitoring' },
];

// ── Fibonacci sphere — unit positions ─────────────────────────────────────
const BASE_POS = techs.map((_, i) => {
  const phi = Math.acos(1 - (2 * (i + 0.5)) / techs.length);
  const theta = Math.PI * (1 + Math.sqrt(5)) * i;
  return {
    x: Math.sin(phi) * Math.sin(theta),
    y: Math.cos(phi),
    z: Math.sin(phi) * Math.cos(theta),
  };
});

const RADIUS = 230;   // sphere radius in px
const PERSPECTIVE = 900;   // camera distance

// ── FadeIn helper ─────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

// ── 3D Tag Sphere ─────────────────────────────────────────────────────────
function TagSphere() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let rotY = 0;      
    let rotX = 0;      
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
      targetY = ((e.clientX - cx) / (r.width / 2)) * 0.65;
      targetX = -((e.clientY - cy) / (r.height / 2)) * 0.4;
    };

    window.addEventListener('mousemove', onMouseMove);

    const tick = () => {
      rotY += 0.0028;

      mouseRotY += (targetY - mouseRotY) * 0.035;
      mouseRotX += (targetX - mouseRotX) * 0.035;

      const ry = rotY + mouseRotY;
      const rx = mouseRotX + Math.sin(rotY * 0.45) * 0.15;

      const cosRX = Math.cos(rx), sinRX = Math.sin(rx);
      const cosRY = Math.cos(ry), sinRY = Math.sin(ry);

      BASE_POS.forEach(({ x, y, z }, i) => {
        const x1 = x * cosRY + z * sinRY;
        const y1 = x * sinRX * sinRY + y * cosRX - z * sinRX * cosRY;
        const z1 = -x * cosRX * sinRY + y * sinRX + z * cosRX * cosRY;

        const scale = PERSPECTIVE / (PERSPECTIVE - z1 * RADIUS);
        const sx = x1 * RADIUS * scale;
        const sy = -y1 * RADIUS * scale;

        const depth = (z1 + 1) / 2;
        const op = (0.12 + 0.88 * depth).toFixed(2);
        const ts = (0.65 + 0.55 * depth).toFixed(3);

        const el = tagRefs.current[i];
        if (el) {
          el.style.transform = `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px) scale(${ts})`;
          el.style.opacity = op;
          el.style.zIndex = String(Math.round(depth * 100));
          el.style.pointerEvents = depth > 0.55 ? 'auto' : 'none';
        }
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto select-none cursor-crosshair"
      style={{ width: 620, height: 560, maxWidth: '100%' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] rounded-full bg-[#FF4A17]/[0.06] blur-[90px]" />
      </div>
      {/* Outer ring hint */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[480px] h-[480px] rounded-full border border-[#FF4A17]/10" />
      </div>

      {/* Tags — positioned from centre via translate */}
      <div className="absolute inset-0 flex items-center justify-center">
        {techs.map((tech, i) => (
          <div
            key={tech.name}
            ref={el => { tagRefs.current[i] = el; }}
            className={`absolute whitespace-nowrap rounded-full
                        bg-zinc-950/90 border border-white/10 backdrop-blur-sm
                        shadow-lg shadow-black/50
                        hover:border-[#FF4A17]/50 hover:bg-zinc-900 hover:text-[#FF4A17]
                        transition-all duration-300 ease-out cursor-pointer
                        ${sizeClass[tech.size as keyof typeof sizeClass]}`}
          >
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Page Section ──────────────────────────────────────────────────────────
export default function FeaturedSkills() {
  return (
    <section id="skills" className="relative bg-black py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <FadeIn className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
            <span className="text-[90px] md:text-[160px] font-black text-transparent tracking-tighter leading-none"
              style={{ WebkitTextStroke: '1px rgba(255,74,23,0.08)' }}>
              SERVICES
            </span>
          </div>
          <div className="relative z-10 pt-8">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#FF4A17]/40" />
              <p className="text-[11px] text-[#FF4A17] tracking-[0.35em] uppercase font-bold">Marketing Arsenal</p>
              <div className="h-px w-8 bg-[#FF4A17]/40" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Move your cursor over the interactive sphere to explore our specialized digital growth channels and marketing tools.
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF4A17]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF4A17]" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF4A17]/50" />
            </div>
          </div>
        </FadeIn>

        {/* Stats strip */}
        <FadeIn delay={0.05} className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08] rounded-2xl overflow-hidden border border-white/[0.1]">
            {bigNumbers.map(({ val, label }) => (
              <div key={label} className="bg-zinc-950/90 py-8 text-center">
                <p className="text-4xl md:text-5xl font-black text-white tabular-nums">{val}</p>
                <p className="text-zinc-400 text-xs font-semibold mt-2 tracking-wide uppercase">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Globe */}
        {/* <FadeIn delay={0.1}>
          <TagSphere />
        </FadeIn> */}

        {/* Target Industries Strip */}
        <FadeIn delay={0.15}>
          <div className="rounded-2xl border border-white/[0.1] bg-zinc-950/80 backdrop-blur-sm p-7
                          flex flex-col sm:flex-row items-center gap-5">
            <div className="w-10 h-10 rounded-xl bg-[#FF4A17]/10 border border-[#FF4A17]/30 flex items-center justify-center text-lg shrink-0 text-[#FF4A17]">🚀</div>
            <div className="text-center sm:text-left">
              <p className="text-white font-bold text-base">Key Industries We Scale</p>
              <p className="text-zinc-400 text-sm mt-1">
                E-Commerce · SaaS · Healthcare · Real Estate · Startups · Finance · D2C Brands
              </p>
            </div>
            <div className="sm:ml-auto shrink-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF4A17]/30
                               bg-[#FF4A17]/10 text-xs text-[#FF4A17] font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A17] animate-pulse" />
                Data-Driven ROI
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
