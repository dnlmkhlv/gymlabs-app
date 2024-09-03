import React, { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Reviews />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;