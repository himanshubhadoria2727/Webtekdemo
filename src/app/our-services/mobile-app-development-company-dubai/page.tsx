import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../components/home/Footer";
import { FloatingWhatsAppButton } from "../../components/home/FloatingWhatsAppButton";
import { Header } from "../../components/home/Header";
import { VideoCtaSection } from "../../components/shared/VideoCtaSection";
import { ServicesCarousel } from "./ServicesCarousel";
import styles from "./page.module.css";

const pageUrl = "https://www.webtekdigital.com/our-services/mobile-app-development-company-dubai/";

export const metadata: Metadata = {
  title: "Mobile App Development Company Dubai | Webtek Digital",
  description:
    "Looking for a mobile app development company in Dubai? Webtek Digital builds custom Android, iOS, Flutter and React Native apps for startups, SMEs and enterprises across the UAE. Request a free consultation.",
  keywords: [
    "mobile app development company Dubai",
    "mobile app development Dubai",
    "app development company Dubai",
    "mobile app developers Dubai",
    "Android app development Dubai",
    "iOS app development Dubai",
    "custom mobile app development UAE",
    "Flutter app development Dubai",
    "React Native app development Dubai",
    "AI app development Dubai",
    "enterprise mobile app development UAE",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Mobile App Development Company Dubai | Webtek Digital",
    description: "Custom Android, iOS and cross-platform app development for businesses across Dubai and the UAE.",
    url: pageUrl,
    type: "website",
  },
};

const services = [
  ["Custom Mobile App Development", "We build around your workflows, customer needs and commercial goals—not a generic template. Your app gets the features, integrations, user journeys and administrative tools your operation needs, with room to scale."],
  ["Android App Development", "Planning, UI/UX design, engineering, testing and Google Play deployment for responsive Android applications, with close attention to performance, security and device compatibility."],
  ["iOS App Development", "Polished iPhone and iPad applications with intuitive navigation, visual consistency, secure architecture and an implementation aligned with App Store requirements."],
  ["Flutter App Development", "Fast, modern and scalable Android and iOS products from a shared codebase—helping reduce development time and simplify long-term maintenance."],
  ["React Native App Development", "Flexible cross-platform apps with native-like performance, reusable code and smooth third-party integrations for faster, more efficient releases."],
  ["Enterprise Mobile App Development", "Employee portals, field-service apps, sales tools, inventory systems, approvals and dashboards that connect teams and digitise internal processes."],
  ["AI-Powered Mobile App Development", "Practical AI for chat, recommendations, content generation, document processing, predictive insight, search and automation—selected around clear user value and responsible data handling."],
  ["Mobile App UI/UX Design", "User flows, wireframes, interface design and interactive prototypes that turn complex requirements into clear, attractive and usable mobile experiences."],
  ["App Redesign and Modernisation", "We improve outdated interfaces, simplify navigation, upgrade technology, resolve performance issues and add features that support current business needs."],
  ["App Maintenance and Support", "Ongoing bug fixes, compatibility and security updates, performance monitoring and feature enhancements keep your app stable after launch."],
] as const;

const outcomes = [
  "Create a convenient mobile experience for customers",
  "Increase repeat purchases, bookings and retention",
  "Send personalised notifications, offers and service updates",
  "Accept secure online payments and subscriptions",
  "Automate manual processes and reduce administrative work",
  "Connect field teams, branches, suppliers or employees",
  "Provide real-time data, reports and dashboards",
  "Build loyalty programmes and reward repeat customers",
  "Collect valuable behavioural and customer insights",
  "Launch a marketplace, on-demand service or subscription product",
] as const;

const industries = [
  ["E-commerce & retail", "Catalogues, carts, payments, order tracking, loyalty, offers and inventory integration."],
  ["Real estate", "Property listings, advanced search, maps, lead capture, viewing requests and CRM integration."],
  ["Healthcare & wellness", "Booking, patient communication, reminders, secure access and wellness tracking, subject to applicable requirements."],
  ["Restaurants & food delivery", "Digital menus, ordering, reservations, delivery tracking, payments, offers and rewards."],
  ["Education & training", "Courses, live classes, assessments, progress tracking, notifications and LMS integrations."],
  ["Logistics & delivery", "Driver tools, routes, live tracking, proof of delivery, dispatch and customer notifications."],
  ["Hospitality & travel", "Bookings, itineraries, digital concierge, guest communication, loyalty and location-based recommendations."],
  ["Fitness & sports", "Memberships, class booking, workout plans, coach communication, progress and subscriptions."],
  ["Financial & business", "Customer portals, approvals, dashboards, document submission and process automation."],
  ["Home & on-demand services", "Service discovery, booking, provider allocation, live updates, payments, ratings and support."],
] as const;

const industryVisualLabels = ["Retail", "Real estate", "Healthcare", "Food & delivery", "Education", "Logistics", "Hospitality", "Fitness", "Business", "On-demand"] as const;

const serviceCarouselImages = [
  { src: "/about/about-12.jpg", alt: "Product team reviewing a custom mobile application" },
  { src: "/talabat/customer-panel.png.webp", alt: "Customer-facing mobile application interface" },
  { src: "/talabat/app-screen3.png.webp", alt: "Mobile application screens displayed on smartphones" },
  { src: "/about/about-09.jpg", alt: "Development team collaborating on a cross-platform product" },
  { src: "/about/about-10.jpg", alt: "Digital specialists planning a mobile product" },
  { src: "/about/about-14.jpg", alt: "Business team reviewing enterprise application requirements" },
  { src: "/about/about-11.jpg", alt: "Specialist working with digital analytics and AI tools" },
  { src: "/talabat/banner-wel.png.webp", alt: "Branded mobile application welcome screen" },
  { src: "/about/about-02.jpg", alt: "Team discussing a digital product redesign" },
  { src: "/about/about-15.jpg", alt: "Digital team supporting an application after launch" },
] as const;

const industryCarouselImages = [
  { src: "/brands/ounass-removebg-preview.png", alt: "Retail brand presentation representing ecommerce applications" },
  { src: "/about/about-13.jpg", alt: "Modern property environment representing real estate applications" },
  { src: "/about/about-08.jpg", alt: "Professional workspace representing healthcare application planning" },
  { src: "/talabat/banner-wel.png.webp", alt: "Food ordering application welcome interface" },
  { src: "/brands/dubai-uni-removebg-preview.png", alt: "Education brand presentation representing learning applications" },
  { src: "/about/about-15.jpg", alt: "Mobile professional representing logistics and field-service applications" },
  { src: "/about/about-05.jpg", alt: "Hospitality environment representing guest-service applications" },
  { src: "/about/about-06.jpg", alt: "Active team environment representing fitness applications" },
  { src: "/about/about-14.jpg", alt: "Business team reviewing dashboards and operational applications" },
  { src: "/talabat/app-screen3.png.webp", alt: "On-demand service application displayed across mobile screens" },
] as const;

const features = [
  "Secure login, social login, biometrics and role-based access",
  "Product or service catalogues",
  "Online booking and appointment scheduling",
  "Shopping carts, subscriptions and payment gateways",
  "Push notifications, email and SMS alerts",
  "GPS, maps, live location and route tracking",
  "In-app chat, support tickets and AI chatbots",
  "Photo, video, document and file uploads",
  "Ratings, reviews and feedback forms",
  "Loyalty points, coupons and referrals",
  "Multi-language and right-to-left interfaces",
  "Admin dashboards and reporting",
  "CRM, ERP, inventory and accounting integrations",
  "Analytics and conversion measurement",
  "Offline access and cloud synchronisation",
  "Third-party APIs, content management and moderation",
] as const;

const process = [
  ["Discovery and consultation", "We understand your business, users, challenges, commercial model and expected outcomes, then identify what a focused first version should achieve."],
  ["Requirements and product planning", "We define roles, features, integrations, admin requirements and technical considerations, then organise priorities into milestones."],
  ["User flows and wireframes", "We map how every user moves through the app and establish screen structure and functionality before visual design or coding."],
  ["UI/UX design and prototype", "We create a clear branded interface and, where needed, an interactive prototype for reviewing journeys and interactions."],
  ["Technology and architecture", "Native or cross-platform technology, backend, database, APIs and hosting are planned around performance, scale, maintenance and budget."],
  ["Mobile app development", "Front-end apps, backend systems, dashboards and integrations are built in planned stages and reviewed at agreed milestones."],
  ["Quality assurance and testing", "Relevant devices and scenarios are tested for functionality, usability, compatibility, security and performance before launch."],
  ["Deployment and store submission", "We prepare releases and assist with Apple App Store and Google Play submission, subject to each platform’s policies and review."],
  ["Launch, analytics and support", "We can monitor performance, resolve issues, review feedback and track registrations, enquiries, purchases or bookings."],
] as const;

const technologies = [
  ["Flutter", "Consistent Android and iOS applications from a shared codebase."],
  ["React Native", "Cross-platform apps with native-like interfaces and reusable code."],
  ["Swift", "A primary technology for native iOS application development."],
  ["Kotlin", "A modern language widely used for native Android development."],
  ["Backend & APIs", "Node.js, PHP/Laravel or Python according to project requirements."],
  ["Cloud & databases", "Secure infrastructure, databases, storage, notifications and analytics."],
  ["AI & automation", "Language-model APIs and AI services where they deliver a clear benefit."],
] as const;

const reasons = [
  ["Business-first approach", "We begin with the problem the app must solve and the result it should create."],
  ["Custom strategy and scope", "Every product is planned around its users, workflows, integrations and roadmap."],
  ["UI/UX-led development", "Clear navigation, accessibility and consistency reduce unnecessary friction."],
  ["Transparent project stages", "Defined stages and milestones make progress and decisions easier to manage."],
  ["Scalable development", "Architecture considers future users, features, integrations and growth."],
  ["Testing before launch", "Structured QA identifies functional, usability and compatibility issues early."],
  ["Post-launch support", "Maintenance, updates and planned enhancements can continue after release."],
  ["Digital growth capabilities", "Our wider team can support landing pages, analytics, SEO, Google Ads and launch campaigns."],
] as const;

const costFactors = [
  "Number of user types and screens",
  "Android, iOS or both platforms",
  "Native or cross-platform development",
  "UI/UX design complexity",
  "Backend, database and admin dashboard requirements",
  "Payments, maps, chat and third-party integrations",
  "Real-time functionality and notifications",
  "Security and compliance requirements",
  "AI features or automation",
  "Testing, deployment, maintenance and future enhancements",
] as const;

const faqs = [
  ["What does a mobile app development company do?", "A mobile app development company helps plan, design, build, test, launch and maintain smartphone and tablet applications. Work can include business analysis, UI/UX, Android and iOS development, backend systems, APIs, testing and store submission."],
  ["Why should I choose a mobile app development company in Dubai?", "A Dubai-based company can simplify communication, meetings, market understanding and local support. You should still evaluate its process, technical capability, project management and relevant experience."],
  ["Do you develop both Android and iOS apps?", "Yes. We develop for Android, iOS or both. The approach depends on your users, functionality, performance expectations, budget and timeline."],
  ["What is the difference between native and cross-platform app development?", "Native apps are built specifically for iOS or Android. Cross-platform apps share a codebase. Native development offers deeper platform control, while cross-platform development can reduce duplicated work and simplify maintenance."],
  ["Which is better: Flutter or React Native?", "Both are established cross-platform frameworks. The best choice depends on design, integrations, performance, team structure and the long-term roadmap, so we evaluate the project first."],
  ["How long does it take to develop a mobile app?", "Timing depends on screens, features, roles, integrations, design complexity and approvals. A clearly defined first version is faster than a large platform with multiple dashboards and real-time functions."],
  ["How much does mobile app development cost in Dubai?", "Cost varies with scope, technology, design, backend requirements, integrations, testing and support. We prepare an estimate after understanding the core requirements."],
  ["Can you help refine my app idea?", "Yes. We can define users, the core problem, essential features, journeys and a suitable first release to keep development focused."],
  ["Do you provide mobile app UI/UX design?", "Yes. Design can include user flows, wireframes, visual interface design and interactive mobile prototypes."],
  ["Can you redesign an existing mobile app?", "Yes. We can identify usability and technical issues, redesign the interface and recommend improvements to performance, structure and features."],
  ["Can you integrate payment gateways?", "Yes. Integration depends on your model, customer location, currencies and provider requirements. Final availability and approval are controlled by the chosen provider."],
  ["Can you integrate the app with our CRM or ERP?", "Yes, where the system provides a suitable API or integration method. We review documentation, data flows and security before confirming scope."],
  ["Can you build an AI-powered mobile app?", "Yes. AI can support conversational assistance, recommendations, search, document processing, generation and automation when designed around user value and responsible data handling."],
  ["Will you publish the app on the App Store and Google Play?", "We assist with preparation and submission. Approval is controlled by Apple and Google and remains subject to their policies, reviews and developer-account requirements."],
  ["Who owns the app source code?", "Ownership, licensing and handover terms are stated in the final proposal and agreement and confirmed before development begins."],
  ["Do you provide app maintenance after launch?", "Yes. Maintenance can include bug fixes, OS compatibility updates, security improvements, performance monitoring and new features."],
  ["Can you build a multilingual mobile app?", "Yes. Apps can support multiple languages and right-to-left layouts. Translation content and language-specific testing should be included in scope."],
  ["Can the app include an admin dashboard?", "Yes. We can build a web administration panel for users, products, bookings, content, orders, notifications and reports."],
  ["Can you add analytics to the mobile app?", "Yes. Analytics can track acquisition, registrations, engagement, purchases, bookings, enquiries and other relevant events."],
  ["Do you sign an NDA?", "An NDA can be considered where confidentiality is required. Intellectual property and data-handling terms should also be covered by the commercial agreement."],
  ["Can you build an MVP for a startup?", "Yes. An MVP focuses on the smallest feature set needed to test the concept with real users, reducing initial cost and creating evidence for future expansion."],
  ["Can you develop enterprise and internal-use apps?", "Yes. We build tools for employees, sales teams, field staff, approvals, inventory, reporting and other internal processes."],
  ["Will my app be scalable?", "Scalability is considered during planning and architecture according to expected users, data volumes, integrations, performance needs and future functionality."],
  ["How do I start my mobile app project with Webtek Digital?", "Send a brief description of the idea, users, features, preferred platforms and any reference apps. We will arrange an initial discussion and recommend next steps."],
] as const;

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webtek Digital",
    url: "https://www.webtekdigital.com/",
    email: "info@webtekdigital.com",
    telephone: "+971581263762",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile App Development in Dubai",
    provider: { "@type": "Organization", name: "Webtek Digital" },
    areaServed: ["Dubai", "United Arab Emirates"],
    serviceType: ["Android app development", "iOS app development", "Flutter app development", "React Native app development", "AI app development"],
    url: pageUrl,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.webtekdigital.com/" },
      { "@type": "ListItem", position: 2, name: "Our Services", item: "https://www.webtekdigital.com/our-services/" },
      { "@type": "ListItem", position: 3, name: "Mobile App Development Company Dubai", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow?: string; title: string }) {
  return (
    <header className={styles.sectionHeading}>
      <span>{number}</span>
      <div>{eyebrow ? <p>{eyebrow}</p> : null}<h2>{title}</h2></div>
    </header>
  );
}

export default function Page() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1>Mobile App Development Company in Dubai</h1>
            </div>
            <div className={styles.heroContent}>
              <p>Turn your app idea into a secure, scalable and user-friendly digital product. Webtek Digital provides end-to-end mobile app development in Dubai for startups, SMEs and established businesses. We design and develop custom Android, iOS and cross-platform applications that help companies improve customer experience, automate operations, generate revenue and grow with confidence.</p>
              <div className={styles.heroLinks}>
                <a className={styles.heroLink} href="#project-form">Get a Free App Consultation <span aria-hidden="true">&rarr;</span></a>
                <a className={styles.heroLink} href="#project-form">Request a Custom Quote <span aria-hidden="true">&rarr;</span></a>
              </div>
              <small>Tell us your idea, business goals and required features. Our team will recommend the right technology, scope and development approach.</small>
            </div>
          </div>
        </section>

        <section className={styles.intro}>
          <SectionHeading number="01." eyebrow="Built around outcomes" title="Custom mobile apps built around your business goals" />
          <div className={styles.introBody}>
            <article><span>01</span><p>A successful mobile application is more than a collection of features. It must solve a real problem, be easy to use, perform reliably and support measurable business objectives.</p></article>
            <article><span>02</span><p>We combine business analysis, <Link href="/our-services#services-overview">UI/UX design</Link>, software engineering, quality assurance and post-launch support. Whether you are launching a digital product, building an internal app, modernising an existing product or adding AI, every project is planned around your users, operations, budget and future growth.</p></article>
            <article><span>03</span><p>Our Dubai team creates Android and iOS solutions using native and cross-platform technologies, connecting apps with websites, CRM, ERP, payments, bookings, maps, analytics, cloud services and third-party APIs.</p></article>
          </div>
        </section>

        <section className={styles.services} id="services">
          <SectionHeading number="02." eyebrow="Strategy to support" title="End-to-end mobile app development services in Dubai" />
          <ServicesCarousel items={services} images={serviceCarouselImages} />
          <div className={styles.inlineCta}><p>Have a product in mind?</p><a href="#project-form">Tell us what you want to build <Arrow /></a></div>
        </section>

        <section className={styles.outcomes}>
          <div className={styles.outcomesTitle}><span>03.</span><h2>What can a mobile app do for your business?</h2><p>The right product can become a direct sales channel, a customer-service platform, an operational tool or a complete digital business model.</p></div>
          <ol>{outcomes.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
        </section>

        <section className={styles.industries}>
          <div className={styles.industriesIntro}>
            <SectionHeading number="04." eyebrow="Made for your operating model" title="Mobile applications for different industries" />
            <div className={styles.industriesLead}>
              <p>Every sector has different workflows, compliance needs and customer expectations. We plan the product around how your business actually operates.</p>
            </div>
          </div>
          <ServicesCarousel items={industries} visualLabels={industryVisualLabels} images={industryCarouselImages} theme="light" />
        </section>

        <section className={styles.features}>
          <SectionHeading number="05." eyebrow="Exactly what the product needs" title="Features we can build into your mobile application" />
          <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </section>

        <section className={styles.process} id="process">
          <SectionHeading number="06." eyebrow="Clear stages, visible progress" title="Our mobile app development process" />
          <div className={styles.processGrid}>{process.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        </section>

        <section className={styles.technology}>
          <div className={styles.techMedia}><Image src="/about/about-09.jpg" alt="Digital product team collaborating around a table" fill sizes="(max-width: 900px) 100vw, 42vw" /></div>
          <div className={styles.techContent}><span>07.</span><p className={styles.kicker}>Practical choices, not defaults</p><h2>Mobile app technologies we work with</h2><p>The right stack depends on purpose, complexity, budget, performance and roadmap. We recommend what fits the product.</p><div>{technologies.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div>
        </section>

        <section className={styles.why}>
          <SectionHeading number="08." eyebrow="One team from brief to growth" title="Why choose Webtek Digital as your app development company in Dubai?" />
          <div className={styles.whyGrid}>{reasons.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
          <p className={styles.internalLinks}>Planning the launch too? Explore our <Link href="/our-services#services-overview">web development</Link>, <Link href="/our-services#services-overview">digital marketing</Link>, <Link href="/our-services#services-overview">SEO</Link> and <Link href="/our-services#services-overview">Google Ads</Link> capabilities.</p>
        </section>

        <section className={styles.cost}>
          <div className={styles.costIntro}><span>09.</span><h2>How much does mobile app development cost in Dubai?</h2><p>Cost depends on scope rather than a single fixed rate. A simple app with standard features requires a different budget from a marketplace, delivery platform, enterprise system or AI-powered product.</p><a className={styles.lightButton} href="#project-form">Request an app development estimate <Arrow /></a></div>
          <div className={styles.costFactors}><p>Main factors that influence cost</p><ul>{costFactors.map((item) => <li key={item}>{item}</li>)}</ul><p>After an initial consultation, we can prepare a scope and quotation based on required features, recommended technology and estimated development stages.</p></div>
        </section>

        <section className={styles.conversion} id="project-form">
          <div className={styles.conversionCopy}><p>Have an app idea?</p><h2>Get a clear development roadmap.</h2><p>Speak with a Dubai-based digital team. We’ll review your idea, identify core functionality and recommend a practical path for design, development and launch.</p><ul><li>Free initial consultation</li><li>Android, iOS and cross-platform solutions</li><li>UI/UX design and interactive prototyping</li><li>Backend, API and payment integration</li><li>Store submission support</li><li>Ongoing maintenance options</li></ul></div>
          <form className={styles.form} action="mailto:info@webtekdigital.com" method="post" encType="text/plain">
            <div><label htmlFor="name">Name</label><input id="name" name="Name" required placeholder="Your name" /></div>
            <div><label htmlFor="company">Company</label><input id="company" name="Company" placeholder="Company name" /></div>
            <div><label htmlFor="contact">Phone or email</label><input id="contact" name="Contact" required placeholder="How can we reach you?" /></div>
            <div><label htmlFor="budget">Budget range</label><select id="budget" name="Budget"><option value="">Select a range</option><option>AED 25k–50k</option><option>AED 50k–100k</option><option>AED 100k+</option><option>Not sure yet</option></select></div>
            <div className={styles.fullField}><label htmlFor="requirement">App requirement</label><textarea id="requirement" name="App requirement" required rows={4} placeholder="Tell us about the idea, users and essential features" /></div>
            <button type="submit">Discuss your app project <Arrow /></button>
            <small>Prefer WhatsApp? <a href="https://wa.me/971581263762" target="_blank" rel="noreferrer">Message our team directly.</a></small>
          </form>
        </section>

        <section className={styles.faq}>
          <SectionHeading number="10." eyebrow="The practical details" title="Frequently asked questions" />
          <div className={styles.faqList}>{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span><h3>{question}</h3><i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}</div>
        </section>

        <VideoCtaSection
          eyebrow="Ready when you are"
          title="Ready to build a mobile app for your business?"
          body="Launch a new app, digitise an existing service or improve an outdated mobile product with a clear recommendation based on your goals, users and required functionality."
          ctaLabel="Book a free consultation"
          ctaHref="#project-form"
        />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      {schema.map((item, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }} />)}
    </div>
  );
}
