import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { aboutBullets, animatedAboutLine, partnerNames } from "../../data/home";
import styles from "../../page.module.css";

const mosaicTiles = [
  { id: "01", x: "0vw", y: "-2vh", w: "26vw", h: "18vh", tone: "dark" },
  { id: "02", x: "50vw", y: "-2vh", w: "26vw", h: "18vh", tone: "light" },
  { id: "03", x: "24vw", y: "16vh", w: "26vw", h: "22vh", tone: "mid" },
  { id: "04", x: "50vw", y: "16vh", w: "28vw", h: "22vh", tone: "accent" },
  { id: "05", x: "11vw", y: "38vh", w: "13vw", h: "18vh", tone: "light" },
  { id: "06", x: "24vw", y: "38vh", w: "26vw", h: "30vh", tone: "warm" },
  { id: "07", x: "50vw", y: "38vh", w: "28vw", h: "30vh", tone: "dark" },
  { id: "08", x: "78vw", y: "38vh", w: "13vw", h: "30vh", tone: "light" },
  { id: "09", x: "11vw", y: "56vh", w: "13vw", h: "24vh", tone: "mid" },
  { id: "10", x: "24vw", y: "68vh", w: "26vw", h: "18vh", tone: "light" },
  { id: "11", x: "50vw", y: "68vh", w: "28vw", h: "18vh", tone: "accent" },
  { id: "12", x: "78vw", y: "68vh", w: "13vw", h: "18vh", tone: "warm" },
  { id: "13", x: "-8vw", y: "16vh", w: "19vw", h: "22vh", tone: "accent" },
  { id: "14", x: "91vw", y: "16vh", w: "19vw", h: "22vh", tone: "mid" },
];

const tileToneClasses = {
  accent: styles.aboutTileAccent,
  dark: styles.aboutTileDark,
  light: styles.aboutTileLight,
  mid: styles.aboutTileMid,
  warm: styles.aboutTileWarm,
};

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

      <div className={`${styles.aboutMosaicSection} aboutMosaicSection`}>
        <div className={styles.aboutMosaicSticky}>
          <p className={styles.aboutMosaicKicker}>
            [A POINT OF REFERENCE. <span /> A BETTER PERSPECTIVE.]
          </p>
          <div className={styles.aboutCenterDot} aria-hidden="true" />
          <div className={styles.aboutMosaicStage} aria-label="Animated about image placeholders">
            {mosaicTiles.map((tile) => (
              <div
                key={tile.id}
                className={`${styles.aboutTile} aboutTile ${tileToneClasses[tile.tone as keyof typeof tileToneClasses]}`}
                style={
                  {
                    "--tile-x": tile.x,
                    "--tile-y": tile.y,
                    "--tile-w": tile.w,
                    "--tile-h": tile.h,
                  } as CSSProperties
                }
              >
                <span>Image {tile.id}</span>
              </div>
            ))}
          </div>
        </div>
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
