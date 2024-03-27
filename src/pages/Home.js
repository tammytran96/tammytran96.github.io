import React, { useState } from 'react';
import '../styles.css';
import AboutMeModal from './AboutMeModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="home" className="section">
      <div className="home-container">
        <main className="home-main">
          <div className="home-content-wrapper">
            <h1 className="home-text-title">
              tammyTran = ["developer", "designer"];
            </h1>
            <p className="home-text-description">
              // full-stack developer and designer from California who is passionate about learning, exploring new ideas, and is actively seeking roles that align with my values and expertise. 
            </p>
            <button className="about-me-button" onClick={openModal}>About Me</button>
            <AboutMeModal isOpen={isModalOpen} handleClose={closeModal} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
