import type { Metadata } from "next";
import Link from "next/link";
import { SingleServicePage, type SingleServicePageConfig } from "../../components/services/SingleServicePage";

const pageUrl = "https://www.webtekdigital.com/our-services/social-media-management-marketing-company-dubai/";

export const metadata: Metadata = {
  title: "Social Media Management Company Dubai | Social Media Marketing Agency | Webtek Digital",
  description:
    "Looking for a Social Media Management Company in Dubai? Webtek Digital helps businesses grow through strategic social media management, content creation, paid advertising, community management and performance-driven social media marketing.",
  keywords: [
    "social media management Dubai",
    "social media marketing Dubai",
    "social media agency Dubai",
    "social media company Dubai",
    "Instagram marketing Dubai",
    "Facebook marketing Dubai",
    "LinkedIn marketing Dubai",
    "TikTok marketing Dubai",
    "content creation Dubai",
    "social media advertising Dubai",
    "Meta Ads agency Dubai",
    "social media strategy Dubai",
    "community management Dubai",
    "social media services UAE",
    "digital marketing Dubai",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Social Media Management Company Dubai | Social Media Marketing Agency | Webtek Digital",
    description: "Platform-specific strategy, creative content, community management and paid social campaigns designed around measurable business growth.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  ["Social Media Strategy Development", "Turn business goals, audience research and competitor insight into the right platform mix, content pillars, brand messaging, publishing schedule, KPIs and campaign roadmap."],
  ["Social Media Account Management", "Maintain a consistent professional presence through profile optimisation, publishing, captions, hashtags, monitoring, inbox management, comment moderation and monthly reporting."],
  ["Content Creation", "Create branded graphics, carousels, educational posts, promotions, product highlights, testimonials, infographics, event content and seasonal campaigns tailored to your audience."],
  ["Short-Form Video Content", "Plan and produce Instagram and Facebook Reels, TikTok videos and YouTube Shorts, including product demonstrations, testimonials, educational ideas, trends and voice-over scripts."],
  ["Social Media Copywriting", "Write on-brand captions, stories and calls to action that capture attention, explain value, encourage engagement, drive traffic and support enquiries or conversions."],
  ["Community Management", "Build trust through timely comment moderation, direct-message responses, audience engagement, customer-support coordination, conversation monitoring and escalation management."],
  ["Social Media Advertising", "Plan and optimise Meta, Instagram, Facebook, LinkedIn and TikTok campaigns for awareness, traffic, leads, conversions, retargeting and remarketing."],
  ["Influencer Marketing", "Find relevant creators and manage authentic partnerships through campaign planning, outreach, contracts, approvals, product collaborations and performance reporting."],
  ["Social Media Analytics & Reporting", "Measure audience growth, reach, engagement, traffic, leads, video and advertising performance, then use those insights to refine the next campaign cycle."],
] as const;

const serviceImages = [
  { src: "/about/about-12.jpg", alt: "Social media strategists planning platform content" },
  { src: "/about/about-09.jpg", alt: "Team managing social media accounts and publishing" },
  { src: "/about/about-04.jpg", alt: "Creative team producing branded social content" },
  { src: "/about/about-06.jpg", alt: "Short-form social video production session" },
  { src: "/about/about-16.jpg", alt: "Copywriter developing captions and campaign messages" },
  { src: "/about/about-15.jpg", alt: "Community management team responding to customers" },
  { src: "/about/about-14.jpg", alt: "Marketing team reviewing paid social campaign performance" },
  { src: "/about/about-05.jpg", alt: "Creator partnership and influencer campaign planning" },
  { src: "/about/about-11.jpg", alt: "Social media analytics and reporting workspace" },
] as const;

const outcomes = [
  "Increase brand awareness",
  "Build customer trust",
  "Generate qualified leads",
  "Drive website traffic",
  "Increase online enquiries",
  "Improve customer engagement",
  "Strengthen customer loyalty",
  "Increase product and service awareness",
  "Support sales campaigns",
  "Build online communities",
  "Improve customer retention",
  "Increase event attendance",
  "Promote new products and services",
  "Strengthen employer branding",
  "Improve overall digital marketing performance",
] as const;

const industries = [
  ["Healthcare & Medical", "Educate patients and build professional trust through clinic content, doctor profiles, medical Reels, health-awareness content and appointment campaigns."],
  ["Real Estate", "Showcase properties and build buyer confidence with property videos, community guides, investment content, agent branding, project launches and lead-generation ads."],
  ["Restaurants & Cafés", "Encourage bookings, online orders and repeat visits through food photography, Reels, chef stories, guest experiences, promotions and seasonal campaigns."],
  ["Hospitality", "Bring the guest experience to life through destination stories, testimonials, event coverage, resort promotions and tourism campaigns."],
  ["Ecommerce", "Turn social audiences into customers with product launches, demonstrations, user-generated content, shopping campaigns and conversion-focused advertising."],
  ["Education", "Build trust with students and parents using success stories, campus videos, faculty highlights, admissions campaigns and event promotion."],
  ["Professional Services", "Develop authority-building educational content for legal, accounting, engineering, financial, consulting and other expert-led firms."],
  ["Technology Companies", "Explain complex products clearly through demonstrations, feature releases, customer success stories, educational video and product launches."],
] as const;

const industryLabels = ["Healthcare", "Real estate", "Food & dining", "Hospitality", "Ecommerce", "Education", "Professional", "Technology"] as const;

const industryImages = [
  { src: "/about/about-08.jpg", alt: "Professional environment representing healthcare social media" },
  { src: "/about/about-13.jpg", alt: "Premium property environment representing real estate content" },
  { src: "/about/about-06.jpg", alt: "Creative environment representing restaurant social media" },
  { src: "/about/about-05.jpg", alt: "Guest environment representing hospitality content" },
  { src: "/brands/ounass-removebg-preview.png", alt: "Retail brand presentation representing ecommerce marketing" },
  { src: "/brands/dubai-uni-removebg-preview.png", alt: "Education brand presentation representing student campaigns" },
  { src: "/about/about-14.jpg", alt: "Business team representing professional services content" },
  { src: "/about/about-09.jpg", alt: "Digital workspace representing technology marketing" },
] as const;

const features = [
  "Social media audit",
  "Competitor analysis",
  "Audience research",
  "Platform selection",
  "Content calendar",
  "Campaign planning",
  "KPI development",
  "Graphic design",
  "Carousel posts",
  "Static posts",
  "Reels",
  "Short videos",
  "Motion graphics",
  "Infographics",
  "Story templates",
  "Cover designs",
  "Captions and headlines",
  "Calls to action",
  "Hashtag research",
  "SEO-friendly social content",
  "Promotional copy",
  "Inbox management",
  "Comment replies",
  "Engagement strategy",
  "Customer interaction",
  "Brand monitoring",
  "Meta Ads",
  "Instagram Ads",
  "Facebook Ads",
  "LinkedIn Ads",
  "TikTok Ads",
  "Retargeting campaigns",
  "Lead-generation campaigns",
  "Conversion campaigns",
  "Monthly reports",
  "Engagement analysis",
  "Audience growth reporting",
  "Reach and impression reporting",
  "Website traffic measurement",
  "Lead reporting",
  "ROI analysis",
] as const;

const process = [
  ["Discovery Session", "We learn about your goals, audience, competitors, brand identity and current performance so the programme begins with the right commercial context."],
  ["Social Media Audit", "We review existing profiles, branding, content quality, engagement and competitor activity to identify strengths, inconsistencies and growth opportunities."],
  ["Strategy Development", "We establish content pillars, the platform mix, publishing frequency, campaign objectives and a practical KPI framework."],
  ["Content Planning", "Monthly calendars balance educational posts, promotions, Reels, Stories, seasonal campaigns and relevant industry trends."],
  ["Creative Production", "Our team produces graphics, video, motion content, captions, hashtags and advertising creative in line with the approved strategy."],
  ["Publishing & Community Management", "We publish approved content, monitor engagement and handle agreed customer interactions consistently across each platform."],
  ["Advertising & Optimisation", "Paid campaigns are monitored and refined around audience response, lead quality, conversions and cost efficiency."],
  ["Reporting & Strategy Reviews", "Each month we evaluate engagement, reach, traffic, leads, advertising performance and audience growth, then recommend the next improvements."],
] as const;

const platforms = [
  ["Meta Business Suite", "Schedule Facebook and Instagram content, manage messages and comments, review insights and control paid campaigns from one place."],
  ["Instagram", "Build visual stories through Reels, Stories, carousels, creator campaigns, product showcases and active community engagement."],
  ["Facebook", "Support organic communities and paid growth with page management, events, Messenger communication, audience building and advertising."],
  ["LinkedIn", "Develop B2B authority through company pages, executive profiles, thought leadership, corporate announcements, recruitment marketing and ads."],
  ["TikTok", "Reach new audiences with platform-native short video, informed trend participation, product stories, education and paid advertising."],
  ["YouTube", "Build trust through channel management, demonstrations, educational videos, testimonials, Shorts, publishing and YouTube SEO."],
  ["X", "Support timely corporate communication, industry news, brand updates, thought leadership and real-time customer engagement."],
  ["Pinterest", "Drive discovery and website traffic for visual sectors through searchable Pins, consistent publishing and Pinterest SEO."],
  ["Canva Pro", "Enable collaborative design, branded templates and efficient content production while maintaining visual consistency."],
  ["Adobe Creative Cloud", "Produce professional graphics, video, animation and branded content with Photoshop, Illustrator, Premiere Pro and After Effects."],
  ["Google Analytics 4", "Measure social traffic, user behaviour, leads, conversions and revenue contribution beyond platform-level metrics."],
  ["Google Tag Manager", "Track form submissions, WhatsApp clicks, phone calls, downloads and important on-site campaign actions."],
  ["AI-Assisted Content Planning", "Improve research, trend discovery and creative ideation with AI-assisted workflows, followed by human review for accuracy and brand fit."],
] as const;

const reasons = [
  ["Business-Focused Strategy", "Every campaign is designed around a defined outcome such as awareness, leads, traffic, sales, recruitment or customer engagement."],
  ["Custom Content Creation", "Original content is tailored to your brand, industry, audience and goals instead of relying on generic templates."],
  ["Experienced Creative Team", "Strategists, designers, editors, copywriters, advertising specialists and consultants manage the campaign from planning to reporting."],
  ["Platform-Specific Expertise", "Instagram, Facebook, LinkedIn, TikTok, YouTube, Pinterest and X each receive content suited to how their audiences behave."],
  ["Performance-Driven Marketing", "Success is evaluated through traffic, lead quality, engagement, conversion, ROAS, cost per lead and customer acquisition—not likes alone."],
  ["Transparent Communication", "Clear calendars, publishing visibility, monthly reporting and practical recommendations keep your team informed."],
  ["Full-Service Digital Support", "Social media can connect with your website, SEO, paid search, branding, content, email, automation and video strategy."],
] as const;

const costFactors = [
  "Number of social media platforms",
  "Posting frequency",
  "Graphic design requirements",
  "Video production",
  "Reel creation",
  "Community management",
  "Copywriting",
  "Paid advertising",
  "Photography",
  "Influencer campaigns",
  "Monthly reporting",
  "Strategy meetings",
] as const;

const faqs = [
  ["Why is social media marketing important for businesses?", "Social media helps businesses increase brand awareness, engage with customers, generate leads and build long-term relationships through consistent and valuable content."],
  ["Which social media platforms should my business use?", "The best platforms depend on your industry, audience and business objectives. We identify the channels most likely to deliver meaningful engagement and commercial value."],
  ["How often should businesses post on social media?", "Posting frequency depends on the strategy, but consistency matters more than volume. We develop a realistic content calendar around your goals, resources and audience."],
  ["Do you create the content?", "Yes. Our team can handle content planning, graphic design, video editing, copywriting and publishing while maintaining your brand identity."],
  ["Do you manage paid social media advertising?", "Yes. We create and optimise campaigns across Meta, LinkedIn, TikTok and other suitable platforms to increase reach, leads and conversions."],
  ["Can social media generate leads?", "Yes. With the right combination of content, targeting, advertising and landing pages, social media can become an effective lead-generation channel."],
  ["Will you respond to comments and messages?", "Yes. Community management can be included in the scope to support timely, professional customer interactions and clear escalation procedures."],
  ["How do you measure success?", "We track relevant metrics such as engagement quality, audience growth, website traffic, leads, conversions, advertising performance and return on investment."],
  ["Do you provide monthly reports?", "Yes. Campaign reporting includes performance analysis, practical insights and recommendations for the next period."],
  ["Can you manage multiple platforms?", "Yes. We manage campaigns across Instagram, Facebook, LinkedIn, TikTok, YouTube, Pinterest and X while adapting content to each platform."],
] as const;

const config: SingleServicePageConfig = {
  pageUrl,
  serviceName: "Social Media Management and Marketing in Dubai",
  serviceTypes: ["Social media strategy", "Social media management", "Content creation", "Community management", "Social media advertising", "Influencer marketing"],
  breadcrumbName: "Social Media Management & Marketing Company Dubai",
  hero: {
    title: "Social Media Management & Marketing Company in Dubai",
    description: "Turn followers into customers with strategic social media marketing. Webtek Digital combines content planning, creative production, community management, paid advertising and performance analysis to help startups, growing businesses and established companies build trust and generate measurable results.",
    primaryCta: "Get a Free Social Media Audit",
    secondaryCta: "Request a Custom Strategy",
    note: "Tell us about your business, target audience and goals. Our social media experts will recommend a strategy designed to improve engagement, audience growth and business performance.",
  },
  intro: {
    eyebrow: "Built for business growth",
    title: "Strategic social media marketing with a clear purpose",
    items: [
      "Social media has evolved beyond brand awareness into a powerful channel for customer acquisition, relationship building and long-term growth. Customers use Instagram, Facebook, LinkedIn, TikTok, YouTube and X to discover and evaluate businesses every day.",
      "Without a clear strategy, businesses often struggle with inconsistent publishing, low engagement and content that fails to generate enquiries. We align every piece of content with your audience, industry, brand personality and commercial objectives.",
      "Our campaigns are planned to build awareness and trust, grow engaged communities, generate qualified leads, support sales, improve retention and strengthen online reputation.",
      <>Whether the goal is lead generation, ecommerce revenue, website traffic or engagement, our social media team can connect the campaign with <Link href="/our-services/website-design-development-company-dubai">website</Link>, search, brand and conversion activity.</>,
    ],
  },
  services: { eyebrow: "Strategy, creativity and performance", title: "Comprehensive social media management and marketing services", items: services, images: serviceImages, ctaLead: "Want more from your social presence?", ctaLabel: "Tell us what you want to achieve" },
  outcomes: { title: "What can social media marketing do for your business?", description: "With a clear strategy, engaging content and continuous optimisation, social media becomes a measurable channel for building trust, generating demand and supporting revenue.", items: outcomes },
  industries: { eyebrow: "Content shaped around the sector", title: "Social media marketing solutions for different industries", description: "Every industry has different customer behaviour, buying journeys and content requirements. We tailor the platform, message and creative approach to your business sector.", items: industries, labels: industryLabels, images: industryImages },
  features: { eyebrow: "A campaign scope built around you", title: "Social media features and deliverables", items: features },
  process: { eyebrow: "Consistent, creative and measurable", title: "Our social media management process", items: process },
  technology: { eyebrow: "Professional tools, purposeful channels", title: "Social media marketing tools and platforms we work with", description: "Successful campaigns require the right combination of creative production, publishing technology, analytics and continuous optimisation. We select platforms around your audience and objectives.", image: { src: "/about/about-09.jpg", alt: "Social media marketing team reviewing content and analytics" }, items: platforms },
  reasons: {
    eyebrow: "A long-term marketing partner",
    title: "Why choose Webtek Digital for social media management?",
    items: reasons,
    footer: <>Build a connected growth system with our <Link href="/our-services/website-design-development-company-dubai">website development</Link>, <Link href="/our-services/seo-online-reputation-management-company-dubai">SEO</Link>, <Link href="/our-services/branding-pr-company-dubai">branding and PR</Link>, <Link href="/our-services/google-ads-performance-marketing-company-dubai">Google Ads</Link>, content marketing and video production capabilities.</>,
  },
  cost: { title: "How much does social media management cost in Dubai?", description: "Cost depends on scope, the number of platforms and the level of content production required. A startup focused on one channel has different needs from an established business running integrated campaigns across several platforms.", buttonLabel: "Request a social media proposal", factorsLabel: "Main factors that influence cost", factors: costFactors, note: "Following a consultation, we prepare a customised proposal outlining the recommended services, deliverables, timelines and estimated investment." },
  conversion: { eyebrow: "Ready to grow through social media?", title: "Start with a free social media audit.", description: "We will review your current presence, competitors, audience and advertising opportunities, then recommend a practical strategy aligned with your business goals.", benefits: ["Social media audit", "Competitor analysis", "Content strategy recommendations", "Platform assessment", "Audience insights", "Advertising opportunities", "Growth roadmap", "Performance recommendations"], requirementLabel: "Social media requirement", requirementName: "Social media requirement", requirementPlaceholder: "Tell us about your business, audience, current platforms and marketing goals", buttonLabel: "Book Your Free Social Media Consultation" },
  faq: { eyebrow: "The practical details", title: "Frequently asked questions", items: faqs },
  finalCta: { eyebrow: "Strategy that moves beyond likes", title: "Let’s build a social presence that drives growth.", body: "Your social channels should attract the right audience, build trust and support measurable results. Start from scratch or improve an existing presence with one connected creative and performance team.", label: "Speak with a social media expert" },
};

export default function Page() {
  return <SingleServicePage config={config} />;
}
