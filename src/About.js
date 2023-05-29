import React, { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = "About | NotCoderGuy";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center flex-1 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-around">
        <div className="space-y-6">
          <div className="flex flex-col justify-around max-w-xl mx-auto">
            <div className="items-start justify-start pb-5">
              <p className="text-2xl font-semibold text-white">About Me</p>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                Welcome to my website! Here, I am delighted to present my portfolio, which showcases my passion for developing logical applications and bringing static art to life in games. My goal is to create enjoyable experiences for all users.
              </p>
              <p>
                This platform provides a glimpse into my career path and interests, with a particular focus on the technical aspects. For a deeper understanding of my professional background, please visit my <a
                  className="underline decoration-gray-400 decoration-dashed hover:text-indigo-500 hover:decoration-indigo-500" href="https://www.linkedin.com/in/notcoderguy/" target="_blank" rel="noreferrer noopener">
                  Linkedin profile</a>.
              </p>
              <p>
                I possess proficiency in various programming languages, including C, C++, C#, Python, PHP, and JavaScript. I am particularly skilled in utilizing the React framework to build dynamic and interactive web applications. Currently, I am primarily interested in game development and backend development. As a result, you can expect to see more exciting projects in these areas in the future!
              </p>
              <p>
                This portfolio has been crafted using the fantastic Tailwind CSS framework, giving it a polished and modern appearance. I am excited to share my ideas and projects with you, and I hope you enjoy exploring my work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About