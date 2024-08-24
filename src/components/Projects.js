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
          <p>
          <h2>Features:</h2> 
<b>Projects:</b> Explore a diverse collection of my work, including web applications, design projects, and collaborative efforts.<br/>
<b>Skills:</b> A detailed overview of my technical skills, tools, and technologies I specialize in, from HTML, CSS, and JavaScript to React, Node.js, and more.<br/>
<b>Experience:</b> A timeline of my professional journey, showcasing key milestones, roles, and achievements in the tech industry. <br/>
<b>Blog:</b> Dive into my thoughts and insights on the latest trends in web development, design, and technology. <br/>
<b>Contact:</b> Get in touch with me for collaborations, freelance opportunities, or just to say hello!
          </p>
          <a href="https://rakesh-boyiri.onrender.com/">Live Demo</a>
        </div>
        {/* Add more project items as needed */}
      </div>
    </section>
  );
}

export default Projects;
