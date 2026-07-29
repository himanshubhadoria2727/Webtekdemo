import type { Metadata } from "next";
import { CloneAppTemplate, type CloneAppTemplateConfig } from "../../components/solutions/CloneAppTemplate";

export const metadata: Metadata = {
  title: "Home Maintenance App Development Dubai | Webtek Digital",
  description: "Dummy content for a home maintenance booking platform template.",
};

const config: CloneAppTemplateConfig = {
  eyebrow: "Home services booking platform",
  title: "Home maintenance app development in Dubai",
  lead: "Launch a branded home-services platform with instant bookings, technician scheduling and a clear way to manage every customer request.",
  heroImage: "/talabat/banner-wel.png.webp",
  heroImageAlt: "Placeholder mobile screens for a home maintenance app",
  overview: ["This placeholder solution connects customers, technicians, service requests, payments and support teams through one simple operating system.", "The final product can be tailored around your services, scheduling rules, coverage areas and team structure."],
  metrics: [["3", "connected user products"], ["1", "central service hub"], ["24/7", "dummy booking availability"]],
  features: [["Service discovery", "Dummy categories, service descriptions and request forms for customers."], ["Instant booking", "Placeholder date, time-slot, address and technician scheduling journeys."], ["Technician tools", "Sample job details, status updates, navigation and work-history views."], ["Live notifications", "Updates for booking confirmations, technician arrivals and completed work."], ["Flexible coverage", "Configure service areas, pricing rules and appointment availability."], ["Operations reporting", "Review placeholder requests, teams, revenue and customer feedback in one dashboard."]],
  modules: [{ number: "01", label: "Customer app", title: "Book home services without the back-and-forth.", text: "Dummy customer flows include choosing a service, selecting an appointment time, sharing an address and following job updates.", image: "/talabat/customer-panel.png.webp", alt: "Placeholder home services customer app" }, { number: "02", label: "Technician app", title: "Clear job details for field teams.", text: "A sample technician experience for accepting work, viewing service information and updating job progress.", image: "/talabat/app-screen3.png.webp", alt: "Placeholder technician application screen" }, { number: "03", label: "Operations hub", title: "One view across service delivery.", text: "A dummy admin workspace for managing requests, technicians, availability, payments, support and reporting.", image: "/talabat/banner-wel.png.webp", alt: "Placeholder home maintenance application screens" }],
  technologyLead: "Placeholder technology choices can support reliable booking, team coordination and future expansion.",
  technologyImage: "/talabat/all-language.webp",
  technologyImageAlt: "Placeholder application technology stack",
  technologyTags: ["iOS and Android", "Technician dashboard", "Secure APIs", "Cloud deployment", "Payment integration", "Notifications"],
  process: [["Discovery", "Define services, customers, technician workflows and service areas."], ["UX and UI design", "Create placeholder booking journeys around your future brand."], ["Development", "Build the customer, technician and operations experiences."], ["Testing and launch", "Validate key dummy flows before production planning."]],
  cta: { eyebrow: "Planning a home services platform?", title: "Let’s discuss what you want to build.", body: "This is placeholder content for a home maintenance solution page.", href: "mailto:info@webtekdigital.com?subject=Home maintenance app development enquiry" },
};

export default function Page() { return <CloneAppTemplate config={config} />; }
