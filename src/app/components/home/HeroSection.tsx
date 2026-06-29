"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "../../page.module.css";

const heroSlides = [
  {
    kicker: "",
    title: ["Custom", "SEO", "Packages for", "Your Brand"],
  },
  {
    kicker: "",
    title: ["360", "Digital Marketing", "Service"],
  },
];

const infoContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const infoLine = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function HeroSection() {
  const [activeHero, setActiveHero] = useState(0);
  const [outgoingHero, setOutgoingHero] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const transitionTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  const goToHero = (nextIndex: number, nextDirection: "next" | "prev") => {
    if (nextIndex === activeHero || outgoingHero !== null) {
      return;
    }

    if (transitionTimer.current) {
      window.clearTimeout(transitionTimer.current);
    }

    setDirection(nextDirection);
    setOutgoingHero(activeHero);
    setActiveHero(nextIndex);

    transitionTimer.current = window.setTimeout(() => {
      setOutgoingHero(null);
    }, 1200);
  };

  const previousHero = () => {
    goToHero((activeHero - 1 + heroSlides.length) % heroSlides.length, "prev");
  };

  const nextHero = () => {
    goToHero((activeHero + 1) % heroSlides.length, "next");
  };

  const currentHero = heroSlides[activeHero];
  const outgoingSlide = outgoingHero === null ? null : heroSlides[outgoingHero];

  return (
    <>
      <section className={styles.heroShowcase}>
        {outgoingSlide ? (
          <div className={styles.heroGridWipe} aria-hidden="true">
            {Array.from({ length: 35 }, (_, index) => {
              const row = Math.floor(index / 5);
              const col = index % 5;

              return (
                <span
                  key={`${outgoingSlide.title.join("-")}-${index}`}
                  className={`${styles.heroGridCell} ${
                    direction === "next" ? styles.heroGridCellNext : styles.heroGridCellPrev
                  }`}
                  style={
                    {
                      "--grid-delay": `${(6 - row) * 0.035 + col * 0.012}s`,
                      "--grid-duration": `${0.48 + (6 - row) * 0.075}s`,
                      "--grid-bg-x": `${col * 25}%`,
                      "--grid-bg-y": `${row * 16.6667}%`,
                    } as CSSProperties
                  }
                />
              );
            })}
          </div>
        ) : null}

        <div className={styles.heroShowcaseContent}>
          <div className={styles.heroShowcaseText}>
            <p>{currentHero.kicker}</p>
            <h1>
              {currentHero.title.map((line, index) =>
                index === 1 ? <strong key={line}>{line}</strong> : <span key={line}>{line}</span>,
              )}
            </h1>
          </div>

          <div className={styles.heroSideControls} aria-label="Hero slide controls">
            <button type="button" aria-label="Previous hero slide" onClick={previousHero}>
              &lt;
            </button>
            <button type="button" aria-label="Next hero slide" onClick={nextHero}>
              &gt;
            </button>
          </div>
        </div>
      </section>

      <section className={styles.heroInfo}>
        <motion.p
          className={styles.heroKicker}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Webtek Digital Agency
        </motion.p>

        <motion.h2 className={styles.heroTitle} variants={infoContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.45 }}>
          <motion.span className={styles.heroLine} variants={infoLine}>
            Driven by results, WebTek Digital helps businesses grow through
          </motion.span>{" "}
          <motion.span className={`${styles.heroLine} ${styles.heroHighlight}`} variants={infoLine}>
            smart digital marketing strategies
          </motion.span>
          <motion.span className={styles.heroLine} variants={infoLine}>
            . We focus on every step of the customer journey to increase visibility, generate quality leads, and drive
            long-term business growth.
          </motion.span>
        </motion.h2>
      </section>
    </>
  );
}
