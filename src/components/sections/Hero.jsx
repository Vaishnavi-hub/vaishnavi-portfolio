import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 tracking-tight">
              Vaishnavi
              <span className="block font-normal text-4xl md:text-6xl text-gray-700 mt-2">
                Ayyappan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Software Developer passionate about building innovative AI-powered solutions
            </p>
          </div>

          {/* Tagline */}
          <div className="space-y-2">
            <p className="text-lg text-gray-500 font-medium">
              Full-Stack Developer • AI Enthusiast • Google DSC Ex-Lead
            </p>
            <p className="text-base text-gray-400">
              Based in Bengaluru, India
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 pt-6">
            <a 
              href="mailto:vaishuas24@gmail.com" 
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} className="text-gray-600" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} className="text-gray-600" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} className="text-gray-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;