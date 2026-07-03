export const projectPages = {
  "talabat-clone-app": {
    meta: {
      client: "Talabat Clone",
      industry: "Food & Beverage",
      category: "E-commerce",
      ref: "WEB-TALABAT-01",
    },
    hero: {
      title: "Talabat clone app for fast delivery businesses",
      kicker: "Food delivery platform",
      // imageLabel: "Talabat restaurant app screens",
      imageSrc: "/talabat/banner-wel.png.webp",
      imageAlt: "Two Talabat restaurant app screens shown in phone mockups",
    },
    intro:
      "Food delivery is one of the most competitive on-demand markets in Dubai and across the UAE. A Talabat clone app gives restaurants, cloud kitchens, delivery operators, and marketplace founders a faster path to launch with customer ordering, restaurant management, delivery tracking, commission control, and admin operations built into one white-labeled platform. Webtek Digital customizes the experience around your food delivery model, service zones, payment flow, and growth plan so you can launch with a product that feels like your brand from day one.",
    scrollLabel: "Project Details",
    scrollItems: [
      {
        title: "Customer App",
        text: "A polished customer-facing app for browsing restaurants, grocery stores, menus, offers, carts, checkout, delivery tracking, and order history.",
        imageLabel: "Customer app screens",
        imageSrc: "/talabat/customer-panel.png.webp",
        imageAlt: "Talabat restaurant menu screen in a phone mockup",
      },
      {
        title: "Vendor Dashboard",
        text: "A practical control panel for restaurant and store partners to manage products, pricing, incoming orders, availability, promotions, and branch operations.",
        imageLabel: "Grocery storefront screens",
        imageSrc: "/talabat/app-screen3.png.webp",
        imageAlt: "Grocery app sign in, shopping, and wishlist screens in phone mockups",
      },
      {
        title: "Delivery Workflow",
        text: "A driver-side flow for accepting orders, navigating routes, updating pickup and drop-off status, and keeping customers informed in real time.",
        imageLabel: "Restaurant browsing flow",
        imageSrc: "/talabat/banner-wel.png.webp",
        imageAlt: "Two restaurant app screens in overlapping phone mockups",
      },
      {
        title: "Admin Control",
        text: "A central admin system for managing users, vendors, commissions, zones, payments, coupons, disputes, and performance reports.",
        imageLabel: "Technology stack",
        imageSrc: "/talabat/all-language.webp",
        imageAlt: "Technology stack logos used for app development",
      },
      {
        title: "Growth Features",
        text: "Built-in support for push notifications, loyalty offers, wallet payments, referrals, ratings, analytics, and campaign-ready customer engagement.",
        imageLabel: "Grocery app growth screens",
        imageSrc: "/talabat/app-screen3.png.webp",
        imageAlt: "Grocery app screens showing login, offers, and wishlist views",
      },
    ],
  },
} as const;

export type ProjectSlug = keyof typeof projectPages;
