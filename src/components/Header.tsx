import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-purple-500/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative bg-gray-900 p-2 rounded-full border border-purple-500/30">
                <Smartphone className="h-6 w-6 text-cyan-400 transform rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-purple-400 animate-spin" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Naimish.dev
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group px-4 py-2 rounded-lg hover:bg-purple-500/10"
              >
                {item.label}
                <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-8"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors bg-gray-800/50 rounded-lg backdrop-blur-sm border border-purple-500/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl shadow-2xl border-t border-purple-500/20">
            <div className="px-4 py-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium hover:bg-purple-500/10 rounded-lg px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;