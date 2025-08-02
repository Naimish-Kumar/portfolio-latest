import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Zap, Code2, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full animate-float-delay blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-purple-600/40 to-pink-500/40 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded-full animate-float blur-sm"></div>
        
        {/* Additional 3D floating elements */}
        <div className="absolute top-32 left-1/4 transform rotate-45 animate-float-3d">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-400/30 transform rotate-45"></div>
        </div>
        <div className="absolute bottom-32 right-1/4 transform -rotate-45 animate-float-3d-delay">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full"></div>
        </div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* 3D floating phone mockups */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-8 transform rotate-12 animate-float-phone perspective-1000">
          <div className="w-16 h-28 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md rounded-xl border border-purple-400/30 shadow-2xl transform-3d hover:rotateY-12 transition-transform duration-500">
            <div className="absolute inset-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg"></div>
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-purple-400/50 rounded-full"></div>
          </div>
        </div>
        <div className="absolute bottom-32 right-12 transform -rotate-12 animate-float-phone-delay perspective-1000">
          <div className="w-20 h-36 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-xl border border-cyan-400/30 shadow-2xl transform-3d hover:rotateY-12 transition-transform duration-500">
            <div className="absolute inset-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-cyan-400/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Additional 3D elements */}
        <div className="absolute top-1/2 left-16 transform -translate-y-1/2 animate-float-3d">
          <Code2 className="h-12 w-12 text-purple-400/30 transform rotate-12" />
        </div>
        <div className="absolute top-1/3 right-16 transform animate-float-3d-delay">
          <Zap className="h-10 w-10 text-cyan-400/30 transform -rotate-12" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile image with 3D effect */}
          <div className="mb-8 relative inline-block">
            {/* Glowing ring effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1 transform hover:scale-110 hover:rotate-12 transition-all duration-500 relative perspective-1000">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text border border-purple-400/30 backdrop-blur-sm">
                NV
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-spin-slow"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-fade-in animate-gradient-x">
            Mobile App Developer
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Crafting exceptional mobile experiences with cutting-edge technology. 
            Specializing in <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-semibold">React Native</span>, 
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold"> Flutter</span>, and native development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-delay-2">
            <button className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl flex items-center space-x-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span className="relative z-10">Download Resume</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Naimish-Kumar" className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-purple-500/30">
                <Github className="h-6 w-6 text-gray-300 group-hover:text-purple-400 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/naimish-kumar-verma-9b88731b9/" className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-cyan-500/30">
                <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="vnaimishkumar@gmail.com" className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-purple-500/30">
                <Mail className="h-6 w-6 text-gray-300 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          <div className="animate-bounce mt-16">
            <a href="#about" className="inline-block p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 border border-purple-500/30 group">
              <ArrowDown className="h-6 w-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;