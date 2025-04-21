import React from 'react';
import styles from './About.module.css';

const About = () => (
  <section className={styles.about}>
    <h2>Sophia Saunders</h2>
    <p>
      I’m a UX/UI & production design student, focused on creating intuitive experiences,
      exploring the intersection of design and marketing, and always learning along the way.
    </p>

    <h3>About me</h3>
    <p>
      Hi, I’m Sophia! I’m a senior at the University of Central Florida, graduating in May 2025 with a degree in Digital Media.
      I’ve always loved being creative and working in the digital space, which has led me to pursue a career in UX/UI and production design—
      with a growing interest in social media marketing. My learning journey has been all about blending design, technology, and strategy
      to create engaging digital experiences. Throughout my studies, I’ve developed skills in Figma, Adobe Creative Suite, and social media tools,
      along with a foundational understanding of HTML, CSS, and JavaScript for front-end design.
    </p>

    <h3>Resumes</h3>
    <ul>
      <li><a href='/assets/resume/professional-resume.pdf' target='_blank'>Professional Resume</a></li>
      <li><a href='/assets/resume/creative-resume.pdf' target='_blank'>Creative Resume</a></li>
    </ul>
  </section>
);

export default About;
