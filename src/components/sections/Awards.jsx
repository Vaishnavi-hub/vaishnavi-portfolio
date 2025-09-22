import React from 'react';
import { Trophy, Award, Calendar, Building, Star, Cloud, ShieldCheck } from 'lucide-react';
import { Badge } from '../ui/badge';

const Awards = () => {
  const awards = [
    {
      title: "Marriott Gen AI Hackathon 2024 Winner",
      position: "2nd Place",
      organization: "Publicis Sapient",
      date: "October 2024",
      description: "Built and demonstrated an AI-Powered Menu Suggestion App for Hotels & Events. Created a smart, AI-driven solution designed to elevate guest experiences and streamline event planning in the hospitality industry.",
      icon: <Trophy className="w-6 h-6" />,
      category: "Innovation",
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      title: "Learning Mindset Core Value Award",
      position: "Recipient",
      organization: "Organization",
      date: "2024 & 2025",
      description: "Recognized for demonstrating exceptional commitment to continuous learning, growth mindset, and knowledge sharing within the organization.",
      icon: <Star className="w-6 h-6" />,
      category: "Leadership",
      color: "text-purple-600 bg-purple-100"
    },
    {
      title: "Outstanding Student of B.E. Computer Science Department",
      position: "Top Graduate",
      organization: "Mepco Schlenk Engineering College",
      date: "2022",
      description: "Recognized as the outstanding student of the Computer Science and Engineering Department for academic excellence and overall performance.",
      icon: <Award className="w-6 h-6" />,
      category: "Academic",
      color: "text-blue-600 bg-blue-100"
    },
    {
      title: "Best Outgoing Student of the College",
      position: "College-wide Recognition",
      organization: "Mepco Schlenk Engineering College", 
      date: "2022",
      description: "Honored as the best outgoing student of the entire college for exceptional academic performance, leadership, and contribution to college community.",
      icon: <Award className="w-6 h-6" />,
      category: "Academic",
      color: "text-green-600 bg-green-100"
    }
  ];

  const certifications = [
    {
      title: "Google Cloud Certified Digital Leader",
      issuer: "Google Cloud Community India",
      issued: "March 2023",
      expires: "March 2026",
      icon: <Cloud className="w-5 h-5" />,
      color: "text-blue-600"
    },
    {
      title: "Amazon Web Services Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      issued: "September 2022", 
      expires: "July 2028",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "text-orange-600"
    },
    {
      title: "Data Science Foundation",
      issuer: "Professional Development",
      issued: "2022",
      expires: "N/A",
      icon: <Award className="w-5 h-5" />,
      color: "text-indigo-600"
    },
    {
      title: "Frontend Developer Workshop",
      issuer: "Professional Development",
      issued: "2022",
      expires: "N/A", 
      icon: <Award className="w-5 h-5" />,
      color: "text-purple-600"
    },
    {
      title: "Microsoft Technology Associate: Python Programming",
      issuer: "Microsoft",
      issued: "2021",
      expires: "N/A",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "text-blue-600"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Awards & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for excellence in technology, leadership, and continuous learning
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${award.color} flex-shrink-0`}>
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{award.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {award.category}
                      </Badge>
                    </div>
                    <div className="text-sm text-blue-600 font-medium mb-1">{award.position}</div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Building className="w-4 h-4" />
                      <span>{award.organization}</span>
                      <Calendar className="w-4 h-4 ml-2" />
                      <span>{award.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-5 hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className={`p-1.5 rounded ${cert.color}`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm leading-tight mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">{cert.issuer}</p>
                    <div className="text-xs text-gray-500">
                      <div>Issued: {cert.issued}</div>
                      {cert.expires !== "N/A" && (
                        <div>Expires: {cert.expires}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Recognition */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Star className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Leadership Excellence</h3>
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Former Google DSC Lead (2021) with a proven track record of community building, 
              technical leadership, and mentoring fellow developers. Recognized for fostering 
              a culture of learning and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;