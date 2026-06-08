export const solutionsPage = {
  eyebrow: "Solutions",
  title: "Digital solutions we build.",
  intro:
    "Choose a category, then move into the exact app model your business needs. Every item below can become a custom product, clone app, or operational platform.",
  itemHref: "#contact-us",
  groups: [
    {
      title: "Clone Apps",
      items: ["Talabat Clone App", "Instashop Clone App", "Careem Clone App"],
    },
    {
      title: "Service App",
      items: ["Home Maintenance", "E-Learning", "Gym Fitness", "Car Wash", "Laundry"],
    },
    {
      title: "Product App",
      items: ["Grocery", "E-Commerce", "Restaurant Delivery"],
      featuredItem: "E-Commerce",
    },
    {
      title: "Health & Beauty",
      items: ["Beauty Services", "Healthcare Consultation", "Pharmacy"],
    },
  ],
} as const;
