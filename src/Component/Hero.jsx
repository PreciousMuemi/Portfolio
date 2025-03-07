import React from 'react';
import heroImage from '../Images/hero.jpeg';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Precious Muemi</h1>
        <p className="text-lg md:text-xl mb-8">Building innovative solutions with cutting-edge technology</p>
        <a
          href="#about"
          className="inline-block px-8 py-3 bg-[#64ffda] text-[#0a192f] font-semibold rounded hover:bg-[#64ffda]/90 transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;
