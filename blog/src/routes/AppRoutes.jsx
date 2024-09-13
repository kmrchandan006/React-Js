import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import Navbar from './components/Navbar';
import Next from '../pages/Next';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/next' element={<Next />} />
        <Route path='/Navbar' element={<Navbar />} />
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
