import React from 'react';
import { ExternalLink, Github, Award, Brain, Utensils } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Menu Suggestion App",
      category: "AI/Machine Learning",
      description: "Winner of Marriott Gen AI Hackathon 2024 (2nd Place). Built an intelligent menu suggestion system for hotels and events using AI to enhance guest experiences and streamline event planning in the hospitality industry.",
      technologies: ["Python", "Machine Learning", "AI/ML APIs", "React", "Node.js", "MongoDB"],
      features: [
        "Intelligent menu recommendations based on guest preferences",
        "Event-specific menu optimization",
        "Real-time dietary restriction handling",
        "Integration with hospitality management systems"
      ],
      icon: <Utensils className="w-6 h-6" />,
      status: "Award Winner",
      date: "October 2024",
      company: "Publicis Sapient"
    },
    {
      title: "Deep FaceNet Framework for Real-time Face Detection",
      category: "Research & AI",
      description: "Published research paper presenting a novel deep learning framework for real-time face detection. Implemented advanced neural network architectures to achieve high accuracy and performance in face recognition systems.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "Computer Vision", "PyTorch"],
      features: [
        "Real-time face detection with high accuracy",
        "Optimized neural network architecture",
        "Performance benchmarking against existing models",
        "Scalable implementation for production use"
      ],
      icon: <Brain className="w-6 h-6" />,
      status: "Published",
      date: "2022",
      company: "Academic Research"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Projects & Research
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions at the intersection of AI and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Project Header */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">{project.date}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-3 pt-4 border-t border-gray-100">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Details</span>
                  </Button>
                  {project.category === "Research & AI" && (
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>Research Paper</span>
                    </Button>
                  )}
                </div>

                {/* Company/Institution */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Associated with:</span> {project.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Interested in seeing more of my work?
          </p>
          <Button 
            variant="outline"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;