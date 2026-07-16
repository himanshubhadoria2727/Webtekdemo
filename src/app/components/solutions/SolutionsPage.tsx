"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { solutionsPage } from "../../data/solutions";
import styles from "../../page.module.css";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";
import { HeaderVideoSection } from "../home/HeaderVideoSection";
import { ArrowIcon } from "../shared/ArrowIcon";
import { VideoCtaSection } from "../shared/VideoCtaSection";

export function SolutionsPage() {
  const [titleLead, titleTail = ""] = solutionsPage.title.split(solutionsPage.titleHighlight);

  return (
    <div className={styles.pageWrap}>
      <Header />
      <main className={styles.solutionsPage}>
        <section className={styles.solutionsHero}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1>
              {titleLead}
              <span>{solutionsPage.titleHighlight}</span>
              {titleTail}
            </h1>
          </motion.div>
          <motion.div
            className={styles.solutionsHeroCopy}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{solutionsPage.intro}</p>
            <Link href={solutionsPage.ctaHref} className={styles.solutionsTextLink}>
              {solutionsPage.ctaLabel}
              <span className={styles.buttonArrow} aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
          </motion.div>
        </section>

        <section className={styles.solutionsGallery} aria-label="Webtek Digital app solution work">
          <div className={styles.solutionsGalleryTrack}>
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                className={styles.solutionsGalleryGroup}
                aria-hidden={setIndex === 1 ? "true" : undefined}
              >
                {solutionsPage.galleryImages.map((image) => (
                  <figure key={`${setIndex}-${image.src}`} className={styles.solutionsGalleryItem}>
                    <Image
                      src={image.src}
                      alt={setIndex === 0 ? image.alt : ""}
                      fill
                      sizes="(max-width: 760px) 82vw, 36vw"
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </section>

        <HeaderVideoSection />

        <section className={styles.solutionsContentSection}>
          <motion.div
            className={styles.solutionsContentInner}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.solutionsContentHeading}>
              <p>{solutionsPage.growth.eyebrow}</p>
              <h2>{solutionsPage.growth.title}</h2>
            </div>
            <div className={styles.solutionsContentCopy}>
              {solutionsPage.growth.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </motion.div>
        </section>

        <section id="solutions" className={styles.solutionsDirectory}>
          <motion.div
            className={styles.solutionsDirectoryHeader}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{solutionsPage.directory.eyebrow}</p>
            <h2>{solutionsPage.directory.title}</h2>
            <span>{solutionsPage.directory.intro}</span>
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
                    <div className={styles.solutionsDirectoryTitle}>
                      <small>{group.eyebrow}</small>
                      <h2>{group.title}</h2>
                    </div>
                    <div className={styles.solutionsDirectoryDescription}>
                      {group.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
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
                        <Link href={"href" in item ? item.href : solutionsPage.itemHref}>
                          {item.label}
                          <span className={styles.buttonArrow} aria-hidden="true">
                            <ArrowIcon />
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.section>
              );
            })}
          </div>
        </section>

        <section className={`${styles.solutionsContentSection} ${styles.solutionsWhySection}`}>
          <div className={styles.solutionsContentInner}>
            <motion.div
              className={styles.solutionsContentHeading}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>{solutionsPage.whyChoose.eyebrow}</p>
              <h2>{solutionsPage.whyChoose.title}</h2>
            </motion.div>
            <motion.div
              className={styles.solutionsContentCopy}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {solutionsPage.whyChoose.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <h3>{solutionsPage.whyChoose.listTitle}</h3>
              <ul className={styles.solutionsExpectations}>
                {solutionsPage.whyChoose.expectations.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.35, delay: index * 0.025 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className={`${styles.solutionsContentSection} ${styles.solutionsSeoSection}`}>
          <motion.div
            className={styles.solutionsContentInner}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.solutionsContentHeading}>
              <p>{solutionsPage.seo.eyebrow}</p>
              <h2>{solutionsPage.seo.title}</h2>
            </div>
            <div className={styles.solutionsContentCopy}>
              {solutionsPage.seo.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </motion.div>
        </section>

        <VideoCtaSection
          title={solutionsPage.finalCta.title}
          body={solutionsPage.finalCta.body}
          ctaLabel={solutionsPage.finalCta.label}
          ctaHref={solutionsPage.ctaHref}
        />
      </main>
      <Footer />
    </div>
  );
}
