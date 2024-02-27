import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import projectsData from '../assets/projects.json'

function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Projects | NotCoderGuy";
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        navigate('/contact');
      } else if (event.deltaY < 0) {
        navigate('/about');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => window.removeEventListener('wheel', handleWheel);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center mt-2 w-full rounded-3xl transform transition duration-500 ease-in-out">
      <div className="grid grid-cols-2 gap-2">
        {projectsData.map((project) => (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={project.name} className="bg-base-200 rounded-3xl transform transition duration-500 ease-in-out">
            <div className="flex flex-col items-left p-8">
              <div className="items-start justify-start pb-5">
                <p className="text-xl font-semibold text-white">
                  <a href={project.website || project.github} target="_blank" rel="noreferrer noopener" className="hover:text-primary-content font-semibold transition duration-500 ease-in-out">
                    {project.name}
                  </a>
                </p>
              </div>
              <div className="space-y-2 text-md text-gray-400 mb-1">
                <p>
                  {project.description}
                </p>
              </div>
              <div className="space-y-2 mt-2 text-md text-gray-400 mb-1">
                {/* Check if website exists */}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noreferrer noopener" className="hover:text-primary-content pr-5 font-semibold transition duration-500 ease-in-out">
                    website.
                  </a>
                )}
                {/* Check if github exists */}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer noopener" className="hover:text-primary-content font-semibold transition duration-500 ease-in-out">
                    github.
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects