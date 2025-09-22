import React from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Development Engineer 2",
      company: "Publicis Sapient",
      location: "Bengaluru, Karnataka, India",
      duration: "January 2024 – Present",
      period: "1 year 9 months",
      type: "Full-time",
      responsibilities: [
        "Lead development of scalable web applications using TypeScript and NestJS",
        "Architect and implement cloud solutions on AWS infrastructure",
        "Mentor junior developers and conduct code reviews",
        "Collaborate with cross-functional teams to deliver high-quality software solutions",
        "Drive technical discussions and contribute to architectural decisions"
      ]
    },
    {
      title: "Associate Software Development Engineer 1", 
      company: "Publicis Sapient",
      location: "Bengaluru, Karnataka, India",
      duration: "November 2022 – December 2023",
      period: "1 year 2 months",
      type: "Full-time",
      responsibilities: [
        "Developed and maintained full-stack applications using modern JavaScript frameworks",
        "Implemented RESTful APIs and integrated third-party services",
        "Collaborated with UX/UI designers to create responsive web interfaces",
        "Participated in agile development processes and sprint planning",
        "Contributed to code optimization and performance improvements"
      ]
    },
    {
      title: "Trainee Engineer",
      company: "Publicis Sapient", 
      location: "Bengaluru, Karnataka, India",
      duration: "May 2022 – November 2022",
      period: "7 months",
      type: "Full-time",
      responsibilities: [
        "Completed comprehensive training program in full-stack development",
        "Built foundational knowledge in TypeScript, React, and cloud technologies",
        "Worked on training projects and real-world applications",
        "Learned best practices in software development and version control",
        "Participated in team collaborations and peer programming sessions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            3+ years of growth and innovation in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    <span className="text-lg font-medium text-blue-600">{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 lg:text-right">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;