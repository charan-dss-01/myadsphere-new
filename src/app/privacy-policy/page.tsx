import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | MyAdSphere Private Limited',
  description: 'Official Privacy Policy of myadsphere Private Limited. Learn how we collect, use, store, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FF4A17] selection:text-white relative overflow-hidden font-sans">
      <Navbar />

      {/* Ambient Radial Background Grid & Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF4A17]/[0.07] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        
        {/* ── Page Header ── */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-[#FF4A17] uppercase tracking-[0.3em] font-bold mb-6 backdrop-blur-md">
            PRIVACY & DATA PROTECTION
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-xs text-zinc-400 tracking-widest uppercase">
            <span>myadsphere Private Limited</span>
            <span>•</span>
            <span className="text-[#FF4A17] font-semibold">Last Updated: August 2026</span>
          </div>
        </div>

        {/* ── Intro Card ── */}
        <div className="bg-zinc-950/70 border border-white/10 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl mb-10 leading-relaxed text-zinc-300 font-light text-sm md:text-base space-y-4">
          <p>
            This Privacy Policy explains how <strong className="text-white font-semibold">myadsphere Private Limited</strong> (“myadsphere”, “we”, “us”, or “our”) collects, uses, stores, and protects information provided by users (“you” or “your”) when you visit our website, submit an enquiry, contact us, or use our services.
          </p>
          <p>
            By accessing or using the myadsphere website, you acknowledge the practices described in this Privacy Policy.
          </p>
        </div>

        {/* ── Main Policy Content Sections ── */}
        <div className="space-y-8 md:space-y-10">

          {/* 1. Information Collection and Use */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              Information Collection and Use
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Submit a contact or enquiry form</li>
                <li>Request a consultation</li>
                <li>Contact us by phone, email, WhatsApp, or social media</li>
                <li>Apply for a job</li>
                <li>Subscribe to marketing communications</li>
                <li>Engage myadsphere for professional services</li>
              </ul>

              <p className="pt-3">The information we collect may include:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Company or business name</li>
                <li>Website address</li>
                <li>Project requirements</li>
                <li>Marketing objectives</li>
                <li>Advertising budget</li>
                <li>Messages or information submitted through our website</li>
              </ul>

              <p className="pt-3">We may also automatically collect technical information when you visit our website, including:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages visited</li>
                <li>Time spent on the website</li>
                <li>General website interaction information</li>
              </ul>

              <p className="pt-3">
                We use this information to operate our website, respond to enquiries, provide our services, improve user experience, understand website performance, and communicate with prospective and existing clients.
              </p>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>The information collected by myadsphere may be used to:</p>
              <ul className="space-y-2.5 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Respond to enquiries and consultation requests</li>
                <li>Provide requested services</li>
                <li>Prepare proposals and quotations</li>
                <li>Communicate regarding projects and services</li>
                <li>Manage client relationships</li>
                <li>Improve our website and services</li>
                <li>Analyse website traffic and user behaviour</li>
                <li>Measure marketing and advertising performance</li>
                <li>Run and optimise digital marketing campaigns</li>
                <li>Provide customer support</li>
                <li>Send relevant business or marketing communications</li>
                <li>Maintain security and prevent misuse</li>
                <li>Comply with applicable legal requirements</li>
              </ul>
              <p className="pt-2 text-zinc-400 font-light text-sm">
                We use personal information only for legitimate business purposes and in accordance with applicable law.
              </p>
            </div>
          </section>

          {/* 3. Information Sharing and Disclosure */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              Information Sharing and Disclosure
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p className="text-white font-semibold text-base md:text-lg">
                myadsphere does not sell personal information.
              </p>
              <p>
                We may share information with trusted service providers and technology partners where necessary to operate our business or provide requested services.
              </p>
              <p>These may include:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Website hosting providers</li>
                <li>Cloud service providers</li>
                <li>CRM platforms</li>
                <li>Analytics providers</li>
                <li>Advertising platforms</li>
                <li>Email and communication services</li>
                <li>Payment and accounting providers</li>
                <li>Software and technology vendors</li>
                <li>Contractors working on authorised projects</li>
              </ul>
              <p className="pt-2">
                We expect service providers handling information on our behalf to use it only for the relevant purpose and to maintain appropriate confidentiality and security.
              </p>
              <p>
                Information may also be disclosed when required by applicable law, legal process, court order, government authority, or regulatory requirement.
              </p>
            </div>
          </section>

          {/* 4. Cookies and Tracking Technologies */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                The myadsphere website may use cookies, pixels, analytics tools, and similar technologies to improve functionality and understand how visitors use our website.
              </p>
              <p>These technologies may be used for:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Website analytics</li>
                <li>Traffic measurement</li>
                <li>Conversion tracking</li>
                <li>Advertising performance</li>
                <li>Remarketing</li>
                <li>Audience analysis</li>
                <li>Improving website experience</li>
              </ul>
              <p className="pt-2">Our website may use services provided by platforms such as:</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Google Analytics', 'Google Ads', 'Meta', 'LinkedIn', 'Other Analytics Platforms'].map(platform => (
                  <span key={platform} className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs text-zinc-200 font-medium">
                    {platform}
                  </span>
                ))}
              </div>
              <p className="pt-2">
                You can manage or disable cookies through your browser settings. Some website functionality may be affected if certain cookies are disabled.
              </p>
            </div>
          </section>

          {/* 5. Advertising and Remarketing */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              Advertising and Remarketing
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                myadsphere may use advertising platforms such as Google Ads and Meta Ads to promote our services and understand campaign performance.
              </p>
              <p>
                These platforms may use cookies, pixels, or similar technologies to measure interactions and show relevant advertising.
              </p>
              <p>
                Any information processed by third-party advertising platforms is also subject to their respective privacy policies.
              </p>
            </div>
          </section>

          {/* 6. Client Information */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              Client Information
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                As a digital marketing and technology agency, myadsphere may process information on behalf of clients while providing services including:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'SEO', 'Google Ads', 'Meta Ads', 'Performance Marketing', 
                  'Lead Generation', 'Social Media Marketing', 
                  'Website Design & Development', 'PR & Media', 'Analytics', 'AI Solutions & Automation'
                ].map(service => (
                  <span key={service} className="px-3.5 py-1.5 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/25 text-xs text-[#FF4A17] font-medium">
                    {service}
                  </span>
                ))}
              </div>
              <p className="pt-2">
                Where we process information on behalf of a client, we use such information only as reasonably necessary to perform the agreed services.
              </p>
            </div>
          </section>

          {/* 7. AI and Automation */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              AI and Automation
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                Some myadsphere services may use artificial intelligence tools, chatbots, automated workflows, or third-party AI platforms.
              </p>
              <p>
                Where AI or automation is used, information may be processed through approved technology providers to perform specific functions such as customer support, lead qualification, workflow automation, or content assistance.
              </p>
              <p className="text-zinc-400 font-light text-sm pt-1">
                We recommend that users and clients avoid submitting unnecessary confidential or sensitive information to automated systems.
              </p>
            </div>
          </section>

          {/* 8. Compliance With Laws and Law Enforcement */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              Compliance With Laws and Law Enforcement
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>myadsphere may disclose information where reasonably necessary to:</p>
              <ul className="space-y-2.5 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Comply with applicable laws or regulations</li>
                <li>Respond to lawful requests from government authorities</li>
                <li>Comply with court orders or legal processes</li>
                <li>Protect our legal rights or property</li>
                <li>Prevent fraud or misuse</li>
                <li>Protect the safety of our users, employees, clients, or others</li>
              </ul>
              <p className="pt-2">
                We cooperate with authorised government and law-enforcement agencies where legally required.
              </p>
            </div>
          </section>

          {/* 9. Business Transfers */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              Business Transfers
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                If myadsphere undergoes a merger, acquisition, restructuring, sale of assets, or similar business transaction, information held by us may be transferred as part of that transaction.
              </p>
              <p>
                Where applicable, reasonable steps will be taken to ensure that transferred personal information continues to be handled consistently with this Privacy Policy and applicable law.
              </p>
            </div>
          </section>

          {/* 10. Data Security */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              Data Security
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>We use reasonable technical and organisational measures designed to protect information from:</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Unauthorised access</li>
                <li>Loss</li>
                <li>Misuse</li>
                <li>Disclosure</li>
                <li>Alteration</li>
                <li>Destruction</li>
              </ul>
              <p className="pt-2">
                However, no method of electronic transmission or storage can be guaranteed to be completely secure.
              </p>
            </div>
          </section>

          {/* 11. Email and Communication Policy */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              Email and Communication Policy
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>myadsphere may use the contact information you provide to communicate with you regarding:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Your enquiry</li>
                <li>Project discussions</li>
                <li>Service updates</li>
                <li>Proposals</li>
                <li>Relevant offers</li>
                <li>Marketing communications</li>
              </ul>
              <p className="pt-2">
                If you no longer wish to receive promotional communications from us, you may unsubscribe using the option provided in the communication or contact us directly.
              </p>
              <p>
                You may still receive essential transactional or project-related communications where necessary.
              </p>
            </div>
          </section>

          {/* 12. Third-Party Links */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              Third-Party Links
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                Our website may contain links to third-party websites, applications, or platforms.
              </p>
              <p>
                myadsphere is not responsible for the privacy practices, security, or content of third-party websites.
              </p>
              <p>
                We recommend reviewing the privacy policies of external websites before providing personal information.
              </p>
            </div>
          </section>

          {/* 13. Changes to This Privacy Policy */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              Changes to This Privacy Policy
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                myadsphere may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices, or applicable laws.
              </p>
              <p>
                Any updated version will be published on this page with a revised <strong className="text-white font-semibold">Last Updated</strong> date.
              </p>
            </div>
          </section>

          {/* 14. Contact Us */}
          <section className="bg-gradient-to-br from-zinc-950 via-zinc-900/90 to-[#FF4A17]/10 border border-[#FF4A17]/30 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4A17]/10 blur-[80px] pointer-events-none rounded-full" />
            
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6 relative z-10">
              Contact Us
            </h2>
            
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed relative z-10">
              <p>
                If you have questions regarding this Privacy Policy or how myadsphere handles personal information, please contact us:
              </p>

              <div className="pt-4 border-t border-white/10 space-y-4">
                <p className="text-lg font-bold text-white uppercase tracking-wider">
                  myadsphere Private Limited
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <p className="text-[11px] text-[#FF4A17] uppercase tracking-widest font-bold mb-1">Email</p>
                    <a 
                      href="mailto:info@myadsphere.in" 
                      className="text-white text-base font-medium hover:text-[#FF4A17] transition-colors"
                    >
                      info@myadsphere.in
                    </a>
                  </div>

                  <div>
                    <p className="text-[11px] text-[#FF4A17] uppercase tracking-widest font-bold mb-1">Phone</p>
                    <a 
                      href="tel:+919494980096" 
                      className="text-white text-base font-medium hover:text-[#FF4A17] transition-colors"
                    >
                      +91 94949 80096
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[11px] text-[#FF4A17] uppercase tracking-widest font-bold mb-1">Address</p>
                  <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed max-w-lg">
                    4th Floor, OYO Workflo, Bizness Square<br />
                    HITEX Road Junction, Hitech City Rd<br />
                    Opposite HITEX, Kondapur<br />
                    Hyderabad, Telangana 500081<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>

      <Footer />
    </main>
  );
}
