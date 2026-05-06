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
          subject: formData.get('subject'),
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
      
      {/* Large highlight glow behind the glass container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header (Premium Style) */}
        <FadeIn className="text-center mb-24 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
            <span className="text-[120px] md:text-[200px] font-black text-transparent tracking-tighter leading-none"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.06)' }}>
              CONNECT
            </span>
          </div>
          <div className="relative z-10 pt-10">
            <h2 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* ── Glassmorphism Container ── */}
        <FadeIn delay={0.2}>
          <div className="relative rounded-[40px] border border-white/20 bg-white/[0.03] backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.4)] overflow-hidden">
            
            {/* Inner highlights */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Contact Details (Glass Panel) */}
              <div className="lg:col-span-5 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10 bg-white/[0.02]">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Let&apos;s build something <br/> extraordinary.</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                      Ready to start a project? I&apos;m available for full-stack opportunities and AI collaborations.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      { icon: "📍", label: "Location", val: "Hyderabad, India" },
                      { icon: "📧", label: "Email", val: "cdonthu816@gmail.com" },
                      { icon: "📱", label: "Phone", val: "+91 9849490777" }
                    ].map((item) => (
                      <div key={item.label} className="group flex items-center gap-6 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{item.label}</p>
                          <p className="text-white font-medium">{item.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Social Networks</p>
                    <div className="flex gap-4">
                        {[
                          { icon: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/charandonthu" },
                          { icon: "fa-brands fa-github", link: "https://github.com/charan-dss-01/" },
                          { icon: "fa-brands fa-instagram", link: "https://www.instagram.com/dss_charan_07/" }
                        ].map((s) => (
                          <a key={s.link} href={s.link} target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                            <i className={`${s.icon} text-lg`} />
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form (Glass Panel) */}
              <div className="lg:col-span-7 p-10 md:p-14">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" name="name" required placeholder="John Doe"
                        className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" name="email" required placeholder="john@example.com"
                        className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest ml-1">Subject</label>
                    <input 
                      type="text" name="subject" required placeholder="Project Inquiry"
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      name="message" required rows={4} placeholder="Tell me about your project..."
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full h-16 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-[0.3em] hover:bg-zinc-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:opacity-50 group"
                  >
                    {status === 'loading' ? 'Transmitting...' : 'Send Message'}
                    <i className="fa-solid fa-paper-plane text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.p initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} exit={{opacity:0}} className="text-green-400 text-center font-bold text-sm tracking-wide">
                        Message sent successfully!
                      </motion.p>
                    )}
                    {status === 'error' && (
                      <motion.p initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} exit={{opacity:0}} className="text-red-400 text-center font-bold text-sm tracking-wide">
                        Error sending message. Please try again.
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
             © {new Date().getFullYear()} Charan Donthu · Building with Precision
           </p>
        </div>

      </div>
    </section>
  );
}
