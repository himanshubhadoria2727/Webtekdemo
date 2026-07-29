import type { Metadata } from "next";
import { CloneAppTemplate, type CloneAppTemplateConfig } from "../../components/solutions/CloneAppTemplate";

export const metadata: Metadata = {
  title: "E-Learning App Development Dubai | Webtek Digital",
  description: "Dummy content for an e-learning platform template.",
};

const config: CloneAppTemplateConfig = {
  eyebrow: "Digital learning platform",
  title: "E-learning app development in Dubai",
  lead: "Create a branded learning platform with course discovery, flexible study journeys and practical tools for learners, instructors and administrators.",
  heroImage: "/talabat/banner-wel.png.webp",
  heroImageAlt: "Placeholder mobile screens for an e-learning app",
  overview: ["This placeholder solution brings learners, educators, courses, progress tracking and support into one connected digital experience.", "The final platform can be configured around your curriculum, audience, content formats and commercial model."],
  metrics: [["3", "connected user products"], ["1", "central learning hub"], ["24/7", "dummy learning access"]],
  features: [["Course catalogue", "Dummy course discovery, category and search experiences for learners."], ["Learning journeys", "Placeholder video, lesson, quiz and progress-tracking flows."], ["Instructor tools", "Sample content publishing, learner management and course-update controls."], ["Assessments", "Dummy quizzes, assignments, completion markers and certification workflows."], ["Flexible enrolment", "Configure access plans, payments, cohorts and learning paths."], ["Learning analytics", "Review placeholder enrolment, progress and course-performance insights."]],
  modules: [{ number: "01", label: "Learner app", title: "Make learning easy to start and continue.", text: "Dummy learner flows include browsing courses, viewing lessons, tracking progress and managing a study plan.", image: "/talabat/customer-panel.png.webp", alt: "Placeholder e-learning customer app" }, { number: "02", label: "Instructor workspace", title: "Simple controls for course creators.", text: "A sample instructor experience for creating courses, organising lessons and monitoring learner activity.", image: "/talabat/app-screen3.png.webp", alt: "Placeholder e-learning instructor screen" }, { number: "03", label: "Admin hub", title: "Manage the learning operation in one place.", text: "A dummy admin workspace for users, courses, payments, support, access and reporting.", image: "/talabat/banner-wel.png.webp", alt: "Placeholder e-learning application screens" }],
  technologyLead: "Placeholder technology choices can support dependable content delivery, learner progress and future growth.",
  technologyImage: "/talabat/all-language.webp",
  technologyImageAlt: "Placeholder application technology stack",
  technologyTags: ["iOS and Android", "Learning dashboard", "Secure APIs", "Cloud deployment", "Payment integration", "Notifications"],
  process: [["Discovery", "Define learners, courses, content formats and learning outcomes."], ["UX and UI design", "Create placeholder education journeys around your future brand."], ["Development", "Build the learner, instructor and administration experiences."], ["Testing and launch", "Validate key dummy flows before production planning."]],
  cta: { eyebrow: "Planning a learning platform?", title: "Let’s discuss what you want to build.", body: "This is placeholder content for an e-learning solution page.", href: "mailto:info@webtekdigital.com?subject=E-learning app development enquiry" },
};

export default function Page() { return <CloneAppTemplate config={config} />; }
