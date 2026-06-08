export const solutionsPage = {
  eyebrow: "Solutions",
  title: "Digital solutions we build.",
  intro:
    "Choose a category, then move into the exact app model your business needs. Every item below can become a custom product, clone app, or operational platform.",
  itemHref: "#contact-us",
  groups: [
    {
      title: "Clone Apps",
      items: [
        { label: "Talabat Clone App", href: "/solutions/talabat-clone-app" },
        { label: "Instashop Clone App" },
        { label: "Careem Clone App" },
      ],
    },
    {
      title: "Service App",
      items: [
        { label: "Home Maintenance" },
        { label: "E-Learning" },
        { label: "Gym Fitness" },
        { label: "Car Wash" },
        { label: "Laundry" },
      ],
    },
    {
      title: "Product App",
      items: [{ label: "Grocery" }, { label: "E-Commerce" }, { label: "Restaurant Delivery" }],
      featuredItem: "E-Commerce",
    },
    {
      title: "Health & Beauty",
      items: [{ label: "Beauty Services" }, { label: "Healthcare Consultation" }, { label: "Pharmacy" }],
    },
  ],
} as const;
