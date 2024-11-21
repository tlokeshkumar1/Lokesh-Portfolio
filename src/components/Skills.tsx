import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'HTML/CSS', 'SQL', 'MongoDB', 'Solidity']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Version Control']
    },
    {
      title: 'Blockchain',
      skills: [ 'Web3.js', 'Smart Contracts', 'DApps']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full"
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