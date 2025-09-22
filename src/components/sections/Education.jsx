import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Mepco Schlenk Engineering College",
      location: "Tamil Nadu, India",
      duration: "2018 - 2022",
      gpa: "Distinguished Graduate",
      achievements: [
        "Outstanding Student of B.E. Computer Science and Engineering Department",
        "Best Outgoing Student of the College",
        "Multiple Management Scholarships for Academic Performance",
        "Active participation in technical symposiums and coding competitions"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Machine Learning",
        "Software Engineering",
        "Web Technologies",
        "Artificial Intelligence"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation in computer science and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                    <h4 className="text-lg font-medium text-blue-600 mb-2">{edu.institution}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {edu.gpa}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-3">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Education Info */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Academic Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Throughout my academic journey, I maintained a strong focus on both theoretical understanding 
              and practical application. My involvement in various technical projects and competitions helped 
              bridge the gap between classroom learning and real-world software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;