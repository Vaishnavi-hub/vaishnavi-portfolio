import React from 'react';
import { Heart, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:vaishuas24@gmail.com",
      label: "Email"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "#",
      label: "GitHub"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Vaishnavi Ayyappan</h3>
            <p className="text-gray-300 leading-relaxed">
              Associate Software Development Engineer passionate about creating innovative solutions 
              with AI and cloud technologies. Always learning, always building.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-white text-left transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 vaishuas24@gmail.com</p>
              <p>📍 Bengaluru, Karnataka, India</p>
              <p>💼 Open to opportunities</p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Vaishnavi Ayyappan. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and lots of ☕</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <button 
                onClick={scrollToTop}
                className="hover:text-white transition-colors duration-200"
              >
                Back to Top
              </button>
              <span>•</span>
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;