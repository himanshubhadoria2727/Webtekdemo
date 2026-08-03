"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "../home/Footer";
import { FloatingWhatsAppButton } from "../home/FloatingWhatsAppButton";
import { Header } from "../home/Header";
import { ArrowIcon } from "../shared/ArrowIcon";
import styles from "./PortfolioPage.module.css";

const categories = ["All work", "Websites", "Mobile apps", "Branding", "Growth"] as const;
type Category = (typeof categories)[number];

const projects = [
  { title: "Nexa Health", category: "Websites", service: "Digital platform & lead generation", image: "/about/about-01.jpg", tone: "amber" },
  { title: "Luma Living", category: "Branding", service: "Brand strategy & visual identity", image: "/about/about-16.jpg", tone: "coral" },
  { title: "Mile Market", category: "Mobile apps", service: "Ecommerce app experience", image: "/services/app-development/2-slider/E-commerce & retail.png", tone: "blue" },
  { title: "Verde Properties", category: "Growth", service: "Paid media & conversion campaign", image: "/about/about-12.jpg", tone: "lime" },
  { title: "Casa Studio", category: "Websites", service: "Commerce website redesign", image: "/services/web-development/1-slider/Retail & ecommerce.png", tone: "violet" },
  { title: "Fika Collective", category: "Branding", service: "Brand identity & launch content", image: "/services/branding-pr/2-slider/09-restaurants-food-brands.png", tone: "pink" },
  { title: "Pulse Fitness", category: "Mobile apps", service: "Member app & product design", image: "/services/app-development/2-slider/Fitness & Sports.png", tone: "red" },
  { title: "Atlas Advisory", category: "Growth", service: "SEO & performance marketing", image: "/about/about-10.jpg", tone: "teal" },
] as const;

const seoHighlights = [
  { value: "01", label: "Technical foundation", text: "Site architecture, speed and structured data built to make every important page easier to find." },
  { value: "02", label: "Content that answers", text: "Search-led content plans shaped around the questions customers ask before they enquire or buy." },
  { value: "03", label: "Measured momentum", text: "Clear reporting across visibility, qualified traffic and the actions that matter to the business." },
] as const;

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All work");
  const visibleProjects = projects.filter((project) => activeCategory === "All work" || project.category === activeCategory);

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <h1>Digital work<br />designed to<br /><em>move brands forward.</em></h1>
            <div className={styles.heroCopy}>
              <p>Every project starts with a clear business need, then brings together the right mix of strategy, design, technology and growth to answer it.</p>
              <p>Explore a selection of websites, platforms, identities and performance campaigns made for ambitious businesses across the UAE.</p>
              <a href="#work" className={styles.scrollLink}>Explore selected work <span className={styles.ctaArrow}><ArrowIcon /></span></a>
            </div>
          </div>
        </section>

        <section id="work" className={styles.work}>
          <div className={styles.workHeader}>
            <p>01 / Case studies</p>
            <h2>A varied body<br />of work.</h2>
            <p>These projects use current assets as visual placeholders. We can swap every image for final case-study artwork later.</p>
          </div>
          <div className={styles.filters} aria-label="Filter work by service">
            {categories.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} className={activeCategory === category ? styles.filterActive : ""}>{category}</button>)}
          </div>
          <div className={styles.grid}>
            {visibleProjects.map((project, index) => (
              <article className={styles.card} key={project.title}>
                <div className={[styles.media, styles[project.tone], index % 3 === 0 ? styles.tall : ""].filter(Boolean).join(" ")}>
                  <Image src={project.image} alt={`${project.title} project placeholder`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  <span className={styles.cardArrow} aria-hidden="true">↗</span>
                </div>
                <div className={styles.cardMeta}><p>{project.category}</p><h3>{project.title}</h3><span>{project.service}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.seoSection}>
          <div className={styles.seoIntro}>
            <p className={styles.eyebrow}>02 / SEO</p>
            <h2>Search visibility<br />built to <em>last.</em></h2>
            <p>SEO is not a side task after launch. We connect technical foundations, useful content and performance insight to turn search demand into sustainable growth.</p>
            <Link href="#contact-us" className={styles.seoCta}>Talk SEO with us <span className={styles.ctaArrow}><ArrowIcon /></span></Link>
          </div>
          <div className={styles.seoHighlights}>
            <p>How we create search momentum</p>
            {seoHighlights.map((highlight) => <article key={highlight.value}><span>{highlight.value}</span><div><h3>{highlight.label}</h3><p>{highlight.text}</p></div></article>)}
          </div>
        </section>

        <section className={styles.cta}>
          <p>Have a brief?</p>
          <h2>Let&apos;s make your next<br /><em>move matter.</em></h2>
          <Link href="#contact-us">Start a conversation <span className={styles.ctaArrow}><ArrowIcon /></span></Link>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
