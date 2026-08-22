import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us & Book a Growth Call | MyAdSphere',
  description: 'Schedule a 1-on-1 strategy call with MyAdSphere or reach out to our team to launch your performance marketing and brand growth campaigns.'
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FF4A17] selection:text-white">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
