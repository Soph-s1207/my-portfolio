/* src/pages/About.jsx */

import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.heading}>About.</h1>
        </div>
      </section>

      <section className={styles.profileSection}>
        <div className={styles.profileImageOverlay}>
          <div className={styles.profileTextContainer}>
            <h2 className={styles.name}>Sophia Saunders</h2>
            <p className={styles.description}>
              I’m a UX/UI & production design student, focused on creating intuitive experiences, exploring the intersection of design and marketing, and always learning along the way.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.bioSection}>
        <h2 className={styles.subheading}>About me</h2>
        <p className={styles.bio}>
          Hi, I’m Sophia! I’m a senior at the University of Central Florida, graduating in May 2025 with a degree in Digital Media. I’ve always loved being creative and working in the digital space, which has led me to pursue a career in UX/UI and production design—with a growing interest in social media marketing.
          My learning journey has been all about blending design, technology, and strategy to create engaging digital experiences. Throughout my studies, I’ve developed skills in Figma, Adobe Creative Suite, and social media tools, along with a foundational understanding of HTML, CSS, and JavaScript for front-end design.
          I’m passionate about crafting intuitive user experiences, refining visual storytelling, and exploring how design influences digital interactions. As I continue to grow, I’m excited to apply my skills in real-world projects and collaborate with innovative teams. Let’s connect and create something amazing!
        </p>
        <p className={styles.resumeIntro}>
          I’ve created two versions of my resume to showcase my skills in different ways. The professional version is tailored for recruiters, while the creative version highlights my design approach.
        </p>
        <div className={styles.resumeLinks}>
          <a href="https://beanhaven.my.canva.site/professional-resume" target="_blank" rel="noopener noreferrer">Professional Resume</a>
          <a href="https://beanhaven.my.canva.site/creative-resume" target="_blank" rel="noopener noreferrer">Creative Resume</a>
          </div>
      </section>
    </div>
  );
}

