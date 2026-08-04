import type { Metadata } from "next";
import { CloneAppTemplate, type CloneAppTemplateConfig } from "../../components/solutions/CloneAppTemplate";

export const metadata: Metadata = {
  title: "InstaShop Clone App Development Dubai | Webtek Digital",
  description: "Build a scalable InstaShop-style grocery delivery app in Dubai with customer, store, delivery and admin solutions developed by Webtek Digital.",
};

const config: CloneAppTemplateConfig = {
  eyebrow: "On-demand grocery platform",
  title: "InstaShop Clone App Development in Dubai",
  lead: "Launch a modern grocery delivery platform built around the way your business operates. Webtek Digital develops scalable InstaShop-style applications that connect customers, supermarkets, delivery teams and administrators through one coordinated digital ecosystem.",
  primaryCta: "Discuss Your App",
  secondaryCta: "Request a Consultation",
  heroImage: "/solutions/talabat/talabat.png",
  heroImageAlt: "InstaShop-style grocery delivery app development solution for businesses in Dubai",
  overview: [
    "An InstaShop-style platform is more than a customer-facing mobile application. It is a connected operational system that helps customers find nearby stores, order groceries and monitor deliveries while giving merchants and administrators the tools needed to manage the complete order journey.",
    "Webtek Digital develops each part of the platform around your commercial model, service locations, fulfilment processes and growth plans. The result is a unified solution that supports everyday transactions without compromising business control.",
  ],
  metrics: [["3+", "connected user applications"], ["1", "central administration system"], ["24/7", "ordering and operational accessibility"]],
  features: [
    ["Store marketplace", "Let customers explore nearby supermarkets and retailers, with dedicated storefronts, product categories, availability, promotions and ratings."],
    ["Fast checkout", "Keep the route from product selection to confirmed order simple with saved addresses, delivery slots, offers and secure payments."],
    ["Live order updates", "Give customers clear order, picking, driver-assignment and real-time delivery updates while reducing avoidable support queries."],
    ["Product substitution", "Let customers define replacement preferences when an item is unavailable, while store teams recommend suitable alternatives."],
    ["Scheduled delivery", "Support delivery dates and time slots that reflect store capacity, service locations and delivery availability."],
    ["Business analytics", "Monitor sales, order volume, active users, popular products, merchant performance, delivery times and customer behaviour."],
  ],
  modules: [
    { number: "01", label: "Customer app", title: "Groceries in a few clear steps.", text: "Give customers a convenient way to find local stores, browse products, manage their basket, select delivery and track every order. The experience can be developed for iOS, Android and responsive web ordering.", image: "/solutions/talabat/An intuitive experience that drives repeat orders..png", alt: "Customer grocery delivery application interface" },
    { number: "02", label: "Merchant portal", title: "Practical controls for store teams.", text: "Provide supermarket and retail teams with secure tools to manage products, availability, pricing, incoming orders, substitutions, promotions and store-level reporting.", image: "/solutions/talabat/Independent controls for every restaurant..png", alt: "Merchant portal for grocery order management" },
    { number: "03", label: "Delivery partner app", title: "Clear delivery tasks from collection to handover.", text: "Equip delivery partners with delivery requests, collection details, customer addresses, navigation, live status updates, proof of delivery and earnings history.", image: "/solutions/talabat/Keep delivery partners moving efficiently..png", alt: "Delivery partner application for grocery orders" },
    { number: "04", label: "Admin dashboard", title: "Central oversight across the platform.", text: "Manage customers, merchants, stores, orders, payments, delivery activity, refunds, promotions, support and business reporting through one secure dashboard.", image: "/solutions/talabat/Manage the entire marketplace in one place..png", alt: "Grocery delivery platform administration dashboard" },
  ],
  technologyLead: "A grocery delivery platform must stay responsive as its product catalogue, customer base, participating stores and daily order volume increase. We select the architecture around your scale, integration requirements, security considerations and long-term roadmap.",
  technologyImage: "/solutions/talabat/ teck-stacks .png",
  technologyImageAlt: "Technology foundation for an InstaShop-style grocery delivery platform",
  technologyTags: ["Flutter or React Native", "Swift and Kotlin", "React and Next.js", "Node.js or Laravel", "Secure REST or GraphQL APIs", "PostgreSQL, MySQL or MongoDB", "AWS, Google Cloud or Azure", "Maps, payments and notifications", "ERP, POS and inventory integrations"],
  process: [
    ["Discovery", "Understand your business model, target users, merchants, delivery structure, locations and commercial goals."],
    ["Research & planning", "Organise user expectations, operational dependencies and technical requirements into a practical roadmap."],
    ["UX & UI design", "Map customer, merchant, delivery and administrative journeys, then create branded interfaces and prototypes."],
    ["Technical development", "Build the agreed applications, dashboards, APIs and databases through planned delivery stages."],
    ["Integrations", "Connect and test payment, mapping, communication, analytics, inventory and business systems."],
    ["Quality assurance", "Review user journeys, access controls, integrations, devices, browsers and performance before release."],
    ["Launch preparation", "Configure the live environment, complete final checks and support app-store submission where needed."],
    ["Ongoing support", "Provide maintenance, monitoring, enhancements and feature development as the platform evolves."],
  ],
  cta: {
    eyebrow: "Let’s discuss what you want to build.",
    title: "Build the grocery platform your business actually needs.",
    body: "Tell us about your business model, target locations and operational requirements. We will help you define the applications, features, integrations and development approach needed to move forward.",
    href: "mailto:info@webtekdigital.com?subject=InstaShop%20clone%20app%20development%20enquiry",
  },
};

export default function Page() { return <CloneAppTemplate config={config} />; }
