import type { Metadata } from "next";
import Link from "next/link";
import { SingleServicePage, type SingleServicePageConfig } from "../../components/services/SingleServicePage";

const pageUrl = "https://www.webtekdigital.com/our-services/ui-ux-design-company-dubai/";

export const metadata: Metadata = {
  title: "UI/UX Design Company Dubai | UX Design Agency | Webtek Digital",
  description: "Looking for a professional UI/UX Design Company in Dubai? Webtek Digital creates intuitive, user-focused digital experiences for websites, mobile apps, SaaS platforms and enterprise applications that improve engagement and conversions.",
  keywords: ["UI UX design company Dubai", "UI design Dubai", "UX design Dubai", "user experience design Dubai", "user interface design Dubai", "website UI design Dubai", "mobile app UI design Dubai", "SaaS UX design Dubai", "product design Dubai", "UI UX agency UAE", "UX research Dubai", "wireframing Dubai", "prototype design Dubai", "UX consulting Dubai", "digital product design Dubai"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "UI/UX Design Company Dubai | UX Design Agency | Webtek Digital",
    description: "User-centred UI/UX design for websites, mobile apps, SaaS platforms and enterprise products.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  ["User Experience Research", "Understand user needs, behaviours and expectations through interviews, workshops, competitor research, personas, journey mapping, behavioural analysis and user-flow planning."],
  ["User Interface Design", "Create modern, accessible and consistent interfaces for websites, mobile apps, dashboards, SaaS products, enterprise software, ecommerce stores and customer portals."],
  ["Wireframing", "Define product structure early with low-, mid- and high-fidelity wireframes, navigation models, user-flow diagrams and clear information hierarchy."],
  ["Interactive Prototyping", "Simulate the final experience through clickable website, app and SaaS prototypes that help teams test journeys, gather feedback and reduce development risk."],
  ["Mobile App UI/UX Design", "Design intuitive iOS, Android, Flutter and React Native experiences including app flows, onboarding, gesture interactions, retention journeys and scalable mobile design systems."],
  ["Website UI/UX Design", "Improve navigation, content hierarchy, conversion funnels, responsive layouts, accessibility and calls to action for corporate websites, landing pages and ecommerce platforms."],
  ["SaaS & Dashboard Design", "Simplify complex workflows and data through clear dashboards, admin panels, CRM and ERP interfaces, analytics platforms, data visualisation and task-focused interaction design."],
  ["Design Systems", "Build reusable colour, typography, component, icon, spacing and interaction standards that improve product consistency and accelerate future design and development."],
  ["Usability Testing", "Validate designs through task testing, observation, heuristic evaluation, accessibility review and behaviour analysis, then refine the experience using evidence rather than assumptions."],
] as const;

const serviceImages = [
  { src: "/about/about-12.jpg", alt: "UX researchers planning a user-centred digital product" },
  { src: "/talabat/customer-panel.png.webp", alt: "User interface design displayed across application screens" },
  { src: "/about/about-04.jpg", alt: "Design team preparing product wireframes" },
  { src: "/talabat/app-screen3.png.webp", alt: "Interactive mobile application prototype" },
  { src: "/services/app-development/1-slider/Mobile App UI_UX Design.png", alt: "Mobile app UI and UX design presentation" },
  { src: "/nordwood-themes-wt4gUtdv1-U-unsplash.jpg", alt: "Website UI and UX design workspace" },
  { src: "/about/about-11.jpg", alt: "SaaS dashboard and analytics interface planning" },
  { src: "/about/about-09.jpg", alt: "Product designers collaborating on a design system" },
  { src: "/about/about-15.jpg", alt: "Specialist conducting digital product usability testing" },
] as const;

const outcomes = [
  "Increase website conversion rates", "Improve user satisfaction", "Reduce bounce rates", "Increase customer engagement", "Improve the mobile experience", "Simplify complex user journeys", "Strengthen brand perception", "Increase customer retention", "Improve product adoption", "Reduce support requests", "Improve accessibility", "Increase online sales", "Generate more qualified leads", "Improve customer loyalty", "Accelerate product development",
] as const;

const industries = [
  ["Healthcare & Medical", "Accessible clinic websites, patient portals, booking systems, telemedicine products, healthcare apps and wellness dashboards that build confidence and reduce friction."],
  ["Ecommerce", "Conversion-focused product discovery, category navigation, search, product pages, wishlists, mobile shopping and checkout experiences."],
  ["Real Estate", "Property portals, developer websites, interactive maps, search interfaces, investment products and agent dashboards that simplify property discovery."],
  ["Education", "Learning management systems, student and admissions portals, course platforms, examination tools and educational mobile applications."],
  ["Financial Services", "Clear and trustworthy banking, FinTech, investment, insurance, loan and payment interfaces designed around security and usability."],
  ["Hospitality & Tourism", "Hotel websites, booking platforms, resort apps, travel portals, reservation systems and loyalty experiences that support direct bookings."],
  ["SaaS & Enterprise", "CRM, ERP, HR, analytics, workflow and business-intelligence interfaces that make complex operational tasks easier to complete."],
  ["Startups", "MVP design, investor prototypes, product validation, user testing and scalable component libraries that balance launch speed with long-term quality."],
] as const;

const industryLabels = ["Healthcare", "Ecommerce", "Real estate", "Education", "Financial", "Hospitality", "Enterprise", "Startups"] as const;
const industryImages = [
  { src: "/about/about-08.jpg", alt: "Healthcare environment representing patient-centred UX design" },
  { src: "/brands/ounass-removebg-preview.png", alt: "Retail brand representing ecommerce UX design" },
  { src: "/about/about-13.jpg", alt: "Property environment representing real estate platform design" },
  { src: "/brands/dubai-uni-removebg-preview.png", alt: "Education brand representing learning platform UX" },
  { src: "/about/about-14.jpg", alt: "Professional team representing financial product design" },
  { src: "/about/about-05.jpg", alt: "Hospitality environment representing booking experience design" },
  { src: "/about/about-11.jpg", alt: "Analytics workspace representing enterprise software UX" },
  { src: "/about/about-09.jpg", alt: "Product team representing startup UI UX design" },
] as const;

const features = [
  "User research", "Stakeholder workshops", "Competitor analysis", "Persona development", "Customer journey mapping", "UX audit", "Information architecture", "Product strategy", "User and task flows", "Sitemap creation", "Wireframes", "Interaction design", "Navigation design", "Website and mobile app design", "Dashboard and SaaS interfaces", "Landing pages", "Ecommerce design", "Responsive layouts", "Interactive prototypes", "Clickable mockups", "Component libraries", "Typography and colour systems", "Icons and UI patterns", "Design tokens", "Usability and accessibility testing", "User feedback sessions", "Heuristic reviews", "Figma source files", "Design specifications", "Style guides", "Exported assets", "Developer documentation",
] as const;

const process = [
  ["Discovery Workshop", "We define business objectives, product vision, user needs, technical requirements, success measures and stakeholder expectations."],
  ["Research & Analysis", "User research, competitor benchmarking, industry analysis, behaviour studies and product audits reveal opportunities and reduce assumptions."],
  ["Information Architecture", "Sitemaps, navigation, content hierarchy, user flows and screen relationships give the product a logical, task-focused structure."],
  ["Wireframing", "Low- and high-fidelity wireframes establish layout, functionality and core journeys before visual design begins."],
  ["UI Design", "Approved UX foundations become polished, responsive interfaces using the right typography, colour, components, icons, imagery and micro-interactions."],
  ["Interactive Prototyping", "Clickable prototypes help stakeholders experience the product, test workflows and provide meaningful feedback before engineering starts."],
  ["Usability Testing & Refinement", "We test navigation, task completion, accessibility and satisfaction, then improve the design using the findings."],
  ["Developer Handoff & Support", "Organised files, components, assets and specifications support accurate implementation, with design collaboration available during development."],
] as const;

const tools = [
  ["Figma", "Collaborative interface design, prototyping, component libraries, design systems, reviews and developer handoff."],
  ["Adobe Creative Cloud", "Photoshop, Illustrator, After Effects and related tools for imagery, illustration, branding assets and motion design."],
  ["FigJam", "Collaborative discovery workshops, brainstorming, journey mapping, wireflows and stakeholder alignment."],
  ["Miro", "UX workshops, information architecture, product planning, journey mapping and distributed team collaboration."],
  ["Maze & Testing Platforms", "Gather user feedback, validate assumptions and identify usability improvements before development."],
  ["Developer Handoff Tools", "Communicate measurements, assets, responsive behaviour and implementation specifications clearly to engineering teams."],
  ["Accessibility Evaluation", "Review contrast, readability, keyboard interaction, responsive behaviour and screen-reader considerations against recognised guidance."],
  ["AI-Assisted Workflows", "Accelerate research synthesis and ideation while keeping human judgement, usability and brand quality central to every output."],
] as const;

const reasons = [
  ["User-Centred Philosophy", "Research, pain points and real customer journeys guide design decisions so products feel intuitive, accessible, engaging and efficient."],
  ["Business-Driven Strategy", "Interfaces support measurable goals including leads, sales, adoption, engagement, retention, awareness and operational efficiency."],
  ["Research Before Design", "Discovery, user research and competitor analysis establish a strong foundation before visual concepts are created."],
  ["Experienced Specialists", "UX and UI designers, product designers, researchers, information architects and interaction specialists collaborate across the experience."],
  ["Collaborative Process", "Founders, product managers, marketers, developers and stakeholders stay aligned through workshops, reviews and feedback sessions."],
  ["Scalable Design Systems", "Reusable components and documented standards preserve consistency and make future product development faster."],
  ["Developer-Friendly Deliverables", "Organised design files, specifications and reusable assets make approved experiences practical to implement."],
  ["End-to-End Product Expertise", "Our design team works alongside development, brand and growth specialists when the product needs support beyond design."],
] as const;

const costFactors = ["Project complexity", "Number of screens", "Website or mobile application", "UX research requirements", "Wireframing", "Interactive prototyping", "Design-system creation", "Usability testing", "Dashboard complexity", "Responsive design", "Developer handoff", "Revision cycles"] as const;

const faqs = [
  ["What is UI design?", "User interface design focuses on the visual and interactive elements of a digital product, including layout, colour, typography, buttons and components."],
  ["What is UX design?", "User experience design focuses on how people use a product. It includes research, information architecture, journeys, interaction design and usability testing."],
  ["Why is UI/UX design important?", "Effective UI/UX improves satisfaction and engagement, reduces frustration and supports conversion by making digital experiences easier and more enjoyable to use."],
  ["Do you design both websites and mobile apps?", "Yes. We design websites, ecommerce platforms, mobile applications, SaaS products, dashboards, portals and enterprise software."],
  ["Do you conduct user research?", "Yes. Depending on scope, research can include interviews, behaviour analysis, journey mapping, competitor review and product audits."],
  ["Which design tools do you use?", "Our team primarily uses Figma, FigJam, Adobe Creative Cloud, Miro and suitable testing and collaboration platforms."],
  ["Will I receive editable design files?", "Yes. The agreed handoff can include organised editable files, components, style guides, specifications and developer-ready assets."],
  ["Do you provide prototypes before development?", "Yes. Interactive prototypes allow stakeholders to review and validate important flows before development, reducing ambiguity and rework."],
  ["Can you redesign an existing website or application?", "Yes. We can audit and redesign selected journeys or a complete product to improve usability, accessibility, consistency and conversion."],
  ["Do you work with startups and enterprise businesses?", "Yes. We adapt the process for startups, SMEs, enterprises and government organisations based on product complexity, team structure and goals."],
] as const;

const config: SingleServicePageConfig = {
  pageUrl,
  serviceName: "UI/UX Design in Dubai",
  serviceTypes: ["UI design", "UX design", "User research", "Wireframing", "Interactive prototyping", "Product design", "Usability testing", "Design systems"],
  breadcrumbName: "UI/UX Design Company Dubai",
  hero: {
    title: "UI/UX Design Company in Dubai",
    description: "Design digital experiences your customers love. Webtek Digital combines user research, information architecture, wireframing, prototyping and modern interface design to create intuitive websites, mobile apps, SaaS platforms and enterprise products that support engagement and conversion.",
    primaryCta: "Book a Free UI/UX Consultation",
    secondaryCta: "Request a Custom Design Proposal",
    note: "Tell us about your project, users and business goals. Our UI/UX specialists will recommend a tailored design strategy focused on usability, engagement and conversions.",
  },
  intro: {
    eyebrow: "Designed around real users",
    title: "User-centred design that creates better digital experiences",
    items: [
      "Users expect digital experiences to feel fast, clear and enjoyable. Confusing navigation and unnecessary friction quickly damage trust, engagement and conversion.",
      "Before designing an interface, we understand your business objectives, user behaviour, customer pain points and competitive landscape so the product solves genuine problems.",
      "Research, journey mapping, architecture, wireframes, prototypes, accessibility, testing and design systems work together as one evidence-led process.",
      <>From a focused interface project to a complete product, our designers can collaborate with our <Link href="/our-services/website-design-development-company-dubai">website development</Link> and <Link href="/our-services/mobile-app-development-company-dubai">mobile app development</Link> teams for implementation.</>,
    ],
  },
  services: { eyebrow: "Research, structure and visual craft", title: "Comprehensive UI/UX design services", items: services, images: serviceImages, ctaLead: "Have a digital product in mind?", ctaLabel: "Tell us what you want to improve" },
  outcomes: { title: "How great UI/UX design drives business growth", description: "Thoughtful design reduces friction, builds trust and helps users complete meaningful actions while supporting measurable product and commercial outcomes.", items: outcomes },
  industries: { eyebrow: "Designed for each user context", title: "UI/UX design solutions for different industries", description: "Every industry has different behaviours, standards and digital challenges. We tailor the journeys, information and interface to your users and operating model.", items: industries, labels: industryLabels, images: industryImages },
  features: { eyebrow: "A complete, implementation-ready scope", title: "UI/UX features and deliverables", items: features },
  process: { eyebrow: "Collaborative and evidence-led", title: "Our UI/UX design process", items: process },
  technology: { eyebrow: "Modern tools for connected teams", title: "Design tools and technologies", description: "Our design workflow supports collaborative thinking, consistent interface systems, meaningful validation and a clear transition from approved design to production.", image: { src: "/talabat/customer-panel.png.webp", alt: "Collaborative UI UX design and prototyping workspace" }, items: tools },
  reasons: {
    eyebrow: "Design that works for users and the business",
    title: "Why choose Webtek Digital for UI/UX design?",
    items: reasons,
    footer: <>Extend the experience through <Link href="/our-services/website-design-development-company-dubai">website development</Link>, <Link href="/our-services/mobile-app-development-company-dubai">mobile app development</Link>, <Link href="/our-services/branding-pr-company-dubai">branding</Link>, <Link href="/our-services/seo-online-reputation-management-company-dubai">SEO</Link>, <Link href="/our-services/google-ads-performance-marketing-company-dubai">Google Ads</Link> and <Link href="/our-services/social-media-management-marketing-company-dubai">social media marketing</Link>.</>,
  },
  cost: { title: "How much does UI/UX design cost in Dubai?", description: "Investment depends on product complexity, number of screens, research requirements and project scope. A corporate website needs a different design effort from a mobile banking product, SaaS platform or enterprise system.", buttonLabel: "Request a UI/UX design proposal", factorsLabel: "Main factors that influence pricing", factors: costFactors, note: "Following an initial consultation, we prepare a customised scope outlining the recommended deliverables, stages, timeline and investment." },
  conversion: { eyebrow: "Ready to create a better digital experience?", title: "Start with a free UI/UX consultation.", description: "We will assess your current product or idea, identify usability opportunities and recommend practical improvements that support users and business goals.", benefits: ["Product discovery session", "UX audit", "User-journey review", "Competitor analysis", "Navigation assessment", "Conversion recommendations", "Accessibility review", "Design roadmap"], requirementLabel: "Design requirement", requirementName: "UI UX design requirement", requirementPlaceholder: "Tell us about the product, users, current challenges and business goals", buttonLabel: "Book Your Free UI/UX Consultation" },
  faq: { eyebrow: "The practical details", title: "Frequently asked questions", items: faqs },
  finalCta: { eyebrow: "Research-led, intuitive and built to perform", title: "Let’s design experiences users love.", body: "Launch a new digital product or transform an existing experience with interface design that builds trust, simplifies interaction and supports measurable business growth.", label: "Speak with a UI/UX design expert" },
};

export default function Page() {
  return <SingleServicePage config={config} />;
}
