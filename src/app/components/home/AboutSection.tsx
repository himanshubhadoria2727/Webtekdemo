import { motion } from "framer-motion";
import { aboutBullets, animatedAboutLine, partnerNames } from "../../data/home";
import styles from "../../page.module.css";

export function AboutSection() {
  return (
    <section id="about-us" className={styles.aboutSection}>
      <div className={styles.partnerRow}>
        {partnerNames.map((name) => (
          <span key={name} className={styles.partnerLogo}>
            {name}
          </span>
        ))}
      </div>

      <div className={styles.aboutIntro}>
        <p className={styles.aboutLabel}>[ ABOUT ]</p>
        <div className={styles.aboutHeadingRow}>
          <h2>
            Digital Marketing Company in Dubai<span>.</span>
          </h2>
          <div className={styles.aboutImage} aria-hidden="true" />
        </div>
      </div>

      <div className={styles.aboutDetails}>
        <motion.p
          className={styles.spellLine}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.65 }}
        >
          {animatedAboutLine.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ duration: 0.02, delay: index * 0.012 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
        <ul>
          {aboutBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
