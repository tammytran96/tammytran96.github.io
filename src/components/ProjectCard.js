import React, { useState } from 'react';
import Modal from 'react-modal';

const ProjectCard = ({ title, imageUrl, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <img src={imageUrl} alt={title} className="project-image" />
      <p className="project-description">{description}</p>
      <button className="see-more-button" onClick={toggleModal}>
        See More
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={toggleModal}>
        <div className="modal-content">
          <h2>{title}</h2>
          <p>{description}</p>
          {/* Add more details or content here */}
          <button onClick={toggleModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectCard;
