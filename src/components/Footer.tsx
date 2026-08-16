'use client';

import React from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden pt-20 border-t border-white/15">
      
      {/* ── 1. CENTERED BRAND LOGO & SOCIAL DIVIDER BAR (PROMINENT SIZE) ── */}
      <div className="max-w-7xl mx-auto px-6 pb-16 text-center relative z-10">
        
        {/* Centered Brand Logo - Large Scale */}
        <div className="flex justify-center mb-10 overflow-visible py-4">
          <img 
            src="/assets/logo.png" 
            alt="MyAdSphere" 
            className="h-12 md:h-16 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity scale-[3.5] transform-gpu" 
            onClick={() => scrollToSection('home')}
          />
        </div>

        {/* Horizontal Line with Prominent Social Icons in Middle */}
        <div className="relative flex items-center justify-center my-10">
          <div className="w-full h-px bg-white/15" />
          
          <div className="absolute bg-black px-6 flex items-center gap-4 text-zinc-300">
            <a href="#contact" title="Facebook" className="w-11 h-11 border border-white/10 bg-white/5 flex items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-[#FF4A17] hover:border-[#FF4A17] transition-all shadow-lg">
              <i className="fa-brands fa-facebook-f text-base" />
            </a>
            <a href="#contact" title="Instagram" className="w-11 h-11 border border-white/10 bg-white/5 flex items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-[#FF4A17] hover:border-[#FF4A17] transition-all shadow-lg">
              <i className="fa-brands fa-instagram text-base" />
            </a>
            <a href="#contact" title="YouTube" className="w-11 h-11 border border-white/10 bg-white/5 flex items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-[#FF4A17] hover:border-[#FF4A17] transition-all shadow-lg">
              <i className="fa-brands fa-youtube text-base" />
            </a>
            <a href="#contact" title="LinkedIn" className="w-11 h-11 border border-white/10 bg-white/5 flex items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-[#FF4A17] hover:border-[#FF4A17] transition-all shadow-lg">
              <i className="fa-brands fa-linkedin-in text-base" />
            </a>
            <a href="#contact" title="Behance" className="w-11 h-11 border border-white/10 bg-white/5 flex items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-[#FF4A17] hover:border-[#FF4A17] transition-all shadow-lg">
              <i className="fa-brands fa-behance text-base" />
            </a>
          </div>
        </div>
      </div>

      {/* ── 2. MAIN FOOTER 5 COLUMNS ── */}
      <div className="max-w-7xl mx-auto px-6 pb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-sm">
          
          {/* Column 1: Contact Us */}
          <div className="space-y-4 border-l-2 border-[#FF4A17] pl-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Contact Us</h4>
            <div className="space-y-3 text-zinc-400 text-xs leading-relaxed font-light pt-2">
              <p className="font-bold text-white text-sm">MyAdSphere HQ</p>
              <p>Hyderabad, India · Global Operations</p>
              <p className="text-zinc-300 font-mono hover:text-[#FF4A17] transition-colors cursor-pointer">contact@myadsphere.com</p>
              <p className="text-zinc-300 font-mono">+91 9849490777</p>
            </div>
          </div>

          {/* Column 2: Overview */}
          <div>
            <h4 className="text-xs font-bold text-white mb-6 uppercase tracking-[0.2em]">Overview</h4>
            <ul className="space-y-3 text-xs text-zinc-400 font-medium">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-white transition-colors">Our Work</Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('team')} className="hover:text-white transition-colors">Team</button>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Career</Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Growth Solutions */}
          <div>
            <h4 className="text-xs font-bold text-white mb-6 uppercase tracking-[0.2em]">Growth Solutions</h4>
            <ul className="space-y-3 text-xs text-zinc-400 font-medium">
              <li><Link href="/services/performance-marketing" className="hover:text-white transition-colors">Performance Marketing</Link></li>
              <li><Link href="/services/paid-advertising" className="hover:text-white transition-colors">Paid Ads Engine (PPC)</Link></li>
              <li><Link href="/services/lead-generation" className="hover:text-white transition-colors">Lead Generation Systems</Link></li>
              <li><Link href="/services/conversion-optimization" className="hover:text-white transition-colors">Conversion Rate Optimization</Link></li>
              <li><Link href="/services/analytics" className="hover:text-white transition-colors">Analytics & GA4 Dashboards</Link></li>
            </ul>
          </div>

          {/* Column 4: Organic & Creative */}
          <div>
            <h4 className="text-xs font-bold text-white mb-6 uppercase tracking-[0.2em]">Organic & Creative</h4>
            <ul className="space-y-3 text-xs text-zinc-400 font-medium">
              <li><Link href="/services/seo" className="hover:text-white transition-colors">SEO & Organic Scaling</Link></li>
              <li><Link href="/services/content-marketing" className="hover:text-white transition-colors">Content Marketing & Strategy</Link></li>
              <li><Link href="/services/social-media-marketing" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link href="/services/brand-strategy" className="hover:text-white transition-colors">Brand Strategy & Creative</Link></li>
            </ul>
          </div>

          {/* Column 5: Industries */}
          <div>
            <h4 className="text-xs font-bold text-white mb-6 uppercase tracking-[0.2em]">Industries</h4>
            <ul className="space-y-3 text-xs text-zinc-400 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">E-Commerce & D2C</li>
              <li className="hover:text-white transition-colors cursor-pointer">SaaS & Enterprise B2B</li>
              <li className="hover:text-white transition-colors cursor-pointer">Healthcare & Wellness</li>
              <li className="hover:text-white transition-colors cursor-pointer">Real Estate & Property</li>
              <li className="hover:text-white transition-colors cursor-pointer">Education & EdTech</li>
              <li className="hover:text-white transition-colors cursor-pointer">FinTech & Financials</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hospitality & Retail</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── 3. GIANT BACKDROP OUTLINE TYPOGRAPHY (RESPONSIVE FLUID SCALING) ── */}
      <div className="relative w-full overflow-hidden flex items-center justify-center select-none pt-4 pb-12 pointer-events-none z-0">
        
        {/* Atmosphere glow behind giant text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1000px] h-[300px] bg-gradient-to-r from-[#FF4A17]/25 via-purple-900/20 to-[#FF4A17]/25 blur-[100px] rounded-full" />
        </div>

        <span 
          className="font-[family-name:var(--font-poppins)] text-[10.5vw] sm:text-[14vw] md:text-[17vw] font-black text-transparent tracking-tighter leading-none whitespace-nowrap opacity-40 drop-shadow-[0_0_35px_rgba(255,74,23,0.3)] max-w-full"
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.35)' }}
        >
          MYADSPHERE
        </span>
      </div>

      {/* ── 4. BOTTOM LEGAL BAR ── */}
      <div className="border-t border-white/10 py-6 px-6 relative z-10 bg-black/95">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#contact" className="hover:text-zinc-300 transition-colors">Terms & Conditions</Link>
          </div>
          <p>© {new Date().getFullYear()}. MyAdSphere. All Rights Reserved.</p>
        </div>
      </div>

    </footer>
  );
}
