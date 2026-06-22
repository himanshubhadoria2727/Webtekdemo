"use client";

import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { menuItems } from "../../data/home";
import styles from "../../page.module.css";

const menuLinks: Record<string, string> = {
  "About Us": "/about-us",
  "Our Services": "/#our-services",
  Solutions: "/solutions",
  "Portfolio Media": "/#portfolio-media",
  "Contact Us": "/#contact-us",
};

export function Header() {
  const { scrollY } = useScroll();
  const previousScrollY = useRef(0);
  const headerRef = useRef<HTMLElement | null>(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const header = headerRef.current;

    if (!header) {
      return;
    }

    const updateHeaderSpace = () => {
      const height = isHidden ? 0 : header.offsetHeight;

      document.documentElement.dataset.siteHeaderHidden = String(isHidden);
      document.documentElement.style.setProperty("--site-header-height", `${height}px`);
      window.dispatchEvent(new CustomEvent("site-header-resize"));
    };

    updateHeaderSpace();

    const observer = new ResizeObserver(updateHeaderSpace);
    observer.observe(header);

    return () => {
      observer.disconnect();
    };
  }, [isHidden]);

  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    const previous = previousScrollY.current;
    const delta = currentScrollY - previous;

    if (currentScrollY <= 24) {
      setIsHidden(false);
    } else if (Math.abs(delta) >= 4) {
      setIsHidden(delta > 0 && currentScrollY > 80);
    }

    previousScrollY.current = currentScrollY;
  });

  return (
    <motion.header
      ref={headerRef}
      className={styles.navbar}
      initial={false}
      animate={{ y: isHidden ? "-105%" : "0%" }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styles.brand}
      >
        <Link href="/" aria-label="Webtek Digital home">
          <Image src="/logo.webp" alt="Webtek Digital" width={170} height={48} priority className={styles.brandLogo} />
        </Link>
      </motion.div>

      <nav className={styles.navMenu}>
        {menuItems.map((item, idx) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.08 + 0.2 }}
          >
            <Link href={menuLinks[item]}>
              {idx === 1 ? <span className={styles.navCounter}>[06]</span> : null}
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
}
