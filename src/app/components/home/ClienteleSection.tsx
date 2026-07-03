import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "../../page.module.css";
import { clienteleContainer, clienteleFadeUp } from "./animations";

const brandLogos = [
  {
    name: "Mohammed Bin Rashid School of Government",
    image: "/brands/bin_rashid-removebg-preview.png",
  },
  {
    name: "Abu Dhabi",
    image: "/brands/abodhabi-removebg-preview.png",
  },
  {
    name: "Dubai University",
    image: "/brands/dubai-uni-removebg-preview.png",
  },
  {
    name: "Home Box",
    image: "/brands/home-box-removebg-preview.png.webp",
  },
  {
    name: "Luxury",
    image: "/brands/luxury-removebg-preview.png",
  },
  {
    name: "Majid Al Futtaim",
    image: "/brands/majed-removebg-preview.png.webp",
  },
  {
    name: "Ounass",
    image: "/brands/ounass-removebg-preview.png",
  },
  {
    name: "Sharaf DG",
    image: "/brands/sharaf-removebg-preview.png.webp",
  },
];

export function ClienteleSection() {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  const visibleBrands = Array.from(
    { length: 4 },
    (_, index) => brandLogos[(activeBrandIndex + index) % brandLogos.length],
  );

  const showPrevious = () => {
    setActiveBrandIndex((currentIndex) => (currentIndex === 0 ? brandLogos.length - 1 : currentIndex - 1));
  };

  const showNext = () => {
    setActiveBrandIndex((currentIndex) => (currentIndex + 1) % brandLogos.length);
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
        Our Clientele
      </motion.p>
      <motion.h2 id="clientele-heading" variants={clienteleFadeUp}>
        Trusted By Brands And Organizations Of All Sizes
      </motion.h2>
      <motion.p className={styles.clienteleIntro} variants={clienteleFadeUp}>
        We have satisfied clients globally who have benefitted from our expert services. We ensure perfection in all work that we do.
      </motion.p>

      <motion.div className={styles.clienteleCarousel} variants={clienteleFadeUp}>
        <button
          className={styles.clienteleArrow}
          type="button"
          aria-label="Previous client"
          onClick={showPrevious}
        >
          {"<"}
        </button>

        <div className={styles.clienteleViewport}>
          <div className={styles.clienteleCards}>
            {visibleBrands.map((brand) => (
              <article
                key={brand.name}
                className={styles.clienteleCard}
                aria-label={brand.name}
              >
                <div
                  className={[
                    styles.clientLogo,
                    brand.image === "/brands/bin_rashid-removebg-preview.png" ? styles.clientLogoPadded : "",
                  ].join(" ")}
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    sizes="(max-width: 560px) 70vw, (max-width: 900px) 36vw, 18vw"
                    className={styles.clientLogoImage}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          className={styles.clienteleArrow}
          type="button"
          aria-label="Next client"
          onClick={showNext}
        >
          {">"}
        </button>
      </motion.div>
    </motion.section>
  );
}
