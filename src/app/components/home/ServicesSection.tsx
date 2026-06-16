import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { leftServices, rightServices, tileServiceMap } from "../../data/home";
import styles from "../../page.module.css";

type TileId = 1 | 2 | 3 | 4 | 5 | 6;
type TileScales = Record<TileId, number>;

const defaultTileScales: TileScales = {
  1: 0.88,
  2: 0.88,
  3: 0.88,
  4: 0.88,
  5: 0.88,
  6: 0.88,
};
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

function getScaleFromDistance(distance: number) {
  const radius = 520;
  const proximity = Math.max(0, 1 - distance / radius);
  return 0.88 + proximity * 0.28;
}

export function ServicesSection() {
  const serviceRefs = useRef<Record<string, HTMLHeadingElement | null>>({});
  const cursorPointRef = useRef<{ x: number; y: number } | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const [tileScales, setTileScales] = useState<TileScales>(defaultTileScales);
  const rowOneWeights = `${tileScales[1]}fr ${tileScales[2]}fr ${tileScales[3]}fr`;
  const rowTwoWeights = `${tileScales[4]}fr ${tileScales[5]}fr ${tileScales[6]}fr`;

  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const handleServicesMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    cursorPointRef.current = { x: event.clientX, y: event.clientY };
    if (rafIdRef.current !== null) return;

    rafIdRef.current = window.requestAnimationFrame(() => {
      const point = cursorPointRef.current;
      if (!point) return;

      const nextScales: TileScales = { ...defaultTileScales };

      serviceTileIds.forEach((tile) => {
        const textEl = serviceRefs.current[tileServiceMap[tile]];
        if (!textEl) return;

        const rect = textEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(point.x - centerX, point.y - centerY);
        nextScales[tile] = getScaleFromDistance(distance);
      });

      setTileScales(nextScales);
      rafIdRef.current = null;
    });
  };

  return (
    <section id="our-services" className={styles.servicesSection}>
      <div className={styles.servicesTop}>
        <p className={styles.servicesTag}>WORK</p>
        <h2>Instead of adapting to change, we shape it.</h2>
        <button type="button">SEE OUR WORK</button>
      </div>

      <div
        className={styles.servicesStage}
        onMouseMove={handleServicesMouseMove}
        onMouseLeave={() => {
          if (rafIdRef.current !== null) {
            window.cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = null;
          }
          setTileScales(defaultTileScales);
        }}
      >
        <div className={styles.servicesSide}>
          {leftServices.map((item) => (
            <h3
              key={item}
              ref={(el) => {
                serviceRefs.current[item] = el;
              }}
            >
              {item}
            </h3>
          ))}
        </div>

        <div className={styles.servicesVisualGrid} aria-hidden="true">
          <div className={styles.visualRow} style={{ gridTemplateColumns: rowOneWeights }}>
            {serviceTileIds.slice(0, 3).map((tile) => (
              <div key={tile} className={`${styles.visualTile} ${styles[serviceTileClassNames[tile]]}`}>
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
          <div className={styles.visualRow} style={{ gridTemplateColumns: rowTwoWeights }}>
            {serviceTileIds.slice(3).map((tile) => (
              <div key={tile} className={`${styles.visualTile} ${styles[serviceTileClassNames[tile]]}`}>
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
          {rightServices.map((item) => (
            <h3
              key={item}
              ref={(el) => {
                serviceRefs.current[item] = el;
              }}
            >
              {item}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
}
