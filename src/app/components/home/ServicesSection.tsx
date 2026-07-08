import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";
import styles from "../../page.module.css";

type ServiceItem = {
  label: string;
  image: string;
  alt: string;
  video?: string;
};

const serviceVideoByLabel: Record<string, string> = {
  "Website design & development": "/services/websites.mp4",
  "Mobile app development": "/services/mobile%20apps.mp4",
  "Branding & public relations": "/services/branding%20%26%20public%20relations.mp4",
  "SEO & online reputation management": "/services/Google.mp4",
  "Social media management & marketing": "/services/Social.mp4",
  "Google Ads & performance marketing": "/services/Google.mp4",
  "UI/UX design": "/services/mobile%20apps.mp4",
  "Graphic design & video editing": "/services/Editing%26%20graphics.mp4",
  "Telecalling services": "/services/Tele.mp4",
  "Content creation": "/services/Content%20Creator.mp4",
  "Photography & videography": "/services/Videographer%20%26%20Photographer.mp4",
  "Search engine optimisation": "/services/Google.mp4",
  "Google Ads management": "/services/Google.mp4",
  "Meta advertising": "/services/Social.mp4",
  "Social media marketing": "/services/Social.mp4",
  "Branding & creative design": "/services/branding%20%26%20public%20relations.mp4",
  "Video shooting & production": "/services/Videographer%20%26%20Photographer.mp4",
  "Performance marketing": "/services/Google.mp4",
  "Marketing automation & CRM integration": "/services/websites.mp4",
  "Email marketing": "/services/Content%20Creator.mp4",
  "Analytics & conversion optimisation": "/services/Google.mp4",
};

const defaultServices: readonly ServiceItem[] = [
  {
    label: "Website design & development",
    image: "/nordwood-themes-wt4gUtdv1-U-unsplash.jpg",
    alt: "Digital team working in a glass-walled office",
  },
  {
    label: "Mobile app development",
    image: "/about/about-12.jpg",
    alt: "Digital workspace with screens and devices",
  },
  {
    label: "Branding & public relations",
    image: "/about/about-10.jpg",
    alt: "Brand strategy and analytics workspace",
  },
  {
    label: "SEO & online reputation management",
    image: "/about/about-11.jpg",
    alt: "Person working on search visibility reports",
  },
  {
    label: "Social media management & marketing",
    image: "/about/about-09.jpg",
    alt: "Team collaborating on social media marketing",
  },
  {
    label: "Google Ads & performance marketing",
    image: "/about/about-14.jpg",
    alt: "Business team reviewing campaign performance reports",
  },
  {
    label: "UI/UX design",
    image: "/talabat/customer-panel.png.webp",
    alt: "Mobile app user interface screens",
  },
  {
    label: "Graphic design & video editing",
    image: "/about/about-04.jpg",
    alt: "Creative team planning visual content in a studio",
  },
  {
    label: "Telecalling services",
    image: "/about/about-15.jpg",
    alt: "Team discussing customer communication workflows",
  },
  {
    label: "Content creation",
    image: "/about/about-16.jpg",
    alt: "Marketing sketches and content planning notes",
  },
  {
    label: "Photography & videography",
    image: "/about/about-04.jpg",
    alt: "Creative production team preparing photo and video content",
  },
];

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
  items = defaultServices,
  className,
}: ServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeService = items[activeIndex] ?? items[0] ?? defaultServices[0];
  const activeVideo = activeService.video ?? serviceVideoByLabel[activeService.label] ?? "/services/websites.mp4";

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
