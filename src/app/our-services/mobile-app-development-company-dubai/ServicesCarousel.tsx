"use client";

import { useRef, useState, type CSSProperties, type UIEvent } from "react";
import Image from "next/image";
import styles from "./page.module.css";

type CarouselImage = {
  src: string;
  alt: string;
};

type ServicesCarouselProps = {
  items: readonly (readonly [string, string])[];
  visualLabels?: readonly string[];
  images?: readonly CarouselImage[];
  theme?: "dark" | "light";
};

const accents = ["#ff5a43", "#665cff", "#21a67a", "#e8b63f", "#db4d8f"];
const visualLabels = ["Custom build", "Android", "iOS", "Flutter", "React Native", "Enterprise", "Applied AI", "UI / UX", "Modernise", "Support"];

function ServiceVisual({ index, label, image }: { index: number; label: string; image?: CarouselImage }) {
  return (
    <div className={[styles.serviceCarouselVisual, image ? styles.serviceCarouselVisualWithImage : ""].join(" ")}>
      {image ? <Image src={image.src} alt={image.alt} fill sizes="(max-width: 680px) 88vw, (max-width: 980px) 48vw, 31vw" /> : null}
      <span className={styles.serviceVisualLabel}>{label}</span>
      {!image ? <><div className={styles.serviceOrbit}><i /><i /><i /></div><svg className={styles.serviceDevice} viewBox="0 0 180 230" fill="none"><rect x="38" y="7" width="104" height="216" rx="25" stroke="currentColor" strokeWidth="2" /><path d="M72 20h36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><rect x="52" y="43" width="76" height="67" rx="10" stroke="currentColor" strokeWidth="2" /><path d="M65 126h50M65 143h35M65 172h50M65 189h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="116" cy="189" r="8" fill="currentColor" /></svg></> : null}
      <span className={styles.serviceVisualCode}>{String(index + 1).padStart(2, "0")}</span>
    </div>
  );
}

export function ServicesCarousel({ items, visualLabels: customVisualLabels, images, theme = "dark" }: ServicesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updatePosition = (event: UIEvent<HTMLDivElement>) => {
    const track = event.currentTarget;
    const cards = Array.from(track.children) as HTMLElement[];
    const nearestIndex = cards.reduce((nearest, card, index) => {
      const currentDistance = Math.abs(cards[nearest].offsetLeft - track.offsetLeft - track.scrollLeft);
      const nextDistance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
      return nextDistance < currentDistance ? index : nearest;
    }, 0);

    setActiveIndex(nearestIndex);
    setIsAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 2);
  };

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0");
    const distance = (firstCard?.offsetWidth ?? track.clientWidth * 0.8) + gap;
    track.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  return (
    <div className={[styles.serviceCarousel, theme === "light" ? styles.serviceCarouselLight : ""].join(" ")}>
      <div className={styles.serviceCarouselToolbar}>
        <p><span>{String(activeIndex + 1).padStart(2, "0")}</span> / {String(items.length).padStart(2, "0")}</p>
        <div className={styles.serviceCarouselProgress} aria-hidden="true"><i style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }} /></div>
        <div className={styles.serviceCarouselButtons}>
          <button type="button" onClick={() => move(-1)} disabled={activeIndex === 0} aria-label="Previous services">←</button>
          <button type="button" onClick={() => move(1)} disabled={isAtEnd} aria-label="Next services">→</button>
        </div>
      </div>

      <div ref={trackRef} className={styles.serviceCarouselTrack} onScroll={updatePosition}>
        {items.map(([title, body], index) => (
          <article
            className={styles.serviceCarouselCard}
            key={title}
            style={{ "--service-card-accent": accents[index % accents.length] } as CSSProperties}
          >
            <ServiceVisual index={index} label={customVisualLabels?.[index] ?? visualLabels[index] ?? title} image={images?.[index]} />
            <div className={styles.serviceCarouselCopy}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
