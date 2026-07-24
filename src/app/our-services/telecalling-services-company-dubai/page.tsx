import type { Metadata } from "next";
import Link from "next/link";
import {
  SingleServicePage,
  type SingleServicePageConfig,
} from "../../components/services/SingleServicePage";

const pageUrl =
  "https://www.webtekdigital.com/our-services/telecalling-services-company-dubai/";

export const metadata: Metadata = {
  title:
    "Telecalling Services Company Dubai | Lead Generation & Customer Support | Webtek Digital",
  description:
    "Looking for professional telecalling services in Dubai? Webtek Digital provides inbound and outbound telecalling, lead generation, appointment setting, customer support, follow-ups and telesales services to help businesses grow faster.",
  keywords: [
    "Telecalling Services Dubai",
    "Telecalling Company Dubai",
    "Outbound Calling Services Dubai",
    "Inbound Call Centre Dubai",
    "Lead Generation Services Dubai",
    "Appointment Setting Services Dubai",
    "Customer Support Services Dubai",
    "Telesales Services Dubai",
    "Cold Calling Dubai",
    "Call Centre Outsourcing UAE",
    "B2B Telemarketing Dubai",
    "B2C Telecalling UAE",
    "Customer Follow-up Services Dubai",
    "Sales Calling Services Dubai",
    "Business Process Outsourcing Dubai",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Telecalling Services Company Dubai | Webtek Digital",
    description:
      "Professional inbound and outbound calling that generates leads, books appointments and strengthens customer relationships.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  ["Outbound Telecalling", "Reach prospects and customers through structured cold calls, warm follow-ups, sales outreach, promotions, database calling and reactivation campaigns."],
  ["Inbound Call Handling", "Answer enquiries promptly and professionally with product information, order support, complaint resolution, service requests, booking assistance and call routing."],
  ["Lead Generation", "Identify genuine opportunities by qualifying prospects, understanding needs, verifying decision-makers, confirming interest and keeping CRM records accurate."],
  ["Appointment Setting", "Keep sales teams focused on closing while we schedule and confirm consultations, demonstrations, site visits, discovery calls and virtual meetings."],
  ["Telesales Services", "Promote products, services, subscriptions and memberships through customer-first conversations, including upselling, cross-selling, renewals and special offers."],
  ["Customer Follow-Up Calls", "Improve conversion and satisfaction through structured enquiry, quotation, payment, feedback, post-purchase, renewal and event follow-ups."],
  ["Customer Surveys & Feedback", "Collect actionable insight through satisfaction surveys, market research, product feedback, service reviews, NPS and brand-perception studies."],
  ["CRM Data Verification", "Improve database accuracy by verifying contact details, email addresses, decision-makers, business information and current customer status."],
  ["Event & Webinar Calls", "Increase participation through invitations, RSVP confirmation, webinar registration, attendance reminders and post-event engagement."],
  ["Customer Retention Campaigns", "Strengthen long-term relationships with loyalty calls, renewal reminders, re-engagement, special offers and customer appreciation campaigns."],
] as const;

const serviceImages = [
  "/about/about-01.jpg", "/about/about-03.jpg", "/about/about-06.jpg",
  "/about/about-10.jpg", "/about/about-11.jpg", "/about/about-15.jpg",
  "/about/about-09.jpg", "/about/about-04.jpg", "/about/about-13.jpg",
  "/about/about-14.jpg",
].map((src, index) => ({
  src,
  alt: `${services[index][0]} delivered by Webtek Digital in Dubai`,
}));

const outcomes = [
  "Generate more qualified leads", "Increase appointment bookings",
  "Improve sales conversion rates", "Shorten sales cycles",
  "Strengthen customer relationships", "Increase customer retention",
  "Recover lost opportunities", "Improve customer satisfaction",
  "Boost renewal rates", "Verify customer data",
  "Increase event attendance", "Improve CRM accuracy",
  "Reduce missed sales opportunities", "Support marketing campaigns",
  "Enhance brand reputation",
] as const;

const industries = [
  ["Healthcare & Medical", "Empathetic appointment booking, reminders, patient follow-ups, enquiries, wellness campaigns, feedback and insurance verification."],
  ["Real Estate", "Fast property-enquiry qualification, buyer and investor follow-up, viewing appointments, launch campaigns, nurturing and CRM updates."],
  ["Education & Training", "Course follow-ups, counselling, admissions support, webinar invitations, fee reminders, alumni engagement and satisfaction surveys."],
  ["Ecommerce & Retail", "Order confirmation, delivery verification, cart recovery, recommendations, returns support, loyalty calls and promotional offers."],
  ["Financial Services", "Structured lead qualification, policy renewals, loan enquiries, verification, appointment scheduling, service and account follow-up."],
  ["Hospitality & Tourism", "Reservation confirmation, booking support, event invitations, guest feedback, loyalty programmes and promotional campaigns."],
  ["B2B Businesses", "Professional prospecting, decision-maker qualification, appointment setting, product demonstrations, account-based calling and pipeline follow-up."],
  ["Government & Public Services", "Organised information, survey, awareness, verification, scheduling and community outreach campaigns."],
] as const;

const features = [
  "Cold and warm lead calling", "Prospect qualification", "Lead generation",
  "Appointment booking", "Sales and quotation follow-ups", "Product promotions and renewals",
  "Customer service", "Call answering and routing", "Enquiry and booking support",
  "Complaint resolution", "CRM updates and activity logging", "Lead-status and opportunity tracking",
  "Contact verification", "Pipeline and meeting support", "Customer reactivation",
  "Upselling and cross-selling", "Satisfaction surveys", "Feedback and retention calls",
  "Referral and loyalty campaigns", "Daily, weekly and monthly reporting", "Lead and appointment reports",
  "Conversion and KPI dashboards", "Call monitoring and quality scoring", "Script and data-privacy compliance",
  "Call-recording management", "Performance coaching",
] as const;

const process = [
  ["Discovery & Campaign Planning", "We define business goals, products, target audience, customer journey, sales objectives and campaign KPIs."],
  ["Script Development", "Brand-aligned scripts cover introductions, qualification questions, value propositions, objections, closing statements and calls to action while keeping conversations natural."],
  ["CRM & Campaign Setup", "Customer lists, integrations, outcomes, lead categories, dashboards and performance measures are configured before calling begins."],
  ["Call Execution", "Experienced telecallers handle outreach, qualification, appointments, support, surveys, sales conversations and follow-ups using approved workflows."],
  ["Quality Assurance", "Call quality, communication, script adherence, customer experience, information accuracy and compliance are monitored with continuous coaching."],
  ["Reporting & Insights", "Regular reporting covers call volume, connection and qualification rates, appointments, sales outcomes, feedback and agreed KPIs."],
  ["Continuous Optimisation", "Customer feedback, performance data, sales results, script effectiveness, lead quality and market trends guide ongoing improvements."],
] as const;

const technology = [
  ["CRM Platforms", "Zoho CRM, HubSpot, Salesforce, Microsoft Dynamics 365, Pipedrive and Freshsales organise leads and customer interactions."],
  ["Cloud Telephony", "Aircall, RingCentral, 3CX, Dialpad and CloudTalk support flexible routing, recording, analytics and remote collaboration."],
  ["Smart Dialling", "Auto, power, predictive and progressive diallers increase agent productivity and reduce idle time."],
  ["Quality Monitoring", "Call recording, live monitoring, whisper coaching, scorecards and evaluations keep customer experiences consistent."],
  ["Reporting & Analytics", "Real-time dashboards, call analytics, agent reports, conversion metrics, appointment tracking and KPI monitoring provide visibility."],
  ["AI-Assisted Workflows", "Transcription, summaries, sentiment analysis and workflow automation improve efficiency while trained professionals retain oversight."],
] as const;

const reasons = [
  ["Experienced Professionals", "Agents are trained in B2B and B2C engagement, qualification, appointment setting, support, renewals, follow-ups and feedback collection."],
  ["Tailored Calling Strategies", "Industry, sales objectives, customer journey, audience, offering and campaign goals shape every programme."],
  ["CRM-Driven Operations", "Accurate records, lead statuses, scheduled follow-ups, call outcomes and opportunity reporting keep sales teams informed."],
  ["Quality & Performance Monitoring", "Monitoring, script reviews, evaluations, customer-experience checks and coaching protect service standards."],
  ["Scalable Solutions", "Flexible engagement models support short campaigns, dedicated teams, startups, SMEs, multi-location businesses and enterprises."],
  ["Transparent Reporting", "Calls, contact rates, leads, appointments, conversions, feedback, productivity and overall performance remain visible."],
  ["Sales-Team Collaboration", "Qualified leads are handed over promptly, records stay current and actions are scheduled without delay."],
  ["End-to-End Business Support", "Telecalling can connect with our acquisition, brand, product and technology teams for one coordinated customer journey."],
] as const;

const costFactors = [
  "Number of agents required", "Campaign duration", "Call volume",
  "Inbound or outbound services", "Working hours", "Multilingual requirements",
  "CRM integration", "Reporting requirements", "Script development",
  "Industry complexity", "Quality assurance requirements", "Performance KPIs",
] as const;

const faqs = [
  ["What telecalling services do you provide?", "We offer outbound and inbound calling, lead generation, appointment setting, telesales, customer support, follow-ups, surveys, CRM verification and retention campaigns."],
  ["Can your team work with our CRM?", "Yes. We can work with leading platforms including Zoho CRM, HubSpot, Salesforce, Microsoft Dynamics 365, Pipedrive and Freshsales."],
  ["Do you provide both B2B and B2C telecalling?", "Yes. We support business-to-business and business-to-consumer campaigns across a wide range of industries."],
  ["Can you qualify leads before passing them to our sales team?", "Yes. Agents apply your qualification criteria, identify genuine prospects and verify decision-makers before a timely sales-team handoff."],
  ["Do you offer appointment-setting services?", "Yes. We schedule consultations, demonstrations, sales meetings, virtual appointments and site visits so sales teams can focus on closing."],
  ["How do you ensure quality during calls?", "Campaigns can include monitoring, performance reviews, script-compliance checks, scoring and ongoing coaching to maintain consistent standards."],
  ["Can you support multilingual campaigns?", "Yes. Subject to scope and language requirements, multilingual agents can help engage diverse customer segments."],
  ["Will I receive campaign reports?", "Yes. Reports can cover call activity, lead qualification, appointments, conversion metrics, feedback and overall campaign performance."],
  ["Can telecalling be combined with digital marketing campaigns?", "Yes. It works particularly well with Google Ads, Meta Ads, email and CRM automation by following up enquiries and nurturing leads."],
  ["Can you provide a dedicated telecalling team for my business?", "Yes. Flexible models include dedicated agents and fully managed teams based on campaign size, working hours and operational requirements."],
] as const;

const config: SingleServicePageConfig = {
  pageUrl,
  serviceName: "Telecalling Services in Dubai",
  serviceTypes: ["Outbound telecalling", "Inbound call handling", "Lead generation", "Appointment setting", "Telesales", "Customer support", "Customer retention"],
  breadcrumbName: "Telecalling Services Company Dubai",
  hero: {
    title: "Telecalling Services Company in Dubai",
    description: "Turn every conversation into a business opportunity. Webtek Digital provides professional inbound and outbound telecalling that generates qualified leads, books appointments, supports customers and builds stronger relationships.",
    primaryCta: "Book a Free Consultation",
    secondaryCta: "Request a Custom Telecalling Proposal",
    note: "Tell us about your business goals, target audience and calling requirements. Our specialists will recommend a solution tailored to your sales and customer-service objectives.",
  },
  intro: {
    eyebrow: "Real conversations, measurable outcomes",
    title: "Why telecalling still delivers results",
    items: [
      "While digital marketing attracts attention, personal conversations build trust. Telecalling helps qualify leads, understand needs and move prospects through the sales pipeline.",
      "A skilled calling team increases appointments and conversions, reduces missed opportunities, re-engages customers and gathers valuable feedback.",
      "Our approach combines structured call processes, CRM integration, skilled communication and quality assurance so every interaction represents your brand professionally.",
      <>Create a connected acquisition journey with <Link href="/our-services/google-ads-performance-marketing-company-dubai">Google Ads</Link>, <Link href="/our-services/seo-online-reputation-management-company-dubai">SEO and reputation management</Link> and <Link href="/our-services/social-media-management-marketing-company-dubai">social media marketing</Link>.</>,
    ],
  },
  services: { eyebrow: "From first contact to retention", title: "Comprehensive telecalling services", items: services, images: serviceImages, ctaLead: "Need a focused calling campaign or dedicated team?", ctaLabel: "Tell us about your targets" },
  outcomes: { title: "How professional telecalling drives business growth", description: "Direct conversations build trust, answer objections and accelerate decisions. Structured campaigns turn those interactions into measurable sales and customer-experience outcomes.", items: outcomes },
  industries: { eyebrow: "Conversations shaped for every customer", title: "Telecalling solutions for different industries", description: "Customer expectations and buying journeys differ by sector. We tailor scripts, workflows, qualification and reporting to your business model.", items: industries, labels: ["Healthcare", "Real estate", "Education", "Ecommerce", "Financial", "Hospitality", "B2B", "Public sector"], images: serviceImages.slice(0, 8) },
  features: { eyebrow: "A complete managed campaign", title: "Telecalling features & deliverables", items: features },
  process: { eyebrow: "Organised, measurable and accountable", title: "Our telecalling process", items: process },
  technology: { eyebrow: "Connected systems, accurate reporting", title: "Telecalling technologies & CRM platforms", description: "Reliable CRM, cloud telephony, dialling and quality tools create efficient workflows, consistent conversations and clear campaign visibility.", image: { src: "/about/about-11.jpg", alt: "CRM dashboard and cloud telephony workflow for a Dubai telecalling campaign" }, items: technology },
  reasons: {
    eyebrow: "An extension of your team",
    title: "Why choose Webtek Digital for telecalling services?",
    items: reasons,
    footer: <>Support the complete customer journey with <Link href="/our-services/website-design-development-company-dubai">website development</Link>, <Link href="/our-services/mobile-app-development-company-dubai">mobile apps</Link>, <Link href="/our-services/ui-ux-design-company-dubai">UI/UX design</Link>, <Link href="/our-services/branding-pr-company-dubai">branding and PR</Link>, <Link href="/our-services/google-ads-performance-marketing-company-dubai">performance marketing</Link> and <Link href="/our-services/graphic-design-video-editing-company-dubai">campaign creative</Link>.</>,
  },
  cost: {
    title: "How much do telecalling services cost in Dubai?",
    description: "Investment depends on objectives, volume, complexity and support level. An appointment campaign has a different operational scope from dedicated inbound support or multilingual outbound sales.",
    buttonLabel: "Request a Custom Telecalling Proposal",
    factorsLabel: "Main factors that influence pricing",
    factors: costFactors,
    note: "After an initial consultation, we prepare a customised proposal outlining campaign scope, deliverables, timeline, operating model and pricing.",
  },
  conversion: {
    eyebrow: "Ready to improve engagement and sales?",
    title: "Start with a free telecalling consultation.",
    description: "We will review your sales and communication process, identify opportunities and recommend a telecalling model aligned with your business.",
    benefits: ["Business needs assessment", "Campaign strategy discussion", "Qualification-process review", "Sales-funnel analysis", "CRM workflow evaluation", "Script recommendations", "KPI and reporting framework", "Implementation roadmap"],
    requirementLabel: "Telecalling requirement",
    requirementName: "Telecalling requirement",
    requirementPlaceholder: "Tell us about your audience, campaign goals, call volume, languages and current sales workflow",
    buttonLabel: "Book Your Free Consultation",
  },
  faq: { eyebrow: "The practical details", title: "Frequently asked questions", items: faqs },
  finalCta: {
    eyebrow: "Professional, personal and results-driven",
    title: "Let’s turn more conversations into customers.",
    body: "From a focused appointment-setting campaign to dedicated outbound sales or inbound support, our specialists are ready to help your business communicate and grow with confidence.",
    label: "Talk to a Telecalling Expert",
  },
};

export default function Page() {
  return <SingleServicePage config={config} />;
}
