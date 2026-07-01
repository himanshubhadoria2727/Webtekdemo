import Link from "next/link";
import styles from "../../page.module.css";

type VideoCtaSectionProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  videoSrc?: string;
};

export function VideoCtaSection({
  eyebrow = "Ready to Grow?",
  title = "Let's Build Your Digital Success Story",
  body = "Whether you're looking to generate more qualified leads, increase online visibility, improve conversions or transform your entire digital presence, we're ready to help.",
  ctaLabel = "Book Your Free Strategy Consultation Today.",
  ctaHref = "/#contact-us",
  videoSrc = "/footer-vid.mp4",
}: VideoCtaSectionProps) {
  return (
    <section className={styles.videoCtaSection}>
      <video
        className={styles.videoCtaMedia}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        suppressHydrationWarning
      />
      <div className={styles.videoCtaContent}>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        <span>{body}</span>
        <Link href={ctaHref}>{ctaLabel}</Link>
      </div>
    </section>
  );
}
