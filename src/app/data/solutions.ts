export const solutionsPage = {
  eyebrow: "Solutions",
  title: "Digital solutions we build.",
  intro:
    "We build mobile apps and digital platforms tailored to how your business actually operates, not a one-size-fits-all template. Whether you need a fast clone app, a custom service platform, or a full operational system, our team in Dubai handles the design, development, and launch end-to-end. Browse the categories below to find the solution that fits your business model.",
  itemHref: "#contact-us",
  groups: [
    {
      title: "Clone Apps",
      description:
        "Launch faster by building on app models that are already proven in the market. Our clone app development service in Dubai recreates the core user experience, vendor management, and delivery logic of leading platforms - fully white-labeled and customized for your brand, your commission structure, and your local market needs. Ideal for entrepreneurs and businesses that want to enter the on-demand economy without the time and cost of building from a blank page.",
      items: [
        { label: "Talabat Clone App", href: "/solutions/talabat-clone-app" },
        { label: "Instashop Clone App" },
        { label: "Careem Clone App" },
      ],
    },
    {
      title: "Service App",
      description:
        "For businesses built around bookings, scheduling, and service delivery rather than product sales. We design service-based apps that make it simple for customers to discover, book, and pay for services, while giving you a backend to manage providers, availability, and operations - built for home maintenance, fitness, education, car care, and laundry businesses across the UAE.",
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
      description:
        "For businesses selling physical goods that need a seamless path from browsing to checkout to delivery. Our product app development builds cover catalog management, cart and checkout flows, inventory tracking, and delivery coordination - purpose-built for grocery, e-commerce, and restaurant delivery models that need to move fast and scale with demand.",
      items: [{ label: "Grocery" }, { label: "E-Commerce" }, { label: "Restaurant Delivery" }],
      featuredItem: "E-Commerce",
    },
    {
      title: "Health & Beauty",
      description:
        "Purpose-built platforms for the health and beauty industry, where trust, scheduling accuracy, and a smooth booking experience directly affect client retention. We build healthcare and beauty booking apps that handle appointment booking, provider profiles, consultations, and prescription or service history - designed for beauty salons, healthcare consultation services, and pharmacy delivery businesses.",
      items: [{ label: "Beauty Services" }, { label: "Healthcare Consultation" }, { label: "Pharmacy" }],
    },
  ],
} as const;
