import type { Metadata } from "next";
import { CloneAppTemplate, type CloneAppTemplateConfig } from "../../components/solutions/CloneAppTemplate";

export const metadata: Metadata = {
  title: "Instastop Clone App Development Dubai | Webtek Digital",
  description: "Dummy content for an on-demand grocery delivery platform template.",
};

const config: CloneAppTemplateConfig = {
  eyebrow: "On-demand grocery platform",
  title: "Instastop clone app development in Dubai",
  lead: "Launch a branded grocery-delivery experience with product discovery, fast checkout and the operations tools to manage every order.",
  heroImage: "/talabat/banner-wel.png.webp",
  heroImageAlt: "Placeholder mobile screens for an Instastop-style grocery delivery app",
  overview: ["This placeholder grocery platform connects shoppers, stores, pickers, riders and support teams through one coordinated operating system.", "The final product can be shaped around your catalogue, delivery promise, service areas and preferred commercial model."],
  metrics: [["3", "connected user products"], ["1", "central operations hub"], ["24/7", "dummy service availability"]],
  features: [["Store marketplace", "Dummy product discovery, store browsing, categories and availability controls."], ["Fast checkout", "Placeholder cart, delivery-slot and secure-payment journeys."], ["Live order updates", "Status notifications from picking through doorstep delivery."], ["Inventory controls", "Store-side catalogue, pricing and stock-management workflows."], ["Flexible delivery zones", "Configure service areas, fees and delivery windows around your business."], ["Business reporting", "Track dummy order, customer and store performance in one dashboard."]],
  modules: [{ number: "01", label: "Shopper app", title: "Groceries in a few clear steps.", text: "Dummy flows cover browsing, searching, adding products, selecting a delivery slot and tracking an order.", image: "/talabat/customer-panel.png.webp", alt: "Placeholder shopper application screen" }, { number: "02", label: "Store console", title: "Practical controls for store teams.", text: "A sample merchant experience for maintaining products, stock, pricing, orders and promotions.", image: "/talabat/app-screen3.png.webp", alt: "Placeholder store management screen" }, { number: "03", label: "Operations hub", title: "Visibility across every order.", text: "A dummy admin workspace for managing stores, fulfilment, delivery zones, customers and reporting.", image: "/talabat/banner-wel.png.webp", alt: "Placeholder grocery delivery app screens" }],
  technologyLead: "Placeholder technology choices can support dependable ordering, real-time updates and future expansion.",
  technologyImage: "/talabat/all-language.webp",
  technologyImageAlt: "Placeholder application technology stack",
  technologyTags: ["iOS and Android", "Store dashboard", "Secure APIs", "Cloud deployment", "Payment integration", "Notifications"],
  process: [["Discovery", "Define the grocery market, product scope and delivery model."], ["UX and UI design", "Create placeholder journeys around your future brand."], ["Development", "Build the shopper, store and operations experiences."], ["Testing and launch", "Validate key dummy flows before production planning."]],
  cta: { eyebrow: "Planning a grocery platform?", title: "Let’s discuss what you want to build.", body: "This is placeholder content for an Instastop clone solution page.", href: "mailto:info@webtekdigital.com?subject=Instastop clone app development enquiry" },
};

export default function Page() { return <CloneAppTemplate config={config} />; }
