import { FaJava, FaReact, FaDocker, FaLinux, FaAws, FaGitAlt } from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiJavascript, 
  SiMysql, 
  SiPostgresql, 
  SiJenkins, 
  SiKubernetes, 
  SiTerraform, 
  SiGooglecloud 
} from 'react-icons/si';

const Skills = () => {
  // Organizing skills into an array of categories keeps the code very clean!
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: [
        { name: "Java", icon: <FaJava className="text-[#f89820] text-3xl" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6db33f] text-3xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e] text-3xl" /> },
        { name: "React JS", icon: <FaReact className="text-[#61dafb] text-3xl" /> },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479a1] text-3xl" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791] text-3xl" /> },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#f05032] text-3xl" /> },
        { name: "Jenkins", icon: <SiJenkins className="text-[#d33833] text-3xl" /> },
        { name: "Docker", icon: <FaDocker className="text-[#2496ed] text-3xl" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-[#326ce5] text-3xl" /> },
        { name: "Terraform", icon: <SiTerraform className="text-[#7b42bc] text-3xl" /> },
        { name: "Linux", icon: <FaLinux className="text-gray-800 dark:text-gray-200 text-3xl" /> },
      ]
    },
    {
      title: "Cloud",
      skills: [
        { name: "GCP", icon: <SiGooglecloud className="text-[#4285f4] text-3xl" /> },
        { name: "AWS", icon: <FaAws className="text-[#ff9900] text-3xl" /> },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="w-full py-20 px-8 md:px-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight relative inline-block pb-2">
            My Skills
            <span className="absolute bottom-0 left-1/4 w-1/2 h-1.5 bg-[#55198b] dark:bg-purple-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg text-center max-w-2xl">
            Here are the technologies and tools I work with to build robust, scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Category Subheading */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                {category.title}
              </h3>
              
              {/* Skill Items */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 bg-white dark:bg-gray-900 px-4 py-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#55198b] dark:hover:border-purple-500 transition-colors duration-300 group"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
