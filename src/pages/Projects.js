import React, { useEffect } from 'react'
import projectsData from '../assets/projects.json'

function Projects() {
  useEffect(() => {
    document.title = "Projects | NotCoderGuy";
  }, []);

  return (
    <div className="flex flex-col items-center mt-2 mb-2 w-full rounded-3xl transform transition duration-500 ease-in-out">
      <div className="">
        <div className="grid grid-cols-2 gap-2.5">
          {projectsData.map((project) => (
            <div key={project.name} className="bg-base-200 rounded-3xl transform transition duration-500 ease-in-out">
              <div className="flex flex-col items-left p-8">
                <div className="items-start justify-start pb-5">
                  <p className="text-xl font-semibold text-white">
                    <a href={project.website} target="_blank" rel="noreferrer noopener">
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
                  {/* Check if website exists */}
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noreferrer noopener" className="hover:text-primary-content pr-5 font-semibold transition duration-500 ease-in-out">
                      website.
                    </a>
                  )}
                  {/* Check if github exists */}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer noopener" className="hover:text-primary-content font-semibold transition duration-500 ease-in-out">
                      github.
                    </a>
                  )}
                  {/* <a href={project.website} target="_blank" rel="noreferrer noopener" className="hover:text-primary-content font-semibold transition duration-500 ease-in-out">
                    website.
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer noopener" className="hover:text-primary-content pl-5 font-semibold transition duration-500 ease-in-out">
                    github.
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects