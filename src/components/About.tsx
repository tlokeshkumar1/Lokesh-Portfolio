import React from 'react';
import { Code2, Brain, Blocks } from 'lucide-react';

const About = () => {
  const expertise = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Developing intelligent solutions using cutting-edge ML algorithms and deep learning models.'
    },
    {
      icon: <Blocks className="w-6 h-6" />,
      title: 'Blockchain',
      description: 'Building decentralized applications and smart contracts on various blockchain platforms.'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Web Development',
      description: 'Creating responsive and scalable web applications using modern frameworks and technologies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with expertise in machine learning, blockchain technology, and web development. 
            I love turning complex problems into elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;