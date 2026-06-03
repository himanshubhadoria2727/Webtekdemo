import { motion } from "framer-motion";
import type { RefObject } from "react";
import styles from "../../page.module.css";

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
  heroBgRef: RefObject<HTMLDivElement | null>;
};

export function HeroSection({ heroRef, heroBgRef }: HeroSectionProps) {
  return (
    <section className={styles.hero} ref={heroRef}>
      <div ref={heroBgRef} className={`${styles.heroBackground} heroBackground`} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <motion.p
        className={styles.kicker}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2 }}
      >
        Full-service design studio crafting digital narratives with strategic creativity.
      </motion.p>

      <motion.h1
        className={styles.heroTitle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        WEBTEK
        <br />
        DIGITAL
      </motion.h1>

      <motion.div
        className={`${styles.heroGlow} heroGlow`}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      />

      <motion.span
        className={styles.yearTag}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.5 }}
      >
        ©2026
      </motion.span>
    </section>
  );
}
