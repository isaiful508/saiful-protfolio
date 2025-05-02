import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with product listings, shopping cart, and checkout functionality. Built with React, TypeScript, and Tailwind CSS. Features include real-time inventory updates, user authentication, and responsive design.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
    tags: ["React", "TypeScript", "Tailwind", "Redux", "Node.js", "MongoDB"],
    category: "Web App",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
    features: [
      "User authentication and authorization",
      "Product search and filtering",
      "Shopping cart management",
      "Secure payment processing",
      "Order tracking",
      "Admin dashboard"
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
      deployment: ["AWS", "Docker", "CI/CD"]
    },
    challenges: [
      "Implementing real-time inventory updates",
      "Optimizing performance for large product catalogs",
      "Ensuring secure payment processing"
    ],
    screenshots: [
      "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
      "https://images.pexels.com/photos/6956904/pexels-photo-6956904.jpeg",
      "https://images.pexels.com/photos/6956905/pexels-photo-6956905.jpeg"
    ]
  }
  // Add more projects here
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="section pt-32">
        <div className="container-custom">
          <h1>Project not found</h1>
        </div>
      </div>
    );
  }

  return (
    <section className="section pt-32">
      <div className="container-custom">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <h1 className="text-4xl font-bold flex-1">{project.title}</h1>
            <div className="flex gap-4">
              <a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Code
                <Github className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      <h3 className="font-semibold mb-2">Challenge {index + 1}:</h3>
                      <p>{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Technologies</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Frontend:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.frontend.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Backend:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.backend.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Deployment:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.deployment.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                <div className="space-y-4">
                  {project.screenshots.map((screenshot, index) => (
                    <img 
                      key={index}
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;