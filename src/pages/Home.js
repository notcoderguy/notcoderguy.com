import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion'

import dp from './../assets/pfp.jpeg'

function Home() {
  const navigate = useNavigate();
  const [lastNavigationTime, setLastNavigationTime] = useState(0);
  const navigationCooldown = 1000; 

  useEffect(() => {
    document.title = "Home | NotCoderGuy";
  }, []);

  useEffect(() => {
    let scrollIntensity = 0;
    const handleWheel = (event) => {
      const now = Date.now();
      if (now - lastNavigationTime < navigationCooldown) return;
      scrollIntensity += Math.abs(event.deltaY);
      if (scrollIntensity > 300) {
        if (event.deltaY > 0) {
          navigate('/about');
        } else {
          navigate('/contact');
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
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-2">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-base-200 rounded-3xl text-white lg:col-span-2">
          <div className="flex flex-col items-left p-3 md:p-8 md:ml-6 ">
            <div className="mb-4">
              <img src={dp} alt="dp" className="w-20 lg:w-28 h-20 lg:h-28 rounded-full"></img>
            </div>
            <h1 className="text-3xl lg:text-6xl font-bold leading-tight lg:leading-tight">Vasu Grover<br></br><span className="text-gray-500">is a</span> DevOps Integration Engineer <span className="text-gray-500">currently at <a className="text-[#ED0007]" href="https://www.bosch.com/" target="_blank" rel="noreferrer noopener"> BOSCH </a>.</span></h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-base-200 rounded-3xl text-white">
          <div className="flex flex-col items-center p-4">
            <div className="mb-4 lg:mb-8 mt-4 lg:mt-12">
              <svg className='w-auto h-16 lg:h-24 mx-auto text-white' viewBox="0 0 50 52" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M38.433 43.792c-3.53 3.94-8.43 6.21-13.45 6.21-1.33 0-2.66-.17-3.95-.49-3.56-.88-6.6-2.82-9.05-5.77-.08-.1-6.86-8.8-.57-19.18.34-.55.72-1.05 1.02-1.43 2.74-3.45 5.42-8.22 3.96-10.33a.994.994 0 0 1 .01-1.13c.23-.35.66-.51 1.06-.4.39.09 3.41 1.04 4.06 7.02.66-1.4 1.24-3.27 1.1-5.4-.21-3.23-1.98-6.3-5.27-9.14a.992.992 0 0 1-.22-1.23c.22-.41.71-.62 1.15-.48.23.06 21.6 6.54 18.36 28.69 1.25-1.34 2.64-3.94 2.3-8.7-.03-.47.26-.89.7-1.03.45-.14.93.05 1.16.45.07.12 6.82 12.07-2.37 22.34z" /></svg>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-center leading-tight lg:leading-tight">Have a project<br></br>in mind?</h2>
            <a href="mailto:me@notcoderguy.com" className="mt-4 lg:mt-12 inline-block bg-blue-700 hover:bg-blue-500 text-white font-bold text-xl lg:text-2xl py-4 lg:py-6 px-6 rounded-full">me@notcoderguy.com</a>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-1.5 mt-2">
        <motion.a
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="btn btn-ghost bg-base-200 rounded-full transition duration-500 ease-in-out"
          href="https://linkedin.com/in/notcoderguy" target="_blank" rel="noreferrer noopener">
          <button className="text-white normal-case text-xl">linkedin.</button>
        </motion.a>
        <motion.a
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="btn btn-ghost bg-base-200 rounded-full transition duration-500 ease-in-out"
          href="https://github.com/notcoderguy" target="_blank" rel="noreferrer noopener">
          <button className=" text-white normal-case text-xl">github.</button>
        </motion.a>
        <motion.a
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="btn btn-ghost bg-base-200 rounded-full transition duration-500 ease-in-out"
          href="https://twitter.com/notcoderguy/" target="_blank" rel="noreferrer noopener">
          <button className=" text-white normal-case text-xl">twitter.</button>
        </motion.a>
        <motion.a
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="btn btn-ghost bg-base-200 rounded-full transition duration-500 ease-in-out"
          href="https://instagram.com/notcoderguy/" target="_blank" rel="noreferrer noopener">
          <button className=" text-white normal-case text-xl">instagram.</button>
        </motion.a>
        <motion.a
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="btn btn-ghost bg-base-200 rounded-full transition duration-500 ease-in-out"
          href="https://discordapp.com/users/501102080870580224" target="_blank" rel="noreferrer noopener">
          <button className=" text-white normal-case text-xl">discord.</button>
        </motion.a>
        <motion.a
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="btn btn-ghost bg-base-200 rounded-full transition duration-500 ease-in-out"
          href="https://t.me/notcoderguy" target="_blank" rel="noreferrer noopener">
          <button className=" text-white normal-case text-xl">telegram.</button>
        </motion.a>
      </div>
    </div>
  )
}

export default Home