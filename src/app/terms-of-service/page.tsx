import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | MyAdSphere Private Limited',
  description: 'Official Terms of Service for myadsphere Private Limited. Review the agreement, terms, client obligations, and service policies.',
};

export default function TermsOfServicePage() {
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
            LEGAL AGREEMENT &amp; COMPLIANCE
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-xs text-zinc-400 tracking-widest uppercase">
            <span>myadsphere Private Limited</span>
            <span>•</span>
            <span className="text-[#FF4A17] font-semibold">Last Updated: October 21, 2026</span>
          </div>
        </div>

        {/* ── Main Policy Content Sections ── */}
        <div className="space-y-8 md:space-y-10">

          {/* 1. Agreement to Terms */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              1. Agreement to Terms
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                By accessing or using the myadsphere website (<a href="https://myadsphere.in" target="_blank" rel="noopener noreferrer" className="text-[#FF4A17] hover:underline">https://myadsphere.in</a>) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our website or services.
              </p>
              <p>
                &ldquo;myadsphere,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo; refers to the myadsphere business operating in India. &ldquo;You&rdquo; or &ldquo;client&rdquo; refers to any individual, business, or organization accessing our website or engaging our services.
              </p>
            </div>
          </section>

          {/* 2. Services */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              2. Services
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                myadsphere is a results-driven digital marketing agency based in Hyderabad, Telangana, India, helping businesses build stronger brands, generate qualified leads, and achieve measurable growth.
              </p>
              <p>Our services include, but are not limited to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Branding and Brand Identity</li>
                <li>Content and Creative Production</li>
                <li>Social Media Marketing and Management</li>
                <li>Website Design and Development</li>
                <li>UI/UX Design</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Google Ads and Pay-Per-Click Advertising (PPC)</li>
                <li>Meta Ads and Paid Social Media Advertising</li>
                <li>Performance Marketing</li>
                <li>Lead Generation</li>
                <li>Public Relations (PR) and Media Services</li>
                <li>AI Solutions and Marketing Automation</li>
              </ul>
              <p className="pt-2">
                Specific deliverables, timelines, fees, and project requirements will be outlined in individual proposals, quotations, or service agreements accepted by the client.
              </p>
            </div>
          </section>

          {/* 3. Use of Website */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              3. Use of Website
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                You agree to use the myadsphere website only for lawful purposes and in accordance with applicable laws and regulations.
              </p>
              <p>You must not:</p>
              <ul className="space-y-2.5 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Use the website for any unlawful, fraudulent, or unauthorized purpose.</li>
                <li>Attempt to gain unauthorized access to the website, servers, or related systems.</li>
                <li>Upload or distribute viruses, malware, or other harmful code.</li>
                <li>Copy, reproduce, distribute, or resell website content without prior written permission.</li>
                <li>Scrape, harvest, or collect website data using automated tools without authorization.</li>
                <li>Interfere with the website&apos;s security, functionality, or availability.</li>
              </ul>
              <p className="pt-2">
                We reserve the right to restrict access to the website if misuse or a violation of these terms is identified.
              </p>
            </div>
          </section>

          {/* 4. Intellectual Property */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              4. Intellectual Property
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                All content on the myadsphere website, including text, graphics, logos, branding, images, videos, designs, case studies, and software, is owned by myadsphere or its respective licensors unless otherwise stated. Such content is protected by applicable intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, publish, or create derivative works from this content without prior written permission.
              </p>
              <p>
                Ownership and usage rights for client-specific deliverables, including websites, designs, advertising creatives, content, and other materials, will be governed by the relevant proposal or service agreement. Third-party assets, stock materials, fonts, software, and licensed tools remain subject to their respective licensing terms.
              </p>
            </div>
          </section>

          {/* 5. Client Obligations */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              5. Client Obligations
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>Clients engaging myadsphere&apos;s services agree to:</p>
              <ul className="space-y-2.5 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Provide accurate, complete, and timely information, content, assets, and account access required for project execution.</li>
                <li>Ensure that they have the necessary rights and permissions to use materials supplied to myadsphere.</li>
                <li>Review and approve deliverables within agreed timelines.</li>
                <li>Make payments according to the agreed proposal, invoice, or service agreement.</li>
                <li>Comply with applicable laws, advertising standards, and platform policies, including those of Google, Meta, and other relevant platforms.</li>
                <li>Maintain the security of their accounts and promptly notify us of unauthorized access or security concerns.</li>
                <li>Obtain necessary customer consents, permissions, and legal approvals for their business activities and marketing communications.</li>
              </ul>
              <p className="pt-2 text-zinc-400 font-light text-sm">
                Delays in providing information, approvals, or access may affect project timelines and delivery schedules.
              </p>
            </div>
          </section>

          {/* 6. Payment Terms */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              6. Payment Terms
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <ul className="space-y-2.5 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Service fees will be specified in the accepted proposal, quotation, invoice, or service agreement.</li>
                <li>Unless otherwise agreed in writing, invoices are payable within 15 days of issuance.</li>
                <li>Late payments may attract interest of 1.5% per month, subject to applicable law and the agreed payment terms.</li>
                <li>Advertising spend, including Google Ads and Meta Ads budgets, is separate from agency service fees unless expressly included in the agreement.</li>
                <li>Advertising budgets must be funded in advance according to the agreed campaign plan.</li>
                <li>Additional work, revisions beyond the agreed scope, or new requirements may incur additional charges, subject to agreement.</li>
                <li>myadsphere may suspend services for overdue payments after providing appropriate notice, subject to the applicable agreement and law.</li>
              </ul>
              <p className="pt-2 text-zinc-400 font-light text-sm">
                Taxes, including GST where applicable, will be charged in accordance with applicable law.
              </p>
            </div>
          </section>

          {/* 7. Confidentiality */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              7. Confidentiality
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                myadsphere and the client agree to protect confidential information shared during an engagement. This may include business plans, marketing strategies, customer information, campaign performance data, financial information, login credentials, and proprietary processes.
              </p>
              <p>
                Confidential information must not be disclosed to unauthorized third parties except where disclosure is required by law or necessary for authorized service delivery, subject to appropriate confidentiality obligations.
              </p>
              <p>
                These confidentiality obligations continue after the engagement ends. Information that is publicly available, independently developed, or lawfully obtained without confidentiality restrictions will not be treated as confidential solely because it was shared during the engagement.
              </p>
            </div>
          </section>

          {/* 8. Limitation of Liability */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              8. Limitation of Liability
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>To the maximum extent permitted by applicable law:</p>
              <ul className="space-y-2.5 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>myadsphere will not be liable for indirect, incidental, special, punitive, or consequential losses arising from the use of its website or services.</li>
                <li>Unless otherwise required by law or expressly agreed in writing, myadsphere&apos;s aggregate liability arising from a particular service engagement will not exceed the service fees paid or payable by the client for that engagement during the three months preceding the event giving rise to the claim.</li>
                <li>myadsphere is not responsible for losses caused by third-party platforms, service providers, hosting companies, payment processors, or circumstances beyond its reasonable control.</li>
                <li>Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited under applicable law.</li>
              </ul>
              <p className="pt-2 text-zinc-400 font-light text-sm">
                Clients remain responsible for their business decisions and the use of recommendations, marketing materials, and campaign results.
              </p>
            </div>
          </section>

          {/* 9. Disclaimers and Marketing Results */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              9. Disclaimers and Marketing Results
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                The website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, to the extent permitted by law.
              </p>
              <p>
                While myadsphere aims to deliver professional, reliable, and effective marketing services, we do not guarantee specific outcomes, including:
              </p>
              <ul className="space-y-2.5 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>Search engine rankings or indexing positions.</li>
                <li>Website traffic, leads, conversions, or sales.</li>
                <li>Advertising reach, engagement, or return on advertising spend.</li>
                <li>Social media followers, account growth, or audience engagement.</li>
                <li>Approval of advertisements, business profiles, or accounts by third-party platforms.</li>
              </ul>
              <p className="pt-2">
                Marketing outcomes may depend on competition, budgets, market conditions, client inputs, platform algorithms, policy changes, and other factors beyond our control.
              </p>
              <p>
                We will make reasonable efforts to provide the agreed services but cannot guarantee uninterrupted website availability or the accuracy and continued availability of third-party information.
              </p>
            </div>
          </section>

          {/* 10. Third-Party Platforms and Services */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              10. Third-Party Platforms and Services
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                Our services may involve third-party platforms and tools, including Google, Meta, hosting providers, analytics platforms, advertising networks, and automation services.
              </p>
              <p>
                Your use of these platforms may be subject to separate terms, policies, and privacy practices. myadsphere does not control third-party platform decisions, policy enforcement, outages, algorithm changes, or account suspensions.
              </p>
              <p>
                Clients are responsible for complying with applicable third-party terms and maintaining ownership and appropriate access to their business accounts, unless otherwise agreed in writing.
              </p>
            </div>
          </section>

          {/* 11. Termination */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              11. Termination
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                Either party may terminate a service engagement by providing 30 days&apos; written notice, unless the applicable service agreement specifies a different arrangement.
              </p>
              <p>
                Either party may seek earlier termination where permitted by the relevant agreement or applicable law, including in response to a material breach that remains unresolved after any applicable notice and cure period.
              </p>
              <p>Upon termination:</p>
              <ul className="space-y-2.5 text-zinc-300 font-light text-sm md:text-base pl-5 list-disc marker:text-[#FF4A17]">
                <li>The client remains liable for fees and approved expenses incurred up to the effective termination date.</li>
                <li>Outstanding invoices must be settled according to the applicable payment terms.</li>
                <li>myadsphere will provide reasonable transition assistance where agreed and subject to settlement of outstanding dues and any applicable charges.</li>
                <li>Client-owned accounts, assets, and materials will be returned or access transferred within a reasonable period, subject to applicable law, third-party restrictions, and the service agreement.</li>
                <li>Confidentiality, intellectual property, payment, liability, and other provisions intended to survive termination will remain effective.</li>
              </ul>
            </div>
          </section>

          {/* 12. Indemnification */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              12. Indemnification
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                To the extent permitted by applicable law, each party agrees to be responsible for claims, losses, liabilities, and reasonable expenses arising from its own breach of these terms, unlawful conduct, negligence, or infringement of third-party rights.
              </p>
              <p>
                The client is responsible for ensuring that materials, claims, products, and services supplied for marketing purposes are lawful and appropriately authorized.
              </p>
              <p>
                Any indemnification obligation will be subject to applicable law and the terms of the relevant service agreement.
              </p>
            </div>
          </section>

          {/* 13. Governing Law and Jurisdiction */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              13. Governing Law and Jurisdiction
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                These Terms of Service are governed by the laws of India.
              </p>
              <p>
                Subject to applicable law, courts of competent jurisdiction in Hyderabad, Telangana, India, will have jurisdiction over disputes arising from these terms or the use of Myadsphere&apos;s services.
              </p>
              <p>
                The parties may first attempt to resolve disputes through good-faith discussions before pursuing formal legal remedies.
              </p>
            </div>
          </section>

          {/* 14. Changes to These Terms */}
          <section className="bg-zinc-950/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              14. Changes to These Terms
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                myadsphere reserves the right to update or modify these Terms of Service from time to time.
              </p>
              <p>
                Revised terms will be published on <a href="https://myadsphere.in" target="_blank" rel="noopener noreferrer" className="text-[#FF4A17] hover:underline">https://myadsphere.in</a> with an updated revision date. Changes will apply as permitted by applicable law. Where required, we will provide appropriate notice or obtain consent.
              </p>
              <p>
                Your continued use of the website after updated terms become effective constitutes acceptance of the revised terms where legally applicable.
              </p>
            </div>
          </section>

          {/* 15. Contact Information */}
          <section className="bg-zinc-950/70 border border-white/15 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#FF4A17] bg-clip-text text-transparent mb-6">
              15. Contact Information
            </h2>
            <div className="space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                For questions, concerns, or requests regarding these Terms of Service, please contact Myadsphere:
              </p>

              <div className="p-6 rounded-2xl border border-white/10 bg-black/60 space-y-3 font-mono text-xs sm:text-sm">
                <div>
                  <strong className="text-zinc-400 font-sans">Business Name: </strong>
                  <span className="text-white">myadsphere private limited</span>
                </div>
                <div>
                  <strong className="text-zinc-400 font-sans">Website: </strong>
                  <a href="https://myadsphere.in" target="_blank" rel="noopener noreferrer" className="text-[#FF4A17] hover:underline font-mono">
                    https://myadsphere.in
                  </a>
                </div>
                <div>
                  <strong className="text-zinc-400 font-sans">Email: </strong>
                  <a href="mailto:info@myadsphere.in" className="text-[#FF4A17] hover:underline font-mono">
                    info@myadsphere.in
                  </a>
                </div>
                <div>
                  <strong className="text-zinc-400 font-sans">Phone: </strong>
                  <a href="tel:+919494980096" className="text-white hover:text-[#FF4A17] transition-colors font-mono">
                    +91 94949 80096
                  </a>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <strong className="text-zinc-400 font-sans block mb-1">Business Address:</strong>
                  <span className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed block">
                    4th Floor, Oyo Workflo, Bizness Square, HITEC City Road, opposite HITEX, Kondapur, Hyderabad, Telangana 500081, India.
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-center">
                <p className="text-base sm:text-lg font-bold uppercase tracking-widest text-[#FF4A17]">
                  myadsphere — Think Beyond.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
