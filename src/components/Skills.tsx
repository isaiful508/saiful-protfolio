import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Wrench, Brain } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Design Systems", level: 85 }
    ]
  },
  {
    name: "Backend",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Next.js", level: 85 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "SQL", level: 75 }
    ]
  },
  {
    name: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 85 },
      { name: "Webpack", level: 75 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 }
    ]
  },
  {
    name: "Soft Skills",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      { name: "Communication", level: 90 },
      { name: "Teamwork", level: 95 },
      { name: "Problem Solving", level: 85 },
      { name: "Time Management", level: 80 },
      { name: "Leadership", level: 85 }
    ]
  }
];

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Frontend");
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const selectedSkills = skillsData.find(cat => cat.name === selectedCategory)?.skills || [];

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
      
      <div className="container-custom relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-8" ref={ref}>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {skillsData.map((category, index) => (
                <motion.button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 group ${
                    selectedCategory === category.name
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-500/5'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 }
                    }
                  }}
                >
                  <div className={`p-3 rounded-lg mb-3 transition-colors duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-blue-500 group-hover:bg-blue-500 group-hover:text-white'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">{selectedCategory} Skills</h3>
            <div className="space-y-6">
              {selectedSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;