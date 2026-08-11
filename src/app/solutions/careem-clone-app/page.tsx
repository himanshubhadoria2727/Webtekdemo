import type { Metadata } from "next";
import { CloneAppTemplate, type CloneAppTemplateConfig } from "../../components/solutions/CloneAppTemplate";

export const metadata: Metadata = {
  title: "Careem Clone App Development Dubai | Webtek Digital",
  description: "Build a scalable Careem-style ride-hailing app in Dubai with passenger, captain, fleet and admin solutions developed by Webtek Digital.",
};

const config: CloneAppTemplateConfig = {
  eyebrow: "Ride-hailing and mobility platform development",
  title: "Careem Clone App Development in Dubai",
  lead: "Build a modern ride-hailing platform tailored to your market, operating model and commercial goals. We develop scalable, independently branded mobility solutions for passengers, captains, fleet operators and administrators.",
  primaryCta: "Discuss Your App",
  secondaryCta: "Request a Consultation",
  heroImage: "/solutions/careem/careem app.png",
  heroImageAlt: "Careem clone app development solution for ride-hailing businesses in Dubai",
  overview: ["A Careem-style platform is more than a passenger booking application. It is an operational system that coordinates ride requests, captain availability, vehicle allocation, location data, payments, customer service and business reporting in real time.", "Webtek Digital develops every component around your service categories, operating areas, fleet structure, pricing rules and customer journey. The result is an original mobility platform—not a reproduction of Careem’s proprietary product—built for your brand and commercial requirements."],
  metrics: [["4", "connected user experiences"], ["1", "central operations dashboard"], ["UAE + GCC", "ready for regional growth"]],
  features: [
    ["On-demand ride booking", "GPS pickup detection, destination search, vehicle selection, fare estimates, scheduled requests, ride notes and booking confirmation."],
    ["Real-time matching and dispatch", "Match requests with eligible captains using proximity, availability, service category, priority and zone-based operating rules."],
    ["Live trip tracking", "Give passengers arrival updates and live route progress while authorised teams monitor active trips and support escalations."],
    ["Flexible fare management", "Configure base, distance, duration, category, airport, toll, waiting-time, cancellation and approved demand-based pricing rules."],
    ["Safety and verification", "Support OTP, document and vehicle checks, trip sharing, emergency assistance, incident reporting and internal escalation workflows."],
    ["Corporate and scheduled travel", "Offer company profiles, cost centres, central billing, advance bookings, airport workflows and configurable travel policies."],
  ],
  modules: [
    { number: "01", label: "Passenger app", title: "Simple booking from pickup to payment.", text: "Passengers can register securely, search by map, save places, compare ride categories, view fare and arrival estimates, schedule rides, track captains, pay by card, wallet or cash, share trips and manage receipts, ratings and support.", image: "/solutions/careem/UI:UX interface.png", alt: "Passenger ride booking application interface" },
    { number: "02", label: "Captain app", title: "Clear ride tasks, navigation and earnings visibility.", text: "Approved captains can manage availability, receive and accept ride requests, navigate to pickup, update trip status, share location, review payment status and monitor earnings, incentives, documents and performance.", image: "/solutions/careem/careem-delivery-rider.png", alt: "Captain ride request and navigation application interface" },
    { number: "03", label: "Fleet management portal", title: "Operational control for vehicles and driver groups.", text: "Fleet managers can onboard captains and vehicles, maintain permits and insurance records, assign drivers, monitor availability, review utilisation and earnings, and manage compliance, maintenance and settlements.", image: "/solutions/careem/careem-backend-dashboard.png", alt: "Fleet management portal for ride-hailing operations" },
    { number: "04", label: "Admin dashboard", title: "Central oversight across the entire platform.", text: "Authorised teams can manage passengers, captains, fleets, vehicles, active rides, dispatch, geofences, fares, payments, support, safety cases, campaigns, permissions, reports and audit history.", image: "/solutions/careem/careem-backend-dashboard.png", alt: "Ride-hailing administration and dispatch dashboard" },
  ],
  technologyLead: "Ride-hailing platforms process location updates, time-sensitive ride events, payments and high volumes of user interactions. The final architecture is confirmed after discovery, with reliability, data protection, performance and future expansion built into the plan.",
  technologyImage: "/solutions/careem/technology-stack-ecosystem-all-logos.png",
  technologyImageAlt: "Scalable technology stack for a ride-hailing application",
  technologyTags: ["Flutter or React Native", "Swift and Kotlin", "React and Next.js", "Node.js / Laravel / Python", "REST or GraphQL APIs", "PostgreSQL / MySQL / MongoDB", "AWS / Google Cloud / Azure", "Google Maps and geocoding", "Payments, SMS and push notifications", "Analytics and CRM integrations"],
  process: [
    ["Discovery", "Document the business model, users, cities, fleet structure, pricing, regulatory dependencies and initial priorities."],
    ["Research and planning", "Organise passenger expectations, captain workflows, technical constraints and features into a practical first release and roadmap."],
    ["UX and UI design", "Map flows for passengers, captains, fleet managers, dispatchers, support staff and administrators before creating the visual system."],
    ["Technical development", "Build the mobile applications, portals, dashboard, APIs, database and real-time services in planned stages."],
    ["Integrations", "Connect mapping, payment, communications, analytics, identity, support and approved business systems."],
    ["Quality assurance", "Test booking, location, payment, performance, usability, compatibility and access-control journeys before launch."],
    ["Launch preparation", "Configure production, app listings, analytics events, support processes and release settings for a controlled launch."],
    ["Ongoing support", "Support monitoring, issue resolution, security updates, reporting and future enhancements as the operation evolves."],
  ],
  detailSections: [
    { eyebrow: "Advanced capabilities", title: "Designed for real-world mobility operations.", intro: "Advanced capabilities can be introduced in the first release or through a phased roadmap according to demand, budget and operational readiness.", items: [["Scheduled and multi-stop rides", "Apply booking windows, assignment logic, reminders, route sequencing and fare updates."], ["Airport and venue operations", "Configure pickup points, queues, holding areas, surcharges and operating instructions."], ["Wallets, subscriptions and loyalty", "Manage promotional credit, refunds, prepaid balances, memberships, referrals and rewards."], ["Demand and supply insights", "Monitor booking demand, captain availability, acceptance, cancellations, zones and peak periods."], ["Arabic and multi-currency", "Prepare English, Arabic RTL and additional local formats and currencies for relevant markets."], ["Delivery extension", "Add item collection, last-mile delivery or courier workflows where they form part of the roadmap."] ] },
    { eyebrow: "Industries and use cases", title: "One mobility foundation, multiple operating models.", intro: "The underlying booking, dispatch, tracking and payment capabilities can support different transport categories when every workflow is designed around the people, vehicles and compliance requirements involved.", items: [["Taxi and ride-hailing", "Digital booking, dispatch, live tracking and central reporting for city-based transport."], ["Limousine and chauffeur", "Premium bookings, scheduled rides, airport transfers and corporate-client management."], ["Corporate and hospitality transport", "Policy-controlled travel, central billing, concierge bookings and account reporting."], ["Healthcare, school and staff transport", "Scheduled journeys and attendance workflows where appropriate and legally permitted."], ["Event and accessible transport", "Designated pickup zones, demand planning and mobility-requirement capture."], ["Intercity and courier services", "Pre-booked routes, vehicle selection, collection, tracking and proof-of-delivery workflows."]] },
    { eyebrow: "Why Webtek Digital", title: "Built around your mobility model—not a copied template.", intro: "We plan and develop original branded experiences for the operational model you are building, rather than forcing your business into a generic script.", items: [["Custom development", "Tailored to your service categories, locations, operating model and brand."], ["Complete user ecosystem", "Passenger and captain apps, fleet portal, admin dashboard, APIs and web experiences."], ["UAE and GCC relevance", "Plan for Arabic interfaces, local payments, airport transfers and location-specific rules."], ["Marketing-first thinking", "Consider conversion tracking, acquisition, retention and campaign landing pages during planning."], ["Scalable architecture", "Prepare for more users, captains, fleets, cities, services and integrations."], ["End-to-end capability", "Strategy, UX, development, integrations, launch, analytics, marketing and ongoing support."]] },
    { eyebrow: "Project investment", title: "How much does a Careem clone app cost?", intro: "Investment depends on the applications required, operational model and functionality. A focused booking solution for one transport company has different requirements from a multi-city marketplace with independent captains and fleet partners.", items: [["Product scope", "Passenger, captain, fleet, administrator and corporate interfaces; iOS, Android and responsive web requirements."], ["Operational complexity", "Ride categories, dispatch, matching, zones, fares, scheduling, safety and support workflows."], ["Integrations", "Maps, payments, wallets, settlements, identity, document checks and existing business systems."], ["Market readiness", "Languages, currencies, operating markets, data migration, analytics, security, testing and store preparation."]] },
  ],
  faqs: [
    ["What is a Careem clone app?", "It is an independently developed ride-hailing or mobility platform based on the general business model, usually with passenger and captain apps, an admin dashboard, and optional fleet or corporate tools. It should use original branding, design, source code and content."],
    ["Can Webtek Digital build a custom Careem-style app in Dubai?", "Yes. The apps, dispatch workflow, ride categories, pricing rules, operating zones and integrations can be tailored for a proposed service model in Dubai, the UAE and wider markets."],
    ["Can the platform support multiple cities and vehicle categories?", "Yes. It can support multiple zones, cities, vehicle types, ride categories and pricing structures, subject to operational capacity and local requirements."],
    ["Can passengers schedule rides and track captains live?", "Yes. Scheduled booking can use configurable windows and allocation rules, while live tracking can show captain arrival and active-trip progress."],
    ["Which payment methods can be included?", "Subject to provider capability and merchant eligibility, options can include cards, Apple Pay, Google Pay, cash, account credit, corporate billing and wallets."],
    ["Can the platform support Arabic?", "Yes. English and Arabic interfaces, including right-to-left layouts, can be developed alongside additional languages where required."],
    ["Can I manage my own drivers and vehicles?", "Yes. The fleet portal can manage captain records, assignments, expiry records, vehicle status, performance and settlements."],
    ["Is it legal to develop a Careem clone app?", "An original platform can follow the general ride-hailing model, but it must not copy Careem’s code, designs, content or trademarks, or imply affiliation. Independent legal and regulatory advice is recommended before launch."],
  ],
  cta: { eyebrow: "Build the mobility platform your market needs.", title: "Let’s discuss the platform you want to build.", body: "Tell us about your target locations, fleet model, service categories and commercial objectives. We will help define the passenger, captain, fleet and administration experiences required to move the project forward.", href: "mailto:info@webtekdigital.com?subject=Careem clone app development consultation" },
};

export default function Page() { return <CloneAppTemplate config={config} />; }
