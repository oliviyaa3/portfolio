import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section 
      id="contact" 
      // Using gray background to alternate from the white Projects section
      className="w-full pt-20 pb-10 px-8 md:px-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 flex flex-col items-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
          Get in touch
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
          I'm currently looking for new opportunities. Whether you have a question, 
          a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 md:gap-8 mb-16">
          
          {/* Email Icon */}
          <a 
            href="mailto:oliviyaa137@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100 dark:border-gray-700"
            aria-label="Email"
          >
            <FaEnvelope className="text-2xl text-gray-600 dark:text-gray-300 group-hover:text-[#ea4335] transition-colors duration-300" />
          </a>

          {/* LinkedIn Icon */}
          <a 
            href="https://linkedin.com/in/oliviyaalal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100 dark:border-gray-700"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-2xl text-gray-600 dark:text-gray-300 group-hover:text-[#0a66c2] transition-colors duration-300" />
          </a>

          {/* GitHub Icon */}
          <a 
            href="https://github.com/oliviyaa3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100 dark:border-gray-700"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl text-gray-600 dark:text-gray-300 group-hover:text-[#333333] dark:group-hover:text-white transition-colors duration-300" />
          </a>

        </div>

      </div>

      {/* Mini Footer
      <div className="w-full mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col items-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Designed by Oliviya
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div> */}
    </section>
  );
};

export default Contact;
