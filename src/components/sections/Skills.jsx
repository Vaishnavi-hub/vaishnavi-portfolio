import React from 'react';
import { Badge } from '../ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["TypeScript", "JavaScript", "Python", "Java", "C++"]
    },
    {
      category: "Frontend Development", 
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"]
    },
    {
      category: "Backend Development",
      skills: ["NestJS", "Node.js", "Express.js", "REST APIs", "GraphQL"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Amazon Web Services (AWS)", "Google Cloud Platform", "Docker", "CI/CD"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["Deep Learning", "Computer Vision", "TensorFlow", "PyTorch", "OpenCV"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Agile/Scrum", "Jira", "VS Code", "Postman"]
    }
  ];

  const languages = [
    { language: "Tamil", proficiency: "Native" },
    { language: "English", proficiency: "Professional" },
    { language: "Hindi", proficiency: "Elementary" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Languages
          </h3>
          <div className="flex justify-center space-x-8">
            {languages.map((lang, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-medium text-gray-900">{lang.language}</div>
                <div className="text-sm text-gray-500">{lang.proficiency}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;