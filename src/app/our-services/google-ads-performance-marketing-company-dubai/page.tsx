import type { Metadata } from "next";
import Link from "next/link";
import { SingleServicePage, type SingleServicePageConfig } from "../../components/services/SingleServicePage";

const pageUrl = "https://www.webtekdigital.com/our-services/google-ads-performance-marketing-company-dubai/";

export const metadata: Metadata = {
  title: "Google Ads & Performance Marketing Company Dubai | PPC Agency Dubai | Webtek Digital",
  description: "Grow your business with a trusted Google Ads & Performance Marketing company in Dubai. Webtek Digital creates data-driven PPC campaigns that generate qualified leads, increase sales and maximise return on ad spend (ROAS).",
  keywords: ["Google Ads agency Dubai", "Google Ads company Dubai", "PPC agency Dubai", "Google PPC services Dubai", "performance marketing agency Dubai", "Google Search Ads Dubai", "Google Display Ads Dubai", "Google Shopping Ads Dubai", "YouTube Ads Dubai", "Google lead generation Dubai", "conversion rate optimisation Dubai", "remarketing agency Dubai", "Google Ads management UAE", "paid search marketing Dubai", "performance marketing UAE"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Google Ads & Performance Marketing Company Dubai | PPC Agency Dubai | Webtek Digital",
    description: "Data-driven Google Ads and performance marketing campaigns built to generate qualified leads, increase sales and maximise ROAS.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  ["Google Search Ads", "Reach high-intent customers at the moment they search. We handle keyword research, campaign structure, ad copy, assets, targeting, bidding, negative keywords, conversion tracking and landing-page recommendations."],
  ["Google Display Ads", "Build awareness and reconnect with potential customers through responsive display creative, audience segmentation, placement optimisation, prospecting and remarketing across Google’s Display Network."],
  ["Google Shopping Ads", "Increase ecommerce visibility and sales through Merchant Center setup, product-feed optimisation, product segmentation, bid management, Shopping campaigns and Performance Max integration."],
  ["YouTube Ads", "Educate, inspire and convert audiences with skippable, non-skippable, discovery, Shorts, launch, awareness and remarketing video campaigns supported by creative guidance."],
  ["Performance Max Campaigns", "Use Google’s full channel inventory with clear objectives, audience signals, strong creative assets and reliable conversion data across Search, Display, YouTube, Gmail, Discover and Maps."],
  ["Remarketing Campaigns", "Reconnect with visitors and customers through display, video, search, Customer Match, cart-recovery and lead-nurturing campaigns designed to improve conversion efficiency."],
  ["Landing Page Optimisation", "Improve mobile usability, message consistency, page speed, forms, calls to action and trust signals so a greater share of paid traffic becomes leads or customers."],
  ["Conversion Tracking & Analytics", "Measure form submissions, calls, WhatsApp clicks, purchases, appointments, downloads, sign-ups and revenue so decisions are based on genuine business outcomes."],
] as const;

const serviceImages = [
  { src: "/about/about-11.jpg", alt: "Google Search Ads campaign planning and analysis" },
  { src: "/about/about-04.jpg", alt: "Creative team planning Google Display advertising" },
  { src: "/brands/ounass-removebg-preview.png", alt: "Ecommerce brand representing Google Shopping campaigns" },
  { src: "/about/about-06.jpg", alt: "Video production environment representing YouTube advertising" },
  { src: "/about/about-09.jpg", alt: "Performance Max campaign management workspace" },
  { src: "/about/about-15.jpg", alt: "Marketing specialist managing remarketing campaigns" },
  { src: "/about/about-02.jpg", alt: "Team reviewing a conversion-focused landing page" },
  { src: "/about/about-16.jpg", alt: "Conversion tracking and advertising analytics dashboard review" },
] as const;

const outcomes = [
  "Generate high-quality leads", "Increase online sales", "Improve return on ad spend", "Reduce cost per lead", "Increase brand visibility", "Capture high-intent customers", "Accelerate business growth", "Launch new products successfully", "Increase appointment bookings", "Generate more phone calls", "Improve local market presence", "Expand into new markets", "Support seasonal promotions", "Improve customer acquisition", "Increase measurable revenue",
] as const;

const industries = [
  ["Healthcare & Medical", "Compliant campaigns for clinics and medical centres focused on patient enquiries, calls and appointment bookings."],
  ["Real Estate", "Search and performance campaigns for launches, off-plan projects, luxury properties, rentals and qualified investor leads."],
  ["Ecommerce", "Shopping, Performance Max, product feeds, dynamic remarketing and promotional campaigns optimised around sales and ROAS."],
  ["Hospitality", "Booking and reservation campaigns for hotels, resorts, restaurants, staycations, events and tourism packages."],
  ["Education", "Student recruitment, course promotion, admissions, webinar registrations and open-day campaigns aligned with enrolment goals."],
  ["Professional Services", "High-intent lead generation for legal, financial, engineering, consulting and other expert-led businesses."],
  ["Home Services", "Local campaigns that generate timely enquiries for cleaning, maintenance, HVAC, moving and contracting businesses."],
  ["Automotive", "Campaigns for dealerships, rentals, workshops, premium vehicles, EV dealers and automotive accessories."],
] as const;

const industryLabels = ["Healthcare", "Real estate", "Ecommerce", "Hospitality", "Education", "Professional", "Home services", "Automotive"] as const;
const industryImages = [
  { src: "/about/about-08.jpg", alt: "Healthcare setting representing medical Google Ads campaigns" },
  { src: "/about/about-13.jpg", alt: "Property setting representing real estate PPC campaigns" },
  { src: "/brands/ounass-removebg-preview.png", alt: "Retail brand representing ecommerce performance marketing" },
  { src: "/about/about-05.jpg", alt: "Hospitality setting representing booking campaigns" },
  { src: "/brands/dubai-uni-removebg-preview.png", alt: "Education brand representing student recruitment campaigns" },
  { src: "/about/about-14.jpg", alt: "Business team representing professional service campaigns" },
  { src: "/about/about-15.jpg", alt: "Service professional representing local lead generation" },
  { src: "/about/about-06.jpg", alt: "Premium setting representing automotive advertising" },
] as const;

const features = [
  "Google Ads audit", "Competitor and market analysis", "Keyword research", "Budget and KPI planning", "Search campaigns", "Display campaigns", "Shopping campaigns", "Performance Max", "YouTube Ads", "Demand Generation campaigns", "Call campaigns", "Ad copywriting", "Responsive search ads", "Display creative guidance", "Ad assets and asset groups", "GA4 integration", "Google Tag Manager", "Conversion tracking", "Enhanced conversions", "Call and ecommerce tracking", "Bid strategy optimisation", "Negative keyword management", "Search-term analysis", "Audience refinement", "Device and geographic optimisation", "Budget optimisation", "A/B testing", "Monthly reporting", "ROI and lead-quality analysis", "Strategic recommendations",
] as const;

const process = [
  ["Business Discovery", "We clarify your goals, products, services, audience, locations, budget, sales process and customer journey."],
  ["Account & Competitor Audit", "We review existing campaigns, tracking, landing pages, search demand, competitor activity and opportunities for improvement."],
  ["Keyword & Audience Research", "High-intent searches, negative keywords, audience signals and targeting options are organised around campaign objectives."],
  ["Campaign Strategy", "We define channel mix, structure, budgets, bidding, messaging, KPIs and the conversions that matter to the business."],
  ["Tracking Setup", "GA4, Tag Manager and Google Ads tracking are configured to measure leads, calls, WhatsApp actions, purchases and revenue accurately."],
  ["Campaign Creation", "Campaigns, ad groups, creative assets, copy, audiences and extensions are built around relevance and a consistent landing-page message."],
  ["Launch & Quality Review", "Before and after launch, we check settings, policies, links, budgets, targeting, tracking and the complete conversion journey."],
  ["Continuous Optimisation", "Search terms, bids, audiences, ads, budgets, devices, locations and landing-page performance are refined using real data."],
  ["Reporting & Growth Reviews", "Clear reports connect spend to leads, sales, CPA and ROAS, with practical recommendations for the next growth cycle."],
] as const;

const platforms = [
  ["Google Ads", "Manage Search, Display, Shopping, Performance Max, YouTube, Demand Gen and other suitable campaign formats."],
  ["Google Merchant Center", "Organise, validate and optimise ecommerce product data for Shopping and Performance Max campaigns."],
  ["Google Analytics 4", "Understand paid traffic, user journeys, conversions, ecommerce activity and revenue beyond the ad click."],
  ["Google Tag Manager", "Deploy and maintain tracking for forms, calls, WhatsApp clicks, bookings, downloads and other actions."],
  ["Google Search Console", "Use organic search and landing-page insight to support keyword, content and experience decisions."],
  ["Looker Studio", "Turn campaign and conversion data into accessible dashboards for transparent performance reporting."],
  ["Enhanced Conversions", "Improve conversion measurement using privacy-conscious first-party data where technically and legally appropriate."],
  ["Call & CRM Tracking", "Connect enquiries and sales outcomes with campaigns to evaluate lead quality, not only lead volume."],
] as const;

const reasons = [
  ["Business Outcomes First", "Campaigns are planned around qualified leads, sales, bookings, revenue and customer acquisition rather than clicks alone."],
  ["Certified PPC Expertise", "Specialists combine platform knowledge, strategic planning, targeting, tracking and disciplined optimisation."],
  ["Custom Campaign Strategy", "Industry, competition, audience, budget, sales process and commercial goals shape every account."],
  ["Advanced Conversion Tracking", "Reliable measurement gives Google’s systems and our specialists the data needed to optimise toward real outcomes."],
  ["Continuous Optimisation", "Keywords, search terms, bids, audiences, creative, budget allocation and landing pages are reviewed regularly."],
  ["Transparent Reporting", "Spend, conversions, CPL, CPA, conversion rate, revenue and ROAS are presented as clear, actionable insight."],
  ["Full-Service Support", "Paid media works as part of a connected customer journey spanning landing pages, search, social, brand and content."],
] as const;

const costFactors = ["Monthly advertising budget", "Campaign types", "Number of products or services", "Keyword competition", "Geographic targeting", "Landing-page requirements", "Conversion-tracking setup", "Ecommerce integration", "Performance Max management", "Shopping-feed optimisation", "Reporting requirements", "Campaign complexity"] as const;

const faqs = [
  ["What is Google Ads?", "Google Ads is Google’s advertising platform for reaching customers across Search, YouTube, Maps, Shopping and websites within the Google Display Network."],
  ["How quickly can Google Ads generate results?", "Campaigns can begin driving traffic and enquiries after approval and launch. Performance generally improves as conversion data accumulates and optimisation continues."],
  ["What is performance marketing?", "Performance marketing is a results-focused approach built around measurable outcomes such as leads, sales, calls, bookings and return on ad spend."],
  ["How much should I spend on Google Ads?", "The appropriate budget depends on your industry, competition, objectives, geography and search demand. We recommend a level based on research and realistic growth goals."],
  ["Do you manage existing Google Ads accounts?", "Yes. We can audit and improve an existing account or build a new campaign structure from the ground up."],
  ["What campaign types do you manage?", "We manage Search, Display, Shopping, Performance Max, YouTube, Demand Generation and call-focused campaigns, selecting the mix that fits your objectives."],
  ["Do I need a landing page?", "A focused landing page is strongly recommended because it improves message consistency, user experience, conversion rate and the value of each advertising click."],
  ["How do you measure campaign success?", "We monitor the metrics connected to your goals, including leads, sales, conversion rate, CPL, CPA, CTR, Quality Score, revenue and ROAS."],
  ["Can Google Ads help local businesses?", "Yes. Location targeting, call assets and Maps visibility make Google Ads effective for businesses serving defined areas."],
  ["Do you provide monthly reports?", "Yes. Managed campaigns include transparent reporting, performance analysis and recommendations for continued improvement."],
] as const;

const config: SingleServicePageConfig = {
  pageUrl,
  serviceName: "Google Ads and Performance Marketing in Dubai",
  serviceTypes: ["Google Ads management", "PPC advertising", "Performance marketing", "Search advertising", "Shopping advertising", "YouTube advertising", "Conversion rate optimisation"],
  breadcrumbName: "Google Ads & Performance Marketing Company Dubai",
  hero: {
    title: "Google Ads & Performance Marketing Company in Dubai",
    description: "Generate more leads, sales and a stronger return with data-driven Google Ads. Webtek Digital combines strategic planning, precise targeting, conversion tracking and continuous optimisation to turn advertising spend into measurable business growth.",
    primaryCta: "Get Your Free Google Ads Audit",
    secondaryCta: "Request a Custom PPC Strategy",
    note: "Tell us about your business, advertising goals and budget. Our Google Ads specialists will recommend a customised strategy designed to maximise return on investment.",
  },
  intro: {
    eyebrow: "Measured by business growth",
    title: "Performance marketing that delivers measurable outcomes",
    items: [
      "Digital advertising must do more than drive website traffic. Effective performance marketing connects spend with qualified leads, conversions, sales and sustainable growth.",
      "Before launching, we study your business, target audience, competitors, sales process and commercial objectives so campaigns reach the right people at the right moment with a relevant message.",
      "Google Ads, landing-page optimisation, audience targeting, remarketing, analytics and accurate conversion tracking work together as one continuously improving system.",
      <>Whether the objective is lead generation, ecommerce sales, awareness or customer acquisition, campaigns can connect with your <Link href="/our-services/website-design-development-company-dubai">website and landing pages</Link>, <Link href="/our-services/seo-online-reputation-management-company-dubai">SEO</Link> and <Link href="/our-services/social-media-management-marketing-company-dubai">social media marketing</Link>.</>,
    ],
  },
  services: { eyebrow: "Reach, convert and optimise", title: "Comprehensive Google Ads and performance marketing services", items: services, images: serviceImages, ctaLead: "Ready to make your media budget work harder?", ctaLabel: "Request your free account audit" },
  outcomes: { title: "Business outcomes of Google Ads and performance marketing", description: "Effective PPC campaigns are designed around measurable commercial results—not traffic or impressions in isolation.", items: outcomes },
  industries: { eyebrow: "Campaigns shaped around your market", title: "Performance marketing solutions for different industries", description: "Customer behaviour, competition and conversion journeys differ by industry. We tailor keywords, audiences, creative, landing pages and measurement to your market.", items: industries, labels: industryLabels, images: industryImages },
  features: { eyebrow: "A complete campaign scope", title: "Google Ads features and deliverables", items: features },
  process: { eyebrow: "Strategic, tracked and continuously improved", title: "Our Google Ads management process", items: process },
  technology: { eyebrow: "Reliable data for better decisions", title: "Google Ads tools and measurement platforms", description: "The right platform setup connects ad engagement with meaningful on-site and sales outcomes, giving campaigns a stronger base for optimisation.", image: { src: "/about/about-11.jpg", alt: "Performance marketing specialist reviewing Google Ads analytics" }, items: platforms },
  reasons: { eyebrow: "A performance partner focused on growth", title: "Why choose Webtek Digital for Google Ads?", items: reasons, footer: <>Support paid acquisition with conversion-focused <Link href="/our-services/website-design-development-company-dubai">website development</Link>, <Link href="/our-services/seo-online-reputation-management-company-dubai">SEO</Link>, <Link href="/our-services/social-media-management-marketing-company-dubai">social media</Link> and <Link href="/our-services/branding-pr-company-dubai">branding and PR</Link>.</> },
  cost: { title: "How much does Google Ads management cost in Dubai?", description: "Management cost depends on your objectives, media budget, industry competition and campaign complexity. A local service provider has different requirements from a large ecommerce catalogue or multi-market enterprise.", buttonLabel: "Request a Google Ads proposal", factorsLabel: "Main factors that influence pricing", factors: costFactors, note: "Following an initial consultation and account review, we prepare a customised proposal outlining the recommended strategy, campaign structure and management scope." },
  conversion: { eyebrow: "Ready to maximise advertising ROI?", title: "Start with a free Google Ads audit.", description: "We will assess the account structure, keywords, search terms, tracking, landing pages, competitors, budgets and bid strategies, then provide a practical performance-improvement roadmap.", benefits: ["Google Ads account review", "Campaign structure analysis", "Keyword and search-term review", "Conversion-tracking assessment", "Landing-page evaluation", "Competitor benchmarking", "Budget and bid-strategy review", "Performance-improvement roadmap"], requirementLabel: "Advertising requirement", requirementName: "Google Ads requirement", requirementPlaceholder: "Tell us about your business, current campaigns, target market, budget and goals", buttonLabel: "Book Your Free Google Ads Audit" },
  faq: { eyebrow: "The practical details", title: "Frequently asked questions", items: faqs },
  finalCta: { eyebrow: "Advertising designed around real returns", title: "Let’s build campaigns that deliver business growth.", body: "Successful advertising attracts the right audience and converts attention into customers. Launch your first campaign, improve an existing account or scale profitable acquisition with one strategic performance team.", label: "Speak with a Google Ads specialist" },
};

export default function Page() {
  return <SingleServicePage config={config} />;
}
