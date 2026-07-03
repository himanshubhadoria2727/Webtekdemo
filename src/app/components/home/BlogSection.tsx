import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "../../data/home";
import styles from "../../page.module.css";
import { clienteleCardMotion, clienteleContainer, clienteleFadeUp } from "./animations";

export function BlogSection() {
  return (
    <motion.section
      id="blogs"
      className={styles.blogSection}
      aria-labelledby="blogs-heading"
      variants={clienteleContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.blogHeader}>
        <div>
          <motion.p className={styles.blogLabel} variants={clienteleFadeUp}>
            News and Articles
          </motion.p>
          <motion.h2 id="blogs-heading" variants={clienteleFadeUp}>
            Practical Digital Growth Notes for Dubai Businesses
          </motion.h2>
          <motion.p className={styles.blogIntro} variants={clienteleFadeUp}>
            Ideas, guides, and campaign lessons for teams building stronger digital channels.
          </motion.p>
        </div>
      </div>

      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <motion.div
            key={post.title}
            className={styles.blogCard}
            variants={clienteleCardMotion}
            whileHover={{ y: -10, boxShadow: "0 22px 46px rgba(16, 16, 16, 0.18)" }}
          >
            <Link href={post.href}>
              <div className={styles.blogImageWrap}>
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 900px) 100vw, 31vw" />
              </div>
              <div className={styles.blogCardBody}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className={styles.blogCardLink}>READ MORE</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
