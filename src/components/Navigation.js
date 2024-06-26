import React from 'react';
import { Link } from 'react-scroll';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link to="home" smooth={true} duration={500} className="link">["home",</Link>
        <Link to="experience" smooth={true} duration={500} className="link">"experience",</Link>
        <Link to="contact" smooth={true} duration={500} className="link">"contact"]</Link>
      </div>
      <div className="nav-right">
        <a href="https://github.com/tammytran96" className="link" target="_blank" rel="noreferrer">["<FontAwesomeIcon icon={faGithub} className="icon" />",</a>
        <a href="https://www.linkedin.com/in/tammy-t-tran/" className="link" target="_blank" rel="noreferrer">"<FontAwesomeIcon icon={faLinkedin} className="icon" />",</a>
        <a href="mailto: tammytran96@gmail.com" className="link" target="_blank" rel="noreferrer">"<FontAwesomeIcon icon={faGoogle} className="icon" />"]</a>
      </div>
    </nav>
  );
};

export default Navigation;
