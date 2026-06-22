import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { leftServices, rightServices, tileServiceMap } from "../../data/home";
import styles from "../../page.module.css";

type TileId = 1 | 2 | 3 | 4 | 5 | 6;
const serviceTileIds: TileId[] = [1, 2, 3, 4, 5, 6];
const serviceTileClassNames: Record<TileId, keyof typeof styles> = {
  1: "visualOne",
  2: "visualTwo",
  3: "visualThree",
  4: "visualFour",
  5: "visualFive",
  6: "visualSix",
};
const serviceTileImages: Record<TileId, { src: string; alt: string }> = {
  1: { src: "/about/about-16.jpg", alt: "UX sketches and color swatches on a desk" },
  2: { src: "/about/about-10.jpg", alt: "Analytics dashboard open on a laptop" },
  3: { src: "/about/about-08.jpg", alt: "Payment terminal close-up" },
  4: { src: "/about/about-09.jpg", alt: "Team working together on laptops" },
  5: { src: "/about/about-14.jpg", alt: "Business team reviewing charts and reports" },
  6: { src: "/about/about-02.jpg", alt: "Business team reviewing analytics on a tablet" },
};
const serviceTileByName = Object.fromEntries(
  Object.entries(tileServiceMap).map(([tile, service]) => [service, Number(tile) as TileId]),
) as Record<string, TileId>;

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTile, setActiveTile] = useState<TileId | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const renderService = (item: string) => {
    const tile = serviceTileByName[item];
    const isActive = activeTile === tile;

    return (
      <h3
        key={item}
        className={isActive ? styles.serviceNameActive : undefined}
        onMouseEnter={() => setActiveTile(tile)}
        onMouseLeave={() => setActiveTile(null)}
      >
        {item}
      </h3>
    );
  };

  return (
    <section ref={sectionRef} id="our-services" className={styles.servicesSection}>
      <div className={styles.servicesTop}>
        <p className={styles.servicesTag}>WORK</p>
        <h2>Instead of adapting to change, we shape it.</h2>
        <button type="button">SEE OUR WORK</button>
      </div>

      <div className={styles.servicesStage}>
        <div className={styles.servicesSide}>{leftServices.map(renderService)}</div>

        <div
          className={[
            styles.servicesVisualGrid,
            isVisible ? styles.servicesVisualGridVisible : "",
            activeTile ? styles.servicesVisualGridActive : "",
          ].join(" ")}
          aria-hidden="true"
          onMouseLeave={() => setActiveTile(null)}
        >
          <div className={styles.visualRow}>
            {serviceTileIds.slice(0, 3).map((tile) => (
              <div
                key={tile}
                className={[
                  styles.visualTile,
                  styles[serviceTileClassNames[tile]],
                  activeTile === tile ? styles.visualTileActive : "",
                ].join(" ")}
                onMouseEnter={() => setActiveTile(tile)}
              >
                <Image
                  src={serviceTileImages[tile].src}
                  alt={serviceTileImages[tile].alt}
                  fill
                  sizes="(max-width: 960px) 33vw, 16vw"
                  className={styles.visualTileImage}
                />
              </div>
            ))}
          </div>
          <div className={styles.visualRow}>
            {serviceTileIds.slice(3).map((tile) => (
              <div
                key={tile}
                className={[
                  styles.visualTile,
                  styles[serviceTileClassNames[tile]],
                  activeTile === tile ? styles.visualTileActive : "",
                ].join(" ")}
                onMouseEnter={() => setActiveTile(tile)}
              >
                <Image
                  src={serviceTileImages[tile].src}
                  alt={serviceTileImages[tile].alt}
                  fill
                  sizes="(max-width: 960px) 33vw, 16vw"
                  className={styles.visualTileImage}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.servicesSide} ${styles.servicesSideRight}`}>
          {rightServices.map(renderService)}
        </div>
      </div>
    </section>
  );
}
