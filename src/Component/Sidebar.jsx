
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themeColor, setThemeColor] = useState('#FF5722');
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#0a192f] text-[#8892b0] p-4">
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
    </div>
  );
};

export default Sidebar;
