import Image from "next/image";
import type { ReactNode } from "react";
import { Footer } from "../home/Footer";
import { FloatingWhatsAppButton } from "../home/FloatingWhatsAppButton";
import { Header } from "../home/Header";
import { VideoCtaSection } from "../shared/VideoCtaSection";
import { ServicesCarousel, type CarouselImage } from "./ServicesCarousel";
import styles from "./SingleServicePage.module.css";

type Pair = readonly [string, string];
type Heading = { eyebrow: string; title: string };

export type SingleServicePageConfig = {
  pageUrl: string;
  serviceName: string;
  serviceTypes: readonly string[];
  breadcrumbName: string;
  hero: { title: string; description: string; primaryCta: string; secondaryCta: string; note: string };
  intro: Heading & { items: readonly ReactNode[] };
  services: Heading & { items: readonly Pair[]; images: readonly CarouselImage[]; labels?: readonly string[]; ctaLead: string; ctaLabel: string };
  outcomes: { title: string; description: string; items: readonly string[] };
  industries: Heading & { description: string; items: readonly Pair[]; images: readonly CarouselImage[]; labels: readonly string[] };
  features: Heading & { items: readonly string[] };
  process: Heading & { items: readonly Pair[] };
  technology: Heading & { description: string; image: CarouselImage; items: readonly Pair[] };
  reasons: Heading & { items: readonly Pair[]; footer?: ReactNode };
  cost: { title: string; description: string; buttonLabel: string; factorsLabel: string; factors: readonly string[]; note: string };
  conversion: { eyebrow: string; title: string; description: string; benefits: readonly string[]; requirementLabel: string; requirementName: string; requirementPlaceholder: string; buttonLabel: string };
  faq: Heading & { items: readonly Pair[] };
  finalCta: { eyebrow: string; title: string; body: string; label: string };
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return <header className={styles.sectionHeading}><span>{number}</span><div><p>{eyebrow}</p><h2>{title}</h2></div></header>;
}

export function SingleServicePage({ config }: { config: SingleServicePageConfig }) {
  const schemas = [
    { "@context": "https://schema.org", "@type": "Organization", name: "Webtek Digital", url: "https://www.webtekdigital.com/", email: "info@webtekdigital.com", telephone: "+971581263762" },
    { "@context": "https://schema.org", "@type": "Service", name: config.serviceName, provider: { "@type": "Organization", name: "Webtek Digital" }, areaServed: ["Dubai", "United Arab Emirates"], serviceType: config.serviceTypes, url: config.pageUrl },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.webtekdigital.com/" },
      { "@type": "ListItem", position: 2, name: "Our Services", item: "https://www.webtekdigital.com/our-services/" },
      { "@type": "ListItem", position: 3, name: config.breadcrumbName, item: config.pageUrl },
    ] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: config.faq.items.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}><div className={styles.heroGrid}><div className={styles.heroCopy}><h1>{config.hero.title}</h1></div><div className={styles.heroContent}><p>{config.hero.description}</p><div className={styles.heroLinks}><a className={styles.heroLink} href="#project-form">{config.hero.primaryCta}<span aria-hidden="true">→</span></a><a className={styles.heroLink} href="#project-form">{config.hero.secondaryCta}<span aria-hidden="true">→</span></a></div><small>{config.hero.note}</small></div></div></section>
        <section className={styles.intro}><SectionHeading number="01." {...config.intro} /><div className={styles.introBody}>{config.intro.items.map((body, index) => <article key={index}><span>{String(index + 1).padStart(2, "0")}</span><p>{body}</p></article>)}</div></section>
        <section className={styles.services} id="services"><SectionHeading number="02." {...config.services} /><ServicesCarousel items={config.services.items} images={config.services.images} visualLabels={config.services.labels} /><div className={styles.inlineCta}><p>{config.services.ctaLead}</p><a href="#project-form">{config.services.ctaLabel}<Arrow /></a></div></section>
        <section className={styles.outcomes}><div className={styles.outcomesTitle}><span>03.</span><h2>{config.outcomes.title}</h2><p>{config.outcomes.description}</p></div><ol>{config.outcomes.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></section>
        <section className={styles.industries}><div className={styles.industriesIntro}><SectionHeading number="04." {...config.industries} /><div className={styles.industriesLead}><p>{config.industries.description}</p></div></div><ServicesCarousel items={config.industries.items} visualLabels={config.industries.labels} images={config.industries.images} theme="light" /></section>
        <section className={styles.features}><SectionHeading number="05." {...config.features} /><ul>{config.features.items.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section className={styles.process} id="process"><SectionHeading number="06." {...config.process} /><div className={styles.processGrid}>{config.process.items.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
        <section className={styles.technology}><div className={styles.techMedia}><Image src={config.technology.image.src} alt={config.technology.image.alt} fill sizes="(max-width: 900px) 100vw, 42vw" /></div><div className={styles.techContent}><span>07.</span><p className={styles.kicker}>{config.technology.eyebrow}</p><h2>{config.technology.title}</h2><p>{config.technology.description}</p><div>{config.technology.items.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
        <section className={styles.why}><SectionHeading number="08." {...config.reasons} /><div className={styles.whyGrid}>{config.reasons.items.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>{config.reasons.footer ? <p className={styles.internalLinks}>{config.reasons.footer}</p> : null}</section>
        <section className={styles.cost}><div className={styles.costIntro}><span>09.</span><h2>{config.cost.title}</h2><p>{config.cost.description}</p><a className={styles.lightButton} href="#project-form">{config.cost.buttonLabel}<Arrow /></a></div><div className={styles.costFactors}><p>{config.cost.factorsLabel}</p><ul>{config.cost.factors.map((item) => <li key={item}>{item}</li>)}</ul><p>{config.cost.note}</p></div></section>
        <section className={styles.conversion} id="project-form"><div className={styles.conversionCopy}><p>{config.conversion.eyebrow}</p><h2>{config.conversion.title}</h2><p>{config.conversion.description}</p><ul>{config.conversion.benefits.map((item) => <li key={item}>{item}</li>)}</ul></div><form className={styles.form} action="mailto:info@webtekdigital.com" method="post" encType="text/plain"><div><label htmlFor="name">Name</label><input id="name" name="Name" required placeholder="Your name" /></div><div><label htmlFor="company">Company</label><input id="company" name="Company" placeholder="Company name" /></div><div><label htmlFor="contact">Phone or email</label><input id="contact" name="Contact" required placeholder="How can we reach you?" /></div><div><label htmlFor="budget">Budget range</label><select id="budget" name="Budget"><option value="">Select a range</option><option>AED 25k–50k</option><option>AED 50k–100k</option><option>AED 100k+</option><option>Not sure yet</option></select></div><div className={styles.fullField}><label htmlFor="requirement">{config.conversion.requirementLabel}</label><textarea id="requirement" name={config.conversion.requirementName} required rows={4} placeholder={config.conversion.requirementPlaceholder} /></div><button type="submit">{config.conversion.buttonLabel}<Arrow /></button><small>Prefer WhatsApp? <a href="https://wa.me/971581263762" target="_blank" rel="noreferrer">Message our team directly.</a></small></form></section>
        <section className={styles.faq}><SectionHeading number="10." {...config.faq} /><div className={styles.faqList}>{config.faq.items.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span><h3>{question}</h3><i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}</div></section>
        <VideoCtaSection eyebrow={config.finalCta.eyebrow} title={config.finalCta.title} body={config.finalCta.body} ctaLabel={config.finalCta.label} ctaHref="#project-form" />
      </main>
      <Footer /><FloatingWhatsAppButton />
      {schemas.map((item, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }} />)}
    </div>
  );
}
