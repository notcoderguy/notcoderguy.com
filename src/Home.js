import React, { useEffect } from 'react'

import dp from './assets/pfp.jpeg'

function Home() {
  useEffect(() => {
    document.title = "Home | NotCoderGuy";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center flex-1 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-around">
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-7">
            <div className="relative group w-28 h-28">
              <div
                className="absolute -inset-0.5 -mx-1 bg-gradient-to-r from-indigo-500 to-blue-500 via-purple-500 animate-gradient-x blur opacity-75 group-hover:opacity-100 group-hover:duration-200 rounded-full">
              </div>
              <img className="relative rounded-full" src={dp}
                alt="profile" />
            </div>
            <div className="font-medium text-white text-left">
              <div className="text-2xl">Vasu Grover</div>
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">Software Developer at <a
                href="https://www.bosch-softwaretechnologies.com/en/" rel="noreferrer" target="_blank" className="hover:underline hover:decoration-dashed hover:text-indigo-500">BOSCH</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home