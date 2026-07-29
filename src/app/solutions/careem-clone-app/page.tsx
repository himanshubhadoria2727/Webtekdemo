import type { Metadata } from "next";
import { CloneAppTemplate, type CloneAppTemplateConfig } from "../../components/solutions/CloneAppTemplate";

export const metadata: Metadata = {
  title: "Careem Clone App Development Dubai | Webtek Digital",
  description: "Dummy content for a ride-hailing and local mobility platform template.",
};

const config: CloneAppTemplateConfig = {
  eyebrow: "Ride-hailing and mobility platform",
  title: "Careem clone app development in Dubai",
  lead: "Create a branded transport platform with rider booking, driver workflows, live-trip visibility and central operational control.",
  heroImage: "/talabat/banner-wel.png.webp",
  heroImageAlt: "Placeholder mobile screens for a Careem-style ride-hailing app",
  overview: ["This placeholder mobility platform brings passengers, drivers, trips, payments, service zones and support into a single connected system.", "The final experience can be tailored to your fleet model, city coverage, booking rules and growth priorities."],
  metrics: [["3", "connected user products"], ["1", "central operations hub"], ["24/7", "dummy booking availability"]],
  features: [["Ride booking", "Dummy pickup, destination, vehicle-choice and fare-estimate journeys."], ["Driver application", "Placeholder trip requests, navigation, status updates and earnings tools."], ["Live trip visibility", "Sample location updates and rider notifications from acceptance to arrival."], ["Payments and wallets", "Flexible cashless payments, wallets, offers and transaction records."], ["Service-zone control", "Configure coverage, trip rules, pricing and vehicle categories."], ["Operations reporting", "Review placeholder trip, rider, driver and revenue performance from one dashboard."]],
  modules: [{ number: "01", label: "Passenger app", title: "A straightforward trip from booking to arrival.", text: "Dummy passenger flows include choosing a location, selecting a vehicle, confirming a trip and viewing live driver updates.", image: "/talabat/customer-panel.png.webp", alt: "Placeholder passenger application screen" }, { number: "02", label: "Driver app", title: "Simple tools for every trip.", text: "A sample driver experience for accepting requests, navigation, trip status and earnings visibility.", image: "/talabat/app-screen3.png.webp", alt: "Placeholder driver application screen" }, { number: "03", label: "Operations hub", title: "Control the service from one place.", text: "A dummy admin workspace for managing riders, drivers, zones, pricing, payments, support and reporting.", image: "/talabat/banner-wel.png.webp", alt: "Placeholder mobility app screens" }],
  technologyLead: "Placeholder technology choices can support fast booking, location updates, safe payments and dependable day-to-day operations.",
  technologyImage: "/talabat/all-language.webp",
  technologyImageAlt: "Placeholder application technology stack",
  technologyTags: ["iOS and Android", "Driver dashboard", "Secure APIs", "Cloud deployment", "Payment integration", "Maps and notifications"],
  process: [["Discovery", "Define the mobility service, customers, fleet and booking model."], ["UX and UI design", "Create placeholder passenger and driver journeys around your future brand."], ["Development", "Build the passenger, driver and operations experiences."], ["Testing and launch", "Validate key dummy flows before production planning."]],
  cta: { eyebrow: "Planning a mobility platform?", title: "Let’s discuss what you want to build.", body: "This is placeholder content for a Careem clone solution page.", href: "mailto:info@webtekdigital.com?subject=Careem clone app development enquiry" },
};

export default function Page() { return <CloneAppTemplate config={config} />; }
