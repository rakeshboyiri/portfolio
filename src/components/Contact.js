import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_sfg0ldg', // Replace with your EmailJS Service ID
      'template_95cqgf5', // Replace with your EmailJS Template ID
      formData,
      'Gmail_API' // Replace with your EmailJS User ID
    )
    .then((result) => {
      console.log(result.text);
      setIsSent(true);
    }, (error) => {
      console.log(error.text);
    });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      {isSent ? (
        <p className={styles.successMessage}>Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
