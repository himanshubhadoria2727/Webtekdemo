"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Image from "next/image";
import styles from "../../page.module.css";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";

const aboutImages = [
  { src: "/about/about-01.jpg", alt: "Team meeting behind glass in an office" },
  { src: "/about/about-02.jpg", alt: "Business team reviewing analytics on a tablet" },
  { src: "/about/about-03.jpg", alt: "Office building lit at night" },
  { src: "/about/about-04.jpg", alt: "Business colleagues celebrating with a high five" },
  { src: "/about/about-05.jpg", alt: "Team discussion in a bright meeting room" },
  { src: "/about/about-06.jpg", alt: "Business team planning at a conference table" },
  { src: "/about/about-07.jpg", alt: "Retail payment at a point of sale counter" },
  { src: "/about/about-08.jpg", alt: "Close-up of a point of sale terminal" },
  { src: "/about/about-09.jpg", alt: "Team working together on laptops" },
  { src: "/about/about-10.jpg", alt: "Analytics dashboard open on a laptop" },
  { src: "/about/about-11.jpg", alt: "Top-down laptop workspace with coffee" },
  { src: "/about/about-12.jpg", alt: "People silhouetted in front of city windows" },
  { src: "/about/about-13.jpg", alt: "Skyscrapers viewed from below" },
  { src: "/about/about-14.jpg", alt: "Business team reviewing charts and reports" },
  { src: "/about/about-15.jpg", alt: "Businessperson walking through a warm architectural interior" },
  { src: "/about/about-16.jpg", alt: "UX planning sketches and color swatches on a desk" },
] as const;

const primaryTiles = [
  { x: "23vw", y: "18vh", w: "27vw", h: "28vh" },
  { x: "50vw", y: "18vh", w: "27vw", h: "28vh" },
  { x: "23vw", y: "46vh", w: "27vw", h: "30vh" },
  { x: "50vw", y: "46vh", w: "27vw", h: "30vh" },
] as const;

const mosaicTiles = [
  {
    id: "01",
    final: primaryTiles[0],
    tone: "dark",
  },
  {
    id: "02",
    final: primaryTiles[1],
    tone: "accent",
  },
  {
    id: "03",
    final: primaryTiles[2],
    tone: "warm",
  },
  {
    id: "04",
    final: primaryTiles[3],
    tone: "mid",
  },
  {
    id: "05",
    final: { x: "-4vw", y: "-10vh", w: "27vw", h: "28vh" },
    tone: "light",
  },
  {
    id: "06",
    final: { x: "23vw", y: "-10vh", w: "27vw", h: "28vh" },
    tone: "dark",
  },
  {
    id: "07",
    final: { x: "50vw", y: "-10vh", w: "27vw", h: "28vh" },
    tone: "accent",
  },
  {
    id: "08",
    final: { x: "77vw", y: "-10vh", w: "27vw", h: "28vh" },
    tone: "light",
  },
  {
    id: "09",
    final: { x: "-4vw", y: "18vh", w: "27vw", h: "28vh" },
    tone: "mid",
  },
  {
    id: "10",
    final: { x: "77vw", y: "18vh", w: "27vw", h: "28vh" },
    tone: "warm",
  },
  {
    id: "11",
    final: { x: "-4vw", y: "46vh", w: "27vw", h: "30vh" },
    tone: "dark",
  },
  {
    id: "12",
    final: { x: "77vw", y: "46vh", w: "27vw", h: "30vh" },
    tone: "warm",
  },
  {
    id: "13",
    final: { x: "-4vw", y: "76vh", w: "27vw", h: "26vh" },
    tone: "light",
  },
  {
    id: "14",
    final: { x: "23vw", y: "76vh", w: "27vw", h: "26vh" },
    tone: "accent",
  },
  {
    id: "15",
    final: { x: "50vw", y: "76vh", w: "27vw", h: "26vh" },
    tone: "mid",
  },
  {
    id: "16",
    final: { x: "77vw", y: "76vh", w: "27vw", h: "26vh" },
    tone: "dark",
  },
] as const;

const tileToneClasses = {
  accent: styles.aboutTileAccent,
  dark: styles.aboutTileDark,
  light: styles.aboutTileLight,
  mid: styles.aboutTileMid,
  warm: styles.aboutTileWarm,
};

const accordionPrinciples = [
  {
    title: "What We Do",
    subtext: "Helping every business to reach its goals faster!",
  },
  {
    title: "Creative Approach",
    subtext: "We aim to become the most trusted and creative digital marketing company in Dubai and surrounding countries.",
  },
  {
    title: "Guaranteed Success",
    subtext:
      "We do not just provide services to make money. We provide services to bring a change to our client's website, branding strategies, and business growth.",
  },
  {
    title: "A Foundation of Trust & Integrity",
    subtext:
      "We constantly motivate our team members to take responsibility for their duties. We believe in quality as much as quantity. Our client's trust and consistent collaboration are our backbones.",
  },
  {
    title: "Fast Working Process",
    subtext:
      "We understand that as a brand owner, you already have a lot on your plates. Therefore, we work as a digital extension to help you develop a relevant marketing plan that brings growth and success.",
  },
  {
    title: "Passionate Team Members",
    subtext:
      "Our team members do what they are best at. With the dedicated efforts and proactive attitude of our consultants, you can kickstart your online campaigns and maximize your revenues.",
  },
  {
    title: "24/7 Customer Support",
    subtext:
      "The world is evolving at a fast pace and so are we! With advanced tools like AI chatbots, we are always able to answer all your queries even during the off hours.",
  },
] as const;

export function AboutPage() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const referenceText = "A POINT OF REFERENCE.";
  const perspectiveText = "A BETTER PERSPECTIVE.";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      const tileElements = gsap.utils.toArray<HTMLElement>(".aboutTile");
      const kicker = document.querySelector<HTMLElement>(".aboutMosaicKicker");
      const leftKickerCharacters = gsap.utils.toArray<HTMLElement>(".aboutKickerLeftChar");
      const rightKickerCharacters = gsap.utils.toArray<HTMLElement>(".aboutKickerRightChar");

      gsap.set(tileElements, {
        left: "50%",
        top: "50%",
        width: "0.55rem",
        height: "0.55rem",
        opacity: 0,
        xPercent: -50,
        yPercent: -50,
        scale: 0.2,
      });

      gsap.set([...leftKickerCharacters, ...rightKickerCharacters], {
        opacity: 0,
        y: 8,
        filter: "blur(3px)",
      });

      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .to(
          leftKickerCharacters,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.3,
            stagger: { each: 0.035, from: "end" },
          },
          0,
        )
        .to(
          rightKickerCharacters,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.3,
            stagger: { each: 0.035, from: "start" },
          },
          0,
        );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutMosaicSection",
          start: "top top",
          end: "+=180%",
          scrub: 0.7,
          pin: true,
        },
      });

      timeline.to(
        kicker,
        {
          autoAlpha: 0,
          y: -10,
          duration: 0.18,
          ease: "power1.out",
        },
        0,
      );

      timeline.to(
        tileElements,
        {
          left: "var(--tile-final-x)",
          top: "var(--tile-final-y)",
          width: "var(--tile-final-w)",
          height: "var(--tile-final-h)",
          opacity: 1,
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          duration: 1.9,
          ease: "power2.out",
          stagger: {
            each: 0.055,
            from: "start",
          },
        },
      );

      const accordionItems = gsap.utils.toArray<HTMLElement>(".aboutScrollAccordionItem");
      const accordionContents = gsap.utils.toArray<HTMLElement>(".aboutScrollAccordionContent");
      const accordionRailLabels = gsap.utils.toArray<HTMLElement>(".aboutAccordionRailText");
      const getPanelHeight = (panel: HTMLElement) => {
        const inner = panel.firstElementChild;

        return inner instanceof HTMLElement ? inner.scrollHeight : panel.scrollHeight;
      };

      gsap.set(accordionContents, {
        height: 0,
        autoAlpha: 0,
      });

      if (accordionContents[0]) {
        gsap.set(accordionContents[0], {
          height: getPanelHeight(accordionContents[0]),
          autoAlpha: 1,
        });
      }

      const accordionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutScrollAccordion",
          start: "top top",
          end: () => `+=${window.innerHeight * (accordionItems.length - 1) * 0.48}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: (self) => {
            const spacer = self.pin?.parentElement;

            if (spacer?.classList.contains("pin-spacer")) {
              spacer.style.marginBottom = "0";
              spacer.style.backgroundColor = "#d2cbc4";
            }
          },
          onUpdate: (self) => {
            const activeIndex = Math.min(
              accordionPrinciples.length - 1,
              Math.max(0, Math.round(self.progress * (accordionPrinciples.length - 1))),
            );
            const activeTitle = accordionPrinciples[activeIndex].title.toUpperCase();

            accordionRailLabels.forEach((label) => {
              label.textContent = activeTitle;
            });
          },
        },
      });

      accordionContents.slice(0, -1).forEach((content, index) => {
        const nextContent = accordionContents[index + 1];

        accordionTimeline
          .fromTo(
            content,
            {
              height: () => getPanelHeight(content),
              autoAlpha: 1,
            },
            {
              height: 0,
              autoAlpha: 0,
              duration: 0.72,
              ease: "none",
              immediateRender: false,
            },
          )
          .fromTo(
            nextContent,
            {
              height: 0,
              autoAlpha: 0,
            },
            {
              height: () => getPanelHeight(nextContent),
              autoAlpha: 1,
              duration: 0.72,
              ease: "none",
              immediateRender: false,
            },
            "<",
          )
          .to({}, { duration: 0.18 });
      });

      ScrollTrigger.refresh();
    }, pageRef);

    let refreshTimer: number | undefined;
    const refreshForHeader = () => {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 420);
    };

    window.addEventListener("site-header-resize", refreshForHeader);

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("site-header-resize", refreshForHeader);
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div className={styles.pageWrap} ref={pageRef}>
      <Header />
      <main className={styles.aboutPage}>
        <section className={`${styles.aboutMosaicSection} aboutMosaicSection`}>
          <div className={styles.aboutMosaicSticky}>
            <p className={`${styles.aboutMosaicKicker} aboutMosaicKicker`}>
              <span aria-hidden="true">[</span>
              <span className={styles.aboutKickerPhrase} aria-label={referenceText}>
                {referenceText.split("").map((character, index) => (
                  <span className="aboutKickerLeftChar" key={`${character}-${index}`}>
                    {character === " " ? "\u00A0" : character}
                  </span>
                ))}
              </span>
              <span className={styles.aboutKickerDivider} aria-hidden="true" />
              <span className={styles.aboutKickerPhrase} aria-label={perspectiveText}>
                {perspectiveText.split("").map((character, index) => (
                  <span className="aboutKickerRightChar" key={`${character}-${index}`}>
                    {character === " " ? "\u00A0" : character}
                  </span>
                ))}
              </span>
              <span aria-hidden="true">]</span>
            </p>
            <div className={styles.aboutMosaicStage} aria-label="Animated about image placeholders">
              {mosaicTiles.map((tile, index) => (
                <div
                  key={tile.id}
                  className={`${styles.aboutTile} aboutTile ${
                    Number(tile.id) <= 4 ? "aboutTilePrimary" : "aboutTileSecondary"
                  } ${tileToneClasses[tile.tone]}`}
                  style={
                    {
                      "--tile-final-x": tile.final.x,
                      "--tile-final-y": tile.final.y,
                      "--tile-final-w": tile.final.w,
                      "--tile-final-h": tile.final.h,
                      zIndex: Number(tile.id),
                    } as CSSProperties
                  }
                >
                  <Image
                    src={aboutImages[index].src}
                    alt={aboutImages[index].alt}
                    fill
                    sizes="(max-width: 900px) 60vw, 27vw"
                    className={styles.aboutTileImage}
                  />
                  <span>Image {tile.id}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.aboutNarrativeSection}>
          <p className={styles.aboutNarrativeLabel}>[MEET REF]</p>
          <div className={styles.aboutMissionVisionGrid}>
            <article className={styles.aboutMissionCard}>
              <h2>Our Mission</h2>
              <p>
                We sincerely provide an all-inclusive range of services to revamp your brand’s success story.
                While always keeping our client’s needs at the front, we make the latest digital branding
                solutions accessible, efficient, and affordable for every industry.
              </p>
            </article>

            <article className={styles.aboutVisionCard}>
              <h2>Our Vision</h2>
              <p>
                We aim to become the most valuable{" "}
                <span>digital marketing agency in Dubai</span> that supports every small, medium-sized, and
                well-established organization by creating excellent branding solutions for them to succeed.
                We work closely with our clients to help them meet their business targets.
              </p>
            </article>
          </div>
        </section>

        <section className={`${styles.aboutScrollAccordion} aboutScrollAccordion`}>
          <div className={styles.aboutAccordionRail} aria-hidden="true">
            {[0, 1, 2].map((item) => (
              <div key={item} className={styles.aboutAccordionRailItem}>
                <span className={styles.aboutAccordionRailDot} />
                <span className="aboutAccordionRailText">{accordionPrinciples[0].title.toUpperCase()}</span>
              </div>
            ))}
          </div>

          <div className={styles.aboutAccordionList}>
            {accordionPrinciples.map((item) => (
              <article key={item.title} className={`${styles.aboutAccordionItem} aboutScrollAccordionItem`}>
                <h2>{item.title}</h2>
                <div className={`${styles.aboutAccordionContent} aboutScrollAccordionContent`}>
                  <div className={styles.aboutAccordionContentInner}>
                    <p>{item.subtext}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <div className={styles.aboutAccordionBottomSpace} aria-hidden="true" />
      </main>
      <Footer />
    </div>
  );
}
