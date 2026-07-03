"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { CSSProperties, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "../../page.module.css";

export function HeaderVideoSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoCursorPosition, setVideoCursorPosition] = useState({ x: 0, y: 0 });
  const [isVideoCursorVisible, setIsVideoCursorVisible] = useState(false);
  const headerVideoRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: headerVideoRef,
    offset: ["start 86%", "start 4%"],
  });
  const headerVideoScale = useTransform(scrollYProgress, [0, 0.18, 0.92], [0.92, 0.92, 1]);

  useEffect(() => {
    if (!isVideoModalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoModalOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoModalOpen]);

  const handleHeaderVideoMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const frame = event.currentTarget.getBoundingClientRect();

    setVideoCursorPosition({
      x: event.clientX - frame.left,
      y: event.clientY - frame.top,
    });
  };

  return (
    <>
      <motion.section
        ref={headerVideoRef}
        className={styles.headerVideoSection}
        aria-label="Webtek Digital brand video"
      >
        <motion.button
          className={styles.headerVideoFrame}
          type="button"
          onClick={() => setIsVideoModalOpen(true)}
          onMouseEnter={() => setIsVideoCursorVisible(true)}
          onMouseLeave={() => setIsVideoCursorVisible(false)}
          onMouseMove={handleHeaderVideoMouseMove}
          aria-label="Play Webtek Digital brand video with sound"
          style={
            {
              "--video-cursor-x": `${videoCursorPosition.x}px`,
              "--video-cursor-y": `${videoCursorPosition.y}px`,
              scaleX: headerVideoScale,
            } as CSSProperties
          }
        >
          <video
            className={styles.headerVideoMedia}
            src="/Header-Video.mp4"
            autoPlay
            muted
            loop
            playsInline
            suppressHydrationWarning
          />
          <span className={styles.headerVideoCursor} data-visible={isVideoCursorVisible}>
            play
          </span>
        </motion.button>
      </motion.section>

      {isVideoModalOpen ? (
        <div className={styles.headerVideoModal} role="dialog" aria-modal="true" aria-label="Webtek Digital brand video">
          <button
            className={styles.headerVideoModalBackdrop}
            type="button"
            aria-label="Close video"
            onClick={() => setIsVideoModalOpen(false)}
          />
          <div className={styles.headerVideoModalPanel}>
            <button
              className={styles.headerVideoModalClose}
              type="button"
              aria-label="Close video"
              onClick={() => setIsVideoModalOpen(false)}
            >
              close
            </button>
            <video className={styles.headerVideoModalMedia} src="/Header-Video.mp4" autoPlay controls playsInline />
          </div>
        </div>
      ) : null}
    </>
  );
}
