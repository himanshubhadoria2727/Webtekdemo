import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/home/Footer";
import { Header } from "../components/home/Header";
import styles from "../components/portfolio/PortfolioPage.module.css";

export const metadata: Metadata = { title: "Media | Webtek Digital", description: "News, perspectives and media from Webtek Digital." };

export default function Page() {
  return <div className={styles.page}><Header /><main><section className={styles.hero}><p className={styles.eyebrow}>Webtek Digital / Media</p><div className={styles.heroGrid}><h1>Ideas worth<br /><em>sharing.</em></h1><div className={styles.heroCopy}><p>Media is its own space for news, insights, and stories from the Webtek team. New features and updates will live here.</p><Link href="/portfolio" className={styles.scrollLink}>View our portfolio <span>↗</span></Link></div></div></section></main><Footer /></div>;
}
