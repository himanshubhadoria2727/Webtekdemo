"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../home/Footer";
import { FloatingWhatsAppButton } from "../home/FloatingWhatsAppButton";
import { Header } from "../home/Header";
import { ArrowIcon } from "../shared/ArrowIcon";
import { VideoCtaSection } from "../shared/VideoCtaSection";
import styles from "../../solutions/talabat-clone-app/page.module.css";

type Feature = readonly [string, string];
type ProcessStep = readonly [string, string];
type DetailSection = {
  eyebrow: string;
  title: string;
  intro: string;
  items: readonly (readonly [string, string])[];
};
type Faq = readonly [string, string];

const sectionMotion = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

const cardMotion = (index: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.5, delay: Math.min(index * 0.08, 0.32), ease: [0.22, 1, 0.36, 1] as const },
});

type Module = {
  number: string;
  label: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export type CloneAppTemplateConfig = {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta?: string;
  secondaryCta?: string;
  heroImage: string;
  heroImageAlt: string;
  overview: readonly [string, string];
  metrics: readonly (readonly [string, string])[];
  features: readonly Feature[];
  modules: readonly Module[];
  technologyLead: string;
  technologyImage: string;
  technologyImageAlt: string;
  technologyTags: readonly string[];
  process: readonly ProcessStep[];
  detailSections?: readonly DetailSection[];
  faqTitle?: string;
  faqs?: readonly Faq[];
  cta: { eyebrow: string; title: string; body: string; href: string };
};

export function CloneAppTemplate({ config }: { config: CloneAppTemplateConfig }) {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <motion.section className={styles.hero} initial="initial" animate="whileInView" variants={{ initial: { opacity: 0 }, whileInView: { opacity: 1 } }} transition={{ duration: 0.45 }}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{config.eyebrow}</p>
            <h1>{config.title}</h1>
            <p className={styles.lead}>{config.lead}</p>
            <div className={styles.actions}>
              <Link href="#contact" className={styles.primaryButton}>
                {config.primaryCta ?? "Discuss your project"}
                <span className={styles.buttonArrow} aria-hidden="true"><ArrowIcon /></span>
              </Link>
              <Link href="#platform" className={styles.secondaryButton}>
                {config.secondaryCta ?? "Explore the platform"}
                <span className={styles.buttonArrow} aria-hidden="true"><ArrowIcon /></span>
              </Link>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <Image src={config.heroImage} alt={config.heroImageAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        </motion.section>

        <motion.section className={styles.overview} {...sectionMotion}>
          <SectionHeading number="01." eyebrow="Platform overview" title="A complete digital ecosystem, built around your business." />
          <div className={styles.overviewCopy}>
            {config.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className={styles.metrics}>
              {config.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
        </motion.section>

        <motion.section className={styles.features} {...sectionMotion}>
          <SectionHeading number="02." eyebrow="Core capabilities" title="Everything needed to operate and grow." />
          <div className={styles.featureGrid}>
            {config.features.map(([title, text], index) => <motion.article key={title} {...cardMotion(index)}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></motion.article>)}
          </div>
        </motion.section>

        <motion.section className={styles.platform} id="platform" {...sectionMotion}>
          <SectionHeading number="03." eyebrow="Connected products" title="Focused experiences for every user." />
          <div className={styles.moduleList}>
            {config.modules.map((module, index) => (
              <motion.article className={styles.module} key={module.title} {...cardMotion(index)}>
                <div className={styles.moduleMedia}><Image src={module.image} alt={module.alt} fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
                <div className={styles.moduleCopy}><span>{module.number}</span><p className={styles.moduleLabel}>{module.label}</p><h3>{module.title}</h3><p>{module.text}</p></div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className={styles.technology} {...sectionMotion}>
          <div className={styles.technologyCopy}>
            <SectionHeading number="04." eyebrow="Technology" title="Built on a modern, scalable foundation." />
            <p className={styles.technologyLead}>{config.technologyLead}</p>
            <div className={styles.tags}>{config.technologyTags.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          <div className={styles.technologyMedia}><Image src={config.technologyImage} alt={config.technologyImageAlt} fill sizes="(max-width: 800px) 100vw, 44vw" /></div>
        </motion.section>

        <motion.section className={styles.process} {...sectionMotion}>
          <SectionHeading number="05." eyebrow="Our process" title="A clear path from idea to launch." />
          <div className={styles.processList}>
            {config.process.map(([title, text], index) => <motion.article key={title} {...cardMotion(index)}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></motion.article>)}
          </div>
        </motion.section>

        {config.detailSections?.map((section, sectionIndex) => (
          <motion.section className={styles.details} key={section.title} {...sectionMotion}>
            <SectionHeading number={`${String(sectionIndex + 6).padStart(2, "0")}.`} eyebrow={section.eyebrow} title={section.title} />
            <div className={styles.detailsContent}>
              <p className={styles.detailsIntro}>{section.intro}</p>
              <div className={styles.detailsGrid}>
                {section.items.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </motion.section>
        ))}

        {config.faqs && config.faqs.length > 0 && <motion.section className={styles.faqs} {...sectionMotion}>
          <SectionHeading number="12." eyebrow="Frequently asked questions" title={config.faqTitle ?? "Frequently asked questions"} />
          <div className={styles.faqList}>
            {config.faqs.map(([question, answer], index) => <article key={question}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{question}</h3><p>{answer}</p></div></article>)}
          </div>
        </motion.section>}

        <div id="contact"><VideoCtaSection eyebrow={config.cta.eyebrow} title={config.cta.title} body={config.cta.body} ctaLabel="Start a conversation" ctaHref={config.cta.href} /></div>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return <header className={styles.sectionHeading}><span>{number}</span><div><p>{eyebrow}</p><h2>{title}</h2></div></header>;
}
