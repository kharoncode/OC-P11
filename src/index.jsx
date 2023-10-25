import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './components/Error';
import Footer from './components/Footer';

const root = createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<Error />} />
         </Routes>
         <Footer />
      </Router>
   </React.StrictMode>
);
