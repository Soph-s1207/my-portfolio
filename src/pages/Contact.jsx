// src/pages/Contact.jsx

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted!');
    }
  };

  return (
    <div className={styles.contactWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.heading}>Contact.</h1>
        </div>
      </section>

      <section className={styles.formSection}>
        <h2>Get in touch.</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}

          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/sophia-saunders-a3785a259/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:sophiasaunders1207@gmail.com"
            className={styles.iconLink}
          >
            <MdEmail size={24} />
            <span>Email</span>
          </a>
        </div>
      </section>
    </div>

    
  );
};

export default Contact;
