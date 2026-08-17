import type { Metadata } from "next";
import { CloneAppTemplate } from "../../components/solutions/CloneAppTemplate";
import { createStandardSolutionConfig } from "../../components/solutions/StandardSolutionPage";

const pageUrl = "https://www.webtekdigital.com/solutions/ecommerce-app-development-dubai/";

export const metadata: Metadata = {
  title: "Ecommerce App Development Dubai | Webtek Digital",
  description: "Build a custom ecommerce app in Dubai with mobile storefront, catalogue, checkout, order management and admin solutions by Webtek Digital.",
  keywords: [
    "ecommerce app development Dubai",
    "mobile commerce app Dubai",
    "ecommerce mobile app UAE",
    "online shopping app development",
    "retail app development Dubai",
    "marketplace app UAE",
    "Shopify mobile app",
    "ecommerce software Dubai",
    "omnichannel retail app",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Ecommerce App Development Dubai | Webtek Digital",
    description: "Custom mobile storefronts, checkout, order management and commerce operations solutions for Dubai and the UAE.",
    url: pageUrl,
    type: "website",
  },
};

const config = createStandardSolutionConfig({
  endAfterProcess: true,
  eyebrow: "Mobile commerce platform",
  title: "Ecommerce App Development in Dubai",
  lead: "Turn your retail business into a high-performing mobile shopping experience built to convert, retain and grow. We create tailored ecommerce applications around your products, customers, operations and growth plans.",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "Explore the Solution",
  heroImage: "/solutions/e-commerce/ecommerce-app-hero.png",
  heroImageAlt: "Premium ecommerce mobile storefront application for retailers in Dubai",
  overview: [
    "A branded ecommerce application brings product discovery, customer accounts, checkout, payments, fulfilment, support and marketing into one coordinated customer journey. Shoppers get fast navigation and confidence at checkout, while your teams get accurate product, stock and order information.",
    "We design every component around your catalogue, audience, commercial model, fulfilment process and existing systems. The result is more than a website inside an app: it is a practical commerce platform designed for high-intent actions, repeat purchasing and day-to-day operational control.",
  ],
  metrics: [
    ["2+", "connected customer and commerce experiences"],
    ["1", "coordinated product, order and payment system"],
    ["24/7", "product discovery and order access"],
  ],
  features: [
    ["Product catalogue", "Present products through clear categories, search, filters and merchandising.", ["Collections, variants, attributes and SKUs", "Image galleries, video and specifications", "Related products, reviews and campaign pages"]],
    ["Fast checkout", "Reduce unnecessary steps between product selection and order confirmation.", ["Persistent baskets and saved items", "Guest or registered checkout", "Delivery, collection, coupons and gift cards", "Multiple payments, tax and digital receipts"]],
    ["Customer accounts", "Give customers a secure place to manage details, orders, benefits and preferences.", ["Profile and address management", "Wish lists, reordering and order history", "Returns, refunds, loyalty and wallet balance"]],
    ["Inventory management", "Maintain availability across online inventory, warehouses, stores or approved suppliers.", ["Location and variant-level stock", "Reservation, backorder and preorder rules", "Bulk import, synchronisation and exception logs"]],
    ["Promotions", "Create controlled offers that support acquisition, conversion and retention.", ["Discount codes and automatic offers", "Bundles, tiers and customer-group pricing", "Referral, loyalty and campaign rules"]],
    ["Commerce insights", "Give authorised teams visibility across revenue, retention and fulfilment quality.", ["Sales, conversion and order value", "Product, promotion and retention performance", "Returns, cancellations and downloadable reports"]],
  ],
  modules: [
    {
      number: "01",
      label: "Customer app",
      title: "A storefront customers enjoy using.",
      text: "A mobile-first iOS and Android journey shaped around your audience, brand and buying behaviour—from product discovery to post-purchase support.",
      image: "/solutions/e-commerce/ecommerce-customer-shopping-app.png",
      alt: "Customer using a branded ecommerce application on a mobile phone",
      bullets: ["Search, filters, product media and variants", "Wish lists, saved baskets and secure checkout", "Payments, delivery, collection and live status", "Promotions, loyalty, reviews and support", "English, Arabic and right-to-left interfaces"],
    },
    {
      number: "02",
      label: "Commerce operations dashboard",
      title: "Control your digital store with confidence.",
      text: "Give catalogue, warehouse, support, finance and marketing teams an appropriately permissioned view of products, customers, orders, promotions and performance.",
      image: "/solutions/e-commerce/ecommerce-admin-dashboard.png",
      alt: "Ecommerce operations dashboard showing sales, products, inventory and orders",
      bullets: ["Product, category, price and stock controls", "Orders, picking, returns, refunds and exchanges", "Promotions, content, loyalty and customer support", "Role-based permissions, reports and audit history"],
    },
    {
      number: "03",
      label: "Optional warehouse or store app",
      title: "Practical fulfilment at the point of work.",
      text: "A focused mobile or tablet experience helps teams review orders, locate items, record exceptions and complete courier or collection handover.",
      image: "/services/app-development/2-slider/Logistics and delivery solutions.png",
      alt: "Warehouse team using a mobile fulfilment application",
      bullets: ["Assigned queues and pick lists", "Barcode or QR scanning", "Packing, substitution and handover controls", "Store pickup verification and incident reporting"],
    },
    {
      number: "04",
      label: "Optional vendor portal",
      title: "Support approved marketplace sellers.",
      text: "Let merchants manage products, stock, orders and performance while the platform owner retains central commercial and quality oversight.",
      image: "/solutions/e-commerce/ecommerce-merchant-vendor-portal.png",
      alt: "Marketplace vendor portal and retail commerce interfaces",
      bullets: ["Vendor onboarding and approval", "Catalogue, inventory and fulfilment controls", "Commission and settlement summaries", "Promotion participation and store performance"],
    },
  ],
  technologyLead: "We select the architecture according to your commercial goals, existing systems, integrations, security considerations and long-term roadmap so performance can keep pace with catalogue, traffic and order growth.",
  technologyImage: "/solutions/e-commerce/ecommerce-app-technology-stack.png",
  technologyImageAlt: "Software engineer building a modern ecommerce technology platform",
  technologyTags: ["Flutter", "React Native", "Swift", "Kotlin", "React & Next.js", "Node.js", "Laravel", "REST & GraphQL", "Shopify Plus", "WooCommerce", "PostgreSQL", "Cloud infrastructure", "Payment gateways", "ERP, POS & PIM"],
  process: [
    ["Discovery and strategy", "Document the business model, catalogue, customers, markets, fulfilment, payments, systems and growth objectives.", "A shared definition of the ecommerce platform and its commercial requirements."],
    ["Research and planning", "Evaluate customer expectations, operational workflows, competitors, dependencies and technical constraints.", "A prioritised scope, architecture recommendation and delivery roadmap."],
    ["UX and UI design", "Map discovery, product, basket, checkout, account and operational journeys, then create branded responsive interfaces.", "An approved design system and interactive prototype."],
    ["Technical development", "Build customer applications, dashboards, APIs, databases and approved integrations in planned stages.", "A working platform based on the agreed scope."],
    ["Catalogue and integrations", "Configure approved product structures, content and commerce rules, then connect selected business systems.", "Coordinated platform content and third-party functionality."],
    ["Quality assurance", "Test functionality, usability, catalogue, checkout, payments, access, APIs, devices and performance.", "A stable release candidate for controlled review."],
    ["Launch preparation", "Configure production environments, store listings, analytics, conversion events and support processes.", "A production-ready ecommerce platform."],
    ["Ongoing support", "Arrange monitoring, issue resolution, updates, reporting and future enhancements as needed.", "Continued technical support as the platform evolves."],
  ],
  detailSections: [
    {
      eyebrow: "Advanced capabilities",
      title: "More than a basic shopping application.",
      intro: "Select the capabilities that fit your customers, operating model and first-release priorities, then add more as the platform grows.",
      items: [
        ["Personalised merchandising", "Organise relevant products, collections or recommendations using permitted behavioural and account data while preserving customer choice."],
        ["Loyalty and memberships", "Support points, tiers, credits, member pricing, paid memberships and early-access benefits."],
        ["Subscriptions and repeat orders", "Enable recurring deliveries, replenishment reminders, pauses, renewals and flexible account management."],
        ["Omnichannel retail", "Connect ecommerce and stores through click and collect, branch availability, store returns, shared profiles or loyalty."],
        ["Multi-currency and language", "Support English, Arabic, right-to-left layouts, market-specific content and approved currency rules."],
        ["Gift cards and digital wallet", "Allow customers to buy or redeem gift cards, receive store credit and manage promotional balances."],
        ["Bundles and configurators", "Create fixed or flexible bundles, gift boxes and configurable products with transparent availability and pricing."],
        ["B2B and wholesale", "Provide approved buyers with dedicated catalogues, minimum quantities, negotiated prices, credit terms and reporting."],
        ["Multi-vendor marketplace", "Coordinate merchants, catalogues, commissions, orders, settlements and quality controls through central administration."],
        ["Returns and exchanges", "Structure eligibility, reasons, collection or drop-off, exchanges, refunds and status updates."],
        ["AI-assisted commerce", "Apply carefully reviewed tools to search, support, product tagging, merchandising or reporting with professional oversight."],
      ],
    },
    {
      eyebrow: "Business benefits",
      title: "Build a stronger direct commerce channel.",
      intro: "A purpose-built app can complement your ecommerce website, stores and selected marketplaces while giving you greater control over conversion and customer relationships.",
      items: [
        ["Increase mobile conversion", "Faster discovery, saved information and a focused checkout reduce friction for high-intent shoppers."],
        ["Strengthen retention", "Push notifications, loyalty, wish lists, preferences and easy reordering support responsible repeat engagement."],
        ["Increase order value", "Bundles, related products, delivery thresholds and relevant offers can encourage larger baskets."],
        ["Build brand recognition", "Create one consistent owned experience across discovery, purchase, fulfilment and support."],
        ["Improve visibility", "Central dashboards reveal orders, stock, product performance, returns and fulfilment quality."],
        ["Reduce administration", "Connected catalogue, payment, order and reporting workflows reduce fragmented manual updates."],
        ["Support omnichannel growth", "Coordinate accounts, stock, fulfilment and loyalty across mobile, web and stores where systems allow."],
        ["Own customer relationships", "First-party accounts and permitted behavioural data give you more control over service and retention."],
        ["Scale with control", "Add products, markets, warehouses, stores, groups and integrations through modular architecture and permissions."],
      ],
    },
    {
      eyebrow: "Features and deliverables",
      title: "What your ecommerce application can include.",
      intro: "Final deliverables are defined during discovery and documented in the approved scope. Not every business or first release needs every feature.",
      items: [
        ["Customer-facing deliverables", "Branded customer experiences for mobile and responsive web.", ["iOS and Android application interfaces", "Product, basket, checkout and order-status journeys", "Accounts, loyalty or subscriptions according to scope", "English, Arabic and right-to-left layouts where approved"]],
        ["Commerce administration", "Secure operational tools structured around appropriate team roles.", ["Product, category and order administration", "Returns, refunds and customer-support tools", "Promotion and content controls", "Permissions, activity records and reports"]],
        ["Catalogue and content setup", "Agreed structures and content models configured around client-supplied product data.", ["Categories, collections, attributes and variants", "Sample or agreed catalogue population", "SEO fields, import templates and content guidance"]],
        ["Integration deliverables", "Approved connections documented with dependencies and failure-handling requirements.", ["Payments, shipping and courier services", "CRM, ERP, POS, PIM or inventory where compatible", "Email, SMS, push, analytics and marketing platforms", "API documentation for agreed custom endpoints"]],
        ["Quality and launch", "Review the agreed journeys across supported devices and environments.", ["Functional, usability, payment and compatibility testing", "Role and access-control review", "Deployment and app-store submission assistance where included"]],
        ["Documentation and handover", "Practical materials for authorised administrators and technical stakeholders.", ["Administration and deployment guidance", "Integration and dependency references", "Analytics event reference", "Source-code and access handover according to contract"]],
        ["Optional ongoing support", "A separate maintenance arrangement can keep the released platform healthy.", ["Monitoring and issue resolution", "Security, dependency and compatibility updates", "Performance review and planned enhancements"]],
      ],
    },
    {
      eyebrow: "Industries and use cases",
      title: "Flexible ecommerce for ambitious businesses.",
      intro: "The same foundation can be shaped around different purchase patterns, product information, fulfilment rules and customer expectations.",
      items: [
        ["Fashion and apparel", "Collections, sizes, colours, lookbooks, seasonal campaigns, exchanges and loyalty."],
        ["Beauty and personal care", "Routines, ingredients, bundles, replenishment and customer education with careful product claims."],
        ["Electronics and appliances", "Specifications, variants, warranties, accessories, delivery options and comparisons."],
        ["Home, furniture and décor", "Rich media, dimensions, room collections, delivery rules and considered-purchase journeys."],
        ["Luxury and premium retail", "Editorial presentation, appointments, controlled availability and high-touch service."],
        ["Food and speciality products", "Shelf-life information, subscriptions, delivery rules and detailed product attributes."],
        ["Health and wellness retail", "Compliant product information and account journeys subject to applicable requirements."],
        ["Automotive parts", "Compatibility information, categories, specifications and assisted selection."],
        ["B2B and wholesale", "Account approval, custom pricing, minimum quantities, repeat orders and invoice workflows."],
        ["Marketplaces and subscriptions", "Seller governance or recurring orders with the controls each model requires."],
        ["Omnichannel retail chains", "Shared accounts, stock and fulfilment across mobile, web and stores where compatible."],
      ],
    },
    {
      eyebrow: "Why Webtek Digital",
      title: "Built around your commerce model—not a generic template.",
      intro: "Strategy, experience design, technology and growth planning come together in one structured ecommerce engagement.",
      items: [
        ["Custom development", "Tailored to your catalogue, customers, operations, systems and brand."],
        ["Complete ecosystem", "Customer apps, storefronts, dashboards, vendor portals, APIs and supporting pages."],
        ["Marketing-first thinking", "Conversion, retention, analytics, attribution and campaign journeys considered during planning."],
        ["UAE and GCC relevance", "Arabic interfaces, regional payments, local delivery expectations, VAT and market-specific content."],
        ["Scalable architecture", "Structured for additional products, stores, warehouses, vendors, markets and integrations."],
        ["UX-focused design", "Interfaces organised around real shopping and operational tasks."],
        ["Transparent management", "Requirements, responsibilities, reviews and changes documented throughout development."],
        ["Quality assurance", "Catalogue, checkout, payment, fulfilment, reporting and administration reviewed before release."],
        ["End-to-end capability", "Support spanning strategy, branding, UI/UX, development, analytics, launch and ongoing growth."],
      ],
    },
    {
      eyebrow: "Project investment",
      title: "How much does an ecommerce app cost?",
      intro: "Cost depends on your commercial model, catalogue scale, interfaces and feature complexity. After an initial consultation, we recommend a focused first-release scope and provide a tailored commercial proposal—there are no generic fixed packages.",
      items: [
        ["Applications and architecture", "Customer, operations, warehouse, vendor and admin interfaces; iOS, Android and responsive web; native, cross-platform or headless delivery."],
        ["Catalogue and discovery", "Product volume, variants, attributes, media, search, filtering and merchandising complexity."],
        ["Commerce operations", "Inventory locations, checkout, tax, payment, delivery, returns, refunds and exchange workflows."],
        ["Growth capabilities", "Loyalty, gift cards, memberships, subscriptions, languages, currencies and multiple markets."],
        ["Marketplace requirements", "Vendor onboarding, catalogue control, commissions, settlements and separate fulfilment settings."],
        ["Systems and assurance", "ERP, POS, PIM, OMS, CRM, logistics, migration, analytics, security, testing and support."],
      ],
    },
    {
      eyebrow: "Free consultation",
      title: "Let’s discuss what you want to build.",
      intro: "Tell us about your products, customers, sales model, fulfilment and growth objectives. We will help define the customer and operational experiences, first-release priorities and practical next steps.",
      items: [
        ["Business and audience", "Business model, revenue model, target customers, markets and catalogue structure."],
        ["Commerce model", "Direct-to-consumer, omnichannel, B2B, wholesale, subscriptions or marketplace."],
        ["Operations", "Warehouses, stores, fulfilment partners, delivery, collection, returns and support."],
        ["Customer growth", "Checkout, payments, loyalty, subscriptions, promotions and retention priorities."],
        ["Technology", "Required applications, dashboards, existing platforms, data migration and third-party integrations."],
        ["Delivery plan", "Initial priorities, target launch period, delivery approach and next steps."],
      ],
    },
  ],
  faqTitle: "Ecommerce App Development FAQs",
  faqs: [
    ["What is an ecommerce app?", "An ecommerce app lets customers discover products, purchase securely, manage an account and follow orders. A complete solution can also include catalogue, inventory, fulfilment, support and administration tools."],
    ["Can Webtek Digital build a custom ecommerce app in Dubai?", "Yes. We develop custom ecommerce applications for businesses in Dubai and across the UAE, tailored to the catalogue, branding, fulfilment, payments, markets and existing technology."],
    ["Can you connect an app to an existing ecommerce website?", "Potentially. This depends on suitable APIs and data access. We assess the website, commerce platform, customisations and integrations before confirming scope."],
    ["Do I need both iOS and Android applications?", "That depends on your audience and priorities. Cross-platform development can support both from a shared codebase, while native development may suit particular performance or platform requirements."],
    ["Can the app use Shopify or WooCommerce?", "Yes, where the chosen platform and extensions provide suitable APIs and workflows. Products, customers, checkout, inventory and third-party dependencies are reviewed first."],
    ["Can the platform support multiple warehouses or stores?", "Yes. Inventory, routing, collection and fulfilment rules can be configured by location, subject to connected-system capabilities and data accuracy."],
    ["Which payment methods can be included?", "Subject to provider and market eligibility, options may include cards, Apple Pay, Google Pay, local methods, cash on delivery, gift cards, store credit or business-account terms."],
    ["Can the app support English and Arabic?", "Yes. English and Arabic interfaces can be developed with right-to-left support. Additional languages can be considered for the target market."],
    ["Can customers track orders?", "Yes. Customers can receive updates from confirmation through delivery. Real-time courier tracking depends on provider, permissions and integration capability."],
    ["Can the app support loyalty and subscriptions?", "Yes. Points, memberships, referral credits, recurring orders and subscription controls can be included according to approved commercial and payment rules."],
    ["Can you build a multi-vendor marketplace app?", "Yes. It can include customer apps, vendor portals, central administration, commissions, settlements and separate fulfilment settings."],
    ["Can customers request returns and exchanges?", "Yes. The platform can support eligibility, reasons, evidence, collection or drop-off, exchanges, store credit and refund status according to retailer policy."],
    ["Can existing product and customer data be migrated?", "Potentially. Migration depends on data quality, format, ownership and export options, which are assessed before scope confirmation."],
    ["How long does ecommerce app development take?", "The schedule depends on interfaces, catalogue complexity, design, integrations, migration, testing and approval speed. A detailed timeline follows discovery."],
    ["Do you provide maintenance after launch?", "Yes. A separate support agreement can cover monitoring, issue resolution, compatibility, security and dependency updates, reporting and future development."],
    ["Will the app support Google Ads and Meta campaigns?", "Suitable sites, deep links and conversion events can be planned for analytics, attribution and campaign measurement, subject to platforms and consent requirements."],
    ["Will Webtek Digital copy another retailer’s app?", "No. The solution uses original branding, interface design and source code based on your requirements, without reproducing proprietary code or protected brand assets."],
    ["How do you protect ecommerce customer data?", "Controls are selected according to scope and risk, including encrypted transport, appropriate permissions, secure development practices, logging and suitable payment-provider integration."],
  ],
  cta: {
    eyebrow: "Start your ecommerce project",
    title: "Let’s create a store your customers carry with them.",
    body: "Tell us about your catalogue, customers, fulfilment model, existing systems and growth objectives. We’ll help define the right storefront, operations and administration experiences.",
    href: "mailto:info@webtekdigital.com?subject=Ecommerce app development enquiry",
  },
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Ecommerce App Development in Dubai",
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
        { "@type": "ListItem", position: 3, name: "Ecommerce App Development", item: pageUrl },
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
