import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../components/home/Footer";
import { FloatingWhatsAppButton } from "../../components/home/FloatingWhatsAppButton";
import { Header } from "../../components/home/Header";
import { VideoCtaSection } from "../../components/shared/VideoCtaSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Talabat Clone App Development Dubai | Webtek Digital",
  description:
    "Launch a white-label food and grocery delivery platform with customer, vendor, driver and admin experiences built for the UAE.",
};

const features = [
  ["Multi-vendor marketplace", "Manage restaurants, grocery stores, branches, menus, products and availability from one platform."],
  ["Simple customer journey", "Help users discover vendors, place orders, pay securely and follow delivery progress with less friction."],
  ["Live delivery operations", "Connect order status, rider assignment, service zones and customer notifications in real time."],
  ["Flexible business rules", "Configure commissions, delivery charges, offers, payment methods and operating areas around your model."],
  ["Multi-language support", "Prepare the experience for English, Arabic and additional languages as your audience grows."],
  ["Reports and control", "Track orders, vendors, users, revenue and operational performance from a central admin system."],
] as const;

const modules = [
  {
    number: "01",
    label: "Customer app",
    title: "A clear journey from discovery to delivery.",
    text: "Customers can browse restaurants and stores, search products, view offers, build a cart, pay securely, schedule delivery and track each order.",
    image: "/talabat/customer-panel.png.webp",
    alt: "Customer food delivery application screen",
  },
  {
    number: "02",
    label: "Vendor platform",
    title: "Simple controls for restaurants and stores.",
    text: "Partners can manage menus, inventory, pricing, discounts, availability, incoming orders and branch activity without relying on your internal team.",
    image: "/talabat/app-screen3.png.webp",
    alt: "Restaurant and store delivery application screens",
  },
  {
    number: "03",
    label: "Admin and delivery",
    title: "One place to manage the operation.",
    text: "Your team can control vendors, customers, drivers, service zones, commissions, coupons, payments, disputes and reporting from a connected admin system.",
    image: "/talabat/banner-wel.png.webp",
    alt: "Food delivery application shown in phone mockups",
  },
] as const;

const process = [
  ["Discovery", "We define your users, market, revenue model, delivery workflow and launch priorities."],
  ["UX and UI design", "We plan the key journeys and create a clean interface around your own brand."],
  ["Development", "We build and connect the customer, vendor, driver and admin products."],
  ["Testing and launch", "Critical order flows are tested before production release and handover."],
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Page() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>White-label delivery platform</p>
            <h1>Talabat clone app development in Dubai</h1>
            <p className={styles.lead}>
              Launch a branded food, grocery or local delivery marketplace with the customer experience and operational tools needed to grow.
            </p>
            <div className={styles.actions}>
              <Link href="#contact" className={styles.primaryButton}>Discuss your project <Arrow /></Link>
              <Link href="#platform" className={styles.secondaryButton}>Explore the platform</Link>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <Image
              src="/talabat/banner-wel.png.webp"
              alt="Talabat-style food delivery application shown on mobile devices"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
        </section>

        <section className={styles.overview}>
          <header className={styles.sectionHeading}>
            <span>01.</span>
            <div>
              <p>Platform overview</p>
              <h2>A complete delivery ecosystem, built around your business.</h2>
            </div>
          </header>
          <div className={styles.overviewCopy}>
            <p>
              A successful delivery product connects more than customers and restaurants. It must coordinate vendors, riders, orders, payments, service zones and support through one reliable system.
            </p>
            <p>
              Webtek Digital designs and develops the platform around your market, brand and operating model, giving you a practical foundation for launch and future growth.
            </p>
            <div className={styles.metrics}>
              <div><strong>4</strong><span>connected user products</span></div>
              <div><strong>1</strong><span>central operating system</span></div>
              <div><strong>24/7</strong><span>ordering availability</span></div>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <header className={styles.sectionHeading}>
            <span>02.</span>
            <div>
              <p>Core capabilities</p>
              <h2>Everything needed to operate and grow.</h2>
            </div>
          </header>
          <div className={styles.featureGrid}>
            {features.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.platform} id="platform">
          <header className={styles.sectionHeading}>
            <span>03.</span>
            <div>
              <p>Connected products</p>
              <h2>Focused experiences for every user.</h2>
            </div>
          </header>
          <div className={styles.moduleList}>
            {modules.map((module) => (
              <article className={styles.module} key={module.title}>
                <div className={styles.moduleMedia}>
                  <Image src={module.image} alt={module.alt} fill sizes="(max-width: 800px) 100vw, 48vw" />
                </div>
                <div className={styles.moduleCopy}>
                  <span>{module.number}</span>
                  <p className={styles.moduleLabel}>{module.label}</p>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.technology}>
          <div className={styles.technologyCopy}>
            <header className={styles.sectionHeading}>
              <span>04.</span>
              <div>
                <p>Technology</p>
                <h2>Built on a modern, scalable foundation.</h2>
              </div>
            </header>
            <p className={styles.technologyLead}>
              We select the app, backend, cloud and integration technologies around performance, maintainability and your long-term requirements.
            </p>
            <div className={styles.tags}>
              {["iOS and Android", "Admin dashboard", "Secure APIs", "Cloud deployment", "Payment integration", "Maps and notifications"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className={styles.technologyMedia}>
            <Image src="/talabat/all-language.webp" alt="Application development technology stack" fill sizes="(max-width: 800px) 100vw, 44vw" />
          </div>
        </section>

        <section className={styles.process}>
          <header className={styles.sectionHeading}>
            <span>05.</span>
            <div>
              <p>Our process</p>
              <h2>A clear path from idea to launch.</h2>
            </div>
          </header>
          <div className={styles.processList}>
            {process.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <div id="contact">
          <VideoCtaSection
            eyebrow="Planning a delivery platform?"
            title="Let’s discuss what you want to build."
            body="Tell us about your market, business model and launch goals. We’ll help you define the right product scope."
            ctaLabel="Start a conversation"
            ctaHref="mailto:info@webtekdigital.com?subject=Talabat clone app development enquiry"
          />
        </div>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
