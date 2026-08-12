"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { blogPosts } from "../../data/home";
import styles from "../../page.module.css";
import { clienteleCardMotion, clienteleContainer, clienteleFadeUp } from "./animations";

export function BlogSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const moveSlider = (direction: -1 | 1) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({ left: direction * slider.clientWidth * 0.82, behavior: "smooth" });
  };

  return (
    <motion.section
      id="blogs"
      className={styles.blogSection}
      aria-labelledby="blogs-heading"
      variants={clienteleContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.blogHeader}>
        <div>
          <motion.p className={styles.blogLabel} variants={clienteleFadeUp}>
            News and articles
          </motion.p>
          <motion.h2 id="blogs-heading" variants={clienteleFadeUp}>
            Practical digital growth notes for Dubai businesses
          </motion.h2>
          <motion.p className={styles.blogIntro} variants={clienteleFadeUp}>
            Ideas, guides, and campaign lessons for teams building stronger digital channels.
          </motion.p>
        </div>
        <motion.div className={styles.blogSliderControls} variants={clienteleFadeUp}>
          <button type="button" onClick={() => moveSlider(-1)} aria-label="Previous articles">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
          </button>
          <button type="button" onClick={() => moveSlider(1)} aria-label="Next articles">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
        </motion.div>
      </div>

      <div className={styles.blogGrid} ref={sliderRef} role="region" aria-label="Latest articles slider" tabIndex={0}>
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            className={styles.blogCard}
            variants={clienteleCardMotion}
          >
            <Link href={post.href} className={styles.blogImageWrap} aria-label={`Read ${post.title}`}>
              <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 900px) 86vw, 31vw" />
              <span className={styles.blogCardIndex} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
            <div className={styles.blogCardBody}>
              <span className={styles.blogCardCategory}>{post.category}</span>
              <h3><Link href={post.href}>{post.title}</Link></h3>
              <p>{post.excerpt}</p>
              <Link href={post.href} className={styles.blogCardLink}>
                <span>Read article</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
