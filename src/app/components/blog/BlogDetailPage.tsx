"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { blogPosts } from "../../data/home";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";
import styles from "../../page.module.css";
import { blogArticleReveal, blogHeroReveal, blogPageContainer } from "../home/animations";

type BlogPost = (typeof blogPosts)[number];

const digitalMarketingHref =
  "https://www.webtekdigital.com/our-services/best-social-media-marketing-company-in-dubai/";

function hasStringList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function renderLinkedText(text: string) {
  const parts = text.split(/(digital marketing in Dubai|digital marketing)/gi);

  return parts.map((part, index) => {
    const normalized = part.toLowerCase();

    if (normalized === "digital marketing in dubai" || normalized === "digital marketing") {
      return (
        <a key={`${part}-${index}`} href={digitalMarketingHref}>
          {part}
        </a>
      );
    }

    return part;
  });
}

export function BlogDetailPage({ post }: { post: BlogPost }) {
  return (
    <div className={styles.pageWrap}>
      <Header />
      <main className={styles.blogPage}>
        <motion.section
          className={styles.blogPageHero}
          aria-labelledby="blog-detail-heading"
          variants={blogPageContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 id="blog-detail-heading" variants={blogHeroReveal}>
            Articles
          </motion.h1>
          <motion.p variants={blogHeroReveal}>
            Stay updated with practical digital growth thinking from Webtek Digital. Here, we share insights on
            marketing, search visibility, performance strategy, and the decisions that help Dubai businesses build
            stronger online momentum.
          </motion.p>
        </motion.section>

        <section className={styles.blogPageList} aria-label={post.title}>
          {post.articles.map((article, index) => (
            <motion.article
              key={article.title}
              className={styles.blogPageArticle}
              variants={blogArticleReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12, margin: "0px 0px 18% 0px" }}
              transition={{ delay: (index % 2) * 0.06 }}
            >
              <div className={styles.blogPageImage}>
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  priority={article === post.articles[0]}
                  sizes="(max-width: 900px) 100vw, 32vw"
                />
              </div>
              <div className={styles.blogPageArticleTitle}>
                <h2>{article.title}</h2>
                <span>{article.category}</span>
              </div>
              <div className={styles.blogPageArticleCopy}>
                <p>{renderLinkedText(article.excerpt)}</p>
                {"paragraphs" in article
                  ? article.paragraphs.map((paragraph) => <p key={paragraph}>{renderLinkedText(paragraph)}</p>)
                  : null}
                {"bullets" in article && hasStringList(article.bullets) ? (
                  <ul>
                    {article.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
