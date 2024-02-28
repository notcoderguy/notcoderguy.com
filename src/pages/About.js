import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion'

import SkillsMarquee from '../components/SkillsMarquee';

function About() {
  const navigate = useNavigate();
  const [lastNavigationTime, setLastNavigationTime] = useState(0);
  const navigationCooldown = 1000; 

  useEffect(() => {
    document.title = "About | NotCoderGuy";
  }, []);

  useEffect(() => {
    let scrollIntensity = 0;
    const handleWheel = (event) => {
      const now = Date.now();
      if (now - lastNavigationTime < navigationCooldown) return;
      scrollIntensity += Math.abs(event.deltaY);
      if (scrollIntensity > 300) {
        if (event.deltaY > 0) {
          navigate('/projects');
        } else {
          navigate('/');
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
    <div className="about">
      <div className="grid md:grid-cols-5 gap-2 mt-2">

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-base-200 text-white rounded-3xl md:col-span-2">
          <div className="flex flex-col items-left p-8 md:ml-6">
            <div className="mb-4">
              <svg width="112" height="112" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M104 56c0 14.912-21.49 27-48 27m48-27c0-14.912-21.49-27-48-27m48 27H8m48 27C29.49 83 8 70.912 8 56m48 27V29m0 54c12.876 0 21.306-12.088 21.306-27S68.876 29 56 29m0 54c-12.876 0-21.306-12.088-21.306-27S43.124 29 56 29m0 54c12.876 0 37.002-12.088 37.002-27S68.876 29 56 29m0 54c-12.876 0-36.216-12.088-36.216-27S43.124 29 56 29m0 54c4.816 0 8.72-12.088 8.72-27S60.816 29 56 29m0 54c-4.816 0-8.72-12.088-8.72-27S51.184 29 56 29M8 56c0-14.912 21.49-27 48-27" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-left leading-tight lg:leading-tight">Based in <br /> Delhi, ‍<br /> India <br /> <span className="text-gray-400">GMT+0530</span></h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-base-200 text-white rounded-3xl md:col-span-3">
          <div className="flex flex-col items-left p-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight lg:leading-tight">Venturing into the realms of game, backend development, and DevOps, I meld logic with creativity to engineer captivating digital experiences. <span className="text-gray-400">👋 Explore my portfolio to discover how I turn complex challenges into intuitive solutions, all wrapped in modern aesthetics.</span></h2>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mt-2">

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-base-200 text-white rounded-3xl md:pt-7 lg:pt-2 md:col-span-3">
          <div className="text-3xl lg:text-4xl leading-tight font-semibold p-6 overflow-hidden">
            <SkillsMarquee />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-blue-700 hover:bg-blue-500 text-white rounded-3xl md:col-span-2 transition duration-500 ease-in-out">
          <a href={process.env.PUBLIC_URL + 'resume/Vasu_Grover.pdf'} target="_blank" rel="noreferrer noopener">
            <div className="flex flex-col items-center p-4 md:p-8">
              <span className="text-2xl md:text-3xl lg:text-4xl font-semibold p-0.5">
                Download Resume
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default About