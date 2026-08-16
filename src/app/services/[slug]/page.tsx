import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { servicesData } from '@/data/servicesData';
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles, Layers, ShieldCheck, Cpu } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];
  if (!service) return { title: 'Service Not Found | MyAdSphere' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  // Related Services (excluding current)
  const relatedServices = Object.values(servicesData)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-[#FF4A17] selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* ── 1. SERVICE HERO SECTION ── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 border-b border-white/10 overflow-hidden select-none">
        
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[350px] bg-[#FF4A17]/[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Minimal Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-[#FF4A17] font-semibold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-white/15 text-[#FF4A17] font-mono text-[11px] font-bold tracking-[0.3em] uppercase mb-6 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A17] animate-pulse" />
                SERVICE {service.number} · {service.category}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] uppercase mb-6">
                {service.heroHeadline}
              </h1>

              <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
                {service.heroSubhead}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF4A17]/90 hover:bg-[#FF4A17] text-white font-bold text-xs uppercase tracking-widest backdrop-blur-xl border border-[#FF4A17]/60 shadow-[0_0_25px_rgba(255,74,23,0.45)] transition-all duration-300 hover:scale-105"
                >
                  Start a Project <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-widest border border-white/10 transition-all duration-300"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            {/* Right Visual Simulation Module */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-white/15 bg-zinc-950/90 p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF4A17]/10 blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#FF4A17]" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      {service.title} Engine
                    </span>
                  </div>
                  <span className="text-[10px] text-[#FF4A17] font-mono font-bold bg-[#FF4A17]/10 px-2 py-0.5 rounded border border-[#FF4A17]/30">
                    VERIFIED
                  </span>
                </div>

                {/* Simulated Metrics List */}
                <div className="space-y-4 mb-6">
                  {service.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                      <CheckCircle2 size={16} className="text-[#FF4A17] shrink-0 mt-0.5" />
                      <span className="font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {service.platforms.map((platform) => (
                    <span key={platform} className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-zinc-400">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. SERVICE OVERVIEW ── */}
      <section className="relative py-20 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-md">
            <h2 className="text-xs font-mono text-[#FF4A17] font-bold tracking-[0.3em] uppercase mb-4">
              SERVICE OVERVIEW
            </h2>
            <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. CAPABILITIES ("WHAT WE DO") ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <p className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase mb-3">
              CORE CAPABILITIES
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              What We Execute
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div
                key={cap.title}
                className="group p-8 rounded-2xl border border-white/10 bg-zinc-950/90 hover:border-[#FF4A17]/60 hover:bg-zinc-900/90 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-zinc-500 font-bold tracking-widest block mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="text-white text-xl font-bold tracking-tight mb-3 group-hover:text-white transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. PROCESS ("OUR APPROACH") ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <p className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase mb-3">
              EXECUTION FRAMEWORK
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Our 5-Stage Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl border border-white/10 bg-zinc-950/80 hover:border-[#FF4A17]/50 transition-all duration-300"
              >
                <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-widest block mb-3">
                  {step.step}
                </span>
                <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-2">
                  {step.title}
                </h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. TARGET INDUSTRIES & PLATFORMS ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Target Industries */}
          <div className="p-8 md:p-10 rounded-2xl border border-white/10 bg-zinc-950/90">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="text-[#FF4A17]" size={20} />
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">
                Tailored Industries
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.targetIndustries.map((ind) => (
                <span
                  key={ind}
                  className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 font-semibold"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Platform Tech Ecosystem */}
          <div className="p-8 md:p-10 rounded-2xl border border-white/10 bg-zinc-950/90">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-[#FF4A17]" size={20} />
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">
                Technology Ecosystem
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.platforms.map((plat) => (
                <span
                  key={plat}
                  className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 font-semibold"
                >
                  {plat}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. SERVICE-SPECIFIC FAQS ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase mb-3">
              QUESTIONS & ANSWERS
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              {service.title} FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl border border-white/10 bg-zinc-950/90"
              >
                <h4 className="text-white font-bold text-base md:text-lg mb-3">
                  {faq.question}
                </h4>
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. RELATED SERVICES CROSS-LINKS ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase mb-2">
                EXPLORE MORE CAPABILITIES
              </p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase">
                Related Growth Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-mono font-bold text-zinc-400 hover:text-[#FF4A17] transition-colors flex items-center gap-1"
            >
              View All Services ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group p-6 rounded-2xl border border-white/10 bg-zinc-950/90 hover:border-[#FF4A17]/60 transition-all duration-300 block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#FF4A17] font-mono text-xs font-bold">{rel.number}</span>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase">{rel.category}</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#FF4A17] transition-colors">
                  {rel.title}
                </h4>
                <p className="text-zinc-400 text-xs font-light line-clamp-2">
                  {rel.shortDescription}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── 8. FINAL HIGH-CONVERSION CTA ── */}
      <section className="relative py-24 px-6 md:px-12 bg-black text-center select-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,74,23,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#FF4A17] font-mono text-xs font-bold tracking-[0.35em] uppercase mb-4">
            READY TO SCALE {service.title.toUpperCase()}?
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-8">
            Let's Build Your Growth Engine.
          </h2>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF4A17]/90 hover:bg-[#FF4A17] text-white font-bold text-xs uppercase tracking-widest backdrop-blur-xl border border-[#FF4A17]/60 shadow-[0_0_30px_rgba(255,74,23,0.5)] transition-all duration-300 hover:scale-105"
          >
            Start a Project <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
