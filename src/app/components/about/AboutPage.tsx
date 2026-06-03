"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import styles from "../../page.module.css";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";

const mosaicTiles = [
  { id: "01", x: "0vw", y: "-2vh", w: "26vw", h: "18vh", tone: "dark" },
  { id: "02", x: "50vw", y: "-2vh", w: "26vw", h: "18vh", tone: "light" },
  { id: "03", x: "24vw", y: "16vh", w: "26vw", h: "22vh", tone: "mid" },
  { id: "04", x: "50vw", y: "16vh", w: "28vw", h: "22vh", tone: "accent" },
  { id: "05", x: "11vw", y: "38vh", w: "13vw", h: "18vh", tone: "light" },
  { id: "06", x: "24vw", y: "38vh", w: "26vw", h: "30vh", tone: "warm" },
  { id: "07", x: "50vw", y: "38vh", w: "28vw", h: "30vh", tone: "dark" },
  { id: "08", x: "78vw", y: "38vh", w: "13vw", h: "30vh", tone: "light" },
  { id: "09", x: "11vw", y: "56vh", w: "13vw", h: "24vh", tone: "mid" },
  { id: "10", x: "24vw", y: "68vh", w: "26vw", h: "18vh", tone: "light" },
  { id: "11", x: "50vw", y: "68vh", w: "28vw", h: "18vh", tone: "accent" },
  { id: "12", x: "78vw", y: "68vh", w: "13vw", h: "18vh", tone: "warm" },
  { id: "13", x: "-8vw", y: "16vh", w: "19vw", h: "22vh", tone: "accent" },
  { id: "14", x: "91vw", y: "16vh", w: "19vw", h: "22vh", tone: "mid" },
] as const;

const tileToneClasses = {
  accent: styles.aboutTileAccent,
  dark: styles.aboutTileDark,
  light: styles.aboutTileLight,
  mid: styles.aboutTileMid,
  warm: styles.aboutTileWarm,
};

export function AboutPage() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aboutTile",
        {
          left: "50%",
          top: "50%",
          width: "0.55rem",
          height: "0.55rem",
          opacity: 0,
          xPercent: -50,
          yPercent: -50,
          scale: 0.2,
        },
        {
          left: "var(--tile-x)",
          top: "var(--tile-y)",
          width: "var(--tile-w)",
          height: "var(--tile-h)",
          opacity: 1,
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          ease: "none",
          stagger: 0.025,
          scrollTrigger: {
            trigger: ".aboutMosaicSection",
            start: "top top",
            end: "+=260%",
            scrub: 0.7,
            pin: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div className={styles.pageWrap} ref={pageRef}>
      <Header />
      <main className={styles.aboutPage}>
        <section className={`${styles.aboutMosaicSection} aboutMosaicSection`}>
          <div className={styles.aboutMosaicSticky}>
            <p className={styles.aboutMosaicKicker}>
              [A POINT OF REFERENCE. <span /> A BETTER PERSPECTIVE.]
            </p>
            <div className={styles.aboutCenterDot} aria-hidden="true" />
            <div className={styles.aboutMosaicStage} aria-label="Animated about image placeholders">
              {mosaicTiles.map((tile) => (
                <div
                  key={tile.id}
                  className={`${styles.aboutTile} aboutTile ${tileToneClasses[tile.tone]}`}
                  style={
                    {
                      "--tile-x": tile.x,
                      "--tile-y": tile.y,
                      "--tile-w": tile.w,
                      "--tile-h": tile.h,
                    } as CSSProperties
                  }
                >
                  <span>Image {tile.id}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
