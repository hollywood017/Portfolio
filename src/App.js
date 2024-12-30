import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import CoverLetter from './CoverLetter';
import Resume from './Resume';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cover-letter' element={<CoverLetter />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
