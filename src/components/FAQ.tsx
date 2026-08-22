'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqList = [
  {
    q: "What services does myadsphere provide?",
    a: "myadsphere provides end-to-end digital growth solutions including Branding & Identity, Content & Creative Production, Social Media Marketing, Website Design & Development, UI/UX Design, Search Engine Optimization (SEO), Performance Marketing, Google Ads / PPC, Meta Ads, Lead Generation & Funnels, PR & Media, and AI Solutions & Automation."
  },
  {
    q: "How do you create a digital marketing strategy for my business?",
    a: "We start by understanding your business, target audience, competitors, current digital presence, challenges, and growth objectives. From there, we identify the right channels, messaging, creative direction, technology, and performance metrics before execution begins."
  },
  {
    q: "How long does it take to see results?",
    a: "Timelines depend on the service and your goals. Google Ads, Meta Ads, and lead generation can begin producing useful data relatively quickly, while SEO, branding, content, and organic growth typically require a longer-term approach. We set realistic expectations and measurable goals before starting."
  },
  {
    q: "Do you work with startups as well as established businesses?",
    a: "Yes. myadsphere works with startups, local businesses, growing companies, and established brands. Our strategy, execution, and recommended channels are tailored to your business stage, objectives, industry, and budget."
  },
  {
    q: "Do you manage Google Ads and Meta Ads end-to-end?",
    a: "Yes. We can manage the complete advertising process, including strategy, audience research, campaign setup, conversion tracking, creative coordination, targeting, optimization, retargeting, reporting, and scaling across Google and Meta."
  },
  {
    q: "Do you provide performance reporting?",
    a: "Yes. We provide clear reporting focused on business-relevant metrics, not just impressions and clicks. Depending on the campaign, this can include leads, conversions, cost per lead, customer acquisition cost, ROAS, revenue, and other agreed KPIs."
  },
  {
    q: "How do you measure marketing ROI?",
    a: "We define the most relevant KPIs based on your business model and campaign objectives. These may include qualified leads, cost per lead, conversion rate, customer acquisition cost, ROAS, sales, revenue, and pipeline value where reliable tracking is available."
  },
  {
    q: "Can myadsphere handle both creative and marketing?",
    a: "Yes. Our team combines strategy, branding, design, content production, social media, advertising, SEO, websites, and technology, allowing creative and performance teams to work together instead of operating separately."
  },
  {
    q: "Do you provide website and UI/UX design services?",
    a: "Yes. We design and develop responsive, SEO-ready, conversion-focused websites and provide dedicated UI/UX design services, including user flows, wireframes, interface design, prototyping, and design systems."
  },
  {
    q: "Does myadsphere provide PR & Media services?",
    a: "Yes. Our PR & Media services can include PR strategy, press release development, media outreach, thought leadership, influencer collaborations, and reputation-focused communication based on the needs of your brand."
  },
  {
    q: "Do you provide AI and automation solutions?",
    a: "Yes. We build AI-powered solutions such as chatbots, AI assistants, lead qualification workflows, business-process automation, content workflows, and custom AI integrations based on real operational needs."
  },
  {
    q: "Why should I choose myadsphere?",
    a: "myadsphere brings strategy, creative, performance marketing, technology, and AI together under one roof. Instead of treating each service as a separate activity, we focus on building connected digital systems designed around measurable business growth."
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
                    <span className="text-[#FF4A17] text-sm font-sans font-bold">0{idx + 1}.</span>
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
