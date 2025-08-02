import React from 'react';
import { Code, Users, Award, Coffee, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+', color: 'purple' },
    { icon: Users, label: 'Happy Clients', value: '30+', color: 'cyan' },
    { icon: Award, label: 'Years Experience', value: '5+', color: 'purple' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞', color: 'cyan' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate mobile developer with a love for creating intuitive, performant applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-purple-400" />
                <span>
                  Hello! I'm Alex Developer
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                With over 5 years of experience in mobile app development, I specialize in creating
                cross-platform applications that deliver exceptional user experiences. My journey
                started with native iOS development and has evolved to include React Native, Flutter,
                and cutting-edge technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest
                industry trends. Whether it's implementing complex animations, integrating APIs, or
                optimizing performance, I approach each project with attention to detail and a
                commitment to excellence.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Team Leadership', 'Agile Development', 'UI/UX Focus'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* 3D floating card with enhanced effects */}
              <div className="relative perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-xl rounded-2xl p-8 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 border border-purple-500/30 transform-3d">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300 border border-cyan-500/20">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                          <Code className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Clean Code</h4>
                          <p className="text-gray-300 text-sm">Maintainable & scalable</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-full flex items-center justify-center border border-cyan-400/30 backdrop-blur-sm">
                          <Users className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">User-Centric</h4>
                          <p className="text-gray-300 text-sm">Focused on user experience</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                          <Award className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Quality First</h4>
                          <p className="text-gray-300 text-sm">Attention to detail</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group relative">
                  <div className="relative perspective-1000">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-cyan-500 to-cyan-600'} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.color === 'purple' ? 'from-purple-600 to-purple-700' : 'from-cyan-600 to-cyan-700'} rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border ${stat.color === 'purple' ? 'border-purple-400/30' : 'border-cyan-400/30'} backdrop-blur-sm transform-3d`}>
                      <Icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                    </div>
                  </div>
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color === 'purple' ? 'from-purple-400 to-purple-300' : 'from-cyan-400 to-cyan-300'} bg-clip-text text-transparent`}>{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;