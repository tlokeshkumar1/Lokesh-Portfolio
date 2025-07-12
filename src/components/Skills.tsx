import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'HTML/CSS', 'SQL', 'MongoDB', 'Solidity', 'Tailwind CSS']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Flask','Django','Fast API','Springboot','React.js', 'Node.js']
    },
    {
      title: 'Tools Known',
      skills: ['Git', 'Version Control', 'Docker', 'AWS Cloud','GCP', 'Postman', 'VS Code', 'Jupyter Notebook']
    },
    {
      title: 'Tecknologies',
      skills: ['machine learning', 'web development', 'AI', 'RAG', 'LLM', 'LangChain', 'Vector DBs', 'HuggingFace API']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-card rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;