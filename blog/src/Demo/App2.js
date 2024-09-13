import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Next from './pages/Next';
import User from './pages/User';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/next" element={<Next />} />
        <Route path="/user/:id" element={<User />} />
        {/* Nested routing for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} /> {/* Nested under Dashboard */}
          <Route path="settings" element={<Settings />} /> {/* Nested under Dashboard */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
