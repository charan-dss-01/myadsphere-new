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
  category:
    | 'BRAND & CREATIVE'
    | 'WEB & TECHNOLOGY'
    | 'ORGANIC GROWTH'
    | 'PAID MEDIA'
    | 'PR & MEDIA'
    | 'AI & AUTOMATION';
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

  // ─────────────────────────────────────────────
  // 01. Branding & Identity
  // ─────────────────────────────────────────────
  'branding-identity': {
    slug: 'branding-identity',
    number: '01',
    category: 'BRAND & CREATIVE',
    title: 'Branding & Identity',

    shortDescription:
      'Build distinctive brands through strategy, positioning, logo design, visual identity, and consistent brand experiences.',

    heroHeadline:
      'Build A Brand People Recognize, Remember & Trust.',

    heroSubhead:
      'Strategic positioning, visual identity, logo systems, messaging, and brand guidelines designed to create a clear and distinctive market presence.',

    overview:
      'Your brand is more than a logo. It is how people recognize, understand, and remember your business. Myadsphere combines strategic positioning, visual identity, messaging, and design systems to create brands that communicate clearly, build credibility, and remain consistent across every customer touchpoint.',

    capabilities: [
      {
        title: 'Brand Strategy & Positioning',
        description:
          'Defining your positioning, audience, value proposition, brand personality, and competitive differentiation.'
      },
      {
        title: 'Logo & Visual Identity Design',
        description:
          'Creating distinctive logos, typography systems, colour palettes, iconography, and supporting visual elements.'
      },
      {
        title: 'Brand Guidelines',
        description:
          'Building practical guidelines covering logo usage, typography, colours, imagery, layout, and communication standards.'
      },
      {
        title: 'Brand Messaging & Voice',
        description:
          'Developing messaging pillars, brand language, tone of voice, taglines, and communication frameworks.'
      },
      {
        title: 'Rebranding & Brand Refresh',
        description:
          'Modernising established brands while protecting the recognition and equity they have already built.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'DISCOVERY',
        description:
          'Understanding your business, audience, market, competitors, objectives, and current brand perception.'
      },
      {
        step: '02',
        title: 'POSITIONING',
        description:
          'Defining the strategic foundation, messaging direction, differentiation, and personality of the brand.'
      },
      {
        step: '03',
        title: 'VISUAL DIRECTION',
        description:
          'Exploring creative territories, moodboards, typography, colours, and identity concepts.'
      },
      {
        step: '04',
        title: 'IDENTITY DEVELOPMENT',
        description:
          'Refining the selected direction into a complete and scalable visual identity system.'
      },
      {
        step: '05',
        title: 'GUIDELINES & ROLLOUT',
        description:
          'Preparing brand guidelines and applying the identity consistently across key digital and physical touchpoints.'
      }
    ],

    outcomes: [
      'Clearer Brand Positioning',
      'Stronger Visual Recognition',
      'Consistent Customer Experience',
      'Improved Brand Credibility'
    ],

    platforms: [
      'Figma',
      'Adobe Illustrator',
      'Photoshop',
      'InDesign',
      'After Effects'
    ],

    targetIndustries: [
      'Startups',
      'D2C Brands',
      'Real Estate',
      'Technology & SaaS',
      'Professional Services'
    ],

    faqs: [
      {
        question: 'What is included in a Branding & Identity project?',
        answer:
          'Depending on the project scope, branding can include strategy, positioning, logo design, typography, colour systems, brand guidelines, messaging, social media identity, and supporting marketing assets.'
      },
      {
        question: 'Do you also work with existing brands?',
        answer:
          'Yes. We provide both complete rebranding and focused brand refresh projects for businesses that want to modernise their identity without starting from scratch.'
      }
    ],

    metaTitle:
      'Branding & Identity Agency in Hyderabad | Myadsphere',

    metaDescription:
      'Brand strategy, logo design, visual identity, positioning and brand guidelines from Myadsphere, a digital growth agency in Hyderabad.'
  },


  // ─────────────────────────────────────────────
  // 02. Content & Creative Production
  // ─────────────────────────────────────────────
  'content-creative-production': {
    slug: 'content-creative-production',
    number: '02',
    category: 'BRAND & CREATIVE',
    title: 'Content & Creative Production',

    shortDescription:
      'High-impact graphics, ad creatives, reels, videos, photography, copywriting, and campaign concepts designed to capture attention and inspire action.',

    heroHeadline:
      'Creative Built To Capture Attention & Inspire Action.',

    heroSubhead:
      'From social content and advertising creatives to video, photography and campaign concepts, we create content designed around your brand and audience.',

    overview:
      'Strong creative turns strategy into something people can see, understand, and remember. Our creative team develops visual content, advertising assets, short-form video, photography, copy, and campaign concepts tailored to the platforms where your audience spends its time.',

    capabilities: [
      {
        title: 'Advertising Creatives',
        description:
          'Static, carousel, display, and video advertising assets designed for performance campaigns.'
      },
      {
        title: 'Reels & Short-Form Video',
        description:
          'Concept development, scripting, editing, motion graphics, subtitles, and platform-ready formats.'
      },
      {
        title: 'Graphic Design',
        description:
          'Social media posts, campaign graphics, presentations, digital assets, brochures, and branded collateral.'
      },
      {
        title: 'Photography & Video Production',
        description:
          'Product, lifestyle, corporate, event, and promotional photography and video content.'
      },
      {
        title: 'Copywriting & Campaign Concepts',
        description:
          'Creative campaign ideas, headlines, captions, scripts, advertising copy, and supporting brand messaging.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'CREATIVE BRIEF',
        description:
          'Understanding the campaign objective, audience, platform, brand direction, and desired customer response.'
      },
      {
        step: '02',
        title: 'CONCEPT DEVELOPMENT',
        description:
          'Developing hooks, creative themes, references, scripts, and visual directions.'
      },
      {
        step: '03',
        title: 'PRODUCTION',
        description:
          'Designing, filming, editing, animating, and writing the required creative assets.'
      },
      {
        step: '04',
        title: 'ADAPTATION',
        description:
          'Preparing platform-specific formats and variations for social, paid advertising, websites, and campaigns.'
      },
      {
        step: '05',
        title: 'REVIEW & OPTIMIZATION',
        description:
          'Reviewing performance and audience response to improve future creative directions.'
      }
    ],

    outcomes: [
      'Stronger Creative Consistency',
      'More Engaging Brand Content',
      'Better Campaign Creative Variety',
      'Improved Audience Attention'
    ],

    platforms: [
      'Adobe Photoshop',
      'Illustrator',
      'Premiere Pro',
      'After Effects',
      'Figma',
      'CapCut'
    ],

    targetIndustries: [
      'Consumer Brands',
      'Real Estate',
      'Hospitality',
      'Healthcare',
      'Technology',
      'E-commerce'
    ],

    faqs: [
      {
        question: 'Do you create both static and video content?',
        answer:
          'Yes. We create static graphics, carousels, reels, short-form videos, motion graphics, advertising creatives, photography, and campaign assets.'
      },
      {
        question: 'Can you create content specifically for advertising campaigns?',
        answer:
          'Yes. We can develop multiple creative concepts, hooks, formats, and copy variations specifically for Google, Meta, LinkedIn, YouTube, and other advertising channels.'
      }
    ],

    metaTitle:
      'Content & Creative Production Agency | Myadsphere',

    metaDescription:
      'Creative production, graphics, reels, videos, advertising creatives, photography and campaign content from Myadsphere.'
  },


  // ─────────────────────────────────────────────
  // 03. Social Media Marketing
  // ─────────────────────────────────────────────
  'social-media-marketing': {
    slug: 'social-media-marketing',
    number: '03',
    category: 'ORGANIC GROWTH',
    title: 'Social Media Marketing',

    shortDescription:
      'Strategic content, publishing, community management, and social campaigns designed to build awareness, engagement, and long-term brand growth.',

    heroHeadline:
      'Turn Your Social Presence Into A Stronger Brand.',

    heroSubhead:
      'Strategy, content, publishing, community management, and platform-specific campaigns designed to build meaningful audience connections.',

    overview:
      'Social media works best when every post contributes to a larger brand strategy. We plan content pillars, develop creative assets, manage publishing, and optimise your social presence to help your brand stay visible, relevant, and connected to the people you want to reach.',

    capabilities: [
      {
        title: 'Social Media Strategy',
        description:
          'Developing channel strategies, content pillars, audience positioning, and measurable objectives.'
      },
      {
        title: 'Content Planning & Calendars',
        description:
          'Creating structured monthly content plans aligned with campaigns, brand goals, and important dates.'
      },
      {
        title: 'Social Creative Production',
        description:
          'Designing posts, carousels, reels, stories, videos, captions, and platform-specific content.'
      },
      {
        title: 'Publishing & Community Management',
        description:
          'Scheduling content, managing comments, monitoring engagement, and maintaining brand responsiveness.'
      },
      {
        title: 'Performance Analysis',
        description:
          'Tracking reach, engagement, audience growth, content performance, and relevant business actions.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'SOCIAL AUDIT',
        description:
          'Reviewing your existing channels, competitors, audience, content performance, and brand consistency.'
      },
      {
        step: '02',
        title: 'CONTENT STRATEGY',
        description:
          'Building content pillars, formats, messaging themes, and a channel-specific publishing approach.'
      },
      {
        step: '03',
        title: 'CONTENT PRODUCTION',
        description:
          'Creating graphics, reels, video, copy, stories, and campaign assets.'
      },
      {
        step: '04',
        title: 'PUBLISHING & MANAGEMENT',
        description:
          'Scheduling content and managing ongoing audience engagement across selected channels.'
      },
      {
        step: '05',
        title: 'REPORTING & IMPROVEMENT',
        description:
          'Reviewing performance data to identify what works and improve future content.'
      }
    ],

    outcomes: [
      'Stronger Social Presence',
      'Higher Audience Engagement',
      'Consistent Brand Communication',
      'Improved Organic Visibility'
    ],

    platforms: [
      'Instagram',
      'Facebook',
      'LinkedIn',
      'YouTube',
      'X',
      'TikTok'
    ],

    targetIndustries: [
      'Real Estate',
      'Hospitality',
      'Healthcare',
      'D2C & Retail',
      'Professional Services',
      'Technology'
    ],

    faqs: [
      {
        question: 'Which social media platforms should my business use?',
        answer:
          'The right platforms depend on your audience, industry, objectives, and content capabilities. We recommend a focused channel mix rather than trying to be active everywhere.'
      },
      {
        question: 'Do you create the content as well as manage the accounts?',
        answer:
          'Yes. Our scope can include strategy, graphic design, reels, video editing, copywriting, publishing, community management, and reporting.'
      }
    ],

    metaTitle:
      'Social Media Marketing Agency in Hyderabad | Myadsphere',

    metaDescription:
      'Social media strategy, content creation, publishing, reels, community management and growth campaigns from Myadsphere.'
  },


  // ─────────────────────────────────────────────
  // 04. Website Design & Development
  // ─────────────────────────────────────────────
  'website-design-development': {
    slug: 'website-design-development',
    number: '04',
    category: 'WEB & TECHNOLOGY',
    title: 'Website Design & Development',

    shortDescription:
      'Fast, responsive, SEO-ready, and conversion-focused websites combining premium design with seamless digital experiences.',

    heroHeadline:
      'Websites Designed To Look Better, Work Faster & Convert.',

    heroSubhead:
      'From strategy and UX to interface design and development, we create modern websites built around your brand, users, and business goals.',

    overview:
      'Your website is often the most important digital touchpoint between your business and potential customers. We design and develop responsive, high-performance websites that communicate your value clearly, create intuitive user experiences, support SEO, and guide visitors toward meaningful action.',

    capabilities: [
      {
        title: 'Custom Website Design',
        description:
          'Unique website interfaces created around your brand rather than generic templates.'
      },
      {
        title: 'Frontend Development',
        description:
          'Responsive modern websites developed with scalable technologies and clean component systems.'
      },
      {
        title: 'CMS Development',
        description:
          'Flexible content-management setups that allow your team to update website content efficiently.'
      },
      {
        title: 'E-commerce Development',
        description:
          'Online stores with product catalogues, payments, checkout flows, and supporting integrations.'
      },
      {
        title: 'SEO & Performance Foundations',
        description:
          'Mobile responsiveness, technical SEO foundations, structured content, performance optimisation, and analytics setup.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'DISCOVERY & PLANNING',
        description:
          'Understanding objectives, users, competitors, required functionality, and website content.'
      },
      {
        step: '02',
        title: 'SITEMAP & WIREFRAMES',
        description:
          'Planning page hierarchy, user journeys, navigation, and content structure.'
      },
      {
        step: '03',
        title: 'UI DESIGN',
        description:
          'Creating high-fidelity desktop and mobile interface designs aligned with your brand.'
      },
      {
        step: '04',
        title: 'DEVELOPMENT',
        description:
          'Building responsive pages, interactions, content systems, and required integrations.'
      },
      {
        step: '05',
        title: 'TESTING & LAUNCH',
        description:
          'Testing responsiveness, functionality, speed, analytics, SEO essentials, and cross-browser compatibility before launch.'
      }
    ],

    outcomes: [
      'Stronger Digital Presence',
      'Better User Experience',
      'Improved Conversion Pathways',
      'SEO-Ready Website Foundation'
    ],

    platforms: [
      'React',
      'Next.js',
      'WordPress',
      'Shopify',
      'Webflow',
      'Figma'
    ],

    targetIndustries: [
      'Startups',
      'Professional Services',
      'Real Estate',
      'Healthcare',
      'Hospitality',
      'E-commerce'
    ],

    faqs: [
      {
        question: 'What technologies do you use for website development?',
        answer:
          'Our technology stack depends on the project. We work with platforms and frameworks including React, Next.js, WordPress, Shopify, Webflow, and other modern web technologies.'
      },
      {
        question: 'Will my website be mobile-friendly and SEO-ready?',
        answer:
          'Yes. Responsive design and core technical SEO foundations are considered throughout our website design and development process.'
      }
    ],

    metaTitle:
      'Website Design & Development Company in Hyderabad | Myadsphere',

    metaDescription:
      'Responsive website design and development, React, WordPress, Shopify and modern web experiences from Myadsphere.'
  },


  // ─────────────────────────────────────────────
  // 05. UI/UX Design
  // ─────────────────────────────────────────────
  'ui-ux-design': {
    slug: 'ui-ux-design',
    number: '05',
    category: 'WEB & TECHNOLOGY',
    title: 'UI/UX Design',

    shortDescription:
      'User-focused digital experiences built through research, wireframing, interface design, prototyping, and conversion-driven UX strategy.',

    heroHeadline:
      'Digital Experiences Designed Around Real Users.',

    heroSubhead:
      'Research, UX strategy, wireframes, interaction design, prototypes, and scalable interfaces for websites, platforms, and digital products.',

    overview:
      'Good digital products should feel intuitive before users even think about how they work. Our UI/UX design process combines user needs, business objectives, information architecture, interaction design, and visual systems to create experiences that are clear, useful, and enjoyable to navigate.',

    capabilities: [
      {
        title: 'UX Research & Discovery',
        description:
          'Understanding user needs, business objectives, behaviours, pain points, and existing experience gaps.'
      },
      {
        title: 'Information Architecture',
        description:
          'Structuring content, screens, navigation, and user journeys in a logical and intuitive way.'
      },
      {
        title: 'Wireframing',
        description:
          'Creating low and mid-fidelity layouts to establish functionality and content hierarchy before visual design.'
      },
      {
        title: 'UI Design & Design Systems',
        description:
          'Developing high-fidelity interfaces, components, typography, spacing, colours, and reusable design systems.'
      },
      {
        title: 'Interactive Prototyping',
        description:
          'Building clickable prototypes to demonstrate journeys, interactions, transitions, and product behaviour before development.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'DISCOVERY & RESEARCH',
        description:
          'Understanding users, objectives, competitors, technical constraints, and key business requirements.'
      },
      {
        step: '02',
        title: 'USER FLOWS',
        description:
          'Mapping journeys and defining how users move through the product or website.'
      },
      {
        step: '03',
        title: 'WIREFRAMING',
        description:
          'Creating structured layouts that establish hierarchy, functionality, and interaction patterns.'
      },
      {
        step: '04',
        title: 'UI & PROTOTYPING',
        description:
          'Applying the visual system and developing interactive high-fidelity prototypes.'
      },
      {
        step: '05',
        title: 'HANDOFF & SUPPORT',
        description:
          'Preparing organised design files, components, states, specifications, and developer handoff documentation.'
      }
    ],

    outcomes: [
      'Clearer User Journeys',
      'More Intuitive Interfaces',
      'Stronger Product Consistency',
      'Better Development Handoff'
    ],

    platforms: [
      'Figma',
      'FigJam',
      'Adobe Creative Cloud',
      'Maze',
      'Framer'
    ],

    targetIndustries: [
      'SaaS',
      'FinTech',
      'E-commerce',
      'Healthcare',
      'Real Estate',
      'Startups'
    ],

    faqs: [
      {
        question: 'What is the difference between UI and UX design?',
        answer:
          'UX focuses on how users navigate and interact with a digital product, while UI focuses on the visual interface. We combine both to create experiences that are useful, intuitive, and visually consistent.'
      },
      {
        question: 'Can you redesign an existing website or application?',
        answer:
          'Yes. We can audit an existing experience, identify usability and interface issues, restructure journeys, and redesign key screens or the complete product.'
      }
    ],

    metaTitle:
      'UI UX Design Agency in Hyderabad | Myadsphere',

    metaDescription:
      'UI UX design, user research, wireframing, prototyping and digital product design services from Myadsphere.'
  },


  // ─────────────────────────────────────────────
  // 06. Search Engine Optimization
  // ─────────────────────────────────────────────
  'seo': {
    slug: 'seo',
    number: '06',
    category: 'ORGANIC GROWTH',
    title: 'Search Engine Optimization (SEO)',

    shortDescription:
      'Technical, on-page, off-page, and local SEO strategies designed to improve rankings, search visibility, and qualified organic traffic.',

    heroHeadline:
      'Turn Search Visibility Into Sustainable Organic Growth.',

    heroSubhead:
      'Technical SEO, keyword strategy, content optimisation, authority building, and local SEO designed around how your customers search.',

    overview:
      'SEO is about making your business easier to discover when potential customers are actively searching for what you offer. We combine technical optimisation, search-intent research, content strategy, local SEO, and authority development to improve your long-term organic visibility.',

    capabilities: [
      {
        title: 'Technical SEO',
        description:
          'Auditing indexing, crawlability, Core Web Vitals, site structure, structured data, and technical performance.'
      },
      {
        title: 'Keyword & Search Intent Research',
        description:
          'Identifying relevant search opportunities based on user intent, competition, and business value.'
      },
      {
        title: 'On-Page SEO',
        description:
          'Optimising headings, metadata, page copy, internal linking, images, content structure, and topical relevance.'
      },
      {
        title: 'Local SEO',
        description:
          'Improving local visibility through Google Business Profile optimisation, location content, citations, and local relevance.'
      },
      {
        title: 'Authority & Off-Page SEO',
        description:
          'Building relevant mentions, links, digital PR opportunities, and domain authority over time.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'SEO AUDIT',
        description:
          'Reviewing technical health, content, search performance, competitors, backlinks, and current rankings.'
      },
      {
        step: '02',
        title: 'SEARCH STRATEGY',
        description:
          'Mapping keywords and search intent to priority pages and content opportunities.'
      },
      {
        step: '03',
        title: 'ON-PAGE OPTIMIZATION',
        description:
          'Improving site architecture, metadata, content, internal links, and technical elements.'
      },
      {
        step: '04',
        title: 'CONTENT & AUTHORITY',
        description:
          'Developing useful search-focused content and relevant authority-building opportunities.'
      },
      {
        step: '05',
        title: 'MEASUREMENT & IMPROVEMENT',
        description:
          'Tracking rankings, impressions, organic traffic, conversions, and new search opportunities.'
      }
    ],

    outcomes: [
      'Improved Search Visibility',
      'More Relevant Organic Traffic',
      'Stronger Local Presence',
      'Long-Term Organic Growth'
    ],

    platforms: [
      'Google Search Console',
      'Google Analytics',
      'SEMrush',
      'Ahrefs',
      'Screaming Frog',
      'Google Business Profile'
    ],

    targetIndustries: [
      'Professional Services',
      'Healthcare',
      'Real Estate',
      'Education',
      'Technology',
      'Local Businesses'
    ],

    faqs: [
      {
        question: 'How long does SEO take to show results?',
        answer:
          'SEO timelines vary based on competition, website condition, market, content, and authority. Technical improvements can be implemented quickly, while meaningful ranking and organic growth usually require consistent work over several months.'
      },
      {
        question: 'Do you provide local SEO and Google Business Profile optimization?',
        answer:
          'Yes. Our local SEO services can include Google Business Profile optimisation, local keyword targeting, citations, review strategy, and location-focused website improvements.'
      }
    ],

    metaTitle:
      'SEO Agency in Hyderabad | Myadsphere',

    metaDescription:
      'Technical SEO, local SEO, on-page SEO, content strategy and organic search optimisation services from Myadsphere.'
  },


  // ─────────────────────────────────────────────
  // 07. Performance Marketing
  // ─────────────────────────────────────────────
  'performance-marketing': {
    slug: 'performance-marketing',
    number: '07',
    category: 'PAID MEDIA',
    title: 'Performance Marketing',

    shortDescription:
      'Data-driven, full-funnel advertising strategies focused on customer acquisition, conversions, revenue, and measurable ROI.',

    heroHeadline:
      'Performance Marketing Built Around Business Results.',

    heroSubhead:
      'Integrated paid media strategies combining targeting, creative, landing experiences, measurement, testing, and continuous optimisation.',

    overview:
      'Performance marketing connects media spend directly to measurable business outcomes. We develop multi-channel acquisition strategies, establish reliable tracking, test audiences and creative, and continuously optimise campaigns around the metrics that matter to your business.',

    capabilities: [
      {
        title: 'Full-Funnel Paid Media Strategy',
        description:
          'Planning acquisition and remarketing campaigns across relevant advertising channels.'
      },
      {
        title: 'Audience & Offer Strategy',
        description:
          'Aligning campaign targeting, offers, messaging, and customer intent.'
      },
      {
        title: 'Creative Testing',
        description:
          'Testing multiple hooks, messages, formats, and creatives to identify stronger-performing combinations.'
      },
      {
        title: 'Conversion Tracking',
        description:
          'Configuring analytics, pixels, events, attribution, and reporting foundations.'
      },
      {
        title: 'Campaign Optimization & Scaling',
        description:
          'Continuously adjusting budget, targeting, bidding, and creative based on campaign performance.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'AUDIT & GOALS',
        description:
          'Reviewing existing performance, tracking, business economics, audience, competitors, and campaign objectives.'
      },
      {
        step: '02',
        title: 'FUNNEL STRATEGY',
        description:
          'Planning channels, targeting, messaging, offers, creative requirements, and conversion journeys.'
      },
      {
        step: '03',
        title: 'CAMPAIGN BUILD',
        description:
          'Implementing tracking and launching structured advertising campaigns.'
      },
      {
        step: '04',
        title: 'TEST & OPTIMIZE',
        description:
          'Evaluating audiences, placements, bids, creative, and conversion behaviour.'
      },
      {
        step: '05',
        title: 'SCALE & REPORT',
        description:
          'Allocating investment toward stronger-performing opportunities while providing transparent reporting.'
      }
    ],

    outcomes: [
      'Better Advertising Efficiency',
      'More Qualified Customer Acquisition',
      'Improved Conversion Visibility',
      'Clearer Marketing ROI'
    ],

    platforms: [
      'Google Ads',
      'Meta Ads',
      'LinkedIn Ads',
      'YouTube Ads',
      'Google Analytics',
      'Google Tag Manager'
    ],

    targetIndustries: [
      'E-commerce',
      'Real Estate',
      'Healthcare',
      'Education',
      'SaaS',
      'Professional Services'
    ],

    faqs: [
      {
        question: 'Which advertising platforms do you manage?',
        answer:
          'Our platform recommendations depend on your audience and objectives. Common channels include Google, Meta, LinkedIn, YouTube, and other relevant paid-media platforms.'
      },
      {
        question: 'How do you measure campaign performance?',
        answer:
          'We agree on relevant KPIs before launch and can track metrics such as qualified leads, cost per lead, conversion rate, acquisition cost, ROAS, and revenue where reliable data is available.'
      }
    ],

    metaTitle:
      'Performance Marketing Agency in Hyderabad | Myadsphere',

    metaDescription:
      'Data-driven performance marketing and paid media strategies focused on leads, customer acquisition and measurable growth.'
  },


  // ─────────────────────────────────────────────
  // 08. Google Ads / PPC
  // ─────────────────────────────────────────────
  'google-ads-ppc': {
    slug: 'google-ads-ppc',
    number: '08',
    category: 'PAID MEDIA',
    title: 'Google Ads / PPC',

    shortDescription:
      'High-intent Search, Display, YouTube, Shopping, and Performance Max campaigns designed to generate qualified leads and sales.',

    heroHeadline:
      'Reach Customers At The Moment They Search.',

    heroSubhead:
      'Strategic Google Search, Performance Max, Shopping, Display, YouTube, and remarketing campaigns focused on measurable business outcomes.',

    overview:
      'Google Ads allows businesses to reach people already searching for products, services, and solutions. We structure campaigns around search intent, relevance, conversion tracking, landing-page experience, and continuous optimisation to help make advertising investment more efficient.',

    capabilities: [
      {
        title: 'Google Search Ads',
        description:
          'Keyword-driven campaigns designed to reach users actively searching for your products or services.'
      },
      {
        title: 'Performance Max',
        description:
          'Cross-network campaigns using Google inventory and audience signals to support defined conversion goals.'
      },
      {
        title: 'Shopping Campaigns',
        description:
          'Product-feed and Merchant Center campaigns for eligible e-commerce businesses.'
      },
      {
        title: 'YouTube & Display Advertising',
        description:
          'Visual and video campaigns for awareness, consideration, and remarketing.'
      },
      {
        title: 'Conversion Tracking & Optimization',
        description:
          'Tracking valuable customer actions and continuously optimising keywords, bids, audiences, and creatives.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'ACCOUNT AUDIT',
        description:
          'Reviewing campaigns, tracking, search terms, structure, budgets, bidding, and historical performance.'
      },
      {
        step: '02',
        title: 'KEYWORD & CAMPAIGN STRATEGY',
        description:
          'Mapping search demand, intent, campaign structure, landing pages, and negative keywords.'
      },
      {
        step: '03',
        title: 'CAMPAIGN BUILD',
        description:
          'Creating campaigns, ad groups, ads, assets, targeting, and conversion measurement.'
      },
      {
        step: '04',
        title: 'OPTIMIZATION',
        description:
          'Monitoring search terms, bids, quality, audiences, creatives, and conversion performance.'
      },
      {
        step: '05',
        title: 'REPORTING & SCALE',
        description:
          'Identifying opportunities to improve efficiency and increase investment in stronger-performing areas.'
      }
    ],

    outcomes: [
      'Higher-Intent Website Traffic',
      'Better Search Campaign Efficiency',
      'Improved Conversion Tracking',
      'More Qualified Leads & Sales'
    ],

    platforms: [
      'Google Search',
      'Performance Max',
      'Google Shopping',
      'YouTube Ads',
      'Google Display Network',
      'Google Tag Manager'
    ],

    targetIndustries: [
      'Professional Services',
      'Real Estate',
      'Healthcare',
      'Education',
      'E-commerce',
      'Technology'
    ],

    faqs: [
      {
        question: 'Will I retain ownership of my Google Ads account?',
        answer:
          'Yes. We recommend that clients maintain ownership and administrative access to their advertising accounts, billing information, and historical campaign data.'
      },
      {
        question: 'Do you manage Google Search and Performance Max campaigns?',
        answer:
          'Yes. Depending on your objectives, we can manage Search, Performance Max, Shopping, Display, YouTube, and remarketing campaigns.'
      }
    ],

    metaTitle:
      'Google Ads PPC Agency in Hyderabad | Myadsphere',

    metaDescription:
      'Google Search Ads, Performance Max, Shopping, YouTube and PPC campaign management from Myadsphere.'
  },


  // ─────────────────────────────────────────────
  // 09. Meta Ads
  // ─────────────────────────────────────────────
  'meta-ads': {
    slug: 'meta-ads',
    number: '09',
    category: 'PAID MEDIA',
    title: 'Meta Ads',

    shortDescription:
      'Conversion-focused Facebook and Instagram campaigns powered by audience targeting, creative testing, retargeting, and continuous optimization.',

    heroHeadline:
      'Facebook & Instagram Advertising Built To Convert.',

    heroSubhead:
      'Audience strategy, creative testing, conversion tracking, retargeting, and campaign optimisation across the Meta advertising ecosystem.',

    overview:
      'Meta advertising combines powerful audience signals with highly visual creative formats. We build structured Facebook and Instagram campaigns, develop and test advertising creative, implement conversion measurement, and optimise campaigns based on meaningful customer actions.',

    capabilities: [
      {
        title: 'Campaign Strategy & Structure',
        description:
          'Building prospecting, engagement, lead generation, sales, and retargeting campaigns around your objectives.'
      },
      {
        title: 'Audience Strategy',
        description:
          'Using broad, custom, lookalike, interest, engagement, and first-party audience strategies where appropriate.'
      },
      {
        title: 'Creative Testing',
        description:
          'Testing different visual concepts, videos, hooks, copy, offers, and calls to action.'
      },
      {
        title: 'Pixel & Conversion API',
        description:
          'Supporting more reliable event measurement through Meta Pixel and Conversion API implementations.'
      },
      {
        title: 'Retargeting & Optimization',
        description:
          'Re-engaging relevant audiences while continuously optimising budget, placements, campaigns, and creative.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'ACCOUNT & TRACKING AUDIT',
        description:
          'Reviewing account setup, Pixel events, CAPI, campaign structure, audiences, and previous performance.'
      },
      {
        step: '02',
        title: 'AUDIENCE & CREATIVE PLAN',
        description:
          'Defining target segments, messaging, offers, creative angles, and required advertising assets.'
      },
      {
        step: '03',
        title: 'CAMPAIGN LAUNCH',
        description:
          'Launching structured campaigns with clear objectives and appropriate tracking.'
      },
      {
        step: '04',
        title: 'TESTING & OPTIMIZATION',
        description:
          'Evaluating campaign, audience, creative, placement, and conversion performance.'
      },
      {
        step: '05',
        title: 'RETARGETING & SCALE',
        description:
          'Developing remarketing journeys and increasing investment where performance supports it.'
      }
    ],

    outcomes: [
      'Stronger Paid Social Performance',
      'More Effective Creative Testing',
      'Improved Audience Retargeting',
      'More Qualified Leads & Sales'
    ],

    platforms: [
      'Meta Ads Manager',
      'Facebook Ads',
      'Instagram Ads',
      'Meta Pixel',
      'Meta Conversion API'
    ],

    targetIndustries: [
      'D2C & E-commerce',
      'Real Estate',
      'Hospitality',
      'Healthcare',
      'Education',
      'Consumer Brands'
    ],

    faqs: [
      {
        question: 'Do you create the advertising creatives for Meta campaigns?',
        answer:
          'Yes. We can develop static, carousel, reel, and video advertising assets along with campaign copy and multiple testing variations.'
      },
      {
        question: 'Do you set up Pixel and Conversion API tracking?',
        answer:
          'Yes. Where technically appropriate, we can configure Meta Pixel events and Conversion API integrations to improve conversion measurement.'
      }
    ],

    metaTitle:
      'Meta Ads Agency in Hyderabad | Myadsphere',

    metaDescription:
      'Facebook and Instagram advertising, creative testing, audience targeting and Meta Ads campaign management from Myadsphere.'
  },


  // ─────────────────────────────────────────────
  // 10. Lead Generation & Funnels
  // ─────────────────────────────────────────────
  'lead-generation': {
    slug: 'lead-generation',
    number: '10',
    category: 'PAID MEDIA',
    title: 'Lead Generation & Funnels',

    shortDescription:
      'Targeted campaigns, landing pages, conversion funnels, CRM integrations, and nurturing systems built to consistently generate qualified opportunities.',

    heroHeadline:
      'Turn Digital Attention Into Qualified Opportunities.',

    heroSubhead:
      'Targeted campaigns, conversion-focused landing pages, qualification journeys, CRM integration, and lead nurturing built around your sales process.',

    overview:
      'Generating more leads is useful only when those opportunities have a realistic chance of becoming customers. We build lead-generation systems that connect audience targeting, advertising, landing pages, qualification, tracking, CRM integration, and follow-up around your sales objectives.',

    capabilities: [
      {
        title: 'Lead Generation Campaigns',
        description:
          'Targeted paid-media campaigns designed around specific customer segments and conversion goals.'
      },
      {
        title: 'Landing Pages',
        description:
          'Focused landing experiences designed to communicate value clearly and encourage enquiries or bookings.'
      },
      {
        title: 'Lead Qualification',
        description:
          'Forms, questions, routing logic, and qualification steps designed to improve lead relevance.'
      },
      {
        title: 'CRM Integration',
        description:
          'Connecting lead sources to CRM platforms so enquiries can be organised, assigned, and tracked.'
      },
      {
        title: 'Lead Nurturing',
        description:
          'Follow-up journeys using email, messaging, remarketing, and sales handoff processes where appropriate.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'AUDIENCE & OFFER',
        description:
          'Defining the ideal customer, offer, value proposition, qualification criteria, and campaign objective.'
      },
      {
        step: '02',
        title: 'FUNNEL DESIGN',
        description:
          'Planning advertising, landing pages, forms, lead routing, and follow-up journeys.'
      },
      {
        step: '03',
        title: 'CAMPAIGN LAUNCH',
        description:
          'Launching targeted campaigns with appropriate analytics and conversion tracking.'
      },
      {
        step: '04',
        title: 'QUALIFICATION & NURTURE',
        description:
          'Improving forms, lead quality, CRM workflows, and follow-up processes.'
      },
      {
        step: '05',
        title: 'OPTIMIZATION',
        description:
          'Tracking lead costs, lead quality, conversion rates, and sales feedback to improve the funnel.'
      }
    ],

    outcomes: [
      'More Qualified Enquiries',
      'Clearer Lead Tracking',
      'Better Sales Follow-Up',
      'Improved Funnel Visibility'
    ],

    platforms: [
      'Google Ads',
      'Meta Ads',
      'LinkedIn Ads',
      'HubSpot',
      'Zoho CRM',
      'GoHighLevel'
    ],

    targetIndustries: [
      'Real Estate',
      'B2B Services',
      'Education',
      'Healthcare',
      'Technology',
      'Professional Services'
    ],

    faqs: [
      {
        question: 'How do you improve lead quality?',
        answer:
          'We align targeting, messaging, offers, landing pages, and qualification questions with your ideal customer profile and continuously review sales feedback where available.'
      },
      {
        question: 'Can leads be sent directly into our CRM?',
        answer:
          'Yes. Depending on your existing systems, we can connect forms and lead sources with platforms such as HubSpot, Zoho, Salesforce, GoHighLevel, or other supported CRM tools.'
      }
    ],

    metaTitle:
      'Lead Generation Agency in Hyderabad | Myadsphere',

    metaDescription:
      'Lead generation campaigns, landing pages, funnels, CRM integration and customer acquisition systems from Myadsphere.'
  },


  // ─────────────────────────────────────────────
  // 11. PR & Media
  // ─────────────────────────────────────────────
  'pr-media': {
    slug: 'pr-media',
    number: '11',
    category: 'PR & MEDIA',
    title: 'PR & Media',

    shortDescription:
      'Build brand credibility and visibility through strategic public relations, media outreach, press coverage, influencer collaborations, and reputation management.',

    heroHeadline:
      'Build Credibility. Earn Attention. Strengthen Your Reputation.',

    heroSubhead:
      'Strategic public relations, media outreach, press communications, thought leadership, influencer collaborations, and reputation support.',

    overview:
      'PR helps shape how customers, stakeholders, and the wider market perceive your business. Myadsphere develops relevant stories, press materials, media outreach strategies, thought-leadership opportunities, and amplification plans designed to strengthen brand visibility and credibility.',

    capabilities: [
      {
        title: 'PR Strategy',
        description:
          'Developing media objectives, communication themes, story opportunities, target audiences, and outreach priorities.'
      },
      {
        title: 'Press Release Development',
        description:
          'Writing clear and professionally structured announcements for launches, milestones, partnerships, events, and company news.'
      },
      {
        title: 'Media Outreach',
        description:
          'Identifying relevant journalists, publications, digital media, and industry platforms for outreach.'
      },
      {
        title: 'Thought Leadership',
        description:
          'Developing founder stories, expert commentary, contributed articles, interviews, and authority-building content.'
      },
      {
        title: 'Influencer & Reputation Support',
        description:
          'Planning relevant creator collaborations and supporting proactive brand reputation communication.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'PR DISCOVERY',
        description:
          'Understanding your brand, audience, reputation, communication objectives, milestones, and potential media stories.'
      },
      {
        step: '02',
        title: 'STORY & MESSAGE DEVELOPMENT',
        description:
          'Developing relevant angles, key messages, press materials, and spokesperson positioning.'
      },
      {
        step: '03',
        title: 'MEDIA TARGETING',
        description:
          'Building a relevant outreach list based on geography, industry, audience, and story fit.'
      },
      {
        step: '04',
        title: 'OUTREACH & COORDINATION',
        description:
          'Pitching stories, coordinating communications, and supporting interview or publication requirements.'
      },
      {
        step: '05',
        title: 'AMPLIFICATION & REPORTING',
        description:
          'Amplifying earned or secured coverage across digital channels and reporting on available coverage and reach.'
      }
    ],

    outcomes: [
      'Stronger Brand Credibility',
      'Greater Media Visibility',
      'Improved Thought Leadership',
      'More Consistent Brand Reputation'
    ],

    platforms: [
      'Digital Publications',
      'News Media',
      'Industry Publications',
      'LinkedIn',
      'Influencer Networks',
      'Press Distribution Platforms'
    ],

    targetIndustries: [
      'Startups',
      'Technology',
      'Real Estate',
      'Consumer Brands',
      'Hospitality',
      'Corporate Leaders'
    ],

    faqs: [
      {
        question: 'Can you guarantee coverage in a specific media publication?',
        answer:
          'Editorial coverage is ultimately determined by journalists and publishers, so independent earned-media placement cannot be guaranteed. Where paid or sponsored publication opportunities are available, we clearly distinguish those from earned PR.'
      },
      {
        question: 'What types of announcements can PR support?',
        answer:
          'PR can support company launches, new products, partnerships, funding or expansion announcements, events, executive appointments, awards, milestones, research, and thought-leadership initiatives.'
      }
    ],

    metaTitle:
      'PR & Media Agency in Hyderabad | Myadsphere',

    metaDescription:
      'Public relations, press releases, media outreach, thought leadership, influencer collaborations and reputation support from Myadsphere.'
  },


  // ─────────────────────────────────────────────
  // 12. AI Solutions & Automation
  // ─────────────────────────────────────────────
  'ai-solutions-automation': {
    slug: 'ai-solutions-automation',
    number: '12',
    category: 'AI & AUTOMATION',
    title: 'AI Solutions & Automation',

    shortDescription:
      'AI agents, intelligent chatbots, and custom AI-powered workflows designed to automate repetitive processes, improve customer experiences, and increase operational efficiency.',

    heroHeadline:
      'Put AI To Work Across Your Business.',

    heroSubhead:
      'AI assistants, intelligent chatbots, workflow automation, lead qualification, content systems, and custom integrations designed around real business processes.',

    overview:
      'AI creates the most value when it solves a specific business problem. We identify repetitive workflows, customer-service bottlenecks, lead-management tasks, and data processes that can benefit from automation, then design AI-powered systems around your existing operations.',

    capabilities: [
      {
        title: 'AI Chatbots & Assistants',
        description:
          'AI-powered assistants designed to answer common questions, guide users, capture information, and support customer interactions.'
      },
      {
        title: 'AI Lead Qualification',
        description:
          'Automated conversations and workflows that collect relevant lead information and route enquiries appropriately.'
      },
      {
        title: 'Workflow Automation',
        description:
          'Connecting tools and automating repetitive processes across marketing, sales, support, and internal operations.'
      },
      {
        title: 'AI Content Workflows',
        description:
          'Structured AI-assisted processes for research, drafts, summaries, campaign variations, and internal content operations.'
      },
      {
        title: 'Custom AI Integrations',
        description:
          'Integrating supported AI models and APIs with websites, CRMs, databases, and internal business tools.'
      }
    ],

    process: [
      {
        step: '01',
        title: 'PROCESS AUDIT',
        description:
          'Identifying repetitive tasks, bottlenecks, customer journeys, data sources, and potential automation opportunities.'
      },
      {
        step: '02',
        title: 'SOLUTION DESIGN',
        description:
          'Defining the workflow, business rules, required integrations, model behaviour, and human escalation points.'
      },
      {
        step: '03',
        title: 'BUILD & CONFIGURATION',
        description:
          'Developing the workflow, configuring AI behaviour, connecting approved data sources, and implementing integrations.'
      },
      {
        step: '04',
        title: 'TESTING & INTEGRATION',
        description:
          'Testing responses, edge cases, permissions, integrations, and escalation pathways before rollout.'
      },
      {
        step: '05',
        title: 'MONITORING & IMPROVEMENT',
        description:
          'Reviewing outputs and workflow performance to improve accuracy, usefulness, and operational efficiency.'
      }
    ],

    outcomes: [
      'Reduced Repetitive Work',
      'Faster Customer Responses',
      'More Efficient Lead Handling',
      'Improved Operational Workflows'
    ],

    platforms: [
      'OpenAI',
      'Anthropic',
      'Make',
      'Zapier',
      'n8n',
      'Voiceflow',
      'CRM APIs'
    ],

    targetIndustries: [
      'Real Estate',
      'E-commerce',
      'Technology & SaaS',
      'Healthcare',
      'Professional Services',
      'Customer Support Teams'
    ],

    faqs: [
      {
        question: 'What business processes can be automated with AI?',
        answer:
          'Common opportunities include customer FAQs, lead qualification, appointment workflows, information retrieval, document processing, reporting, content assistance, and repetitive internal tasks.'
      },
      {
        question: 'Can AI tools integrate with our existing systems?',
        answer:
          'In many cases, yes. Integration depends on the APIs and access provided by your existing CRM, website, database, communication tools, and other business software.'
      }
    ],

    metaTitle:
      'AI Solutions & Automation Agency | Myadsphere',

    metaDescription:
      'AI agents, chatbots, workflow automation and custom AI integrations designed to help businesses operate more efficiently.'
  }
};


// ─────────────────────────────────────────────
// OPTIONAL BACKWARD-COMPATIBILITY ALIASES
// ─────────────────────────────────────────────

servicesData['paid-advertising'] =
  servicesData['google-ads-ppc'];

servicesData['content-marketing'] =
  servicesData['content-creative-production'];

servicesData['brand-strategy'] =
  servicesData['branding-identity'];

servicesData['website-app-development'] =
  servicesData['website-design-development'];