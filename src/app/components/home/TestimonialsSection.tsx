"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { testimonials } from "../../data/home";
import styles from "../../page.module.css";
import { clienteleContainer, clienteleFadeUp } from "./animations";

const visibleTestimonialCount = 3;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleTestimonials = Array.from(
    { length: visibleTestimonialCount },
    (_, index) => testimonials[(startIndex + index) % testimonials.length],
  );

  const showPreviousTestimonial = () => {
    setStartIndex((currentIndex) => (currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1));
  };

  const showNextTestimonial = () => {
    setStartIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
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
      <div className={styles.testimonialsHeader}>
        <div>
          <motion.p className={styles.testimonialsLabel} variants={clienteleFadeUp}>
            Testimonials
          </motion.p>
          <motion.h2 id="testimonials-heading" variants={clienteleFadeUp}>
            Customer testimonials
          </motion.h2>
          <motion.p className={styles.testimonialsIntro} variants={clienteleFadeUp}>
            Hear directly from our satisfied partners.
          </motion.p>
        </div>

        <motion.div className={styles.testimonialSliderControls} variants={clienteleFadeUp}>
          <button type="button" onClick={showPreviousTestimonial} aria-label="Previous testimonial">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 5-7 7 7 7" />
            </svg>
          </button>
          <button type="button" onClick={showNextTestimonial} aria-label="Next testimonial">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>

      <motion.div
        key={startIndex}
        className={styles.testimonialsSlider}
        variants={clienteleFadeUp}
        initial={{ opacity: 0, x: 34 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        {visibleTestimonials.map((testimonial) => (
          <article key={testimonial.name} className={styles.testimonialCard}>
            <div className={styles.testimonialCardTop}>
              <span aria-hidden="true">&quot;</span>
              <span aria-label={`${testimonial.rating} star rating`}>*****</span>
            </div>
            <p className={styles.testimonialQuote}>{testimonial.quote}</p>
            <div className={styles.testimonialAuthor}>
              <span className={styles.testimonialAvatar} aria-hidden="true">
                {getInitials(testimonial.name)}
              </span>
              <span>
                <strong>{testimonial.name}</strong>
                <small>{testimonial.role}</small>
              </span>
            </div>
          </article>
        ))}
      </motion.div>

      <div className={styles.testimonialSliderDots} aria-label="Choose testimonial">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            className={index === startIndex ? styles.testimonialSliderDotActive : undefined}
            onClick={() => setStartIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
            aria-current={index === startIndex ? "true" : undefined}
          />
        ))}
      </div>
    </motion.section>
  );
}
