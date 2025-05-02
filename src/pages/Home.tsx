import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Blog from './Blog';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Blog/>
      <Contact />
    </main>
  );
};

export default Home;