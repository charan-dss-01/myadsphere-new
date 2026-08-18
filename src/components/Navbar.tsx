'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  ChevronDown, 
  Menu as MenuIcon, 
  X, 
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Categories for Mega-Menu Dropdown
const serviceCategories = [
  {
    title: "Performance & Ads",
    items: [
      { name: "Performance Marketing", desc: "Full-funnel data-driven acquisition", href: "/services/performance-marketing" },
      { name: "Google Ads / PPC", desc: "High-intent search & Shopping campaigns", href: "/services/google-ads-ppc" },
      { name: "Meta Ads", desc: "Facebook & Instagram conversion scaling", href: "/services/meta-ads" },
      { name: "Lead Generation & Funnels", desc: "Targeted B2B pipeline systems", href: "/services/lead-generation" },
      { name: "E-commerce Marketing", desc: "Scaling D2C revenue & return on spend", href: "/services/ecommerce-marketing" }
    ]
  },
  {
    title: "Organic & Creative",
    items: [
      { name: "Branding & Identity", desc: "Positioning & visual guidelines", href: "/services/branding-identity" },
      { name: "Content & Creative", desc: "Ad creatives, videos & copywriting", href: "/services/content-creative-production" },
      { name: "Social Media Marketing", desc: "Strategic publishing & engagement", href: "/services/social-media-marketing" },
      { name: "Search Engine Optimization (SEO)", desc: "Technical & organic search dominance", href: "/services/seo" }
    ]
  },
  {
    title: "Development & Intelligence",
    items: [
      { name: "Website Design & Dev", desc: "Fast, conversion-focused websites", href: "/services/website-design-development" },
      { name: "Marketing Automation & CRM", desc: "Automated workflows & customer journeys", href: "/services/marketing-automation-crm" },
      { name: "AI Solutions & Automation", desc: "AI agents & intelligent chatbots", href: "/services/ai-solutions-automation" }
    ]
  }
];

export default function Navbar({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomeActive = pathname === "/";
  const isServicesActive = pathname.startsWith("/services");
  const isWorkActive = pathname.startsWith("/our-work");
  const isAboutActive = pathname.startsWith("/about");
  const isCareerActive = pathname.startsWith("/careers");

  return (
    <>
      {/* ── MOBILE HEADER BAR (< md) ── */}
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-3.5 bg-black/90 backdrop-blur-2xl border-b border-white/10 md:hidden">
        <Link href="/" onClick={() => setIsSidebarOpen(false)} className="flex items-center hover:opacity-90 transition-opacity">
          <img 
            src="/assets/logo.svg" 
            alt="MyAdSphere" 
            className="h-5 sm:h-6 w-auto object-contain" 
          />
        </Link>
        <button
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isSidebarOpen ? <X size={18} /> : <MenuIcon size={18} />}
        </button>
      </div>

      {/* ── DESKTOP & TABLET FLOATING GLASS NAVBAR (>= md) ── */}
      <div className={cn("fixed top-4 md:top-6 inset-x-0 max-w-5xl mx-auto px-4 z-50 hidden md:block transition-all duration-500", className)}>
        <div 
          className={cn(
            "relative flex items-center justify-between px-6 md:px-8 py-3 rounded-full border transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.85)]",
            scrolled 
              ? "bg-zinc-950/90 backdrop-blur-2xl border-white/15" 
              : "bg-zinc-950/75 backdrop-blur-xl border-white/10"
          )}
        >
          {/* Glossy Top Specular Reflection Highlight */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />

          {/* Brand Logo Asset (Perfectly Proportioned Logo Height: 36px–40px) */}
          <Link 
            href="/" 
            className="relative z-10 flex items-center hover:opacity-90 transition-opacity shrink-0 mr-4 md:mr-6 lg:mr-8"
          >
            <img 
              src="/assets/logo.svg" 
              alt="MyAdSphere" 
              className="h-6 md:h-7 lg:h-[28px] xl:h-8 w-auto object-contain transition-all duration-300" 
            />
          </Link>

          {/* Desktop & Tablet Navigation Links */}
          <nav className="relative z-10 flex items-center space-x-3 md:space-x-5 lg:space-x-7 text-xs font-medium tracking-wide">
            
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

            {/* Services Dropdown */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className={cn(
                  "flex items-center gap-1 relative transition-colors duration-300",
                  isServicesActive || isServicesOpen ? "text-white font-bold" : "text-zinc-400 hover:text-white"
                )}
              >
                <span>Services</span>
                <ChevronDown size={12} className={cn("transition-transform duration-300", isServicesOpen ? "rotate-180 text-[#FF4A17]" : "")} />
                {isServicesActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF4A17] shadow-[0_0_8px_#FF4A17]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Mega-Menu Dropdown */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full -left-20 mt-3 w-[580px] p-6 rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] grid grid-cols-2 gap-6 z-50"
                  >
                    {serviceCategories.map((cat) => (
                      <div key={cat.title} className="space-y-2">
                        <p className="text-[10px] font-bold text-[#FF4A17] uppercase tracking-widest border-b border-white/10 pb-1.5">
                          {cat.title}
                        </p>
                        <div className="space-y-2 pt-1">
                          {cat.items.map((item) => (
                            <Link
                              key={item.name} 
                              href={item.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="group block p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                            >
                              <p className="text-xs font-semibold text-zinc-200 group-hover:text-[#FF4A17] transition-colors">
                                {item.name}
                              </p>
                              <p className="text-[10px] text-zinc-500 font-light">
                                {item.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="col-span-2 pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                      <span className="text-zinc-500 text-[10px]">MyAdSphere Growth System</span>
                      <Link 
                        href="/services" 
                        onClick={() => setIsServicesOpen(false)}
                        className="text-[#FF4A17] font-bold hover:underline text-xs flex items-center gap-1"
                      >
                        View All Services ↗
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
          </nav>

          {/* Start a Project CTA Button */}
          <Link
            href="/#contact"
            className="relative z-10 ml-2 md:ml-3 lg:ml-4 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 rounded-full bg-[#FF4A17]/85 backdrop-blur-xl text-white font-bold text-[11px] md:text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,74,23,0.45)] hover:bg-[#FF4A17] hover:shadow-[0_0_35px_rgba(255,74,23,0.65)] hover:scale-105 transition-all duration-300 shrink-0 whitespace-nowrap"
          >
            Start a Project
          </Link>
        </div>
      </div>

      {/* ── MOBILE OVERLAY MENU ── */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-3xl pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto md:hidden"
          >
            <div className="space-y-6">
              <Link 
                href="/" 
                onClick={() => setIsSidebarOpen(false)}
                className="block text-2xl font-black uppercase text-white hover:text-[#FF4A17] transition-colors"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className="w-full flex items-center justify-between text-2xl font-black uppercase text-white hover:text-[#FF4A17] transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={cn("transition-transform duration-300", mobileServicesExpanded ? "rotate-180 text-[#FF4A17]" : "")} />
                </button>

                {mobileServicesExpanded && (
                  <div className="mt-4 pl-4 space-y-4 border-l border-white/10">
                    {serviceCategories.map((cat) => (
                      <div key={cat.title} className="space-y-2">
                        <p className="text-[11px] font-mono text-[#FF4A17] uppercase tracking-wider font-bold">
                          {cat.title}
                        </p>
                        <div className="space-y-2">
                          {cat.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsSidebarOpen(false)}
                              className="block text-sm text-zinc-300 hover:text-white"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/our-work" 
                onClick={() => setIsSidebarOpen(false)}
                className="block text-2xl font-black uppercase text-white hover:text-[#FF4A17] transition-colors"
              >
                Our Work
              </Link>

              <Link 
                href="/about" 
                onClick={() => setIsSidebarOpen(false)}
                className="block text-2xl font-black uppercase text-white hover:text-[#FF4A17] transition-colors"
              >
                About Us
              </Link>

              <Link 
                href="/careers" 
                onClick={() => setIsSidebarOpen(false)}
                className="block text-2xl font-black uppercase text-white hover:text-[#FF4A17] transition-colors"
              >
                Career
              </Link>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <Link
                href="/#contact"
                onClick={() => setIsSidebarOpen(false)}
                className="w-full py-4 rounded-full bg-[#FF4A17] text-white font-bold text-center text-xs uppercase tracking-widest block shadow-[0_0_25px_rgba(255,74,23,0.5)]"
              >
                Start a Project <ArrowUpRight className="inline-block ml-1" size={14} />
              </Link>
              <p className="text-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                MyAdSphere Digital Growth Agency
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
