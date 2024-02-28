import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ThankYou() {
  const navigate = useNavigate();
  const [lastNavigationTime, setLastNavigationTime] = useState(0);
  const navigationCooldown = 1000; 

  useEffect(() => {
    document.title = "Thank You | NotCoderGuy";
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
    <div className="grid grid-cols-1 gap-2 mt-2">
      <div className="bg-base-200 rounded-3xl">
        <div className="flex flex-col items-center p-8 my-32 md:my-44 lg:mx-64">
          <div className="items-start justify-start pb-5">
            <p className="text-2xl font-semibold text-white">Thanks For Contacting</p>
          </div>
          <div className="space-y-2 text-md text-gray-400 mb-1">
            <p>
              I’ll get back to you as soon as possible. In the meantime, you can find me on social media. I’m active on twitter, instagram, and linkedIn. You can also find me on gitHub, where I share my open-source projects. All of my social media links are in <Link to="/" className=" hover:text-primary-content font-semibold transition duration-500 ease-in-out">home</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou