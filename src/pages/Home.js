import React from 'react';
import '../styles.css';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div id="home" className="section">
      <div className="home-container">
      <Navigation />
        <main className="home-main">
          <div className="home-content-wrapper">
            <h1 className="home-text-title">
              tammyTran = ['developer', 'designer'];
            </h1>
            <h3 className="home-text-description">
              // full-stack developer who loves to learn and make cool things!
              Add more later
            </h3>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
