// DarkModeToggle.jsximport React, { useState, useEffect } from 'react';const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');      localStorage.setItem('theme', 'dark');    } else {
      document.documentElement.classList.remove('dark');      localStorage.setItem('theme', 'light');    }
  }, [darkMode]);  return (
    <button      onClick={() => setDarkMode(!darkMode)}      className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"    >      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}    </button>  );};export default DarkModeToggle;