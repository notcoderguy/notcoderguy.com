import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mt-5 bg-base-200 px-2 sm:px-4 py-2.5 rounded-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto max-w-full">
        <Link to="/" className="flex text-md items-center font-bold ml-3">
          notcoderguy.
        </Link>
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.293 4.293a1 1 0 0 0-1.414-1.414L12 10.586 5.121 3.707a1 1 0 0 0-1.414 1.414L10.586 12l-6.879 6.879a1 1 0 1 0 1.414 1.414L12 13.414l6.879 6.879a1 1 0 0 0 1.414-1.414L13.414 12l6.879-6.879z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center w-full md:w-auto`}
        >
          <div className="flex flex-col font-extrabold absolute md:static md:flex-row md:ml-auto mt-3 md:mt-0">
            <Link
              to="/"
              className="text-gray-400 text-md py-2.5 mr-4 md:mr-7 hover:text-white transition duration-500 ease-in-out"
              onClick={toggleMenu}
            >
              home.
            </Link>
            <Link
              to="/about"
              className="text-gray-400 text-md py-2.5 mr-4 md:mr-7 hover:text-white transition duration-500 ease-in-out"
              onClick={toggleMenu}
            >
              about.
            </Link>
            <Link
              to="/projects"
              className="text-gray-400 text-md py-2.5 mr-4 md:mr-7 hover:text-white transition duration-500 ease-in-out"
              onClick={toggleMenu}
            >
              projects.
            </Link>
            {/* <Link
              to="/blog"
              className="text-gray-400 text-md py-2.5 mr-4 md:mr-7 hover:text-white transition duration-500 ease-in-out"
              onClick={toggleMenu}
            >
              blog.
            </Link> */}
            <Link
              to="/contact"
              className="text-gray-400 text-md py-2.5 mr-4 md:mr-7 hover:text-white transition duration-500 ease-in-out"
              onClick={toggleMenu}
            >
              contact.
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;