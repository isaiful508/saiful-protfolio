import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-router-dom';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: "Smart Rental & Housing Solution",
    description: "Nestly is a smart rental housing solution that connects Landlords, Tenants, and an Admin through a feature-rich platform and It is a team project",
    image: "https://i.ibb.co.com/GqsQ8Mb/image.png",
    tags: ["Next js", "React", "TypeScript", "Node.js", "MongoDB"],
    category: "Full Stack",
    demoLink: "https://nextly-client.vercel.app/",
    clientCodeLink: "https://github.com/ChowdhuryFatema/nestly-client",
    serverCodeLink :"https://github.com/isaiful508/nestly-server",
    features: [
      "User authentication",
      "House search and filtering",
      "Payment integration",
      "Admin dashboard"
    ],
    technologies: {
      frontend: ["Next js","React", "TypeScript", "Tailwind"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
      deployment: ["Vercel"]
    },
    challenges: [
      "Implementing real-time inventory updates",
      "Optimizing performance for large catalogs",
      "Securing payment processing"
    ],
    screenshots: [
      "https://i.ibb.co.com/pvc1sxbX/image.png",
      "https://i.ibb.co.com/KMRPjp3/image.png",
      "https://i.ibb.co.com/h1M6F1tq/image.png",
    ]
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing social media accounts and analytics.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Next.js", "TailwindCSS", "Firebase"],
    category: "Web App",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
    features: [
      "Real-time analytics",
      "Multi-platform integration",
      "Automated posting",
      "Performance tracking",
      "Custom reports"
    ],
    technologies: {
      frontend: ["React", "Next.js", "TailwindCSS"],
      backend: ["Firebase", "Cloud Functions"],
      deployment: ["Vercel", "Firebase Hosting"]
    },
    challenges: [
      "Handling real-time data updates",
      "Managing multiple API integrations",
      "Ensuring data accuracy"
    ],
    screenshots: [
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      "https://images.pexels.com/photos/265088/pexels-photo-265088.jpeg",
      "https://images.pexels.com/photos/265089/pexels-photo-265089.jpeg"
    ]
  },
  {
    id: 3,
    title: "AI-Powered Task Manager",
    description: "A smart task management system that uses AI to prioritize and organize tasks.",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Python", "TensorFlow", "FastAPI"],
    category: "AI/ML",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
    features: [
      "AI task prioritization",
      "Smart scheduling",
      "Natural language processing",
      "Progress tracking",
      "Team collaboration"
    ],
    technologies: {
      frontend: ["React", "TypeScript", "ChakraUI"],
      backend: ["Python", "FastAPI", "TensorFlow"],
      deployment: ["GCP", "Docker"]
    },
    challenges: [
      "Implementing accurate AI predictions",
      "Handling complex scheduling algorithms",
      "Optimizing model performance"
    ],
    screenshots: [
      "https://images.pexels.com/photos/7376/startup-photos.jpg",
      "https://images.pexels.com/photos/7377/startup-photos.jpg",
      "https://images.pexels.com/photos/7378/startup-photos.jpg"
    ]
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    tiltRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 15,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
          scale: 1.05
        });
      }
    });
    
    return () => {
      tiltRefs.current.forEach((ref) => {
        if (ref) {
          // @ts-ignore - VanillaTilt types are not complete
          ref.vanillaTilt?.destroy();
        }
      });
    };
  }, [filter]);

  const categories = ['All', 'Full Stack', 'Web App', 'AI/ML'];
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
      
      <div className="container-custom relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={el => tiltRefs.current[index] = el}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="aspect-video relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.category}
                  </motion.span>
                  
                  <div className="flex space-x-2">
                    <motion.a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ExternalLink size={16} className="text-white" />
                    </motion.a>
                    <motion.a 
                      href={project.clientCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Github size={16} className="text-white" />
                    </motion.a>
                    <motion.a 
                      href={project.serverCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Github size={16} className="text-white" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <motion.span 
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <Link 
                  to={`/project/${project.id}`}
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                >
                  View Details
                  <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;