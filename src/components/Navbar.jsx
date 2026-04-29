import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
     document.documentElement.classList.remove('dark'); 
    }
  }, [isDarkMode]);

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const executeSearch = () => {
    if(!searchQuery.trim()) return;
    let found = window.find(searchQuery);
    if (!found) {
      window.getSelection()?.removeAllRanges(); // Clear current selection
      window.scrollTo(0, 0); // Jump to top
      found = window.find(searchQuery); // Search again
    }

    // If still not found anywhere on the page, show an error toast
    if (!found) {
      toast.error(`No results found for "${searchQuery}"`, {
        style: {
          borderRadius: '10px',
          background: isDarkMode ? '#374151' : '#fff',
          color: isDarkMode ? '#fff' : '#333',
        },
      });
    }

  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents default form submission behavior
      executeSearch();
    }
  };
  return (
    <nav className="w-full sticky top-0 z-50 flex items-center justify-between px-8 lg:px-24 py-4 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
      
      {/* LOGO */}
      <div className="text-4xl font-black text-[#55198b] dark:text-purple-400 cursor-pointer tracking-tighter">
        <a href="#intro">OA</a>
      </div>

      {/* NAVIGATION LINKS */}
      <ul className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a 
              href={`#${link.toLowerCase()}`} 
              className="text-lg p-2 font-medium text-gray-700 dark:text-gray-300 hover:bg-[#cdb3e5] dark:hover:text-purple-400 transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* SEARCH BAR & THEME TOGGLE */}
      <div className="flex items-center space-x-4">
        
         {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1.5 transition-colors duration-300">
          <SearchIcon 
            className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-[#55198b] dark:hover:text-purple-400 transition-colors duration-200" 
            fontSize="small" 
            onClick={executeSearch}
          />
          <input
            type="text"
            placeholder="Search page..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none ml-2 text-sm text-gray-700 dark:text-gray-200 w-24 focus:w-40 transition-all duration-300 placeholder-gray-400"
          />
        </div>

        {/* Dark/Light Mode Toggle */}
        <IconButton 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          sx={{ ml: 1 }}
        >
          {isDarkMode ? (
            <LightModeIcon className="text-yellow-400" />
          ) : (
            <DarkModeIcon className="text-gray-600" />
          )}
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
