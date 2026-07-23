import type { Metadata } from "next";
import Link from "next/link";
import { SingleServicePage, type SingleServicePageConfig } from "../../components/services/SingleServicePage";

const pageUrl = "https://www.webtekdigital.com/our-services/website-design-development-company-dubai/";

export const metadata: Metadata = {
  title: "Website Design & Development Company Dubai | Webtek Digital",
  description: "Webtek Digital designs and develops fast, conversion-focused websites and ecommerce stores for businesses in Dubai and across the UAE. Request a free consultation.",
  keywords: ["website design company Dubai", "web development company Dubai", "website development Dubai", "web design agency Dubai", "ecommerce website development Dubai", "custom website development UAE", "WordPress development Dubai", "Shopify development Dubai"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Website Design & Development Company Dubai | Webtek Digital",
    description: "Custom websites and ecommerce experiences designed for speed, usability and measurable business growth.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  ["Custom Website Design", "Original, brand-led interfaces shaped around your audience, content and commercial goals instead of forcing your business into a pre-built theme."],
  ["Corporate Website Development", "Professional, scalable websites that explain complex offers clearly, support multiple departments and give internal teams practical control over content."],
  ["Ecommerce Development", "Conversion-focused online stores with product discovery, secure checkout, payment, shipping, inventory and reporting integrations."],
  ["Landing Page Development", "Focused campaign pages designed to turn paid and organic traffic into enquiries, bookings, registrations or purchases."],
  ["WordPress Development", "Flexible WordPress builds with tailored components, editor-friendly content management, performance optimisation and sensible plugin use."],
  ["Shopify Development", "Branded Shopify storefronts, theme customisation, catalogue setup, app integration and checkout journeys planned for retail growth."],
  ["Web Application Development", "Customer portals, dashboards, booking systems and operational platforms built around roles, workflows, data and integrations."],
  ["Website Redesign", "A strategic refresh of outdated structure, content, visuals and technology to improve clarity, speed, accessibility and conversion."],
  ["Website Maintenance", "Ongoing updates, backups, monitoring, security checks, bug fixes and planned improvements after launch."],
  ["Conversion & Performance Optimisation", "Analytics-led improvements to speed, navigation, calls to action and key journeys that help more visitors take the next step."],
] as const;

const serviceImages = [
  { src: "/nordwood-themes-wt4gUtdv1-U-unsplash.jpg", alt: "Designer planning a custom business website" },
  { src: "/about/about-12.jpg", alt: "Team reviewing a corporate website" },
  { src: "/about/about-10.jpg", alt: "Ecommerce team planning an online store" },
  { src: "/about/about-11.jpg", alt: "Campaign landing page analytics workspace" },
  { src: "/about/about-09.jpg", alt: "Developers collaborating on a content-managed website" },
  { src: "/about/about-04.jpg", alt: "Retail team reviewing a Shopify storefront" },
  { src: "/about/about-14.jpg", alt: "Business team reviewing a web application dashboard" },
  { src: "/about/about-02.jpg", alt: "Creative team discussing a website redesign" },
  { src: "/about/about-15.jpg", alt: "Specialist providing website support" },
  { src: "/about/about-16.jpg", alt: "Team analysing website performance" },
] as const;

const outcomes = [
  "Build credibility before the first conversation",
  "Generate qualified enquiries around the clock",
  "Sell products and services directly online",
  "Explain complex offers with greater clarity",
  "Support SEO and content-led acquisition",
  "Improve campaign conversion and reduce wasted ad spend",
  "Automate bookings, payments and routine enquiries",
  "Connect website activity with CRM and sales workflows",
  "Give your team control over day-to-day content",
  "Create a scalable base for future digital growth",
] as const;

const industries = [
  ["Retail & ecommerce", "Product catalogues, search, secure checkout, promotions, fulfilment, loyalty and analytics."],
  ["Real estate", "Property listings, filters, maps, viewing requests, agent profiles, lead capture and CRM integration."],
  ["Healthcare & wellness", "Clear service information, practitioner profiles, appointment requests and patient-friendly journeys."],
  ["Hospitality & restaurants", "Menus, reservations, rooms, experiences, offers, multilingual content and direct booking journeys."],
  ["Education & training", "Course catalogues, admissions, resources, student enquiries, learning portals and event registration."],
  ["Professional services", "Authority-led content, service detail, case studies, team profiles and qualified lead generation."],
  ["Construction & property", "Project portfolios, capabilities, sectors, tender enquiries and investor-facing information."],
  ["Technology & startups", "Product storytelling, demos, documentation, pricing, onboarding and investor credibility."],
  ["Automotive", "Vehicle listings, finance enquiries, service booking, branch information and campaign landing pages."],
  ["Government & enterprise", "Accessible information architecture, multilingual publishing, integrations and governed content workflows."],
] as const;

const industryLabels = ["Retail", "Real estate", "Healthcare", "Hospitality", "Education", "Professional", "Construction", "Technology", "Automotive", "Enterprise"] as const;
const industryImages = [
  { src: "/brands/ounass-removebg-preview.png", alt: "Retail brand representing ecommerce website development" },
  { src: "/about/about-13.jpg", alt: "Property setting representing real estate websites" },
  { src: "/about/about-08.jpg", alt: "Professional setting representing healthcare websites" },
  { src: "/about/about-05.jpg", alt: "Hospitality setting representing hotel and restaurant websites" },
  { src: "/brands/dubai-uni-removebg-preview.png", alt: "Education brand representing university websites" },
  { src: "/about/about-14.jpg", alt: "Consulting team representing professional services websites" },
  { src: "/about/about-03.jpg", alt: "Modern development representing construction websites" },
  { src: "/about/about-11.jpg", alt: "Digital workspace representing technology websites" },
  { src: "/about/about-06.jpg", alt: "Premium environment representing automotive websites" },
  { src: "/about/about-12.jpg", alt: "Enterprise team representing large-scale website projects" },
] as const;

const features = [
  "Responsive layouts for mobile, tablet and desktop", "Clear navigation and content architecture", "Flexible content management", "Product catalogues and ecommerce checkout", "Bookings, appointments and event registration", "Secure payment gateway integration", "Multilingual and right-to-left support", "Forms, lead routing and CRM integration", "Site search and advanced filtering", "Maps, branches and location features", "Customer accounts and gated content", "Analytics and conversion tracking", "SEO foundations and structured data", "Accessibility-conscious components", "Performance and Core Web Vitals optimisation", "Third-party APIs and business-system integrations",
] as const;

const process = [
  ["Discovery and goals", "We define the audience, business priorities, required outcomes, current challenges and the role the website should play in growth."],
  ["Research and content planning", "Competitors, search demand, content requirements and customer questions inform a practical page and messaging plan."],
  ["Sitemap and user journeys", "We organise pages, navigation and conversion paths so visitors can understand the offer and act without unnecessary friction."],
  ["Wireframes", "Key pages are structured around hierarchy, content and calls to action before visual details are introduced."],
  ["UI design", "We create a distinctive, responsive interface using your brand system, imagery and content priorities."],
  ["Development", "Approved designs become reusable, maintainable components with CMS, ecommerce and integration requirements built in."],
  ["Content and integrations", "Final content, forms, products, tracking, CRM, payments and relevant third-party services are configured and tested."],
  ["Quality assurance", "We review responsive behaviour, browsers, accessibility, performance, forms, links, content and essential technical SEO."],
  ["Launch and improvement", "After deployment, we can monitor the site, resolve issues and improve journeys using analytics and real user behaviour."],
] as const;

const technologies = [
  ["Next.js & React", "Fast, component-driven websites and web applications with a scalable foundation."],
  ["WordPress", "Editor-friendly marketing and corporate sites with tailored themes and content structures."],
  ["Shopify", "Reliable ecommerce infrastructure with a customised brand and shopping experience."],
  ["Headless CMS", "Flexible content delivery for teams that need structured publishing across channels."],
  ["Backend & APIs", "Secure services and integrations selected around the website’s workflows and data."],
  ["Cloud & deployment", "Modern hosting, caching, monitoring, backups and controlled release workflows."],
  ["Analytics & optimisation", "Measurement for enquiries, purchases and key journeys to guide ongoing improvement."],
] as const;

const reasons = [
  ["Strategy before screens", "Business goals, customers and conversion journeys shape the design from the beginning."],
  ["Custom design system", "Reusable components create consistency and make future pages easier to launch."],
  ["Content-aware design", "Layouts are made for the message and information visitors actually need."],
  ["Responsive by default", "Every key journey is designed and tested across common screen sizes."],
  ["Performance conscious", "Images, code and delivery are considered throughout the build, not only before launch."],
  ["SEO-ready foundation", "Structure, metadata, crawlability and page performance support ongoing search work."],
  ["Connected expertise", "Design, development, SEO, content and paid media can work as one coordinated team."],
  ["Support after launch", "Maintenance and planned optimisation keep the website useful as the business changes."],
] as const;

const costFactors = ["Number and type of pages", "Custom design and interaction requirements", "CMS and editor roles", "Ecommerce catalogue and checkout complexity", "Copywriting, photography and content migration", "Multilingual and right-to-left requirements", "CRM, payment and third-party integrations", "Customer accounts or web-application functionality", "SEO, analytics and tracking scope", "Hosting, maintenance and ongoing optimisation"] as const;

const faqs = [
  ["What does a website design and development company do?", "It plans, designs, builds, tests and launches websites. Work can include strategy, content architecture, UI/UX, front-end and backend development, CMS setup, ecommerce, integrations, SEO foundations and maintenance."],
  ["Why work with a web design company in Dubai?", "A Dubai-based team can offer closer collaboration and familiarity with UAE audiences, multilingual requirements and local business expectations. Process, capability and relevant experience should still guide your decision."],
  ["Do you create custom website designs?", "Yes. We can design a tailored interface and reusable component system around your brand, content and customer journeys rather than relying on an off-the-shelf appearance."],
  ["Can you redesign our existing website?", "Yes. We can review the current site’s structure, content, usability, performance and technology, then retain what works and improve what is limiting results."],
  ["Do you build ecommerce websites?", "Yes. We build online stores with catalogues, search, checkout, payment, delivery and operational integrations according to the business model."],
  ["Which platform should I use for my website?", "The right platform depends on content, ecommerce, integrations, editing needs, performance, budget and future roadmap. We recommend a stack after understanding those requirements."],
  ["Can my team update the website?", "Yes. Where content management is required, we create practical editing controls and provide handover guidance for routine updates."],
  ["Will the website work on mobile devices?", "Yes. The interface is designed responsively and key journeys are tested across mobile, tablet and desktop layouts."],
  ["Is SEO included in website development?", "We include essential technical and on-page foundations such as semantic structure, metadata support, crawlability and performance considerations. Ongoing keyword and content work can be scoped separately."],
  ["Can you connect our CRM, payment gateway or booking system?", "Yes, where the selected service offers a suitable integration or API. We review documentation, data flows and security requirements before confirming scope."],
  ["How long does website development take?", "Timing varies with page count, content readiness, design complexity, ecommerce, integrations and approval cycles. A focused marketing site is faster than a multilingual store or custom web platform."],
  ["How much does a website cost in Dubai?", "Cost depends on scope, design, content, technology and integrations. We prepare a tailored estimate after an initial requirements discussion."],
  ["Do you provide hosting and maintenance?", "Yes. Hosting, monitoring, backups, security updates, support and planned improvements can be included according to the website’s needs."],
  ["Can you improve the speed of an existing website?", "Yes. We can assess images, code, fonts, third-party scripts, caching and hosting to identify practical performance improvements."],
  ["Who owns the website after launch?", "Ownership, licensing, accounts and handover terms are documented in the final proposal and agreement before work begins."],
] as const;

const config: SingleServicePageConfig = {
  pageUrl,
  serviceName: "Website Design and Development in Dubai",
  serviceTypes: ["Website design", "Web development", "Ecommerce development", "WordPress development", "Shopify development"],
  breadcrumbName: "Website Design & Development Company Dubai",
  hero: { title: "Website Design & Development Company in Dubai", description: "Build a website that looks distinctive, explains your value clearly and turns attention into action. Webtek Digital creates fast, responsive and conversion-focused websites for startups, growing businesses and established organisations across Dubai and the UAE.", primaryCta: "Get a Free Website Consultation", secondaryCta: "Request a Custom Quote", note: "Tell us about your business, audience and website goals. We’ll recommend the right structure, platform and development approach." },
  intro: { eyebrow: "Built for business growth", title: "Websites that work as hard as your marketing", items: ["A strong website is more than a digital brochure. It should build trust quickly, help people find the right information and guide them toward a clear next step.", <>Our <Link href="/our-services/ui-ux-design-company-dubai">UI/UX designers</Link>, developers, content specialists and digital marketing team work together, connecting user experience, technology, SEO and conversion from the beginning.</>, "From focused landing pages to corporate websites, ecommerce stores and web applications, every build is shaped around your goals, internal workflows and plans for growth."] },
  services: { eyebrow: "Strategy to support", title: "Website design and development services in Dubai", items: services, images: serviceImages, ctaLead: "Planning a new website?", ctaLabel: "Tell us what you need" },
  outcomes: { title: "What can the right website do for your business?", description: "Your website can become your most consistent sales, service and credibility platform when design, content and technology work together.", items: outcomes },
  industries: { eyebrow: "Designed around real journeys", title: "Web solutions for different industries", description: "Each sector has its own buying journey, content needs and operational requirements. We plan the experience around how your customers decide and how your team works.", items: industries, labels: industryLabels, images: industryImages },
  features: { eyebrow: "The right capabilities", title: "Features we can build into your website", items: features },
  process: { eyebrow: "Clear stages, visible progress", title: "Our website design and development process", items: process },
  technology: { eyebrow: "Selected for the project", title: "Website technologies we work with", description: "We choose platforms and tools around editing needs, functionality, performance, integrations and long-term ownership—not fashion or habit.", image: { src: "/nordwood-themes-wt4gUtdv1-U-unsplash.jpg", alt: "Website design and development workspace" }, items: technologies },
  reasons: { eyebrow: "One team from brief to growth", title: "Why choose Webtek Digital for website development in Dubai?", items: reasons, footer: <>Need traffic after launch? Our <Link href="/our-services/seo-online-reputation-management-company-dubai">SEO</Link>, <Link href="/our-services/google-ads-performance-marketing-company-dubai">Google Ads</Link>, content and social teams can turn the new website into a connected growth platform.</> },
  cost: { title: "How much does website development cost in Dubai?", description: "Website cost depends on scope rather than a standard package. A focused lead-generation website, a large corporate platform and an ecommerce store each require different design, content and technology effort.", buttonLabel: "Request a website estimate", factorsLabel: "Main factors that influence cost", factors: costFactors, note: "After an initial consultation, we can recommend an appropriate scope and provide a quotation based on the pages, functionality, content and integrations required." },
  conversion: { eyebrow: "Planning a website?", title: "Start with a clear digital roadmap.", description: "Speak with our Dubai team about the website you need, the customers it should serve and the business result it must create.", benefits: ["Free initial consultation", "Custom responsive UI design", "CMS and ecommerce options", "SEO-ready development", "CRM, payment and API integration", "Maintenance and optimisation options"], requirementLabel: "Website requirement", requirementName: "Website requirement", requirementPlaceholder: "Tell us about your business, audience, pages and required functionality", buttonLabel: "Discuss your website project" },
  faq: { eyebrow: "The practical details", title: "Frequently asked questions", items: faqs },
  finalCta: { eyebrow: "Ready when you are", title: "Ready to build a better website?", body: "Launch a new digital presence or turn an outdated website into a faster, clearer and more effective platform for your customers and team.", label: "Book a free consultation" },
};

export default function Page() {
  return <SingleServicePage config={config} />;
}
