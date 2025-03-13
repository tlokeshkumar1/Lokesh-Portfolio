import React from 'react';
import { Code2, Brain, Sparkles } from 'lucide-react';

const About = () => {
  const expertise = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Web Development',
      description: 'Creating responsive and scalable web applications using modern frameworks and technologies.'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Developing intelligent solutions using cutting-edge ML algorithms and deep learning models.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Gen AI',
      description: 'Creating innovative AI solutions using large language models and generative AI technologies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with expertise in machine learning, generative AI, and web development. 
            I love turning complex problems into elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="p-8 rounded-2xl bg-card hover:bg-muted transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-border">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;