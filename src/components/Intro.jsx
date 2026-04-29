
import { Button } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import codingGirl from '../assets/coding-girl.json';

const Intro = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if(contactSection){
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  }
  return (
    <section 
      id="intro" 
      // flex-col on mobile, md:flex-row on desktop makes it horizontal!
      className=" flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-4 bg-white dark:bg-gray-900 gap-12"
    >
      {/* LEFT HALF - Text & Buttons */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
        <h3 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
          Hi, I'm Oliviya <span className="wave">👋</span>
        </h3>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
          A Software Developer with experience 
          building scalable backend systems using Java and Spring Boot, and 
          deploying them on cloud platforms with modern DevOps practices. 
          I am passionate about creating efficient, secure applications
          that solve real-world problems.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              backgroundColor: '#55198b',
              '&:hover': { backgroundColor: '#3c105f' },
              textTransform: 'none',
              fontSize: '1.1rem',
              padding: '10px 24px'
            }}
            onClick={handleContactClick}
          >
            Get In Touch
          </Button>

          <Button 
            variant="outlined" 
            size="large"
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ 
              color: '#55198b',
              borderColor: '#55198b',
              '&:hover': { borderColor: '#3c105f', backgroundColor: 'rgba(85, 25, 139, 0.04)' },
              textTransform: 'none',
              fontSize: '1.1rem',
              padding: '10px 24px'
            }}
          >
            View Resume ↗
          </Button>
        </div>
      </div>

      {/* RIGHT HALF - GIF*/}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
        <Player
          autoplay
          loop
          src={codingGirl}
          className="w-full max-w-lg lg:max-w-xl"
        />
      </div>
    </section>
  );
};

export default Intro;
