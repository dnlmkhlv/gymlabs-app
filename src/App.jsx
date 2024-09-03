import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AppLayout from './components/AppLayout';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<><Navbar />
                <Hero />
                <About />
                <Reviews />
                <Pricing />
                <Newsletter />
                <FAQ />
                <Footer /></>} />
            <Route path="app" element={<AppLayout />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;