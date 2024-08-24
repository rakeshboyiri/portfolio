import React from 'react';
import styles from '../styles/skills.module.css';

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>My Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillCard}>
          <h3>Frontend Development</h3>
          <p>React, JavaScript, HTML, CSS</p>
        </div>
        <div className={styles.skillCard}>
          <h3>Backend Development</h3>
          <p>Node.js, Express, MongoDB, MySQL</p>
        </div>
        <div className={styles.skillCard}>
          <h3> Programming Languages</h3>
          <p>Python, Java, C/C++</p>
        </div>
        <div className={styles.skillCard}>
          <h3>Version Control</h3>
          <p>Git, GitHub</p>
        </div>
        {/* Add more skills as needed */}
      </div>
    </section>
  );
}

export default Skills;
