'use client'
import { useState, useEffect } from 'react';
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import TestmonialCards from "@/components/TestmonialCards";
import Projects from "@/components/Projects";
import Skills from "@/components/FeturedCourses";
import Contact from "@/components/Contact";
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
         <span className="text-zinc-700 font-mono text-xs tracking-widest">{number}</span>
         <div className="h-px w-8 bg-zinc-800" />
         <span className="text-zinc-800 font-bold uppercase text-[10px] tracking-[0.4em]">{label}</span>
      </div>

      {/* Large Background Number (Ghost) */}
      <div className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.03]">
         <span className="text-[200px] md:text-[350px] font-black text-white leading-none -translate-y-1/4 block">
            {number}
         </span>
      </div>

      {children}

      {/* Connection Line between sections */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/10 to-transparent z-10" />
    </motion.section>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [introCompleted, setIntroCompleted] = useState(false);

  useEffect(() => {
    // Temporarily disabled session check for testing
    // const played = sessionStorage.getItem('introPlayed');
    // if (played && process.env.NODE_ENV !== 'development') {
    //   setIntroCompleted(true);
    // }

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
        
        <SectionWrapper id="about" number="02" label="Bio">
          <About />
        </SectionWrapper>
        
        <SectionWrapper id="skills" number="03" label="Tech">
          <Skills />
        </SectionWrapper>
        
        <SectionWrapper id="journey" number="04" label="Path">
          <TestmonialCards />
        </SectionWrapper>

        <SectionWrapper id="projects" number="05" label="Work">
          <Projects />
        </SectionWrapper>
        
        <SectionWrapper id="contact" number="06" label="Talk">
          <Contact />
        </SectionWrapper>

        {/* Global Floating Contact Pill (Creative Addition) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="fixed bottom-8 right-8 z-50 hidden md:block"
        >
           <a 
             href="#contact"
             className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl"
           >
              Connect
           </a>
        </motion.div>

      </motion.div>
    </main>
  );
}
