"use client";

import { Fragment } from "react";
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

const highlightPattern = new RegExp(
  `(${solutionsPage.highlights.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "gi",
);

function renderHighlightedCopy(text: string) {
  return text.split(highlightPattern).map((part, index) => {
    const isHighlight = solutionsPage.highlights.some((phrase) => phrase.toLowerCase() === part.toLowerCase());

    if (isHighlight) {
      return (
        <strong key={`${part}-${index}`} className={styles.solutionsTextHighlight}>
          {part}
        </strong>
      );
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
  });
}

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
            <p className={styles.solutionsHeroEyebrow}>{solutionsPage.eyebrow}</p>
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
            <p>{renderHighlightedCopy(solutionsPage.intro)}</p>
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

        <section id="solutions" className={styles.solutionsDirectory}>
          <motion.div
            className={styles.solutionsDirectoryHeader}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>Solution categories</p>
            <h2>Browse the app models we build</h2>
            <span>
              Choose the business model closest to your operations, then we shape the design, workflows, admin
              tools, and launch plan around your market.
            </span>
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
                    <p>{renderHighlightedCopy(group.description)}</p>
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

        <VideoCtaSection />
      </main>
      <Footer />
    </div>
  );
}
