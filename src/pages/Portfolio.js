import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact';

const Portfolio = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    scroll.scrollToTop();
  }, []);

  return (
    <div>
      <Home id="home" />
      <Experience id="experience" />
      <Contact id="contact" />
    </div>
  );
};

export default Portfolio;
