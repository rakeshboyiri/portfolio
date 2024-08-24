import React from 'react';
import styles from '../styles/qualification.module.css';

function Qualification() {
  return (
    <section id="qualification" className={styles.qualification}>
      <h2>My Qualifications</h2>
      <ul>
        <li>
          <h3>Bachelor of Technology in Computer Science</h3>
          <p>Rajiv Gandhi University of Knowledge and Technologies, 2026   (Pursuing)</p>
        </li>
        <li>
          <h3>Pre-University Course - 2 Years</h3>
          <p>Rajiv Gandhi University of Knowledge and Technologies, 2022 with CGPA 8.6</p>
        </li>
        <li>
          <h3>Secondary School Certification</h3>
          <p>ZPSS-Bheemaram, 2020 with Percentage 100.0</p>
        </li>
        {/* Add more qualifications as needed */}
      </ul>
    </section>
  );
}

export default Qualification;
