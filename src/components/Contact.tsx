'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Mail, 
  Globe, 
  DollarSign, 
  MessageSquare, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';

function FadeIn({ children, delay = 0, y = 15, className = "" }: { 
  children: React.ReactNode; delay?: number; y?: number; className?: string 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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
          phone: formData.get('phone'),
          website: formData.get('website'),
          budget: formData.get('budget'),
          message: formData.get('message'),
        })
      });
      
      const res = await response.json();
      if (res.success) {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative bg-black py-4 md:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Minimal 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: MINIMAL BRAND HEADLINE & DIRECT CONTACT ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6 pt-0 mt--1">
            <FadeIn y={0}>
              <p className="text-xs text-[#FF4A17] font-sans tracking-[0.3em] uppercase font-bold mb-3 leading-none">
                CONTACT US
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  Let&apos;s build <br />
                  something{" "}
                </span>
                <span className="bg-gradient-to-r from-[#FF4A17] via-[#FF6B3D] to-[#FF8F6B] bg-clip-text text-transparent">
                  remarkable.
                </span>
              </h1>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mt-4 max-w-sm">
                Whether you&apos;re launching a new brand, scaling your digital presence, or looking to generate more qualified leads, <span className="font-semibold text-white">myadsphere</span> is ready to turn your goals into measurable growth.
              </p>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mt-3 max-w-sm">
                From strategy and creative to marketing and technology, tell us where you want to go — we&apos;ll help you get there.
              </p>
            </FadeIn>

            {/* Direct Contact Info */}
            <FadeIn delay={0.1} className="space-y-4 pt-6 border-t border-white/10 max-w-sm">
              <div>
                <p className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest font-semibold mb-1">Direct Email</p>
                <a 
                  href="mailto:info@myadsphere.in" 
                  className="text-white text-base font-medium hover:text-[#FF4A17] transition-colors"
                >
                  info@myadsphere.in
                </a>
              </div>

              <div>
                <p className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest font-semibold mb-1">Phone & WhatsApp</p>
                <a 
                  href="https://wa.me/919494980096" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-base font-medium hover:text-[#FF4A17] transition-colors"
                >
                  +91 94949 80096
                </a>
              </div>
            </FadeIn>

            {/* Social Icons */}
            <FadeIn delay={0.15}>
              <p className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest font-semibold mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {[
                  { name: "Instagram", href: "https://www.instagram.com/myadsphere.in/", icon: "fa-brands fa-instagram" },
                  { name: "Facebook", href: "https://www.facebook.com/myadsphere.in/", icon: "fa-brands fa-facebook-f" },
                  { name: "LinkedIn", href: "https://linkedin.com", icon: "fa-brands fa-linkedin-in" },
                  { name: "WhatsApp", href: "https://wa.me/919494980096", icon: "fa-brands fa-whatsapp" }
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all duration-200"
                    aria-label={s.name}
                  >
                    <i className={`${s.icon} text-xs`} />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT COLUMN: CLEAN FORM & MINIMAL CAL EMBED ── */}
          <div className="lg:col-span-7 space-y-10 pt-0 mt-10">
            
            {/* Minimal Form */}
            <FadeIn delay={0.1} y={0}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name *"
                      className="w-full px-4 py-3.5 bg-zinc-900/40 border border-white/10 rounded-xl text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      placeholder="Mobile Number *"
                      className="w-full px-4 py-3.5 bg-zinc-900/40 border border-white/10 rounded-xl text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="url"
                      name="website"
                      placeholder="Company Website"
                      className="w-full px-4 py-3.5 bg-zinc-900/40 border border-white/10 rounded-xl text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <select 
                      name="budget"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3.5 bg-zinc-900/40 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-zinc-950 text-zinc-500">Select Budget Range</option>
                      <option value="$5k-$15k" className="bg-zinc-950 text-white">$5,000 - $15,000 / mo</option>
                      <option value="$15k-$50k" className="bg-zinc-950 text-white">$15,000 - $50,000 / mo</option>
                      <option value="$50k-$100k" className="bg-zinc-950 text-white">$50,000 - $100,000 / mo</option>
                      <option value="$100k+" className="bg-zinc-950 text-white">$100,000+ / mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project goals..."
                    className="w-full px-4 py-3.5 bg-zinc-900/40 border border-white/10 rounded-xl text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Start Your Project</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>

                {/* Feedback */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2"
                    >
                      <CheckCircle2 size={14} />
                      <span>Message sent successfully. We will be in touch shortly.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2"
                    >
                      <AlertCircle size={14} />
                      <span>Something went wrong. Please try again or email info@myadsphere.in</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </FadeIn>

            {/* Minimal Divider */}
            <FadeIn delay={0.15} className="flex items-center gap-4 py-2">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest">
                OR
              </span>
              <div className="h-px bg-white/10 flex-1" />
            </FadeIn>

            {/* Cal.com Booking Section */}
            <FadeIn delay={0.2} className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Schedule a Discovery Call
                </h3>
                <p className="text-xs text-zinc-400 font-light mt-1">
                  Pick a time that works best for you to discuss your vision.
                </p>
              </div>

              {/* Minimal Dark Cal.com Embed */}
              <div className="rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden">
                <iframe
                  src="https://cal.com/myadsphere?embed=true&theme=dark"
                  width="100%"
                  height="480"
                  frameBorder="0"
                  title="Book a Strategy Call with MyAdSphere"
                  className="w-full h-[460px] md:h-[500px] bg-zinc-950"
                />
              </div>
            </FadeIn>

          </div>

        </div>

      </div>
    </section>
  );
}
