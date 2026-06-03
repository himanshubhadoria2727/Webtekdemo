import type { Variants } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export const clienteleContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const clienteleFadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

export const clienteleCardMotion: Variants = {
  hidden: { opacity: 0, y: 42, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.68, ease: smoothEase },
  },
};
