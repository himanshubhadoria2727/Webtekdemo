"use client";

import { motion } from "framer-motion";
import { solutionsPage } from "../../data/solutions";
import styles from "../../page.module.css";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";

export function SolutionsPage() {
  return (
    <div className={styles.pageWrap}>
      <Header />
      <main className={styles.solutionsPage}>
        <section className={styles.solutionsDirectory}>
          <motion.div
            className={styles.solutionsDirectoryHeader}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{solutionsPage.eyebrow}</p>
            <h1>{solutionsPage.title}</h1>
            <span>{solutionsPage.intro}</span>
          </motion.div>

          <div className={styles.solutionsDirectoryGrid}>
            {solutionsPage.groups.map((group, groupIndex) => {
              const featuredItem = "featuredItem" in group ? group.featuredItem : undefined;

              return (
                <motion.section
                  key={group.title}
                  className={styles.solutionsDirectoryCard}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.6,
                    delay: groupIndex * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className={styles.solutionsDirectoryCardTop}>
                    <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                    <h2>{group.title}</h2>
                    <p>{group.description}</p>
                  </div>

                  <ul>
                    {group.items.map((item, itemIndex) => (
                      <motion.li
                        key={item.label}
                        className={item.label === featuredItem ? styles.solutionsDirectoryFeatured : undefined}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.4,
                          delay: groupIndex * 0.08 + itemIndex * 0.04 + 0.18,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <a href={"href" in item ? item.href : solutionsPage.itemHref}>
                          {item.label}
                          <span aria-hidden="true">-&gt;</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.section>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
