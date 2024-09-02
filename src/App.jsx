

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css'

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Reviews />
            <Pricing />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
