import type { Metadata } from "next";
import Link from "next/link";
import {
  SingleServicePage,
  type SingleServicePageConfig,
} from "../../components/services/SingleServicePage";

const pageUrl =
  "https://www.webtekdigital.com/our-services/seo-online-reputation-management-company-dubai/";

export const metadata: Metadata = {
  title: "SEO & Online Reputation Management Company Dubai | Webtek Digital",
  description:
    "Looking for the best SEO & Online Reputation Management company in Dubai? Webtek Digital helps businesses improve Google rankings, increase organic traffic, remove negative search visibility, strengthen online reputation and generate more qualified leads.",
  keywords: [
    "SEO company Dubai",
    "SEO agency Dubai",
    "online reputation management Dubai",
    "ORM company Dubai",
    "local SEO Dubai",
    "technical SEO Dubai",
    "Google review management Dubai",
    "ecommerce SEO Dubai",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "SEO & Online Reputation Management Company Dubai | Webtek Digital",
    description:
      "Improve Google rankings, attract qualified organic traffic and build a trusted online reputation with an integrated SEO and ORM strategy.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  [
    "Search Engine Optimisation",
    "Custom SEO campaigns combining audits, keyword research, competitor analysis, on-page optimisation, authority building, reporting and conversion improvements.",
  ],
  [
    "Technical SEO",
    "Improve crawlability, indexing and performance through Core Web Vitals, mobile optimisation, sitemaps, canonicals, schema, redirects, security and site architecture.",
  ],
  [
    "On-Page SEO",
    "Optimise titles, descriptions, headings, URLs, content, images, keywords, internal links and calls to action for search relevance and stronger conversions.",
  ],
  [
    "Local SEO",
    "Strengthen visibility across Google Maps, local results and near-me searches with profile optimisation, citations, location pages, local links and review strategy.",
  ],
  [
    "Content SEO",
    "Build organic visibility with useful service pages, location pages, articles, pillar content, FAQs, product copy, industry guides and thought leadership.",
  ],
  [
    "Off-Page SEO",
    "Grow authority through white-hat backlinks, digital PR, relevant brand mentions, citations, guest contributions and careful backlink analysis.",
  ],
  [
    "Link Building",
    "Earn editorial links through resource outreach, industry partnerships, guest articles, broken-link opportunities, citations and competitor research.",
  ],
  [
    "Ecommerce SEO",
    "Increase product discovery and organic sales with product, category and collection optimisation, structured data, internal links and technical improvements.",
  ],
  [
    "Enterprise SEO",
    "Create scalable search programmes for complex websites through architecture, content governance, international SEO, executive reporting and advanced technical work.",
  ],
  [
    "Online Reputation Management",
    "Monitor and strengthen brand perception across search results, review platforms, social media and publications with ethical, long-term reputation strategies.",
  ],
  [
    "Google Review Management",
    "Build an authentic review profile with customer feedback systems, response guidance, monitoring, sentiment analysis and clear escalation processes.",
  ],
  [
    "Brand Monitoring",
    "Track search, news, blogs, forums and social conversations to understand sentiment, identify opportunities and detect emerging issues early.",
  ],
  [
    "Crisis Reputation Management",
    "Prepare structured communication, monitoring, public messaging, stakeholder updates and recovery plans for negative press, criticism or misinformation.",
  ],
  [
    "Executive Reputation Management",
    "Strengthen the online presence of founders and leaders through personal branding, profile optimisation, thought leadership, media positioning and monitoring.",
  ],
] as const;

const serviceImages = [
  { src: "/about/about-11.jpg", alt: "SEO specialists reviewing search performance" },
  { src: "/about/about-09.jpg", alt: "Technical SEO team analysing a website" },
  { src: "/about/about-10.jpg", alt: "Content specialist working on on-page SEO" },
  { src: "/about/about-13.jpg", alt: "Dubai skyline representing local SEO" },
  { src: "/about/about-04.jpg", alt: "SEO content planning session" },
  { src: "/about/about-14.jpg", alt: "Digital PR and authority-building team" },
  { src: "/about/about-03.jpg", alt: "Specialists planning a link-building campaign" },
  { src: "/about/about-06.jpg", alt: "Ecommerce SEO planning workspace" },
  { src: "/about/about-12.jpg", alt: "Enterprise team reviewing organic growth" },
  { src: "/about/about-15.jpg", alt: "Online reputation consultant supporting a client" },
  { src: "/about/about-08.jpg", alt: "Customer review management discussion" },
  { src: "/about/about-02.jpg", alt: "Brand monitoring and sentiment analysis" },
  { src: "/about/about-05.jpg", alt: "Crisis communications planning meeting" },
  { src: "/about/about-16.jpg", alt: "Executive reputation and personal branding session" },
] as const;

const outcomes = [
  "Increase qualified organic website traffic",
  "Improve Google rankings and search visibility",
  "Generate more relevant enquiries",
  "Strengthen Google Maps and local visibility",
  "Reduce long-term dependence on paid advertising",
  "Build brand awareness and authority",
  "Improve online reviews and customer confidence",
  "Increase website engagement and conversions",
  "Protect your business reputation",
  "Attract higher-value customers",
  "Enhance executive credibility",
  "Support long-term digital growth",
] as const;

const industries = [
  [
    "Healthcare & medical",
    "Local visibility, clinic and doctor profiles, patient-focused content, Google Business Profile optimisation and ethical review management.",
  ],
  [
    "Real estate",
    "Search strategies for developments, communities and investment opportunities, supported by local SEO, content and agent reputation management.",
  ],
  [
    "Ecommerce",
    "Technical optimisation, product and category SEO, structured data and content improvements that help online stores generate organic sales.",
  ],
  [
    "Hospitality & tourism",
    "Local search and review strategies for hotels, restaurants and tourism businesses that depend on visibility and customer confidence.",
  ],
  [
    "Education & training",
    "Improve programme discovery, student enquiries and institutional credibility through targeted search content and reputation signals.",
  ],
  [
    "Professional services",
    "Authority-led SEO and reputation management for legal, accounting, consulting and corporate service businesses where trust drives enquiries.",
  ],
  [
    "Technology & startups",
    "Build search visibility, product credibility and executive authority around launches, funding rounds and rapid market growth.",
  ],
] as const;

const industryLabels = [
  "Healthcare",
  "Real estate",
  "Ecommerce",
  "Hospitality",
  "Education",
  "Professional",
  "Technology",
] as const;

const industryImages = [
  { src: "/about/about-08.jpg", alt: "Healthcare setting representing medical SEO" },
  { src: "/about/about-13.jpg", alt: "Dubai property setting representing real estate SEO" },
  { src: "/brands/ounass-removebg-preview.png", alt: "Retail brand representing ecommerce SEO" },
  { src: "/about/about-05.jpg", alt: "Hospitality setting representing tourism SEO" },
  { src: "/brands/dubai-uni-removebg-preview.png", alt: "University brand representing education SEO" },
  { src: "/about/about-14.jpg", alt: "Professional team representing services SEO" },
  { src: "/about/about-11.jpg", alt: "Technology workspace representing startup SEO" },
] as const;

const features = [
  "Comprehensive SEO and reputation audit",
  "Competitor, keyword and search-intent research",
  "SEO roadmap and opportunity analysis",
  "Core Web Vitals and site-speed optimisation",
  "Crawl, indexability and architecture improvements",
  "Metadata, headings and internal-link optimisation",
  "Structured data and schema markup",
  "Conversion-focused content optimisation",
  "SEO landing pages, guides and articles",
  "White-hat link building and digital PR",
  "Google Business Profile and Maps optimisation",
  "Local citations and NAP consistency",
  "Review strategy and response framework",
  "Brand and sentiment monitoring",
  "Executive and corporate reputation support",
  "Transparent monthly performance reporting",
] as const;

const process = [
  [
    "Discovery & business consultation",
    "We learn about your objectives, customers, markets, competitors, current marketing and the commercial outcomes that will define success.",
  ],
  [
    "SEO & reputation audit",
    "We assess technical health, content, rankings, backlinks, Google Business Profile, reviews, branded search results and competitive position.",
  ],
  [
    "Keyword & competitor research",
    "We identify primary, secondary, local, transactional and informational searches most likely to generate relevant business opportunities.",
  ],
  [
    "Strategy development",
    "Audit and research findings become a prioritised roadmap covering technical work, content, authority, local visibility, reviews and measurable KPIs.",
  ],
  [
    "Website optimisation",
    "We improve technical foundations, metadata, page content, internal links, mobile performance, speed and structured data.",
  ],
  [
    "Content development",
    "Our team creates useful service pages, articles, location content, FAQs, guides and resources aligned with search intent and conversion goals.",
  ],
  [
    "Authority & reputation building",
    "Ethical outreach, digital PR, citations, review campaigns, profile improvements and brand monitoring build trust across the web.",
  ],
  [
    "Monitoring & optimisation",
    "We continuously review rankings, traffic, conversions, technical performance, mentions, reviews and competitor activity to refine the campaign.",
  ],
  [
    "Reporting & strategic reviews",
    "Clear reporting connects organic growth, local performance, reputation trends and conversion results with practical next-step recommendations.",
  ],
] as const;

const platforms = [
  ["Google Search Console", "Indexing, crawl health, search visibility and keyword performance."],
  ["Google Analytics 4", "Traffic, user behaviour, conversions and campaign measurement."],
  ["Google Business Profile", "Local visibility, business information, reviews and Maps performance."],
  ["Google Tag Manager", "Reliable interaction and conversion tracking across important journeys."],
  ["SEMrush & Ahrefs", "Keyword, competitor, backlink, content and authority research."],
  ["Screaming Frog", "Technical crawls that reveal architecture, metadata and indexability issues."],
  ["PageSpeed Insights & Lighthouse", "Performance, Core Web Vitals, accessibility and SEO diagnostics."],
  ["BrightLocal", "Local rankings, citations and reputation campaign monitoring."],
  ["Social & professional platforms", "Brand listening and executive visibility across Meta and LinkedIn."],
  ["AI-assisted SEO tools", "Specialist-reviewed research and workflows that improve efficiency without replacing human judgement."],
] as const;

const reasons = [
  [
    "Business-first SEO strategy",
    "Campaigns are shaped around commercial outcomes, customers and competition rather than a generic ranking checklist.",
  ],
  [
    "Ethical white-hat SEO",
    "Quality content, technical excellence, relevant authority and user experience support sustainable growth without risky shortcuts.",
  ],
  [
    "Integrated SEO & ORM",
    "Visibility and trust improve together so strong rankings create a positive first impression and more confident enquiries.",
  ],
  [
    "Experienced specialists",
    "Our team keeps pace with Google Search, Core Web Vitals, structured data, local SEO and AI-powered search experiences.",
  ],
  [
    "Data-driven decisions",
    "Search trends, competitors, analytics, conversions, technical health and reputation insights guide every priority.",
  ],
  [
    "Transparent reporting",
    "You can see completed work, organic progress, local visibility, review trends and the business results that matter.",
  ],
  [
    "Dubai local-search expertise",
    "Our UAE market knowledge supports stronger visibility across Search, Maps, local packs, near-me queries and location-based keywords.",
  ],
  [
    "Full-service digital support",
    "SEO can connect with website development, paid media, content, social, branding, video and automation through one coordinated team.",
  ],
] as const;

const costFactors = [
  "Website size and current technical condition",
  "Existing rankings and organic performance",
  "Industry and search competition",
  "Number of keywords and geographic markets",
  "Content strategy and production requirements",
  "Local SEO and Google Business Profile scope",
  "Link-building and digital PR requirements",
  "Review management and brand monitoring",
  "Crisis or executive reputation support",
  "Reporting frequency and campaign duration",
] as const;

const faqs = [
  [
    "What is SEO?",
    "Search Engine Optimisation is the process of improving your website's visibility on search engines such as Google to attract more relevant organic traffic.",
  ],
  [
    "How long does SEO take?",
    "Some technical improvements can show results within weeks, but meaningful ranking and traffic growth usually takes several months depending on competition, website history and campaign scope.",
  ],
  [
    "Why is Online Reputation Management important?",
    "A positive online reputation builds trust, influences purchase decisions and supports conversion. Managing reviews, search results and brand perception helps a business maintain credibility.",
  ],
  [
    "Can SEO help generate more leads?",
    "Yes. Effective SEO attracts people actively searching for your products or services, which can produce more relevant enquiries and stronger lead generation.",
  ],
  [
    "Do you provide Local SEO services?",
    "Yes. We optimise Google Business Profile, citations, location pages and other local signals to improve visibility in Google Maps and local search results.",
  ],
  [
    "Can you improve my Google Business Profile?",
    "Yes. We improve business information and local relevance, review performance and recommend ways to encourage authentic customer feedback.",
  ],
  [
    "Do you guarantee first-page rankings?",
    "No reputable SEO agency can guarantee a specific Google position. We follow recognised best practices to improve visibility and build sustainable long-term growth.",
  ],
  [
    "How do you measure SEO success?",
    "We monitor rankings, organic traffic, conversions, enquiries, Google Business Profile performance, engagement and the business outcomes agreed for the campaign.",
  ],
  [
    "Can you help remove negative reviews?",
    "We cannot remove genuine customer reviews. We can create ethical response and review-management strategies, encourage authentic positive feedback and improve overall brand perception.",
  ],
  [
    "Do you work with businesses outside Dubai?",
    "Yes. We support businesses across the UAE as well as organisations targeting regional and international markets.",
  ],
] as const;

const config: SingleServicePageConfig = {
  pageUrl,
  serviceName: "SEO and Online Reputation Management in Dubai",
  serviceTypes: [
    "Search Engine Optimisation",
    "Online Reputation Management",
    "Local SEO",
    "Technical SEO",
    "Google review management",
  ],
  breadcrumbName: "SEO & Online Reputation Management Company Dubai",
  hero: {
    title: "SEO & Online Reputation Management Company in Dubai",
    description:
      "Grow your rankings. Protect your reputation. Build long-term business success. Webtek Digital improves how your business appears across Google Search, Google Maps, reviews, publications and social media through ethical SEO, quality content and proactive reputation management.",
    primaryCta: "Get Your Free SEO Audit",
    secondaryCta: "Request a Custom Strategy",
    note: "Tell us about your business, competitors and growth objectives. Our SEO specialists will provide personalised recommendations for visibility, rankings and reputation.",
  },
  intro: {
    eyebrow: "Visibility and trust, working together",
    title: "Strategic SEO & reputation management built around business growth",
    items: [
      "Search is often the first place customers compare a business, read reviews and judge credibility. Strong rankings attract attention, while a positive reputation gives people the confidence to act.",
      "Webtek Digital connects technical SEO, content, local search, authority building, reputation monitoring, review management and brand protection in one customised roadmap.",
      "We follow Google's best practices and focus on sustainable digital assets that can increase traffic, enquiries and authority month after month.",
    ],
  },
  services: {
    eyebrow: "One connected growth programme",
    title: "Comprehensive SEO & online reputation management services",
    items: services,
    images: serviceImages,
    ctaLead: "Want to know where your biggest search opportunities are?",
    ctaLabel: "Request your free SEO audit",
  },
  outcomes: {
    title: "What can SEO & online reputation management do for your business?",
    description:
      "SEO helps customers discover you; reputation management helps them trust what they find. Together they create a stronger foundation for sustainable acquisition and growth.",
    items: outcomes,
  },
  industries: {
    eyebrow: "Strategies built for your market",
    title: "SEO & reputation solutions for different industries",
    description:
      "Every industry has different search behaviour, customer expectations and competitive pressures. We tailor the strategy to the way your market researches, compares and decides.",
    items: industries,
    labels: industryLabels,
    images: industryImages,
  },
  features: {
    eyebrow: "A transparent, tailored scope",
    title: "SEO & reputation management features and deliverables",
    items: features,
  },
  process: {
    eyebrow: "Sustainable optimisation",
    title: "Our SEO & online reputation management process",
    items: process,
  },
  technology: {
    eyebrow: "Research, measurement and monitoring",
    title: "SEO & reputation management tools and platforms",
    description:
      "We use industry-leading platforms to find opportunities, implement improvements and measure results. Every tool-assisted recommendation is reviewed by our specialists.",
    image: {
      src: "/about/about-11.jpg",
      alt: "SEO performance analytics and reputation monitoring workspace",
    },
    items: platforms,
  },
  reasons: {
    eyebrow: "Visibility that earns trust",
    title: "Why choose Webtek Digital for SEO & online reputation management?",
    items: reasons,
    footer: (
      <>
        Build a connected growth strategy with our{" "}
        <Link href="/our-services/website-design-development-company-dubai">
          website design and development
        </Link>{" "}
        team and explore our{" "}
        <Link href="/our-services/google-ads-performance-marketing-company-dubai">
          Google Ads
        </Link>
        , content, social media, branding and PR capabilities.
      </>
    ),
  },
  cost: {
    title: "How much do SEO & online reputation management services cost in Dubai?",
    description:
      "Investment depends on your goals, competition, current digital presence and required scope. A local service business, ecommerce store and international enterprise each need a different strategy.",
    buttonLabel: "Request Your SEO Proposal",
    factorsLabel: "Factors that influence pricing",
    factors: costFactors,
    note: "Following an initial consultation and website audit, we provide a tailored proposal with recommended services, priorities, timelines and expected outcomes.",
  },
  conversion: {
    eyebrow: "Ready to improve your visibility?",
    title: "Improve your rankings and protect your reputation.",
    description:
      "Your free consultation identifies where your business stands today and the practical opportunities to increase traffic, strengthen trust and generate more qualified enquiries.",
    benefits: [
      "Comprehensive SEO audit",
      "Technical website review",
      "Keyword opportunity analysis",
      "Competitor SEO assessment",
      "Google Business Profile review",
      "Online reputation analysis",
      "Review-management recommendations",
      "Custom growth roadmap",
    ],
    requirementLabel: "SEO and reputation goals",
    requirementName: "SEO and reputation goals",
    requirementPlaceholder:
      "Tell us about your business, competitors, target markets and current challenges",
    buttonLabel: "Book Your Free SEO Consultation",
  },
  faq: {
    eyebrow: "Clear answers before we begin",
    title: "Frequently asked questions",
    items: faqs,
  },
  finalCta: {
    eyebrow: "Let's grow your business organically",
    title: "Ready to stand out in search and earn customer trust?",
    body: "Improve Google rankings, attract qualified traffic and strengthen your brand reputation with a customised SEO and ORM strategy built for sustainable business growth.",
    label: "Speak With an SEO Expert",
  },
};

export default function Page() {
  return <SingleServicePage config={config} />;
}
