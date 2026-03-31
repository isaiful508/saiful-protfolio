import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experienceData = [
  {
    period: "2024 July - Present",
    title: "Full-time Developer, Kodezen Limited",
    description: "Working as a React and JavaScript developer focusing on WordPress Gutenberg block development and eCommerce plugin solutions.",
    achievements: [
      "Developed custom Gutenberg blocks such as Progress Tracker, News Ticker, Logout, and Marquee",
      "Fixed multiple bugs related to block rendering, responsiveness, and backend integration",
      "Collaborated on StoreEngine eCommerce plugin solutions using vanilla JS and React",
      "Improved performance and maintainability across WordPress plugin architecture"
    ]
  },
  {
    period: "2024 July - 2024 December",
    title: "Frontend Intern, Kodezen Limited",
    description: "Focused on learning and building real-world WordPress blocks and front-end features using React and JavaScript.",
    achievements: [
      "Contributed to custom Gutenberg block development",
      "Assisted in resolving bugs in legacy block code",
      "Gained hands-on experience with WordPress block editor (Gutenberg)",
      "Enhanced skills in vanilla JS, React, and SASS CSS"
    ]
  },
  {
    period: "2023 - 2024",
    title: "Ongoing Projects & Learning",
    description: "Continuously working on personal projects and enhancing my skills in the MERN stack (MongoDB, Express.js, React.js, Node.js). Actively applying for job opportunities and contributing to open-source projects.",
    achievements: [
      "Built several full-stack applications",
      "Contributed to open-source projects",
      "Enhanced MERN stack expertise"
    ]
  },
  {
    period: "2023",
    title: "Full-stack Development",
    description: "Started learning Node.js, Express.js, and MongoDB to become a full-stack developer. Created APIs and connected them with the front-end to build full-stack applications.",
    achievements: [
      "Developed RESTful APIs",
      "Implemented database integrations",
      "Created full-stack applications"
    ]
  },
  {
    period: "2023",
    title: "Learning Advanced Front-end Technologies",
    description: "Transitioned to learning advanced front-end technologies, including React.js. Built several projects to solidify my understanding of component-based architecture and state management.",
    achievements: [
      "Mastered React fundamentals",
      "Implemented state management solutions",
      "Built responsive web applications"
    ]
  },
  {
    period: "2023",
    title: "Started Learning Programming",
    description: "I began my journey into programming, focusing on the basics of HTML, CSS, and JavaScript. Initially, my goal was to create simple web pages and understand the core concepts of web development.",
    achievements: [
      "Learned HTML, CSS fundamentals",
      "Mastered JavaScript basics",
      "Created simple web projects"
    ]
  }
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