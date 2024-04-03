import React, { useState } from 'react';
import Modal from 'react-modal';

const DesignProjectCard = ({ title, imageUrl, techStack, descriptionImage, description }) => {
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
      <p className="project-techstack">{techStack}</p>
      <img src={imageUrl} alt={title} className="project-image" />
      <button className="see-more-button" onClick={toggleModal}>
        See More...
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={toggleModal}>
        <div className="modal-content">
          <h2 className="project-title">{title}</h2>
          <p className="project-techstack">{techStack}</p>
          <div className="image-gallery">
            <a href={descriptionImage[currentImageIndex].imageUrl} target="_blank" rel="noopener noreferrer">
              <img src={descriptionImage[currentImageIndex].imageUrl} alt={`Project ${title}`} className="project-gallery-image" />
            </a>
            <p className="image-caption">{descriptionImage[currentImageIndex].caption}</p>
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

export default DesignProjectCard;
