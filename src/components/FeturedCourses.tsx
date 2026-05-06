'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

// ── Tags ──────────────────────────────────────────────────────────────────
const techs = [
  { name: "React", size: "lg" },
  { name: "Next.js", size: "lg" },
  { name: "Node.js", size: "lg" },
  { name: "MongoDB", size: "md" },
  { name: "TypeScript", size: "md" },
  { name: "Python", size: "md" },
  { name: "Tailwind CSS", size: "md" },
  { name: "Express.js", size: "md" },
  { name: "AWS", size: "md" },
  { name: "PostgreSQL", size: "sm" },
  { name: "MySQL", size: "sm" },
  { name: "Flask", size: "sm" },
  { name: "Docker", size: "sm" },
  { name: "Git", size: "sm" },
  { name: "GitHub", size: "sm" },

  { name: "REST APIs", size: "sm" },

  { name: "Java", size: "sm" },
  { name: "JWT Auth", size: "sm" },
  { name: "Redux", size: "sm" },
  { name: "Postman", size: "sm" },
  { name: "Cloudinary", size: "sm" },
];

const sizeClass = {
  lg: "text-sm  font-semibold px-4   py-2   border-white/20 text-white",
  md: "text-xs  font-medium  px-3.5 py-1.5  border-white/12 text-zinc-200",
  sm: "text-[11px] font-normal  px-3   py-1   border-white/8  text-zinc-400",
} as const;

const bigNumbers = [
  { val: '4+', label: 'Years Coding' },
  { val: '20+', label: 'Technologies' },
  { val: '15+', label: 'Projects Shipped' },
  { val: '10+', label: 'Certifications' },
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
// Uses pure JS 3D math + 2D translate — no preserve-3d, no backface issues
function TagSphere() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let rotY = 0;      // current total Y rotation (rad)
    let rotX = 0;      // current total X rotation (rad)
    let mouseRotY = 0;      // smoothed mouse Y influence (rad)
    let mouseRotX = 0;      // smoothed mouse X influence (rad)
    let targetY = 0;
    let targetX = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      const r = wrapperRef.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      targetY = ((e.clientX - cx) / (r.width / 2)) * 0.65;   // ±0.65 rad max
      targetX = -((e.clientY - cy) / (r.height / 2)) * 0.4;
    };

    window.addEventListener('mousemove', onMouseMove);

    const tick = () => {
      // Auto-spin
      rotY += 0.0028;

      // Smooth lerp toward mouse
      mouseRotY += (targetY - mouseRotY) * 0.035;
      mouseRotX += (targetX - mouseRotX) * 0.035;

      const ry = rotY + mouseRotY;
      const rx = mouseRotX + Math.sin(rotY * 0.45) * 0.15;  // gentle wobble

      // Precompute trig
      const cosRX = Math.cos(rx), sinRX = Math.sin(rx);
      const cosRY = Math.cos(ry), sinRY = Math.sin(ry);

      BASE_POS.forEach(({ x, y, z }, i) => {
        // Rotate around Y then X (standard orbit math)
        const x1 = x * cosRY + z * sinRY;
        const y1 = x * sinRX * sinRY + y * cosRX - z * sinRX * cosRY;
        const z1 = -x * cosRX * sinRY + y * sinRX + z * cosRX * cosRY;

        // Perspective projection → 2D screen coords
        const scale = PERSPECTIVE / (PERSPECTIVE - z1 * RADIUS);
        const sx = x1 * RADIUS * scale;
        const sy = -y1 * RADIUS * scale;

        // Depth → opacity & scale (front = bright & big, back = dim & small)
        const depth = (z1 + 1) / 2;                     // 0 = back, 1 = front
        const op = (0.12 + 0.88 * depth).toFixed(2);
        const ts = (0.65 + 0.55 * depth).toFixed(3);

        const el = tagRefs.current[i];
        if (el) {
          el.style.transform = `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px) scale(${ts})`;
          el.style.opacity = op;
          el.style.zIndex = String(Math.round(depth * 100));
          // Pointer events only for front-facing tags
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
        <div className="w-[300px] h-[300px] rounded-full bg-white/[0.04] blur-[90px]" />
      </div>
      {/* Outer ring hint */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[480px] h-[480px] rounded-full border border-white/[0.04]" />
      </div>

      {/* Tags — positioned from centre via translate */}
      <div className="absolute inset-0 flex items-center justify-center">
        {techs.map((tech, i) => (
          <div
            key={tech.name}
            ref={el => { tagRefs.current[i] = el; }}
            className={`absolute whitespace-nowrap rounded-full
                        bg-zinc-950/90 border backdrop-blur-sm
                        shadow-lg shadow-black/50
                        hover:bg-white/10 hover:border-white/30 hover:text-white
                        transition-colors duration-150
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
            <span className="text-[120px] md:text-[160px] font-black text-transparent tracking-tighter leading-none"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.04)' }}>
              SKILLS
            </span>
          </div>
          <div className="relative z-10 pt-8">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/20" />
              <p className="text-[11px] text-zinc-500 tracking-[0.35em] uppercase font-medium">Tech Arsenal</p>
              <div className="h-px w-8 bg-white/20" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-zinc-500 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Move your cursor over the globe to control it. Every tag is a technology I&apos;ve shipped with.
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
            </div>
          </div>
        </FadeIn>

        {/* Stats strip */}
        <FadeIn delay={0.05} className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.07]">
            {bigNumbers.map(({ val, label }) => (
              <div key={label} className="bg-zinc-950/80 py-8 text-center">
                <p className="text-4xl md:text-5xl font-black text-white tabular-nums">{val}</p>
                <p className="text-zinc-500 text-sm mt-2 tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Globe */}
        <FadeIn delay={0.1}>
          <TagSphere />
        </FadeIn>

        {/* Currently learning */}
        <FadeIn delay={0.15}>
          <div className="rounded-2xl border border-white/[0.07] bg-zinc-950/70 backdrop-blur-sm p-7
                          flex flex-col sm:flex-row items-center gap-5">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0">🚀</div>
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-base">Currently Exploring</p>
              <p className="text-zinc-500 text-sm mt-1">
                Next.Js · LangChain · Generative AI · Ai Tools
              </p>
            </div>
            <div className="sm:ml-auto shrink-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10
                               bg-white/5 text-xs text-zinc-400 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Always Learning
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
