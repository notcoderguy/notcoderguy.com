import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import projectsData from '../assets/projects.json'

function Projects() {
  const navigate = useNavigate();
  const [lastNavigationTime, setLastNavigationTime] = useState(0);
  const navigationCooldown = 1000;

  useEffect(() => {
    document.title = "Projects | NotCoderGuy";
  }, []);

  useEffect(() => {
    let scrollIntensity = 0;
    const handleWheel = (event) => {
      const now = Date.now();
      if (now - lastNavigationTime < navigationCooldown) return;
      scrollIntensity += Math.abs(event.deltaY);
      if (scrollIntensity > 300) {
        if (event.deltaY > 0) {
          navigate('/contact');
        } else {
          navigate('/about');
        }
        setLastNavigationTime(now);
        scrollIntensity = 0;
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [navigate, lastNavigationTime]);

  return (
    <div className="flex flex-col items-center mt-2 w-full rounded-3xl">
      <div className="grid lg:grid-cols-2 gap-2 w-full">
        {projectsData.map((project) => (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={project.name} className="bg-base-200 rounded-3xl">
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
                {project.website && (
                  <a href={project.website} target="_blank" rel="noreferrer noopener" className="hover:text-primary-content pr-5 font-semibold transition duration-500 ease-in-out">
                    website.
                  </a>
                )}
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