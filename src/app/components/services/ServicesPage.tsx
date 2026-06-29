"use client";

import { motion } from "framer-motion";
import { servicesPage } from "../../data/services";
import styles from "../../page.module.css";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
} as const;

export function ServicesPage() {
  return (
    <div className={styles.pageWrap}>
      <Header />
      <main className={styles.servicesPage}>
        <section className={styles.servicesPageHero}>
          <motion.div
            className={styles.servicesPageHeroInner}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{servicesPage.eyebrow}</p>
            <h1>{servicesPage.title}</h1>
            <span>{servicesPage.intro}</span>
          </motion.div>
        </section>

        <section className={styles.servicesPageList} aria-label="Webtek Digital services">
          {servicesPage.services.map((service, index) => (
            <motion.article
              key={service.title}
              className={styles.servicesPageCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              variants={fadeUp}
              transition={{ duration: 0.58, delay: (index % 2) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.servicesPageCardHeading}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{service.title}</h2>
                <p>{service.primaryKeyword}</p>
              </div>

              <div className={styles.servicesPageCardBody}>
                {service.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <ul>
                  {service.bullets.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.4 }}
                      variants={fadeUp}
                      transition={{
                        duration: 0.38,
                        delay: itemIndex * 0.035 + 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </section>

      </main>
      <Footer />
    </div>
  );
}
