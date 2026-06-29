import { motion } from "framer-motion";
import { aboutBullets, animatedAboutLine, partnerNames } from "../../data/home";
import styles from "../../page.module.css";
import { SeoServicesSection } from "./SeoServicesSection";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AboutSection() {
  const runningPartnerNames = [...partnerNames, ...partnerNames, ...partnerNames, ...partnerNames];
  const reversePartnerNames = [...partnerNames].reverse();
  const reverseRunningPartnerNames = [
    ...reversePartnerNames,
    ...reversePartnerNames,
    ...reversePartnerNames,
    ...reversePartnerNames,
  ];

  return (
    <section id="about-us" className={styles.aboutSection}>
      <div className={styles.partnerRow}>
        <div className={`${styles.partnerRowTrack} ${styles.partnerRowTrackDark}`}>
          <div className={styles.partnerRowTicker}>
            {runningPartnerNames.map((name, index) => (
              <span key={`${name}-${index}`} className={styles.partnerLogo}>
                {name}
                <span aria-hidden="true">*</span>
              </span>
            ))}
          </div>
        </div>
        <div className={`${styles.partnerRowTrack} ${styles.partnerRowTrackAccent}`}>
          <div className={styles.partnerRowTicker}>
            {reverseRunningPartnerNames.map((name, index) => (
              <span key={`${name}-reverse-${index}`} className={styles.partnerLogo}>
                {name}
                <span aria-hidden="true">*</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.aboutIntro}>
        <motion.p
          className={styles.aboutLabel}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          [ ABOUT ]
        </motion.p>
        <div className={styles.aboutHeadingRow}>
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            Digital Marketing &amp; App Development Company in Dubai<span>.</span>
          </motion.h2>
          <motion.div
            className={styles.aboutImage}
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.88, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
          />
        </div>
      </div>

      <motion.div
        className={styles.aboutDetails}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.p className={styles.aboutSeoCopy} variants={reveal}>
          {animatedAboutLine}
        </motion.p>
        <motion.ul
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
          }}
        >
          {aboutBullets.map((item) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, x: 24 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <SeoServicesSection />
    </section>
  );
}
