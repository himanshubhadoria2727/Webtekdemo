import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "../../page.module.css";
import { clienteleContainer, clienteleFadeUp } from "./animations";

const brandLogos = [
  {
    name: "Mohammed Bin Rashid School of Government",
    image: "/brands/bin_rashid-removebg-preview.png.webp",
  },
  {
    name: "Abu Dhabi",
    image: "/brands/abodhabi-removebg-preview.png.webp",
  },
  {
    name: "Dubai University",
    image: "/brands/dubai-uni-removebg-preview.png.webp",
  },
  {
    name: "Home Box",
    image: "/brands/home-box-removebg-preview.png.webp",
  },
  {
    name: "Luxury",
    image: "/brands/luxury-removebg-preview.png.webp",
  },
  {
    name: "Majid Al Futtaim",
    image: "/brands/majed-removebg-preview.png.webp",
  },
  {
    name: "Ounass",
    image: "/brands/ounass-removebg-preview.png.webp",
  },
  {
    name: "Sharaf DG",
    image: "/brands/sharaf-removebg-preview.png.webp",
  },
];

export function ClienteleSection() {
  const [orderedBrands, setOrderedBrands] = useState(brandLogos);

  const showPrevious = () => {
    setOrderedBrands((current) => {
      const previous = current[current.length - 1];
      return [previous, ...current.slice(0, -1)];
    });
  };

  const showNext = () => {
    setOrderedBrands((current) => {
      const [next, ...rest] = current;
      return [...rest, next];
    });
  };

  return (
    <motion.section
      className={styles.clienteleSection}
      aria-labelledby="clientele-heading"
      variants={clienteleContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
    >
      <div className={styles.clienteleDots} aria-hidden="true" />
      <motion.p className={styles.clienteleLabel} variants={clienteleFadeUp}>
        our clientele
      </motion.p>
      <motion.h2 id="clientele-heading" variants={clienteleFadeUp}>
        trusted by brands and organizations of all sizes
      </motion.h2>
      <motion.p className={styles.clienteleIntro} variants={clienteleFadeUp}>
        a selection of teams and institutions that have trusted our digital work.
      </motion.p>

      <motion.div className={styles.clienteleCarousel} variants={clienteleFadeUp}>
        <motion.button
          className={styles.clienteleArrow}
          type="button"
          aria-label="Previous client"
          onClick={showPrevious}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          {"<"}
        </motion.button>

        <div className={styles.clienteleViewport}>
          <motion.div className={styles.clienteleCards} layout transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            {orderedBrands.map((brand) => (
              <motion.article
                key={brand.name}
                layout
                className={styles.clienteleCard}
                aria-label={brand.name}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, boxShadow: "0 12px 26px rgba(5, 5, 5, 0.14)" }}
              >
                <div className={styles.clientLogo}>
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    sizes="(max-width: 560px) 70vw, (max-width: 900px) 36vw, 18vw"
                    className={styles.clientLogoImage}
                  />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.button
          className={styles.clienteleArrow}
          type="button"
          aria-label="Next client"
          onClick={showNext}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.9 }}
        >
          {">"}
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
