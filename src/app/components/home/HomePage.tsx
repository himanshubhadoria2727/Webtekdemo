"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import styles from "../../page.module.css";
import { AboutSection } from "./AboutSection";
import { ClienteleSection } from "./ClienteleSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { SolutionsSection } from "./SolutionsSection";

export function HomePage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const heroBgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".heroGlow",
        { opacity: 0.55, y: -10 },
        {
          opacity: 0.9,
          y: 12,
          duration: 3.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
      );

      if (heroRef.current && heroBgRef.current) {
        gsap.fromTo(
          heroBgRef.current,
          { scale: 1, yPercent: 0 },
          {
            scale: 1.16,
            yPercent: -1.5,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "60% top",
              scrub: 0.55,
            },
          },
        );
      }

      gsap.fromTo(
        ".aboutTile",
        {
          left: "50%",
          top: "50%",
          width: "0.55rem",
          height: "0.55rem",
          opacity: 0,
          xPercent: -50,
          yPercent: -50,
          scale: 0.2,
        },
        {
          left: "var(--tile-x)",
          top: "var(--tile-y)",
          width: "var(--tile-w)",
          height: "var(--tile-h)",
          opacity: 1,
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          ease: "none",
          stagger: 0.025,
          scrollTrigger: {
            trigger: ".aboutMosaicSection",
            start: "top top",
            end: "+=260%",
            scrub: 0.7,
            pin: true,
          },
        },
      );

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div className={styles.pageWrap}>
      <Header />
      <main>
        <HeroSection heroRef={heroRef} heroBgRef={heroBgRef} />
        <AboutSection />
        <ServicesSection />
        <ClienteleSection />
        <SolutionsSection />
        <Footer />
      </main>
    </div>
  );
}
