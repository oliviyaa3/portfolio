import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  // Array of project data 
  const projectsData = [
    {
      title: "Ecom Hub",
      description: "Full-stack e-commerce platform with Spring Boot and React, featuring authentication, role-based access, Stripe payments, and a robust admin dashboard.",
      techStack: ["React", "Spring Boot", "PostgreSQL", "TailwindCSS"],
      liveLink: "https://example.com",
      // Replaced single githubLink with frontend and backend links
      githubFrontend: "https://github.com/oliviyaa3/ecommerce-frontend", 
      githubBackend: "https://github.com/oliviyaa3/ecommerce-backend"
    },
    {
      title: "NoScroll App",
      description: "It blocks infinite scrolling on social media apps.",
      techStack: ["Kotlin", "Jetpack Compose", "Material Design 3", "Android Accessibility Service API"],
      liveLink: "https://example.com",
      // Uses the standard single link
      githubLink: "https://github.com/oliviyaa3/Scroll-Lock/tree/main"
    },
    {
      title: "Swagtest-AI",
      description: "Writes test cases for APIs and suggest annotation for API documentation.",
      techStack: ["Java", "Spring Boot"],
      liveLink: "https://example.com",
      // Uses the standard single link
      githubLink: "https://github.com/oliviyaa3/swagtest-ai"
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
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* BACK OF CARD */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#55198b] dark:bg-purple-900 rounded-2xl p-6 flex flex-col justify-between items-center text-center">
                  
                  <div className="w-full mt-2">
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-white/20 text-white text-xs py-1 px-3 rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Container - Added flex-wrap and reduced gap so 3 buttons fit nicely */}
                  <div className="flex flex-wrap gap-3 w-full justify-center mb-2">
                    
                    {/* Live Visit Link */}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-[#55198b] hover:bg-gray-100 px-3 py-2 rounded-lg text-sm font-bold transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={12} /> Visit
                      </a>
                    )}

                    {/* Single GitHub Link */}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-bold transition-colors duration-300"
                      >
                        <FaGithub size={14} /> GitHub
                      </a>
                    )}

                    {/* Frontend GitHub Link */}
                    {project.githubFrontend && (
                      <a 
                        href={project.githubFrontend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-bold transition-colors duration-300"
                      >
                        <FaGithub size={14} /> Frontend
                      </a>
                    )}

                    {/* Backend GitHub Link */}
                    {project.githubBackend && (
                      <a 
                        href={project.githubBackend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-bold transition-colors duration-300"
                      >
                        <FaGithub size={14} /> Backend
                      </a>
                    )}

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
