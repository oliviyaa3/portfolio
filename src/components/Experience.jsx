import tmLogo from '../assets/TechMLogo.png';
const Experience = () => {
  return (
    <section 
      id="experience" 
      // Using a gray background so the white card pops out 
      className="w-full py-20 px-8 md:px-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight relative inline-block pb-2">
            Experience
            <span className="absolute bottom-0 left-1/4 w-1/2 h-1.5 bg-[#55198b] dark:bg-purple-500 rounded-full"></span>
          </h2>
        </div>

        {/* Experience Card */}
        <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          
          {/* Top Header (The colored block) */}
          <div className="h-32 bg-[#55198b] dark:bg-purple-800 relative flex items-center justify-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-wide">
              Tech Mahindra
            </h3>
            
            {/*Circular Logo */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <img 
                src={tmLogo} 
                alt="Tech Mahindra Logo" 
                className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 shadow-md object-cover bg-white"
              />
            </div>
          </div>

          {/* Card Body */}
          <div className="pt-16 pb-10 px-8 md:px-12 flex flex-col items-center text-center">
            
            {/* Job Title & Dates */}
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              Software Engineer
            </h4>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-1">
              Sept 2023 – Present
            </p>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed text-center max-w-2xl">
              Working as a core developer responsible for designing, building, and maintaining 
              enterprise-level web applications. Collaborating with cross-functional teams to 
              deliver scalable software solutions that meet complex business requirements.
            </p>

            {/* Bullet Points */}
            <ul className="mt-6 text-left text-gray-600 dark:text-gray-400 space-y-2 max-w-2xl list-disc list-outside ml-4">
              <li>
                Developed and deployed robust backend services utilizing {" "}
                <span className="bold-text">
                  Java</span> and <span className="bold-text">Spring Boot</span>.
              </li>
              
              <li>
                 Developed RESTful APIs using  {" "}
                 <span className="bold-text">
                   Java and Spring Boot </span>, and secured backend access via 
                  <span className="bold-text">
                  {" "}Apigee API Gateway. </span>
              </li>
              <li>
                Participated in code reviews, {" "}
                <span className="bold-text">
                  CI/CD pipeline integrations</span>, and {" "}
                  <span className="bold-text">
                  agile</span>{" "}ceremonies to ensure high-quality code delivery.
              </li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
