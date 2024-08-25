import React, { Suspense, lazy } from 'react';import { motion } from 'framer-motion';const DetailedBio = lazy(() => import('../components/DetailedBio'));const About = () => {
  return (
    <section className="p-10 bg-white">      <h2 className="text-3xl font-bold text-center">About Me</h2>      <p className="mt-4 text-gray-600 text-center">        Front-End Developer | AI Enthusiast | Environmental Technologist
      </p>      <Suspense fallback={<motion.div className="loader">Loading Bio...</motion.div>}>        <DetailedBio />      </Suspense>    </section>  );};export default About;