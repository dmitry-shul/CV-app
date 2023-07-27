import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About/About';
import Main from '../pages/Main/Main';
import Projects from '../pages/Projects/Projects';

const PagesRoute = () => {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<>Page not found</>} />
    </Routes>
  )
}

export default PagesRoute