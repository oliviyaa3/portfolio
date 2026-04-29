import profilePic from '../assets/profile.png'; 

const About = () => {
  return (
    <section 
      id="about" 
      className="w-full py-20 px-8 md:px-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* LEFT HALF - Profile Photo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            {/* The Image */}
            <img 
              src={profilePic} 
              alt="Oliviya" 
              className="w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl object-cover border-4 border-white dark:border-gray-700 relative z-10"
            />
            {/* Background box*/}
            <div className="absolute top-4 -right-4 w-full h-full rounded-2xl border-4 border-[#55198b] dark:border-purple-500 z-0 hidden md:block"></div>
          </div>
        </div>

        {/* RIGHT HALF */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight relative inline-block pb-2">
            About Me
            {/* A cool little underline decoration */}
            <span className="absolute bottom-0 left-0 w-1/3 h-1.5 bg-[#55198b] dark:bg-purple-500 rounded-full"></span>
          </h2>
          
          <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6 mt-2">
            <p>
              I’m a Software Engineer at Tech Mahindra, building scalable backend systems using Java and Spring Boot. I’ve contributed on-premise to GCP cloud migration strategies, focusing on creating efficient, secure, and production-ready applications.
            </p>
            
            <p>
               Alongside backend development, I have experience in cloud and DevOps practices, working with Google Cloud Platform and AWS. I’ve deployed containerized applications using Docker, managed infrastructure with Terraform, and built CI/CD pipelines. 
            </p>
            
            <p>
              Outside of work, I enjoy exploring AI technologies, reading tech blogs, and staying engaged with the developer community. I’m driven by continuous learning and strive to build clean, maintainable, and scalable systems.
            </p>
          </div>
          </div>
        </div>
    </section>
  );
};

export default About;

