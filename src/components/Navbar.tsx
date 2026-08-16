"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const serviceCategories = [
  {
    title: "Performance",
    items: [
      { name: "Performance Marketing", desc: "Paid social & search acquisition", href: "/services/performance-marketing" },
      { name: "Paid Advertising Engine", desc: "High-ROI Google & Meta ad scaling", href: "/services/paid-advertising" },
      { name: "Lead Generation Systems", desc: "High-intent customer pipelines", href: "/services/lead-generation" }
    ]
  },
  {
    title: "Organic Growth",
    items: [
      { name: "SEO & Organic Scaling", desc: "Search engine rank domination", href: "/services/seo" },
      { name: "Content Marketing", desc: "Authority & audience building", href: "/services/content-marketing" },
      { name: "Social Media Marketing", desc: "Brand reach & engagement", href: "/services/social-media-marketing" }
    ]
  },
  {
    title: "Creative & Brand",
    items: [
      { name: "Brand Strategy & Creative", desc: "Distinguished brand positioning", href: "/services/brand-strategy" }
    ]
  },
  {
    title: "Intelligence & CRO",
    items: [
      { name: "Conversion Optimization (CRO)", desc: "A/B testing & UX refinement", href: "/services/conversion-optimization" },
      { name: "Analytics & Intelligence", desc: "Attribution & Looker dashboards", href: "/services/analytics" }
    ]
  }
];

function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to determine if a route is active
  const isHomeActive = pathname === "/";
  const isServicesActive = pathname.startsWith("/services");
  const isWorkActive = pathname.startsWith("/our-work");
  const isAboutActive = pathname.startsWith("/about");
  const isCareerActive = pathname.startsWith("/careers");

  return (
    <>
      {/* ── MOBILE HEADER BAR ── */}
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 bg-black/90 backdrop-blur-2xl border-b border-white/10 md:hidden">
        <Link href="/" onClick={() => setIsSidebarOpen(false)} className="flex items-center hover:opacity-90 transition-opacity pl-2">
          <img 
            src="/assets/logo.png" 
            alt="MyAdSphere" 
            className="h-9 w-auto object-contain scale-[1.4] origin-left" 
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

      {/* ── DESKTOP FLOATING NAVBAR ── */}
      <div className={cn("fixed top-6 inset-x-0 max-w-5xl mx-auto z-50 hidden md:block transition-all duration-500", className)}>
        <div 
          className={cn(
            "flex items-center justify-between px-8 py-3 rounded-full transition-all duration-500",
            scrolled 
              ? "bg-black/90 backdrop-blur-2xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.9)]" 
              : "bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl"
          )}
        >
          {/* Brand Logo Asset */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-90 transition-opacity pl-2 pr-8 shrink-0 h-10 md:h-12 overflow-visible"
          >
            <img 
              src="/assets/logo.png" 
              alt="MyAdSphere" 
              className="h-10 md:h-12 w-auto object-contain scale-[3.2] origin-left transition-transform" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center space-x-7 text-xs font-medium tracking-wide">
            
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
                    className="absolute top-full -left-20 mt-3 w-[580px] p-6 rounded-2xl bg-black/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] grid grid-cols-2 gap-6 z-50"
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
            className="ml-4 px-6 py-2.5 rounded-full bg-[#FF4A17]/85 backdrop-blur-xl border border-[#FF4A17]/60 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,74,23,0.45)] hover:bg-[#FF4A17] hover:shadow-[0_0_35px_rgba(255,74,23,0.65)] hover:scale-105 transition-all duration-300"
          >
            Start a Project
          </Link>
        </div>
      </div>

      {/* ── MOBILE OVERLAY MENU ── */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link href="/" onClick={() => setIsSidebarOpen(false)} className="flex items-center">
                <img src="/assets/logo.png" alt="MyAdSphere" className="h-10 w-auto object-contain" />
              </Link>
              <button 
                onClick={() => setIsSidebarOpen(false)} 
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 my-auto text-center py-8">
              
              <Link
                href="/"
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "text-xl font-bold transition-colors",
                  isHomeActive ? "text-[#FF4A17]" : "text-zinc-300 hover:text-white"
                )}
              >
                Home
              </Link>
              
              {/* Mobile Services Accordion */}
              <div className="w-full text-center">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
                  className={cn(
                    "inline-flex items-center gap-2 text-xl font-bold transition-colors",
                    isServicesActive ? "text-[#FF4A17]" : "text-zinc-300 hover:text-white"
                  )}
                >
                  Services
                  <ChevronDown size={16} className={cn("transition-transform duration-300", isMobileServicesOpen ? "rotate-180 text-[#FF4A17]" : "")} />
                </button>

                {isMobileServicesOpen && (
                  <div className="mt-4 p-4 rounded-xl bg-white/5 space-y-3 text-sm text-zinc-400">
                    <Link href="/services" onClick={() => setIsSidebarOpen(false)} className="block text-[#FF4A17] font-bold">
                      View All Services Overview ↗
                    </Link>
                    <Link href="/services/performance-marketing" onClick={() => setIsSidebarOpen(false)} className="block hover:text-white">
                      Performance Marketing
                    </Link>
                    <Link href="/services/paid-advertising" onClick={() => setIsSidebarOpen(false)} className="block hover:text-white">
                      Paid Advertising Engine
                    </Link>
                    <Link href="/services/seo" onClick={() => setIsSidebarOpen(false)} className="block hover:text-white">
                      SEO & Organic Scaling
                    </Link>
                    <Link href="/services/social-media-marketing" onClick={() => setIsSidebarOpen(false)} className="block hover:text-white">
                      Social Media Scaling
                    </Link>
                    <Link href="/services/analytics" onClick={() => setIsSidebarOpen(false)} className="block hover:text-white">
                      Analytics & CRO
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/our-work"
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "text-xl font-bold transition-colors",
                  isWorkActive ? "text-[#FF4A17]" : "text-zinc-300 hover:text-white"
                )}
              >
                Our Work
              </Link>

              <Link
                href="/about"
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "text-xl font-bold transition-colors",
                  isAboutActive ? "text-[#FF4A17]" : "text-zinc-300 hover:text-white"
                )}
              >
                About Us
              </Link>

              <Link
                href="/careers"
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "text-xl font-bold transition-colors",
                  isCareerActive ? "text-[#FF4A17]" : "text-zinc-300 hover:text-white"
                )}
              >
                Career
              </Link>
            </div>

            <div className="pt-6 border-t border-white/10">
              <Link
                href="/#contact"
                onClick={() => setIsSidebarOpen(false)}
                className="block w-full py-4 rounded-xl bg-[#FF4A17]/90 backdrop-blur-xl border border-[#FF4A17]/60 text-white font-bold text-xs uppercase tracking-widest text-center shadow-[0_0_25px_rgba(255,74,23,0.45)] transition-all"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
