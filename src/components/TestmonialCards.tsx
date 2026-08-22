'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';

// ── Client Testimonials Data ──────────────────────────────────────────────
const clientReviews = [
  {
    rating: "5.0 ★",
    title: "Stronger Digital Presence",
    client: "Rahul Reddy",
    role: "Real Estate Client, Hyderabad",
    desc: "Myadsphere helped us improve our complete digital presence with better strategy, content, and campaigns. Special thanks to Satwik for coordinating everything smoothly and always responding quickly.",
    icon: "🚀",
  },
  {
    rating: "5.0 ★",
    title: "Improved Google Visibility",
    client: "Arjun Kumar",
    role: "Healthcare Business, Hyderabad",
    desc: "We worked with Myadsphere for SEO services in Hyderabad and saw a clear improvement in our Google search visibility. Akhil was very supportive and explained the SEO work in a simple and transparent way.",
    icon: "🔍",
  },
  {
    rating: "5.0 ★",
    title: "Professional Website Experience",
    client: "Vikram Rao",
    role: "Professional Services",
    desc: "Myadsphere designed and developed a clean, responsive, and professional website for our company. Charan handled the development very well and made sure everything worked properly across mobile and desktop.",
    icon: "💻",
  },
  {
    rating: "5.0 ★",
    title: "Better Quality Leads",
    client: "Karthik Reddy",
    role: "Real Estate Business",
    desc: "The Myadsphere team helped us restructure our lead generation campaigns and focus more on lead quality. Satwik understood our business requirements and kept the entire process well organized.",
    icon: "⚡",
  },
  {
    rating: "5.0 ★",
    title: "Social Media Transformation",
    client: "Priya Sharma",
    role: "Fashion & Lifestyle Brand",
    desc: "Our social media presence improved significantly after working with Myadsphere. The content became much more professional and consistent. Greeshma understood our brand style very well.",
    icon: "📱",
  },
  {
    rating: "5.0 ★",
    title: "Smarter Google Ads",
    client: "Rohit Varma",
    role: "Education Business",
    desc: "We approached Myadsphere for Google Ads management in Hyderabad. The campaigns were structured properly and the team continuously worked on improving performance. Susuhanth was very responsive throughout.",
    icon: "📈",
  },
  {
    rating: "5.0 ★",
    title: "Smooth Website Development",
    client: "Naveen Reddy",
    role: "Hospitality Business",
    desc: "Very good experience with Myadsphere for website development in Hyderabad. Charan understood our technical requirements clearly and delivered a modern, fast, and mobile-friendly website.",
    icon: "🌐",
  },
  {
    rating: "5.0 ★",
    title: "Better Local SEO Presence",
    client: "Sandeep Kumar",
    role: "Local Business, Hyderabad",
    desc: "Myadsphere helped us with local SEO and Google Business Profile optimization. We started seeing better visibility for relevant local searches. Thanks to Akhil for the regular updates and support.",
    icon: "📍",
  },
  {
    rating: "5.0 ★",
    title: "Better Meta Ads Strategy",
    client: "Aditya Rao",
    role: "E-Commerce Business",
    desc: "We worked with Myadsphere for Facebook and Instagram advertising. Their Meta Ads strategy, audience targeting, creative testing, and regular optimization made the overall campaign process much better.",
    icon: "🎯",
  },
  {
    rating: "5.0 ★",
    title: "Brand Identity Upgrade",
    client: "Ananya Reddy",
    role: "Beauty & Lifestyle Brand",
    desc: "Myadsphere helped us create a more professional brand identity. From visual direction to creative execution, everything was handled carefully. Greeshma was especially helpful throughout the creative process.",
    icon: "🏆",
  },
  {
    rating: "5.0 ★",
    title: "Reliable Digital Marketing Team",
    client: "Sai Krishna",
    role: "Business Services",
    desc: "Myadsphere has been a reliable digital marketing agency in Hyderabad for our business. They supported us with SEO, social media marketing, and paid campaigns. Satwik maintained excellent communication throughout.",
    icon: "🤝",
  },
  {
    rating: "5.0 ★",
    title: "Website Built Right",
    client: "Mahesh Reddy",
    role: "Construction & Interiors",
    desc: "Our new website looks much more professional and performs well across devices. Charan handled the technical development properly and was quick to implement the changes we requested.",
    icon: "🖥️",
  },
  {
    rating: "5.0 ★",
    title: "Better Performance Marketing",
    client: "Abhishek Reddy",
    role: "Technology Business",
    desc: "Myadsphere helped us improve our performance marketing approach with better campaign structure, targeting, and reporting. Akhil was always available to explain the performance and next steps clearly.",
    icon: "📊",
  },
  {
    rating: "5.0 ★",
    title: "Consistent Social Media Growth",
    client: "Sneha Patel",
    role: "Healthcare & Wellness",
    desc: "We chose Myadsphere for social media marketing in Hyderabad and were impressed with the creative quality and consistency. Greeshma did a great job understanding our audience and content requirements.",
    icon: "📲",
  },
  {
    rating: "5.0 ★",
    title: "Better Paid Campaign Strategy",
    client: "Harish Kumar",
    role: "Real Estate Business",
    desc: "Myadsphere managed both our Google Ads and Meta Ads campaigns. Their approach was structured and focused on continuous optimization instead of simply increasing ad spend. Special thanks to Susuhanth.",
    icon: "💹",
  },
  {
    rating: "5.0 ★",
    title: "Stronger Local Search Presence",
    client: "Ramesh Reddy",
    role: "Healthcare Business, Hyderabad",
    desc: "Our Google Business Profile and local SEO needed improvement. Myadsphere helped optimize both our profile and website for local searches. Akhil handled the complete process professionally.",
    icon: "🔎",
  },
  {
    rating: "5.0 ★",
    title: "Clean UI/UX & Development",
    client: "Varun Gupta",
    role: "SaaS & Technology",
    desc: "Myadsphere helped redesign our website with a much cleaner UI/UX and user journey. Charan made sure the final development matched the design and worked smoothly on mobile and desktop.",
    icon: "✨",
  },
  {
    rating: "5.0 ★",
    title: "Creative That Fits Our Brand",
    client: "Divya Sharma",
    role: "Fashion Brand",
    desc: "The creative quality from Myadsphere has been excellent. Their team handled our social media content, campaign creatives, and brand communication very well. Greeshma deserves special appreciation for understanding our vision.",
    icon: "🎨",
  },
  {
    rating: "5.0 ★",
    title: "Improved Lead Generation",
    client: "Praveen Reddy",
    role: "Property & Real Estate",
    desc: "We worked with Myadsphere for performance marketing and lead generation in Hyderabad. The campaigns became much more organized and focused on relevant enquiries. Satwik and Susuhanth were very supportive.",
    icon: "⚡",
  },
  {
    rating: "5.0 ★",
    title: "Complete Digital Growth Support",
    client: "Nikhil Rao",
    role: "Growing Business, Hyderabad",
    desc: "Myadsphere supported us across SEO, Google Ads, Meta Ads, website development, and branding. Having one team manage everything made the process much easier. Special appreciation to Satwik, Charan, Akhil, Susuhanth, and Greeshma.",
    icon: "🚀",
  },
];

// ── Main Component ────────────────────────────────────────────────────────
export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicating items for infinite effect
  const duplicatedReviews = [...clientReviews, ...clientReviews];

  return (
    <section id="journey" className="relative bg-black py-32 px-4 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-24 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
            <span className="text-[90px] md:text-[140px] font-black text-transparent tracking-tighter leading-none"
              style={{ WebkitTextStroke: '1px rgba(255,74,23,0.08)' }}>
              REVIEWS
            </span>
          </div>
          <div className="relative z-10 pt-10">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#FF4A17]/40" />
              <p className="text-[10px] text-[#FF4A17] tracking-[0.4em] uppercase font-bold">Client Impact</p>
              <div className="h-px w-8 bg-[#FF4A17]/40" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                What Brands Say
              </span>
            </h2>
          </div>
        </div>

        {/* ── Scrolling Timeline / Testimonials Container ── */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused] py-10">
            {duplicatedReviews.map((review, i) => (
              <div
                key={i}
                className="w-[320px] md:w-[400px] flex-shrink-0 group relative rounded-2xl border border-white/[0.12] bg-zinc-950/80 backdrop-blur-md p-8 hover:border-[#FF4A17]/50 hover:bg-zinc-900/90 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Rating & Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 rounded-md bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[11px] font-bold text-[#FF4A17] tracking-widest uppercase">
                      {review.rating}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF4A17]/20 to-transparent border border-[#FF4A17]/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {review.icon}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-white text-xl font-bold tracking-tight mb-1">
                      {review.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed font-normal mb-6">
                    &quot;{review.desc}&quot;
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-bold text-sm">{review.client}</p>
                  <p className="text-[#FF4A17] text-xs font-medium">{review.role}</p>
                </div>

                {/* Subtle shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 opacity-0 group-hover:opacity-5 group-hover:animate-[shine_1.5s_ease-in-out] pointer-events-none bg-gradient-to-r from-transparent via-[#FF4A17] to-transparent -skew-x-12" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="mt-16 text-center">
          <div className="flex flex-col items-center">
            <div className="h-12 w-px bg-gradient-to-b from-[#FF4A17]/50 to-transparent mb-6" />
            <h3 className="text-xl font-bold text-zinc-300 tracking-tight italic">
              &quot;Engineered for maximum ROI and predictable growth.&quot;
            </h3>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 16px)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
}
