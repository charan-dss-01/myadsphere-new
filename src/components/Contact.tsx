'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// ── Helpers ───────────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, y = 20, className = "" }: { 
  children: React.ReactNode; delay?: number; y?: number; className?: string 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const formData = new FormData(formRef.current!);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "6b9f20d0-e0d4-4176-b857-435f09b69437",
          name: formData.get('name'),
          email: formData.get('email'),
          website: formData.get('website'),
          service: formData.get('service'),
          budget: formData.get('budget'),
          message: formData.get('message'),
        })
      });
      
      const res = await response.json();
      if (res.success) {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative bg-black py-32 px-4 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Large highlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4A17]/[0.06] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <FadeIn className="text-center mb-24 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
            <span className="text-[100px] md:text-[180px] font-black text-transparent tracking-tighter leading-none"
              style={{ WebkitTextStroke: '1px rgba(255,74,23,0.08)' }}>
              GROWTH
            </span>
          </div>
          <div className="relative z-10 pt-10">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#FF4A17]/40" />
              <p className="text-[11px] text-[#FF4A17] tracking-[0.35em] uppercase font-bold">Start Your Campaign</p>
              <div className="h-px w-8 bg-[#FF4A17]/40" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Ready to Scale?
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* ── Glassmorphism Container ── */}
        <FadeIn delay={0.2}>
          <div className="relative rounded-[40px] border border-white/15 bg-zinc-950/80 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden">
            
            {/* Inner highlights */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF4A17]/40 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Contact Details */}
              <div className="lg:col-span-5 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10 bg-white/[0.01]">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Let&apos;s talk about your <br/> brand growth.</h3>
                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                      Ready to unlock high-ROI campaigns? Partner with MyAdSphere to scale revenue and build market dominance.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      { icon: "📍", label: "Agency Headquarters", val: "Hyderabad, India · Global Operations" },
                      { icon: "📧", label: "Direct Email", val: "contact@myadsphere.com" },
                      { icon: "📱", label: "Phone Inquiry", val: "+91 9849490777" }
                    ].map((item) => (
                      <div key={item.label} className="group flex items-center gap-5 p-4 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-[#FF4A17]/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#FF4A17]/10 border border-[#FF4A17]/20 flex items-center justify-center text-xl text-[#FF4A17] group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{item.label}</p>
                          <p className="text-white font-semibold text-sm">{item.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Official Channels</p>
                    <div className="flex gap-4">
                        {[
                          { icon: "fa-brands fa-linkedin-in", link: "https://linkedin.com" },
                          { icon: "fa-brands fa-twitter", link: "https://twitter.com" },
                          { icon: "fa-brands fa-instagram", link: "https://instagram.com" }
                        ].map((s) => (
                          <a key={s.link} href={s.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF4A17] hover:bg-[#FF4A17]/10 transition-all">
                            <i className={`${s.icon} text-lg`} />
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7 p-10 md:p-14">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest ml-1">Full Name *</label>
                      <input 
                        type="text" name="name" required placeholder="John Doe"
                        className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4A17] focus:bg-zinc-900 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest ml-1">Work Email *</label>
                      <input 
                        type="email" name="email" required placeholder="john@company.com"
                        className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4A17] focus:bg-zinc-900 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest ml-1">Company Website</label>
                      <input 
                        type="url" name="website" placeholder="https://yourcompany.com"
                        className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4A17] focus:bg-zinc-900 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest ml-1">Monthly Ad Budget</label>
                      <select 
                        name="budget"
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#FF4A17] transition-all"
                      >
                        <option value="$5k-$15k">$5,000 - $15,000 / mo</option>
                        <option value="$15k-$50k">$15,000 - $50,000 / mo</option>
                        <option value="$50k+">$50,000+ / mo</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest ml-1">Target Growth Goals</label>
                    <textarea 
                      name="message" required rows={4} placeholder="Tell us about your brand targets, current channels, and growth objectives..."
                      className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#FF4A17] focus:bg-zinc-900 transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full h-16 rounded-2xl bg-[#FF4A17] text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-[#e03e0e] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-[0_0_30px_rgba(255,74,23,0.35)] group"
                  >
                    {status === 'loading' ? 'Transmitting Request...' : 'Request Growth Consultation'}
                    <i className="fa-solid fa-paper-plane text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.p initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} exit={{opacity:0}} className="text-emerald-400 text-center font-bold text-xs tracking-wide">
                        Inquiry submitted successfully! A MyAdSphere growth strategist will contact you within 24 hours.
                      </motion.p>
                    )}
                    {status === 'error' && (
                      <motion.p initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} exit={{opacity:0}} className="text-red-400 text-center font-bold text-xs tracking-wide">
                        Error submitting inquiry. Please email us directly at contact@myadsphere.com
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-white/5 text-center">
           <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.5em]">
             © {new Date().getFullYear()} MyAdSphere Digital Growth Agency · Built For Scale
           </p>
        </div>

      </div>
    </section>
  );
}
