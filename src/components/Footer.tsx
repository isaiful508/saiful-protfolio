import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-gray-900 shadow-inner">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <p>© {currentYear} Made with</p>
            <Heart size={14} className="mx-1 text-blue-600" />
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;