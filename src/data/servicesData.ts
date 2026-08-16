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
  // 01. Branding & Identity
  'branding-identity': {
    slug: 'branding-identity',
    number: '01',
    category: 'CREATIVE',
    title: 'Branding & Identity',
    shortDescription: 'Build distinctive brands through strategy, positioning, visual identity, logo design, and consistent brand guidelines.',
    heroHeadline: 'Build A Distinctive Brand Built To Lead.',
    heroSubhead: 'Strategic positioning, iconic visual identity, logo design, and comprehensive brand guidelines engineered for market distinction.',
    overview: 'In a noisy digital ecosystem, commodity positioning leads to price wars. Our Branding & Identity service crafts unique brand positioning, memorable visual identities, logo systems, and persuasive messaging frameworks that elevate your agency or company as the undisputed category leader.',
    capabilities: [
      { title: 'Brand Strategy & Positioning', description: 'Defining core brand promises, unique value propositions, elevator pitches, and competitive differentiation.' },
      { title: 'Visual Identity & Logo Design', description: 'Crafting iconic logo marks, typographic scales, color palettes, and visual design assets.' },
      { title: 'Comprehensive Brand Guidelines', description: 'Documenting specifications for typography, color systems, imagery, tone of voice, and usage rules.' },
      { title: 'Packaging & Print Collateral', description: 'Designing physical product packaging, corporate pitch decks, brochures, and digital collateral.' },
      { title: 'Rebranding Transformation', description: 'End-to-end visual overhauls for established companies seeking a modern digital-first aesthetic.' }
    ],
    process: [
      { step: '01', title: 'DISCOVERY & AUDIT', description: 'Analyzing market positioning gaps, target customer psychology, and competitive visual standards.' },
      { step: '02', title: 'STRATEGY & VOICE', description: 'Establishing core brand positioning, key messaging pillars, and tone of voice attributes.' },
      { step: '03', title: 'VISUAL SYSTEM DESIGN', description: 'Creating visual moodboards, logo iterations, typography systems, and color schemes.' },
      { step: '04', title: 'GUIDELINES & ASSETS', description: 'Compiling complete brand guidelines, design kits, ad templates, and collateral specs.' },
      { step: '05', title: 'BRAND DEPLOYMENT', description: 'Rolling out the updated brand identity across website, social channels, and media campaigns.' }
    ],
    outcomes: ['Premium Market Perception', 'Unmistakable Visual Identity', 'Higher Customer Price Willingness', 'Consistent Customer Touchpoints'],
    platforms: ['Figma', 'Adobe Illustrator', 'Photoshop', 'InDesign', 'After Effects'],
    targetIndustries: ['D2C Brands', 'Enterprise SaaS', 'Luxury Real Estate', 'FinTech & Banking', 'Professional Services'],
    faqs: [
      { question: 'What is included in a complete Branding & Identity package?', answer: 'Our complete package includes brand positioning documents, logo design, color typography systems, comprehensive brand guidelines, social brand kit, and marketing collateral templates.' },
      { question: 'How long does a brand identity project take?', answer: 'A comprehensive brand identity strategy and visual redesign typically spans 4 to 6 weeks from discovery to final asset delivery.' }
    ],
    metaTitle: 'Branding & Identity Agency | MyAdSphere',
    metaDescription: 'Build distinctive brands through strategy, positioning, visual identity, logo design, and consistent brand guidelines with MyAdSphere.'
  },

  // 02. Content & Creative Production
  'content-creative-production': {
    slug: 'content-creative-production',
    number: '02',
    category: 'CREATIVE',
    title: 'Content & Creative Production',
    shortDescription: 'High-impact graphics, ad creatives, reels, videos, photography, copywriting, and campaign concepts designed to capture attention.',
    heroHeadline: 'High-Impact Creative Engineered To Stop The Scroll.',
    heroSubhead: 'High-converting graphic design, short-form video ads, motion graphics, photography, and persuasive campaign copywriting.',
    overview: 'Creative content is the primary lever for digital growth. We combine consumer psychology with high-production visual design to create ad assets, reels, static graphics, and campaign concepts that stop user scrolling and turn attention into measurable conversions.',
    capabilities: [
      { title: 'Performance Ad Creatives', description: 'Designing static graphics and short-form video variations tested systematically across paid ad channels.' },
      { title: 'Reels, TikTok & Short-Form Video', description: 'Hook-driven scriptwriting, filming direction, motion graphics, and fast-paced editing tailored for algorithms.' },
      { title: 'Persuasive Campaign Copywriting', description: 'Writing high-converting ad copy, landing page headlines, video scripts, and marketing copy.' },
      { title: 'Brand Photography & Video Assets', description: 'Professional product photography, lifestyle shoots, and cinematic video assets.' },
      { title: 'Creative Testing Framework', description: 'Systematically testing visual hooks, angles, callouts, and formats to combat ad fatigue.' }
    ],
    process: [
      { step: '01', title: 'CREATIVE BRIEF & HOOKS', description: 'Analyzing audience pain points and brainstorming high-converting visual hooks and campaign concepts.' },
      { step: '02', title: 'SCRIPTING & STORYBOARDING', description: 'Drafting video scripts, visual storyboards, and ad copy frameworks for rapid execution.' },
      { step: '03', title: 'PRODUCTION & EDITING', description: 'Executing motion graphic design, video editing, photo enhancement, and sound design.' },
      { step: '04', title: 'VARIATION DEPLOYMENT', description: 'Exporting multiple ratio formats (9:16, 1:1, 16:9) with customized hooks and CTAs.' },
      { step: '05', title: 'PERFORMANCE ANALYSIS', description: 'Tracking hook rates, click-through rates (CTR), and conversion volume to refine future batches.' }
    ],
    outcomes: ['Higher Ad Click-Through Rates (CTR)', 'Lower Cost Per Acquisition (CPA)', 'Combated Ad Fatigue', 'Increased Engagement Velocity'],
    platforms: ['After Effects', 'Premiere Pro', 'Figma', 'Photoshop', 'CapCut Pro', 'Blender 3D'],
    targetIndustries: ['E-Commerce & D2C', 'Consumer Brands', 'SaaS & Tech', 'Lifestyle & Fitness', 'Real Estate'],
    faqs: [
      { question: 'Do you create both video ads and static graphic ads?', answer: 'Yes, our creative team produces short-form video reels, 3D motion graphics, static feed ads, carousel graphics, and persuasive copywriting.' },
      { question: 'How many creative variations do you deliver?', answer: 'We deliver batch creative packs with multiple hook variations, aspect ratios (vertical, square, horizontal), and copy angles built for rapid ad testing.' }
    ],
    metaTitle: 'Content & Creative Production Agency | MyAdSphere',
    metaDescription: 'High-impact graphics, ad creatives, reels, videos, photography, copywriting, and campaign concepts designed to capture attention.'
  },

  // 03. Social Media Marketing
  'social-media-marketing': {
    slug: 'social-media-marketing',
    number: '03',
    category: 'ORGANIC GROWTH',
    title: 'Social Media Marketing',
    shortDescription: 'Strategic content, publishing, community management, and social campaigns designed to build awareness, engagement, and growth.',
    heroHeadline: 'Turn Social Feeds Into High-Growth Brand Assets.',
    heroSubhead: 'Strategic organic content, algorithmic publishing, community management, and viral campaigns built for sustained audience growth.',
    overview: 'Modern social media management isn’t about posting vanity images—it is about positioning your brand at the heart of cultural conversations. We design high-retention short-form video, aesthetic feed grids, and active community management that turn followers into brand advocates.',
    capabilities: [
      { title: 'Organic Content Strategy & Calendar', description: 'Data-driven content pillars, publishing schedules, and channel-specific distribution strategies.' },
      { title: 'Short-Form Video Production (Reels/TikTok)', description: 'Hook-driven scriptwriting, editing, and motion design tailored for algorithmic viral reach.' },
      { title: 'Community Management & DM Nurture', description: 'Active comment management and DM lead generation strategies that humanize your brand.' },
      { title: 'Social Listening & Trend Capitalization', description: 'Real-time monitoring of industry trends to jump on high-engagement viral formats.' },
      { title: 'Creator & Influencer Collaborations', description: 'Partnering with relevant creators for product placements, co-created content, and brand endorsement.' }
    ],
    process: [
      { step: '01', title: 'AUDIENCE & CHANNEL AUDIT', description: 'Analyzing existing social presence, target demographics, and top-performing competitor formats.' },
      { step: '02', title: 'CONTENT SYSTEM CREATION', description: 'Establishing visual guidelines, tone of voice, content pillars, and monthly editorial calendars.' },
      { step: '03', title: 'PRODUCTION & EDITING', description: 'Editing short-form video clips, carousel graphics, and persuasive caption copywriting.' },
      { step: '04', title: 'ALGORITHMIC PUBLISHING', description: 'Posting at peak audience activity hours with optimized hashtags, audio trends, and tagging.' },
      { step: '05', title: 'COMMUNITY & GROWTH', description: 'Engaging with followers and industry accounts to convert social attention into business growth.' }
    ],
    outcomes: ['Higher Organic Reach & Impressions', 'Accelerated Follower Growth', 'Stronger Brand Community Loyalty', 'Direct Social Lead Generation'],
    platforms: ['Instagram', 'LinkedIn', 'TikTok', 'YouTube Shorts', 'X (Twitter)', 'Later / Buffer'],
    targetIndustries: ['D2C & Consumer Brands', 'Hospitality & Dining', 'Fitness & Lifestyle', 'Personal Brands & Founders', 'E-Commerce Retail'],
    faqs: [
      { question: 'Which social media channels should our business focus on?', answer: 'We tailor the platform mix to your target audience. B2B and SaaS brands thrive on LinkedIn and X, while D2C, retail, and lifestyle brands achieve maximum ROI on Instagram and TikTok.' },
      { question: 'Do you manage comments and direct messages?', answer: 'Yes. We provide active community management to respond to customer inquiries, manage comments, and capture leads directly via DMs.' }
    ],
    metaTitle: 'Social Media Marketing Agency | MyAdSphere',
    metaDescription: 'Strategic content, publishing, community management, and social campaigns designed to build awareness, engagement, and growth.'
  },

  // 04. Website Design & Development
  'website-design-development': {
    slug: 'website-design-development',
    number: '04',
    category: 'CONVERSION',
    title: 'Website Design & Development',
    shortDescription: 'Fast, responsive, SEO-ready, and conversion-focused websites that combine premium design with seamless digital experiences.',
    heroHeadline: 'High-Performance Websites Built To Scale & Convert.',
    heroSubhead: 'Custom web design, Next.js / Webflow development, speed optimization, and CRO layouts engineered for maximum conversion velocity.',
    overview: 'Your website is your agency’s digital headquarters. We design and build ultra-fast, responsive, SEO-optimized, and conversion-focused web experiences that combine luxury aesthetic design with seamless functionality to turn visitors into paying customers.',
    capabilities: [
      { title: 'Custom UI/UX & Design Systems', description: 'Designing bespoke visual mockups, Figma design systems, and responsive layouts tailored to your brand.' },
      { title: 'Next.js, React & Webflow Development', description: 'Clean, modern code architecture delivering lightning-fast page load times and 100/100 Core Web Vitals.' },
      { title: 'Conversion Rate Optimization (CRO)', description: 'Strategic page hierarchy, intuitive navigation, clear call-to-action pathways, and friction-free checkout flows.' },
      { title: 'SEO-Ready Architecture & Schema', description: 'Built-in technical SEO, structured data schema, canonical tags, and mobile-first responsiveness.' },
      { title: 'CMS & E-Commerce Integration', description: 'Integrating seamless content management systems (Sanity, Shopify, Webflow) for easy updates.' }
    ],
    process: [
      { step: '01', title: 'UX DISCOVERY & WIREFRAMING', description: 'Mapping user journeys, sitemaps, information hierarchy, and high-converting page structures.' },
      { step: '02', title: 'HIGH-FIDELITY DESIGN', description: 'Designing interactive Figma prototypes with custom typography, dark glass components, and animations.' },
      { step: '03', title: 'FRONTEND DEVELOPMENT', description: 'Building fast, responsive web pages using modern Next.js/React framework code.' },
      { step: '04', title: 'SEO & SPEED OPTIMIZATION', description: 'Optimizing image assets, Core Web Vitals, schema markup, and cross-browser responsiveness.' },
      { step: '05', title: 'LAUNCH & HANDOFF', description: 'Deploying to high-availability Vercel hosting with complete admin documentation.' }
    ],
    outcomes: ['Sub-Second Page Load Speeds', 'Higher Conversion Rates', 'First-Page SEO Readiness', 'Flawless Mobile Experience'],
    platforms: ['Next.js', 'React', 'TailwindCSS', 'Webflow', 'Shopify', 'Figma', 'Vercel'],
    targetIndustries: ['Enterprise SaaS', 'D2C E-Commerce', 'Professional Services', 'Real Estate', 'Healthcare & Clinics'],
    faqs: [
      { question: 'What tech stack do you use to build websites?', answer: 'We build high-performance websites primarily using Next.js/React, TailwindCSS, and Vercel for custom web apps, or Webflow and Shopify for manageable CMS and e-commerce stores.' },
      { question: 'Will our website be mobile-friendly and optimized for SEO?', answer: '100% yes. Every website we build is mobile-first responsive, optimized for Core Web Vitals, and pre-configured with technical SEO schema markup.' }
    ],
    metaTitle: 'Website Design & Development Agency | MyAdSphere',
    metaDescription: 'Fast, responsive, SEO-ready, and conversion-focused websites that combine premium design with seamless digital experiences.'
  },

  // 05. Search Engine Optimization (SEO)
  'seo': {
    slug: 'seo',
    number: '05',
    category: 'ORGANIC GROWTH',
    title: 'Search Engine Optimization (SEO)',
    shortDescription: 'Technical, on-page, off-page, and local SEO strategies designed to improve rankings, visibility, and qualified organic traffic.',
    heroHeadline: 'Dominate Organic Search & Capture High-Intent Buyers.',
    heroSubhead: 'Technical SEO, keyword authority engineering, topical content clusters, and white-hat link building built for top Google rankings.',
    overview: 'Search Engine Optimization is the highest-margin acquisition channel for digital brands. Our SEO framework pairs technical site auditing with topical authority content clusters and high-authority link outreach to capture non-branded search demand.',
    capabilities: [
      { title: 'Technical SEO & Core Web Vitals', description: 'Auditing crawl budget, page speed acceleration, JavaScript indexing, and schema markup.' },
      { title: 'Keyword Intelligence & Intent Mapping', description: 'Identifying commercial and transactional keyword terms with high purchase intent.' },
      { title: 'Topical Authority Content Clusters', description: 'Structuring pillar pages and supporting articles to establish undeniable category authority.' },
      { title: 'High-Authority Link Acquisition', description: 'White-hat digital PR and outreach securing backlinks from authoritative industry publications.' },
      { title: 'Local & Multi-Location SEO', description: 'Optimizing Google Business Profiles and localized citation networks for local market dominance.' }
    ],
    process: [
      { step: '01', title: 'TECHNICAL SITE AUDIT', description: 'Comprehensive site scan identifying indexing bottlenecks, duplicate content, and speed issues.' },
      { step: '02', title: 'KEYWORD MAPPING', description: 'Mapping search intent against page architecture to establish strategic content roadmaps.' },
      { step: '03', title: 'ON-PAGE OPTIMIZATION', description: 'Updating meta tags, heading structures, internal linking, and topical content hubs.' },
      { step: '04', title: 'AUTHORITY LINK BUILDING', description: 'Targeted outreach to industry press and authoritative domains to build domain rank potential.' },
      { step: '05', title: 'CONVERSION MONETIZATION', description: 'Optimizing organic landing page UX to convert incoming search traffic into sales leads.' }
    ],
    outcomes: ['Top Google Rankings', 'Compounding Monthly Organic Traffic', 'Decreased Ad Spend Dependency', 'Higher Organic Lead Conversion'],
    platforms: ['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Schema.org'],
    targetIndustries: ['B2B SaaS & Tech', 'Professional & Legal Services', 'Healthcare & Clinics', 'Real Estate & Property', 'Higher Education'],
    faqs: [
      { question: 'How long does SEO take to show meaningful revenue results?', answer: 'SEO is a compounding growth asset. Initial technical fixes reflect within 30 to 60 days, while primary keyword ranking dominance and traffic spikes accelerate between months 3 and 6.' },
      { question: 'Will SEO help reduce our paid Google Ads spend?', answer: 'Yes. As your organic rankings capture top-of-funnel and transactional search volume, you can reduce paid search bids on competitive keywords while maintaining lead volume.' }
    ],
    metaTitle: 'Search Engine Optimization (SEO) Agency | MyAdSphere',
    metaDescription: 'Technical, on-page, off-page, and local SEO strategies designed to improve rankings, visibility, and qualified organic traffic.'
  },

  // 06. Performance Marketing
  'performance-marketing': {
    slug: 'performance-marketing',
    number: '06',
    category: 'PERFORMANCE',
    title: 'Performance Marketing',
    shortDescription: 'Full-funnel, data-driven advertising strategies focused on customer acquisition, conversions, revenue, and measurable ROI.',
    heroHeadline: 'Full-Funnel Advertising Engineered For Scalable Revenue.',
    heroSubhead: 'Data-driven performance campaigns built around high ROAS, customer LTV, first-party tracking, and profitable growth.',
    overview: 'Our Performance Marketing framework treats ad spend as a calculated investment engine. We design end-to-end multi-channel acquisition funnels, test high-converting creative at scale, and optimize bidding algorithms in real-time to drive predictable revenue.',
    capabilities: [
      { title: 'Full-Funnel Acquisition Funnels', description: 'Unified ad account structures engineered for efficient budget allocation across Google, Meta, and multi-channel networks.' },
      { title: 'Algorithmic Bid Optimization', description: 'Smart bidding strategies leveraging machine learning to capture high-intent buyers at optimal CPA.' },
      { title: 'Rapid Creative Testing Frameworks', description: 'Systematic visual and copy variations tested weekly to combat ad fatigue and maximize click velocity.' },
      { title: 'First-Party Server Tracking (CAPI)', description: 'Server-side tracking setups ensuring 100% data accuracy despite browser privacy updates.' },
      { title: 'Real-Time Revenue Attribution', description: 'Custom live dashboards blending ad spend, cost per acquisition (CPA), and net return on ad spend (ROAS).' }
    ],
    process: [
      { step: '01', title: 'AUDIT & BENCHMARKS', description: 'Deep-dive audit of historical ad spend, conversion tracking accuracy, and competitor benchmarks.' },
      { step: '02', title: 'FUNNEL BLUEPRINT', description: 'Building custom audience segments, offer positioning, and multi-channel campaign blueprints.' },
      { step: '03', title: 'CREATIVE DEPLOYMENT', description: 'Deploying high-impact visual hooks, ad copy variations, and dedicated landing page funnels.' },
      { step: '04', title: 'REAL-TIME OPTIMIZATION', description: 'Daily bid adjustments, audience pruning, and scaling high-performing campaign angles.' },
      { step: '05', title: 'COMPOUNDING SCALE', description: 'Expanding to secondary ad networks and increasing daily budgets while preserving target ROAS.' }
    ],
    outcomes: ['Predictable Revenue Velocity', 'Lower Cost Per Acquisition (CPA)', 'Higher Return On Ad Spend (ROAS)', 'Full Attribution Transparency'],
    platforms: ['Google Ads', 'Meta Ads (FB/IG)', 'LinkedIn Ads', 'TikTok Ads', 'Meta CAPI', 'Google Tag Manager'],
    targetIndustries: ['E-Commerce & D2C', 'SaaS & Enterprise B2B', 'Real Estate & Property', 'FinTech & Financials', 'Healthcare & Wellness'],
    faqs: [
      { question: 'What minimum ad budget do you recommend for performance campaigns?', answer: 'We typically recommend a minimum ad spend of $3,000 to $5,000 per month per primary channel to allow statistical significance for algorithm learning and rapid creative testing.' },
      { question: 'How quickly can we expect measurable ROAS improvements?', answer: 'Initial campaign architecture and tracking are established in Week 1. Positive performance trends and data-backed optimization insights generally emerge within 14 to 21 days of active spend.' }
    ],
    metaTitle: 'Performance Marketing Agency | MyAdSphere',
    metaDescription: 'Full-funnel, data-driven advertising strategies focused on customer acquisition, conversions, revenue, and measurable ROI.'
  },

  // 07. Google Ads / PPC
  'google-ads-ppc': {
    slug: 'google-ads-ppc',
    number: '07',
    category: 'PERFORMANCE',
    title: 'Google Ads / PPC',
    shortDescription: 'High-intent Search, Display, YouTube, Shopping, and Performance Max campaigns built to generate measurable business results.',
    heroHeadline: 'Capture High-Intent Buyers Searching For Your Product.',
    heroSubhead: 'High-converting Google Search, Performance Max, Shopping feeds, YouTube Ads, and retargeting engineered for maximum ROI.',
    overview: 'Our Google Ads / PPC service targets active buyers at the exact moment of search intent. By combining high-converting ad copy, negative keyword filters, and landing page congruency, we eliminate wasted ad spend and maximize pipeline throughput.',
    capabilities: [
      { title: 'Google Search & Intent Bidding', description: 'Capturing bottom-of-funnel transactional keyword searches with tightly structured ad groups.' },
      { title: 'Google Shopping & Performance Max', description: 'Optimizing product feed data, title structures, and asset groups for maximum e-commerce revenue.' },
      { title: 'YouTube Video Advertising', description: 'High-impact skippable video ads engineered to build product awareness and drive direct site visits.' },
      { title: 'Negative Keyword & Placement Filters', description: 'Continuous budget protection by filtering out low-quality queries and non-performing placements.' },
      { title: 'Ad Copywriting & Extensions', description: 'Writing compelling ad copy, sitelinks, callouts, and structured snippet extensions.' }
    ],
    process: [
      { step: '01', title: 'ACCOUNT AUDIT', description: 'Eliminating duplicate keywords, broad match bleed, and fragmented campaign setups.' },
      { step: '02', title: 'KEYWORD ARCHITECTURE', description: 'Structuring campaign themes around high-margin products and customer pain points.' },
      { step: '03', title: 'COPY & EXTENSIONS', description: 'Writing compelling ad text, sitelinks, callouts, and structured snippet extensions.' },
      { step: '04', title: 'SMART BIDDING', description: 'Transitioning from manual bidding to Target CPA or Target ROAS smart bidding models.' },
      { step: '05', title: 'WEEKLY SCALE', description: 'Expanding to high-performing secondary search terms and competitor conquesting campaigns.' }
    ],
    outcomes: ['Reduced Cost Per Click (CPC)', 'Higher Conversion Rates', 'Maximum Search Share On Profit Keywords', 'Transparent ROI Reporting'],
    platforms: ['Google Search', 'Google Shopping (PMax)', 'YouTube Ads', 'Google Display Network', 'Google Tag Manager'],
    targetIndustries: ['E-Commerce & Retail', 'Professional Services', 'Real Estate Development', 'Healthcare Clinics', 'Higher Education'],
    faqs: [
      { question: 'Will our company maintain full ownership of the Google Ads account?', answer: '100% yes. You maintain complete administrative ownership of your Google Ads account, campaign history, and billing settings at all times.' },
      { question: 'How do you prevent wasted ad spend on irrelevant search terms?', answer: 'We implement extensive negative keyword lists, exact match intent structures, and continuous search query filtering to block non-converting traffic.' }
    ],
    metaTitle: 'Google Ads & PPC Agency | MyAdSphere',
    metaDescription: 'High-intent Search, Display, YouTube, Shopping, and Performance Max campaigns built to generate measurable business results.'
  },

  // 08. Meta Ads
  'meta-ads': {
    slug: 'meta-ads',
    number: '08',
    category: 'PERFORMANCE',
    title: 'Meta Ads',
    shortDescription: 'Conversion-focused Facebook and Instagram campaigns powered by precise targeting, creative testing, retargeting, and continuous optimization.',
    heroHeadline: 'Conversion-Focused Facebook & Instagram Campaigns.',
    heroSubhead: 'Scale customer acquisition with high-impact video creatives, Meta CAPI integration, lookalike audiences, and rapid ad testing.',
    overview: 'Meta Ads remain the most powerful paid social engine for customer acquisition. We build full-funnel Facebook and Instagram ad campaigns using rapid creative batch testing, dynamic catalog ads, and server-side CAPI tracking to turn social impressions into scalable revenue.',
    capabilities: [
      { title: 'Full-Funnel Campaign Architecture', description: 'Structuring prospect acquisition, middle-of-funnel engagement, and bottom-of-funnel retargeting.' },
      { title: 'Creative Batch Testing System', description: 'Testing visual hooks, video angles, headline copy, and CTAs to find winning ad combinations.' },
      { title: 'Meta Conversion API (CAPI) Setup', description: 'Deploying server-side tracking to capture 100% of conversion data despite iOS privacy updates.' },
      { title: 'Dynamic Product Ads (DPA)', description: 'Automate personalized product catalog ad carousels targeting past website visitors.' },
      { title: 'Custom & Lookalike Audience Scaling', description: 'Leveraging high-value purchaser lists to train Meta AI algorithms for high-ROAS prospecting.' }
    ],
    process: [
      { step: '01', title: 'PIXEL & CAPI AUDIT', description: 'Verifying server-side tracking setup, custom conversion events, and catalog feeds.' },
      { step: '02', title: 'CREATIVE ANGLE MAP', description: 'Developing customer objection angles, visual hooks, and script storyboards.' },
      { step: '03', title: 'CAMPAIGN LAUNCH', description: 'Deploying campaign structures with controlled budget splits for rapid testing.' },
      { step: '04', title: 'CREATIVE PRUNING', description: 'Killing underperforming creative angles early and scaling budget into winning ads.' },
      { step: '05', title: 'RETARGETING & SCALE', description: 'Nurturing warm traffic with offer carousels and testimonial video ads to maximize ROAS.' }
    ],
    outcomes: ['Higher Ad ROAS', 'Lower Customer Acquisition Cost (CAC)', 'Continuous Creative Pipeline', 'Predictable Monthly Revenue'],
    platforms: ['Meta Ads Manager', 'Instagram Ads', 'Facebook Shops', 'Meta CAPI', 'AdEspresso'],
    targetIndustries: ['E-Commerce & D2C', 'Consumer Brands', 'SaaS Platforms', 'Real Estate', 'Fitness & Wellness'],
    faqs: [
      { question: 'How do Meta Ads handle iOS privacy restrictions?', answer: 'We implement Meta Conversion API (CAPI) via server-side Google Tag Manager, custom domain tracking, and first-party attribution software.' },
      { question: 'How often do you refresh ad creatives?', answer: 'We refresh ad creatives weekly or bi-weekly depending on daily ad spend volume to prevent creative fatigue and maintain high ROAS.' }
    ],
    metaTitle: 'Meta Ads & Facebook Advertising Agency | MyAdSphere',
    metaDescription: 'Conversion-focused Facebook and Instagram campaigns powered by precise targeting, creative testing, retargeting, and continuous optimization.'
  },

  // 09. Lead Generation & Funnels
  'lead-generation': {
    slug: 'lead-generation',
    number: '09',
    category: 'PERFORMANCE',
    title: 'Lead Generation & Funnels',
    shortDescription: 'Targeted campaigns, high-converting landing pages, lead funnels, CRM integrations, and nurturing systems built to generate qualified opportunities.',
    heroHeadline: 'Fill Your Sales Calendar With Qualified Opportunities.',
    heroSubhead: 'Automated multi-channel B2B lead generation funnels, qualification intake forms, and CRM nurturing workflows engineered for scale.',
    overview: 'Empty sales calendars kill business momentum. Our Lead Generation & Funnels service combines targeted search and social advertising with custom landing page funnels, qualification intake forms, and automated CRM workflows to deliver verified sales leads directly to your sales team.',
    capabilities: [
      { title: 'High-Converting Landing Page Funnels', description: 'Building bespoke lead capture funnels optimized for conversion velocity and lead quality.' },
      { title: 'Interactive Quiz & Qualification Forms', description: 'Engaging qualification tools that pre-frame prospects and score lead quality prior to sales calls.' },
      { title: 'Targeted B2B Ad Outreach', description: 'Combining Google Search, LinkedIn Ads, and Meta campaigns to capture active decision-makers.' },
      { title: 'Automated Lead Nurture & SMS', description: 'Configuring instant SMS and email workflows to confirm appointments and boost booking show-up rates.' },
      { title: 'CRM & Pipeline Synchronization', description: 'Syncing captured lead data into HubSpot, Salesforce, or GoHighLevel CRM systems.' }
    ],
    process: [
      { step: '01', title: 'ICP & OFFER CLARITY', description: 'Refining target buyer criteria, high-ticket offer positioning, and intake questions.' },
      { step: '02', title: 'FUNNEL ARCHITECTURE', description: 'Building custom mobile-first landing pages, lead intake forms, and calendar booking engines.' },
      { step: '03', title: 'CAMPAIGN LAUNCH', description: 'Deploying targeted paid search and social campaigns engineered specifically for lead capture.' },
      { step: '04', title: 'AUTOMATED NURTURE', description: 'Configuring instant auto-responder text and email sequences to maximize booking show-up rates.' },
      { step: '05', title: 'PIPELINE OPTIMIZATION', description: 'Weekly tracking of cost per lead (CPL) and qualified pipeline conversion rates.' }
    ],
    outcomes: ['Consistent Booked Sales Calls', 'Lower Cost Per Lead (CPL)', 'Higher Show-Up Rates', 'Automated Lead Qualification'],
    platforms: ['HubSpot CRM', 'GoHighLevel', 'Salesforce', 'LinkedIn Ads', 'Zapier / Make', 'Calendly'],
    targetIndustries: ['B2B Services & Agencies', 'Enterprise Software & IT', 'Commercial Real Estate', 'Financial & Wealth Advisors', 'Corporate Training'],
    faqs: [
      { question: 'How do you ensure lead quality over raw lead volume?', answer: 'We implement multi-step qualification forms, custom intake questions, and booking friction elements so your sales team spends time only with verified decision-makers.' },
      { question: 'Can you integrate lead data directly into our CRM?', answer: 'Yes. We build custom API webhook integrations with HubSpot, Salesforce, GoHighLevel, Zoho, and Zapier.' }
    ],
    metaTitle: 'Lead Generation & Funnels Agency | MyAdSphere',
    metaDescription: 'Targeted campaigns, high-converting landing pages, lead funnels, CRM integrations, and nurturing systems built to generate qualified opportunities.'
  },

  // 10. E-commerce Marketing
  'ecommerce-marketing': {
    slug: 'ecommerce-marketing',
    number: '10',
    category: 'PERFORMANCE',
    title: 'E-commerce Marketing',
    shortDescription: 'Integrated advertising, SEO, creative, remarketing, and conversion strategies designed to scale e-commerce and D2C brands.',
    heroHeadline: 'Scale D2C & E-Commerce Brands Past 8-Figure Milestones.',
    heroSubhead: 'Integrated Meta & Google Shopping ad scaling, Shopify CRO, retention email flows, and catalog marketing engineered for high ROAS.',
    overview: 'Scaling an e-commerce brand requires a synchronized growth engine. We integrate high-ROAS Performance Max search ads, Meta ad batch testing, Shopify conversion rate optimization, and automated Klaviyo email flows to drive customer acquisition and maximize lifetime value (LTV).',
    capabilities: [
      { title: 'Google Shopping & Performance Max', description: 'Optimizing product feeds, title attributes, and asset groups to maximize search purchase revenue.' },
      { title: 'Meta Dynamic Catalog Advertising', description: 'Automating personalized product carousel retargeting for store visitors and cart abandoners.' },
      { title: 'Shopify Conversion Rate Optimization', description: 'Streamlining product detail pages (PDPs), cart drawers, and single-click checkout flows.' },
      { title: 'Klaviyo Email & SMS Retention', description: 'Setting up automated welcome series, abandoned cart recovery, and VIP customer win-back flows.' },
      { title: 'E-Commerce SEO & Product Schema', description: 'Optimizing category and product pages with structured data schema for organic Google Shopping listings.' }
    ],
    process: [
      { step: '01', title: 'STORE & METRIC AUDIT', description: 'Analyzing historical ROAS, Average Order Value (AOV), customer acquisition cost (CAC), and LTV.' },
      { step: '02', title: 'FEED & TRACKING FIX', description: 'Optimizing Shopify product feeds, Google Merchant Center, and Meta CAPI pixel tracking.' },
      { step: '03', title: 'CREATIVE & CAMPAIGN LAUNCH', description: 'Deploying high-converting ad creative variations, catalog ads, and Shopping search campaigns.' },
      { step: '04', title: 'RETENTION FLOWS', description: 'Building automated Klaviyo abandoned cart, browse abandonment, and post-purchase email flows.' },
      { step: '05', title: 'AOV & SCALE OPTIMIZATION', description: 'Implementing up-sell bundles and scaling ad budgets while maintaining target ROAS thresholds.' }
    ],
    outcomes: ['Higher Store Revenue & ROAS', 'Increased Average Order Value (AOV)', 'Lower Cart Abandonment Rates', 'Higher Customer Lifetime Value (LTV)'],
    platforms: ['Shopify Plus', 'Klaviyo', 'Google Merchant Center', 'Meta Ads', 'Rebuy', 'Yotpo'],
    targetIndustries: ['D2C Fashion & Apparel', 'Health & Beauty Brands', 'Consumer Electronics', 'Home & Kitchen Retail', 'Nutritional Supplements'],
    faqs: [
      { question: 'Do you work with Shopify and WooCommerce stores?', answer: 'Yes. We specialize in scaling Shopify, Shopify Plus, and WooCommerce stores with custom app integrations, CRO layouts, and ad feed management.' },
      { question: 'How do you increase Average Order Value (AOV)?', answer: 'We implement in-cart cross-sells, bundle offers, free shipping threshold progress bars, and post-purchase single-click upsells.' }
    ],
    metaTitle: 'E-Commerce Marketing Agency | MyAdSphere',
    metaDescription: 'Integrated advertising, SEO, creative, remarketing, and conversion strategies designed to scale e-commerce and D2C brands.'
  },

  // 11. Marketing Automation & CRM
  'marketing-automation-crm': {
    slug: 'marketing-automation-crm',
    number: '11',
    category: 'INTELLIGENCE',
    title: 'Marketing Automation & CRM',
    shortDescription: 'Automate lead capture, follow-ups, customer journeys, CRM workflows, and repetitive marketing processes to improve efficiency and conversions.',
    heroHeadline: 'Automate Customer Journeys & Eliminate Manual Overhead.',
    heroSubhead: 'Automated CRM workflows, lead scoring, multi-channel email/SMS follow-up series, and pipeline automation built for efficiency.',
    overview: 'Manual marketing processes waste sales bandwidth and let leads slip through the cracks. Our Marketing Automation & CRM service builds automated lead scoring, multi-channel follow-up sequences, CRM pipeline workflows, and customer lifecycle journeys to turn leads into revenue on autopilot.',
    capabilities: [
      { title: 'Automated Lead Capture & Routing', description: 'Instantly routing incoming website leads to the right sales reps based on region, industry, or deal size.' },
      { title: 'Multi-Channel Email & SMS Sequences', description: 'Automated follow-up campaigns that nurture prospects from initial inquiry to booked appointment.' },
      { title: 'CRM Pipeline & Lifecycle Workflows', description: 'Configuring custom pipeline stages, lead scoring triggers, and task automation in HubSpot or GoHighLevel.' },
      { title: 'Customer Onboarding Automation', description: 'Streamlining contract sending, welcome emails, intake forms, and onboarding tasks automatically.' },
      { title: 'Database Hygiene & Re-engagement', description: 'Automating database cleaning, unengaged subscriber pruning, and win-back lead reactivation campaigns.' }
    ],
    process: [
      { step: '01', title: 'JOURNEY AUDIT', description: 'Mapping customer touchpoints, sales pipeline drop-offs, and manual team bottlenecks.' },
      { step: '02', title: 'CRM ARCHITECTURE', description: 'Structuring custom fields, pipeline deal stages, lifecycle tags, and lead scoring matrices.' },
      { step: '03', title: 'WORKFLOW BUILD', description: 'Creating multi-step automated email/SMS sequences, internal notification triggers, and webhooks.' },
      { step: '04', title: 'TESTING & VERIFICATION', description: 'Running end-to-end test leads through all logic branches to ensure 100% reliable execution.' },
      { step: '05', title: 'TEAM TRAINING', description: 'Training your sales and marketing team on CRM usage and automated task management.' }
    ],
    outcomes: ['Zero Missed Sales Leads', 'Faster Lead Response Times', 'Higher Lead Conversion Rates', 'Eliminated Manual Operational Overhead'],
    platforms: ['HubSpot CRM', 'GoHighLevel', 'ActiveCampaign', 'Zapier', 'Make.com', 'Salesforce'],
    targetIndustries: ['B2B Services', 'Real Estate Agencies', 'Financial Advisors', 'Healthcare Clinics', 'Higher Education'],
    faqs: [
      { question: 'Which CRM platforms do you build automation for?', answer: 'We specialize in HubSpot CRM, GoHighLevel, ActiveCampaign, Salesforce, and custom Zapier/Make webhooks.' },
      { question: 'How quickly does automated lead response improve conversions?', answer: 'Responding to incoming leads within 5 minutes increases conversion rates by up to 391% compared to waiting 30 minutes.' }
    ],
    metaTitle: 'Marketing Automation & CRM Agency | MyAdSphere',
    metaDescription: 'Automate lead capture, follow-ups, customer journeys, CRM workflows, and repetitive marketing processes to improve efficiency and conversions.'
  },

  // 12. AI Solutions & Automation
  'ai-solutions-automation': {
    slug: 'ai-solutions-automation',
    number: '12',
    category: 'INTELLIGENCE',
    title: 'AI Solutions & Automation',
    shortDescription: 'AI agents, intelligent chatbots, automated workflows, and custom AI solutions designed to help businesses operate smarter and scale faster.',
    heroHeadline: 'Deploy AI Agents & Automation Built For Scale.',
    heroSubhead: 'Custom AI chatbots, intelligent lead qualifiers, automated workflow agents, and machine learning integrations built for business efficiency.',
    overview: 'Artificial Intelligence is revolutionizing digital business operations. Our AI Solutions & Automation service builds intelligent AI customer service agents, automated lead qualifiers, generative content workflows, and custom API integrations that help your business operate 24/7 with minimal manual overhead.',
    capabilities: [
      { title: '24/7 AI Customer Service Chatbots', description: 'Deploying trained AI agents that answer site visitor questions, qualify leads, and book sales calls automatically.' },
      { title: 'AI Lead Scoring & Voice Agents', description: 'Automating phone lead qualification, appointment confirmation calls, and instant SMS interactions.' },
      { title: 'Generative Content & Ad Workflows', description: 'Setting up custom AI prompt frameworks for rapid ad copy generation, SEO drafting, and research.' },
      { title: 'Custom AI API & LLM Integrations', description: 'Connecting OpenAI, Anthropic Claude, or custom LLMs directly into your internal business software.' },
      { title: 'Automated Operations & Data Extraction', description: 'Building AI document processors, email parsers, and automated reporting bots.' }
    ],
    process: [
      { step: '01', title: 'OPERATIONAL AUDIT', description: 'Identifying high-volume repetitive tasks, support bottlenecks, and manual lead qualification points.' },
      { step: '02', title: 'AI ARCHITECTURE', description: 'Designing prompt structures, knowledge base embeddings, guardrails, and API workflow logic.' },
      { step: '03', title: 'AGENT TRAINING', description: 'Training the AI model on your company knowledge base, FAQs, brand tone, and offer details.' },
      { step: '04', title: 'SYSTEM INTEGRATION', description: 'Connecting the AI agent to your website, CRM, WhatsApp, and database systems.' },
      { step: '05', title: 'MONITORING & REFINEMENT', description: 'Continuous review of AI conversation logs and response accuracy to optimize performance.' }
    ],
    outcomes: ['24/7 Instant Lead Qualification', 'Reduced Support Overhead', 'Increased Appointment Booking Volume', 'Smarter Operational Scalability'],
    platforms: ['OpenAI GPT-4o', 'Anthropic Claude', 'Voiceflow', 'Make.com', 'Zapier', 'Pinecone Vector DB'],
    targetIndustries: ['E-Commerce & Retail', 'Real Estate & Property', 'B2B Tech & SaaS', 'Healthcare & Clinics', 'Financial Services'],
    faqs: [
      { question: 'Can an AI chatbot book sales calls directly into our calendar?', answer: 'Yes. Our AI chatbots integrate directly with Calendly, GoHighLevel, and HubSpot to qualify visitors and schedule appointments in real-time.' },
      { question: 'How do you ensure the AI agent gives accurate information?', answer: 'We train the AI model exclusively on your verified business data using vector embeddings and strict guardrails to prevent inaccurate responses.' }
    ],
    metaTitle: 'AI Solutions & Automation Agency | MyAdSphere',
    metaDescription: 'AI agents, intelligent chatbots, automated workflows, and custom AI solutions designed to help businesses operate smarter and scale faster.'
  }
};

// ── Aliases mapping for backward compatibility ──
servicesData['performance-marketing'] = servicesData['performance-marketing'];
servicesData['seo'] = servicesData['seo'];
servicesData['social-media-marketing'] = servicesData['social-media-marketing'];
servicesData['paid-advertising'] = servicesData['google-ads-ppc'];
servicesData['content-marketing'] = servicesData['content-creative-production'];
servicesData['brand-strategy'] = servicesData['branding-identity'];
servicesData['lead-generation'] = servicesData['lead-generation'];
servicesData['conversion-optimization'] = servicesData['website-design-development'];
servicesData['analytics'] = servicesData['marketing-automation-crm'];
