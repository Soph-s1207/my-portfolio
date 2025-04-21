import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => (
  <section className={styles.projects}>
    <h1>My Projects</h1>
    <div className={styles.projectList}>
      <ProjectCard
        title="AdvenTour"
        description="A smart itinerary planner for theme parks built with React Native and Supabase. Features real-time ride updates, custom schedules, and user-friendly design."
        link="https://sophia-saunders-portfolio.webflow.io/work/looking-for-life-beyond-earth"
        image="/assets/images/adventour.png"
      />
      <ProjectCard
        title="Renew’d Beauty"
        description="A personalized beauty refill app with quiz-based suggestions and visual mockups. Designed branding, UX, and responsive UI in multiple iterations."
        link="https://sophia-saunders-portfolio.webflow.io/work/igotchu"
        image="/assets/images/renewd.png"
      />
      <ProjectCard
        title="Todo App"
        description="Task management app with login/signup, state management, and cross-platform support using React Native & Expo. Focused on accessibility and UI."
        link="https://sophia-saunders-portfolio.webflow.io/work/todo-app"
        image="/assets/images/todo-app.png"
      />
    </div>
  </section>
);

export default Projects;