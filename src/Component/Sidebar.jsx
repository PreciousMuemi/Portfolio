import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#0a192f] text-[#8892b0] p-4">
      <div className="text-2xl font-bold text-[#64ffda] mb-8">Precious Muemi</div>
      <nav className="space-y-4">
        <Link to="/" className="block hover:text-[#64ffda] transition-colors">Home</Link>
        <Link to="/about" className="block hover:text-[#64ffda] transition-colors">About</Link>
        <Link to="/services" className="block hover:text-[#64ffda] transition-colors">Services</Link>
        <Link to="/portfolio" className="block hover:text-[#64ffda] transition-colors">Portfolio</Link>
        <Link to="/contact" className="block hover:text-[#64ffda] transition-colors">Contact</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
