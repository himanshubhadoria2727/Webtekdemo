export const projectPages = {
  "talabat-clone-app": {
    meta: {
      client: "Talabat Clone",
      industry: "Food & Beverage",
      category: "E-commerce",
      ref: "WEB-TALABAT-01",
    },
    hero: {
      title: "Talabat clone app development service in Dubai",
      kicker: "White-label delivery platform",
      // imageLabel: "Talabat restaurant app screens",
      imageSrc: "/talabat/banner-wel.png.webp",
      imageAlt: "Two Talabat restaurant app screens shown in phone mockups",
    },
    intro:
      "Looking to launch your own successful online grocery delivery business in the UAE? Webtek Digital builds robust, customizable Talabat clone app development solutions in Dubai, Abu Dhabi, and across the UAE. Our white-label delivery platforms are engineered for scalability with easy checkout, real-time tracking, multi-vendor support, scheduled delivery, in-store discounts, and a polished customer experience that helps you kickstart a feature-rich, cost-effective delivery venture.",
    featureHighlights: [
      {
        title: "Easy Checkout",
        text: "Customers can check out easily and securely from multiple grocery stores, restaurants, or partner vendors in one smooth order flow.",
      },
      {
        title: "In-Store Discounts",
        text: "Display product-level offers and store promotions so customers can discover deals quickly without searching through long catalogs.",
      },
      {
        title: "Scheduled Delivery",
        text: "Let customers choose a delivery day and time slot, while your team manages doorstep fulfillment with clearer operational control.",
      },
      {
        title: "Stunning UI/UX",
        text: "Simple, accessible screens make browsing, cart building, payment, tracking, and repeat ordering feel uncomplicated for every user.",
      },
      {
        title: "24x7 Support",
        text: "From consultation to launch and post-release improvements, Webtek Digital stays available as your long-term technology partner.",
      },
      {
        title: "Scalable Solutions",
        text: "Every business has different needs, so we customize delivery workflows, vendors, zones, payments, and admin controls around your model.",
      },
    ],
    scrollLabel: "Core App Modules",
    scrollItems: [
      {
        title: "Customer App",
        text: "A polished customer-facing app for browsing grocery stores, restaurants, categories, offers, carts, secure checkout, scheduled delivery, live tracking, and order history.",
        imageLabel: "Customer app screens",
        imageSrc: "/talabat/customer-panel.png.webp",
        imageAlt: "Talabat restaurant menu screen in a phone mockup",
      },
      {
        title: "Vendor Dashboard",
        text: "A practical control panel for grocery stores, restaurants, and delivery partners to manage catalogs, menus, pricing, incoming orders, availability, discounts, and branch operations.",
        imageLabel: "Restaurant partner screens",
        imageSrc: "/talabat/app-screen3.png.webp",
        imageAlt: "Restaurant ordering app screens shown in phone mockups",
      },
      {
        title: "Delivery Workflow",
        text: "A driver-side flow for accepting orders, navigating routes, updating pickup and doorstep delivery status, and keeping customers informed in real time.",
        imageLabel: "Restaurant browsing flow",
        imageSrc: "/talabat/banner-wel.png.webp",
        imageAlt: "Two restaurant app screens in overlapping phone mockups",
      },
      {
        title: "Admin Control",
        text: "A central admin system for managing users, vendors, commissions, service zones, payments, coupons, disputes, reports, and the operational rules behind your delivery business.",
        imageLabel: "Technology stack",
        imageSrc: "/talabat/all-language.webp",
        imageAlt: "Technology stack logos used for app development",
      },
      {
        title: "Growth Features",
        text: "Built-in support for push notifications, loyalty offers, wallet payments, referrals, ratings, analytics, campaign-ready engagement, and multi-language expansion.",
        imageLabel: "Food delivery growth screens",
        imageSrc: "/talabat/app-screen3.png.webp",
        imageAlt: "Food delivery app screens showing login, offers, and saved items",
      },
    ],
  },
} as const;

export type ProjectSlug = keyof typeof projectPages;
