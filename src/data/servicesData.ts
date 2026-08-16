export interface Capability {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  number: string;
  category: 'PERFORMANCE' | 'ORGANIC GROWTH' | 'CREATIVE' | 'CONVERSION' | 'INTELLIGENCE';
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  overview: string;
  capabilities: Capability[];
  process: ProcessStep[];
  outcomes: string[];
  platforms: string[];
  targetIndustries: string[];
  faqs: FAQItem[];
  metaTitle: string;
  metaDescription: string;
}

export const servicesData: Record<string, ServiceData> = {
  'performance-marketing': {
    slug: 'performance-marketing',
    number: '01',
    category: 'PERFORMANCE',
    title: 'Performance Marketing',
    shortDescription: 'Turn paid attention into predictable, scalable revenue across Google, Meta, and multi-channel ad networks.',
    heroHeadline: 'Turn Paid Attention Into Predictable Revenue.',
    heroSubhead: 'Data-driven performance marketing campaigns engineered for high ROAS, customer acquisition, and profitable scale.',
    overview: 'Our Performance Marketing framework treats advertising spend as a calculated growth investment. We design end-to-end acquisition funnels, test high-converting ad creative at scale, and optimize bid strategies in real-time to drive measurable revenue.',
    capabilities: [
      { title: 'Multi-Channel Campaign Architecture', description: 'Unified ad account structures designed for efficient budget distribution across Google, Meta, and LinkedIn.' },
      { title: 'Algorithmic Bid & Budget Management', description: 'Smart bidding strategies leveraging machine learning to capture high-intent buyers at optimal acquisition costs.' },
      { title: 'Rapid Creative Testing Frameworks', description: 'Systematic visual and copy variations tested weekly to combat ad fatigue and maximize click-through velocity.' },
      { title: 'Full-Funnel Retargeting Sequences', description: 'Tailored remarketing campaigns that nurture non-converting visitors back into high-value buyers.' },
      { title: 'First-Party Conversion Tracking', description: 'CAPI and server-side tracking setups ensuring 100% data accuracy despite iOS privacy changes.' },
      { title: 'Real-Time ROAS Dashboarding', description: 'Custom live analytics tracking blending ad spend, cost per acquisition (CPA), and net revenue.' }
    ],
    process: [
      { step: '01', title: 'AUDIT & BENCHMARK', description: 'Deep-dive audit of historical ad spend, conversion tracking accuracy, and competitor benchmarks.' },
      { step: '02', title: 'FUNNEL STRATEGY', description: 'Building custom audience segments, offer positioning, and multi-channel campaign blueprints.' },
      { step: '03', title: 'CREATIVE LAUNCH', description: 'Deploying high-impact visual hooks, ad copy variations, and dedicated landing page funnels.' },
      { step: '04', title: 'REAL-TIME OPTIMIZATION', description: 'Daily bid adjustments, audience pruning, and scaling high-performing campaign angles.' },
      { step: '05', title: 'COMPOUNDING SCALE', description: 'Expanding to secondary ad networks and increasing daily budgets while preserving target ROAS.' }
    ],
    outcomes: ['Lower Cost Per Acquisition (CPA)', 'Higher Return On Ad Spend (ROAS)', 'Predictable Monthly Revenue Velocity', 'Full Attribution Transparency'],
    platforms: ['Google Ads', 'Meta Ads (FB/IG)', 'LinkedIn Ads', 'TikTok Ads', 'Meta CAPI', 'Google Tag Manager'],
    targetIndustries: ['E-Commerce & D2C', 'SaaS & Enterprise B2B', 'Real Estate & Property', 'FinTech & Financials', 'Healthcare & Wellness'],
    faqs: [
      { question: 'What minimum ad budget do you recommend for performance campaigns?', answer: 'We typically recommend a minimum ad spend of $3,000 to $5,000 per month per primary channel to allow statistical significance for algorithm learning and rapid creative testing.' },
      { question: 'How quickly can we expect measurable ROAS improvements?', answer: 'Initial campaign architecture and tracking are established in Week 1. Positive performance trends and data-backed optimization insights generally emerge within 14 to 21 days of active spend.' },
      { question: 'Do you manage ad creative assets as well as campaign bidding?', answer: 'Yes, MyAdSphere provides full end-to-end campaign management, including static graphic design, short-form motion ad production, copywriting, and bid optimization.' },
      { question: 'How do you handle iOS privacy updates and tracking loss?', answer: 'We implement server-side Conversion API (CAPI), custom domain tracking, and first-party attribution dashboards to ensure accurate conversion tracking.' }
    ],
    metaTitle: 'Performance Marketing Agency | MyAdSphere',
    metaDescription: 'Scale your brand with data-driven performance marketing. High-ROAS Google, Meta, and paid media campaigns engineered for revenue growth.'
  },

  'seo': {
    slug: 'seo',
    number: '02',
    category: 'ORGANIC GROWTH',
    title: 'SEO & Organic Scaling',
    shortDescription: 'Dominate high-intent search results and build sustainable organic domain authority that compounds over time.',
    heroHeadline: 'Capture High-Intent Buyers Searching For Your Brand.',
    heroSubhead: 'Comprehensive technical SEO, keyword authority engineering, and strategic content clusters built for first-page search dominance.',
    overview: 'Search Engine Optimization is the highest-margin acquisition engine available to digital brands. Our SEO strategy pairs rigorous technical site infrastructure with editorial content hubs that systematically capture non-branded search demand.',
    capabilities: [
      { title: 'Technical Infrastructure Optimization', description: 'Core Web Vitals auditing, crawl budget optimization, JavaScript rendering, and site speed acceleration.' },
      { title: 'High-Intent Keyword Intelligence', description: 'Identifying commercial and transactional keyword opportunities with proven search demand and buying intent.' },
      { title: 'Topical Authority Content Clusters', description: 'Structuring pillar pages and supporting cluster articles to establish undeniable topical authority in your niche.' },
      { title: 'High-Authority Link Acquisition', description: 'Ethical, white-hat digital PR and editorial link outreach securing domain authority from tier-1 industry publications.' },
      { title: 'Local & Maps Dominance', description: 'Optimizing Google Business Profiles and localized citation structures for multi-location brand visibility.' },
      { title: 'Generative Search & GEO Readiness', description: 'Optimizing site data structures for AI search engines including Google Search Generative Experience (SGE) and ChatGPT.' }
    ],
    process: [
      { step: '01', title: 'TECHNICAL ARCHITECTURE AUDIT', description: 'Comprehensive site scan identifying indexing errors, duplicate content, schema markup, and speed bottlenecks.' },
      { step: '02', title: 'KEYWORD DEMAND MAPPING', description: 'Mapping buyer intent keywords against site architecture to build strategic content roadmaps.' },
      { step: '03', title: 'CONTENT CLUSTER DEPLOYMENT', description: 'Publishing optimized long-form content hubs and technical metadata optimizations.' },
      { step: '04', title: 'AUTHORITY & BACKLINK BUILDING', description: 'Targeted outreach to industry press and authoritative domains to build domain rank potential.' },
      { step: '05', title: 'ORGANIC TRAFFIC MONETIZATION', description: 'Refining internal linking and landing page UX to convert organic traffic into revenue leads.' }
    ],
    outcomes: ['First-Page Organic Rankings', 'Compounding Monthly Organic Traffic', 'Higher Organic Lead Conversion Rates', 'Decreased Dependency On Paid Ads'],
    platforms: ['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Schema.org'],
    targetIndustries: ['B2B SaaS & Tech', 'Professional & Legal Services', 'Healthcare & Medical Systems', 'Real Estate & Property', 'Education & EdTech'],
    faqs: [
      { question: 'How long does SEO take to show meaningful revenue growth?', answer: 'SEO is a compounding growth asset. Initial technical fixes reflect within 30 to 60 days, while primary keyword ranking dominance and traffic spikes accelerate between months 3 and 6.' },
      { question: 'Do you guarantee #1 rankings on Google?', answer: 'No reputable SEO agency guarantees exact rank positions due to continuous Google algorithm updates. However, we guarantee strict execution of white-hat SEO frameworks proven to achieve top-tier visibility.' },
      { question: 'Will SEO help reduce our paid search ad spend?', answer: 'Yes. As your organic rankings capture top-of-funnel and transactional search volume, you can reduce paid search bids on competitive keywords while maintaining total lead volume.' }
    ],
    metaTitle: 'SEO Services & Organic Growth Agency | MyAdSphere',
    metaDescription: 'Dominate organic search with technical SEO, keyword authority engineering, and strategic content clusters built by MyAdSphere.'
  },

  'social-media-marketing': {
    slug: 'social-media-marketing',
    number: '03',
    category: 'ORGANIC GROWTH',
    title: 'Social Media Marketing',
    shortDescription: 'Build an engaged brand community and turn social feeds into high-converting audience touchpoints.',
    heroHeadline: 'Turn Passive Feed Scrollers Into Loyal Brand Advocates.',
    heroSubhead: 'Strategic organic social management, high-impact short-form video, and community nurturing engineered for modern social algorithms.',
    overview: 'Modern social media isn’t about posting vanity content; it’s about positioning your brand at the center of cultural conversations. We design high-retention short-form video, aesthetic feed grids, and strategic community management that build true brand resonance.',
    capabilities: [
      { title: 'Organic Content Strategy & Calendar', description: 'Data-driven content pillars, publishing schedules, and channel-specific distribution strategies.' },
      { title: 'Short-Form Video Production (Reels/TikTok)', description: 'Hook-driven scriptwriting, editing, and motion design tailored for algorithmic viral reach.' },
      { title: 'Community Nurturing & Engagement', description: 'Active comment management and DM lead generation strategies that humanize your brand.' },
      { title: 'Social Listening & Trend Capitalization', description: 'Real-time monitoring of industry trends to jump on high-engagement viral formats.' },
      { title: 'Influencer & Creator Collaborations', description: 'Partnering with relevant creators for product placements, co-created content, and brand endorsement.' },
      { title: 'Social Commerce Integration', description: 'Setting up native shop storefronts on Instagram and TikTok for seamless in-app purchasing.' }
    ],
    process: [
      { step: '01', title: 'BRAND AUDIT & AUDIENCE ICP', description: 'Analyzing existing social presence, target demographics, and top-performing competitor formats.' },
      { step: '02', title: 'CONTENT SYSTEM CREATION', description: 'Establishing visual guidelines, tone of voice, content pillars, and monthly editorial calendars.' },
      { step: '03', title: 'CREATIVE PRODUCTION', description: 'Editing short-form video clips, carousel graphics, and persuasive caption copywriting.' },
      { step: '04', title: 'ALGORITHMIC PUBLISHING', description: 'Posting at peak audience activity hours with optimized hashtags, audio trends, and tagging.' },
      { step: '05', title: 'COMMUNITY & AUDIENCE GROWTH', description: 'Engaging with followers and industry accounts to convert social attention into business growth.' }
    ],
    outcomes: ['Higher Engagement Rates', 'Organic Brand Reach Acceleration', 'Stronger Customer Loyalty & Retention', 'Native Social Lead Generation'],
    platforms: ['Instagram', 'LinkedIn', 'TikTok', 'YouTube Shorts', 'X (Twitter)', 'Later / Buffer'],
    targetIndustries: ['D2C & Consumer Brands', 'Hospitality & Dining', 'Fitness & Lifestyle', 'Personal Brands & Founders', 'E-Commerce Retail'],
    faqs: [
      { question: 'Which social media channels should our business focus on?', answer: 'We tailor the platform mix to your ICP. B2B and SaaS brands thrive on LinkedIn and X, while D2C, retail, and lifestyle brands achieve maximum ROI on Instagram and TikTok.' },
      { question: 'Do you create the video clips and graphics for us?', answer: 'Yes. Our creative team handles scriptwriting, video editing, graphics creation, caption writing, and scheduling.' }
    ],
    metaTitle: 'Social Media Growth Agency | MyAdSphere',
    metaDescription: 'Build an active brand community and scale organic reach with short-form video, creative social strategy, and algorithm optimization.'
  },

  'paid-advertising': {
    slug: 'paid-advertising',
    number: '04',
    category: 'PERFORMANCE',
    title: 'Paid Advertising Engine',
    shortDescription: 'Scale high-converting PPC campaigns across Google Search, Shopping, YouTube, and Display networks.',
    heroHeadline: 'Precision PPC Infrastructure Engineered For Scale.',
    heroSubhead: 'Maximize return on ad spend with high-intent search ads, Google Shopping feeds, and programmatic display targeting.',
    overview: 'Our Paid Advertising Engine targets active buyers at the exact moment of search intent. By combining high-converting ad copy, negative keyword filters, and landing page congruency, we eliminate wasted budget and maximize pipeline throughput.',
    capabilities: [
      { title: 'Google Search & Intent Bidding', description: 'Capturing bottom-of-funnel transactional keyword searches with tightly structured ad groups.' },
      { title: 'Google Shopping & Performance Max', description: 'Optimizing product feed data, title structures, and asset groups for maximum e-commerce revenue.' },
      { title: 'YouTube Video Advertising', description: 'High-impact skippable video ads engineered to build product awareness and drive direct site visits.' },
      { title: 'Programmatic Display & Native Ads', description: 'Targeting specific context and demographic segments across top publisher networks.' },
      { title: 'Negative Keyword & Placement Hygiene', description: 'Continuous budget protection by filtering out low-quality queries and non-performing placements.' },
      { title: 'Conversion Rate & Landing Page Alignment', description: 'Ensuring 100% messaging alignment between ad copy headlines and landing page offers.' }
    ],
    process: [
      { step: '01', title: 'ACCOUNT STRUCTURE AUDIT', description: 'Eliminating duplicate keywords, broad match bleed, and fragmented campaign setups.' },
      { step: '02', title: 'INTENT KEYWORD ARCHITECTURE', description: 'Structuring campaign themes around high-margin products and customer pain points.' },
      { step: '03', title: 'COPYWRITING & EXTENSION SETUP', description: 'Writing compelling ad text, sitelinks, callouts, and structured snippet extensions.' },
      { step: '04', title: 'BID ALGORITHM CALIBRATION', description: 'Transitioning from manual bidding to Target CPA or Target ROAS smart bidding models.' },
      { step: '05', title: 'WEEKLY SCALE & REFINEMENT', description: 'Expanding to high-performing secondary search terms and competitor conquesting campaigns.' }
    ],
    outcomes: ['Reduced Cost Per Click (CPC)', 'Increased Conversion Rates', 'Higher Impression Share On Profit Keywords', 'Transparent ROI Reporting'],
    platforms: ['Google Search', 'Google Shopping (PMax)', 'YouTube Ads', 'Bing Ads', 'Google Display Network'],
    targetIndustries: ['E-Commerce & Retail', 'Professional Services', 'Real Estate Development', 'Healthcare Clinics', 'Higher Education'],
    faqs: [
      { question: 'How is Paid Advertising different from general Performance Marketing?', answer: 'Paid Advertising focuses specifically on search intent networks (Google Search, Shopping, Bing) capturing immediate demand, whereas Performance Marketing encompasses full-funnel social media acquisition.' },
      { question: 'Will we own our Google Ads account?', answer: '100% yes. You maintain complete administrative ownership of your Google Ads account, data history, and payment details at all times.' }
    ],
    metaTitle: 'Paid Advertising & Google Ads Agency | MyAdSphere',
    metaDescription: 'Scale high-converting PPC campaigns across Google Search, Performance Max, Shopping, and YouTube Ads with MyAdSphere.'
  },

  'content-marketing': {
    slug: 'content-marketing',
    number: '05',
    category: 'ORGANIC GROWTH',
    title: 'Content Marketing & Production',
    shortDescription: 'Publish strategic content assets that educate prospective buyers, build brand authority, and fuel organic growth.',
    heroHeadline: 'Content That Educates Buyers And Drives Conversions.',
    heroSubhead: 'Authority-building blog clusters, whitepapers, case studies, and digital assets designed to establish industry leadership.',
    overview: 'Content marketing is your brand’s greatest intellectual property asset. We combine search intelligence with deep industry research to produce content assets that rank high on search engines and convert casual readers into qualified sales opportunities.',
    capabilities: [
      { title: 'Content Strategy & Editorial Calendar', description: 'Mapping content topics directly against customer journey stages and pain points.' },
      { title: 'Long-Form SEO Articles & Guides', description: 'Research-backed, expert-written articles designed to dominate search engine ranking results.' },
      { title: 'Case Study & Client Success Stories', description: 'Compelling customer transformation stories that eliminate buyer friction and validate social proof.' },
      { title: 'Whitepapers & Gated Lead Magnets', description: 'High-value downloadable assets designed to capture executive B2B lead contact details.' },
      { title: 'Content Repurposing Framework', description: 'Transforming single long-form assets into multi-channel social clips, newsletter issues, and infographics.' },
      { title: 'Editorial Distribution & Promotion', description: 'Syndicating content across strategic channels to maximize audience visibility and readership.' }
    ],
    process: [
      { step: '01', title: 'AUDIENCE & TOPIC AUDIT', description: 'Identifying high-value questions, objections, and informational queries your buyers search for.' },
      { step: '02', title: 'EDITORIAL ROADMAP', description: 'Planning monthly content production pipelines aligned with product launches and business goals.' },
      { step: '03', title: 'EXPERT COPYWRITING', description: 'Drafting well-researched, engaging, and SEO-optimized content pieces with clear CTA calls.' },
      { step: '04', title: 'DESIGN & MULTIMEDIA', description: 'Adding custom graphics, diagrams, key callouts, and clean typographic formatting.' },
      { step: '05', title: 'DISTRIBUTION & TRACKING', description: 'Promoting content across email and social channels while monitoring reader engagement time.' }
    ],
    outcomes: ['Higher Time-On-Site', 'Stronger Domain Topical Authority', 'Increased Organic Lead Magnets', 'Shorter Sales Conversion Cycles'],
    platforms: ['WordPress', 'Webflow', 'Ghost', 'Medium', 'Substack', 'HubSpot Blog'],
    targetIndustries: ['B2B Technology & SaaS', 'Financial Services & VC', 'Consulting & Agencies', 'Healthcare & Biotech', 'Clean Energy'],
    faqs: [
      { question: 'Who writes the content for our business?', answer: 'Our team includes seasoned industry copywriters and technical editors who conduct thorough interviews and research to match your brand tone and technical depth.' },
      { question: 'How do you measure the ROI of content marketing?', answer: 'We track organic traffic growth, average time on page, newsletter signups, lead magnet downloads, and organic assisted conversions.' }
    ],
    metaTitle: 'Content Marketing & Production Agency | MyAdSphere',
    metaDescription: 'Scale your search traffic and authority with expert long-form content, case studies, and digital lead magnets from MyAdSphere.'
  },

  'brand-strategy': {
    slug: 'brand-strategy',
    number: '06',
    category: 'CREATIVE',
    title: 'Brand Strategy & Creative',
    shortDescription: 'Craft an unmistakable brand identity, messaging narrative, and visual aesthetic thatCommands premium pricing.',
    heroHeadline: 'Make Your Brand Impossible To Ignore.',
    heroSubhead: 'Strategic visual positioning, brand guidelines, and high-impact ad creative crafted for market distinction.',
    overview: 'In a noisy digital landscape, commodity branding leads to price wars. Our Brand Strategy & Creative service crafts unique brand positioning, memorable visual identities, and persuasive messaging frameworks that position your agency or company as the undisputed category leader.',
    capabilities: [
      { title: 'Brand Positioning & Messaging Narrative', description: 'Defining your unique value proposition, brand story, elevator pitch, and tone of voice.' },
      { title: 'Visual Identity & Design Systems', description: 'Crafting modern logo systems, color palettes, typography scales, and UI component libraries.' },
      { title: 'Performance Creative & Ad Design', description: 'Designing static and animated ad assets built specifically to capture visual feed attention.' },
      { title: 'Brand Guidelines & Style Specs', description: 'Comprehensive design documentation ensuring 100% brand consistency across all customer touchpoints.' },
      { title: 'Packaging & Collateral Design', description: 'Designing physical product packaging, pitch decks, corporate brochures, and digital collateral.' },
      { title: 'Rebranding Transformation', description: 'Complete end-to-end visual overhaul for legacy brands seeking a modern digital agency aesthetic.' }
    ],
    process: [
      { step: '01', title: 'COMPETITIVE DISCOVERY', description: 'Analyzing market positioning gaps, target persona psychology, and visual category standards.' },
      { step: '02', title: 'POSITIONING FRAMEWORK', description: 'Establishing core brand promises, voice attributes, and key differentiator pillars.' },
      { step: '03', title: 'VISUAL SYSTEM DESIGN', description: 'Creating visual moodboards, logo iterations, typography systems, and color schemes.' },
      { step: '04', title: 'COLLATERAL ASSET BUILD', description: 'Designing ad templates, website design guidelines, and social media brand kits.' },
      { step: '05', title: 'BRAND DEPLOYMENT', description: 'Rolling out the updated brand ecosystem across digital, social, and print channels.' }
    ],
    outcomes: ['Premium Brand Perception', 'Higher Customer Price Willingness', 'Unmistakable Market Distinction', 'Unified Customer Touchpoints'],
    platforms: ['Figma', 'Adobe Creative Cloud', 'After Effects', 'Blender 3D', 'Canva Enterprise'],
    targetIndustries: ['Luxury Goods & Lifestyle', 'High-Growth Tech Startups', 'FinTech & Wealth Management', 'Premium Real Estate', 'Bespoke Services'],
    faqs: [
      { question: 'What is included in a complete Brand Strategy package?', answer: 'Our complete package includes brand positioning documents, visual identity design (logo, colors, typography), design system guidelines, social brand kit, and marketing collateral templates.' },
      { question: 'How long does a brand identity project take?', answer: 'A comprehensive brand identity strategy and visual redesign typically spans 4 to 6 weeks from discovery to final asset delivery.' }
    ],
    metaTitle: 'Brand Strategy & Creative Agency | MyAdSphere',
    metaDescription: 'Craft an unmistakable brand positioning, visual design system, and high-impact ad creative with MyAdSphere.'
  },

  'lead-generation': {
    slug: 'lead-generation',
    number: '07',
    category: 'PERFORMANCE',
    title: 'Lead Generation Systems',
    shortDescription: 'Fill your sales pipeline with high-intent, sales-ready prospects through targeted multi-channel outreach.',
    heroHeadline: 'Fill Your Sales Pipeline With Sales-Ready Prospects.',
    heroSubhead: 'Automated multi-channel B2B lead generation funnels engineered for consistent high-ticket deal opportunities.',
    overview: 'Empty sales calendars kill growth momentum. Our Lead Generation Systems combine targeted multi-channel advertising, high-converting landing page funnels, and automated lead qualification workflows to deliver verified sales prospects directly to your sales team.',
    capabilities: [
      { title: 'Ideal Customer Profile (ICP) Targeting', description: 'Granular audience building based on job title, company size, revenue, tech stack, and intent data.' },
      { title: 'High-Intent Landing Page Funnels', description: 'Building bespoke lead capture funnels optimized for conversion velocity and lead quality.' },
      { title: 'Interactive Quiz & Calculator Funnels', description: 'Engaging qualification tools that pre-frame prospects and score lead quality prior to sales calls.' },
      { title: 'Automated Lead Qualification & Nurture', description: 'Instant SMS and email workflow sequences that confirm appointments and nurture unbooked leads.' },
      { title: 'Multi-Channel B2B Ad Outreach', description: 'Combining LinkedIn Ads, Google Search, and retargeting campaigns to capture active decision-makers.' },
      { title: 'CRM & Pipeline Integration', description: 'Seamlessly syncing captured lead data into Salesforce, HubSpot, or GoHighLevel CRM pipelines.' }
    ],
    process: [
      { step: '01', title: 'ICP & OFFER CLARITY', description: 'Refining your high-ticket offer, target buyer criteria, and core value proposition.' },
      { step: '02', title: 'FUNNEL BUILD', description: 'Building custom mobile-first landing pages, lead intake forms, and calendar booking engines.' },
      { step: '03', title: 'CAMPAIGN DEPLOYMENT', description: 'Launching targeted paid search and social campaigns engineered specifically for lead capture.' },
      { step: '04', title: 'AUTOMATED NURTURE SET-UP', description: 'Configuring instant auto-responder text and email sequences to maximize booking show-up rates.' },
      { step: '05', title: 'PIPELINE OPTIMIZATION', description: 'Weekly tracking of cost per lead (CPL) and qualified pipeline conversion rates.' }
    ],
    outcomes: ['Consistent Monthly Qualified Booked Calls', 'Lower Cost Per Lead (CPL)', 'Higher Sales Appointment Show-Up Rates', 'Automated Lead Nurturing'],
    platforms: ['LinkedIn Sales Navigator', 'HubSpot CRM', 'GoHighLevel', 'Zapier / Make', 'Meta Lead Forms', 'Calendly'],
    targetIndustries: ['B2B Services & Agencies', 'Enterprise Software & IT', 'Commercial Real Estate', 'Financial & Wealth Advisors', 'Corporate Training'],
    faqs: [
      { question: 'How do you ensure lead quality over raw lead volume?', answer: 'We implement multi-step qualification forms, custom intake questions, and deposit/booking friction elements so your sales team spends time only with verified decision-makers.' },
      { question: 'Can you integrate lead data directly into our CRM?', answer: 'Yes. We build custom API webhook integrations with HubSpot, Salesforce, GoHighLevel, Zoho, and Zapier.' }
    ],
    metaTitle: 'B2B Lead Generation Agency | MyAdSphere',
    metaDescription: 'Fill your sales calendar with qualified B2B prospects using automated multi-channel lead generation funnels from MyAdSphere.'
  },

  'conversion-optimization': {
    slug: 'conversion-optimization',
    number: '08',
    category: 'CONVERSION',
    title: 'Conversion Rate Optimization (CRO)',
    shortDescription: 'Extract more revenue from your existing website traffic through data-backed A/B testing and UX refinements.',
    heroHeadline: 'Double Your Revenue Without Spending More On Ads.',
    heroSubhead: 'Data-driven landing page redesigns, behavioral UX analytics, and rigorous A/B testing engineered for maximum conversion velocity.',
    overview: 'Driving traffic to a low-converting website is wasting capital. Our Conversion Rate Optimization (CRO) service uses heatmaps, user session recordings, and quantitative analytics to identify friction points and systematically increase your conversion percentage.',
    capabilities: [
      { title: 'Comprehensive UX & Friction Audit', description: 'Identifying page speed delays, visual hierarchy flaws, and form drop-off points.' },
      { title: 'Behavioral Heatmap & Session Analysis', description: 'Studying real user cursor movements, scroll depth, and interaction click maps.' },
      { title: 'A/B & Multivariate Testing', description: 'Statistically rigorous testing of headline variations, CTA buttons, visual layouts, and checkout flows.' },
      { title: 'High-Converting Landing Page Design', description: 'Designing bespoke landing pages built around proven psychological conversion principles.' },
      { title: 'Form & Checkout Streamlining', description: 'Simplifying form fields and single-page checkout flows to reduce cart abandonment.' },
      { title: 'Mobile UX Optimization', description: 'Eliminating mobile layout bugs and improving thumb-zone navigation for handheld visitors.' }
    ],
    process: [
      { step: '01', title: 'QUANTITATIVE DATA AUDIT', description: 'Analyzing Google Analytics conversion paths, exit rates, and drop-off analytics.' },
      { step: '02', title: 'BEHAVIORAL RESEARCH', description: 'Studying heatmaps, session recordings, and user feedback surveys to identify friction.' },
      { step: '03', title: 'HYPOTHESIS CREATION', description: 'Formulating prioritized hypotheses for design and copy changes expected to increase conversions.' },
      { step: '04', title: 'A/B TEST DEPLOYMENT', description: 'Building and deploying controlled split tests using VWO or Optimizely testing suites.' },
      { step: '05', title: 'WINNER IMPLEMENTATION', description: 'Permanently coding winning variations into site production and moving to the next test cycle.' }
    ],
    outcomes: ['Higher Conversion Percentage Rate', 'Increased Average Order Value (AOV)', 'Lower Customer Acquisition Cost', 'Maximum ROI On Existing Traffic'],
    platforms: ['VWO (Visual Website Optimizer)', 'Hotjar', 'Microsoft Clarity', 'Optimizely', 'Google Analytics 4', 'Figma'],
    targetIndustries: ['E-Commerce & Retail', 'High-Traffic SaaS Platforms', 'Lead Generation Portals', 'Financial Services', 'Subscription Businesses'],
    faqs: [
      { question: 'What website traffic volume is needed for CRO split testing?', answer: 'For statistically significant A/B testing, we recommend websites receiving at least 20,000 unique monthly visitors or 500+ monthly conversion events.' },
      { question: 'Will CRO changes slow down our website speed?', answer: 'No. All test scripts are loaded asynchronously, and winning design variations are cleanly coded directly into your production site infrastructure.' }
    ],
    metaTitle: 'Conversion Rate Optimization (CRO) Agency | MyAdSphere',
    metaDescription: 'Extract more revenue from your existing web traffic through data-driven A/B testing, UX refinements, and landing page engineering.'
  },

  'analytics': {
    slug: 'analytics',
    number: '09',
    category: 'INTELLIGENCE',
    title: 'Analytics & Marketing Intelligence',
    shortDescription: 'Unify multi-channel marketing data into clear, actionable executive dashboards with 100% attribution transparency.',
    heroHeadline: 'Make Bold Growth Decisions Backed By Clean Data.',
    heroSubhead: 'Google Analytics 4 setups, custom Looker Studio dashboards, and full-funnel revenue attribution models.',
    overview: 'Incomplete or inaccurate data leads to bad strategic choices. Our Marketing Intelligence service implements bulletproof GA4 server-side tracking, cleans duplicate attribution data, and builds executive dashboards that show your exact return on marketing investment.',
    capabilities: [
      { title: 'Google Analytics 4 (GA4) Architecture', description: 'Complete custom event tracking, ecommerce schema setup, and user conversion pathway mapping.' },
      { title: 'Server-Side Tagging & CAPI Setup', description: 'Deploying Google Tag Manager Server-Side to capture 100% of conversion data despite ad blockers.' },
      { title: 'Custom Looker Studio Executive Dashboards', description: 'Building real-time visual dashboards aggregating data from Google, Meta, CRM, and Stripe.' },
      { title: 'Multi-Touch Attribution Modeling', description: 'Evaluating first-touch, last-touch, and linear attribution models to determine true marketing ROI.' },
      { title: 'Customer Lifetime Value (LTV) Tracking', description: 'Cohorting user behavior over time to measure repeat purchase rates and net customer value.' },
      { title: 'Automated Insight Alerts & Reporting', description: 'Setting up automated anomaly alerts when conversion rates or ad performance metrics shift.' }
    ],
    process: [
      { step: '01', title: 'DATA DISCREPANCY AUDIT', description: 'Identifying broken tags, double-counting triggers, unlinked ad accounts, and tracking leaks.' },
      { step: '02', title: 'TAG MANAGER ARCHITECTURE', description: 'Building clean GTM event containers and server-side tracking environments.' },
      { step: '03', title: 'DATA PIPELINE CONSOLIDATION', description: 'Connecting ad networks, analytics engines, and payment gateways into a unified dataset.' },
      { step: '04', title: 'DASHBOARD VISUALIZATION', description: 'Designing intuitive, role-based dashboards for CEOs, marketing directors, and media buyers.' },
      { step: '05', title: 'STRATEGIC DATA REVIEWS', description: 'Monthly executive reviews evaluating high-level performance trends and revenue attribution.' }
    ],
    outcomes: ['100% Accurate Revenue Attribution', 'Real-Time Executive Visibility', 'Eliminated Wasted Marketing Spend', 'Confidence In Scaling Budgets'],
    platforms: ['Google Analytics 4', 'Google Tag Manager (Server-Side)', 'Looker Studio', 'Triple Whale', 'Northbeam', 'BigQuery'],
    targetIndustries: ['Multi-Channel E-Commerce', 'B2B Enterprise SaaS', 'Franchise & Multi-Location', 'Media & Publishing', 'Financial Tech'],
    faqs: [
      { question: 'Why is GA4 showing different numbers than our Meta or Google Ads dashboards?', answer: 'Ad platforms use self-attributing 1-day or 7-day click windows and often claim credit for the same sale. We configure unified multi-touch attribution models to reflect actual net revenue.' },
      { question: 'How often do custom dashboards update?', answer: 'Looker Studio and live dashboards refresh in real-time, fetching live data API feeds directly from Google, Meta, and your CRM.' }
    ],
    metaTitle: 'Analytics & Marketing Intelligence Agency | MyAdSphere',
    metaDescription: 'Unify your marketing data into executive Looker Studio dashboards and bulletproof GA4 attribution models with MyAdSphere.'
  }
};
