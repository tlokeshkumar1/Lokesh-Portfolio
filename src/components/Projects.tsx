import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Ticket Hub',
      description: 'Comprehensive ticketing platform for movies and metro services with secure transaction handling.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'Flask', 'HTML/CSS', 'MongoDB'],
      github: 'https://github.com/tlokeshkumar1/smart-ticket-hub',
      demo: 'https://smart-ticket-hub.onrender.com/'
    },
    {
      title: 'Movie Bookings',
      description: 'Modern movie ticket reservation system with real-time seat selection and booking management.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800',
      tech: ['TypeScript', 'React', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/tlokeshkumar1/movie-bookings',
      demo: 'https://movie-bookings.vercel.app/'
    },
    {
      title: 'QA Bot with RAG Model',
      description: 'Advanced question-answering system using RAG model and Pinecone for embeddings.',
      image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'Pinecone', 'Transformers', 'FastAPI'],
      github: 'https://github.com/tlokeshkumar1/QA-Bot-with-RAG-Model',
      demo: '#'
    },
    {
      title: 'Bank Customer Churn Prediction',
      description: 'ML model to predict customer churn using advanced algorithms and data analysis.',
      image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'TensorFlow'],
      github: 'https://github.com/tlokeshkumar1/Customer-CHURN-Prediction',
      demo: '#'
    },
    {
      title: 'Blockchain Healthcare Data',
      description: 'Secure healthcare data management system using blockchain technology.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      tech: ['Solidity', 'Web3.js', 'React', 'Node.js'],
      github: 'https://github.com/tlokeshkumar1/healthcare_management-app',
      demo: '#'
    },
    {
      title: 'Ethereum Mini Wallet',
      description: 'Web-based Ethereum wallet for testnet transactions and balance management.',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800',
      tech: ['React.js', 'Ethers.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/tlokeshkumar1/mini-wallet',
      demo: '#'
    },
    {
      title: 'IPO Web Application',
      description: 'Real-time IPO tracking and analysis platform with user dashboard.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
      tech: ['React.js', 'Redux', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;