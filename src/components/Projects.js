import React from 'react';
import styles from '../styles/projects.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.projectItem}>
          <h3>Affiliate Marketing Website</h3>
          <p><h2>Features:</h2> <br/>
<b>Curated Product Listings:</b> Browse through a handpicked selection of the best products across various categories. <br/>
<b>Earn Commissions:</b> Share your favorite products with your audience and earn a commission on every sale. <br/>
<b>Detailed Analytics: </b>Track your performance with detailed analytics, helping you optimize your marketing strategies.<br/>
<b>Educational Resources:</b> Access a wealth of resources, including tutorials and guides, to enhance your affiliate marketing skills. <br/>
<b>Responsive Support: </b>Our dedicated support team is here to assist you at every step of your affiliate marketing journey.</p>
          <a href="https://naatudealssite-frontend.onrender.com/">Live Demo</a>
        
        </div>
        <div className={styles.projectItem}>
          <h3> My Portfolio</h3>
          <p>It is a simple Portfolio website to showcase my skills and projects.</p>
          <a href="[Link to live demo]">Live Demo</a>
        </div>
        {/* Add more project items as needed */}
      </div>
    </section>
  );
}

export default Projects;
