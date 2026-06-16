"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../../page.module.css";

const rotatingHighlights = ["impact", "growth", "websites", "brands"];

export function HeroSection() {
  const [activeHighlight, setActiveHighlight] = useState(0);
  const currentHighlight = rotatingHighlights[activeHighlight];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHighlight((current) => (current + 1) % rotatingHighlights.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <motion.h1
        className={styles.heroTitle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        <span className={styles.heroLine}>built on teamwork,</span>
        <span className={styles.heroLine}>
          focused on{" "}
          <span className={styles.heroHighlight}>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentHighlight}
                className={styles.heroHighlightWord}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.055 } },
                  exit: { transition: { staggerChildren: 0.025, staggerDirection: -1 } },
                }}
              >
                {currentHighlight.split("").map((letter, index) => (
                  <motion.span
                    key={`${currentHighlight}-${letter}-${index}`}
                    className={styles.heroHighlightLetter}
                    variants={{
                      hidden: { opacity: 0, y: "0.42em", filter: "blur(4px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                      exit: { opacity: 0, y: "-0.28em", filter: "blur(4px)" },
                    }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </motion.h1>

      <motion.a
        href="#our-services"
        className={styles.yearTag}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.5 }}
      >
        <span aria-hidden="true">-&gt;</span> talk to us now
      </motion.a>
    </section>
  );
}
