"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import styles from "../../page.module.css";
import { AboutSection } from "./AboutSection";
import { BlogSection } from "./BlogSection";
import { ClienteleSection } from "./ClienteleSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { SolutionsSection } from "./SolutionsSection";
import { TestimonialsSection } from "./TestimonialsSection";

export function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
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
        <ServicesSection />
        <ClienteleSection />
        <SolutionsSection />
        <TestimonialsSection />
        <BlogSection />
        <Footer />
      </main>
    </div>
  );
}
