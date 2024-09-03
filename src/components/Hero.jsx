import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('Workout Plans');
  const phrases = ['Workout Plans', 'Meal Plans', 'Sleep Tips'];
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % phrases.length;
      setText(phrases[currentIndex]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen text-center mt-[-80px] px-8" data-aos="fade-up">
      <h1 className="text-4xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Personalized{' '}
        <span className="inline-block min-w-[120px] sm:min-w-[160px] md:min-w-[200px] lg:min-w-[240px] xl:min-w-[280px]">
          <span className="text-primary">{text}</span>
        </span>
      </h1>
      <p className="mt-6 text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Get fit with tailored workout & nutrition plans designed just for you.</p>
      <button className="mt-6 btn btn-gradient">Get Started</button>
    </section>
  );
};

export default Hero;