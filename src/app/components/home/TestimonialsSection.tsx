"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { testimonials } from "../../data/home";
import styles from "../../page.module.css";
import { clienteleContainer, clienteleFadeUp } from "./animations";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];
  const visiblePreviews = [1, 2].map((offset) => testimonials[(activeIndex + offset) % testimonials.length]);

  const showPreviousTestimonial = () => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1));
  };

  const showNextTestimonial = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
  };

  return (
    <motion.section
      className={styles.testimonialsSection}
      aria-labelledby="testimonials-heading"
      variants={clienteleContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
    >
      <div className={styles.testimonialsAccent} aria-hidden="true" />
      <div className={styles.testimonialsHeader}>
        <motion.p className={styles.testimonialsLabel} variants={clienteleFadeUp}>
          TESTIMONIALS
        </motion.p>
        <motion.h2 id="testimonials-heading" variants={clienteleFadeUp}>
          Teams choose us when growth needs structure, speed, and clearer results
        </motion.h2>
      </div>

      <div className={styles.testimonialsSlider}>
        <div className={styles.testimonialSliderMain}>
          <AnimatePresence mode="wait">
            <motion.article
              key={activeTestimonial.name}
              className={`${styles.testimonialCard} ${styles.testimonialCardFeatured}`}
              initial={{ opacity: 0, x: 42, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -42, scale: 0.98 }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.testimonialCardTop}>
                <span>{activeTestimonial.rating}</span>
                <span>{activeTestimonial.result}</span>
              </div>
              <p className={styles.testimonialQuote}>{activeTestimonial.quote}</p>
              <div className={styles.testimonialAuthor}>
                <span>{activeTestimonial.name}</span>
                <span>{activeTestimonial.role}</span>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className={styles.testimonialSliderControls}>
            <button type="button" onClick={showPreviousTestimonial} aria-label="Previous testimonial">
              ‹
            </button>
            <div className={styles.testimonialSliderDots} aria-label="Choose testimonial">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  className={index === activeIndex ? styles.testimonialSliderDotActive : undefined}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
            <button type="button" onClick={showNextTestimonial} aria-label="Next testimonial">
              ›
            </button>
          </div>
        </div>

        <div className={styles.testimonialPreviewStack} aria-hidden="true">
          {visiblePreviews.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              className={styles.testimonialCard}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.testimonialCardTop}>
                <span>{testimonial.rating}</span>
                <span>{testimonial.result}</span>
              </div>
              <p className={styles.testimonialQuote}>{testimonial.quote}</p>
              <div className={styles.testimonialAuthor}>
                <span>{testimonial.name}</span>
                <span>{testimonial.role}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
