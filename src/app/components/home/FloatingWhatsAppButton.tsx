"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import styles from "../../page.module.css";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.45 14.88L2.05 22l5.25-1.5A9.92 9.92 0 1 0 12.04 2Zm0 17.98a8.03 8.03 0 0 1-4.1-1.12l-.3-.18-3.12.89.9-3.04-.2-.31a8 8 0 1 1 6.82 3.76Zm4.4-6.01c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.27 7.27 0 0 1-1.34-1.67c-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.3-.3.74-.4 1.13-.26 1.24.41 2.57.63 3.96.63.61 0 1.1.49 1.1 1.1v3.49c0 .61-.49 1.1-1.1 1.1C10.55 21.24 2.76 13.45 2.76 3.5c0-.61.49-1.1 1.1-1.1h3.5c.61 0 1.1.49 1.1 1.1 0 1.39.22 2.72.63 3.96.12.39.04.82-.28 1.13l-2.19 2.2Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M13.2 5.3 20 12l-6.8 6.7-1.4-1.4 4.3-4.3H4v-2h12.1l-4.3-4.3 1.4-1.4Z" />
    </svg>
  );
}

export function FloatingWhatsAppButton() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    const nextIsVisible = currentScrollY > 320;

    if (nextIsVisible !== isVisible) {
      setIsVisible(nextIsVisible);
    }
  });

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className={styles.floatingContactLayer}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 22 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            className={styles.floatingWhatsAppBubble}
            href="https://wa.me/971581263762"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon />
          </a>

          <div className={styles.floatingContactBar}>
            <p>Free consultation</p>
            <div className={styles.floatingContactActions}>
              <a className={styles.floatingConnectButton} href="https://wa.me/971581263762" target="_blank" rel="noreferrer">
                <span>Connect now</span>
                <WhatsAppIcon />
              </a>
              <a className={styles.floatingIconButton} href="tel:+971581263762" aria-label="Call Webtek Digital">
                <PhoneIcon />
              </a>
              <a className={styles.floatingAppointmentButton} href="#contact-us">
                <span>Book appointment</span>
                <span className={styles.floatingAppointmentIcon}>
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
