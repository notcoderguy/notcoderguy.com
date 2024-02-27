import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import SkillsMarquee from '../components/SkillsMarquee';

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "About | NotCoderGuy";
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) { 
        navigate('/projects');
      } else if (event.deltaY < 0) {
        navigate('/');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => window.removeEventListener('wheel', handleWheel);
  }, [navigate]);

  return (
    <div className="">
      <div className="grid grid-cols-5 gap-2 mt-2">
        <div className="bg-base-200 text-white rounded-3xl col-span-2">
          <div className="flex flex-col items-left p-8 ml-6">
            <div className="mb-4">
              <svg width="112" height="112" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M104 56c0 14.912-21.49 27-48 27m48-27c0-14.912-21.49-27-48-27m48 27H8m48 27C29.49 83 8 70.912 8 56m48 27V29m0 54c12.876 0 21.306-12.088 21.306-27S68.876 29 56 29m0 54c-12.876 0-21.306-12.088-21.306-27S43.124 29 56 29m0 54c12.876 0 37.002-12.088 37.002-27S68.876 29 56 29m0 54c-12.876 0-36.216-12.088-36.216-27S43.124 29 56 29m0 54c4.816 0 8.72-12.088 8.72-27S60.816 29 56 29m0 54c-4.816 0-8.72-12.088-8.72-27S51.184 29 56 29M8 56c0-14.912 21.49-27 48-27" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <h2 className="text-5xl font-semibold text-left leading-tight">Based in <br /> Delhi, ‍<br /> India <br /> <span className="text-gray-400">GMT+0530</span></h2>
          </div>
        </div>
        <div className="bg-base-200 text-white col-span-3 rounded-3xl">
          <div className="flex flex-col items-left p-8">
            <h2 className="text-4xl font-semibold leading-tight">Venturing into the realms of game, backend development, and DevOps, I meld logic with creativity to engineer captivating digital experiences. <span className="text-gray-400">👋 Explore my portfolio to discover how I turn complex challenges into intuitive solutions, all wrapped in modern aesthetics.</span></h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-2">
        <div className="bg-base-200 text-white col-span-3 rounded-3xl pt-2">
          <div className="text-4xl leading-tight font-semibold p-6 overflow-hidden">
            <SkillsMarquee/>
          </div>
        </div>

        <div className="bg-blue-700 hover:bg-blue-500 text-white rounded-3xl col-span-2">
          <a href={process.env.PUBLIC_URL + 'resume/Vasu_Grover.pdf'} target="_blank" rel="noreferrer noopener">
            <div className="flex flex-col items-center p-8">
              <span className="text-4xl font-semibold p-0.5">
                Download Resume
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About