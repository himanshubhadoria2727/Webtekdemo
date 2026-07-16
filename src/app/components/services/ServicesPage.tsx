"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type CSSProperties } from "react";
import { servicesPage } from "../../data/services";
import styles from "../../page.module.css";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";
import { ServicesSection } from "../home/ServicesSection";
import { ArrowIcon } from "../shared/ArrowIcon";
import { VideoCtaSection } from "../shared/VideoCtaSection";

const galleryImages = [
  {
    src: "/about/about-09.jpg",
    alt: "Digital product team collaborating around a table",
  },
  {
    src: "/about/about-04.jpg",
    alt: "Business partners celebrating a successful digital project",
  },
  {
    src: "/about/about-12.jpg",
    alt: "Team meeting in a modern office overlooking the city",
  },
  {
    src: "/about/about-02.jpg",
    alt: "Consultants reviewing a digital growth strategy",
  },
  {
    src: "/about/about-14.jpg",
    alt: "Marketing team reviewing performance reports",
  },
  {
    src: "/about/about-15.jpg",
    alt: "Professional walking through a modern office",
  },
] as const;

const serviceVisuals = [
  {
    src: "/about/about-12.jpg",
    alt: "Digital product team reviewing app screens in a modern office",
  },
  {
    src: "/about/about-14.jpg",
    alt: "Performance marketing team reviewing campaign reports",
  },
  {
    src: "/about/about-11.jpg",
    alt: "Search strategy and analytics workspace",
  },
  {
    src: "/about/about-09.jpg",
    alt: "Social media team planning campaign content",
  },
  {
    src: "/about/about-04.jpg",
    alt: "Creative production team preparing campaign assets",
  },
  {
    src: "/about/about-15.jpg",
    alt: "Consultant walking through a modern digital office",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
} as const;

const heroIntroParagraphs = [
  "Webtek Digital brings together app development, SEO, performance marketing, content, and creative under one team in Dubai, so every service on this page is built to work alongside the others - not in isolation.",
  "Whether you need a single campaign or a full growth system, our approach starts with your business goals and works backward into the technology, content, and media spend that gets results. Over 1,500 clients, including government bodies, retail groups, and direct-to-consumer brands, have trusted Webtek Digital to build and grow their digital presence across Dubai and the wider GCC.",
] as const;

export function ServicesPage() {
  const serviceScrollRef = useRef<HTMLElement | null>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: serviceScrollRef,
    offset: ["start start", "end end"],
  });
  const activeVisual = serviceVisuals[activeServiceIndex % serviceVisuals.length];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const lastIndex = servicesPage.services.length - 1;
    const nextIndex = Math.min(lastIndex, Math.max(0, Math.round(latest * lastIndex)));
    setActiveServiceIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
  });

  return (
    <div className={styles.pageWrap}>
      <Header />
      <main className={styles.servicesPage}>
        <section className={styles.servicesPageHero}>
          <motion.div
            className={styles.servicesPageHeroInner}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1>
              Our <span>Services</span>
            </h1>
            <div className={styles.servicesPageHeroCopy}>
              {heroIntroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link href="#contact-us" className={styles.servicesPageHeroCta}>
                Talk to us
                <span className={styles.buttonArrow} aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </motion.div>
        </section>

        <section className={styles.aboutUsGallery} aria-label="Webtek Digital team and work moments">
          <div className={styles.aboutUsGalleryTrack}>
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                className={styles.aboutUsGalleryGroup}
                aria-hidden={setIndex === 1 ? "true" : undefined}
              >
                {galleryImages.map((image, imageIndex) => (
                  <figure key={`${setIndex}-${image.src}`} className={styles.aboutUsGalleryItem}>
                    <Image
                      src={image.src}
                      alt={setIndex === 0 ? image.alt : ""}
                      fill
                      sizes="(max-width: 680px) 82vw, 34vw"
                      priority={setIndex === 0 && imageIndex < 3}
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </section>

        <ServicesSection id="services-overview" />

        <section
          ref={serviceScrollRef}
          className={styles.servicesPageScroll}
          style={{ "--service-count": servicesPage.services.length } as CSSProperties}
          aria-label="Webtek Digital services"
        >
          <div className={styles.servicesPageSticky}>
            <div className={styles.servicesPageStickyCopy}>
              <div className={styles.servicesPageStickyIntro}>
                <p>how we work</p>
                <h2>the Webtek Digital way: connected services for measurable growth</h2>
              </div>

              <div className={styles.servicesPageStickySteps}>
                {servicesPage.services.map((service, index) => {
                  const isActive = activeServiceIndex === index;

                  return (
                    <article
                      key={service.title}
                      className={[styles.servicesPageStep, isActive ? styles.servicesPageStepActive : ""].join(" ")}
                      aria-hidden={!isActive}
                    >
                      <div className={styles.servicesPageStepHeader}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <h3>{service.title}</h3>
                      </div>

                      <div className={styles.servicesPageStepBody}>
                        {service.description.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}

                        <ul>
                          {service.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className={styles.servicesPageStickyMedia} aria-hidden="true">
              <motion.figure
                key={`${activeServiceIndex}-${activeVisual.src}`}
                className={styles.servicesPageMediaItem}
                initial={{ y: 48, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src={activeVisual.src} alt={activeVisual.alt} fill sizes="(max-width: 980px) 100vw, 48vw" />
              </motion.figure>
            </div>
          </div>
        </section>

        <VideoCtaSection
          eyebrow="One team. Every channel."
          title="Let’s Build Your Next Win"
          body="From a single landing page to a full mobile app build, Webtek Digital handles the strategy, the build, and the media spend — so you are not juggling five vendors to run one campaign. Talk to our team about which services fit where your business is right now."
          ctaLabel="Talk to Us →"
          ctaHref="#contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
