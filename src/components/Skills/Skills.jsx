import { useState } from 'react';

const skills = {
  frontend: [
    { name: 'HTML5', level: '90%' },
    { name: 'CSS3', level: '95%' },
    { name: 'JavaScript', level: '75%' },
    { name: 'React JS', level: '85%' },
    { name: 'Design System (Ant Design & Material UI)', level: '75%' },
  ],
  backend: [
    { name: 'Node.js', level: '80%' },
    { name: 'Express.js', level: '75%' },
    { name: 'MongoDB', level: '70%' },
    { name: 'SQL', level: '65%' },
  ],
  tools: [
    { name: 'Git', level: '90%' },
    { name: 'Webpack', level: '80%' },
    { name: 'Docker', level: '70%' },
  ],
  softSkills: [
    { name: 'Communication', level: '95%' },
    { name: 'Teamwork', level: '90%' },
    { name: 'Problem-solving', level: '85%' },
  ],
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const renderSkills = (category) => {
    return skills[category].map((skill) => (
      <div key={skill.name} className="mb-4">
        <span className="block text-gray-300">{skill.name}</span>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: skill.level }}></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-6 mt-32 bg-gradient-to-r from-[#362c6a] to-[#191438]  text-white rounded-lg">
      <h2 className="text-2xl mb-6">Technical Proficiency</h2>
      <div className="flex justify-around mb-6">
        <button
          onClick={() => setSelectedCategory('frontend')}
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'frontend' ? 'bg-purple-700' : 'bg-purple-900'}`}
        >
          Frontend
        </button>
        <button
          onClick={() => setSelectedCategory('backend')}
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'backend' ? 'bg-purple-700' : 'bg-purple-900'}`}
        >
          Backend
        </button>
        <button
          onClick={() => setSelectedCategory('tools')}
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'tools' ? 'bg-purple-700' : 'bg-purple-900'}`}
        >
          Tools
        </button>
        <button
          onClick={() => setSelectedCategory('softSkills')}
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'softSkills' ? 'bg-purple-700' : 'bg-purple-900'}`}
        >
          Soft Skills
        </button>
      </div>
      <div className="skills-list">
        {renderSkills(selectedCategory)}
      </div>
    </div>
  );
};

export default Skills;
