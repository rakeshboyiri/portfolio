import React from 'react';
import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Rakesh Boyiri. All rights reserved.</p>
        <p>Made with ❤️</p>
        <p>Contact: rakeshoney143@gmail.com</p>

      </div>
    </footer>
  );
}

export default Footer;
