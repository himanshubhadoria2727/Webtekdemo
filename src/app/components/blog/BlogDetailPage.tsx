"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "../../data/home";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";
import styles from "../../page.module.css";
import { blogArticleReveal, blogHeroReveal, blogPageContainer } from "../home/animations";

type BlogPost = (typeof blogPosts)[number];

const digitalMarketingHref =
  "https://www.webtekdigital.com/our-services/best-social-media-marketing-company-in-dubai/";
const seoAgentsHref = "https://www.webtekdigital.com/best-seo-services-in-the-uaewebtek-digital/";

function hasStringList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function renderLinkedText(text: string) {
  const parts = text.split(/(digital marketing in Dubai|digital marketing|SEO agents)/gi);

  return parts.map((part, index) => {
    const normalized = part.toLowerCase();

    if (normalized === "digital marketing in dubai" || normalized === "digital marketing") {
      return (
        <a key={`${part}-${index}`} href={digitalMarketingHref}>
          {part}
        </a>
      );
    }

    if (normalized === "seo agents") {
      return (
        <a key={`${part}-${index}`} href={seoAgentsHref}>
          {part}
        </a>
      );
    }

    return part;
  });
}

function getArticlePreview(article: BlogPost["articles"][number]) {
  const paragraphs =
    "paragraphs" in article && hasStringList(article.paragraphs)
      ? article.paragraphs.slice(0, 1)
      : [];
  const bullets =
    "bullets" in article && hasStringList(article.bullets)
      ? article.bullets.slice(0, paragraphs.length > 0 ? 3 : 4)
      : [];

  return { paragraphs, bullets };
}

export function BlogDetailPage({ post }: { post: BlogPost }) {
  const relatedPosts = blogPosts.filter((item) => item.href !== post.href).slice(0, 3);

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
            {post.title}
          </motion.p>
          {"date" in post ? (
            <motion.div className={styles.blogPostMeta} variants={blogHeroReveal}>
              <span>{post.author}</span><span>{post.date}</span><span>{post.category}</span>
            </motion.div>
          ) : null}
        </motion.section>

        <section className={styles.blogPageList} aria-label={post.title}>
          {post.articles.map((article, index) => {
            const preview = getArticlePreview(article);

            return (
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
                  {preview.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{renderLinkedText(paragraph)}</p>
                  ))}
                  {preview.bullets.length > 0 ? (
                    <ul>
                      {preview.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </section>
        <section className={styles.relatedArticles} aria-labelledby="related-articles-heading">
          <header className={styles.relatedArticlesHeader}>
            <p>Continue reading</p>
            <h2 id="related-articles-heading">Related News &amp; Articles</h2>
          </header>
          <div className={styles.relatedArticlesGrid}>
            {relatedPosts.map((related) => (
              <article key={related.href} className={styles.relatedArticleCard}>
                <Link href={related.href} className={styles.relatedArticleImage} aria-label={`Read ${related.title}`}>
                  <Image src={related.image} alt={related.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  <span className={styles.relatedArticleIndex} aria-hidden="true">
                    {String(relatedPosts.indexOf(related) + 1).padStart(2, "0")}
                  </span>
                </Link>
                <div className={styles.relatedArticleBody}>
                  <span className={styles.relatedArticleCategory}>{related.category}</span>
                  <h3><Link href={related.href}>{related.title}</Link></h3>
                  <p>{related.excerpt}</p>
                  <Link href={related.href} className={styles.relatedArticleLink}>
                    <span>Read article</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
