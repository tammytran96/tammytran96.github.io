import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
