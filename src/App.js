import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Qualification from './components/Qualification'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Qualification /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
