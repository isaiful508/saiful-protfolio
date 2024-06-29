import { useState } from 'react';
import frontend from '../../assets/frontend.png'
import back from '../../assets/back.png'
import skill from '../../assets/skill.png'
import tools from '../../assets/tools.png'

const skills = {
    frontend: [

        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'React JS' },
        { name: 'Design System (Ant Design, Material UI, Daisy UI etc)' },
    ],
    backend: [
        { name: 'Node.js'},
        { name: 'Next.js' },
        { name: 'Express.js' },
        { name: 'MongoDB' },
        { name: 'SQL' },
    ],
    tools: [
        { name: 'Git' },
        {name: 'Github'},
        { name: 'Webpack' },
        { name: 'Docker' },
        { name: 'VS Code' },
    ],
    softSkills: [
        { name: 'Communication'},
        { name: 'Teamwork'},
        { name: 'Problem-solving'},
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
        <div className='mt-32 container mx-auto'>
            
            <h3 className='text-4xl text-white text-center  mb-10 poppins-medium'>My Skills</h3>
            
            <div className="flex lg:flex-row flex-col justify-around ">
            
                <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-8 mb-10">

                    <button
                        onClick={() => setSelectedCategory('frontend')}
                        className={`px-4 py-4  rounded-lg border border-[#a38cfa] lg:w-[280px] lg:h-[141px] hover:bg-[#a38cfa] relative text-2xl poppins-medium ${selectedCategory === 'frontend' ? 'bg-[#a38cfa]' : 'bg-[#392e6d]'}`}
                    >Frontend
                        <div className="absolute -top-4 -left-4 bottom-4 border border-[#a38cfa] bg-[#392e6d] lg:h-[80px] lg:w-[80px] flex justify-center items-center rounded-lg">
                            <img src={frontend} alt="Frontend" className=" w-8 h-8 mr-2" />

                        </div>
                    </button>

                    <button
                        onClick={() => setSelectedCategory('backend')}
                        className={`px-4 py-4 rounded-lg border border-[#a38cfa] lg:w-[280px] lg:h-[141px] relative hover:bg-[#a38cfa] text-2xl poppins-medium ${selectedCategory === 'backend' ? 'bg-[#a38cfa]' : 'bg-[#392e6d]'}`}
                    >
                        Backend
                        <div className="absolute -top-4 -left-4 bottom-4 border border-[#a38cfa] bg-[#392e6d] lg:h-[80px] lg:w-[80px] flex justify-center items-center rounded-lg">
                            <img src={back} alt="Backend" className="w-8 h-8 mr-2" />

                        </div>
                    </button>

                    <button
                        onClick={() => setSelectedCategory('tools')}
                        className={`px-4 py-4 rounded-lg border border-[#a38cfa] lg:w-[280px] lg:h-[141px] relative hover:bg-[#a38cfa] text-2xl poppins-medium ${selectedCategory === 'tools' ? 'bg-[#a38cfa]' : 'bg-[#392e6d]'}`}
                    >Tools
                        <div className="absolute -top-4 -left-4 bottom-4 border border-[#a38cfa] bg-[#392e6d] lg:h-[80px] lg:w-[80px] flex justify-center items-center rounded-lg">
                            <img src={tools} alt="Tools" className="w-8 h-8 mr-2" />

                        </div>
                    </button>

                    <button
                        onClick={() => setSelectedCategory('softSkills')}
                        className={`px-4 py-4  rounded-lg border border-[#a38cfa] lg:w-[280px] lg:h-[141px] relative hover:bg-[#a38cfa] text-2xl poppins-medium ${selectedCategory === 'softSkills' ? 'bg-[#a38cfa]' : 'bg-[#392e6d]'}`}
                    > Soft Skills
                        <div className="absolute -top-4 -left-4 bottom-4 border border-[#a38cfa] bg-[#392e6d] lg:h-[80px] lg:w-[80px] flex justify-center items-center rounded-lg">
                            <img src={skill} alt="Soft Skills" className="w-8 h-8 mr-2" />

                        </div>
                    </button>
                </div>

                <div className="lg:w-1/2 w-full p-4 rounded-lg border border-[#a38cfa] space-y-6 poppins-medium">
                    {renderSkills(selectedCategory)}
                </div>
            </div>
        </div>
    );
};

export default Skills;
