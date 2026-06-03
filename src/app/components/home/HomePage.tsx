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

      ScrollTrigger.refresh();
    }, heroRef);

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
