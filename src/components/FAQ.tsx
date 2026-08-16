'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqList = [
  {
    q: "What services does MyAdSphere provide?",
    a: "MyAdSphere offers end-to-end digital growth services including Performance Marketing (Google, Meta, TikTok, LinkedIn Ads), Search Engine Optimization (SEO), Conversion Rate Optimization (CRO), Social Media Management, Content Strategy, and Custom Funnel Analytics."
  },
  {
    q: "How do you build a digital marketing strategy for our brand?",
    a: "We start with a complete audit of your market position, historic campaign performance, competitor gaps, and customer acquisition costs. From there, we build a tailored multi-channel strategy linking targeted traffic directly into high-converting landing funnels."
  },
  {
    q: "How long does it take to see results?",
    a: "Paid ad campaigns (Google & Meta Ads) typically start generating leads and sales within 48 to 72 hours of launch. Organic search engine optimization (SEO) and authority campaigns build momentum over 60 to 90 days for long-term compound growth."
  },
  {
    q: "Do you work with early-stage startups as well as established brands?",
    a: "Yes! We partner with ambitious startups looking for predictable launch traction as well as established enterprises seeking to optimize ad spend efficiency and scale market share."
  },
  {
    q: "Do you manage paid advertising campaigns end-to-end?",
    a: "Absolutely. Our team handles everything: audience research, ad copy writing, graphic & video creative production, campaign setup, real-time bid optimization, A/B testing, and weekly ROI reporting."
  },
  {
    q: "Do you provide transparent monthly reporting?",
    a: "Yes. Every MyAdSphere client receives access to a custom real-time dashboard tracking ROAS, Cost-Per-Acquisition (CPA), conversion rates, click-through rates, and net revenue growth, accompanied by weekly strategist check-ins."
  },
  {
    q: "How do you measure campaign performance and ROI?",
    a: "We measure success directly against your bottom-line business objectives: return on ad spend (ROAS), customer acquisition cost (CAC), qualified lead volume, and customer lifetime value (LTV)—never vanity metrics."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-black py-32 px-4 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4A17]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
            <span className="text-[100px] md:text-[160px] font-black text-transparent tracking-tighter leading-none"
              style={{ WebkitTextStroke: '1px rgba(255,74,23,0.08)' }}>
              QUESTIONS
            </span>
          </div>
          <div className="relative z-10 pt-8">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#FF4A17]/40" />
              <p className="text-[11px] text-[#FF4A17] tracking-[0.35em] uppercase font-bold">Frequently Asked Questions</p>
              <div className="h-px w-8 bg-[#FF4A17]/40" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Got Questions?
              </span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg mt-5 max-w-lg mx-auto">
              Everything you need to know about partnering with MyAdSphere.
            </p>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isOpen
                    ? "border-[#FF4A17]/50 bg-zinc-950/90 shadow-[0_0_25px_rgba(255,74,23,0.15)]"
                    : "border-white/10 bg-zinc-950/60 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-7 py-6 text-left flex items-center justify-between gap-4 font-bold text-lg text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#FF4A17] text-sm font-mono font-bold">0{idx + 1}.</span>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FF4A17] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-7 pb-6 pt-1 border-t border-white/5 text-zinc-400 text-base leading-relaxed font-light">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
