import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/switch.css';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    const newTheme = !isDarkMode ? 'dark' : 'light';
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <div className="hero min-h-screen bg-white dark:bg-black">
        <div className="hero-content text-center text-black dark:text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-full"
          >
            <h1 className="text-6xl md:text-8xl font-bold">
              Malek's Portfolio
            </h1>
            <p className="py-6 text-lg max-w-md mx-auto">
              Hi there, Im Malek Kazal, <br />
              <mark className="dark:bg-white bg-black text-white dark:text-black rounded-md p-0.5">
                Full-Stack Developer.
              </mark>
              <br />I love to learn new stuff, teach, and develop.
            </p>
            <label className="switch">
              <input
                checked={isDarkMode}
                onChange={handleThemeToggle}
                type="checkbox"
              />
              <span className="slider"></span>
            </label>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
