import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

// import meImage from './Images/me.png'; 

const PortfolioWebsite = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themeColor, setThemeColor] = useState('#FF5722'); // Default orange theme
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const roles = ['Smart contract Developer', 'Full Stack Developer', 'Mentor'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Theme colors
  const themeColors = [
    '#FF5722', // Orange (default)
    '#E91E63', // Pink
    '#FF4081', // Magenta
    '#2196F3', // Blue
    '#4CAF50', // Green
  ];

  // Typewriter effect
  useEffect(() => {
    const role = roles[currentRoleIndex];
    
    if (typewriterIndex < role.length) {
      const timer = setTimeout(() => {
        setTypewriterText((prev) => prev + role.charAt(typewriterIndex));
        setTypewriterIndex(typewriterIndex + 1);
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      // Wait and switch to next role
      const timer = setTimeout(() => {
        setTypewriterText('');
        setTypewriterIndex(0);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [currentRoleIndex, typewriterIndex]);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Change theme color
  const changeThemeColor = (color) => {
    setThemeColor(color);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-screen w-64 ${isDarkMode ? 'bg-black' : 'bg-gray-200'} transition-colors duration-300`}>
        <div className="p-6">
          <div className="flex items-center mb-10">
            <div style={{ color: themeColor }} className="text-3xl font-bold transition-colors duration-300">
              Precious Muemi
            </div>
          </div>

          <nav className="space-y-6">
          <Link to="/" className="flex items-center space-x-3 group">
              <span className="text-gray-400 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </span>
              <span>Home</span>
           </Link>
            
           <Link to="/about" className="flex items-center space-x-3 group">
              <span className="text-gray-400 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span>About</span>
            </Link>
            
            <Link to="/services" className="flex items-center space-x-3 group">
              <span className="text-gray-400 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>Services</span>
            </Link>
            
            <Link to="/portfolio" className="flex items-center space-x-3 group">
              <span className="text-gray-400 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <span>Portfolio</span>
            </Link>
            
            <Link to="/contact" className="flex items-center space-x-3 group">
              <span className="text-gray-400 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>Contact</span>
            </Link>
          </nav>
          
          <div className="mt-10">
            <button className="border border-gray-600 rounded-full px-6 py-2 hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center w-full">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
              Visit site
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="min-h-screen flex flex-col justify-center relative">
            <div className="absolute top-4 right-4 space-x-4 flex">
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <button className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold mb-2">
                  Hello, my name is <span style={{ color: themeColor }} className="transition-colors duration-300">Precious Muemi</span>
                </h2>
                
                <h1 className="text-5xl font-bold mb-4">
                  I'm a <span style={{ color: themeColor }} className="transition-colors duration-300">{typewriterText}</span>
                  <span className="animate-blink">|</span>
                </h1>
                
                <p className="text-lg text-gray-400 mb-8">
                I’m a Blockchain Developer, Software Engineer, and Community Lead, passionate about building
            decentralized solutions and mentoring developers in the Web3 space. I specialize in smart contract development,
            blockchain security, and integrating Web2 systems with Web3 technologies.
                </p>
                
                <button 
                  style={{ backgroundColor: themeColor }} 
                  className="px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition-all duration-300"
                >
                <a href="/about" className="bg-yellow-400 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"></a>  
                  More About Me
                </button>
              </div>
              
              <div className="md:w-1/3">
                <div className="relative">
                  <div style={{ borderColor: themeColor }} className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 transition-colors duration-300"></div>
                  <div className="overflow-hidden rounded-lg">
                  <img src="/Images/me.png" alt="Profile" className="w-full h-auto object-cover" />
                  </div>
                  <div style={{ borderColor: themeColor }} className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Colors */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg p-4 shadow-lg">
            <div className="text-center mb-2">Theme Colors</div>
            <div className="flex space-x-3">
              {themeColors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => changeThemeColor(color)}
                  style={{ backgroundColor: color }}
                  className="w-8 h-8 rounded-full hover:scale-110 transition-transform duration-300"
                  aria-label={`Theme color ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWebsite;