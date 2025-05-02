import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.",
    achievements: [
      "Published 2 research papers in international conferences",
      "Teaching Assistant for Advanced Algorithms course",
      "Member of the Computer Science Student Association"
    ]
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "MIT",
    location: "Cambridge, MA",
    period: "2014 - 2018",
    description: "Major in Computer Science with minor in Mathematics. Dean's List all semesters.",
    achievements: [
      "Graduated Summa Cum Laude",
      "Led the Web Development Club",
      "Completed 3 research internships"
    ]
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
                  
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;