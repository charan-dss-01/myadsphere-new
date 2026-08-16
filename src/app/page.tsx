'use client'
import { useState, useEffect } from 'react';
import HeroSection from "@/components/HeroSection";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import About from "@/components/About";
import TestmonialCards from "@/components/TestmonialCards";
import Projects from "@/components/Projects";
import Skills from "@/components/FeturedCourses";
import WhyMyAdSphere from "@/components/WhyMyAdSphere";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/ui/loader";
import CinematicIntro from '@/components/CinematicIntro';
import { motion, AnimatePresence } from 'motion/react';

// ── Helpers ───────────────────────────────────────────────────────────────
const SectionWrapper = ({ id, children, number, label }: { id: string, children: React.ReactNode, number: string, label: string }) => {
  return (
    <motion.section 
      id={id} 
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Creative Section Indicator */}
      <div className="absolute top-10 left-6 md:left-12 z-20 hidden md:flex items-center gap-4">
         <span className="text-[#FF4A17] font-mono text-xs font-bold tracking-widest">{number}</span>
         <div className="h-px w-8 bg-zinc-800" />
         <span className="text-zinc-400 font-bold uppercase text-[10px] tracking-[0.4em]">{label}</span>
      </div>

      {/* Large Background Number (Ghost) */}
      <div className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.03]">
         <span className="text-[200px] md:text-[350px] font-black text-[#FF4A17] leading-none -translate-y-1/4 block">
            {number}
         </span>
      </div>

      {children}

      {/* Connection Line between sections */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#FF4A17]/30 to-transparent z-10" />
    </motion.section>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [introCompleted, setIntroCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="relative bg-black scroll-smooth">
      <AnimatePresence mode="wait">
        {!introCompleted && (
          <CinematicIntro key="intro" onComplete={() => setIntroCompleted(true)} />
        )}
      </AnimatePresence>

      <motion.div 
        className="min-h-screen p-0 m-0 bg-black antialiased overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: introCompleted ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ pointerEvents: introCompleted ? "auto" : "none" }}
      >
        <SectionWrapper id="home" number="01" label="Intro">
          <HeroSection />
        </SectionWrapper>
        
        {/* Infinite Client Logos Marquee Banner */}
        <ClientLogosMarquee />
        
        <SectionWrapper id="about" number="02" label="Agency">
          <About />
        </SectionWrapper>
        
        <SectionWrapper id="skills" number="03" label="Services">
          <Skills />
        </SectionWrapper>

        {/* Why MyAdSphere Pillar Section */}
        <WhyMyAdSphere />
        
        <SectionWrapper id="journey" number="04" label="Reviews">
          <TestmonialCards />
        </SectionWrapper>

        <SectionWrapper id="projects" number="05" label="Work">
          <Projects />
        </SectionWrapper>
        
        <SectionWrapper id="faq" number="06" label="FAQ">
          <FAQ />
        </SectionWrapper>

        <SectionWrapper id="team" number="07" label="Team">
          <Team />
        </SectionWrapper>

        <SectionWrapper id="contact" number="08" label="Growth">
          <Contact />
        </SectionWrapper>

        {/* Agency Footer */}
        <Footer />

        {/* Global Floating Contact Pill */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="fixed bottom-8 right-8 z-50 hidden md:block"
        >
           <a 
             href="#contact"
             className="px-6 py-3 rounded-full bg-[#FF4A17]/85 backdrop-blur-xl border border-[#FF4A17]/60 text-white font-bold text-[10px] uppercase tracking-[0.3em] shadow-[0_0_25px_rgba(255,74,23,0.45)] hover:bg-[#FF4A17] hover:shadow-[0_0_35px_rgba(255,74,23,0.65)] hover:scale-105 transition-all duration-300"
           >
              Start a Project
           </a>
        </motion.div>

      </motion.div>
    </main>
  );
}
