import type { Metadata } from "next";
import Link from "next/link";
import {
  SingleServicePage,
  type SingleServicePageConfig,
} from "../../components/services/SingleServicePage";

const pageUrl =
  "https://www.webtekdigital.com/our-services/graphic-design-video-editing-company-dubai/";

export const metadata: Metadata = {
  title:
    "Graphic Design & Video Editing Company Dubai | Creative Design Agency | Webtek Digital",
  description:
    "Looking for a professional Graphic Design & Video Editing Company in Dubai? Webtek Digital creates high-impact visuals, motion graphics, corporate videos, social media creatives and marketing assets that strengthen your brand and drive engagement.",
  keywords: [
    "Graphic Design Company Dubai",
    "Graphic Design Dubai",
    "Creative Design Agency Dubai",
    "Video Editing Dubai",
    "Motion Graphics Dubai",
    "Corporate Video Production Dubai",
    "Social Media Design Dubai",
    "Branding Design Dubai",
    "Marketing Collateral Design Dubai",
    "Reels Editing Dubai",
    "Product Video Editing Dubai",
    "Creative Agency UAE",
    "Digital Design Services Dubai",
    "Visual Content Creation Dubai",
    "Marketing Creative Design Dubai",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Graphic Design & Video Editing Company Dubai | Webtek Digital",
    description:
      "Creative design, motion graphics and professional video editing that make brands impossible to ignore.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  ["Brand Identity Design", "Build a distinctive visual foundation with logos, brand guidelines, colour palettes, typography, iconography, stationery and cohesive identity systems."],
  ["Marketing Collateral Design", "Turn brochures, company profiles, catalogues, presentations, sales kits, exhibition displays and print advertising into effective sales tools."],
  ["Social Media Creative Design", "Capture attention with branded posts, carousels, stories, infographics, event graphics, product-launch designs and platform-ready campaign visuals."],
  ["Advertising Creative Design", "Create conversion-focused assets for Google Display, Meta, Instagram, Facebook, LinkedIn, YouTube and integrated digital campaigns."],
  ["Corporate Presentation Design", "Transform complex ideas into clear investor decks, corporate presentations, proposals, training material, conference decks and keynote designs."],
  ["Professional Video Editing", "Shape corporate films, promotions, product demonstrations, event highlights, testimonials, explainers and recruitment videos through purposeful storytelling."],
  ["Social Media Video Editing", "Produce platform-native Reels, TikToks, Shorts and LinkedIn videos with captions, transitions, sound design, colour correction and branded calls to action."],
  ["Motion Graphics & Animation", "Improve recall with logo animation, kinetic typography, animated explainers, product animation, infographic motion and digital advertising."],
  ["Product & Commercial Videos", "Build purchase confidence with product launches, tutorials, unboxings, ecommerce videos, lifestyle edits and commercial advertisements."],
  ["Event Video Editing", "Capture the energy of conferences, launches, exhibitions, awards, seminars and networking events in polished, memorable highlight reels."],
] as const;

const serviceImages = [
  "/about/about-02.jpg", "/about/about-03.jpg", "/about/about-06.jpg",
  "/about/about-09.jpg", "/about/about-11.jpg", "/about/about-15.jpg",
  "/about/about-10.jpg", "/about/about-12.jpg", "/about/about-04.jpg",
  "/about/about-13.jpg",
].map((src, index) => ({
  src,
  alt: `${services[index][0]} by Webtek Digital's Dubai creative team`,
}));

const outcomes = [
  "Build strong brand recognition", "Increase customer trust",
  "Improve campaign performance", "Increase social media engagement",
  "Improve advertising click-through rates", "Strengthen brand consistency",
  "Increase product awareness", "Improve customer retention",
  "Generate more leads", "Increase video watch time",
  "Improve conversion rates", "Enhance corporate communication",
  "Support sales presentations", "Create memorable customer experiences",
  "Differentiate your brand from competitors",
] as const;

const industries = [
  ["Healthcare & Medical", "Clinic branding, patient education videos, medical infographics, brochures, doctor introductions and trusted awareness campaigns."],
  ["Real Estate", "Project branding, property brochures and videos, listing graphics, agent branding, virtual tours and launch campaigns."],
  ["Ecommerce & Retail", "Product banners, lifestyle graphics, product videos, marketplace images, collection launches and sales campaigns built to convert."],
  ["Hospitality & Tourism", "Hotel promotions, menus, food edits, destination campaigns, resort brochures, tourism videos and social Reels."],
  ["Education", "Admissions campaigns, prospectuses, success stories, campus videos, course promotions and educational infographics."],
  ["Corporate Services", "Company profiles, annual reports, presentations, recruitment videos, employer branding and executive communication."],
  ["Technology & SaaS", "Product explainers, software demonstrations, interface mockups, investor decks, feature announcements and digital ads."],
  ["Events & Entertainment", "Event identities, countdown campaigns, highlight reels, speaker announcements, stage visuals, invitations and sponsor graphics."],
] as const;

const features = [
  "Logo and brand identity", "Company profiles and brochures", "Flyers, posters and catalogues",
  "Packaging and event design", "Presentation decks", "Static and carousel posts",
  "Stories and Reels covers", "Social templates and infographics", "Meta and Google Display ads",
  "LinkedIn and YouTube creatives", "Remarketing and landing-page graphics", "Corporate and promotional videos",
  "Product videos and testimonials", "Event, interview and documentary editing", "Logo animation and kinetic typography",
  "Animated explainers and advertisements", "Instagram Reels and TikTok videos", "YouTube Shorts and vertical ads",
  "Creative strategy and direction", "Storyboarding and script assistance", "Caption and thumbnail design", "Source and print-ready files",
] as const;

const process = [
  ["Discovery & Creative Brief", "We define your objectives, brand identity, target audience, campaign goals, deliverables and production timeline."],
  ["Research & Inspiration", "Competitor visuals, industry trends, audience preferences and brand guidelines inform a relevant creative direction."],
  ["Concept Development", "We establish visual direction, colour, typography, composition, storytelling and motion style for collaborative review."],
  ["Design & Production", "Design, illustration, editing, sound enhancement, colour grading, visual effects and animation bring the concept to life."],
  ["Internal Quality Review", "Every asset is checked for brand consistency, accuracy, technical quality, readability, optimisation and export standards."],
  ["Client Review & Revisions", "Your feedback is gathered and applied through a clear review process until the creative supports the agreed objectives."],
  ["Final Delivery", "Approved source, print-ready, social, web-optimised, video and brand files are exported in the required formats."],
  ["Ongoing Creative Support", "Flexible production supports monthly content, advertising, seasonal promotions, launches, communication and brand refreshes."],
] as const;

const tools = [
  ["Adobe Creative Cloud", "Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Lightroom and Audition support professional design and production."],
  ["Canva Pro", "Editable templates and collaborative brand asset management make rapid content production easier for internal teams."],
  ["Figma", "Collaborative layouts, campaign visuals, presentation design and direct stakeholder feedback keep projects aligned."],
  ["DaVinci Resolve", "Professional editing and colour grading deliver cinematic-quality commercial, corporate and promotional video."],
  ["CapCut Professional", "Fast, platform-native production for Reels, TikTok, Shorts and vertical advertising."],
  ["Adobe Media Encoder", "Reliable multi-platform exports maintain the right resolution, compression and playback quality."],
  ["AI-Assisted Workflows", "AI accelerates ideation and repetitive tasks while experienced creatives retain control of originality, quality and brand consistency."],
] as const;

const reasons = [
  ["Marketing-Focused Strategy", "Audience, positioning, customer journey, communication goals and platform requirements give every asset a clear purpose."],
  ["Multidisciplinary Creative Team", "Designers, motion artists, video editors, creative directors, copywriters and marketers collaborate on the complete message."],
  ["Consistent Brand Identity", "Colour, typography, layout, imagery, messaging and visual language remain recognisable across every touchpoint."],
  ["Platform-Optimised Creative", "Every design and edit is shaped around the specifications and viewing behaviour of the channel where it will perform."],
  ["High Production Standards", "Structured quality assurance covers design accuracy, audio, resolution, colour, exports and platform compatibility."],
  ["Efficient Turnaround", "A clear, repeatable workflow helps campaigns move quickly while protecting creative and technical quality."],
  ["Scalable Creative Support", "Choose focused project support or continuous production for campaigns, product launches and corporate communication."],
  ["Integrated Digital Expertise", "Creative work can connect directly with Webtek Digital's brand, web, product and performance marketing specialists."],
] as const;

const costFactors = [
  "Project scope", "Graphic design requirements", "Number of creative assets",
  "Branding requirements", "Illustration complexity", "Motion graphics",
  "Video duration", "Animation requirements", "Photography or stock assets",
  "Revision cycles", "Platform deliverables", "Ongoing creative support",
] as const;

const faqs = [
  ["What graphic design services do you provide?", "We create logos, brand identities, company profiles, brochures, marketing collateral, social media graphics, advertising creatives, presentations, packaging and event branding."],
  ["Do you provide professional video editing?", "Yes. We edit corporate and promotional videos, product showcases, testimonials, event highlights, explainers, commercials and short-form social content."],
  ["Can you create social media content?", "Yes. We design static posts, carousels, stories, Reels, motion graphics and campaign creative for Instagram, Facebook, LinkedIn, TikTok and other platforms."],
  ["Do you create motion graphics and animations?", "Yes. Services include animated logos, explainers, kinetic typography, social animations, product animations and promotional motion graphics."],
  ["Will the designs match my brand identity?", "Yes. We follow your colour, typography, imagery, tone and visual guidelines. We can also help develop guidelines when they do not yet exist."],
  ["What file formats will I receive?", "Depending on scope, delivery can include print-ready files, web-optimised assets, editable source files, high-resolution images and platform-ready video."],
  ["Can you edit videos that I have already recorded?", "Yes. We can turn existing footage into polished content with transitions, captions, motion graphics, music, sound enhancement and colour correction."],
  ["Do you offer ongoing creative support?", "Yes. Monthly partnerships are available for continuous design, editing and content production across marketing campaigns."],
  ["How long does a typical project take?", "Timing depends on complexity and deliverables. After discovery, we provide a clear production schedule and expected delivery date."],
  ["Can you create creatives for advertising campaigns?", "Yes. We design platform-specific creative for Meta, Google Display, LinkedIn, YouTube and other digital advertising campaigns."],
] as const;

const config: SingleServicePageConfig = {
  pageUrl,
  serviceName: "Graphic Design & Video Editing in Dubai",
  serviceTypes: ["Graphic design", "Video editing", "Motion graphics", "Social media design", "Corporate video editing", "Advertising creative"],
  breadcrumbName: "Graphic Design & Video Editing Company Dubai",
  hero: {
    title: "Graphic Design & Video Editing Company in Dubai",
    description: "Bring your brand to life through powerful visual storytelling. Webtek Digital combines creative craft with marketing strategy to produce high-impact design, motion and video that capture attention, build trust and inspire action.",
    primaryCta: "Book a Free Creative Consultation",
    secondaryCta: "Request a Custom Creative Proposal",
    note: "Tell us about your brand, campaign or creative requirements. Our designers and video editors will recommend a tailored solution aligned with your marketing objectives.",
  },
  intro: {
    eyebrow: "Creative that earns attention",
    title: "Creative design that builds stronger brands",
    items: [
      "Every successful brand communicates through visuals. From logos and brochures to social graphics and promotional videos, design shapes perception before a customer ever speaks with you.",
      "Great creative is more than aesthetics. Each visual element should express your personality, support marketing objectives and create a memorable customer experience.",
      "We learn about your business, audience, competitors and positioning before production, creating work that is visually distinctive, strategically aligned and ready for every platform.",
      <>When creative needs a wider campaign, our team can connect it with <Link href="/our-services/branding-pr-company-dubai">branding and PR</Link>, <Link href="/our-services/social-media-management-marketing-company-dubai">social media marketing</Link> and <Link href="/our-services/google-ads-performance-marketing-company-dubai">performance marketing</Link>.</>,
    ],
  },
  services: { eyebrow: "Static, motion and film", title: "Comprehensive graphic design & video editing services", items: services, images: serviceImages, ctaLead: "Have a campaign or creative brief in mind?", ctaLabel: "Tell us what you want to create" },
  outcomes: { title: "How professional creative supports business growth", description: "Clear, consistent visual communication influences customer perception, strengthens recognition and improves marketing performance across digital and physical touchpoints.", items: outcomes },
  industries: { eyebrow: "Creative shaped for your market", title: "Creative solutions for different industries", description: "Every industry has its own visual language, customer expectations and marketing challenges. We tailor the creative direction and format to each audience.", items: industries, labels: ["Healthcare", "Real estate", "Ecommerce", "Hospitality", "Education", "Corporate", "Technology", "Events"], images: serviceImages.slice(0, 8) },
  features: { eyebrow: "Everything your campaign needs", title: "Creative features & deliverables", items: features },
  process: { eyebrow: "Structured, creative and collaborative", title: "Our graphic design & video editing process", items: process },
  technology: { eyebrow: "Professional tools, human judgement", title: "Creative tools & technologies", description: "Modern creative software and efficient collaboration workflows help us deliver consistent, high-quality visuals for print, digital, social and broadcast use.", image: { src: "/about/about-16.jpg", alt: "Webtek Digital creative production and video editing workspace" }, items: tools },
  reasons: {
    eyebrow: "Creative work with commercial purpose",
    title: "Why choose Webtek Digital for graphic design & video editing?",
    items: reasons,
    footer: <>Build a connected campaign with our <Link href="/our-services/branding-pr-company-dubai">branding and PR</Link>, <Link href="/our-services/social-media-management-marketing-company-dubai">social media</Link>, <Link href="/our-services/google-ads-performance-marketing-company-dubai">Google Ads</Link>, <Link href="/our-services/website-design-development-company-dubai">website development</Link>, <Link href="/our-services/ui-ux-design-company-dubai">UI/UX design</Link> and <Link href="/our-services/seo-online-reputation-management-company-dubai">content and search marketing</Link> specialists.</>,
  },
  cost: {
    title: "How much do graphic design & video editing services cost in Dubai?",
    description: "Investment depends on the complexity, production requirements and assets involved. A brochure, complete brand identity, animated explainer and monthly content partnership each require a different scope.",
    buttonLabel: "Request a Creative Proposal",
    factorsLabel: "Main factors that influence pricing",
    factors: costFactors,
    note: "After a consultation, we prepare a customised proposal with clear deliverables, production timelines and investment.",
  },
  conversion: {
    eyebrow: "Ready to elevate your brand?",
    title: "Start with a free creative consultation.",
    description: "We will assess your current assets, identify opportunities and recommend a practical creative direction that strengthens communication and marketing performance.",
    benefits: ["Brand & creative audit", "Visual identity assessment", "Marketing creative review", "Content recommendations", "Competitor creative analysis", "Campaign planning advice", "Platform recommendations", "Production roadmap"],
    requirementLabel: "Creative requirement",
    requirementName: "Creative requirement",
    requirementPlaceholder: "Tell us about your brand, campaign, formats, timeline and creative goals",
    buttonLabel: "Book Your Free Creative Consultation",
  },
  faq: { eyebrow: "The practical details", title: "Frequently asked questions", items: faqs },
  finalCta: {
    eyebrow: "Design. Motion. Story.",
    title: "Let’s create visual content that inspires, engages and converts.",
    body: "From a new identity and daily social content to a promotional film or complete campaign, our creative team is ready to bring your vision to life.",
    label: "Speak With a Creative Specialist",
  },
};

export default function Page() {
  return <SingleServicePage config={config} />;
}
