import React from 'react';
import Modal from 'react-modal';
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
        <p className="about-me-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Arcu risus quis varius quam quisque. In hac habitasse platea dictumst quisque sagittis purus sit. Pharetra sit amet aliquam id diam maecenas ultricies mi. Quis eleifend quam adipiscing vitae proin. Ultrices dui sapien eget mi proin sed libero. At erat pellentesque adipiscing commodo elit at imperdiet dui. At in tellus integer feugiat scelerisque. Dignissim diam quis enim lobortis scelerisque fermentum dui.
          Lorem mollis aliquam ut porttitor leo a diam. Sit amet mattis vulputate enim nulla aliquet. Ultrices eros in cursus turpis massa tincidunt dui. Adipiscing enim eu turpis egestas. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Leo vel orci porta non pulvinar neque. Vitae semper quis lectus nulla at. Feugiat nibh sed pulvinar proin. Placerat vestibulum lectus mauris ultrices eros in. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Adipiscing tristique risus nec feugiat in fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Ullamcorper sit amet risus nullam. Curabitur gravida arcu ac tortor dignissim convallis aenean. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Sed sed risus pretium quam vulputate dignissim. Diam vulputate ut pharetra sit amet aliquam.
        </p>
      </div>
    </Modal>
  );
};

export default AboutMeModal;



