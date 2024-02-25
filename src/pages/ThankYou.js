import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ThankYou() {
  useEffect(() => {
    document.title = "Thank You | NotCoderGuy";
  }, []);

  return (
    <div className="grid grid-cols-1 gap-2 mt-2 mb-2">
      <div className="bg-base-200 rounded-3xl transform transition duration-500 ease-in-out">
        <div className="flex flex-col items-center p-8 my-44 mx-64">
          <div className="items-start justify-start pb-5">
            <p className="text-2xl font-semibold text-white">thanks for contacting.</p>
          </div>
          <div className="space-y-2 text-md text-gray-400 mb-1">
            <p>
              i’ll get back to you as soon as possible. In the meantime, you can find me on social media. I’m active on twitter, instagram, and linkedIn. You can also find me on gitHub, where i share my open-source projects. All of my social media links are in <Link to="/" className=" hover:text-primary-content font-semibold transition duration-500 ease-in-out">home</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou