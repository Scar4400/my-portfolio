import React from 'react';import { motion } from 'framer-motion';import { useIntersectionObserver } from '../hooks/useIntersectionObserver';import SkillIcon from '../components/SkillIcon';const Skills = () => {
  const [isVisible, elementRef] = useIntersectionObserver();  return (
    <section ref={elementRef} className="p-10 bg-gray-100">      <h2 className="text-3xl font-bold text-center">My Skills</h2>      <motion.div        initial={{ opacity: 0, y: 20 }}        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}        transition={{ duration: 0.5 }}        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8"      >        <SkillIcon icon="html5.svg" />        <SkillIcon icon="css3.svg" />        <SkillIcon icon="javascript.svg" />        <SkillIcon icon="react.svg" />      </motion.div>    </section>  );};export default Skills;