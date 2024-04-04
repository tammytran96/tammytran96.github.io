import React from 'react';
import '../styles.css';

const letsConnectText = `let'sConnect = {
  Email: <a href="mailto:tammytran96@gmail.com" class="pre-link" target="blank">tammytran96@gmail.com</a>, 
  GitHub: <a href="https://github.com/tammytran96" class="pre-link" target="blank">github.com/tammytran96</a>,
  LinkedIn: <a href="https://linkedin.com/in/tammy-t-tran/" class="pre-link" target="blank">linkedin.com/in/tammy-t-tran/</a>
}`;

const Contact = () => {
  return (
    <div id="contact" className="section">
      <div className="contact-container">
        <main className="contact-main">
          <div className="contact-content-wrapper">
            <h1 className="contact-text-title">
              Contact
            </h1>
            <p className="contact-text-description">
            <pre dangerouslySetInnerHTML={{ __html: letsConnectText }} />
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
