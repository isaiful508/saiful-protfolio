import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github as GitHub, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
  
    const letters = title.textContent?.split('') || [];
    title.textContent = '';
  
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.style.animationDelay = `${i * 0.05}s`;
      span.classList.add('inline-block', 'animate-fade-up', 'opacity-0');
      title.appendChild(span);
    });
  }, []);
  
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative">
      <div className="absolute w-1/2 h-1/2 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-blue-600 font-medium mb-2 animate-fade-up opacity-0">Hello, I'm</p>
            <h1 ref={titleRef} className="font-bold mb-4 animate-fade-up opacity-0">
              Frontend Web Developer
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 animate-fade-up opacity-0 animate-delay-100">
              I craft responsive websites where technology meets creativity. I'm passionate about building excellent software that improves the lives of those around me.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-up opacity-0 animate-delay-200">
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
            
            <div className="flex space-x-4 animate-fade-up opacity-0 animate-delay-300">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                <GitHub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-up opacity-0 animate-delay-100">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-300 to-purple-500 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src="https://i.ibb.co/2hnr06S/profile-pic-1.png" 
                  alt="Developer portrait" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-bounce">
                <div className="text-blue-600 font-bold text-xl">1+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;