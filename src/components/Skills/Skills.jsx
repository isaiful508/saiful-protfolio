import { useState } from 'react';
import frontend from '../../assets/frontend.png'
import back from '../../assets/back.png'
import skill from '../../assets/skill.png'
import tools from '../../assets/tools.png'

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
        { name: 'Next.js', level: '70%' },
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

            <div className="mb-4" key={skill.name}>
                
                <div >
                    
                    <span className="block text-white">{skill.name}</span>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 relative">
                        <div className="bg-[#a38cfa] h-2.5 rounded-full" style={{ width: skill.level }}></div>
                        <span className="absolute right-0 top-0 text-white text-sm">{skill.level}</span>
                    </div>
                </div>
            </div>

        ));
    };

    return (
        <div className="p-32 bg-gradient-to-r from-[#362c6a] to-[#191438]  text-white flex justify-around ">

            <div className="grid grid-cols-2 gap-8 mb-10">

                <button
                    onClick={() => setSelectedCategory('frontend')}
                    className={`px-4 py-4 rounded-lg border border-[#a38cfa] w-[280px] h-[141px] relative text-2xl poppins-medium ${selectedCategory === 'frontend' ? 'bg-[#a38cfa]' : 'bg-[#392e6d]'}`}
                >Frontend
                    <div className="absolute -top-4 -left-4 bottom-4 border border-[#a38cfa] bg-[#392e6d] h-[80px] w-[80px] flex justify-center items-center rounded-lg">
                        <img src={frontend} alt="Frontend" className=" w-8 h-8 mr-2" />

                    </div>
                </button>

                <button
                    onClick={() => setSelectedCategory('backend')}
                    className={`px-4 py-4 rounded-lg border border-[#a38cfa] w-[280px] h-[141px] relative text-2xl poppins-medium ${selectedCategory === 'backend' ? 'bg-[#a38cfa]' : 'bg-[#392e6d]'}`}
                >
                    Backend
                    <div className="absolute -top-4 -left-4 bottom-4 border border-[#a38cfa] bg-[#392e6d] h-[80px] w-[80px] flex justify-center items-center rounded-lg">
                        <img src={back} alt="Backend" className="w-8 h-8 mr-2" />

                    </div>
                </button>

                <button
                    onClick={() => setSelectedCategory('tools')}
                    className={`px-4 py-4 rounded-lg border border-[#a38cfa] w-[280px] h-[141px] relative text-2xl poppins-medium ${selectedCategory === 'tools' ? 'bg-[#a38cfa]' : 'bg-[#392e6d]'}`}
                >Tools
                    <div className="absolute -top-4 -left-4 bottom-4 border border-[#a38cfa] bg-[#392e6d] h-[80px] w-[80px] flex justify-center items-center rounded-lg">
                        <img src={tools} alt="Tools" className="w-8 h-8 mr-2" />

                    </div>
                </button>

                <button
                    onClick={() => setSelectedCategory('softSkills')}
                    className={`px-4 py-4  rounded-lg border border-[#a38cfa] w-[280px] h-[141px] relative text-2xl poppins-medium ${selectedCategory === 'softSkills' ? 'bg-[#a38cfa]' : 'bg-[#392e6d]'}`}
                > Soft Skills
                    <div className="absolute -top-4 -left-4 bottom-4 border border-[#a38cfa] bg-[#392e6d] h-[80px] w-[80px] flex justify-center items-center rounded-lg">
                        <img src={skill} alt="Soft Skills" className="w-8 h-8 mr-2" />

                    </div>
                </button>
            </div>

            <div className="w-1/2 p-4 rounded-lg border border-[#a38cfa] space-y-6 poppins-medium">
                {renderSkills(selectedCategory)}
            </div>
        </div>
    );
};

export default Skills;
