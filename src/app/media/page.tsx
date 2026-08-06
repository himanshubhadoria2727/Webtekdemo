import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FloatingWhatsAppButton } from "../components/home/FloatingWhatsAppButton";
import { Footer } from "../components/home/Footer";
import { Header } from "../components/home/Header";
import { ArrowIcon } from "../components/shared/ArrowIcon";
import { VideoCtaSection } from "../components/shared/VideoCtaSection";
import { blogPosts } from "../data/home";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Media & Newsroom | Webtek Digital",
  description:
    "Read company news, media stories and digital growth articles from Webtek Digital in Dubai.",
};

const newsroomStories = [
  {
    type: "Company story",
    title: "One connected team for brand, technology and growth",
    summary:
      "A look at how Webtek Digital brings strategy, creative, development and performance marketing together for ambitious UAE businesses.",
    image: "/about/about-09.jpg",
    imageAlt: "Webtek Digital team collaborating in a modern studio",
  },
  {
    type: "Inside Webtek",
    title: "How a digital product moves from an idea to launch",
    summary:
      "Inside the decisions, disciplines and delivery stages that turn an early concept into a focused website or mobile product.",
    image: "/about/about-12.jpg",
    imageAlt: "Digital product team working across multiple screens",
  },
  {
    type: "Studio note",
    title: "Building digital experiences for a fast-moving market",
    summary:
      "Why clarity, local context and measurable outcomes shape the digital experiences we create for businesses across Dubai and the GCC.",
    image: "/about/about-16.jpg",
    imageAlt: "Creative planning materials on a studio desk",
  },
] as const;

export default function MediaPage() {
  const featuredArticle = blogPosts[0];

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="media-heading">
          <div className={styles.heroGrid}>
            <h1 id="media-heading">
              News, thinking<br />
              <em>and perspective.</em>
            </h1>
            <div className={styles.heroCopy}>
              <p>
                The latest stories from Webtek Digital, alongside practical articles on marketing, technology and
                building stronger brands in the UAE.
              </p>
              <a href="#latest" className={styles.textLink}>
                Explore the newsroom <span className={styles.arrow}><ArrowIcon /></span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.featured} aria-labelledby="featured-heading">
          <div className={styles.featuredMedia}>
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.imageAlt}
              fill
              preload
              sizes="(max-width: 850px) 100vw, 58vw"
            />
          </div>
          <div className={styles.featuredCopy}>
            <div className={styles.sectionMarker}><span>01</span><p>Featured article</p></div>
            <p className={styles.category}>{featuredArticle.category}</p>
            <h2 id="featured-heading">{featuredArticle.title}</h2>
            <p>{featuredArticle.excerpt}</p>
            <Link href={featuredArticle.href} className={styles.pillLink}>
              Read the article <span className={styles.arrow}><ArrowIcon /></span>
            </Link>
          </div>
        </section>

        <section id="latest" className={styles.newsroom} aria-labelledby="newsroom-heading">
          <header className={styles.sectionHeader}>
            <div className={styles.sectionMarker}><span>02</span><p>Newsroom</p></div>
            <h2 id="newsroom-heading">From inside<br />the company.</h2>
            <p>Company stories, studio notes and updates from the people behind our work.</p>
          </header>

          <div className={styles.storyGrid}>
            {newsroomStories.map((story, index) => (
              <article className={styles.story} key={story.title}>
                <div className={styles.storyMedia}>
                  <Image src={story.image} alt={story.imageAlt} fill sizes="(max-width: 720px) 100vw, 33vw" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className={styles.storyMeta}><p>{story.type}</p><span>Webtek Digital</span></div>
                <h3>{story.title}</h3>
                <p className={styles.storySummary}>{story.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.articles} aria-labelledby="articles-heading">
          <header className={styles.articlesHeader}>
            <div className={styles.sectionMarker}><span>03</span><p>Perspectives</p></div>
            <h2 id="articles-heading">Ideas for<br />digital growth.</h2>
          </header>

          <div className={styles.articleList}>
            {blogPosts.map((article, index) => (
              <Link href={article.href} className={styles.articleRow} key={article.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.articleThumb}>
                  <Image src={article.image} alt="" fill sizes="8rem" />
                </div>
                <div className={styles.articleTitle}>
                  <p>{article.category}</p>
                  <h3>{article.title}</h3>
                </div>
                <span className={styles.rowArrow} aria-hidden="true"><ArrowIcon /></span>
              </Link>
            ))}
          </div>
        </section>

        <VideoCtaSection
          eyebrow="Media enquiries"
          title="Looking for a comment, company profile or interview?"
          body="Speak with the Webtek Digital team about press opportunities, expert commentary and company information."
          ctaLabel="Contact our team"
          ctaHref="mailto:info@webtekdigital.com?subject=Media%20enquiry"
        />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
