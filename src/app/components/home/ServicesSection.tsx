import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "../../page.module.css";

const services = [
  {
    label: "website design & build",
    image: "/nordwood-themes-wt4gUtdv1-U-unsplash.jpg",
    alt: "Digital team working in a glass-walled office",
  },
  {
    label: "mobile app design & build",
    image: "/about/about-12.jpg",
    alt: "Digital workspace with screens and devices",
  },
  {
    label: "artificial intelligence - ai",
    image: "/about/about-10.jpg",
    alt: "Analytics dashboard open on a laptop",
  },
  {
    label: "e-commerce website development",
    image: "/talabat/customer-panel.png.webp",
    alt: "Ecommerce customer panel interface",
  },
  {
    label: "search engine optimization agency in dubai",
    image: "/about/about-11.jpg",
    alt: "Person working on a laptop in a bright office",
  },
  {
    label: "strategic & digital consulting",
    image: "/about/about-09.jpg",
    alt: "Team collaborating in a modern office",
  },
  {
    label: "video & film services",
    image: "/about/about-04.jpg",
    alt: "Creative team planning a campaign in a studio",
  },
];

const servicesImageVariants: Variants = {
  enter: (swipeDirection: number) => ({
    y: swipeDirection > 0 ? "100%" : "-100%",
  }),
  center: {
    y: "0%",
  },
  exit: (swipeDirection: number) => ({
    y: swipeDirection > 0 ? "-100%" : "100%",
  }),
};

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeService = services[activeIndex];

  const setActiveService = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section id="our-services" className={styles.servicesSection}>
      <div className={styles.servicesTop}>
        <p className={styles.servicesTag}>our services</p>
        <h2>helping brands by building elegant &amp; refined digital experiences</h2>
      </div>

      <div className={styles.servicesStage}>
        <div className={styles.servicesImageFrame} aria-hidden="true">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activeService.image}
              className={styles.servicesImageSlide}
              custom={direction}
              variants={servicesImageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.72, ease: [0.77, 0, 0.175, 1] }}
            >
              <Image
                src={activeService.image}
                alt={activeService.alt}
                fill
                sizes="(max-width: 900px) 100vw, 34vw"
                className={styles.servicesImage}
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.servicesList}>
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={service.label}
                type="button"
                className={[styles.servicesListItem, isActive ? styles.serviceNameActive : ""].join(" ")}
                onFocus={() => setActiveService(index)}
                onMouseEnter={() => setActiveService(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{service.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
