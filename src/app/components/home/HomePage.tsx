"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import styles from "../../page.module.css";
import { AboutSection } from "./AboutSection";
import { BlogSection } from "./BlogSection";
import { ClienteleSection } from "./ClienteleSection";
import { Footer } from "./Footer";
import { GrowthTouchpointSection } from "./GrowthTouchpointSection";
import { Header } from "./Header";
import { HeaderVideoSection } from "./HeaderVideoSection";
import { HeroSection } from "./HeroSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { VideoCtaSection } from "../shared/VideoCtaSection";

export function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.18,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 1.2,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={styles.pageWrap}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GrowthTouchpointSection />
        <HeaderVideoSection />
        <TestimonialsSection />
        <ClienteleSection />
        {/* <SolutionsSection /> */}
        <BlogSection />
        <VideoCtaSection />
        <Footer />
      </main>
    </div>
  );
}
