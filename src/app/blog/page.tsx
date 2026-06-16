"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "../data/home";
import { Footer } from "../components/home/Footer";
import { Header } from "../components/home/Header";
import styles from "../page.module.css";
import { blogArticleReveal, blogHeroReveal, blogPageContainer } from "../components/home/animations";

export default function BlogPage() {
  return (
    <div className={styles.pageWrap}>
      <Header />
      <main className={styles.blogPage}>
        <motion.section
          className={styles.blogPageHero}
          aria-labelledby="blog-page-heading"
          variants={blogPageContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 id="blog-page-heading" variants={blogHeroReveal}>
            Articles
          </motion.h1>
          <motion.p variants={blogHeroReveal}>
            Stay updated with practical digital growth thinking from Webtek Digital. Here, we share insights on
            marketing, search visibility, performance strategy, and the decisions that help Dubai businesses build
            stronger online momentum.
          </motion.p>
        </motion.section>

        <section className={styles.blogPageList} aria-label="Articles">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className={styles.blogPageArticle}
              variants={blogArticleReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12, margin: "0px 0px 18% 0px" }}
              transition={{ delay: (index % 2) * 0.06 }}
            >
              <div className={styles.blogPageImage}>
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 900px) 100vw, 32vw" />
              </div>
              <div className={styles.blogPageArticleTitle}>
                <h2>{post.title}</h2>
                <span>{post.category}</span>
              </div>
              <div className={styles.blogPageArticleCopy}>
                <p>{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
