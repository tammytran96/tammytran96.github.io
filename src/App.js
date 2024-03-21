import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
