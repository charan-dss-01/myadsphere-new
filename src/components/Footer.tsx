'use client';

import React from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const footerData = {
  brand: {
    name: "myadsphere",
    description:
      "A digital growth agency combining strategy, creative, performance marketing, technology, and AI to help ambitious brands build stronger digital presence and achieve measurable growth."
  },

  contact: {
    title: "Hyderabad Office",
    phone: {
      label: "+91 94949 80096",
      href: "tel:+919494980096"
    },
    email: {
      label: "info@myadsphere.in",
      href: "mailto:info@myadsphere.in"
    },
    address: {
      label:
        "4th Floor, OYO Workflo, Bizness Square, HITEX Road Junction, Hitech City Rd, Opposite HITEX, Kondapur, Hyderabad, Telangana 500081",
      href:
        "https://www.google.com/maps/search/?api=1&query=myadsphere&query_place_id=ChIJY0iH8SmTyzsR2ufmiM5qSbw"
    }
  },

  columns: [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Our Work", href: "/our-work" },
        { label: "Team", href: "/#team" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Brand & Creative",
      links: [
        { label: "Branding & Identity", href: "/services/branding-identity" },
        { label: "Content & Creative Production", href: "/services/content-creative-production" },
        { label: "Social Media Marketing", href: "/services/social-media-marketing" },
        { label: "PR & Media", href: "/services/pr-media" }
      ]
    },
    {
      title: "Web & Organic Growth",
      links: [
        { label: "Website Design & Development", href: "/services/website-design-development" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "Search Engine Optimization (SEO)", href: "/services/seo" },
        { label: "Lead Generation & Funnels", href: "/services/lead-generation" }
      ]
    },
    {
      title: "Paid Media",
      links: [
        { label: "Performance Marketing", href: "/services/performance-marketing" },
        { label: "Google Ads / PPC", href: "/services/google-ads-ppc" },
        { label: "Meta Ads", href: "/services/meta-ads" }
      ]
    },
    {
      title: "Technology & AI",
      links: [
        { label: "AI Solutions & Automation", href: "/services/ai-solutions-automation" }
      ]
    }
  ],

  industries: [
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "E-commerce", href: "/industries/ecommerce" },
    { label: "Hospitality", href: "/industries/hospitality" },
    { label: "Education", href: "/industries/education" },
    { label: "SaaS & Technology", href: "/industries/saas-technology" },
    { label: "Professional Services", href: "/industries/professional-services" }
  ],

  socialLinks: [
    { name: "Instagram", href: "https://www.instagram.com/myadsphere.in/", icon: "fa-brands fa-instagram" },
    { name: "Facebook", href: "https://www.facebook.com/myadsphere.in/", icon: "fa-brands fa-facebook-f" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "fa-brands fa-linkedin-in" },
    { name: "YouTube", href: "#", icon: "fa-brands fa-youtube" }
  ],

  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-of-service" }
  ],

  copyright: "© 2026 myadsphere Private Limited. All Rights Reserved."
};

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden pt-20 border-t border-white/15 select-none">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* ── 1. BRAND & HYDERABAD OFFICE CONTACT HEADER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <img 
                src="/assets/logo.svg" 
                alt="MyAdSphere" 
                className="h-9 md:h-12 w-auto object-contain" 
              />
            </Link>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light max-w-md">
              {footerData.brand.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {footerData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-11 h-11 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#FF4A17] hover:bg-[#FF4A17]/10 transition-all duration-300 shadow-md"
                >
                  <i className={`${social.icon} text-base`} />
                </a>
              ))}
            </div>
          </div>

          {/* Hyderabad Office Card */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-zinc-950/80 p-6 md:p-8 space-y-4 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-[#FF4A17]">
                <MapPin size={18} />
                <span className="text-sm font-sans font-bold uppercase tracking-widest">
                  {footerData.contact.title}
                </span>
              </div>
              <a
                href={footerData.contact.address.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                View on Google Maps <ArrowUpRight size={14} />
              </a>
            </div>

            <a
              href={footerData.contact.address.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-zinc-200 text-sm md:text-base font-light leading-relaxed hover:text-white transition-colors"
            >
              {footerData.contact.address.label}
            </a>

            <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-white/10 text-sm font-sans">
              <a
                href={footerData.contact.phone.href}
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-[#FF4A17] transition-colors"
              >
                <Phone size={16} className="text-[#FF4A17]" />
                <span>{footerData.contact.phone.label}</span>
              </a>
              <a
                href={footerData.contact.email.href}
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-[#FF4A17] transition-colors"
              >
                <Mail size={16} className="text-[#FF4A17]" />
                <span>{footerData.contact.email.label}</span>
              </a>
            </div>
          </div>

        </div>

        {/* ── 2. MAIN CATEGORY COLUMNS (Company, Brand & Creative, Web & Organic, Paid Media, Technology & AI) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {footerData.columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-[0.15em] font-sans border-b border-white/10 pb-2">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm text-zinc-300 font-light">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white hover:translate-x-1 transition-all inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── 3. INDUSTRIES WE SERVE ── */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-[0.15em] font-sans">
            Industries We Serve
          </h4>
          <div className="flex flex-wrap gap-3">
            {footerData.industries.map((ind) => (
              <Link
                key={ind.label}
                href={ind.href}
                className="px-4 py-2 rounded-full border border-white/10 bg-zinc-950 text-sm text-zinc-300 hover:text-white hover:border-[#FF4A17] transition-colors"
              >
                {ind.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* ── 4. BOTTOM LEGAL & COPYRIGHT BAR ── */}
      <div className="border-t border-white/10 py-6 px-6 relative z-10 bg-black mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-zinc-400">
          
          {/* LEFT: Circular Badge N + Copyright */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full border border-white/20 bg-zinc-950 flex items-center justify-center text-[11px] font-bold text-white font-sans shrink-0 shadow-md">
              N
            </div>
            <p className="text-zinc-400 text-xs md:text-sm font-light">
              {footerData.copyright}
            </p>
          </div>

          {/* RIGHT: Legal Links */}
          <div className="flex items-center gap-3 text-xs md:text-sm text-zinc-400 font-light">
            <Link href="/privacy-policy" className="hover:text-[#FF4A17] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-600">•</span>
            <Link href="/terms-of-service" className="hover:text-[#FF4A17] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
