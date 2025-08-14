import React from 'react';
import { Cpu, Smartphone, Globe, Palette, Zap } from 'lucide-react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const skillCategories = {
    mobile: { title: 'Mobile Development', color: 'purple', icon: Smartphone },
    frontend: { title: 'Frontend Development', color: 'cyan', icon: Globe },
    backend: { title: 'Backend Development', color: 'purple', icon: Cpu },
    design: { title: 'Design & Tools', color: 'cyan', icon: Palette }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'from-purple-500 to-purple-600 bg-purple-500/20 text-purple-300 border-purple-400/30',
      cyan: 'from-cyan-500 to-cyan-600 bg-cyan-500/20 text-cyan-300 border-cyan-400/30'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-2xl animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {Object.entries(skillCategories).map(([category, config]) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              const colorClasses = getColorClasses(config.color);
              const IconComponent = config.icon;
              
              return (
                <div key={category} className="space-y-6 relative">
                  {/* 3D card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 transform rotate-1 hover:rotate-0 transition-transform duration-500"></div>
                  
                  <div className="relative p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${colorClasses.split(' ').slice(0, 2).join(' ')} border ${colorClasses.split(' ').slice(4).join(' ')}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span>
                    {config.title}
                    </span>
                  </h3>
                  
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`font-medium text-white group-hover:text-transparent group-hover:bg-gradient-to-r ${config.color === 'purple' ? 'group-hover:from-purple-400 group-hover:to-purple-300' : 'group-hover:from-cyan-400 group-hover:to-cyan-300'} group-hover:bg-clip-text transition-all duration-300`}>
                            {skill.name}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${colorClasses.split(' ').slice(2).join(' ')}`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="relative">
                          <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-gray-600/30">
                            <div
                              className={`h-full bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} rounded-full transform origin-left transition-all duration-1000 ease-out hover:scale-105 relative overflow-hidden`}
                              style={{
                                width: `${skill.level}%`,
                                animation: 'fillBar 2s ease-out forwards'
                              }}
                            >
                              {/* Animated shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shine"></div>
                            </div>
                          </div>
                          
                          {/* Animated glow effect */}
                          <div
                            className={`absolute top-0 h-full bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} rounded-full opacity-20 animate-pulse blur-sm`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional skills showcase */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center space-x-2">
              <Zap className="h-6 w-6 text-purple-400" />
              <span>
              Additional Technologies
              </span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Kotlin', 'Swift', 'Android', 'Docker', 'React-native', 'Laravel',
                'Git', 'Bitbucket', 'Figma', 'Adobe XD', 'Sketch', 'Firebase'
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-gray-800/50 backdrop-blur-xl rounded-full shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 group border border-gray-700/50 hover:border-purple-500/30 relative overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  <span className="relative font-medium text-gray-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;