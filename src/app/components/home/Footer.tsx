import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerServices, footerSocials, footerSolutions } from "../../data/home";
import styles from "../../page.module.css";

const contactEmail = "info@webtekdigital.com";
const footerAddress = "P.O. Box 30301, Dubai, UAE";

const socialIcons: Record<string, ReactNode> = {
  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14.1 8.5V6.9c0-.8.5-1 1-1h1.9V2.7l-2.7-.1c-3 0-4.6 1.8-4.6 5v.9H6.8v3.6h2.9v9.3h3.7v-9.3h3.1l.5-3.6h-3Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.7 2.8h8.6c2.7 0 4.9 2.2 4.9 4.9v8.6c0 2.7-2.2 4.9-4.9 4.9H7.7a4.9 4.9 0 0 1-4.9-4.9V7.7c0-2.7 2.2-4.9 4.9-4.9Zm0 1.8a3.1 3.1 0 0 0-3.1 3.1v8.6a3.1 3.1 0 0 0 3.1 3.1h8.6a3.1 3.1 0 0 0 3.1-3.1V7.7a3.1 3.1 0 0 0-3.1-3.1H7.7Zm4.3 3.1a4.3 4.3 0 1 1 0 8.6 4.3 4.3 0 0 1 0-8.6Zm0 1.8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5-2.1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.45 14.88L2.05 22l5.25-1.5A9.92 9.92 0 1 0 12.04 2Zm0 17.98a8.03 8.03 0 0 1-4.1-1.12l-.3-.18-3.12.89.9-3.04-.2-.31a8 8 0 1 1 6.82 3.76Zm4.4-6.01c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.27 7.27 0 0 1-1.34-1.67c-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  ),
};

const socialLinks: Record<string, string> = {
  Facebook: "#contact-us",
  Instagram: "#contact-us",
  WhatsApp: "https://wa.me/971581263762",
};

const solutionLinks: Record<string, string> = {
  "Our blogs": "/blog",
};

function splitIntoColumns(items: string[], columnCount: number) {
  const columnSize = Math.ceil(items.length / columnCount);

  return Array.from({ length: columnCount }, (_, index) => items.slice(index * columnSize, (index + 1) * columnSize));
}

export function Footer() {
  const serviceColumns = splitIntoColumns(footerServices, 2);
  const solutionColumns = splitIntoColumns(footerSolutions, 2);

  return (
    <footer id="contact-us" className={styles.footerSection}>
      <div className={styles.footerTopLine} aria-hidden="true" />
{/* 
      <div className={styles.footerCta}>
        <div>
          <p>Have a project in mind?</p>
          <h2>Let&apos;s build something that performs</h2>
        </div>
        <a href="mailto:info@webtekdigital.com" className={styles.footerCtaLink}>
          Start a conversation <span aria-hidden="true">→</span>
        </a>
      </div> */}

      <div className={styles.footerGrid}>
        <div className={styles.footerLogoRow}>
          <Image src="/logo.png" alt="Webtek Digital" width={220} height={126} className={styles.footerLogo} />
          <span>{footerAddress}</span>
        </div>

        <div className={styles.footerColumnGroup}>
          <section className={styles.footerColumn}>
            <h2>Our services</h2>
            <div className={styles.footerListGrid}>
              {serviceColumns.map((column, index) => (
                <ul key={`services-${index}`}>
                  {column.map((item) => (
                    <li key={item}>
                      <Link href="/our-services">{item}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>

          <section className={styles.footerColumn}>
            <h2>Our solutions</h2>
            <div className={styles.footerListGrid}>
              {solutionColumns.map((column, index) => (
                <ul key={`solutions-${index}`}>
                  {column.map((item) => (
                    <li key={item}>
                      <Link href={solutionLinks[item] ?? "/solutions#solutions"}>{item}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>

          <section className={`${styles.footerColumn} ${styles.footerContact}`}>
            <h2>Quick contact</h2>
            <dl>
              <div>
                <dt>Mobile no.</dt>
                <dd>
                  <a href="tel:+971581263762">+971 58 126 3762</a>
                </dd>
              </div>
              <div>
                <dt>Send email</dt>
                <dd>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>
                  <span>{footerAddress}</span>
                </dd>
              </div>
            </dl>

            <div className={styles.footerSocials} aria-label="Social links">
              {footerSocials.map((item) => (
                <a
                  key={item}
                  href={socialLinks[item]}
                  aria-label={item}
                  target={item === "WhatsApp" ? "_blank" : undefined}
                  rel={item === "WhatsApp" ? "noreferrer" : undefined}
                >
                  {socialIcons[item]}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 Webtek Digital. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
