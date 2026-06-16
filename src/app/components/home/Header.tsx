import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
    </header>
  );
}
