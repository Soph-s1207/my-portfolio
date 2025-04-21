import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, link, image }) => (
  <div className={styles.card}>
    <img src={image} alt={title} className={styles.image} />
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link} target='_blank' rel='noopener noreferrer'>View Project</a>
  </div>
);

export default ProjectCard;