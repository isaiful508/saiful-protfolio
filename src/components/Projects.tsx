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
    image: "https://i.postimg.cc/sgStWZhj/Screenshot-2025-05-02-143420.png",
    tags: ["Next js", "React", "TypeScript", "Node.js", "MongoDB"],
    category: "Full Stack",
    liveLink: "https://nextly-client.vercel.app/",
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
      backend: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
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
    title: "Bike Nest",
    description: "Bike nest is a bike store application.Here user can buy bikes through searching , filtering and payment via surjoPay",
    image: "https://i.postimg.cc/52H8K42R/image.png",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "JWT", "Mongoose"],
    category: "Full Stack",
    liveLink: "https://bike-store-client-eight.vercel.app",
    clientCodeLink: "https://github.com/isaiful508/bike-store-client",
    serverCodeLink :"https://github.com/isaiful508/bike-store-server",
    features: [
      "User authentication",
      "Products search and filtering",
      "Payment integration",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
      deployment: ["Vercel"]
    },
    challenges: [
      "Implementing real-time inventory updates",
      "Optimizing performance for large catalogs",
      "Securing payment processing"
    ],
    screenshots: [
      "https://i.postimg.cc/52H8K42R/image.png",
      "https://i.postimg.cc/kM0VMQJf/image.png",
      "https://i.postimg.cc/C1fF92qY/image.png",
    ]
  }, 
  {
    id: 3,
    title: "Story Flow News Articles",
    description: "Story Flow is a online based news article website.User can add article by their publisher and goes for approve from admin.If admin approved it shows all articles section.And also here a payment gateway system.",
    image: "https://i.postimg.cc/265WvrMG/image.png",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Firebase"],
    category: "Full Stack",
    liveLink: "https://storyflow-85a15.web.app",
    clientCodeLink: "https://github.com/isaiful508/storyFlow-assignmnet12-client",
    serverCodeLink :"https://github.com/isaiful508/storyFlow-assignment12-server",
    features: [
      "User authentication",
      "Shows news articles",
      "Payment integration",
      "Admin dashboard"
    ],
    technologies: {
      frontend: ["React", "Firebase", "Tailwind"],
      backend: ["Node.js", "Express", "MongoDB", "JWT"],
      deployment: ["Firebase"]
    },
    challenges: [
      "Implementing real-time inventory updates",
      "Optimizing performance for large catalogs",
      "Securing payment processing"
    ],
    screenshots: [
      "https://i.postimg.cc/265WvrMG/image.png",
      "https://i.postimg.cc/cH5nBPNS/image.png",
      "https://i.postimg.cc/FzdJWG9J/image.png",
    ]
  }, 
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {projectsData.map((project, index) => (
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
                      href={project.liveLink}
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