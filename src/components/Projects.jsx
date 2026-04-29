import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  // Array of project data 
  const projectsData = [
    {
      title: "Ecom Hub",
      description: "Full-stack e-commerce platform with Spring Boot and React, featuring authentication, role-based access, Stripe payments, and a robust admin dashboard.",
      techStack: ["React", "Spring Boot", "PostgreSQL", "TailwindCSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project1"
    },
    {
      title: "Task Management API",
      description: "A robust RESTful API built for a productivity app, featuring JWT authentication, role-based access, and automated testing.",
      techStack: ["Java", "Spring Security", "PostgreSQL", "Docker"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Weather Forecast Web App",
      description: "A responsive web application that fetches real-time weather data from a third-party API based on user location.",
      techStack: ["JavaScript", "React", "OpenWeather API", "CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project3"
    }
  ];

  return (
    <section 
      id="projects" 
      className="w-full py-20 px-8 md:px-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight relative inline-block pb-2">
            My Projects
            <span className="absolute bottom-0 left-1/4 w-1/2 h-1.5 bg-[#55198b] dark:bg-purple-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg text-center max-w-2xl">
            Hover over the cards to see the tech stack and links to the live projects and source code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            
            /* 3D Flip Card */
            <div 
              key={index} 
              className="group relative w-full h-60 [perspective:1000px]"
            >
              {/* Inner Card (Handles the 3D rotation) */}
              <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg rounded-2xl">
                
                {/* FRONT OF CARD */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  {/* <div className="mt-6 text-[#55198b] dark:text-purple-400 font-semibold animate-pulse">
                    Hover to view details →
                  </div> */}
                </div>

                {/* BACK OF CARD */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#55198b] dark:bg-purple-900 rounded-2xl p-8 flex flex-col justify-between items-center text-center">
                  
                  <div className="w-full">
                    {/* <h4 className="text-xl font-bold text-white mb-4 border-b border-purple-400/50 pb-2">
                      Tech Stack
                    </h4> */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-white/20 text-white text-sm py-1 px-3 rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links*/}
                  <div className="flex gap-4 w-full justify-center">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-[#55198b] hover:bg-gray-100 px-4 py-2 rounded-lg font-bold transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={14} /> Visit
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-4 py-2 rounded-lg font-bold transition-colors duration-300"
                    >
                      <FaGithub size={16} /> GitHub
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
