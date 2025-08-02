import React from 'react';
import { Heart, ArrowUp, Smartphone, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 relative overflow-hidden border-t border-purple-500/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-purple-400/30 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-cyan-400/30 rounded-full animate-float-delay"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-purple-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-sm animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-800 p-2 rounded-full border border-purple-500/30">
                    <Smartphone className="h-6 w-6 text-cyan-400 transform rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                    <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-purple-400 animate-spin" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Naimish.dev
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Crafting exceptional mobile experiences with cutting-edge technology. 
                Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                {['Github', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="relative w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-gray-700/50 hover:border-purple-500/30 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <span className="relative text-sm text-gray-300 group-hover:text-white transition-colors">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 hover:translate-x-1 inline-block relative group"
                    >
                      <span className="absolute -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-purple-400">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Services</h3>
              <ul className="space-y-2">
                {[
                  'Mobile App Development',
                  'React Native',
                  'Flutter Development',
                  'UI/UX Design',
                  'App Store Optimization'
                ].map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-200 cursor-default">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-purple-500 animate-pulse" />
              <span>by Naimish Kumar</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 NaimishDev. All rights reserved.
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 hover:rotate-12 transition-all duration-500 z-50 border border-purple-400/30 backdrop-blur-sm group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <ArrowUp className="relative h-5 w-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;