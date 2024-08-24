import React from 'react';
import styles from '../styles/hero.module.css';
import myPhoto from '../assets/myphoto.jpg'; // Import the photo

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <img src={myPhoto} alt="My Photo" className={styles.photo} />
      <h2>Hello, I'm Rakesh</h2>
      <p>I'm a freelance developer specializing in Web Development.</p>
      <div className={styles.socialMedia}>
          <a href="https://www.linkedin.com/in/rakesh-boyiri/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn" />
          </a>
          <a href="https://github.com/rakeshboyiri/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/itsmerakesh_64/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Twitter" />
          </a>
          {/* Add more icons as needed */}
        </div>
    </section>
  );
}

export default Hero;


