import React from 'react';
import { Code, Brain, Award, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "3+ years of experience building scalable applications with modern technologies"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Research",
      description: "Published research in deep learning and won AI hackathons"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognition",
      description: "Outstanding student & multiple management scholarships recipient"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Ex-Google DSC Lead with proven community building skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-light text-gray-900">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I'm a passionate software engineer with a keen interest in artificial intelligence and cloud technologies. 
                Currently working as an Associate Software Development Engineer 2 at Publicis Sapient, I've grown from 
                a trainee to a key contributor in just over 3 years.
              </p>
              
              <p>
                My journey began with a strong foundation in computer science from Mepco Schlenk Engineering College, 
                where I was recognized as the Outstanding Student of the CS Department. I've since specialized in 
                full-stack development using TypeScript, NestJS, and AWS, while maintaining a deep interest in AI 
                and machine learning.
              </p>
              
              <p>
                Beyond coding, I'm a natural leader and community builder. As the Ex-Google DSC Lead in 2021, 
                I organized tech events and mentored fellow developers. I believe in continuous learning and 
                sharing knowledge with the community.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;