import { motion } from "framer-motion";
import { clienteleCards } from "../../data/home";
import styles from "../../page.module.css";
import { clienteleCardMotion, clienteleContainer, clienteleFadeUp } from "./animations";

export function ClienteleSection() {
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
        OUR CLIENTELE
      </motion.p>
      <motion.h2 id="clientele-heading" variants={clienteleFadeUp}>
        Trusted by 1,500+ world-class brands and organizations of all sizes
      </motion.h2>
      <motion.p className={styles.clienteleIntro} variants={clienteleFadeUp}>
        We have satisfied clients globally who have benefitted from our expert services. We ensure perfection in all
        work that we do.
      </motion.p>

      <motion.div className={styles.clienteleCarousel} variants={clienteleFadeUp}>
        <motion.button
          className={styles.clienteleArrow}
          type="button"
          aria-label="Previous client"
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          ‹
        </motion.button>
        <div className={styles.clienteleCards}>
          {clienteleCards.map((client) => (
            <motion.article
              key={client.name}
              className={styles.clienteleCard}
              aria-label={client.name}
              variants={clienteleCardMotion}
              whileHover={{ y: -8, boxShadow: "0 14px 30px rgba(6, 11, 42, 0.22)" }}
            >
              <div className={`${styles.clientLogo} ${styles[client.variant]}`}>
                {client.mark.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
              {client.caption ? (
                <p>
                  {client.caption.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              ) : null}
            </motion.article>
          ))}
        </div>
        <motion.button
          className={styles.clienteleArrow}
          type="button"
          aria-label="Next client"
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.9 }}
        >
          ›
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
