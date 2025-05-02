export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoLink: string;
  codeLink: string;
  features: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    deployment: string[];
  };
  challenges: string[];
  screenshots: string[];
}

export interface Skill {
  name: string;
  percentage: number;
  color: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}