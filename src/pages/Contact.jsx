import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className={styles.contact}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type='text' name='name' placeholder='Name' onChange={handleChange} required />
        <input type='email' name='email' placeholder='Email' onChange={handleChange} required />
        <textarea name='message' placeholder='Message' onChange={handleChange} required />
        <button type='submit'>Send</button>
      </form>
    </section>
  );
};

export default Contact;