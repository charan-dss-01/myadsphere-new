'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Menu as MenuIcon, 
  X, 
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  useEffect(() => {
    const checkLoaderState = () => {
      const isVisible = document.body.classList.contains('loader-active') || document.body.classList.contains('intro-active');
      setIsLoaderVisible(isVisible);
    };

    checkLoaderState();

    const observer = new MutationObserver(() => {
      checkLoaderState();
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const isHomeActive = pathname === "/";
  const isServicesActive = pathname.startsWith("/services");
  const isWorkActive = pathname.startsWith("/our-work");
  const isAboutActive = pathname.startsWith("/about");
  const isCareerActive = pathname.startsWith("/careers");
  const isContactActive = pathname.startsWith("/contact");

  if (isLoaderVisible) return null;

  return (
    <>
      {/* ── MOBILE HEADER BAR (< md) ── */}
      <div className="fixed top-3 sm:top-4 inset-x-4 z-50 md:hidden transition-all duration-500">
        <div 
          className={cn(
            "relative flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border transition-all duration-500 overflow-hidden backdrop-blur-[24px] backdrop-saturate-[180%] backdrop-contrast-125 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.5)]",
            scrolled 
              ? "bg-[#0a0a0a]/85 border-white/[0.22] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35),0_24px_50px_rgba(0,0,0,0.8)]" 
              : "bg-white/[0.08] border-white/[0.18] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.28),0_16px_36px_rgba(0,0,0,0.45)]"
          )}
        >
          {/* iOS Liquid Glass Top Sheen */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.15] via-transparent to-transparent pointer-events-none" />

          {/* Mobile Logo */}
          <Link href="/" onClick={() => setIsSidebarOpen(false)} className="relative z-10 flex items-center group">
            <img 
              src="/assets/logo.svg" 
              alt="MyAdSphere" 
              className="h-6 sm:h-7 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.08] filter drop-shadow-[0_0_8px_rgba(255,255,255,0.12)]" 
            />
          </Link>

          {/* Right Controls: "Let's Talk" Button + Toggle */}
          <div className="relative z-10 flex items-center gap-2">
            <Link
              href="/contact"
              onClick={() => setIsSidebarOpen(false)}
              className="px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-all duration-300 shadow-md active:scale-95 shrink-0"
            >
              Let&apos;s Talk
            </Link>

            <button
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors shrink-0"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isSidebarOpen ? <X size={16} /> : <MenuIcon size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── DESKTOP & TABLET FLOATING GLASS NAVBAR (>= md) ── */}
      <div className={cn("fixed top-4 md:top-6 inset-x-0 max-w-4xl mx-auto px-4 z-50 hidden md:block transition-all duration-500", className)}>
        <div 
          className={cn(
            "relative flex items-center justify-between px-6 md:px-10 py-3.5 rounded-full border transition-all duration-500 overflow-hidden backdrop-blur-[24px] backdrop-saturate-[180%] backdrop-contrast-125 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.3),inset_0_-1px_1px_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.5)]",
            scrolled 
              ? "bg-[#0a0a0a]/75 border-white/[0.22] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35),0_24px_50px_rgba(0,0,0,0.8)]" 
              : "bg-white/[0.08] border-white/[0.18] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.28),0_16px_36px_rgba(0,0,0,0.45)]"
          )}
        >
          {/* iOS Liquid Glass Top Sheen */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.15] via-transparent to-transparent pointer-events-none" />
          
          {/* Brand Logo Asset (Neat Hover Zoom Effect) */}
          <Link 
            href="/" 
            className="relative z-10 flex items-center shrink-0 mr-8 md:mr-12 lg:mr-16 group"
          >
            <img 
              src="/assets/logo.svg" 
              alt="MyAdSphere" 
              className="h-6 md:h-7 lg:h-[28px] xl:h-8 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.08] filter drop-shadow-[0_0_8px_rgba(255,255,255,0.12)]" 
            />
          </Link>

          {/* Desktop & Tablet Navigation Links (Spread Evenly) */}
          <nav className="relative z-10 flex items-center justify-between flex-1 text-xs font-medium tracking-wide">
            
            {/* Home */}
            <Link
              href="/"
              className={cn(
                "relative py-1 transition-colors duration-300 flex flex-col items-center",
                isHomeActive ? "text-white font-bold" : "text-zinc-400 hover:text-white"
              )}
            >
              <span>Home</span>
              {isHomeActive && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4A17] shadow-[0_0_8px_#FF4A17]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Services (Direct Link without Dropdown) */}
            <Link
              href="/services"
              className={cn(
                "relative py-1 transition-colors duration-300 flex flex-col items-center",
                isServicesActive ? "text-white font-bold" : "text-zinc-400 hover:text-white"
              )}
            >
              <span>Services</span>
              {isServicesActive && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4A17] shadow-[0_0_8px_#FF4A17]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Our Work */}
            <Link
              href="/our-work"
              className={cn(
                "relative py-1 transition-colors duration-300 flex flex-col items-center",
                isWorkActive ? "text-white font-bold" : "text-zinc-400 hover:text-white"
              )}
            >
              <span>Our Work</span>
              {isWorkActive && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4A17] shadow-[0_0_8px_#FF4A17]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={cn(
                "relative py-1 transition-colors duration-300 flex flex-col items-center",
                isAboutActive ? "text-white font-bold" : "text-zinc-400 hover:text-white"
              )}
            >
              <span>About Us</span>
              {isAboutActive && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4A17] shadow-[0_0_8px_#FF4A17]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Career */}
            <Link
              href="/careers"
              className={cn(
                "relative py-1 transition-colors duration-300 flex flex-col items-center",
                isCareerActive ? "text-white font-bold" : "text-zinc-400 hover:text-white"
              )}
            >
              <span>Career</span>
              {isCareerActive && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4A17] shadow-[0_0_8px_#FF4A17]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={cn(
                "relative py-1 transition-colors duration-300 flex flex-col items-center",
                isContactActive ? "text-white font-bold" : "text-zinc-400 hover:text-white"
              )}
            >
              <span>Contact</span>
              {isContactActive && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4A17] shadow-[0_0_8px_#FF4A17]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </nav>
        </div>
      </div>

      {/* ── MOBILE OVERLAY MENU DRAWER ── */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-16 sm:top-20 z-40 bg-[#0a0a0a]/95 border border-white/15 backdrop-blur-3xl rounded-3xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col justify-between max-h-[calc(100vh-5.5rem)] overflow-y-auto md:hidden"
          >
            {/* Menu Links List */}
            <div className="space-y-2">
              <Link 
                href="/" 
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-200",
                  isHomeActive ? "bg-white/15 text-white font-black" : "text-zinc-300 hover:text-white hover:bg-white/5"
                )}
              >
                Home
              </Link>

              <Link 
                href="/services" 
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-200",
                  isServicesActive ? "bg-white/15 text-white font-black" : "text-zinc-300 hover:text-white hover:bg-white/5"
                )}
              >
                Services
              </Link>

              <Link 
                href="/our-work" 
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-200",
                  isWorkActive ? "bg-white/15 text-white font-black" : "text-zinc-300 hover:text-white hover:bg-white/5"
                )}
              >
                Case Study
              </Link>

              <Link 
                href="/about" 
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-200",
                  isAboutActive ? "bg-white/15 text-white font-black" : "text-zinc-300 hover:text-white hover:bg-white/5"
                )}
              >
                About Us
              </Link>

              <Link 
                href="/careers" 
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-200",
                  isCareerActive ? "bg-white/15 text-white font-black" : "text-zinc-300 hover:text-white hover:bg-white/5"
                )}
              >
                Career
              </Link>

              <Link 
                href="/contact" 
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-200",
                  isContactActive ? "bg-[#222222] text-white font-black" : "text-zinc-300 hover:text-white hover:bg-white/5"
                )}
              >
                Contact
              </Link>
            </div>

            {/* Bottom Full-Width "Let's Talk" CTA Button */}
            <div className="pt-6 mt-4 border-t border-white/10">
              <Link 
                href="/contact" 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full py-3.5 rounded-full bg-white text-black font-bold text-sm text-center block hover:bg-zinc-200 transition-all duration-300 shadow-xl active:scale-[0.98]"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
