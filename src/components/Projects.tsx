import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Helpdesk with Agentic Triage',
      description: 'Developed Smart Helpdesk with Agentic Triage, an AI-powered support system that classifies tickets, retrieves knowledge base articles, and generates draft replies using LLMs to streamline customer support workflows.',
      image: 'https://www.easyproject.com/EasyProject/media/site-images/news/how-service-ai-transforms-helpdesk-operations-body.png?format=webp&quality=80',
      tech: ['Python', 'LLM Integration', 'FastAPI', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/tlokeshkumar1/Smart-Helpdesk-with-Agentic',
      demo: '#'
    },
    {
      title: 'Email Summarizer and Replier Agent',
      description: 'Created an AI agent that summarizes emails and replies using LLMs, enhancing email management efficiency.',
      image: 'https://blog.thewdgagency.com/hubfs/Email%20Bot%20Clicks.jpg',
      tech: ['Python', 'LLM Integration', 'FastAPI', 'Flask'],
      github: 'https://github.com/tlokeshkumar1/Email-Replier-Agent',
      demo: '#'
    },
    {
      title: 'Lightweight AI Assistant with RAG',
      description: 'Built a lightweight AI assistant using Retrieval-Augmented Generation (RAG) techniques to provide accurate and context-aware responses.',
      image: 'https://substackcdn.com/image/fetch/$s_!p46P!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbc361530-87ec-4414-b0ba-8bc81c3cbefd_1024x608.png',
      tech: ['Python', 'RAG', 'Flask', 'Pinecone', 'Transformers', 'React.js'],
      github: 'https://github.com/tlokeshkumar1/rag-assistant',
      demo: '#'
    },
    {
      title: 'AI Chatbot Companion',
      description: 'Developed an AI chatbot companion that engages users in natural conversations, providing assistance and information on various topics.',
      image: 'https://ddi-dev.com/uploads/media/news/0001/02/584668831a98d094bf9ceb0a533d0984149e044f.jpeg',
      tech: ['Python', 'Flask', 'Transformers', 'React.js', 'LangChain'],
      github: 'https://github.com/tlokeshkumar1/AI-Companion-Hosting/',
      demo: 'https://ai-companion-5bet.onrender.com/'
    },
    {
      title: 'Smart Ticket Hub',
      description: 'Comprehensive ticketing platform for movies and metro services with secure transaction handling.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'Flask', 'HTML/CSS', 'MongoDB'],
      github: 'https://github.com/tlokeshkumar1/smart-ticket-hub',
      demo: 'https://smart-ticket-hub.onrender.com/'
    },
    {
      title: 'AI-ML Based Phishing Detection System',
      description: 'AI-ML based phishing detection system that analyzes email content to identify and flag potential phishing attempts, enhancing email security.',
      image: 'https://obrienmedia.co.uk/wp-content/uploads/2020/03/phishing-with-ssl.jpg',
      tech: ['Python', 'numpy', 'Pandas', 'Flask', 'TensorFlow'],
      github: 'https://github.com/anilkumar1306/AI-Based-Phishing-Detection-System-main',
      demo: '#'
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