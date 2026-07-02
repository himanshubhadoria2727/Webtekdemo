"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";
import { HeaderVideoSection } from "../home/HeaderVideoSection";
import { VideoCtaSection } from "../shared/VideoCtaSection";

const galleryImages = [
  { src: "/about/about-04.jpg", alt: "Webtek Digital team collaborating in a bright workspace" },
  { src: "/about/about-09.jpg", alt: "Digital marketing team working together on laptops" },
  { src: "/about/about-13.jpg", alt: "Dubai skyscrapers representing Webtek Digital's UAE presence" },
  { src: "/about/about-15.jpg", alt: "Warm architectural interior for creative business thinking" },
  { src: "/about/about-16.jpg", alt: "UX planning sketches and brand design materials" },
] as const;

const impactStats = [
  {
    value: "10+",
    countTo: 10,
    suffix: "+",
    label: "years of digital excellence",
    detail: "Helping businesses grow across Dubai, the UAE and beyond.",
  },
  {
    value: "2,000+",
    countTo: 2000,
    suffix: "+",
    label: "projects delivered",
    detail: "From websites and branding to performance marketing campaigns.",
  },
  {
    value: "500+",
    countTo: 500,
    suffix: "+",
    label: "businesses empowered",
    detail: "Building long-term partnerships across multiple industries.",
  },
  {
    value: "20+",
    countTo: 20,
    suffix: "+",
    label: "industries served",
    detail: "Delivering tailored digital solutions for diverse business sectors.",
  },
  {
    value: "10M+",
    countTo: 10,
    suffix: "M+",
    label: "qualified leads generated",
    detail: "Creating customer journeys that convert visitors into customers.",
  },
  {
    value: "AED 50M+",
    countTo: 50,
    prefix: "AED ",
    suffix: "M+",
    label: "advertising budget managed",
    detail: "Driving measurable growth through Google Ads, Meta Ads and performance marketing.",
  },
] as const;

const approachSteps = [
  {
    title: "Discover",
    text: "Understanding your business, customers, competitors and market opportunities.",
  },
  {
    title: "Strategise",
    text: "Developing data-driven digital marketing strategies aligned with your business objectives.",
  },
  {
    title: "Create",
    text: "Designing websites, branding, content and digital experiences that inspire confidence.",
  },
  {
    title: "Accelerate",
    text: "Generating qualified traffic through SEO, Google Ads, Meta Ads, social media marketing and content marketing.",
  },
  {
    title: "Optimise",
    text: "Using analytics, customer insights and continuous testing to improve every campaign and customer interaction.",
  },
  {
    title: "Scale",
    text: "Expanding your digital ecosystem through automation, CRM integration, conversion optimisation and long-term growth strategies.",
  },
] as const;

const services = [
  "Website Design & Development",
  "Search Engine Optimisation",
  "Google Ads Management",
  "Meta Advertising",
  "Social Media Marketing",
  "Branding & Creative Design",
  "Content Creation",
  "Video Shooting & Production",
  "Performance Marketing",
  "Marketing Automation & CRM Integration",
  "Email Marketing",
  "Analytics & Conversion Optimisation",
] as const;

const reasons = [
  "Over a decade of industry experience",
  "Customer journey-focused marketing strategies",
  "Data-driven decision making",
  "Transparent reporting and measurable KPIs",
  "Certified expertise across leading digital platforms",
  "Dedicated account management",
  "Creative thinking backed by performance insights",
  "End-to-end digital marketing solutions",
] as const;

const industries = [
  "Healthcare",
  "Real Estate",
  "Education",
  "Retail & E-commerce",
  "Hospitality & Restaurants",
  "Automotive",
  "Construction",
  "Professional Services",
  "Beauty & Wellness",
  "Technology",
  "Corporate & B2B",
  "Startups & SMEs",
] as const;

function CountUpNumber({
  value,
  countTo,
  prefix = "",
  suffix = "",
}: {
  value: string;
  countTo: number;
  prefix?: string;
  suffix?: string;
}) {
  const numberRef = useRef<HTMLElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) {
      return;
    }

    let frameId = 0;
    let hasAnimated = false;
    const duration = 950;

    const runAnimation = () => {
      if (hasAnimated) {
        return;
      }

      hasAnimated = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplayValue(countTo);
        return;
      }

      const startTime = performance.now();

      const tick = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setDisplayValue(Math.round(countTo * easedProgress));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [countTo]);

  return (
    <strong ref={numberRef} aria-label={value}>
      {prefix}
      {displayValue.toLocaleString("en-US")}
      {suffix}
    </strong>
  );
}

export function AboutPage() {
  return (
    <div className={styles.pageWrap}>
      <Header />
      <main className={styles.aboutUsPage}>
        <section className={styles.aboutUsHero}>
          <div>
            {/* <p className={styles.aboutUsEyebrow}>about webtek digital</p> */}
            <h1>building customer journeys that create lasting business growth</h1>
          </div>
          <div className={styles.aboutUsHeroCopy}>
            <p>
              Digital success is not about one campaign, one website or one advertisement. It is about
              creating a connected customer journey that attracts the right audience, builds trust, generates
              qualified leads and turns them into loyal customers.
            </p>
            <p>
              At Webtek Digital, we have spent more than a decade helping businesses across Dubai and the UAE
              grow through strategy-led digital marketing, innovative technology and measurable performance.
            </p>
            <Link href="/#contact-us" className={styles.aboutUsTextLink}>
              <span aria-hidden="true">-&gt;</span> Let&apos;s build your growth strategy
            </Link>
          </div>
        </section>

        <section className={styles.aboutUsGallery} aria-label="Webtek Digital team and work moments">
          <div className={styles.aboutUsGalleryTrack}>
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                className={styles.aboutUsGalleryGroup}
                aria-hidden={setIndex === 1 ? "true" : undefined}
              >
                {galleryImages.map((image) => (
                  <figure key={`${setIndex}-${image.src}`} className={styles.aboutUsGalleryItem}>
                    <Image
                      src={image.src}
                      alt={setIndex === 0 ? image.alt : ""}
                      fill
                      sizes="(max-width: 760px) 82vw, 38vw"
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.aboutUsImpact}>
          <div className={styles.aboutUsImpactIntro}>
            <p>our impact</p>
            <h2>A decade of growth. Thousands of success stories.</h2>
          </div>
          <p className={styles.aboutUsImpactText}>
            Over the years, we have partnered with businesses of every size, from ambitious startups to
            established enterprises, helping them strengthen their digital presence and accelerate business
            growth through integrated marketing solutions.
          </p>
          <div className={styles.aboutUsStatsGrid}>
            {impactStats.map((stat) => (
              <article key={stat.label} className={styles.aboutUsStat}>
                <p>{stat.label}</p>
                <CountUpNumber
                  value={stat.value}
                  countTo={stat.countTo}
                  prefix={"prefix" in stat ? stat.prefix : undefined}
                  suffix={stat.suffix}
                />
                <span>{stat.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.aboutUsSplit}>
          <h2>who we are</h2>
          <div className={styles.aboutUsBodyCopy}>
            <p>
              More than a digital marketing agency, Webtek Digital is your growth partner. Every business has
              a unique story, and every customer follows a different journey.
            </p>
            <p>
              As a leading 360 degree digital marketing agency in Dubai, we combine strategy, creativity,
              technology and performance marketing to help businesses attract, engage and convert their ideal
              customers. Whether someone discovers your business through Google Search, social media, paid
              advertising or your website, every interaction should feel seamless, consistent and purposeful.
            </p>
            <p>
              For over 10 years, we have partnered with businesses across healthcare, real estate, education,
              hospitality, retail, automotive, professional services and many other industries to create digital
              ecosystems that deliver measurable business results.
            </p>
          </div>
        </section>

        <HeaderVideoSection />

        <section className={styles.aboutUsSplit}>
          <h2>our philosophy</h2>
          <div className={styles.aboutUsBodyCopy}>
            <p>
              Marketing is not about generating more clicks. It is about creating meaningful experiences that
              guide customers through every stage of their decision-making process.
            </p>
            <p>
              From the first impression to the final conversion and beyond, we optimise every digital touchpoint
              to strengthen your brand, improve engagement and maximise return on investment. Sustainable growth
              happens when every part of your digital presence works together.
            </p>
          </div>
        </section>

        <section className={styles.aboutUsApproach}>
          <div className={styles.aboutUsSectionHeader}>
            <p>our approach</p>
            <h2>a connected growth framework</h2>
          </div>
          <div className={styles.aboutUsApproachGrid}>
            {approachSteps.map((step, index) => (
              <article key={step.title} className={styles.aboutUsApproachCard}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.aboutUsLists}>
          <div className={styles.aboutUsSectionHeader}>
            <p>our services</p>
            <h2>everything your business needs under one roof</h2>
          </div>
          <p className={styles.aboutUsListsLead}>
            Every service is designed to work together, creating one connected customer journey that delivers
            measurable business outcomes.
          </p>
          <div className={styles.aboutUsListColumns}>
            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <ul>
              {reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.aboutUsIndustries}>
          <div className={styles.aboutUsSectionHeader}>
            <p>industries we serve</p>
            <h2>tailored digital marketing strategies for every business</h2>
          </div>
          <div className={styles.aboutUsIndustryGrid}>
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </section>

        <VideoCtaSection />
      </main>
      <Footer />
    </div>
  );
}
