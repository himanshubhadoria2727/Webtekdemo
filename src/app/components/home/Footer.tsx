import type { ReactNode } from "react";
import { footerImportantLinks, footerServices, footerSocials, footerSolutions } from "../../data/home";
import styles from "../../page.module.css";

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
      <path d="M12 2.8a9 9 0 0 1 7.6 13.8l1.1 4-4.1-1.1A9 9 0 0 1 3 11.8a9 9 0 0 1 9-9Zm0 1.8a7.2 7.2 0 0 0-6 11.2l.3.4-.6 2.1 2.2-.6.4.2A7.2 7.2 0 1 0 12 4.6Zm-3.1 3.7c.2 0 .4 0 .5.4l.7 1.7c.1.2.1.4 0 .5l-.4.5c-.1.1-.2.3-.1.5.4.7.9 1.4 1.5 1.9.7.6 1.4 1 2.2 1.3.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.2.1.4.3.4.5 0 .5-.3 1.3-.7 1.6-.5.4-1.1.5-1.9.3-1.5-.3-3.1-1.1-4.4-2.4-1.4-1.3-2.5-3-2.9-4.5-.2-.7-.1-1.3.3-1.8.3-.4.8-.7 1.3-.7Z" />
    </svg>
  ),
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

      <div className={styles.footerGrid}>
        <div className={styles.footerColumnGroup}>
          <section className={styles.footerColumn}>
            <h2>Our Services</h2>
            <div className={styles.footerListGrid}>
              {serviceColumns.map((column, index) => (
                <ul key={`services-${index}`}>
                  {column.map((item) => (
                    <li key={item}>
                      <a href="#our-services">{item}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>

          <section className={styles.footerColumn}>
            <h2>Our Solutions</h2>
            <div className={styles.footerListGrid}>
              {solutionColumns.map((column, index) => (
                <ul key={`solutions-${index}`}>
                  {column.map((item) => (
                    <li key={item}>
                      <a href="#solutions">{item}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>

          <section className={`${styles.footerColumn} ${styles.footerContact}`}>
            <h2>Quick Contact</h2>
            <dl>
              <div>
                <dt>Mobile No.</dt>
                <dd>
                  <a href="tel:+971581263762">+971 58 126 3762</a>
                </dd>
              </div>
              <div>
                <dt>Send Email</dt>
                <dd>
                  <a href="mailto:Info@bhatia.co">Info@bhatia.co</a>
                </dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>
                  <span>P.O. Box 30301, Dubai, UAE</span>
                </dd>
              </div>
            </dl>

            <div className={styles.footerSocials} aria-label="Social links">
              {footerSocials.map((item) => (
                <a key={item} href="#contact-us" aria-label={item}>
                  {socialIcons[item]}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className={styles.footerBrandBlock}>
        <span className={styles.footerBrand}>WEBTEK</span>
        <span className={styles.footerLanguage}>DUBAI, UAE</span>
      </div>

      <section className={styles.footerImportant}>
        <h2>Important Links</h2>
        <p>
          {footerImportantLinks.map((item, index) => (
            <span key={item}>
              <a href="#contact-us">{item}</a>
              {index < footerImportantLinks.length - 1 ? " | " : ""}
            </span>
          ))}
        </p>
      </section>

      <div className={styles.footerBottom}>
        <p>Copyright © 2025 Webtek Digital. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
