import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: "Smart Rental & Housing Solution",
    description: "Nestly is a smart rental housing solution that connects Landlords, Tenants, and an Admin through a feature-rich platform and It is a team project.We are four team members has finished this work.Frontend of BasaFinder Smart Rental & Housing Solution Built with Next.js + TypeScript + React ",
    image: "https://i.postimg.cc/sgStWZhj/Screenshot-2025-05-02-143420.png",
    tags: ["Next js","React", "TypeScript", "Tailwind", "Redux", "Node.js", "MongoDB"],
    category: "Web App",
    liveLink: "https://nextly-client.vercel.app",
    clientCodeLink: "https://github.com/ChowdhuryFatema/nestly-client",
    serverCodeLink: "https://github.com/isaiful508/nestly-server",
    features: [
      "User authentication",
      "House search and filtering",
      "Payment integration by stripe",
      "Admin dashboard",
      "Landlord dashboard",
      "Tenants dashboard",
      "Jwt authentication"
    ],
    technologies: {
      frontend: ["Next", "React", "TypeScript", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
      deployment: ["Vercel"]
    },
    challenges: [
      "Landlord and tenants connection build contact info shared based on payments",
      "Optimizing performance for large house catalogs",
      "Ensuring secure payment processing"
    ],
    screenshots: [
      "https://i.postimg.cc/6QXFf5rd/Screenshot-2025-05-02-144418.png",
      "https://i.postimg.cc/CKsXPT79/Screenshot-2025-05-02-144301.png",
      "https://i.ibb.co.com/h1M6F1tq/image.png",
    ]
  },
  {
    id: 2,
    title: "Smart Rental & Housing Solution",
    description: "Nestly is a smart rental housing solution that connects Landlords, Tenants, and an Admin through a feature-rich platform and It is a team project.We are four team members has finished this work.Frontend of BasaFinder Smart Rental & Housing Solution Built with Next.js + TypeScript + React ",
    image: "https://i.ibb.co.com/GqsQ8Mb/image.png",
    tags: ["React", "TypeScript", "Tailwind", "Redux", "Node.js", "MongoDB"],
    category: "Web App",
    liveLink: "https://i.postimg.cc/52H8K42R/image.png",
    clientCodeLink: "https://github.com/ChowdhuryFatema/nestly-client",
    serverCodeLink: "https://github.com/isaiful508/nestly-server",
    features: [
      "User authentication",
      "House search and filtering",
      "Payment integration by stripe",
      "Admin dashboard",
      "Landlord dashboard",
      "Tenants dashboard",
      "Jwt authentication"
    ],
    technologies: {
      frontend: ["Next", "React", "TypeScript", "Redux", "Tailwind CSS"],
      backend: ["TypeScript","Node.js", "Express", "MongoDB", "Mongoose"],
      deployment: ["Vercel"]
    },
    challenges: [
      "Landlord and tenants connection build contact info shared based on payments",
      "Optimizing performance for large house catalogs",
      "Ensuring secure payment processing"
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
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "JWT", "Mongoose"],
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
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href={project.clientCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
               Client Code
                <Github className="w-4 h-4 ml-2" />
              </a>
              <a
                href={project.serverCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Server Code
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