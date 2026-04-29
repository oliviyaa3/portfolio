import Intro from './components/Intro';

import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {

   return (
    <div className="font-sans antialiased text-gray-900 bg-white dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience /> 
      <Projects/>
      <Contact /> 
    </div>
  );
}

export default App
