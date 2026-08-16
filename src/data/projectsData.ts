export interface ProjectData {
  slug: string;
  number: string;
  title: string;
  category: 'PERFORMANCE' | 'SEO' | 'SOCIAL' | 'CREATIVE' | 'BRANDING';
  client: string;
  tagline: string;
  shortDesc: string;
  heroImage: string;
  thumbnail: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  workExecuted: string[];
  platforms: string[];
  industries: string[];
  metaTitle: string;
  metaDescription: string;
}

export const projectsData: Record<string, ProjectData> = {
  'd2c-revenue-surge': {
    slug: 'd2c-revenue-surge',
    number: '01',
    title: 'D2C Revenue Surge',
    category: 'PERFORMANCE',
    client: 'Velour Beauty & Lifestyle',
    tagline: 'Turning Paid Traffic Into Scalable Revenue',
    shortDesc: 'Scaling a D2C beauty brand past 8-figure revenue with automated Meta & Google Performance Max funnels.',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    metrics: [
      { label: 'Return On Ad Spend', value: '+342%' },
      { label: 'Conversion Rate', value: '+68%' },
      { label: 'Monthly Revenue', value: '3.2x' }
    ],
    challenge: 'Velour Beauty was experiencing severe ad fatigue on legacy Facebook campaigns, rising customer acquisition costs (CAC), and inconsistent daily sales volume across their primary e-commerce storefront.',
    approach: [
      'Engineered a multi-stage Performance Max and Meta CAPI attribution funnel targeting high-intent prospective buyers.',
      'Deployed weekly short-form UGC video ad creative testing to identify high-converting visual hooks.',
      'Optimized post-click landing page checkout velocity to reduce cart abandonment rates.'
    ],
    workExecuted: [
      'Multi-Channel Performance Marketing Architecture',
      'High-Conversion UGC Video Ad Production',
      'Meta CAPI Server-Side Tracking Integration',
      'Checkout Conversion Rate Optimization (CRO)'
    ],
    platforms: ['Meta Ads', 'Google Shopping (PMax)', 'Shopify Plus', 'Klaviyo Email', 'Meta CAPI'],
    industries: ['D2C & E-Commerce', 'Beauty & Personal Care', 'Lifestyle Retail'],
    metaTitle: 'D2C Revenue Surge Case Study | MyAdSphere',
    metaDescription: 'Discover how MyAdSphere scaled a D2C brand past 8-figure revenue with +342% ROAS performance marketing funnels.'
  },

  'enterprise-saas-growth': {
    slug: 'enterprise-saas-growth',
    number: '02',
    title: 'Enterprise B2B SaaS Pipeline',
    category: 'PERFORMANCE',
    client: 'CloudFlow Infrastructure Systems',
    tagline: 'High-Intent Executive Lead Generation Engine',
    shortDesc: 'Building a predictable B2B sales pipeline targeting Fortune 500 CTOs and IT infrastructure leaders.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    metrics: [
      { label: 'Qualified Demos', value: '+240%' },
      { label: 'Cost Per Lead', value: '-42%' },
      { label: 'Pipeline Value Generated', value: '$8.4M' }
    ],
    challenge: 'CloudFlow struggled with low lead quality from generic inbound forms, extended 9-month sales cycles, and high ad spend burn on broad LinkedIn target lists.',
    approach: [
      'Restructured LinkedIn Ads campaigns around hyper-targeted ICP company size, job title, and IT stack intent signals.',
      'Created an interactive cloud efficiency calculator funnel that pre-qualified leads before scheduling executive demo calls.',
      'Integrated automated CRM nurture sequences that increased demo show-up rates.'
    ],
    workExecuted: [
      'Account-Based Marketing (ABM) Strategy',
      'Interactive Lead Calculator Funnel Build',
      'HubSpot CRM Pipeline Integration',
      'Google Search Intent Bidding'
    ],
    platforms: ['LinkedIn Ads', 'Google Search Ads', 'HubSpot CRM', 'Zapier', 'Looker Studio'],
    industries: ['SaaS & Enterprise B2B', 'Cloud Infrastructure', 'Cybersecurity'],
    metaTitle: 'Enterprise SaaS Lead Engine Case Study | MyAdSphere',
    metaDescription: 'Learn how MyAdSphere generated $8.4M in B2B pipeline value for CloudFlow using targeted ABM and interactive calculator funnels.'
  },

  'social-brand-scaling': {
    slug: 'social-brand-scaling',
    number: '03',
    title: 'Social Brand Scaling',
    category: 'SOCIAL',
    client: 'Aura Premium Hydration',
    tagline: 'Organic Reach Acceleration & Viral Content Engine',
    shortDesc: 'Capturing 15M+ organic impressions and scaling brand community engagement across Instagram & TikTok.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    metrics: [
      { label: 'Organic Impressions', value: '15.2M+' },
      { label: 'Social Engagement', value: '+510%' },
      { label: 'Direct Site Visits', value: '4.5x' }
    ],
    challenge: 'Aura Hydration needed to stand out in a crowded beverage market without relying solely on aggressive paid media ad spend.',
    approach: [
      'Developed a short-form video content strategy focused on aesthetic product lifestyle hooks and trending sound clips.',
      'Orchestrated micro-influencer product seeding campaigns that generated authentic user-generated content (UGC).',
      'Implemented native Instagram & TikTok shop integrations for direct social commerce purchases.'
    ],
    workExecuted: [
      'Short-Form Motion Video Production',
      'Micro-Influencer Seeding Campaign',
      'Algorithm-Optimized Publishing Schedule',
      'Social Commerce Storefront Integration'
    ],
    platforms: ['Instagram Reels', 'TikTok', 'YouTube Shorts', 'Shopify Social Commerce'],
    industries: ['D2C & Beverage', 'Lifestyle & Fitness', 'Consumer Goods'],
    metaTitle: 'Social Brand Scaling Case Study | MyAdSphere',
    metaDescription: 'Explore how MyAdSphere captured 15M+ organic social impressions for Aura Hydration through viral short-form video.'
  },

  'luxury-real-estate': {
    slug: 'luxury-real-estate',
    number: '04',
    title: 'Luxury Property Acquisition',
    category: 'CREATIVE',
    client: 'Sovereign Heights Estates',
    tagline: 'High-Ticket Real Estate Lead Generation Funnel',
    shortDesc: 'Securing $22M+ in closed luxury villa sales through cinematic video advertising and private VIP prospect funnels.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    metrics: [
      { label: 'Closed Sales Volume', value: '$22M+' },
      { label: 'Verified HNW Leads', value: '180+' },
      { label: 'Cost Per HNW Lead', value: '$120' }
    ],
    challenge: 'Sovereign Heights required ultra-exclusive outreach to High-Net-Worth Individuals (HNWIs) for premium residential villa developments without diluting brand prestige.',
    approach: [
      'Produced cinematic 4K drone walkthrough videos and architectural spotlight ad creatives.',
      'Targeted high-net-worth demographic and interest clusters across Meta and Google Search intent keywords.',
      'Built a private VIP brochure download funnel paired with white-glove concierge call booking.'
    ],
    workExecuted: [
      'Cinematic Architectural Video Ads',
      'HNWI Precision Audience Targeting',
      'VIP Lead Qualification Funnel',
      'Concierge Booking Integration'
    ],
    platforms: ['Meta Ads (FB/IG)', 'Google Search', 'YouTube 4K Ads', 'GoHighLevel'],
    industries: ['Luxury Real Estate', 'Property Development', 'High-Ticket Sales'],
    metaTitle: 'Luxury Real Estate Case Study | MyAdSphere',
    metaDescription: 'See how MyAdSphere delivered $22M+ in closed luxury estate sales using cinematic video advertising and VIP lead funnels.'
  },

  'healthtech-seo-dominance': {
    slug: 'healthtech-seo-dominance',
    number: '05',
    title: 'HealthTech Organic Dominance',
    category: 'SEO',
    client: 'PulseCare Medical Analytics',
    tagline: 'First-Page Search Engine Rank Engineering',
    shortDesc: 'Achieving #1 search rankings for competitive commercial healthcare keywords and driving organic customer acquisition.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    metrics: [
      { label: 'Organic Traffic Growth', value: '+420%' },
      { label: 'First-Page Keywords', value: '85+' },
      { label: 'Organic Inbound Leads', value: '3.8x' }
    ],
    challenge: 'PulseCare was virtually invisible in search rankings for high-intent medical analytics queries, paying exorbitant rates for paid search ads.',
    approach: [
      'Executed a complete technical SEO overhaul, resolving Core Web Vitals bottlenecks and schema markup errors.',
      'Constructed topical authority content clusters written by medical compliance experts.',
      'Secured high-authority editorial backlinks from authoritative healthcare publications.'
    ],
    workExecuted: [
      'Technical SEO Audit & Infrastructure Overhaul',
      'Topical Content Cluster Publishing',
      'Digital PR & Authority Backlink Acquisition',
      'Generative Search (GEO) Data Structuring'
    ],
    platforms: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'Webflow SEO', 'Schema.org'],
    industries: ['HealthTech & Medical', 'SaaS & Enterprise B2B', 'Healthcare Systems'],
    metaTitle: 'HealthTech SEO Dominance Case Study | MyAdSphere',
    metaDescription: 'Discover how MyAdSphere engineered +420% organic traffic growth and 85+ first-page rankings for PulseCare Medical.'
  }
};
