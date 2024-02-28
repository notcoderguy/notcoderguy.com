import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (pathname) => location.pathname === pathname;

  return (
    <div className="">
      <nav className="mt-2 lg:mt-5 bg-base-200 px-2 sm:px-4 py-2.5 rounded-full">
        <div className="container flex flex-wrap items-center justify-between mx-auto max-w-full">
          <Link to="/" className="flex text-md items-center font-bold ml-3">
            notcoderguy.
          </Link>
          <div className="hidden md:flex md:items-center w-full md:w-auto">
            <div className="flex flex-col font-extrabold absolute md:static md:flex-row md:ml-auto mt-3 md:mt-0">
              <Link
                to="/"
                className={`text-md py-2.5 mr-4 md:mr-7 hover:text-white transition duration-500 ease-in-out ${isActive('/') ? 'text-white' : 'text-gray-400'}`}
              >
                home.
              </Link>
              <Link
                to="/about"
                className={`text-md py-2.5 mr-4 md:mr-7 hover:text-white transition duration-500 ease-in-out ${isActive('/about') ? 'text-white' : 'text-gray-400'}`}
              >
                about.
              </Link>
              <Link
                to="/projects"
                className={`text-md py-2.5 mr-4 md:mr-7 hover:text-white transition duration-500 ease-in-out ${isActive('/projects') ? 'text-white' : 'text-gray-400'}`}
              >
                projects.
              </Link>
              <Link
                to="/contact"
                className={`text-md py-2.5 mr-4 md:mr-7 hover:text-white transition duration-500 ease-in-out ${isActive('/contact') ? 'text-white' : 'text-gray-400'}`}
              >
                contact.
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex md:hidden">
        <div className="grid grid-cols-4 gap-2 mt-2 max-w-full mx-auto">
          <div className="items-center justify-center bg-base-200 text-lg rounded-3xl p-6">
            <Link
              to="/"
              className={`${isActive('/') ? 'text-white' : 'text-gray-400'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
              </svg>
            </Link>
          </div>
          <div className="items-center justify-center bg-base-200 text-lg rounded-3xl p-6">
            <Link
              to="/about"
              className={`${isActive('/about') ? 'text-white' : 'text-gray-400'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </Link>
          </div>
          <div className="items-center justify-center bg-base-200 text-lg rounded-3xl p-6">
            <Link
              to="/projects"
              className={`${isActive('/projects') ? 'text-white' : 'text-gray-400'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z" />
              </svg>
            </Link>
          </div>
          <div className="items-center justify-center bg-base-200 text-lg rounded-3xl p-6">
            <Link
              to="/contact"
              className={`${isActive('/contact') ? 'text-white' : 'text-gray-400'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;