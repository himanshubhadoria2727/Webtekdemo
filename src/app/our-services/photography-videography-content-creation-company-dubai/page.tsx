import type { Metadata } from "next";
import Link from "next/link";
import { SingleServicePage, type SingleServicePageConfig } from "../../components/services/SingleServicePage";

const pageUrl = "https://www.webtekdigital.com/our-services/photography-videography-content-creation-company-dubai/";

export const metadata: Metadata = {
  title: "Photography, Videography & Content Creation | Commercial Photography | Webtek Digital",
  description: "Looking for professional photography, videography and content creation services in Dubai? Webtek Digital creates high-quality commercial photography, corporate videos, product shoots, social media content and brand storytelling that helps businesses attract customers and grow.",
  keywords: [
    "Photography & Videography Services Dubai", "Commercial Photography Dubai", "Corporate Photography Dubai",
    "Product Photography Dubai", "Food Photography Dubai", "Real Estate Photography Dubai",
    "Corporate Videography Dubai", "Content Creation Dubai", "Social Media Content Dubai",
    "Product Videography Dubai", "Brand Photography Dubai", "Promotional Video Production Dubai",
    "Drone Videography Dubai", "Business Photography Dubai", "Marketing Content Creation Dubai",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Photography, Videography & Content Creation| Webtek Digital",
    description: "Premium commercial photography, cinematic videography and marketing content created to make brands stand out.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  ["Commercial Photography", "Professional branding, business, office, team, lifestyle, website and advertising photography composed and optimised for digital and print."],
  ["Product Photography", "Conversion-focused ecommerce, Amazon, white-background, lifestyle, luxury, fashion, jewellery and cosmetic product imagery."],
  ["Corporate Photography", "Executive portraits, team headshots, workplace culture, leadership, office environments and company-profile photography that builds trust."],
  ["Food & Beverage Photography", "Carefully styled menu, restaurant, café, hotel dining, beverage, delivery-platform and seasonal campaign imagery."],
  ["Real Estate Photography & Video", "Interior, exterior and luxury-property shoots, walkthrough films, developer content, agent branding and aerial imagery."],
  ["Corporate Videography", "Company profiles, introductions, recruitment films, brand stories, executive interviews, training and internal communications."],
  ["Promotional & Commercial Video", "Product launches, digital advertisements, brand films, testimonials, case studies and service explainers planned for campaign performance."],
  ["Social Media Content Creation", "Platform-native Reels, TikToks, Shorts, behind-the-scenes, educational, trending and day-in-the-life content."],
  ["Event Photography & Video", "Professional coverage of conferences, launches, awards, exhibitions, seminars, networking sessions and community events."],
  ["Drone & Aerial Production", "Cinematic property, construction, resort, industrial, tourism, corporate-campus and event coverage, subject to UAE permissions."],
  ["Monthly Content Production", "Recurring shoot days, social photography, short-form video, products, team updates and seasonal campaign assets."],
] as const;

const serviceImages = [
  "/about/about-02.jpg", "/about/about-04.jpg", "/about/about-06.jpg", "/about/about-05.jpg",
  "/about/about-13.jpg", "/about/about-15.jpg", "/about/about-10.jpg", "/about/about-09.jpg",
  "/about/about-03.jpg", "/about/about-14.jpg", "/about/about-16.jpg",
].map((src, index) => ({ src, alt: `${services[index][0]} production by Webtek Digital in Dubai` }));

const outcomes = [
  "Increase brand awareness", "Build customer trust", "Improve website engagement",
  "Increase social media reach", "Improve Google and Meta Ads performance", "Increase click-through rates",
  "Strengthen brand identity", "Improve ecommerce conversion rates", "Increase product sales",
  "Generate more qualified leads", "Improve customer retention", "Enhance employer branding",
  "Increase event visibility", "Create long-term marketing assets", "Support SEO with original visual content",
] as const;

const industries = [
  ["Healthcare & Medical", "Clinic photography, doctor portraits, patient-experience films, facility tours, staff profiles and awareness campaigns produced with care and privacy in mind."],
  ["Real Estate", "Luxury interiors, exteriors, walkthroughs, agent films, aerial footage, community stories and launch content built to generate enquiries."],
  ["Ecommerce & Retail", "Product and lifestyle shoots, demonstrations, unboxings, fashion campaigns, marketplace imagery and social product content."],
  ["Hospitality & Tourism", "Hotel, resort, restaurant, food, destination and guest-experience content that brings atmosphere and service to life."],
  ["Education & Training", "Campus photography, student stories, classroom films, faculty profiles, graduation highlights, admissions and virtual tours."],
  ["Corporate Services", "Executive portraits, team and office imagery, brand films, recruitment, company profiles, internal communication and event coverage."],
  ["Restaurants & Food Brands", "Menu imagery, food styling, chef profiles, kitchen stories, social Reels, promotions and delivery-platform photography."],
  ["Manufacturing & Industrial", "Factory photography, process and production-line films, documentaries, training, equipment demonstrations and aerial facility shoots."],
] as const;

const features = [
  "Commercial and corporate photography", "Product, food and fashion photography", "Real estate and industrial photography",
  "Lifestyle imagery and executive headshots", "Corporate and promotional videos", "Product, brand-story and testimonial films",
  "Interviews, events and training videos", "Documentary and recruitment productions", "Instagram Reels and TikTok videos",
  "YouTube Shorts and vertical ads", "Behind-the-scenes and creator-style content", "Drone photography and videography",
  "Construction, property and tourism aerials", "Professional retouching and colour correction", "Colour grading and audio enhancement",
  "Motion graphics, effects and captions", "Creative direction and storyboarding", "Shot lists, scripts and campaign planning",
  "Platform optimisation and visual guidelines", "High-resolution and print-ready images", "Web and social media formats",
  "Vertical and horizontal video versions", "Source files where agreed", "Secure cloud delivery",
] as const;

const process = [
  ["Discovery & Creative Brief", "We define business and campaign goals, brand identity, audience, deliverables, budget and timeline."],
  ["Creative Planning", "Concepts, storyboards, mood boards, shot lists, schedules, locations and talent requirements create an efficient production plan."],
  ["Production", "Our team captures photography, film, aerial footage, interviews, products, lifestyle scenes, corporate stories and events using professional equipment."],
  ["Editing & Post Production", "Editing, colour, sound, music, motion graphics, captions, effects and brand elements turn raw material into polished assets."],
  ["Client Review", "Drafts are shared for focused feedback and refined against the agreed objectives and brand guidelines."],
  ["Final Delivery", "Approved website, social, advertising, print and archive versions are exported and delivered securely."],
  ["Ongoing Content Production", "Recurring shoot days, seasonal campaigns, product launches and content refreshes keep the marketing pipeline active."],
] as const;

const technology = [
  ["Professional Camera Systems", "Full-frame mirrorless and cinema systems support high-resolution photography, 4K video, slow motion, professional colour profiles and low-light production."],
  ["Professional Lighting", "Studio, product, interview, corporate, food and indoor productions use carefully controlled lighting for consistent results."],
  ["Drone Equipment", "Professional aerial systems capture scale and context where flights are permitted under applicable UAE rules."],
  ["Adobe Creative Cloud", "Lightroom, Photoshop, Premiere Pro, After Effects, Audition and Media Encoder support complete post-production."],
  ["DaVinci Resolve", "Advanced grading, finishing, cinematic correction and broadcast-quality output give films a polished visual character."],
  ["AI-Assisted Workflows", "AI accelerates rough cuts, transcription, subtitles and repetitive selections while creative professionals review every final asset."],
] as const;

const reasons = [
  ["Marketing-First Creative", "Objectives, brand identity, customer psychology, platform behaviour and conversion goals guide every photo and film."],
  ["Experienced Production Team", "Photographers, videographers, creators, directors, editors, motion designers and social specialists work as one crew."],
  ["End-to-End Production", "Consultation, planning, storyboards, locations, capture, editing, grading and delivery stay consistent under one team."],
  ["Platform-Optimised Content", "Assets are planned and exported specifically for social, search ads, websites, ecommerce, email, signage and print."],
  ["Premium Production Quality", "Composition, lighting, colour, audio, editing, brand consistency and export standards receive structured review."],
  ["Flexible Production Solutions", "Choose a focused shoot, launch campaign or recurring monthly partnership matched to goals, schedule and budget."],
  ["Commercial Storytelling", "Visual craft is paired with a clear message so content attracts attention and supports the next customer action."],
  ["Integrated Marketing Expertise", "Production connects easily with our design, brand, web, search, social and paid-media specialists."],
] as const;

const faqs = [
  ["What photography services do you offer?", "We provide commercial, corporate, product, food, real estate, event, team, lifestyle and marketing photography for many industries."],
  ["Do you provide professional videography services?", "Yes. We produce corporate and promotional films, products, interviews, testimonials, training, recruitment, events and social video."],
  ["Can you create content specifically for social media?", "Yes. We produce platform-optimised Reels, Shorts, Stories, behind-the-scenes content and campaigns for Instagram, Facebook, LinkedIn, TikTok and YouTube."],
  ["Do you offer drone photography and videography?", "Yes, where permitted and subject to applicable UAE regulations, locations and permit requirements."],
  ["Can you shoot at our office or business location?", "Yes. We regularly work at offices, shops, restaurants, hotels, healthcare facilities, industrial sites and other commercial locations."],
  ["Will you help plan the shoot?", "Yes. We support creative direction, concepts, storyboards, shot lists, schedules, talent and location planning."],
  ["How long does post-production take?", "Timing depends on production complexity and deliverable volume. We provide an estimated editing and delivery schedule before work starts."],
  ["Can you provide ongoing monthly content creation?", "Yes. Recurring packages can combine planned shoot days, photography, video, editing and campaign-ready content."],
  ["What file formats will I receive?", "Delivery can include high-resolution, web and print images plus video formatted for websites, advertising and each social platform. Source files may be included where agreed."],
  ["Can production be combined with your other marketing services?", "Yes. It integrates with branding, websites, SEO, Google Ads, social marketing and graphic design for a consistent campaign."],
] as const;

const config: SingleServicePageConfig = {
  pageUrl,
  serviceName: "Photography, Videography & Content Creation",
  serviceTypes: ["Commercial photography", "Corporate videography", "Product photography", "Content creation", "Social media video", "Drone videography"],
  breadcrumbName: "Photography, Videography & Content Creation",
  hero: {
    title: "Photography, Videography & Content Creation",
    description: "Capture attention, tell your story and grow your brand with professional photography, cinematic videography and marketing-focused content created for websites, social media, advertising and print.",
    primaryCta: "Book a Free Creative Consultation",
    secondaryCta: "Request a Custom Production Quote",
    note: "Tell us about your brand, campaign or content goals. Our creative specialists will recommend the right production approach for your business.",
  },
  intro: {
    eyebrow: "Visual content built to perform",
    title: "Professional visual content that drives business growth",
    items: [
      "Customers make decisions based on what they see. Strong visual content builds credibility, improves product presentation and helps people understand your value quickly.",
      "Every photograph and video is produced with marketing performance in mind, supporting engagement, conversion, brand identity and long-term campaign use.",
      "From concept and on-location production through editing, colour grading and delivery, one creative team manages the complete process with precision.",
      <>Extend every shoot through <Link href="/our-services/graphic-design-video-editing-company-dubai">graphic design and video editing</Link>, <Link href="/our-services/social-media-management-marketing-company-dubai">social media marketing</Link> and <Link href="/our-services/google-ads-performance-marketing-company-dubai">performance advertising</Link>.</>,
    ],
  },
  services: { eyebrow: "Still, motion and ongoing content", title: "Comprehensive photography, videography & content creation", items: services, images: serviceImages, ctaLead: "Have a product, campaign or story ready to shoot?", ctaLabel: "Plan your production with us" },
  outcomes: { title: "How professional visual content drives growth", description: "Original visual storytelling helps businesses communicate quality, connect emotionally and improve performance across every marketing channel.", items: outcomes },
  industries: { eyebrow: "A visual language for every market", title: "Content solutions for different industries", description: "We adapt creative direction, production style and deliverables to your audience, industry standards and commercial objectives.", items: industries, labels: ["Healthcare", "Real estate", "Ecommerce", "Hospitality", "Education", "Corporate", "Food", "Industrial"], images: serviceImages.slice(0, 8) },
  features: { eyebrow: "Production-ready for every channel", title: "Features & deliverables", items: features },
  process: { eyebrow: "Planned carefully, produced beautifully", title: "Our photography & videography process", items: process },
  technology: { eyebrow: "Professional craft from capture to delivery", title: "Production equipment, software & technologies", description: "Professional cameras, controlled lighting, aerial systems and post-production software support consistent commercial quality from pre-production to final export.", image: { src: "/about/about-04.jpg", alt: "Professional photography and videography production equipment in Dubai" }, items: technology },
  reasons: {
    eyebrow: "Production with a commercial purpose",
    title: "Why choose Webtek Digital for visual content?",
    items: reasons,
    footer: <>Connect production with <Link href="/our-services/branding-pr-company-dubai">branding and PR</Link>, <Link href="/our-services/website-design-development-company-dubai">website development</Link>, <Link href="/our-services/seo-online-reputation-management-company-dubai">SEO</Link>, <Link href="/our-services/google-ads-performance-marketing-company-dubai">Google Ads</Link>, <Link href="/our-services/social-media-management-marketing-company-dubai">social media</Link> and <Link href="/our-services/graphic-design-video-editing-company-dubai">design and editing</Link>.</>,
  },
  cost: {
    title: "How much do photography, videography & content creation services cost in Dubai?",
    description: "Investment depends on the scope, production requirements and content type. A headshot session, full commercial shoot, product campaign and monthly partnership each require a different crew and workflow.",
    buttonLabel: "Request a Custom Production Quote",
    factorsLabel: "Main factors that influence pricing",
    factors: ["Type of production", "Shoot duration", "Number of locations", "Photography or videography requirements", "Number of deliverables", "Drone coverage where permitted", "Talent and models", "Props and styling", "Editing complexity", "Motion graphics", "Revision requirements", "Usage and licensing"],
    note: "After a consultation, we prepare a detailed quotation covering deliverables, production schedule and investment.",
  },
  conversion: {
    eyebrow: "Ready to elevate your brand?",
    title: "Start with a free creative consultation.",
    description: "We will discuss your objectives, assess your content requirements and recommend a production strategy tailored to your business.",
    benefits: ["Content strategy discussion", "Brand visual assessment", "Production planning", "Campaign recommendations", "Platform-specific advice", "Creative direction", "Shot-list guidance", "Production roadmap"],
    requirementLabel: "Production requirement",
    requirementName: "Production requirement",
    requirementPlaceholder: "Tell us about your brand, shoot, locations, deliverables, platforms and timeline",
    buttonLabel: "Book Your Free Creative Consultation",
  },
  faq: { eyebrow: "The practical details", title: "Frequently asked questions", items: faqs },
  finalCta: {
    eyebrow: "Capture. Create. Convert.",
    title: "Let’s create visual content that inspires, engages and converts.",
    body: "Whether you are launching a product, promoting a service or building a stronger online presence, our creative team is ready to produce content with lasting impact.",
    label: "Talk to a Content Creation Expert",
  },
};

export default function Page() {
  return <SingleServicePage config={config} />;
}
