import { motion } from "framer-motion";
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
  return (
    <header className={styles.navbar}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styles.brand}
      >
        <span className={styles.brandMark} aria-hidden="true">
          |||||
        </span>
        WEBTEK DIGITAL
      </motion.div>

      <nav className={styles.navMenu}>
        {menuItems.map((item, idx) => (
          <motion.a
            key={item}
            href={menuLinks[item]}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.08 + 0.2 }}
          >
            {idx === 1 ? <span className={styles.navCounter}>[06]</span> : null}
            {item}
          </motion.a>
        ))}
      </nav>

      <button className={styles.hamburger} aria-label="Open menu" type="button">
        <span />
        <span />
      </button>
    </header>
  );
}
