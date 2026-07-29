import type { Metadata } from "next";
import { CloneAppTemplate, type CloneAppTemplateConfig } from "../../components/solutions/CloneAppTemplate";

export const metadata: Metadata = {
  title: "Gym and Fitness App Development Dubai | Webtek Digital",
  description: "Dummy content for a gym and fitness platform template.",
};

const config: CloneAppTemplateConfig = {
  eyebrow: "Gym and fitness platform",
  title: "Gym & fitness app development in Dubai",
  lead: "Build a branded fitness experience with membership management, class booking, workout plans and helpful tools for members and trainers.",
  heroImage: "/talabat/banner-wel.png.webp",
  heroImageAlt: "Placeholder mobile screens for a gym and fitness app",
  overview: ["This placeholder solution connects members, trainers, classes, programmes, payments and gym operations in one coordinated platform.", "The final product can be shaped around your memberships, facilities, training services and community goals."],
  metrics: [["3", "connected user products"], ["1", "central fitness hub"], ["24/7", "dummy member access"]],
  features: [["Membership management", "Dummy membership, plan and renewal journeys for members."], ["Class booking", "Placeholder schedules, capacity management, waitlists and booking confirmations."], ["Workout plans", "Sample programmes, routines, goals and activity-tracking experiences."], ["Trainer tools", "Dummy client profiles, class management and training-plan controls."], ["Payments and offers", "Configure plans, add-ons, promotions and secure payment flows."], ["Fitness insights", "Review placeholder member, attendance and programme-performance reporting."]],
  modules: [{ number: "01", label: "Member app", title: "Everything members need in one place.", text: "Dummy member flows include booking a class, viewing training plans, managing membership and tracking goals.", image: "/talabat/customer-panel.png.webp", alt: "Placeholder gym member application screen" }, { number: "02", label: "Trainer workspace", title: "Keep coaching organised and personal.", text: "A sample trainer experience for managing schedules, member programmes and attendance.", image: "/talabat/app-screen3.png.webp", alt: "Placeholder gym trainer application screen" }, { number: "03", label: "Gym operations", title: "Manage the business from one dashboard.", text: "A dummy admin workspace for memberships, classes, trainers, payments, support and reporting.", image: "/talabat/banner-wel.png.webp", alt: "Placeholder gym and fitness application screens" }],
  technologyLead: "Placeholder technology choices can support simple booking, connected memberships and future service expansion.",
  technologyImage: "/talabat/all-language.webp",
  technologyImageAlt: "Placeholder application technology stack",
  technologyTags: ["iOS and Android", "Trainer dashboard", "Secure APIs", "Cloud deployment", "Payment integration", "Notifications"],
  process: [["Discovery", "Define members, training services, facilities and commercial goals."], ["UX and UI design", "Create placeholder fitness journeys around your future brand."], ["Development", "Build the member, trainer and gym operations experiences."], ["Testing and launch", "Validate key dummy flows before production planning."]],
  cta: { eyebrow: "Planning a fitness platform?", title: "Let’s discuss what you want to build.", body: "This is placeholder content for a gym and fitness solution page.", href: "mailto:info@webtekdigital.com?subject=Gym and fitness app development enquiry" },
};

export default function Page() { return <CloneAppTemplate config={config} />; }
