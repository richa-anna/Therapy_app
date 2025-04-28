import { useState, useEffect } from 'react';
import './TopBar.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const TopBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
   
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <header className={`topbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="logo">Therapy  </div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#">Therapy</a>
        <a href="#selfhelp">Self-Help</a>
        <a href="#community">Community</a>
        <a href="#">Resources</a>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <FaMoon   style={{ color: 'gray', fontSize: '25px' }} /> : <FaSun style={{  color:" #B8860B" , fontSize: '25px' }} />}
      </button>
    </header>
  );
};

export default TopBar;
