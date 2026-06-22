"use client";

import { motion } from "framer-motion";
import styles from "../../page.module.css";

const appDevelopmentServices = [
  "Beauty salon and wellness booking apps",
  "Grocery and pharmacy delivery platforms",
  "Taxi and ride booking apps",
  "Restaurant delivery and e-learning apps",
  "On-demand handyman and home services apps",
];

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SeoServicesSection() {
  return (
    <div className={styles.seoServicesSection} aria-labelledby="seo-services-heading">
      <div className={styles.seoServicesHeader}>
        <motion.p
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          [ WHAT WE DO ]
        </motion.p>
        <motion.h2
          id="seo-services-heading"
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.08 }}
        >
          Our expertise, built around your growth.
        </motion.h2>
      </div>

      <motion.div
        className={styles.seoServicesGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.14 } },
        }}
      >
        <motion.article
          className={`${styles.seoServiceArticle} ${styles.seoServiceArticleFeatured}`}
          variants={revealUp}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35 }}
        >
          <p className={styles.seoServiceNumber}>01</p>
          <h3>Android &amp; iOS App Development Company in Dubai</h3>
          <p>
            As a full-service application development company in Dubai, Webtek Digital designs and builds mobile apps
            that are fast, intuitive, and engineered to scale. Our Android app development team in Dubai works across
            native and cross-platform frameworks, while our iOS specialists ship App Store-ready builds with the polish
            global brands expect. We have delivered application development projects across categories that matter to
            the UAE market, including:
          </p>
          <ul>
            {appDevelopmentServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <p>
            Whether you are a startup validating an MVP or an enterprise replacing a legacy system, our app development
            company in Dubai handles the full lifecycle, from product strategy and UI/UX design through development, QA,
            and post-launch support, so your app does not just launch, it performs.
          </p>
        </motion.article>

        <motion.article
          className={styles.seoServiceArticle}
          variants={revealUp}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35 }}
        >
          <p className={styles.seoServiceNumber}>02</p>
          <h3>Best Advertising Agency in Dubai for Google Ads &amp; Performance Marketing</h3>
          <p>
            Webtek Digital is recognized as one of the best advertising agencies in Dubai for brands that want their ad
            spend to work harder. As a certified AdWords agency in Dubai, we manage Google Ads across Search, Shopping,
            Display, and YouTube, layering audience segmentation and conversion tracking onto every campaign so budget
            moves toward what is actually driving leads and sales.
          </p>
          <p>
            Our performance marketing team does not stop at clicks. We build full-funnel lead generation systems, from
            landing page design to CRM handoff, so the campaigns we run for Dubai-based retailers, healthcare brands,
            and service businesses are judged on revenue, not impressions. If you have outgrown a generalist marketing
            agency, our advertising team is built to manage serious ad budgets with accountability.
          </p>
        </motion.article>

        <motion.article
          className={styles.seoServiceArticle}
          variants={revealUp}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35 }}
        >
          <p className={styles.seoServiceNumber}>03</p>
          <h3>Best Content Marketing Agency &amp; Companies in Dubai</h3>
          <p>
            Great ads can only do so much without content that earns trust before the click. That is where our content
            marketing agency comes in. Webtek Digital is consistently ranked among the best content marketing companies
            in Dubai for brands that need a long-term organic growth engine, not just one-off blog posts.
          </p>
          <p>
            Our content strategists pair keyword research with a content calendar tied directly to your sales funnel,
            covering everything from SEO-optimized landing pages to thought-leadership articles and social content.
            Combined with our SEO and digital PR services, our content marketing work is designed to compound, building
            organic visibility that keeps generating leads long after a paid campaign ends.
          </p>
        </motion.article>
      </motion.div>
    </div>
  );
}
