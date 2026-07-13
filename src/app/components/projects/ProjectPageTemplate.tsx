import Image from "next/image";
import Link from "next/link";
import type { projectPages } from "../../data/projects";
import styles from "../../page.module.css";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";
import { ArrowIcon } from "../shared/ArrowIcon";
import { VideoCtaSection } from "../shared/VideoCtaSection";

type ProjectPageData = (typeof projectPages)[keyof typeof projectPages];

type ProjectPageTemplateProps = {
  project: ProjectPageData;
};

export function ProjectPageTemplate({ project }: ProjectPageTemplateProps) {
  const heroLead = project.intro.split(". ")[0] ?? project.intro;
  const heroSummary = `${heroLead.replace(/\.$/, "")}.`;
  const statementTitle = project.scrollItems
    .slice(0, 3)
    .map((item) => item.title)
    .join(", ");

  return (
    <div className={styles.pageWrap}>
      <Header />
      <main className={styles.projectPage}>
        <section className={styles.projectHero}>
          <div className={styles.projectHeroTitleRow}>
            <div className={styles.projectHeroCopy}>
              <h1>{project.hero.title}</h1>
              <p>{heroSummary}</p>
              <Link href="#contact-us" className={styles.projectHeroCta}>
                make appointment
                <span className={styles.buttonArrow} aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </div>

            <div className={styles.projectHeroSide}>
              <div className={styles.projectHeroFrame}>
                <Image
                  src={project.hero.imageSrc}
                  alt={project.hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 40vw"
                  className={styles.projectHeroImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="project-overview" className={styles.projectIntroSection}>
          <div className={styles.projectSectionHeading}>
            <span>01.</span>
            <h2>{project.hero.kicker}</h2>
          </div>
          <div className={styles.projectIntroCopy}>
            <p>{project.intro}</p>
          </div>
        </section>

        <section id="project-build" className={styles.projectStatementSection}>
          <div className={styles.projectStatementText}>
            <span>02.</span>
            <h2>{statementTitle}</h2>
          </div>

          <div className={styles.projectStatementMedia}>
            <Image
              src={project.hero.imageSrc}
              alt={project.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 960px) 100vw, 52vw"
              className={styles.projectStatementImage}
            />
          </div>

          <div className={styles.projectStatementCopy}>
            {project.scrollItems.slice(0, 2).map((item) => (
              <p key={item.title}>{item.text}</p>
            ))}
          </div>
        </section>

        <section id="project-features" className={styles.projectFeatureSection}>
          <div className={styles.projectFeatureHeader}>
            <div className={styles.projectSectionHeading}>
              <span>03.</span>
              <h2>{project.scrollLabel}</h2>
            </div>
            <Link href="#contact-us">
              make appointment
              <span className={styles.buttonArrow} aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
          </div>

          <div className={styles.projectFeatureGrid}>
            {project.scrollItems.map((item, index) => (
              <article key={item.title} className={styles.projectFeatureCard}>
                <div className={styles.projectFeatureMedia}>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 33vw"
                    className={styles.projectFeatureImage}
                  />
                </div>
                <div className={styles.projectFeatureBody}>
                  <h3>
                    {String(index + 1).padStart(2, "0")}. {item.title}
                  </h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <VideoCtaSection />
      </main>
      <Footer />
    </div>
  );
}
