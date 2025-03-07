import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themeColor, setThemeColor] = useState('#FF5722');

  const servicesDetails = [
    {
      title: "UI and UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      details: [
        "Responsive Design",
        "User-Centered Approach",
        "Wireframing and Prototyping",
        "Design System Development"
      ]
    },
    {
      title: "Web Development",
      description: "Building robust, scalable, and performant web applications using modern technologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v10H7V7z"/>
        </svg>
      ),
      details: [
        "Frontend Development",
        "Backend Integration",
        "RESTful API Development",
        "Single Page Applications"
      ]
    },
    {
      title: "Quality Assurance",
      description: "Ensuring software quality through comprehensive testing and validation strategies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-2h2v2zm0-4h-2v-6h2v6zm6 4h-2v-2h2v2zm0-4h-2v-6h2v6z"/>
        </svg>
      ),
      details: [
        "Manual Testing",
        "Automated Testing",
        "Performance Testing",
        "Bug Tracking and Reporting"
      ]
    },
    {
      title: "Collaboration",
      description: "Facilitating effective communication and teamwork in software development projects.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-2h2v2zm0-4h-2v-6h2v6zm6 4h-2v-2h2v2zm0-4h-2v-6h2v6z"/>
        </svg>
      ),
      details: [
        "Agile Methodologies",
        "Cross-Functional Team Coordination",
        "Version Control",
        "Code Reviews"
      ]
    },
    {
      title: "Consultancy",
      description: "Providing expert guidance and strategic solutions for technology challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-2h2v2zm0-4h-2v-6h2v6zm6 4h-2v-2h2v2zm0-4h-2v-6h2v6z"/>
        </svg>
      ),
      details: [
        "Technology Stack Recommendations",
        "Architecture Design",
        "Performance Optimization",
        "Technical Problem Solving"
      ]
    }
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`services-page bg-gray-900 min-h-screen flex ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <div className="ml-64 p-6 flex-grow">
        <div className="container mx-auto px-4">
        <div style={{ color: themeColor }} className="text-3xl font-bold transition-colors duration-300">
          <h1 className="text-4xl font-bold text-center text-white mb-12">My Professional Services</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesDetails.map((service, index) => (
              <div 
                key={index} 
                className="service-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h2 className="text-2xl font-semibold text-yellow-400 ml-2">{service.title}</h2>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="text-gray-400 space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <svg 
                        className="w-4 h-4 mr-2 text-yellow-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="btn btn-primary inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Get a quote..
            </a>
          </div>

          {/* Theme Colors */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg p-4 shadow-lg">
            <div className="text-center mb-2">Theme Colors</div>
            <div className="flex space-x-3">
              {['#FF5722', '#E91E63', '#FF4081', '#2196F3', '#4CAF50'].map((color, index) => (
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
    </div>
  );
};

export default ServicesPage;
