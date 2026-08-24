import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experienceData = [
  {
    period: "2024 July - 2026 July",
    title: "Full-time Developer, Kodezen Limited",
    description:
      "Working as a React and JavaScript developer focusing on WordPress Gutenberg block development and eCommerce plugin solutions.",
    achievements: [
      "Developed custom Gutenberg blocks such as Progress Tracker, News Ticker, Logout, and Marquee",
      "Fixed bugs related to block rendering, responsiveness, and backend integration",
      "Collaborated on StoreEngine eCommerce solutions using vanilla JS and React",
      "Improved performance and maintainability across WordPress plugin architecture",
    ],
  },

  {
    period: "2024 July - 2024 December",
    title: "Frontend Intern, Kodezen Limited",
    description:
      "Focused on learning and building real-world WordPress blocks and front-end features using React and JavaScript.",
    achievements: [
      "Contributed to custom Gutenberg block development",
      "Resolved bugs in legacy block code",
      "Gained hands-on experience with WordPress Gutenberg",
      "Improved skills in vanilla JS, React, and SASS",
    ],
  },

  {
    period: "2023 Dec- 2024 July",
    title: "Full-stack Development & Personal Projects",
    description:
      "Started programming in 2023 and progressed from HTML, CSS, and JavaScript to React and full-stack development with Node.js, Express.js, and MongoDB.",
    achievements: [
      "Built responsive web applications with React",
      "Developed RESTful APIs and database integrations",
      "Built several full-stack applications",
      "Contributed to open-source projects",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experiences" className="section relative">
      <div className="absolute left-1/2 top-32 bottom-0 w-0.5 bg-blue-500/20 transform -translate-x-1/2" />

      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Experiences
        </motion.h2>

        <div className="relative space-y-16">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.div
                  className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                />
              </div>
              <motion.div
                className={`w-1/2 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg relative group ${index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl" />
                <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-4' : '-left-4'
                  } transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 rotate-45`} />

                <div className="relative">
                  <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-blue-500 font-medium">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                    {exp.achievements.map((achievement, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full text-sm"
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;