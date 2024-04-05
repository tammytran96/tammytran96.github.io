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

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + descriptionImage.length) % descriptionImage.length);
  };

  const openModalOnImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="project-card">
      <p className="project-title">{title}</p>
      <p className="project-details">{techStack}</p>
      <img src={imageUrl} alt={title} className="project-image" onClick={openModalOnImageClick} />
      <button className="button" onClick={toggleModal}>
        See More...
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={toggleModal}>
        <div className="modal-header">
          <button className="close-button" onClick={toggleModal}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-content">
          <p className="project-title">{title}</p>
          <p className="project-details">{techStack}</p>
          <div className="image-gallery">
            <a href={descriptionImage[currentImageIndex].imageUrl} target="_blank" rel="noopener noreferrer">
              <img src={descriptionImage[currentImageIndex].imageUrl} alt={`Project ${title}`} className="project-gallery-image" />
            </a>
            <p className="image-caption">{descriptionImage[currentImageIndex].caption}</p>
            <p className="image-caption">*Click image to enlarge</p>
            <div className="image-navigation">
              <button className="button" onClick={prevImage}>
                <span>&larr;</span>
              </button>
              <button className="button" onClick={nextImage}>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
          <p className="text-description">{description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default DesignProjectCard;
