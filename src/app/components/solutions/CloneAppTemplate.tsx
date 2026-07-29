import Image from "next/image";
import Link from "next/link";
import { Footer } from "../home/Footer";
import { FloatingWhatsAppButton } from "../home/FloatingWhatsAppButton";
import { Header } from "../home/Header";
import { VideoCtaSection } from "../shared/VideoCtaSection";
import styles from "../../solutions/talabat-clone-app/page.module.css";

type Feature = readonly [string, string];
type ProcessStep = readonly [string, string];

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
  cta: { eyebrow: string; title: string; body: string; href: string };
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function CloneAppTemplate({ config }: { config: CloneAppTemplateConfig }) {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{config.eyebrow}</p>
            <h1>{config.title}</h1>
            <p className={styles.lead}>{config.lead}</p>
            <div className={styles.actions}>
              <Link href="#contact" className={styles.primaryButton}>{config.primaryCta ?? "Discuss your project"} <Arrow /></Link>
              <Link href="#platform" className={styles.secondaryButton}>{config.secondaryCta ?? "Explore the platform"}</Link>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <Image src={config.heroImage} alt={config.heroImageAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        </section>

        <section className={styles.overview}>
          <SectionHeading number="01." eyebrow="Platform overview" title="A complete digital ecosystem, built around your business." />
          <div className={styles.overviewCopy}>
            {config.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className={styles.metrics}>
              {config.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <SectionHeading number="02." eyebrow="Core capabilities" title="Everything needed to operate and grow." />
          <div className={styles.featureGrid}>
            {config.features.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className={styles.platform} id="platform">
          <SectionHeading number="03." eyebrow="Connected products" title="Focused experiences for every user." />
          <div className={styles.moduleList}>
            {config.modules.map((module) => (
              <article className={styles.module} key={module.title}>
                <div className={styles.moduleMedia}><Image src={module.image} alt={module.alt} fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
                <div className={styles.moduleCopy}><span>{module.number}</span><p className={styles.moduleLabel}>{module.label}</p><h3>{module.title}</h3><p>{module.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.technology}>
          <div className={styles.technologyCopy}>
            <SectionHeading number="04." eyebrow="Technology" title="Built on a modern, scalable foundation." />
            <p className={styles.technologyLead}>{config.technologyLead}</p>
            <div className={styles.tags}>{config.technologyTags.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          <div className={styles.technologyMedia}><Image src={config.technologyImage} alt={config.technologyImageAlt} fill sizes="(max-width: 800px) 100vw, 44vw" /></div>
        </section>

        <section className={styles.process}>
          <SectionHeading number="05." eyebrow="Our process" title="A clear path from idea to launch." />
          <div className={styles.processList}>
            {config.process.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

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
