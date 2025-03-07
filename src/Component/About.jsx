import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';

const About = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themeColor, setThemeColor] = useState('#FF5722'); // Default orange theme


  const themeColors = [
    '#FF5722', // Orange (default)
    '#E91E63', // Pink
    '#FF4081', // Magenta
    '#2196F3', // Blue
    '#4CAF50', // Green
  ];
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const changeThemeColor = (color) => {
    setThemeColor(color);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className={`min-h-screen flex bg-gray-900 text-white`}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 p-6 flex-grow">
        <div className="max-w-5xl mx-auto">
          {/* Bio Section */}
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-2/3">
              <h1 className="text-5xl font-bold mb-2">I'm Pree</h1>
              <h2 className="text-5xl font-bold mb-8">Full-Stack Developer and Blockchain Developer</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I am an experienced developer with expertise in building web-apps, blockchain solutions, and scalable applications. I have been at the forefront of designing secure and efficient systems that bridge traditional web2 services and decentralized web3 technologies within various communities.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I build secure, gas-optimized smart contracts on ICP. Other blockchains I am currently exploring are Starknet, Somnia, Base, and Bitcoin, while also working on frontend development with React, Tailwind, Firebase, and Material UI. Beyond coding, I lead workshops and mentorship programs in GDG, ICP, and blockchain bootcamps in Spu. My passion for technology drives me to constantly explore innovative solutions and mentor aspiring developers in the community.
              </p>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-2">
                  Currently I lead blockchain initiatives at <span className="text-teal-400 font-medium">Icp innovators</span> Spu as a club lead and also contribute to the ICP ecosystem as an Icp builder. I am also an ICP ambassador. I recently also got enrolled as a Software Engineer student at <span className="text-teal-400 font-medium">Power Learn Project</span> making me a seasoned developer in the web2 space. I look forward to continuing my journey in the tech industry and building solutions that impact lives globally.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col items-center">
              <img src="/Images/me.png" alt="Profile" className="w-full h-auto object-cover rounded-lg mb-4" />
              <div className="space-y-4">
                <span className="font-medium">Follow on:</span>
                <a href="https://twitter.com/username" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.008 10.008 0 01-3.127 1.184A4.92 4.92 0 0012.89 7.5c0 .388.042.764.12 1.127a13.98 13.98 0 01-10.15-5.147 4.929 4.929 0 001.524 6.574 4.888 4.888 0 01-2.23-.618v.063a4.926 4.926 0 003.95 4.827 4.96 4.96 0 01-2.224.084 4.927 4.927 0 004.6 3.42A9.86 9.86 0 010 19.54a13.94 13.94 0 007.548 2.212c9.054 0 14-7.5 14-14 0-.21-.005-.425-.014-.636A10.025 10.025 0 0024 4.59z"/>
                  </svg>
                  <span className="font-medium">Follow on Twitter</span>
                </a>
                <a href="https://github.com/username" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span className="font-medium">Follow on GitHub</span>
                </a>
                <a href="https://linkedin.com/in/username" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>
                <a href="https://t.me/username" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.5 6.422-.709 8.517-.89.887-.276 1.187-.455 1.215-.38.057-.84-.043-1.31-.366-.73-.503-1.22-.927-1.91-1.485-.777-.648-1.796-1.44-.562-2.208.242-.168 4.62-4.26 4.7-4.623.011-.046.024-.175-.046-.258-.07-.083-.12-.073-.175-.067-.078.01-1.324.858-3.75 2.541-.35.243-.665.362-.95.35-.316-.013-1.032-.187-1.533-.276-.623-.112-1.095-.176-1.024-.382.036-.104.285-.214.751-.333 2.976-.765 4.934-1.269 5.878-1.51.898-.23 2.21-.573 2.43-.584z"/>
                  </svg>
                  <span className="font-medium">Connect on Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <motion.section className="py-16" {...fadeIn}>
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-playfair text-center mb-16">Educational Journey</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 rounded-xl p-8 hover:transform hover:scale-105 transition-transform">
                  <h3 className="text-2xl font-semibold mb-6">Formal Education</h3>
                  <ul className="space-y-6">
                    <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:top-2">
                      <h4 className="font-medium text-lg">Bachelor's in Software Development</h4>
                      <p className="text-gray-400">St Paul's University | 2021-2025</p>
                    </li>
                    <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:top-2">
                      <h4 className="font-medium text-lg">KCSE Certificate</h4>
                      <p className="text-gray-400">Gatero Girls Highschool | 2017-2021</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-8 hover:transform hover:scale-105 transition-transform">
                  <h3 className="text-2xl font-semibold mb-6">Professional Certificates</h3>
                  <ul className="space-y-6">
                    <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:top-2">
                      <h4 className="font-medium text-lg">AWS Cloud Practitioner</h4>
                      <p className="text-gray-400">Ujuzi | 2024</p>
                    </li>
                    <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:top-2">
                      <h4 className="font-medium text-lg">Web Development</h4>
                      <p className="text-gray-400">Emobilis Institute | 2023</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section className="py-16 bg-slate-800/50" {...fadeIn}>
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-playfair text-center mb-12">Experience</h2>
              
              {/* Tab Buttons */}
              <div className="flex justify-center gap-4 mb-12">
                {['general', 'voluntary', 'hired'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all
                      ${activeTab === tab 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'}`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="grid md:grid-cols-2 gap-8">
                {activeTab === 'general' && (
                  <>
                    <motion.div 
                      className="bg-slate-700/50 rounded-xl p-8"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      
                      <p className="text-gray-400 mb-2">Clerk Assistant | August 2022</p>
                      <p className="text-gray-300">Supported the electoral process by managing voter registration and maintaining electoral records.</p>
                    </motion.div>
                    <motion.div 
                      className="bg-slate-700/50 rounded-xl p-8"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-semibold mb-4">Crystal Computers Limited</h3>
                      <p className="text-gray-400 mb-2">Receptionist & Tutor | May - September 2023</p>
                      <p className="text-gray-300">Handled cyber services and taught Microsoft Office packages to students.</p>
                    </motion.div>
                  </>
                )}

                {activeTab === 'voluntary' && (
                  <motion.div 
                    className="bg-slate-700/50 rounded-xl p-8 col-span-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4">Gatero High School Alumni Foundation</h3>
                    <p className="text-gray-400 mb-2">IT Support & Maintenance | June 2024 - Current</p>
                    <p className="text-gray-300">Maintaining and updating the organization's social media platforms and website.</p>
                  </motion.div>
                )}

                {activeTab === 'hired' && (
                  <motion.div 
                    className="bg-slate-700/50 rounded-xl p-8 col-span-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4">Future Opportunities</h3>
                    <p className="text-gray-400">Ready for new challenges and opportunities.</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.section>

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
  );
};

export default About;

