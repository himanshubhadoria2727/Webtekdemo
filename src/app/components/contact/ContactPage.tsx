"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";
import { FloatingWhatsAppButton } from "../home/FloatingWhatsAppButton";
import styles from "./ContactPage.module.css";

const services = [
  "Website design & development",
  "Mobile app development",
  "SEO & reputation management",
  "Google Ads & performance marketing",
  "Social media marketing",
  "Branding & public relations",
  "Content, photography & video",
  "Something else",
] as const;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export function ContactPage() {
  const [isPreparing, setIsPreparing] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const service = String(form.get("service") ?? "New project enquiry");
    const subject = encodeURIComponent(`${service} enquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${form.get("email") ?? ""}`,
        `Phone: ${form.get("phone") ?? ""}`,
        `Company: ${form.get("company") ?? ""}`,
        `Service: ${service}`,
        `Budget: ${form.get("budget") ?? "Not specified"}`,
        "",
        "Project details:",
        String(form.get("message") ?? ""),
      ].join("\n"),
    );

    setIsPreparing(true);
    window.location.href = `mailto:info@webtekdigital.com?subject=${subject}&body=${body}`;
    window.setTimeout(() => setIsPreparing(false), 1200);
  }

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <motion.div initial="hidden" animate="show" variants={reveal} className={styles.heroInner}>
            <h1>
              Let&apos;s create your next digital success story in <span>Dubai</span>
            </h1>
            <div className={styles.heroCopy}>
              <p>
                Whether you are launching a new brand, scaling a digital product or looking for stronger marketing
                performance, the right conversation can turn an ambitious idea into a clear plan.
              </p>
              <p>
                Share your goals with our team and we will bring together the strategy, creativity and technology
                needed to move your business forward.
              </p>
              <a href="#enquiry-form" className={styles.heroLink}>
                Tell us about your project
                <span aria-hidden="true"><ArrowIcon /></span>
              </a>
            </div>
          </motion.div>
        </section>

        <section className={styles.contactDirectory} aria-labelledby="direct-contact-heading">
          <div className={styles.directoryIntro}>
            <p>01 / Direct contact</p>
            <h2 id="direct-contact-heading">Choose the way<br />you want to talk.</h2>
          </div>
          <div className={styles.directoryLinks}>
            <a href="tel:+971581263762">
              <span>Call our team</span>
              <strong>+971 58 126 3762</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a href="mailto:info@webtekdigital.com">
              <span>Send an email</span>
              <strong>info@webtekdigital.com</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a href="https://wa.me/971581263762" target="_blank" rel="noreferrer">
              <span>Chat on WhatsApp</span>
              <strong>Usually the quickest</strong>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </section>

        <section className={styles.formSection} id="enquiry-form">
          <motion.div
            className={styles.formIntro}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={reveal}
          >
            <p className={styles.eyebrow}>02 / Project enquiry</p>
            <h2>What can we help you build or grow?</h2>
            <p>
              Share as much or as little as you have. We&apos;ll review your brief and get back to you with useful next
              steps—typically within one business day.
            </p>

            <div className={styles.expectation}>
              <span>01</span>
              <p><strong>Tell us the goal</strong> A short brief is enough to begin.</p>
              <span>02</span>
              <p><strong>Meet the right specialist</strong> We&apos;ll bring in the team best suited to your project.</p>
              <span>03</span>
              <p><strong>Get a clear next step</strong> Scope, timing and priorities—without the hard sell.</p>
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
          >
            <div className={styles.field}>
              <label htmlFor="contact-name">Your name *</label>
              <input id="contact-name" name="name" autoComplete="name" placeholder="Jane Smith" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-email">Work email *</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-phone">Phone number</label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+971" />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-company">Company</label>
              <input id="contact-company" name="company" autoComplete="organization" placeholder="Your company" />
            </div>
            <div className={`${styles.field} ${styles.fullField}`}>
              <label htmlFor="contact-service">What are you looking for? *</label>
              <select id="contact-service" name="service" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                {services.map((service) => <option key={service}>{service}</option>)}
              </select>
            </div>
            <div className={`${styles.field} ${styles.fullField}`}>
              <label htmlFor="contact-budget">Estimated budget</label>
              <select id="contact-budget" name="budget" defaultValue="">
                <option value="">Select a range (optional)</option>
                <option>AED 10k–25k</option>
                <option>AED 25k–50k</option>
                <option>AED 50k–100k</option>
                <option>AED 100k+</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className={`${styles.field} ${styles.fullField}`}>
              <label htmlFor="contact-message">Tell us about the project *</label>
              <textarea id="contact-message" name="message" rows={5} placeholder="What are you trying to achieve?" required />
            </div>
            <div className={styles.formFooter}>
              <p>Submitting opens your email app with the brief ready to send.</p>
              <button type="submit" disabled={isPreparing}>
                <span>{isPreparing ? "Preparing…" : "Send enquiry"}</span>
                <ArrowIcon />
              </button>
            </div>
          </motion.form>
        </section>

        <section className={styles.officeSection}>
          <div>
            <p className={styles.eyebrow}>Based in Dubai. Built for everywhere.</p>
            <h2>Close to the market.<br />Connected to your ambition.</h2>
          </div>
          <div className={styles.officeDetails}>
            <div>
              <span>Availability</span>
              <strong>Monday–Saturday</strong>
              <p>9:00 AM–6:00 PM GST</p>
            </div>
            <div>
              <span>Response time</span>
              <strong>Within one business day</strong>
              <p>Often much sooner.</p>
            </div>
            <div>
              <span>Working across</span>
              <strong>UAE · GCC · Worldwide</strong>
              <p>Remote-friendly by design.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
