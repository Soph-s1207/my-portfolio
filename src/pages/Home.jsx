import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.homeWrapper}>
    <section className={styles.heroSection}>
        <h1 className={styles.heroHeading}>Hello,</h1>
        <h2 className={styles.heroSubheading}>I'm Sophia.</h2>
        <p className={styles.heroDescription}>
          I design intuitive experiences, craft compelling visuals, and explore the world of social media marketing.
        </p>
      </section>
    <motion.section
      className={styles.projectBlock}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.projectText}>
        <span className={styles.projectNumber}>01</span>
        <h2>AdvenTour</h2>
        <p>
          AdvenTour is a smart itinerary planner designed to enhance the theme park experience by helping users create and manage their park schedules effortlessly. Whether users prefer a customized itinerary based on their favorite attractions or a recommended schedule, AdvenTour ensures a smooth and enjoyable visit. The app provides real-time notifications for ride times, wait times, and upcoming attractions on the itinerary, keeping users informed and maximizing their time at the park. With a user-friendly interface and responsive design, AdvenTour ensures seamless navigation across various mobile devices, making trip planning more efficient, stress-free, and fun. By integrating React Native and Supabase, AdvenTour offers a fast, reliable, and interactive experience, making it the ultimate companion for theme park visitors looking to make the most of their adventure.
        </p>
        <Link to="/projects#adventour" className={styles.viewLink}>view project</Link>
      </div>
      <div className={styles.projectImageWrapper}>
        <img src='/assets/images/Scene 5 (1).jpg' alt='AdvenTour' />
      </div>
    </motion.section>

    <motion.section
      className={styles.projectBlock}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.projectText}>
        <span className={styles.projectNumber}>02</span>
        <h2>Renew'd Beauty</h2>
        <p>
          Renew'd Beauty is a beauty refill subscription app that personalizes skincare and cosmetic recommendations through an interactive quiz. Users receive tailored product suggestions and can subscribe to automatic refills, ensuring they never run out of their essentials. Our team developed three design mockups—Conservative, Moderate, and Wild—before selecting the Moderate design based on user feedback. Through market research, user testing, and iteration, we refined the app’s usability and visual appeal to create an intuitive and engaging experience.
        </p>
        <Link to="/projects#renewd-beauty" className={styles.viewLink}>view project</Link>
        </div>
      <div className={styles.projectImageWrapper}>
        <img src='/assets/images/Scene 11.jpg' alt="Renew'd Beauty" />
      </div>
    </motion.section>

    <motion.section
      className={styles.projectBlock}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.projectText}>
        <span className={styles.projectNumber}>03</span>
        <h2>Webflow Website Redesign & Implementation</h2>
        <p>
          This project focused on analyzing, redesigning, and implementing a website using Webflow, highlighting the role of no-code platforms in modern web development. I selected an existing website, evaluated its design and content management needs, and adapted it for a new business context using Figma and Webflow's CMS. This project strengthened my skills in UX design, no-code development, and content structuring for dynamic websites.
        </p>
        <Link to="/projects#webflow-redesign" className={styles.viewLink}>view project</Link>
      </div>
      <div className={styles.projectImageWrapper}>
        <img src='/assets/images/MacBook (3).jpg' alt='Webflow Redesign' />
      </div>
    </motion.section>
  </div>
);

export default Home;