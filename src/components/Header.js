import React from 'react';
import styles from '../styles/header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Rakesh Boyiri</h1>
      <nav>
        <a href="#hero">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
