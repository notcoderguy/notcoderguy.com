import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ThankYou() {
  useEffect(() => {
    document.title = "Thank You | NotCoderGuy";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center flex-1 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-around max-w-xl mx-auto">
          <div className="items-start justify-start pb-5">
            <p className="text-2xl font-semibold text-white">Thanks for contacting.</p>
          </div>
          <div className="space-y-2 text-md text-gray-400">
            <p>
              I’ll get back to you as soon as possible. In the meantime, you can find me on social media. I’m active on Twitter, Instagram, and LinkedIn. You can also find me on GitHub, where I share my open-source projects. All of my social media links are <Link to="/socials" className="hover:underline hover:decoration-dashed hover:text-indigo-500 underline decoration-dashed">here</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou