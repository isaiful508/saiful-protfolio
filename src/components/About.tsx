import React from 'react';
import { Code, Award, Star, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/50 relative">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative mb-6">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Developer working" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold text-xl">100+</div>
                <div className="text-sm">Completed Projects</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Bringing your digital visions to life</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate frontend developer and UI/UX designer with a keen eye for detail and a dedication to delivering exceptional digital experiences. I blend technical expertise with creative design thinking to create websites that not only look stunning but also perform seamlessly.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              With a background in both design and development, I understand the entire process from concept to deployment. My goal is to create digital solutions that are not only beautiful but also intuitive, accessible, and optimized for performance.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg mr-4">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Modern, responsive websites</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg mr-4">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">UI/UX Design</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Intuitive user interfaces</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Web Optimization</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fast, performant websites</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg mr-4">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Consultation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Technical advice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;