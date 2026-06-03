"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useRef, useState } from "react";
import { solutionLines, solutionNodes } from "../../data/home";
import styles from "../../page.module.css";

type CursorPull = {
  angle: number;
  strength: number;
};

const idleCursorPull: CursorPull = {
  angle: 0,
  strength: 0,
};

function getDirectionalPull(lineAngle: number, cursorPull: CursorPull) {
  if (cursorPull.strength === 0) {
    return {
      angle: 0,
      lengthScale: 1,
    };
  }

  const angleDifference = Math.sin(((cursorPull.angle - lineAngle) * Math.PI) / 180);
  const alignment = Math.cos(((cursorPull.angle - lineAngle) * Math.PI) / 180);
  const directionalReach = Math.max(0, alignment) * cursorPull.strength;

  return {
    angle: angleDifference * cursorPull.strength * 9.5,
    lengthScale: 1 + cursorPull.strength * 0.16 + directionalReach * 0.36,
  };
}

export function SolutionsSection() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [cursorPull, setCursorPull] = useState<CursorPull>(idleCursorPull);

  const handleSectionMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const mapRect = mapRef.current?.getBoundingClientRect();
    const sectionRect = event.currentTarget.getBoundingClientRect();
    const centerX = mapRect ? mapRect.left + mapRect.width / 2 : sectionRect.left + sectionRect.width / 2;
    const centerY = mapRect ? mapRect.top + mapRect.height / 2 : sectionRect.top + sectionRect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    const maxDistance = Math.hypot(sectionRect.width / 2, sectionRect.height / 2);
    const distance = Math.min(Math.hypot(deltaX, deltaY), maxDistance);

    setCursorPull({
      angle: (Math.atan2(deltaY, deltaX) * 180) / Math.PI,
      strength: distance / maxDistance,
    });
  };

  return (
    <section
      id="solutions"
      className={styles.solutionsSection}
      onMouseMove={handleSectionMouseMove}
    >
      <div className={styles.solutionsHeader}>
        <p className={styles.solutionsTag}>SERVICES</p>
        <motion.div
          className={styles.solutionsIntro}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>At the intersection of strategy and business, tech and design, we&apos;ll create your best work yet.</h2>
          <button type="button">SEE OUR CAPABILITIES</button>
        </motion.div>
      </div>

      <motion.div
        ref={mapRef}
        className={styles.solutionsMap}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <span className={styles.solutionsCenter} />
        {solutionLines.map((line, index) => {
          const pull = getDirectionalPull(line.angle, cursorPull);
          const length = line.length * pull.lengthScale;

          return (
            <span
              key={`${line.x}-${line.y}-${index}`}
              className={`${styles.solutionLine} ${line.active ? styles.solutionLineActive : ""}`}
              style={
                {
                  "--line-x": `${line.x}%`,
                  "--line-y": `${line.y}%`,
                  "--line-length": `${length}%`,
                  "--line-angle": `${line.angle}deg`,
                  "--line-delay": `${index * 34}ms`,
                  "--line-cursor-angle": `${pull.angle}deg`,
                  "--line-cursor-scale": 0,
                } as CSSProperties
              }
            />
          );
        })}
        {solutionNodes.map((node) => {
          const pull = getDirectionalPull(node.angle, cursorPull);
          const length = node.length * pull.lengthScale;

          return (
            <span
              key={node.label}
              className={styles.solutionNode}
              style={
                {
                  "--node-length": `${length}%`,
                  "--node-angle": `${node.angle}deg`,
                  "--node-delay": `${node.delay}ms`,
                  "--node-cursor-angle": `${pull.angle}deg`,
                  "--node-cursor-scale": 0,
                } as CSSProperties
              }
            >
              <span
                className={`${styles.solutionNodeLabel} ${
                  node.align === "left" ? styles.solutionNodeLabelLeft : styles.solutionNodeLabelRight
                }`}
              >
                <span className={styles.solutionNodeDot} />
                {node.label}
              </span>
            </span>
          );
        })}
        <span className={`${styles.pixelCluster} ${styles.pixelClusterLeft}`} />
        <span className={`${styles.pixelCluster} ${styles.pixelClusterBottom}`} />
        <span className={`${styles.pixelCluster} ${styles.pixelClusterRight}`} />
      </motion.div>
    </section>
  );
}
