import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  return (
    <div className="fixed right-4 top-4">
      <button
        onClick={toggleTheme}
        className="p-2 bg-[#64ffda] text-[#0a192f] rounded-full hover:bg-[#64ffda]/80 transition-colors"
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
