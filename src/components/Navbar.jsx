// Navbar.jsximport React from 'react';import { motion } from 'framer-motion';const Navbar = () => {
  const links = ['Home', 'About', 'Projects', 'Contact'];  return (
    <nav className="p-6 bg-white shadow-md">      <ul className="flex space-x-6">        {links.map((link) => (
          <motion.li            key={link}            whileHover={{ scale: 1.1 }}            className="text-gray-800 hover:text-blue-600"          >            {link}          </motion.li>        ))}      </ul>    </nav>  );};export default Navbar;