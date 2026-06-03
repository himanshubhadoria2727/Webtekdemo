import { footerImportantLinks, footerServices, footerSocials, footerSolutions } from "../../data/home";
import styles from "../../page.module.css";

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
                  {item.slice(0, 2)}
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
