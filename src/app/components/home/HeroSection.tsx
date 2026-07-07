"use client";

import { motion } from "framer-motion";
import styles from "../../page.module.css";
import { HeaderVideoSection } from "./HeaderVideoSection";

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
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function HeroSection() {
  return (
    <>
      {/*
      <section className={styles.heroShowcase}>
        {outgoingSlide ? (
          <div className={styles.heroGridWipe} aria-hidden="true">
            {Array.from({ length: 35 }, (_, index) => {
              const row = Math.floor(index / 5);
              const col = index % 5;

              return (
                <span
                  key={`${outgoingSlide.title.join("-")}-${index}`}
                  className={styles.heroGridCell}
                  style={
                    {
                      "--grid-delay": `${(6 - row) * 0.035 + col * 0.012}s`,
                      "--grid-duration": `${0.72 + (6 - row) * 0.095}s`,
                      "--grid-nudge-x": `${gridMotionVector.x === 0 ? 0 : Math.sign(gridMotionVector.x) * 8}%`,
                      "--grid-nudge-y": `${gridMotionVector.y === 0 ? 0 : Math.sign(gridMotionVector.y) * 8}%`,
                      "--grid-exit-x": `${gridMotionVector.x}%`,
                      "--grid-exit-y": `${gridMotionVector.y}%`,
                      "--grid-offset-x": `${col * -100}%`,
                      "--grid-offset-y": `${row * -100}%`,
                    } as CSSProperties
                  }
                >
                  <span className={styles.heroGridCellScene}>
                    <span className={styles.heroGridCellContent}>
                      <span className={styles.heroGridCellText}>
                        {outgoingSlide.kicker ? <span>{outgoingSlide.kicker}</span> : null}
                        <strong>
                          {outgoingSlide.title.map((line, titleIndex) =>
                            titleIndex === 1 ? <em key={line}>{line}</em> : <span key={line}>{line}</span>,
                          )}
                        </strong>
                      </span>
                    </span>
                  </span>
                </span>
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
      */}

      <section className={styles.heroInfo}>
        {/* <motion.p
          className={styles.heroKicker}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Webtek Digital Agency
        </motion.p> */}

        <motion.h2 className={styles.heroTitle} variants={infoContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.45 }}>
          <motion.span className={styles.heroLine} variants={infoLine}>
            Driven by results, Webtek Digital helps businesses grow through
          </motion.span>{" "}
          <motion.span className={`${styles.heroLine} ${styles.heroHighlight}`} variants={infoLine}>
            smart digital marketing strategies.
          </motion.span>
          <motion.span className={styles.heroLine} variants={infoLine}>
            We focus on every step of the customer journey to increase visibility, generate quality leads, and drive long-term
            business growth
          </motion.span>
        </motion.h2>
      </section>

      <HeaderVideoSection />
    </>
  );
}
