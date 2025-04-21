/* src/components/Footer.jsx */

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTitle}>My Portfolio<span style={{ color: 'red' }}>.</span></div>
      <div className={styles.footerLinks}>
        <a href="mailto:sophiasaunders1207@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        <a href="https://www.linkedin.com/in/sophia-saunders-a3785a259/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        <a href="https://beanhaven.my.canva.site/creative-resume" target="_blank" rel="noopener noreferrer">Creative Resume</a>
        <a href="https://beanhaven.my.canva.site/professional-resume" target="_blank" rel="noopener noreferrer">Professional Resume</a>
      </div>
      <div className={styles.footerNote}>
        Thank you for visiting my portfolio. Feel free to reach out via email or connect with me on LinkedIn!
      </div>
    </footer>
  );
};

export default Footer;
