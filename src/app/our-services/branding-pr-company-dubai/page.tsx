import type { Metadata } from "next";
import Link from "next/link";
import { SingleServicePage, type SingleServicePageConfig } from "../../components/services/SingleServicePage";

const pageUrl = "https://www.webtekdigital.com/our-services/branding-pr-company-dubai/";

export const metadata: Metadata = {
  title: "Branding & PR Company Dubai | Webtek Digital",
  description:
    "Webtek Digital is a branding and PR company in Dubai helping businesses build distinctive identities, stronger reputations and strategic communications.",
  keywords: [
    "branding company Dubai",
    "branding agency Dubai",
    "brand strategy Dubai",
    "branding services Dubai",
    "public relations company Dubai",
    "PR agency Dubai",
    "corporate branding Dubai",
    "brand identity design Dubai",
    "logo design company Dubai",
    "rebranding services Dubai",
    "reputation management Dubai",
    "media relations Dubai",
    "press release services Dubai",
    "personal branding Dubai",
    "brand consulting UAE",
    "corporate communications Dubai",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Branding & PR Company Dubai | Webtek Digital",
    description: "Strategic branding, visual identity, public relations and reputation management for businesses in Dubai and across the UAE.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  ["Brand Strategy", "Define your purpose, audience, competitive advantage, positioning and long-term vision through research, audience profiling and a practical messaging architecture."],
  ["Brand Identity Design", "Create a distinctive visual system—including typography, colour, iconography, photography direction and graphic elements—that supports recognition across every touchpoint."],
  ["Logo Design", "Develop a memorable, scalable logo through concept creation and refinement, with final files prepared for websites, social media, print, packaging, signage and presentations."],
  ["Brand Guidelines", "Document logo usage, typography, colours, imagery, tone of voice, messaging and digital standards so internal teams and partners represent the brand consistently."],
  ["Corporate Branding", "Align corporate identity, employer branding, executive positioning, internal communication, presentations, investor materials, events and office environments."],
  ["Personal Branding", "Position founders, executives and professionals as trusted industry voices through messaging, profiles, LinkedIn optimisation, thought leadership and media opportunities."],
  ["Public Relations", "Build credibility through story development, corporate announcements, interviews, product launches, event publicity and industry commentary aligned with business goals."],
  ["Media Relations", "Identify relevant publications and journalists, then manage proactive pitching, interview coordination, editorial support and long-term media relationships."],
  ["Press Release Writing & Distribution", "Turn launches, partnerships, expansions and milestones into professionally structured press releases supported by an appropriate distribution strategy."],
  ["Reputation Management", "Assess brand perception, monitor reviews and sentiment, identify risks and establish communication systems that protect long-term confidence and credibility."],
  ["Crisis Communication", "Prepare response plans, key messages, media statements and stakeholder communications that help your organisation respond clearly when unexpected issues arise."],
  ["Influencer & Media Outreach", "Build authentic relationships with relevant journalists, publications, creators and industry voices for launches, editorial features, interviews and partnership campaigns."],
] as const;

const serviceImages = [
  { src: "/about/about-12.jpg", alt: "Brand strategists discussing business positioning" },
  { src: "/about/about-01.jpg", alt: "Creative team developing a visual brand identity" },
  { src: "/about/about-02.jpg", alt: "Designer refining a business logo concept" },
  { src: "/about/about-03.jpg", alt: "Brand guideline and identity planning session" },
  { src: "/about/about-14.jpg", alt: "Corporate branding team collaborating in Dubai" },
  { src: "/about/about-11.jpg", alt: "Executive personal branding and profile planning" },
  { src: "/about/about-04.jpg", alt: "Public relations specialists planning a campaign" },
  { src: "/about/about-05.jpg", alt: "Media relations and editorial outreach discussion" },
  { src: "/about/about-06.jpg", alt: "Press release writing and communication planning" },
  { src: "/about/about-07.jpg", alt: "Team monitoring brand reputation and audience response" },
  { src: "/about/about-08.jpg", alt: "Crisis communication planning with business leaders" },
  { src: "/about/about-10.jpg", alt: "Influencer and media outreach campaign planning" },
] as const;

const outcomes = [
  "Establish a professional and memorable brand identity",
  "Increase customer trust and credibility",
  "Differentiate your business from competitors",
  "Improve recognition across digital and offline channels",
  "Build stronger emotional connections with customers",
  "Generate positive media coverage",
  "Support new product and service launches",
  "Attract investors, partners and stakeholders",
  "Strengthen employer branding and talent acquisition",
  "Improve customer loyalty and long-term retention",
  "Position executives as industry thought leaders",
  "Increase website enquiries and qualified leads",
  "Create consistent messaging across every customer touchpoint",
  "Build long-term brand equity",
  "Protect corporate reputation during challenging situations",
] as const;

const industries = [
  ["Real Estate", "Premium corporate and project branding, launch campaigns, investor presentations, executive positioning, media announcements and PR that build buyer confidence."],
  ["Healthcare & Medical", "Credible identities and patient communication for clinics, hospitals, specialists and healthcare providers, supported by awareness campaigns and medical PR."],
  ["Hospitality & Tourism", "Memorable hotel, restaurant and destination brands brought to life through storytelling, event publicity, hospitality PR and relevant influencer partnerships."],
  ["Retail & Ecommerce", "Consistent retail identities, packaging, campaign branding, product-launch communication and loyalty messaging across stores, ecommerce and social media."],
  ["Education & Training", "Institutional branding and communication that highlights academic excellence, student success and credibility among students, parents and corporate partners."],
  ["Corporate & Professional Services", "Strategic branding, executive positioning and reputation management for legal, accounting, consulting, engineering, financial and B2B organisations."],
  ["Technology & Startups", "Positioning, pitch-deck branding, investor communication, launch campaigns, founder profiles and media exposure designed to attract customers, talent and investment."],
  ["Manufacturing & Industrial", "Corporate identity, employer branding and clear B2B communications that demonstrate capability and support valuable long-term commercial relationships."],
  ["Restaurants & Food Brands", "Restaurant identity, menus, packaging, campaign launches, media outreach and influencer support that shape the customer experience before the first visit."],
  ["Government & Public Sector", "Structured branding, communication planning and public-awareness initiatives that support transparency, engagement and stakeholder confidence."],
] as const;

const industryLabels = ["Real estate", "Healthcare", "Hospitality", "Retail", "Education", "Professional", "Technology", "Industrial", "Food brands", "Public sector"] as const;

const industryImages = [
  { src: "/about/about-13.jpg", alt: "Premium environment representing real estate branding" },
  { src: "/about/about-08.jpg", alt: "Professional environment representing healthcare branding" },
  { src: "/about/about-05.jpg", alt: "Guest environment representing hospitality and tourism branding" },
  { src: "/brands/ounass-removebg-preview.png", alt: "Retail brand presentation representing ecommerce branding" },
  { src: "/brands/dubai-uni-removebg-preview.png", alt: "Education brand presentation representing institutional branding" },
  { src: "/about/about-14.jpg", alt: "Business team representing professional services branding" },
  { src: "/about/about-09.jpg", alt: "Digital team representing technology and startup branding" },
  { src: "/about/about-15.jpg", alt: "Professional setting representing industrial corporate branding" },
  { src: "/about/about-06.jpg", alt: "Creative environment representing restaurant and food branding" },
  { src: "/about/about-16.jpg", alt: "Collaborative setting representing public-sector communications" },
] as const;

const features = [
  "Brand discovery workshops",
  "Market research",
  "Competitor analysis",
  "Brand positioning strategy",
  "Brand messaging framework",
  "Vision, mission and values development",
  "Logo design",
  "Brand identity systems",
  "Typography selection",
  "Colour palette development",
  "Brand guidelines",
  "Marketing collateral",
  "Company profile design",
  "Presentation templates",
  "Packaging concepts",
  "Website branding recommendations",
  "Social media branding",
  "Personal branding",
  "Employer branding",
  "Press release writing",
  "Press release distribution strategy",
  "Media outreach",
  "Journalist engagement",
  "Thought leadership strategy",
  "Reputation monitoring",
  "Crisis communication planning",
  "Influencer outreach",
  "Executive media training",
  "Campaign reporting",
  "Brand performance reviews",
] as const;

const process = [
  ["Discovery & Consultation", "We learn about your organisation, audience, competitors, challenges, customer journey, commercial objectives and future growth plans. These insights become the foundation for every decision."],
  ["Brand Audit & Market Research", "We review existing assets, messaging, digital channels, audience perception and the competitive landscape to identify inconsistencies, risks and opportunities."],
  ["Brand Strategy Development", "We define purpose, vision, values, positioning, personas, personality, value proposition, tone of voice and the key messages that guide future work."],
  ["Brand Identity Design", "Our designers translate the strategy into logos, typography, colours, iconography, photography direction, brand graphics, templates, stationery and corporate documents."],
  ["Messaging & Communication", "We create a consistent framework for your brand story, elevator pitch, taglines, website, products, campaigns, employer brand and internal communication."],
  ["Public Relations Planning", "We establish media objectives, story angles, a PR calendar, interview and press-release opportunities, product launches, awards and event publicity."],
  ["Campaign Execution", "Following approval, we coordinate the brand rollout, marketing collateral, media outreach, interviews, announcements, events, creators and social communication."],
  ["Reputation Monitoring", "We monitor media mentions, sentiment, feedback, reviews, social conversations, campaign reach and audience engagement so the team can respond quickly."],
  ["Reporting & Improvement", "Campaign summaries, coverage, awareness, website performance, engagement and reputation trends inform practical recommendations for continuous improvement."],
] as const;

const platforms = [
  ["Adobe Creative Cloud", "Professional tools for identity design, marketing collateral, corporate presentations and visual communication."],
  ["Canva Pro", "Collaborative brand assets, social templates and practical resources for internal marketing teams."],
  ["Google Business Profile", "Local visibility, reputation management and customer engagement across Google Search and Maps."],
  ["Google Analytics", "Website behaviour and conversion insight for measuring the effect of branding and communication campaigns."],
  ["Google Search Console", "Search visibility, branded-query performance and website health data."],
  ["Meta Platforms", "Facebook and Instagram communication that supports brand awareness, community and campaigns."],
  ["LinkedIn", "Corporate branding, employer branding, executive positioning and B2B communication."],
  ["X", "Corporate announcements, thought leadership and real-time public engagement where appropriate."],
  ["YouTube", "Brand storytelling, executive interviews, testimonials and long-form visual content."],
  ["PR & Media Networks", "Relevant journalist, publication and press-distribution opportunities selected around campaign objectives."],
  ["AI-Assisted Communication", "Editorially reviewed tools that improve content planning, communication efficiency and campaign workflows while protecting brand consistency."],
] as const;

const reasons = [
  ["Business-First Approach", "Every decision begins with your commercial objectives, so the brand supports measurable growth rather than aesthetics alone."],
  ["Strategy Before Design", "We understand your customers, market and position before beginning creative development."],
  ["Custom Branding Solutions", "The strategy and identity are tailored to your industry, audience, competition and long-term goals."],
  ["Creative Excellence", "Strategic thinking and professional design create a brand intended to remain relevant beyond temporary trends."],
  ["Integrated Public Relations", "Identity and communication work together to increase public trust, recognition and meaningful media visibility."],
  ["Transparent Project Stages", "Clearly defined phases make progress, decisions, feedback and timelines easier to manage."],
  ["Long-Term Brand Support", "Support can continue through brand evolution, communication planning and reputation management after launch."],
  ["Digital Growth Expertise", "One connected team can extend the brand consistently across websites, search, advertising, social, content and video."],
] as const;

const costFactors = [
  "Business size",
  "Number of brand assets required",
  "Logo design complexity",
  "Brand strategy workshops",
  "Brand guidelines",
  "Marketing collateral",
  "Website branding",
  "Corporate communications",
  "PR campaign scope",
  "Media outreach requirements",
  "Press release development",
  "Reputation management",
  "Executive branding",
  "Campaign duration",
  "Reporting requirements",
] as const;

const faqs = [
  ["What does a branding and PR company do?", "A branding and PR company helps define how a business is positioned, presented and perceived. Work can include research, strategy, naming, visual identity, messaging, media relations, reputation management and campaign communication."],
  ["Why hire a branding company in Dubai?", "A Dubai branding partner can bring local market context, easier collaboration and insight into the UAE's diverse audiences. The right agency should also demonstrate strategic thinking, creative quality and a transparent process."],
  ["What is included in a brand strategy?", "Scope can include market and competitor research, audience profiles, purpose, positioning, values, personality, value proposition, tone of voice and a messaging framework."],
  ["Do you design logos and complete brand identities?", "Yes. A project can cover logo concepts and refinement along with typography, colour, iconography, graphic elements, photography direction, stationery, templates and final production files."],
  ["Can you rebrand an existing business?", "Yes. We can audit the existing brand, preserve useful equity, clarify the new position and develop an updated identity, messaging framework and rollout plan."],
  ["Do you create brand guidelines?", "Yes. Guidelines can document logo use, colours, typography, imagery, tone of voice, messaging, social media, presentations and other standards relevant to your team."],
  ["What public relations services do you provide?", "PR support can include planning, story development, press releases, journalist outreach, interviews, launches, event publicity, executive positioning and ongoing press-office support."],
  ["Can you guarantee media coverage?", "No responsible PR agency can guarantee independent editorial coverage. We develop credible stories, target relevant journalists and manage outreach, while publication decisions remain with each media outlet."],
  ["Do you offer reputation and crisis communication support?", "Yes. Depending on scope, we can monitor sentiment, prepare response plans and key messages, support media statements and guide stakeholder or social communication."],
  ["Can you help founders and executives with personal branding?", "Yes. Personal branding can include positioning, profile and LinkedIn optimisation, thought-leadership themes, speaking profiles, executive communication and relevant media opportunities."],
  ["How long does a branding project take?", "Timing depends on research, stakeholder availability, number of deliverables and approval rounds. A focused identity project is generally shorter than a complete rebrand or ongoing PR programme."],
  ["How much do branding and PR services cost in Dubai?", "Cost depends on the strategy, identity assets, collateral, campaign duration, outreach and reporting required. We prepare a tailored proposal after an initial consultation."],
  ["Can you support our brand after launch?", "Yes. Ongoing support can include rollout materials, digital branding, communication planning, PR, reputation monitoring, campaign reporting and periodic brand reviews."],
  ["Do you work with startups and established companies?", "Yes. We tailor the scope for startup launches, SME growth, corporate branding, rebrands, product introductions and long-term reputation programmes."],
  ["How do we start a branding project with Webtek Digital?", "Share your business background, target audience, goals, current assets and expected deliverables. We will review the requirement and recommend an appropriate strategy, scope and next step."],
] as const;

const config: SingleServicePageConfig = {
  pageUrl,
  serviceName: "Branding and Public Relations in Dubai",
  serviceTypes: ["Brand strategy", "Brand identity design", "Logo design", "Public relations", "Media relations", "Reputation management", "Crisis communication"],
  breadcrumbName: "Branding & PR Company Dubai",
  hero: {
    title: "Branding & PR Company in Dubai",
    description: "Build a brand that people recognise, trust and remember. Webtek Digital provides end-to-end branding and public relations services for startups, SMEs and established businesses—from brand strategy and visual identity to media relations, reputation management and corporate communications.",
    primaryCta: "Get a Free Branding Consultation",
    secondaryCta: "Request a Custom Quote",
    note: "Tell us about your business, audience and growth goals. Our branding consultants will recommend a strategy tailored to your organisation.",
  },
  intro: {
    eyebrow: "Built around business goals",
    title: "Strategic branding that creates lasting value",
    items: [
      "A successful brand is more than a professionally designed logo. It shapes how customers perceive your business, the experience they associate with it and the trust they place in your products or services.",
      "Strong branding creates consistency across every customer touchpoint, while strategic public relations strengthens credibility through positive exposure, thought leadership and meaningful stakeholder communication.",
      "Every project begins with your organisation, market, competitors, audience and commercial objectives. The result is a customised position and identity instead of a generic visual treatment.",
      <>Our strategists, designers, copywriters, PR consultants and <Link href="/our-services#services-overview">digital marketing specialists</Link> work together to keep your identity, messaging and communications consistent online and offline.</>,
    ],
  },
  services: { eyebrow: "From discovery to reputation", title: "End-to-end branding and public relations services in Dubai", items: services, images: serviceImages, ctaLead: "Ready to strengthen your brand?", ctaLabel: "Tell us what your business needs" },
  outcomes: { title: "What can branding and PR do for your business?", description: "A clearly positioned brand creates recognition, while strategic public relations builds credibility through consistent communication and positive public exposure.", items: outcomes },
  industries: { eyebrow: "Built for your market", title: "Branding and PR solutions for different industries", description: "Every industry has different customer expectations and competitive pressures. We tailor the strategy around your sector, business model and commercial objectives.", items: industries, labels: industryLabels, images: industryImages },
  features: { eyebrow: "A scope shaped around you", title: "Features and deliverables we can create for your brand", items: features },
  process: { eyebrow: "Research, strategy and refinement", title: "Our branding and public relations process", items: process },
  technology: { eyebrow: "The right channel for the audience", title: "Branding, PR and communication platforms we work with", description: "Effective campaigns depend on selecting the right channels, not simply using every available platform. We recommend tools and networks around your audience, objectives and communication strategy.", image: { src: "/about/about-09.jpg", alt: "Branding and communication team planning a multi-channel campaign" }, items: platforms },
  reasons: {
    eyebrow: "One connected creative team",
    title: "Why choose Webtek Digital as your branding and PR company in Dubai?",
    items: reasons,
    footer: <>As a full-service digital agency, we can also extend your brand through <Link href="/our-services/website-design-development-company-dubai">website design</Link>, <Link href="/our-services/seo-online-reputation-management-company-dubai">SEO</Link>, <Link href="/our-services/google-ads-performance-marketing-company-dubai">Google Ads</Link>, <Link href="/our-services/social-media-management-marketing-company-dubai">social media</Link>, content marketing and video production.</>,
  },
  cost: { title: "How much do branding and PR services cost in Dubai?", description: "Cost depends on scope rather than a fixed package. A startup identity has different requirements from a complete corporate rebrand, communication strategy or long-term public relations campaign.", buttonLabel: "Request a branding proposal", factorsLabel: "Main factors that influence cost", factors: costFactors, note: "After an initial consultation, we prepare a customised proposal outlining the recommended scope, project stages and estimated investment." },
  conversion: { eyebrow: "Ready to build a stronger brand?", title: "Get a practical brand roadmap.", description: "Speak with our Dubai-based branding consultants about your goals, market position and communication strategy. We will review the current brand, identify opportunities and recommend a focused path forward.", benefits: ["Free initial branding consultation", "Brand strategy recommendations", "Brand identity review", "Public relations guidance", "Reputation management recommendations", "Marketing alignment opportunities", "Website branding review", "Growth roadmap tailored to your business"], requirementLabel: "Branding requirement", requirementName: "Branding requirement", requirementPlaceholder: "Tell us about your business, audience, objectives and current brand assets", buttonLabel: "Discuss Your Branding Project" },
  faq: { eyebrow: "The practical details", title: "Frequently asked questions", items: faqs },
  finalCta: { eyebrow: "Create a brand built to last", title: "Ready to become more recognisable?", body: "Launch a new identity, reposition an established company or build a stronger public reputation with a strategy shaped around your audience and business goals.", label: "Book a free branding consultation" },
};

export default function Page() {
  return <SingleServicePage config={config} />;
}
