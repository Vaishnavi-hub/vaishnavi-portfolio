import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Awards from './sections/Awards';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;