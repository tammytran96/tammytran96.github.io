import React, { useState } from 'react';
import Modal from 'react-modal';

const DeveloperProjectCard = ({ title, date, imageUrl, techStack, link, descriptionImage, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % descriptionImage.length);
  };

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-date">{date}</p>
      <img src={imageUrl} alt={title} className="project-image" />
      <p className="project-techstack">{techStack}</p>
      <p className="project-link">
        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
      </p>
      <button className="see-more-button" onClick={toggleModal}>
        See More...
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={toggleModal}>
        <div className="modal-content">
          <h2 className="project-title">{title}</h2>
          <p className="project-date">{date}</p>
          <p className="project-techstack">{techStack}</p>
          <p className="project-link">
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </p>
          <div className="image-gallery">
            <a href={descriptionImage[currentImageIndex]} target="_blank" rel="noopener noreferrer">
              <img src={descriptionImage[currentImageIndex]} alt={`Project ${title}`} className="project-gallery-image" />
            </a>
            <p className="image-caption">*Click image to enlarge</p>
            <div className="image-navigation">
              <button className="arrow-button" onClick={nextImage}>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
          <p className="project-description">{description}</p>
          <button onClick={toggleModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default DeveloperProjectCard;
