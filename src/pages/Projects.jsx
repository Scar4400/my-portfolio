import React, { Suspense, lazy } from 'react'; import { motion } from 'framer-motion';

const ProjectCard = lazy(() => import('../components/ProjectCard')); const Projects = () => {
  const projects = [
    { title: 'E-commerce Platform', description: 'A full-featured shopping platform.' },    { title: 'Weather App', description: 'Real-time weather data using geolocation.' },    { title: 'AI-Powered Exam Prep Tool', description: 'Helps students prepare for exams.' },  ];  return (
    <section className="p-10 bg-gray-100">      <h2 className="text-3xl font-bold text-center">Projects</h2>      <Suspense        fallback={          <motion.div            className="flex justify-center items-center"            initial={{ opacity: 0 }}            animate={{ opacity: 1 }}            transition={{ duration: 0.5 }}          >            <div className="loader">Loading...</div>          </motion.div>        }      >        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />          ))}        </div>      </Suspense>    </section>  );};export default Projects;