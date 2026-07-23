export const serviceRoutes = {
  services: "/our-services",
  mobileApp: "/our-services/mobile-app-development-company-dubai",
  website: "/our-services/website-design-development-company-dubai",
  branding: "/our-services/branding-pr-company-dubai",
  seoReputation:
    "/our-services/seo-online-reputation-management-company-dubai",
  socialMedia:
    "/our-services/social-media-management-marketing-company-dubai",
  googleAds:
    "/our-services/google-ads-performance-marketing-company-dubai",
  uiUx: "/our-services/ui-ux-design-company-dubai",
} as const;

export type ServiceDirectoryItem = {
  key: string;
  label: string;
  image: string;
  alt: string;
  video: string;
  href: string;
};

/**
 * The shared service directory used by the homepage, navigation menu, About
 * page, Services overview and footer. Add a service here to publish it across
 * every general service listing.
 */
export const serviceDirectory = [
  {
    key: "mobile-app-development",
    label: "Mobile app development",
    image: "/about/about-12.jpg",
    alt: "Digital workspace with screens and devices",
    video: "/services/mobile%20apps.mp4",
    href: serviceRoutes.mobileApp,
  },
  {
    key: "website-design-development",
    label: "Website design & development",
    image: "/nordwood-themes-wt4gUtdv1-U-unsplash.jpg",
    alt: "Digital team working in a glass-walled office",
    video: "/services/websites.mp4",
    href: serviceRoutes.website,
  },
  {
    key: "branding-public-relations",
    label: "Branding & public relations",
    image: "/about/about-10.jpg",
    alt: "Brand strategy and analytics workspace",
    video: "/services/branding%20%26%20public%20relations.mp4",
    href: serviceRoutes.branding,
  },
  {
    key: "seo-reputation-management",
    label: "SEO & online reputation management",
    image: "/about/about-11.jpg",
    alt: "Person working on search visibility reports",
    video: "/services/Google.mp4",
    href: serviceRoutes.seoReputation,
  },
  {
    key: "social-media-marketing",
    label: "Social media management & marketing",
    image: "/about/about-09.jpg",
    alt: "Team collaborating on social media marketing",
    video: "/services/Social.mp4",
    href: serviceRoutes.socialMedia,
  },
  {
    key: "google-ads-performance",
    label: "Google Ads & performance marketing",
    image: "/about/about-14.jpg",
    alt: "Business team reviewing campaign performance reports",
    video: "/services/Google.mp4",
    href: serviceRoutes.googleAds,
  },
  {
    key: "ui-ux-design",
    label: "UI/UX design",
    image: "/talabat/customer-panel.png.webp",
    alt: "Mobile app user interface screens",
    video: "/services/mobile%20apps.mp4",
    href: serviceRoutes.uiUx,
  },
  {
    key: "graphic-design-video-editing",
    label: "Graphic design & video editing",
    image: "/about/about-04.jpg",
    alt: "Creative team planning visual content in a studio",
    video: "/services/Editing%26%20graphics.mp4",
    href: serviceRoutes.branding,
  },
  {
    key: "telecalling-services",
    label: "Telecalling services",
    image: "/about/about-15.jpg",
    alt: "Team discussing customer communication workflows",
    video: "/services/Tele.mp4",
    href: `${serviceRoutes.services}#contact-us`,
  },
  {
    key: "content-creation",
    label: "Content creation",
    image: "/about/about-16.jpg",
    alt: "Marketing sketches and content planning notes",
    video: "/services/Content%20Creator.mp4",
    href: `${serviceRoutes.services}#contact-us`,
  },
  {
    key: "photography-videography",
    label: "Photography & videography",
    image: "/about/about-04.jpg",
    alt: "Creative production team preparing photo and video content",
    video: "/services/Videographer%20%26%20Photographer.mp4",
    href: `${serviceRoutes.services}#contact-us`,
  },
] as const satisfies readonly ServiceDirectoryItem[];

export const servicesPage = {
  eyebrow: "Our Services",
  title: "Our Services",
  intro:
    "Webtek Digital brings together app development, SEO, performance marketing, content, and creative under one team in Dubai, so every service on this page is built to work alongside the others - not in isolation. Whether you need a single campaign or a full growth system, our approach starts with your business goals and works backward into the technology, content, and media spend that gets results. Over 1,500 clients, including government bodies, retail groups, and direct-to-consumer brands, have trusted Webtek Digital to build and grow their digital presence across Dubai and the wider GCC.",
  services: [
    {
      title: "Mobile App Development (iOS & Android)",
      href: serviceRoutes.mobileApp,
      primaryKeyword: "mobile app development company in Dubai",
      description: [
        "Webtek Digital builds mobile apps for Dubai businesses that need more than a working prototype - they need a product that performs under real-world load and earns repeat use. Our mobile app development team works across native Android and iOS as well as cross-platform frameworks, covering the full build cycle from product strategy and UI/UX design through development, QA, and post-launch support.",
        "Whether the goal is a customer-facing booking app, an internal operations tool, or a full marketplace platform, our app development company in Dubai has shipped projects across categories including beauty and wellness booking, grocery and pharmacy delivery, taxi and ride booking, restaurant delivery, e-learning, and on-demand home services.",
      ],
      bullets: [
        "Native Android & iOS development",
        "Cross-platform builds for faster time-to-market",
        "UI/UX design built around conversion, not just looks",
        "API integrations, payment gateways & third-party services",
        "QA, App Store/Play Store submission & post-launch support",
      ],
    },
    {
      title: "Lead Generation & Performance Marketing",
      href: serviceRoutes.googleAds,
      primaryKeyword: "performance marketing agency in Dubai",
      description: [
        "Traffic without conversion is just spend. Our performance marketing team builds full-funnel lead generation systems for Dubai businesses - from landing page design and offer structuring through to CRM handoff and sales follow-up - so every campaign is judged on qualified leads and revenue, not impressions.",
        "We work across paid search, paid social, display, and programmatic channels, layering audience segmentation and conversion tracking onto every campaign so budget consistently moves toward what is actually driving enquiries and sales for retailers, healthcare brands, and service businesses across the UAE.",
      ],
      bullets: [
        "Landing page design built for conversion",
        "Multi-channel campaign planning & budget allocation",
        "Conversion tracking, CRM integration & lead handoff",
        "Audience segmentation & retargeting",
        "Monthly performance reporting tied to revenue, not clicks",
      ],
    },
    {
      title: "Google Ads - Shopping, Text, Display",
      href: serviceRoutes.googleAds,
      primaryKeyword: "Google Ads agency in Dubai",
      description: [
        "As a certified Google Ads agency in Dubai, Webtek Digital manages campaigns across Search, Shopping, Display, and YouTube for brands that want their ad spend to work harder. Every account is structured around clear conversion goals, with audience targeting and bid strategy refined continuously rather than left to run on autopilot.",
        "For ecommerce brands, our Google Shopping campaigns are built to surface the right products to the right intent; for service businesses, our Search and Display campaigns are built to capture demand at the moment someone is ready to enquire or buy. If you have outgrown a generalist marketing agency, our Google Ads team is built to manage serious budgets with accountability.",
      ],
      bullets: [
        "Google Search & Shopping campaign management",
        "Display & YouTube advertising",
        "Conversion tracking & Google Tag Manager setup",
        "Bid strategy optimization & A/B testing",
        "Transparent monthly reporting on spend vs. results",
      ],
    },
    {
      title: "Social Media Marketing",
      href: serviceRoutes.socialMedia,
      primaryKeyword: "social media marketing agency in Dubai",
      description: [
        "Social platforms move fast, and a content calendar alone will not build a following that converts. Our social media marketing team plans, creates, and manages organic and paid content across Instagram, Facebook, TikTok, and LinkedIn, tailored to how each platform's audience actually behaves rather than a one-size-fits-all posting schedule.",
        "Beyond content, we run paid social campaigns designed to extend reach into qualified audiences and feed leads directly into the same tracking systems used across our performance marketing work - so social media is measured as a growth channel, not just a brand presence.",
      ],
      bullets: [
        "Organic content strategy & content calendars",
        "Paid social campaigns (Meta, TikTok, LinkedIn)",
        "Community management & engagement",
        "Influencer & UGC collaboration support",
        "Platform-specific analytics & growth reporting",
      ],
    },
    {
      title: "Search Engine Optimization (SEO)",
      href: serviceRoutes.seoReputation,
      primaryKeyword: "best SEO company in Dubai",
      description: [
        "Webtek Digital is recognized among the best SEO companies in Dubai for brands that want organic visibility built on a technical foundation, not just a stack of backlinks. Our SEO process starts with a full technical audit - site speed, crawlability, structured data, and on-page health - before moving into keyword strategy and content execution.",
        "We run SEO programs for ecommerce stores, service businesses, and multi-location brands across Dubai and the wider UAE, combining technical fixes with a content plan tied directly to commercial keywords, so organic search becomes a channel that compounds month over month rather than resetting with every algorithm update.",
      ],
      bullets: [
        "Technical SEO audits (speed, crawlability, structured data)",
        "Keyword research & content strategy",
        "On-page optimization & internal linking",
        "Local SEO & Google Business Profile management",
        "Monthly ranking, traffic & visibility reporting",
      ],
    },
    {
      title: "Programmatic Media Buying",
      href: `${serviceRoutes.services}#contact-us`,
      primaryKeyword: "programmatic advertising agency in Dubai",
      description: [
        "Programmatic media buying lets Dubai brands reach precisely defined audiences across thousands of websites and apps without manually negotiating placements. Our team manages demand-side platform (DSP) campaigns that combine first-party data, contextual targeting, and real-time bidding to put display, video, and native ads in front of the right audience at the right moment.",
        "This channel works well alongside Google Ads and social campaigns for brands that need scale - retargeting site visitors, building awareness ahead of a launch, or reaching niche audiences that search and social cannot cover on their own.",
      ],
      bullets: [
        "DSP campaign setup & management",
        "Audience & contextual targeting",
        "Real-time bid optimization",
        "Cross-device retargeting",
        "Brand safety & viewability monitoring",
      ],
    },
    {
      title: "Digital PR & Reputation Management",
      href: serviceRoutes.seoReputation,
      primaryKeyword: "digital PR agency in Dubai",
      description: [
        "How a brand appears in search results and across review platforms shapes trust before a customer ever clicks through to a website. Our digital PR and reputation management work combines media outreach, guest placements, and review management to build a presence that holds up to scrutiny.",
        "For brands managing sensitive categories - healthcare, finance, or hospitality - this work runs alongside SEO and content marketing, since the same coverage that builds trust with customers also strengthens the authority signals search engines look for.",
      ],
      bullets: [
        "Media outreach & guest placements",
        "Review management & response strategy",
        "Crisis communication support",
        "Brand mention monitoring",
        "Authority-building backlinks via PR coverage",
      ],
    },
    {
      title: "Design & Video Creations",
      href: serviceRoutes.branding,
      primaryKeyword: "creative design agency in Dubai",
      description: [
        "Performance campaigns and organic content both live or die on the strength of the creative behind them. Our in-house design and video team produces everything from social media graphics and ad creative to product videos, brand films, and motion graphics - built to perform on the platform they are made for, not just look good in isolation.",
        "Every creative brief starts from the campaign goal, whether that is stopping the scroll on a paid social ad, explaining a product clearly on a landing page, or giving a brand a consistent visual identity across every channel it shows up on.",
      ],
      bullets: [
        "Social media & ad creative design",
        "Product & brand video production",
        "Motion graphics & animation",
        "Brand identity & visual guidelines",
        "Photography & content shoots",
      ],
    },
    {
      title: "Content Marketing",
      href: `${serviceRoutes.services}#contact-us`,
      primaryKeyword: "content marketing agency in Dubai",
      description: [
        "Webtek Digital is consistently ranked among the best content marketing companies in Dubai for brands that need a long-term organic growth engine rather than one-off blog posts. Our content strategists pair keyword research with a content calendar tied directly to the sales funnel - covering SEO-optimized landing pages, thought-leadership articles, and social content.",
        "Combined with our SEO and digital PR services, this content is designed to compound: building organic visibility and authority that keeps generating leads long after a paid campaign has ended.",
      ],
      bullets: [
        "SEO content strategy & keyword mapping",
        "Blog & landing page copywriting",
        "Thought-leadership & long-form content",
        "Content repurposing across channels",
        "Editorial calendars tied to the sales funnel",
      ],
    },
    {
      title: "Outdoor Advertising",
      href: `${serviceRoutes.services}#contact-us`,
      primaryKeyword: "outdoor advertising agency in Dubai",
      description: [
        "Digital channels do not cover every moment a customer notices a brand. Our outdoor advertising service plans and books out-of-home (OOH) media across Dubai and the UAE - billboards, mall and metro placements, and transit advertising - to extend campaign reach into the physical spaces a target audience actually moves through.",
        "We treat OOH as part of the same campaign system as digital: creative is built to be recognizable across formats, and placements are chosen to support - not duplicate - the audiences already being reached through paid and organic digital channels.",
      ],
      bullets: [
        "Billboard & roadside media planning",
        "Mall, metro & transit advertising",
        "Site selection & negotiation",
        "Creative adaptation for OOH formats",
        "Campaign reporting & placement audits",
      ],
    },
  ],
} as const;
