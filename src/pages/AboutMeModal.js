import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles.css';

const AboutMeModal = ({ isOpen, handleClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose}>
      <div className="modal-header">
        <button className="close-button" onClick={handleClose}>
          <span>&times;</span>
        </button>
      </div>
      <div className="modal-content">
        <h2 className="about-me-title">About Me</h2>
        <div className="about-me-description">
          <p>Hi, my name is Tammy, and welcome to my portfolio! I’m a full-stack developer and designer from San Diego, California, passionate about learning, exploring new ideas, and solving problems!</p>
          <p>Growing up, I've always enjoyed expressing my creativity through drawing, painting, and crafting with ceramics, paper mache, and wood. As I’ve gotten older, I realized that I developed into being more technical-minded with a curiosity about how things work. Combining these interests, I pursued education in graphic design and software development, in addition to earning my sociology degree.</p>
          <p>In addition to my 6 years of professional experience in program management and administration, I've actively pursued various real-world projects aligned with my interests outside of my primary work responsibilities. These projects have included designing logos for clients, collaborating on UX/UI design and development for a larger-scale website, expanding APIs, and contributing to the development of a web application within a team setting.</p>
          <p>I am proficient in multiple programming languages and frameworks, such as JavaScript, React, HTML, CSS, and Ruby, handling both frontend and backend development tasks. Additionally, I am skilled in design software like Adobe Creative Cloud. I'm a quick learner, adapting to new programming languages as needed for project requirements. My sociology background complements my technical skills by providing insights into human behavior and social interactions, influencing the design of user-friendly products.</p>
          <p>Now equipped with the skills to contribute meaningfully to the industry, I am actively seeking roles that align with my values and expertise, where I can continue learning and growing.</p>
          <p>I am deeply passionate about continuous learning, acquiring new skills, and creating applications that improve people’s lives and have a positive impact. I’m a firm believer in consistency and enjoying the journey.</p>
          <p>Outside of work, my hobbies include being disappointed by the Celtics failing to win a championship year after year, hoping the Padres and Chargers win their first championship, and rooting for my hometown college basketball team (SDSU) since our city doesn’t have an NBA team to root for. My dedication and positivity shine through my support for these teams. I also love planning for travels, trying to keep up on Duolingo, and spending too much time on challenging sudoku puzzles.</p>
          <p>I’d love to connect; please feel free to reach out!</p>
          <a href="https://github.com/tammytran96" className="nav-link" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
          <a href="https://www.linkedin.com/in/tammy-t-tran/" className="nav-link" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
          <a href="mailto: tammytran96@gmail.com" className="nav-link" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGoogle} className="icon" /></a>
        </div>
      </div>
    </Modal>
  );
};

export default AboutMeModal;



