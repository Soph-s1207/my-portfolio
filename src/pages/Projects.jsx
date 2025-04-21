/* src/pages/Projects.jsx */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Projects.module.css';

const projects = [
  {
    id: 'adventour',
    title: 'AdvenTour',
    description:
      'AdvenTour is a smart itinerary planner designed to enhance the theme park experience by helping users create and manage their park schedules effortlessly. Whether users prefer a customized itinerary based on their favorite attractions or a recommended schedule, AdvenTour ensures a smooth and enjoyable visit. The app provides real-time notifications for ride times, wait times, and upcoming attractions on the itinerary, keeping users informed and maximizing their time at the park. With a user-friendly interface and responsive design, AdvenTour ensures seamless navigation across various mobile devices, making trip planning more efficient, stress-free, and fun. By integrating React Native and Supabase, AdvenTour offers a fast, reliable, and interactive experience, making it the ultimate companion for theme park visitors looking to make the most of their adventure.',
    images: ['/assets/images/Scene 5 (1).jpg'],
    video: 'https://www.youtube.com/embed/U2pXYz1bzd8',
    responsibilities: [
      'UX/UI Designer: Designed and refined the user experience to ensure a seamless and intuitive interface for the AdvenTour application.',
      'Co-Creation of Low-Fidelity & High-Fidelity Prototypes: Collaborated in developing both lo-fi wireframes and hi-fi prototypes, ensuring the final design aligned with user needs and project goals.',
      'Logo Design: Created the official AdvenTour logo, establishing a strong brand identity and visual theme for the app.',
      'Front-End Development Support: Assisted in implementing CSS styling to ensure the front-end matched the prototypes design.',
      'Responsive Design Implementation: Worked on making all pages responsive during backend development.'
    ]
  },
  {
    id: 'renewd-beauty',
    title: "Renew'd Beauty",
    description:
      "Renew’d Beauty is a beauty refill subscription app that personalizes skincare and cosmetic recommendations through an interactive quiz. Users receive tailored product suggestions and can subscribe to automatic refills, ensuring they never run out of their essentials. Our team developed three design mockups—Conservative, Moderate, and Wild—before selecting the Moderate design based on user feedback. Through market research, user testing, and iteration, we refined the app’s usability and visual appeal to create an intuitive and engaging experience.",
    images: ['/assets/images/Scene 12 (2).jpg', '/assets/images/Scene 12.jpg', '/assets/images/Scene 12 (1).jpg'],
    responsibilities: [
      'Branding & Visual Identity: Contributed to the brand logo, color scheme, typography, and app icon.',
      'Ensured a cohesive and visually appealing design aligned with our brand.',
      'Created a mood board to guide the overall aesthetic.',
      'UI/UX & Wireframing: Helped with wireframing, layout, and spacing for clear visual hierarchy.',
      'Interaction & Usability Testing: Participated in usability testing to gather feedback and iterate on improvements.'
    ]
  },
  {
    id: 'webflow-redesign',
    title: 'Webflow Website Redesign & Implementation',
    description:
      'This project focused on analyzing, redesigning, and implementing a website using Webflow, highlighting the role of no-code platforms in modern web development. I selected an existing website, evaluated its design and content management needs, and adapted it for a new business context using Figma and Webflow’s CMS. This project strengthened my skills in UX design, no-code development, and content structuring for dynamic websites.',
    images: ['/assets/images/Section 1.jpg', '/assets/images/Section 2.png'],
    responsibilities: [
      'Redesigned all UI layouts to match UX goals.',
      'Reorganized Webflow CMS collections for optimal performance.',
      'Enhanced responsiveness and accessibility across devices.'
    ]
  }
];

export default function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const yOffset = -100;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 500);
      }
    }
  }, [location]);

  return (
    <div className={styles.projectsWrapper}>
        <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.heading}>Projects.</h1>
        </div>
      </section>
      {projects.map((project) => (
        <section key={project.id} id={project.id} className={styles.projectCard}>
          <div className={styles.projectHeader}>
            <h2>{project.title}</h2>
          </div>

          <p className={styles.projectDescription}>{project.description}</p>

          <div className={styles.projectGallery}>
            {project.images.map((src, i) => (
              <img key={i} src={src} alt={project.title} />
            ))}
          </div>
          {project.video && (
            <div className={styles.projectVideoWrapper}>
              <iframe
                width="100%"
                height="400"
                src={project.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className={styles.projectResponsibilities}>
            <h3>Key Responsibilities</h3>
            <ul>
              {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
