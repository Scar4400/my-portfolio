import React from 'react';import { motion } from 'framer-motion';const Footer = () => {
  const socialLinks = ['LinkedIn', 'GitHub', 'Twitter'];  return (
    <footer className="bg-gray-900 p-6 text-white fixed bottom-0 w-full"> <ul className="flex justify-center space-x-6">        {socialLinks.map((link) => (
          <motion.li            key={link}            whileHover={{ scale: 1.2, color: '#4F46E5' }}            className="cursor-pointer"          >            {link}          </motion.li>        ))}      </ul>    </footer>  );};export default Footer;