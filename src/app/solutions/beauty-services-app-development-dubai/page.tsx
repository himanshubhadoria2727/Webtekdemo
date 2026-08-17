import type { Metadata } from "next";
import { CloneAppTemplate } from "../../components/solutions/CloneAppTemplate";
import { createStandardSolutionConfig } from "../../components/solutions/StandardSolutionPage";

const pageUrl = "https://www.webtekdigital.com/solutions/beauty-services-app-development-dubai/";

export const metadata: Metadata = {
  title: "Beauty Services App Development Dubai | Webtek Digital",
  description: "Build a custom beauty services app in Dubai with service discovery, appointment booking, professional schedules, payments and admin tools.",
  keywords: [
    "beauty services app development Dubai",
    "salon app development Dubai",
    "beauty booking app UAE",
    "salon appointment app development",
    "spa booking app Dubai",
    "home beauty services app",
    "beauty marketplace app",
    "salon management software UAE",
    "beautician booking app",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Beauty Services App Development Dubai | Webtek Digital",
    description: "Custom beauty booking, professional scheduling and salon operations applications for Dubai and the UAE.",
    url: pageUrl,
    type: "website",
  },
};

const config = createStandardSolutionConfig({
  endAfterProcess: true,
  eyebrow: "Beauty and salon booking platform",
  title: "Beauty Services App Development in Dubai",
  lead: "Create a premium digital booking experience for clients while giving your salon, spa or beauty marketplace practical control over appointments, professionals, payments and customer relationships. We build custom platforms around the way your business operates.",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "Explore the Solution",
  heroImage: "/solutions/beauty/beauty-services-app-hero.png",
  heroImageAlt: "Beauty services app development for salons and appointment-based businesses in Dubai",
  overview: [
    "A beauty-services platform connects clients, professionals, salon teams, appointments, payments and customer care through one refined digital experience. Clients need to discover the right service and book confidently, while professionals and managers need clear schedules, capacity controls and practical business insight.",
    "We design each component around your service catalogue, team structure, locations, appointment duration, room or equipment requirements, payment rules and existing systems. The result is more than a calendar inside an app: it is a complete service journey spanning discovery, consultation, booking, reminders, arrival, completion, rebooking, reviews and aftercare.",
  ],
  metrics: [
    ["3", "connected client, professional and administrator experiences"],
    ["1", "coordinated service, schedule, appointment and payment system"],
    ["24/7", "service discovery, booking and appointment access"],
  ],
  features: [
    ["Service discovery", "Help clients find the right treatment through organised categories, profiles, descriptions, prices and availability.", ["Search, filters and service collections", "Treatment details, duration, packages and add-ons", "Professional profiles and specialisms", "Branch or home-service availability, galleries and reviews"]],
    ["Simple appointments", "Make booking clear while protecting staff time, room capacity and business rules.", ["Real-time availability", "Professional or automatic assignment", "Branch, location and home-service address selection", "Deposits, payments, gift cards, rescheduling and cancellation"]],
    ["Professional schedules", "Give each professional a focused view of working hours, appointments and daily actions.", ["Availability, shifts and personal calendar", "Client notes and service details", "Breaks, blocked time, leave and absence", "Service status, earnings and commission visibility"]],
    ["Client accounts", "Give clients a secure place to manage details, preferences, appointments and benefits.", ["Profile, contact and saved-location management", "Upcoming and past appointments", "Rescheduling, cancellation and rebooking", "Favourites, loyalty, wallet and memberships"]],
    ["Offers and retention", "Create controlled campaigns that support acquisition, rebooking and client value.", ["Discount codes and service packages", "Membership and referral benefits", "Birthday, milestone and first-booking offers", "Loyalty credits and campaign rules"]],
    ["Beauty business insights", "Provide authorised teams with visibility across appointments, utilisation, revenue and retention.", ["Booking and revenue trends", "Service and professional performance", "Capacity, utilisation and booking value", "Retention, promotion, cancellation and no-show reports"]],
  ],
  modules: [
    {
      number: "01",
      label: "Client app",
      title: "A more personal way to book self-care.",
      text: "A mobile-first iOS and Android journey designed for service discovery, confidence and convenient rebooking, shaped around your brand and client expectations.",
      image: "/solutions/beauty/beauty-customer-booking-app.png",
      alt: "Client browsing beauty treatments and booking an appointment",
      bullets: ["Service browsing, filters, treatment details and prices", "Professional profiles, branches and real-time availability", "Deposits, payments, gift cards and appointment reminders", "Booking history, favourites, loyalty, reviews and support", "English, Arabic and right-to-left interfaces"],
    },
    {
      number: "02",
      label: "Beauty professional app",
      title: "Keep every appointment organised.",
      text: "Professionals receive a focused view of their workday, services, client preferences, location information and permitted notes without exposure to unrelated business data.",
      image: "/solutions/beauty/beautician-service-provider-app.png",
      alt: "Beauty professional reviewing appointments and client details",
      bullets: ["Personal calendar, day view and availability", "Appointment details, service duration and client notes", "Breaks, blocked time, leave and schedule changes", "Home-service navigation where required", "Commission, earnings, notifications and incident reporting"],
    },
    {
      number: "03",
      label: "Beauty operations dashboard",
      title: "Run the entire beauty operation in one place.",
      text: "Give owners, managers, reception, finance and marketing teams an appropriately permissioned view of services, professionals, clients, branches, appointments and payments.",
      image: "/solutions/beauty/beauty-admin-dashboard.png",
      alt: "Beauty salon operations dashboard showing appointments and business performance",
      bullets: ["Services, prices, durations, skills and schedules", "Branches, rooms, equipment and appointment controls", "Clients, deposits, payments, refunds and support", "Packages, memberships, promotions and loyalty", "Permissions, commissions, reports and audit history"],
    },
    {
      number: "04",
      label: "Optional provider portal",
      title: "Support approved marketplace providers.",
      text: "Let salons, spas and professionals manage profiles, services, schedules and bookings while the platform owner retains central commercial and quality oversight.",
      image: "/solutions/talabat/Manage the entire marketplace in one place..png",
      alt: "Beauty services marketplace provider portal",
      bullets: ["Provider onboarding and approval", "Business, licensing and banking records", "Service, price, professional and schedule controls", "Commissions, settlements, promotions and ratings"],
    },
  ],
  technologyLead: "We select the architecture according to your commercial goals, existing systems, integration requirements, security considerations and long-term roadmap so the platform remains responsive as services, clients, branches and appointment volume grow.",
  technologyImage: "/solutions/beauty/beauty-app-technology-stack.png",
  technologyImageAlt: "Modern technology stack for beauty services app development",
  technologyTags: ["Flutter", "React Native", "Swift", "Kotlin", "React & Next.js", "Node.js", "Laravel", "REST & GraphQL", "PostgreSQL", "Cloud infrastructure", "Payment gateways", "Salon POS & CRM", "Maps & calendars", "Messaging & loyalty"],
  process: [
    ["Discovery and strategy", "Document the business model, services, branches, clients, professional roles, scheduling rules, payments, systems and growth objectives.", "A shared definition of the proposed beauty services platform and its commercial requirements."],
    ["Research and planning", "Evaluate client expectations, competitor conventions, appointment workflows, capacity rules, integrations and constraints.", "A prioritised scope, architecture recommendation and delivery roadmap."],
    ["UX and UI design", "Map service discovery, professional selection, booking, payment, schedule and administration journeys before creating branded interfaces.", "An approved design system and interactive prototype."],
    ["Technical development", "Build the client app, professional tools, operations dashboard, APIs, databases and approved integrations in planned stages.", "A working platform based on the agreed scope."],
    ["Services and integrations", "Configure approved service structures, durations, prices and scheduling rules, then connect selected business systems.", "Coordinated platform content and third-party functionality."],
    ["Quality assurance", "Test functionality, usability, booking, payment, schedules, access controls, APIs, devices and performance.", "A stable release candidate for controlled review."],
    ["Launch preparation", "Configure production environments, app-store listings, analytics, conversion events and support processes.", "A production-ready beauty services platform."],
    ["Ongoing support", "Arrange monitoring, issue resolution, updates, reporting and future enhancements as required.", "Continued technical support as the platform evolves."],
  ],
  detailSections: [
    {
      eyebrow: "Advanced capabilities",
      title: "More than a basic appointment application.",
      intro: "Choose the capabilities that suit your operating model and first-release priorities, then expand the platform as your beauty business grows.",
      items: [
        ["Personalised service discovery", "Surface relevant services, professionals or packages using permitted profile and booking data while preserving client choice and privacy."],
        ["Loyalty and memberships", "Support points, tiers, credits, member pricing, paid memberships and other approved benefits."],
        ["Recurring appointments", "Enable repeat schedules, reminders, pauses, renewals and flexible client management."],
        ["Home-service booking", "Coordinate addresses, professional travel time, service zones, fees and location updates."],
        ["Multi-language and currency", "Support English, Arabic, right-to-left interfaces, market-specific content and approved currency rules."],
        ["Gift cards and digital wallet", "Allow clients to purchase or redeem gift cards, receive store credit and manage promotional balances."],
        ["Packages and add-ons", "Create treatments, packages, add-ons and upgrades with transparent pricing, duration and professional requirements."],
        ["Corporate and hospitality accounts", "Support organisations, hotels and events with advance booking, account contacts, payment terms and reporting."],
        ["Multi-provider marketplace", "Coordinate salons, spas and professionals, including commissions, bookings, settlements and quality controls."],
        ["Consultation and consent", "Collect approved intake information, consent records and aftercare acknowledgements where required."],
        ["AI-assisted service features", "Apply carefully reviewed tools to search, support, scheduling suggestions or reporting while keeping client-impacting decisions under human oversight."],
      ],
    },
    {
      eyebrow: "Business benefits",
      title: "Build a stronger direct booking channel.",
      intro: "A purpose-built application can complement your booking website, reception team and selected marketplaces while giving you greater control over capacity, payments and client relationships.",
      items: [
        ["Increase booking conversion", "Clear services, live availability, transparent prices and focused checkout reduce friction for high-intent clients."],
        ["Strengthen retention", "Reminders, loyalty, saved favourites and simple rebooking support responsible repeat appointments."],
        ["Increase booking value", "Packages, add-ons, memberships and relevant recommendations can increase value without confusing clients."],
        ["Build brand recognition", "Create a consistent owned experience across discovery, booking, service delivery, aftercare and support."],
        ["Improve capacity visibility", "Dashboards reveal bookings, professional utilisation, demand, cancellations, no-shows and revenue."],
        ["Reduce administration", "Connected schedules, payments, reminders and reporting reduce reliance on calls, messages and spreadsheets."],
        ["Improve client experience", "Provide consistent information, confirmations, reminders and account access before and after appointments."],
        ["Own client relationships", "First-party accounts and permitted data provide more control than third-party marketplaces alone."],
        ["Scale with control", "Add services, branches, professionals, rooms, locations and integrations through modular architecture."],
      ],
    },
    {
      eyebrow: "Features and deliverables",
      title: "What your beauty services application can include.",
      intro: "Final deliverables are defined during discovery and documented in the approved scope. Every engagement is structured around what the business and first release actually require.",
      items: [
        ["Client-facing deliverables", "Branded iOS, Android and responsive booking experiences designed around the approved services and client journey.", ["Account, service, calendar, checkout and status journeys", "Favourites, loyalty, packages or memberships according to scope", "English, Arabic and right-to-left layouts where approved"]],
        ["Salon administration", "Secure tools for authorised teams to maintain services, schedules, clients and settings.", ["Service, price, duration and appointment controls", "Professional, branch and resource scheduling", "Promotions, support, permissions and reports"]],
        ["Service catalogue and content", "Agreed structures and content models configured around client-supplied service data.", ["Categories, durations, add-ons and resource rules", "Sample or agreed service population", "Images, professional information, SEO fields and import guidance"]],
        ["Integration deliverables", "Approved connections documented with dependencies and failure-handling requirements.", ["Payments, calendars and mapping services", "CRM, salon POS or accounting systems where compatible", "Email, SMS, push, analytics and marketing platforms"]],
        ["Quality and launch", "Review agreed journeys across supported devices and environments.", ["Functional, usability, booking and payment testing", "Role and access-control review", "Deployment and app-store submission assistance where included"]],
        ["Documentation and handover", "Practical materials for authorised administrators and technical stakeholders.", ["Administration and deployment guidance", "Integration, dependency and analytics references", "Source-code and access handover according to contract"]],
        ["Optional ongoing support", "A separate maintenance arrangement can keep the released platform healthy.", ["Monitoring and issue resolution", "Security, dependency and compatibility updates", "Performance review and planned enhancements"]],
      ],
    },
    {
      eyebrow: "Industries and use cases",
      title: "Flexible booking for beauty and wellness businesses.",
      intro: "The same platform foundation can be shaped around different services, professional roles, capacity rules and client expectations.",
      items: [
        ["Hair salons", "Cuts, colour, styling, consultations, variable durations, preferred stylists and repeat bookings."],
        ["Beauty salons", "Brows, lashes, waxing, facials and combined appointments across professionals and rooms."],
        ["Nail studios", "Service combinations, technicians, station capacity, add-ons, memberships and frequent rebooking."],
        ["Barbershops and grooming", "Fast booking, preferred barbers, walk-in visibility, memberships and recurring routines."],
        ["Spas and wellness centres", "Treatments, therapists, rooms, facilities, packages, gift cards and premium communication."],
        ["Home beauty services", "Professionals, travel time, service areas, location fees, addresses and live status."],
        ["Freelance professionals", "An individual branded channel with availability, deposits, client records and income visibility."],
        ["Multi-branch salon groups", "Centralised brand and reporting with branch-specific services, teams, prices and schedules."],
        ["Franchise networks", "Controlled templates, permissions and reporting across independently operated locations."],
        ["Aesthetic and wellness clinics", "Consultation-led appointments and carefully governed information subject to applicable requirements."],
        ["Hotels and hospitality", "Selected on-site, guest or in-room beauty and wellness booking journeys."],
        ["Multi-provider marketplaces", "Approved businesses and professionals with central commissions, settlements and service standards."],
      ],
    },
    {
      eyebrow: "Why Webtek Digital",
      title: "Built around your beauty business—not a generic template.",
      intro: "Strategy, experience design, technology and growth planning come together in one structured beauty-services engagement.",
      items: [
        ["Custom development", "Tailored to your services, schedules, professionals, locations, systems and brand."],
        ["Complete booking ecosystem", "Client apps, booking sites, professional tools, dashboards, provider portals and APIs."],
        ["Marketing-first thinking", "Discovery, conversion, retention, analytics, attribution and campaign journeys considered during planning."],
        ["UAE and GCC relevance", "Arabic interfaces, regional payments, local appointment expectations, VAT and market-specific content."],
        ["Scalable architecture", "Structured for more services, clients, branches, professionals, providers, markets and integrations."],
        ["UX-focused design", "Interfaces organised around real client, professional and administrative tasks."],
        ["Transparent management", "Requirements, responsibilities, reviews and change requests documented throughout delivery."],
        ["Quality assurance", "Discovery, booking, payment, scheduling, reporting and administration reviewed before release."],
        ["End-to-end capability", "Support spanning strategy, branding, UI/UX, development, analytics, launch and growth."],
      ],
    },
    {
      eyebrow: "Project investment",
      title: "How much does a beauty services app cost?",
      intro: "Cost depends on the operating model, service range, required interfaces and scheduling complexity. After an initial consultation, we recommend a focused first-release scope and provide a tailored proposal—there are no generic fixed packages.",
      items: [
        ["Applications and platforms", "Client, professional, provider and administrator interfaces across iOS, Android and responsive web."],
        ["Services and booking", "Service range, durations, add-ons, media, scheduling, payment and capacity complexity."],
        ["Resources and locations", "Professional, room and equipment controls, branches, home-service zones, fees and travel time."],
        ["Client growth", "Loyalty, offers, packages, memberships, subscriptions, languages and currencies."],
        ["Marketplace requirements", "Provider onboarding, service control, commissions, settlements and separate operating rules."],
        ["Systems and assurance", "POS, CRM, calendar, payment, accounting, migration, analytics, security, testing and support."],
      ],
    },
    {
      eyebrow: "Free consultation",
      title: "Let’s discuss what you want to build.",
      intro: "Tell us about your services, clients, business model, professional workflow, scheduling rules and growth objectives. We will help define the right first release and practical next steps.",
      items: [
        ["Business and audience", "Revenue model, target clients, service locations, catalogue, durations and add-ons."],
        ["Operating model", "Single location, multi-branch group, home-service business, franchise or marketplace."],
        ["Operations", "Professionals, shifts, rooms, resources, booking, deposits, payments and cancellations."],
        ["Client growth", "Loyalty, packages, memberships, promotions, retention and support priorities."],
        ["Technology", "Required apps, dashboards, existing POS or CRM, data migration and third-party integrations."],
        ["Delivery plan", "Initial priorities, delivery approach, target launch period and next steps."],
      ],
    },
  ],
  faqTitle: "Beauty Services App Development FAQs",
  faqs: [
    ["What is a beauty services app?", "A beauty services app lets clients discover treatments, choose a location or professional, view availability, book and pay. A complete platform can also include professional scheduling, salon administration, provider management, loyalty and reporting."],
    ["Can Webtek Digital build a custom beauty services app in Dubai?", "Yes. We develop custom salon, spa and beauty booking applications for businesses in Dubai and across the UAE, tailored to services, branches, professionals, home-service models, payments and existing systems."],
    ["Can the app support one salon or multiple branches?", "Both models can be supported. Each branch may have separate services, prices, working hours, professionals, rooms and availability rules while retaining central visibility."],
    ["Can clients choose a specific beauty professional?", "Yes. Clients can view approved profiles, specialisms, ratings and available times, or the system can assign a suitable professional according to service, branch and capacity."],
    ["Can the app connect to our salon POS or CRM?", "Potentially. Integration depends on the selected system, API access, permissions and data quality. We assess services, clients, appointments, payments and reporting before confirming scope."],
    ["Can the platform manage staff shifts and leave?", "Yes. Schedules can include working hours, breaks, blocked time, leave, branch assignments and service eligibility according to approved operating rules."],
    ["Which payment methods can be included?", "Subject to provider and market eligibility, options may include cards, Apple Pay, Google Pay, local methods, deposits, pay-at-venue, gift cards, wallets or account terms."],
    ["Can the app support English and Arabic?", "Yes. English and Arabic interfaces can be developed with right-to-left support. Additional languages can be considered for the target market."],
    ["Can the platform support home beauty services?", "Yes. Home-service features can include addresses, service zones, travel time, location fees, professional assignment, navigation and appointment status according to the operating model."],
    ["Can the app support loyalty, packages and memberships?", "Yes. Points, tiers, packages, prepaid sessions, memberships, referral credits and personalised offers can be included according to approved rules and payment capabilities."],
    ["Can you build a multi-provider beauty marketplace?", "Yes. It can include client apps, provider portals, professional tools, central administration, commissions, settlements and separate service rules. Provider verification and quality control require careful planning."],
    ["Can clients reschedule or cancel appointments?", "Yes. Rescheduling and cancellation can follow configurable notice periods, deposit rules, professional availability and no-show policies, with clear terms shown before confirmation."],
    ["Can consultation forms and consent records be included?", "Yes, where appropriate. The platform can support approved intake questions, consent acknowledgement, notes and aftercare information. Sensitive workflows require additional privacy and regulatory review."],
    ["How long does beauty services app development take?", "The schedule depends on interfaces, scheduling complexity, design, integrations, home-service requirements, migration, testing and approval speed. A detailed timeline follows discovery."],
    ["Do you provide maintenance after launch?", "Yes. A separate support agreement can cover monitoring, issue resolution, compatibility, security and dependency updates, reporting and future development."],
    ["Will the app support Google Ads and Meta campaigns?", "Suitable landing pages, deep links and conversion events can be planned for analytics, attribution and campaign measurement, subject to platforms and consent requirements."],
    ["Will you copy another beauty-booking platform?", "No. The solution uses original branding, interface design and source code based on your requirements, without reproducing proprietary code or protected brand assets."],
    ["How do you protect client and payment data?", "Controls are selected according to scope and risk, including encrypted transport, role-based access, secure development practices, logging and approved payment-provider integration."],
  ],
  cta: {
    eyebrow: "Start your beauty services project",
    title: "Let’s make your client experience memorable.",
    body: "Tell us about your services, clients, professionals, locations, existing systems and growth objectives. We’ll help define the right client, professional and administration experiences.",
    href: "mailto:info@webtekdigital.com?subject=Beauty services app development enquiry",
  },
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Beauty Services App Development in Dubai",
      description: metadata.description,
      url: pageUrl,
      areaServed: ["Dubai", "United Arab Emirates", "GCC"],
      provider: { "@type": "Organization", name: "Webtek Digital", url: "https://www.webtekdigital.com/" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.webtekdigital.com/" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.webtekdigital.com/solutions/" },
        { "@type": "ListItem", position: 3, name: "Beauty Services App Development", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: config.faqs?.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <CloneAppTemplate config={config} />
    </>
  );
}
