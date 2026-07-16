"use client";

import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { menuItems } from "../../data/home";
import { servicesPage } from "../../data/services";
import styles from "../../page.module.css";

const menuLinks: Record<string, string> = {
  "About us": "/about-us",
  "Our services": "/our-services",
  Solutions: "/solutions",
  "Portfolio media": "/#portfolio-media",
  "Contact us": "/#contact-us",
};

const servicesMenuImage = {
  src: "/about/about-12.jpg",
  alt: "Webtek Digital service preview",
};

export function Header() {
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLElement | null>(null);
  const isHiddenRef = useRef(false);
  const servicesMenuCloseTimeoutRef = useRef<number | null>(null);
  const isServicesMenuSuppressedRef = useRef(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  const clearServicesMenuClose = () => {
    if (servicesMenuCloseTimeoutRef.current === null) {
      return;
    }

    window.clearTimeout(servicesMenuCloseTimeoutRef.current);
    servicesMenuCloseTimeoutRef.current = null;
  };

  const openServicesMenu = () => {
    if (isServicesMenuSuppressedRef.current) {
      return;
    }

    clearServicesMenuClose();
    setIsServicesMenuOpen(true);
  };

  const closeServicesMenu = () => {
    clearServicesMenuClose();
    setIsServicesMenuOpen(false);
  };

  const closeServicesMenuAfterClick = () => {
    isServicesMenuSuppressedRef.current = true;
    closeServicesMenu();
  };

  const scheduleServicesMenuClose = () => {
    isServicesMenuSuppressedRef.current = false;
    clearServicesMenuClose();
    servicesMenuCloseTimeoutRef.current = window.setTimeout(() => {
      setIsServicesMenuOpen(false);
      servicesMenuCloseTimeoutRef.current = null;
    }, 180);
  };

  useEffect(() => {
    const header = headerRef.current;

    if (!header) {
      return;
    }

    const updateHeaderSpace = () => {
      const height = header.offsetHeight;

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

  useEffect(() => {
    return () => {
      if (servicesMenuCloseTimeoutRef.current !== null) {
        window.clearTimeout(servicesMenuCloseTimeoutRef.current);
      }
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    const nextIsHidden = isHiddenRef.current ? currentScrollY > 24 : currentScrollY > 80;

    if (nextIsHidden !== isHiddenRef.current) {
      isHiddenRef.current = nextIsHidden;
      setIsHidden(nextIsHidden);
    }
  });

  return (
    <>
      <div
        className={[styles.navPageBackdrop, isServicesMenuOpen ? styles.navPageBackdropVisible : ""].join(" ")}
        aria-hidden="true"
      />
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
          <Image src="/logo.png" alt="Webtek Digital" width={220} height={126} priority className={styles.brandLogo} />
        </Link>
      </motion.div>

      <nav className={styles.navMenu}>
        {menuItems.map((item, idx) => (
          <motion.div
            key={item}
            className={
              item === "Our services"
                ? [styles.navItemWithSubmenu, isServicesMenuOpen ? styles.navItemWithSubmenuOpen : ""].join(" ")
                : undefined
            }
            onMouseLeave={item === "Our services" ? scheduleServicesMenuClose : undefined}
            onBlur={
              item === "Our services"
                ? (event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      isServicesMenuSuppressedRef.current = false;
                      closeServicesMenu();
                    }
                  }
                : undefined
            }
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.08 + 0.2 }}
          >
            <Link
              href={menuLinks[item]}
              className={item === "Our services" ? styles.navServicesTrigger : undefined}
              onClick={item === "Our services" ? closeServicesMenuAfterClick : undefined}
              onMouseEnter={item === "Our services" ? openServicesMenu : undefined}
              onFocus={item === "Our services" ? openServicesMenu : undefined}
            >
              {item}
              {item === "Our services" ? <span className={styles.navServicesArrow} aria-hidden="true" /> : null}
            </Link>
            {item === "Our services" ? (
              <>
                <div className={styles.navSubmenuHoverBridge} aria-hidden="true" onMouseEnter={clearServicesMenuClose} />
                <div className={styles.navSubmenu} onMouseEnter={clearServicesMenuClose}>
                  <div className={styles.navSubmenuPreview} aria-hidden="true">
                    <Image src={servicesMenuImage.src} alt="" fill sizes="32rem" />
                  </div>

                  <div className={styles.navSubmenuServices}>
                    {servicesPage.services.map((service, serviceIndex) => (
                      <Link key={service.title} href="/our-services">
                        <span>{String(serviceIndex + 1).padStart(2, "0")}</span>
                        <span>{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : null}
          </motion.div>
        ))}
      </nav>
      </motion.header>
    </>
  );
}
