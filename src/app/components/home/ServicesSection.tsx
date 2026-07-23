import { AnimatePresence, motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  serviceDirectory,
  type ServiceDirectoryItem,
} from "../../data/services";
import styles from "../../page.module.css";

type ServiceItem = Pick<
  ServiceDirectoryItem,
  "label" | "image" | "alt" | "video" | "href"
>;

type ServicesSectionProps = {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  items?: readonly ServiceItem[];
  className?: string;
  priorityFirstImage?: boolean;
};

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

export function ServicesSection({
  id = "our-services",
  label = "Our services",
  title = "Helping brands by building elegant & refined digital experiences",
  description,
  items = serviceDirectory,
  className,
}: ServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeService = items[activeIndex] ?? items[0] ?? serviceDirectory[0];
  const activeVideo = activeService.video;

  const setActiveService = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section id={id} className={[styles.servicesSection, className ?? ""].join(" ")}>
      <div className={[styles.servicesTop, description ? styles.servicesTopWithText : ""].join(" ")}>
        <div>
          <p className={styles.servicesTag}>{label}</p>
          <h2>{title}</h2>
        </div>
        {description ? <p className={styles.servicesLead}>{description}</p> : null}
      </div>

      <div className={styles.servicesStage}>
        <div className={styles.servicesImageFrame} aria-hidden="true">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={`${activeService.label}-${activeVideo}`}
              className={styles.servicesImageSlide}
              custom={direction}
              variants={servicesImageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.72, ease: [0.77, 0, 0.175, 1] }}
            >
              <video
                className={styles.servicesImage}
                src={activeVideo}
                poster={activeService.image}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                suppressHydrationWarning
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.servicesList}>
          {items.map((service, index) => {
            const isActive = activeIndex === index;
            const itemClassName = [styles.servicesListItem, isActive ? styles.serviceNameActive : ""].join(" ");
            const itemContent = (
              <>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{service.label}</span>
              </>
            );

            if (service.href) {
              return (
                <Link
                  key={service.label}
                  href={service.href}
                  className={itemClassName}
                  onFocus={() => setActiveService(index)}
                  onMouseEnter={() => setActiveService(index)}
                >
                  {itemContent}
                </Link>
              );
            }

            return (
              <button
                key={service.label}
                type="button"
                className={itemClassName}
                onFocus={() => setActiveService(index)}
                onMouseEnter={() => setActiveService(index)}
              >
                {itemContent}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
