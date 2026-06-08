"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import type { projectPages } from "../../data/projects";
import styles from "../../page.module.css";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";

type ProjectPageData = (typeof projectPages)[keyof typeof projectPages];

type ProjectPageTemplateProps = {
  project: ProjectPageData;
};

export function ProjectPageTemplate({ project }: ProjectPageTemplateProps) {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".projectScrollPanel");
      const contents = gsap.utils.toArray<HTMLElement>(".projectScrollContent");
      const mediaStack = document.querySelector<HTMLElement>(".projectScrollMediaStack");
      const mediaItems = gsap.utils.toArray<HTMLElement>(".projectScrollMedia");
      const headerOffset = 92;
      const getPanelHeight = (panel: HTMLElement) => {
        const inner = panel.firstElementChild;

        return inner instanceof HTMLElement ? inner.scrollHeight : panel.scrollHeight;
      };
      const getMediaOffset = (index: number) => {
        if (!mediaStack || !mediaItems[index]) {
          return 0;
        }

        return mediaItems[index].offsetTop - mediaItems[0].offsetTop;
      };

      gsap.set(contents, {
        height: 0,
        autoAlpha: 0,
      });

      if (contents[0]) {
        gsap.set(contents[0], {
          height: getPanelHeight(contents[0]),
          autoAlpha: 1,
        });
      }

      if (mediaStack) {
        gsap.set(mediaStack, {
          y: 0,
        });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".projectScrollSection",
          start: () => `top top+=${headerOffset}`,
          end: () => `+=${window.innerHeight * (panels.length - 1) * 0.52}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      contents.slice(0, -1).forEach((content, index) => {
        const nextContent = contents[index + 1];

        timeline
          .fromTo(
            content,
            { height: () => getPanelHeight(content), autoAlpha: 1 },
            { height: 0, autoAlpha: 0, duration: 0.72, ease: "none", immediateRender: false },
          )
          .fromTo(
            nextContent,
            { height: 0, autoAlpha: 0 },
            {
              height: () => getPanelHeight(nextContent),
              autoAlpha: 1,
              duration: 0.72,
              ease: "none",
              immediateRender: false,
            },
            "<",
          )
          .to(
            mediaStack,
            {
              y: () => -getMediaOffset(index + 1),
              duration: 0.72,
              ease: "none",
            },
            "<",
          )
          .to({}, { duration: 0.18 });
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, [project]);

  return (
    <div className={styles.pageWrap} ref={pageRef}>
      <Header />
      <main className={styles.projectPage}>
        <section className={styles.projectHero}>
          <div className={styles.projectMetaBar}>
            <p>
              Client <strong>{project.meta.client}</strong>
            </p>
            <p>
              Industry <strong>{project.meta.industry}</strong>
            </p>
            <p>
              Category <strong>{project.meta.category}</strong>
            </p>
            <p>
              Ref <strong>{project.meta.ref}</strong>
            </p>
          </div>

          <div className={styles.projectHeroFrame}>
            {"imageSrc" in project.hero && project.hero.imageSrc ? (
              <Image
                src={project.hero.imageSrc}
                alt={project.hero.imageAlt}
                fill
                priority
                sizes="100vw"
                className={styles.projectHeroImage}
              />
            ) : null}
            <span>{project.hero.kicker}</span>
            <h1>{project.hero.title}</h1>
          </div>
        </section>

        <section className={styles.projectIntroSection}>
          <p className={styles.projectIntroLabel}>[Overview]</p>
          <p>{project.intro}</p>
        </section>

        <section className={`${styles.projectScrollSection} projectScrollSection`}>
          <div className={styles.projectScrollText}>
            <div className={styles.projectScrollList}>
              {project.scrollItems.map((item, index) => (
                <article key={item.title} className={`${styles.projectScrollPanel} projectScrollPanel`}>
                  <h2>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.title}
                  </h2>
                  <div className={`${styles.projectScrollContent} projectScrollContent`}>
                    <div className={styles.projectScrollContentInner}>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={`${styles.projectScrollMediaStack} projectScrollMediaStack`}>
            {project.scrollItems.map((item, index) => (
              <div key={item.imageLabel} className={`${styles.projectScrollMedia} projectScrollMedia`}>
                {"imageSrc" in item && item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 960px) 100vw, 42vw"
                    className={styles.projectScrollMediaImage}
                  />
                ) : null}
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
