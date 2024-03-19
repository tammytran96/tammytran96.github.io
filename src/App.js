import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
