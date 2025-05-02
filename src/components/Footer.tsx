import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 shadow-inner">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-blue-600">D</span>ev
            </a>
          </div>
          
          <div>
            <ul className="flex items-center space-x-4 mb-4 md:mb-0">
              <li>
                <a href="#home" className="text-sm hover:text-blue-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-sm hover:text-blue-500 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-sm hover:text-blue-500 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-sm hover:text-blue-500 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-blue-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <p>© {currentYear} Made with</p>
            <Heart size={14} className="mx-1 text-red-500" />
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;