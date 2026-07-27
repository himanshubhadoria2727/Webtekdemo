import type { Metadata } from "next";
import Link from "next/link";
import { SingleServicePage, type SingleServicePageConfig } from "../../components/services/SingleServicePage";

const pageUrl = "https://www.webtekdigital.com/our-services/photography-videography-content-creation-company-dubai/";

export const metadata: Metadata = {
  title: "Photography & Videography Services Dubai | Corporate & Commercial Photography | Webtek Digital",
  description: "Professional Photography & Videography Services in Dubai for businesses. Corporate photography, product shoots, real estate photography, event coverage, promotional videos, drone videography and commercial content by Webtek Digital.",
  keywords: [
    "Photography & Videography Services Dubai", "Commercial Photography Dubai", "Corporate Photography Dubai",
    "Professional Videography Dubai", "Product Photography Dubai", "Event Photography Dubai",
    "Event Videography Dubai", "Real Estate Photography Dubai", "Drone Videography Dubai",
    "Food Photography Dubai", "Fashion Photography Dubai", "Social Media Content Creation Dubai",
    "Corporate Video Production Dubai", "Business Photography UAE", "Promotional Video Production Dubai",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Photography & Videography Services Dubai | Webtek Digital",
    description: "Professional corporate, commercial, product, event and real estate photography and videography for businesses in Dubai.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  ["Corporate Photography", "Executive headshots, team photography, office environments, workplace culture, business portraits, annual reports and website imagery that reflect your organisation professionally."],
  ["Commercial Photography", "Advertising, lifestyle, brand-campaign, promotional, editorial, billboard and print photography created with marketing performance and brand consistency in mind."],
  ["Product Photography", "High-quality ecommerce, luxury, electronics, fashion, jewellery, cosmetics, food and industrial product images optimised for websites, marketplaces, catalogues and social media."],
  ["Corporate Videography", "Professionally scripted, filmed and edited company profiles, brand films, CEO messages, recruitment and training videos, internal communications and CSR stories."],
  ["Promotional & Commercial Videos", "Compelling product launches, brand campaigns, service promotions, advertisements, social media ads, digital marketing videos and customer testimonials."],
  ["Event Photography & Videography", "Professional coverage of corporate events, conferences, launches, awards, trade shows, networking events, exhibitions and gala dinners."],
  ["Real Estate Photography & Videography", "Interior, exterior and lifestyle property shoots, walkthroughs, agent videos, luxury-property content and community features created to attract buyers and investors."],
  ["Drone Photography & Videography", "Aerial coverage for construction progress, property projects, resorts, hotels, industrial sites, tourism, events and corporate facilities, subject to UAE regulations and permissions."],
  ["Food & Hospitality Photography", "Menu, restaurant, hotel, beverage, chef, kitchen and social content styled to encourage engagement and increase bookings."],
  ["Fashion & Lifestyle Photography", "Premium lookbooks, editorials, ecommerce fashion, model shoots, lifestyle branding, social campaigns and promotional videos."],
  ["Social Media Content Production", "A consistent stream of Instagram Reels, TikTok videos, YouTube Shorts, behind-the-scenes content, product Reels, testimonials, brand stories and monthly content packages."],
] as const;

const serviceImages = [
  "/about/about-02.jpg", "/about/about-04.jpg", "/about/about-06.jpg", "/about/about-05.jpg",
  "/about/about-13.jpg", "/about/about-15.jpg", "/about/about-10.jpg", "/about/about-09.jpg",
  "/about/about-03.jpg", "/about/about-14.jpg", "/about/about-16.jpg",
].map((src, index) => ({ src, alt: `${services[index][0]} production by Webtek Digital in Dubai` }));

const outcomes = [
  "Build strong brand recognition", "Increase customer trust", "Improve website conversion rates",
  "Increase social media engagement", "Generate higher advertising performance", "Showcase products professionally",
  "Improve ecommerce sales", "Create a premium brand perception", "Increase customer retention",
  "Improve marketing ROI", "Support sales presentations", "Enhance corporate communications",
  "Increase event visibility", "Improve recruitment branding", "Strengthen digital marketing campaigns",
] as const;

const industries = [
  ["Healthcare & Medical", "Clinic photography, doctor portraits, facility tours, treatment and patient-education videos, campaign imagery, medical equipment photography and social content that build trust."],
  ["Real Estate", "Property and luxury-home photography, walkthroughs, drone footage, community lifestyle videos, agent branding and project-launch films designed to attract buyers, investors and tenants."],
  ["Ecommerce & Retail", "Product, white-background and lifestyle shoots, demonstrations, 360-degree imagery, catalogues and promotional Reels optimised for ecommerce and social commerce."],
  ["Hospitality & Tourism", "Hotel, resort, restaurant, food, destination and guest-experience content that helps increase bookings and strengthen brand perception."],
  ["Food & Beverage", "Menu and signature-dish photography, beverages, chef portraits, kitchen stories, restaurant Reels, promotions and delivery-platform imagery."],
  ["Fashion & Beauty", "Fashion campaigns, editorials, ecommerce photography, model portfolios, beauty products, cosmetics videos, behind-the-scenes content and brand launches."],
  ["Education", "Campus and classroom photography, student stories, graduations, faculty portraits, promotional films, admissions campaigns and event coverage."],
  ["Corporate & Professional Services", "Executive portraits, offices, teams, corporate films, recruitment videos, testimonials, CSR stories and company-culture content."],
] as const;

const features = [
  "Corporate, commercial and product photography", "Event, real estate and food photography", "Fashion, lifestyle and executive portraits",
  "Corporate, promotional and brand films", "Product, explainer and testimonial videos", "Recruitment, documentary and commercial videos",
  "Aerial photography and drone videography", "Construction progress and property showcases", "Resort, hotel and industrial-site coverage",
  "Instagram Reels, TikTok videos and YouTube Shorts", "Behind-the-scenes and lifestyle content", "Product launches and monthly content packages",
  "Professional editing and retouching", "Colour correction and cinematic colour grading", "Audio enhancement and royalty-free music",
  "Motion graphics, logo animation and subtitles", "Website and company-profile visuals", "Google Ads, Meta Ads and display campaign assets",
  "High-resolution and web-optimised images", "Print-ready files and 4K video", "Vertical and horizontal platform versions",
  "Thumbnail images and editable source files where applicable",
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
  ["Professional Camera Systems", "High-end mirrorless and cinema cameras deliver high-resolution photography and cinematic video suitable for commercial use."],
  ["Professional Lenses", "A wide selection of lenses supports portraits, products, architecture, events, landscapes, macro details and lifestyle scenes."],
  ["Lighting Equipment", "Studio lights, softboxes, LED panels, reflectors, diffusers and portable systems ensure consistent quality in studio and on location."],
  ["Professional Audio Equipment", "Wireless and boom microphones, audio recorders and noise-reduction tools capture clear sound for interviews, testimonials and promotional films."],
  ["Drone Technology", "Professional aerial systems add scale and impact to real estate, tourism, construction and commercial projects where flights are permitted."],
  ["Professional Editing Software", "Photoshop, Lightroom, Premiere Pro, After Effects, DaVinci Resolve and Audition support advanced retouching, grading, motion and sound design."],
  ["AI-Assisted Creative Workflows", "AI accelerates selections, repetitive editing, audio enhancement and captions while experienced professionals review every final asset for originality and quality."],
] as const;

const reasons = [
  ["Creative Strategy Before Every Shoot", "Business objectives, audience, brand identity, campaign messages and distribution channels are defined before production so every asset has a clear purpose."],
  ["Experienced Creative Production Team", "Commercial photographers, corporate videographers, drone operators, creative directors, cinematographers and post-production specialists work as one team."],
  ["Marketing-Focused Visual Storytelling", "Every visual is planned to support awareness, engagement, lead generation, website performance, sales communication and employer branding."],
  ["High-End Equipment & Standards", "High-resolution cameras, cinema equipment, premium lenses, lighting, audio, drones, stabilisation and advanced editing support professional results."],
  ["Platform-Optimised Content", "Assets are formatted for websites, Instagram, Facebook, LinkedIn, TikTok, YouTube, Google Ads, billboards, email and print."],
  ["Reliable Project Management", "Scheduling, locations, talent, equipment, quality control, revisions and delivery are managed transparently from start to finish."],
  ["Scalable Content Production", "Flexible options cover one-time shoots, monthly packages, quarterly campaigns, annual brand content, launches, events and ongoing support."],
  ["Integrated Digital Marketing Expertise", "Production connects with branding, design, social media, performance marketing, SEO, website, UI/UX and mobile-app specialists."],
] as const;

const faqs = [
  ["What photography services do you offer?", "We provide corporate, commercial, product, real estate, event, food, fashion and lifestyle photography, including executive portraits."],
  ["What videography services do you provide?", "Our services include corporate and promotional videos, product films, event coverage, brand films, customer testimonials, recruitment videos, social content and commercial advertisements."],
  ["Do you offer drone photography and videography?", "Yes. We provide aerial photography and videography for real estate, construction, hospitality, tourism, events and commercial projects, subject to applicable UAE regulations and permissions."],
  ["Can you create content for social media?", "Yes. We produce Instagram Reels, TikTok videos, YouTube Shorts, Facebook videos and other platform-specific visual content optimised for engagement and performance."],
  ["Do you edit all photos and videos?", "Yes. Every project includes professional post-production such as retouching, colour correction, colour grading, video editing, audio enhancement and platform optimisation."],
  ["Can you shoot at our office or business location?", "Yes. We provide studio and on-location photography and videography throughout Dubai and the UAE, depending on project requirements."],
  ["How long does a typical project take?", "Timelines depend on project scope, production scheduling and editing requirements. After discovery, we provide a clear production and delivery schedule."],
  ["Will I receive high-resolution files?", "Yes. We deliver high-resolution images and videos with web-optimised versions suitable for websites, social media, advertising and digital marketing."],
  ["Can you produce recurring content for our marketing campaigns?", "Yes. Monthly and quarterly production packages help businesses maintain a consistent supply of high-quality visuals for social media, websites, email and advertising."],
  ["Do you provide scripting and creative direction?", "Yes. We can support concept development, storyboarding, shot planning, scripting, creative direction and production management so content aligns with your brand and campaign objectives."],
] as const;

const config: SingleServicePageConfig = {
  pageUrl,
  serviceName: "Photography & Videography Services in Dubai",
  serviceTypes: ["Commercial photography", "Corporate photography", "Professional videography", "Product photography", "Event coverage", "Real estate photography", "Drone videography", "Social media content production"],
  breadcrumbName: "Photography & Videography Services Dubai",
  hero: {
    title: "Photography & Videography Services in Dubai",
    description: "Capture every moment. Tell every story. Elevate every brand. Webtek Digital creates professional corporate photography, commercial campaigns, product shoots, real estate visuals, event coverage and cinematic video for websites, social media and advertising.",
    primaryCta: "Book a Free Consultation",
    secondaryCta: "Request a Custom Photography & Videography Proposal",
    note: "Share your project requirements, campaign goals and creative vision. Our team will recommend the right photography and videography solution to showcase your brand professionally.",
  },
  intro: {
    eyebrow: "Create lasting impressions",
    title: "Professional visual content that strengthens your brand",
    items: [
      "Customers make purchasing decisions based on what they see. Professional photography and cinematic videography establish credibility, communicate value and create emotional connections.",
      "Every shoot is carefully planned around your brand identity and marketing strategy to improve website conversions, social engagement, advertising performance and customer trust.",
      "Whether you need a single-day shoot or ongoing production, we create premium visual assets that showcase your products and services across every platform.",
      <>Extend every shoot through <Link href="/our-services/graphic-design-video-editing-company-dubai">graphic design and video editing</Link>, <Link href="/our-services/social-media-management-marketing-company-dubai">social media marketing</Link> and <Link href="/our-services/google-ads-performance-marketing-company-dubai">performance advertising</Link>.</>,
    ],
  },
  services: { eyebrow: "Still, motion and aerial production", title: "Comprehensive photography & videography services", items: services, images: serviceImages, ctaLead: "Have a product, campaign, property or story ready to shoot?", ctaLabel: "Plan your production with us" },
  outcomes: { title: "How professional photography & videography drive business growth", description: "Every image and video is created with a commercial objective—from increasing enquiries and conversions to strengthening brand identity and campaign performance.", items: outcomes },
  industries: { eyebrow: "A visual language for every market", title: "Photography & videography solutions for different industries", description: "Our photographers, videographers and creative directors adapt every production to your sector, audience and marketing objectives.", items: industries, labels: ["Healthcare", "Real estate", "Ecommerce", "Hospitality", "Food", "Fashion", "Education", "Corporate"], images: serviceImages.slice(0, 8) },
  features: { eyebrow: "Production-ready for every channel", title: "Photography & videography features & deliverables", items: features },
  process: { eyebrow: "Planned carefully, produced beautifully", title: "Our photography & videography process", items: process },
  technology: { eyebrow: "Professional craft from capture to delivery", title: "Cameras, equipment & production technologies", description: "Reliable professional equipment, advanced editing software and experienced operators help us deliver consistent commercial quality from production through final export.", image: { src: "/about/about-04.jpg", alt: "Professional photography and videography production equipment in Dubai" }, items: technology },
  reasons: {
    eyebrow: "Creative production with commercial purpose",
    title: "Why choose Webtek Digital for photography & videography services?",
    items: reasons,
    footer: <>Connect production with <Link href="/our-services/branding-pr-company-dubai">branding and PR</Link>, <Link href="/our-services/website-design-development-company-dubai">website development</Link>, <Link href="/our-services/seo-online-reputation-management-company-dubai">SEO</Link>, <Link href="/our-services/google-ads-performance-marketing-company-dubai">Google Ads</Link>, <Link href="/our-services/social-media-management-marketing-company-dubai">social media</Link> and <Link href="/our-services/graphic-design-video-editing-company-dubai">design and editing</Link>.</>,
  },
  cost: {
    title: "How much do photography & videography services cost in Dubai?",
    description: "Pricing depends on project scope, production requirements, shooting duration and post-production complexity. A corporate headshot session differs significantly from a multi-day commercial production across several locations.",
    buttonLabel: "Request a Custom Photography & Videography Proposal",
    factorsLabel: "Factors that influence pricing",
    factors: ["Type of shoot", "Number of shooting days", "Photography or videography requirements", "Studio or on-location production", "Drone operations", "Number of final deliverables", "Editing and retouching", "Motion graphics", "Talent and models", "Equipment requirements", "Travel and logistics", "Revision requirements"],
    note: "Following an initial consultation, we provide a customised proposal outlining deliverables, timelines and investment.",
  },
  conversion: {
    eyebrow: "Ready to create visual content that sets your brand apart?",
    title: "Book your free creative consultation.",
    description: "We will review your objectives and recommend the most effective photography and videography approach for your campaign, platforms, budget and timeline.",
    benefits: ["Creative discovery session", "Brand visual assessment", "Content strategy discussion", "Campaign planning", "Production recommendations", "Platform-specific content advice", "Budget and timeline planning", "Content production roadmap"],
    requirementLabel: "Production requirement",
    requirementName: "Production requirement",
    requirementPlaceholder: "Tell us about your brand, shoot, locations, deliverables, platforms and timeline",
    buttonLabel: "Book Your Free Creative Consultation",
  },
  faq: { eyebrow: "The practical details", title: "Frequently asked questions", items: faqs },
  finalCta: {
    eyebrow: "Capture. Create. Connect.",
    title: "Let’s bring your brand story to life.",
    body: "From commercial photography and cinematic promotional videos to product shoots, event coverage and recurring campaign content, our creative team is ready to help your brand stand out.",
    label: "Talk to a Creative Production Expert",
  },
};

export default function Page() {
  return <SingleServicePage config={config} />;
}
