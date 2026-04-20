import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
};

export default Home;