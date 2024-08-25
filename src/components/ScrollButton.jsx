// ScrollButton.jsximport React, { useState, useEffect } from 'react';import { motion } from 'framer-motion';const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);    } else {
      setIsVisible(false);    }
  };  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility);  }, []);  const scrollToTop = () => {
    window.scrollTo({
      top: 0,      behavior: 'smooth',    });  };  return (
    <motion.div      className={`fixed bottom-10 right-10 ${isVisible ? 'block' : 'hidden'}`}      whileHover={{ scale: 1.2 }}    >      <button        onClick={scrollToTop}        className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"      >        ↑ Top
      </button>    </motion.div>  );};export default ScrollButton;