import Link from "next/link";
import styles from "../../page.module.css";

export function GrowthTouchpointSection() {
  return (
    <section className={styles.growthTouchpointSection}>
      <p className={styles.growthTouchpointLabel}>Who we are</p>
      <div className={styles.growthTouchpointGrid}>
        <h2>Driving digital growth across every customer touchpoint</h2>
        <div className={styles.growthTouchpointCopy}>
          <p>
            At Webtek Digital, we believe digital success isn&apos;t built through isolated marketing efforts -
            it&apos;s created through connected customer experiences. As a{" "}
            <Link href="/our-services" className={styles.growthTouchpointInlineLink}>
              360 degree digital marketing agency in Dubai
            </Link>{" "}
            with over a decade of experience, we help businesses attract the right audience, convert more customers and
            build lasting brand loyalty.
          </p>
          <p>
            From{" "}
            <Link href="/our-services" className={styles.growthTouchpointInlineLink}>
              website design and development
            </Link>{" "}
            to SEO, Google Ads, Meta Ads, social media marketing, branding, content creation,{" "}
            <Link href="/solutions" className={styles.growthTouchpointInlineLink}>
              Android and iOS app development solutions
            </Link>{" "}
            and marketing automation, every solution is designed to work together as part of one growth-focused
            strategy. We don&apos;t simply deliver marketing services - we build digital ecosystems that support every
            stage of your customer&apos;s journey.
          </p>
          <p>
            Whether you&apos;re launching a new brand, scaling an established business or looking to improve your
            digital performance, our team combines creativity, technology and data-driven marketing to deliver
            measurable business outcomes.
          </p>
          <Link href="/about-us">-&gt; Discover how we grow brands</Link>
        </div>
      </div>
    </section>
  );
}
