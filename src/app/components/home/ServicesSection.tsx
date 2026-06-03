import { useEffect, useRef, useState } from "react";
import { leftServices, rightServices, tileServiceMap } from "../../data/home";
import styles from "../../page.module.css";

type TileId = 1 | 2 | 3 | 4 | 5 | 6;
type TileScales = Record<TileId, number>;

const defaultTileScales: TileScales = {
  1: 0.9,
  2: 0.9,
  3: 0.9,
  4: 0.9,
  5: 0.9,
  6: 0.9,
};
const serviceTileIds: TileId[] = [1, 2, 3, 4, 5, 6];

function getScaleFromDistance(distance: number) {
  const radius = 520;
  const proximity = Math.max(0, 1 - distance / radius);
  return 0.9 + proximity * 0.3;
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
            <div className={`${styles.visualTile} ${styles.visualOne}`} />
            <div className={`${styles.visualTile} ${styles.visualTwo}`} />
            <div className={`${styles.visualTile} ${styles.visualThree}`} />
          </div>
          <div className={styles.visualRow} style={{ gridTemplateColumns: rowTwoWeights }}>
            <div className={`${styles.visualTile} ${styles.visualFour}`} />
            <div className={`${styles.visualTile} ${styles.visualFive}`} />
            <div className={`${styles.visualTile} ${styles.visualSix}`} />
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
