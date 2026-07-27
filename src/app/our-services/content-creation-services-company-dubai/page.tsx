import type { Metadata } from "next";
import Link from "next/link";
import {
  SingleServicePage,
  type SingleServicePageConfig,
} from "../../components/services/SingleServicePage";

const pageUrl =
  "https://www.webtekdigital.com/our-services/content-creation-services-company-dubai/";

export const metadata: Metadata = {
  title:
    "Content Creation Services Dubai | Social Media, Website & Marketing Content | Webtek Digital",
  description:
    "Professional Content Creation Services in Dubai. Webtek Digital creates high-converting website content, social media content, blogs, videos, ad copy, email campaigns, SEO content and branded storytelling that drives engagement and business growth.",
  keywords: [
    "Content Creation Services Dubai",
    "Content Marketing Agency Dubai",
    "Website Content Writing Dubai",
    "Social Media Content Creation Dubai",
    "SEO Content Writing Dubai",
    "Blog Writing Services Dubai",
    "Copywriting Services Dubai",
    "Digital Content Agency Dubai",
    "Creative Content Dubai",
    "Brand Storytelling Dubai",
    "Marketing Content Services UAE",
    "Video Content Creation Dubai",
    "Business Content Writing Dubai",
    "Email Marketing Content Dubai",
    "Content Strategy Dubai",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title:
      "Content Creation Services Dubai | Social Media, Website & Marketing Content | Webtek Digital",
    description:
      "Strategic website, SEO, social, advertising, email and video content that builds brands and drives measurable business growth.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  [
    "Website Content Writing",
    "Persuasive homepage, About Us, service, landing, industry, location and FAQ content that explains your value, improves readability and encourages enquiries.",
  ],
  [
    "SEO Content Writing",
    "Keyword-led blogs, pillar pages, topic clusters, long-form articles, local pages and evergreen content built around search intent and genuine reader value.",
  ],
  [
    "Blog Writing",
    "Educational articles, industry insights, thought leadership, how-to guides, case studies, company news, product announcements and customer success stories.",
  ],
  [
    "Social Media Content Creation",
    "Platform-specific Instagram, Facebook, LinkedIn, TikTok and X content, including carousels, Stories, Reel scripts, polls and community posts.",
  ],
  [
    "Advertising Copywriting",
    "Conversion-focused headlines, descriptions and calls to action for Google, Meta, LinkedIn, display, YouTube, landing-page, promotional and remarketing campaigns.",
  ],
  [
    "Email Marketing Content",
    "Welcome emails, promotions, newsletters, launches, event invitations, retention campaigns, automated sequences and lead-nurturing content.",
  ],
  [
    "Brand Storytelling",
    "Authentic brand narratives, founder stories, company history, messaging, mission and vision statements, customer stories, employer branding and corporate communications.",
  ],
  [
    "Video Content Scripting",
    "Attention-holding scripts for corporate and promotional videos, product demonstrations, explainers, YouTube, Reels, TikTok and customer testimonials.",
  ],
  [
    "Product & Ecommerce Content",
    "Detailed product descriptions, category pages, buying and comparison guides, launches, marketplace listings, FAQs and promotional copy that support online sales.",
  ],
  [
    "Content Strategy & Editorial Planning",
    "Content calendars, editorial plans, keyword strategies, audience personas, content pillars, publishing schedules, campaign themes and performance goals.",
  ],
] as const;

const serviceImages = [
  { src: "/about/about-16.jpg", alt: "Website content writer planning a conversion-focused service page" },
  { src: "/about/about-11.jpg", alt: "SEO specialist researching keywords for content in Dubai" },
  { src: "/about/about-10.jpg", alt: "Editorial team developing authoritative blog content" },
  { src: "/about/about-09.jpg", alt: "Creative team planning social media content" },
  { src: "/about/about-14.jpg", alt: "Advertising team reviewing conversion-focused campaign copy" },
  { src: "/about/about-15.jpg", alt: "Email marketing specialist preparing a nurture campaign" },
  { src: "/about/about-02.jpg", alt: "Brand storytelling workshop at Webtek Digital" },
  { src: "/about/about-04.jpg", alt: "Video content script and production planning" },
  { src: "/about/about-06.jpg", alt: "Ecommerce product content creation session" },
  { src: "/about/about-12.jpg", alt: "Content strategy and editorial calendar planning" },
] as const;

const outcomes = [
  "Increase organic website traffic",
  "Improve search engine rankings",
  "Build brand authority",
  "Generate qualified leads",
  "Improve website conversion rates",
  "Increase social media engagement",
  "Strengthen customer trust",
  "Improve customer retention",
  "Support sales teams",
  "Increase email marketing performance",
  "Enhance brand awareness",
  "Improve customer education",
  "Drive ecommerce sales",
  "Support digital advertising campaigns",
  "Create long-term marketing assets",
] as const;

const industries = [
  [
    "Healthcare & Medical",
    "Clinic website content, doctor profiles, treatment pages, patient education, wellness articles, social campaigns, email content and video scripts written to educate and build trust.",
  ],
  [
    "Real Estate",
    "Property descriptions, project landing pages, community guides, investment blogs, property video scripts, agent profiles, email campaigns and social content designed to generate enquiries.",
  ],
  [
    "Ecommerce & Retail",
    "Product descriptions, collection pages, buying guides, launches, seasonal campaigns, email marketing and social posts that improve confidence, SEO and conversion.",
  ],
  [
    "Hospitality & Tourism",
    "Hotel and resort descriptions, restaurant content, destination blogs, tourism campaigns, event promotions, travel guides and social captions that inspire bookings.",
  ],
  [
    "Education",
    "Course and admissions pages, student success stories, faculty profiles, educational blogs, newsletters, event promotions and social campaigns.",
  ],
  [
    "Financial Services",
    "Clear, professional banking, investment and insurance pages, financial blogs, FAQs, educational guides, client communications and email campaigns.",
  ],
  [
    "Technology & SaaS",
    "Product and SaaS landing pages, feature descriptions, knowledge-base and help-centre content, technical blogs, product launches and explainer scripts.",
  ],
  [
    "Corporate & Professional Services",
    "Company profiles, service pages, thought leadership, executive profiles, case studies, white papers, corporate newsletters and business presentations.",
  ],
] as const;

const industryLabels = [
  "Healthcare",
  "Real estate",
  "Ecommerce",
  "Hospitality",
  "Education",
  "Finance",
  "Technology",
  "Professional",
] as const;

const industryImages = [
  { src: "/about/about-08.jpg", alt: "Healthcare content creation and patient education planning" },
  { src: "/about/about-13.jpg", alt: "Real estate content and property campaign planning" },
  { src: "/brands/ounass-removebg-preview.png", alt: "Ecommerce and retail product content" },
  { src: "/about/about-05.jpg", alt: "Hospitality and tourism storytelling content" },
  { src: "/brands/dubai-uni-removebg-preview.png", alt: "Education content and student communications" },
  { src: "/about/about-14.jpg", alt: "Financial services content review" },
  { src: "/about/about-09.jpg", alt: "Technology and SaaS content strategy" },
  { src: "/about/about-10.jpg", alt: "Professional services thought leadership content" },
] as const;

const features = [
  "Homepage, About Us and service-page copy",
  "Industry, landing and location pages",
  "FAQs and conversion-focused calls to action",
  "Keyword research and keyword mapping",
  "Pillar pages and topic clusters",
  "SEO blogs and evergreen articles",
  "Internal linking strategy",
  "Meta titles and meta descriptions",
  "Monthly social media content calendars",
  "Captions, carousel copy and Story content",
  "Reel scripts and LinkedIn posts",
  "Community posts and campaign messaging",
  "Google Ads headlines and descriptions",
  "Meta, LinkedIn and display ad copy",
  "Landing-page copy and campaign calls to action",
  "Welcome emails and promotional campaigns",
  "Newsletters and product-launch emails",
  "Lead-nurture and retention sequences",
  "Event invitations and automated workflows",
  "Brand voice guidelines and messaging frameworks",
  "Mission, vision and value propositions",
  "Elevator pitches and company profiles",
  "Founder stories and employer branding",
  "Content audits and editorial calendars",
  "Publishing plans and content pillars",
  "Audience personas and campaign planning",
  "Performance reporting",
] as const;

const process = [
  [
    "Discovery & Strategy Session",
    "We establish your business goals, positioning, audience, marketing objectives, competitors and content requirements to create a clear strategic foundation.",
  ],
  [
    "Research & Planning",
    "Industry, competitor, keyword, search-intent, audience-behaviour and content-gap research reveals the strongest opportunities.",
  ],
  [
    "Content Strategy Development",
    "We build a roadmap covering themes, editorial calendars, SEO, distribution channels, publishing schedules and performance KPIs.",
  ],
  [
    "Content Creation",
    "Specialists create website copy, blogs, social content, email campaigns, advertising copy, video scripts, product descriptions and corporate communications in your brand voice.",
  ],
  [
    "Editing & Quality Assurance",
    "Every deliverable is reviewed for accuracy, grammar, readability, SEO, factual integrity, brand consistency and tone of voice.",
  ],
  [
    "Client Review & Approval",
    "Drafts are shared for collaborative stakeholder feedback and agreed revisions before anything is published.",
  ],
  [
    "Publishing & Performance Optimisation",
    "Where required, we support CMS uploads, on-page SEO, internal linking, image optimisation, content updates and performance tracking.",
  ],
  [
    "Continuous Content Improvement",
    "Search rankings, traffic, engagement, conversion, content performance and audience feedback guide ongoing refinements.",
  ],
] as const;

const technology = [
  [
    "SEO Research Platforms",
    "SEMrush, Ahrefs, Google Keyword Planner, Google Search Console and Screaming Frog support keyword research, competitor analysis and search optimisation.",
  ],
  [
    "Analytics & Performance Tools",
    "Google Analytics 4, Google Tag Manager, Looker Studio, Microsoft Clarity and Search Console reveal how content contributes to engagement, leads and growth.",
  ],
  [
    "Content Management Systems",
    "We create and manage responsive, well-structured content across WordPress, Shopify, Wix, Webflow and HubSpot CMS.",
  ],
  [
    "Editorial & Collaboration Tools",
    "Google Workspace, Microsoft 365, Notion, Trello and ClickUp keep planning, approvals and production workflows clear and consistent.",
  ],
  [
    "AI-Assisted Content Workflows",
    "AI supports research, ideation, briefs, topic clustering, grammar checks and automation. Experienced strategists write, edit and review every final piece for originality, accuracy and brand alignment.",
  ],
] as const;

const reasons = [
  [
    "Strategy Before Content",
    "Business objectives, positioning, audience pain points, search intent and marketing goals shape every brief before writing begins.",
  ],
  [
    "Experienced Content Specialists",
    "Content strategists, SEO specialists, copywriters, editors, social specialists, email experts and digital consultants work as one multidisciplinary team.",
  ],
  [
    "SEO-Driven Content Strategy",
    "Content targets valuable keywords, matches search intent, builds topical authority, supports internal linking and serves human readers as well as search engines.",
  ],
  [
    "Brand Consistency Across Every Channel",
    "A consistent voice, tone, message, visual-storytelling direction and customer experience connect your website, blog, social media and campaigns.",
  ],
  [
    "Conversion-Focused Copywriting",
    "Clear calls to action encourage consultation bookings, quotation requests, purchases, downloads, enquiries and email-list growth.",
  ],
  [
    "Scalable Content Production",
    "Flexible one-off and monthly programmes support startups, SMEs, ecommerce brands, professional firms, multi-location companies and enterprise organisations.",
  ],
  [
    "Performance Monitoring & Continuous Optimisation",
    "Search rankings, organic traffic, engagement, conversion, content performance and keyword visibility guide continuous improvement.",
  ],
] as const;

const costFactors = [
  "Type of content",
  "Number of deliverables",
  "Research requirements",
  "SEO optimisation",
  "Keyword strategy",
  "Industry complexity",
  "Content length",
  "Revision cycles",
  "Publishing requirements",
  "Distribution channels",
  "Monthly content volume",
  "Performance reporting",
] as const;

const faqs = [
  [
    "What content creation services do you provide?",
    "We create website content, SEO articles, blog posts, social media content, advertising copy, email campaigns, product descriptions, company profiles, video scripts, landing pages and brand messaging.",
  ],
  [
    "Do you write SEO-optimised content?",
    "Yes. Every SEO content project includes keyword research, search-intent analysis, on-page optimisation and content structured to improve organic visibility while providing genuine reader value.",
  ],
  [
    "Can you create content for social media?",
    "Absolutely. We produce captions, carousel copy, Reel scripts, Story content, LinkedIn posts, campaign messaging and monthly social media content calendars.",
  ],
  [
    "Do you write content for websites?",
    "Yes. We write homepage content, service pages, landing pages, About Us pages, location pages, FAQs and conversion-focused website copy.",
  ],
  [
    "Can you create content for Google Ads and Meta Ads?",
    "Yes. We develop advertising copy for Google Search, Google Display, Meta Ads, LinkedIn Ads, YouTube campaigns and other paid marketing platforms.",
  ],
  [
    "Do you provide content strategies as well as writing?",
    "Yes. We develop comprehensive strategies that include keyword research, audience personas, editorial calendars, content pillars and publishing plans.",
  ],
  [
    "How often should businesses publish new content?",
    "Publishing frequency depends on your goals and industry. We recommend a consistent schedule supported by an editorial calendar to maintain search visibility and audience engagement.",
  ],
  [
    "Can you write for technical or specialised industries?",
    "Yes. We create content for healthcare, real estate, education, finance, technology, ecommerce, hospitality and professional services, supported by project-specific industry research.",
  ],
  [
    "Do you update existing website content?",
    "Yes. We audit, rewrite and optimise existing content to improve readability, SEO performance, brand messaging and conversion rates.",
  ],
  [
    "Can you manage ongoing content creation for my business?",
    "Yes. Monthly services can cover website content, blogs, social media, email marketing and campaign copy so your business maintains a consistent, effective online presence.",
  ],
] as const;

const config: SingleServicePageConfig = {
  pageUrl,
  serviceName: "Content Creation Services in Dubai",
  serviceTypes: [
    "Website content writing",
    "SEO content writing",
    "Blog writing",
    "Social media content",
    "Advertising copywriting",
    "Email marketing content",
    "Brand storytelling",
    "Video scripting",
    "Ecommerce content",
    "Content strategy",
  ],
  breadcrumbName: "Content Creation Services Company Dubai",
  articleDescription:
    "A complete guide to Webtek Digital's strategic content creation services for businesses in Dubai and the UAE.",
  hero: {
    title: "Content Creation Services in Dubai",
    description:
      "Create content that connects, engages and converts. Webtek Digital combines creativity, strategic thinking and SEO expertise to produce website, search, social, email, advertising and video content that strengthens your brand and delivers measurable marketing results.",
    primaryCta: "Book a Free Content Strategy Consultation",
    secondaryCta: "Request a Custom Content Proposal",
    note:
      "Tell us about your business, marketing goals and target audience. Our content specialists will develop a customised strategy designed to grow your brand and generate results.",
  },
  intro: {
    eyebrow: "Content for every stage of the journey",
    title: "Content that builds relationships, trust and action",
    items: [
      "Content is the foundation of every successful digital marketing strategy. It attracts visitors through search, engages audiences on social media, nurtures leads through email and gives customers the confidence to act.",
      "Every interaction with your brand is an opportunity to educate, inspire and build trust. We align content with awareness, lead generation, conversion, retention and customer advocacy.",
      "Every deliverable is carefully planned, professionally written and optimised to build authority, improve visibility, increase traffic, generate qualified leads and strengthen customer relationships.",
      <>Whether you are establishing a new presence or scaling an established organisation, connect content with <Link href="/our-services/seo-online-reputation-management-company-dubai">SEO</Link>, <Link href="/our-services/social-media-management-marketing-company-dubai">social media</Link>, <Link href="/our-services/google-ads-performance-marketing-company-dubai">performance marketing</Link> and <Link href="/our-services/website-design-development-company-dubai">website development</Link>.</>,
    ],
  },
  services: {
    eyebrow: "Words, stories and campaigns built to perform",
    title: "Comprehensive content creation services",
    items: services,
    images: serviceImages,
    ctaLead: "Need consistent content across several channels?",
    ctaLabel: "Request a custom content proposal",
  },
  outcomes: {
    title: "How strategic content creation drives business growth",
    description:
      "Every blog, website page, social post, email and script contributes to how customers discover, trust and engage with your business. We create each asset around a clear commercial objective.",
    items: outcomes,
  },
  industries: {
    eyebrow: "Industry-aware messaging",
    title: "Content creation solutions for different industries",
    description:
      "Every industry communicates differently. Our specialists tailor the research, voice, message and format to your market, audience and business objectives.",
    items: industries,
    labels: industryLabels,
    images: industryImages,
  },
  features: {
    eyebrow: "A scope tailored to your channels",
    title: "Content creation features & deliverables",
    items: features,
  },
  process: {
    eyebrow: "Strategic, researched and collaborative",
    title: "Our content creation process",
    items: process,
  },
  technology: {
    eyebrow: "Research, SEO and AI technologies",
    title: "Content tools and platforms we work with",
    description:
      "High-performing content combines human creativity with rigorous research, efficient collaboration and meaningful performance data.",
    image: {
      src: "/about/about-11.jpg",
      alt: "Content strategist reviewing SEO research and content performance",
    },
    items: technology,
  },
  reasons: {
    eyebrow: "Content connected to the wider growth strategy",
    title: "Why choose Webtek Digital for content creation services?",
    items: reasons,
    footer: <>Unlike a standalone copywriting agency, Webtek Digital connects your content with <Link href="/our-services/website-design-development-company-dubai">website design and development</Link>, <Link href="/our-services/branding-pr-company-dubai">branding and PR</Link>, <Link href="/our-services/graphic-design-video-editing-company-dubai">graphic design and video editing</Link>, <Link href="/our-services/photography-videography-content-creation-company-dubai">photography and videography</Link>, <Link href="/our-services/seo-online-reputation-management-company-dubai">SEO and reputation management</Link>, <Link href="/our-services/google-ads-performance-marketing-company-dubai">Google Ads</Link> and <Link href="/our-services/social-media-management-marketing-company-dubai">social media management</Link>.</>,
  },
  cost: {
    title: "How much do content creation services cost in Dubai?",
    description:
      "Investment depends on your goals, content volume, research requirements and distribution channels. A single landing page requires a different scope from an ongoing programme covering SEO blogs, social media, email and website optimisation.",
    buttonLabel: "Request a Custom Content Proposal",
    factorsLabel: "Main factors that influence pricing",
    factors: costFactors,
    note:
      "Following an initial consultation, our team prepares a customised proposal outlining the recommended deliverables, timelines and investment.",
  },
  conversion: {
    eyebrow: "Ready to build a stronger brand through content?",
    title: "Start with a free content strategy consultation.",
    description:
      "We will evaluate your current content, identify growth opportunities and recommend a practical content strategy tailored to your brand, audience and goals.",
    benefits: [
      "Business and brand discovery",
      "Content audit",
      "Website content review",
      "SEO opportunity analysis",
      "Competitor content analysis",
      "Content calendar recommendations",
      "Keyword strategy discussion",
      "Content marketing roadmap",
    ],
    requirementLabel: "Content requirement",
    requirementName: "Content requirement",
    requirementPlaceholder:
      "Tell us about your business, audience, current content, priority channels and marketing goals",
    buttonLabel: "Book Your Free Content Strategy Consultation",
  },
  faq: {
    eyebrow: "The practical details",
    title: "Frequently asked questions",
    items: faqs,
  },
  finalCta: {
    eyebrow: "Let’s create content that grows your business",
    title: "Create content that connects, builds trust and delivers impact.",
    body:
      "Every blog, landing page, email, advertisement and social post is an opportunity to reach the right audience. Choose a one-time project or an ongoing content partnership built around measurable growth.",
    label: "Talk to a Content Strategy Expert",
  },
};

export default function Page() {
  return <SingleServicePage config={config} />;
}
