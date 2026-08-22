'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import { servicesData } from '@/data/servicesData';
import { 
  ArrowUpRight, 
  Sparkles, 
  TrendingUp, 
  Search, 
  Share2, 
  Megaphone, 
  FileText, 
  Palette, 
  Users, 
  Filter, 
  Globe,
  ShoppingBag,
  Bot,
  Newspaper
} from 'lucide-react';

// Unique Lucide icons mapped to all 12 service slugs
const serviceIcons: Record<string, React.ReactNode> = {
  'branding-identity': <Palette className="w-4 h-4 text-white" />,
  'content-creative-production': <FileText className="w-4 h-4 text-white" />,
  'social-media-marketing': <Share2 className="w-4 h-4 text-white" />,
  'website-design-development': <Globe className="w-4 h-4 text-white" />,
  'seo': <Search className="w-4 h-4 text-white" />,
  'performance-marketing': <TrendingUp className="w-4 h-4 text-white" />,
  'google-ads-ppc': <Megaphone className="w-4 h-4 text-white" />,
  'meta-ads': <Sparkles className="w-4 h-4 text-white" />,
  'lead-generation': <Users className="w-4 h-4 text-white" />,
  'ecommerce-marketing': <ShoppingBag className="w-4 h-4 text-white" />,
  'pr-media': <Newspaper className="w-4 h-4 text-white" />,
  'marketing-automation-crm': <Newspaper className="w-4 h-4 text-white" />,
  'ai-solutions-automation': <Bot className="w-4 h-4 text-white" />
};

const bigNumbers = [
  { val: '98%', label: 'Client Satisfaction' },
  { val: '5.2x', label: 'Average ROAS' },
  { val: '150+', label: 'Campaigns Scaled' },
  { val: '24/7', label: 'Live Monitoring' },
];

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

export default function FeaturedSkills() {
  // De-duplicate unique service entries
  const uniqueServices = Object.values(servicesData).filter(
    (service, index, self) => index === self.findIndex((s) => s.slug === service.slug)
  );

  return (
    <section id="services" className="relative bg-black py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <FadeIn className="text-center mb-16 relative">
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
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Our Growth Services
              </span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed font-light">
              Explore our full-funnel digital growth solutions engineered to capture market share, scale brand visibility, and generate revenue.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF4A17]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF4A17]" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF4A17]/50" />
            </div>
          </div>
        </FadeIn>

        {/* ── 12 SERVICES CARDS GRID (Same Card Design from Services Page) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {uniqueServices.map((service, idx) => (
            <FadeIn key={service.slug} delay={0.04 * (idx % 6)}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative rounded-2xl border border-white/10 bg-zinc-950/90 p-7 flex flex-col justify-between h-full hover:border-[#FF4A17]/60 hover:bg-zinc-900/90 transition-all duration-500 shadow-2xl block overflow-hidden"
              >
                {/* Subtle Corner Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4A17]/[0.03] group-hover:bg-[#FF4A17]/10 blur-2xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Card Bar: Icon & Category */}
                  <div className="flex items-center justify-between mb-6 pb-3.5 border-b border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#FF4A17] group-hover:border-[#FF4A17] group-hover:scale-105 transition-all duration-300 shadow-md">
                      {serviceIcons[service.slug] || <Sparkles className="w-4 h-4 text-white" />}
                    </div>
                    <span className="text-[10px] text-zinc-500 font-sans uppercase tracking-widest font-semibold">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl font-bold tracking-tight mb-3 group-hover:text-white transition-colors flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-[#FF4A17] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </h3>

                  {/* Short Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Service Deliverables / Platforms Pills */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.platforms.slice(0, 3).map((platform) => (
                      <span
                        key={platform}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-zinc-300 font-medium group-hover:border-white/20 transition-all"
                      >
                        {platform}
                      </span>
                    ))}
                    {service.platforms.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-sans text-zinc-500">
                        +{service.platforms.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Stats Strip */}
        <FadeIn delay={0.1} className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08] rounded-2xl overflow-hidden border border-white/[0.1]">
            {bigNumbers.map(({ val, label }) => (
              <div key={label} className="bg-zinc-950/90 py-8 text-center">
                <p className="text-4xl md:text-5xl font-black text-white tabular-nums">{val}</p>
                <p className="text-zinc-400 text-xs font-semibold mt-2 tracking-wide uppercase">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Target Industries Strip */}
        <FadeIn delay={0.15}>
          <div className="rounded-2xl border border-white/[0.1] bg-zinc-950/80 backdrop-blur-sm p-7 flex flex-col sm:flex-row items-center gap-5">
            <div className="w-10 h-10 rounded-xl bg-[#FF4A17]/10 border border-[#FF4A17]/30 flex items-center justify-center text-lg shrink-0 text-[#FF4A17]">🚀</div>
            <div className="text-center sm:text-left">
              <p className="text-white font-bold text-base">Key Industries We Scale</p>
              <p className="text-zinc-400 text-sm mt-1">
                E-Commerce · SaaS · Healthcare · Real Estate · Startups · Finance · D2C Brands
              </p>
            </div>
            <div className="sm:ml-auto shrink-0">
              <Link 
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FF4A17]/40 bg-[#FF4A17]/10 text-xs text-white font-bold tracking-widest uppercase hover:bg-[#FF4A17] hover:border-[#FF4A17] transition-all duration-300 shadow-[0_0_20px_rgba(255,74,23,0.3)]"
              >
                View All Services <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
