import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'mobile' | 'web' | 'design'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'web', label: 'Web Apps' },
    { key: 'design', label: 'UI/UX' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-delay"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
              My Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my latest mobile and web applications
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as any)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  filter === filterOption.key
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-2xl transform scale-105 border border-purple-400/30'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:scale-105 border border-gray-600/30 backdrop-blur-sm'
                }`}
              >
                <Filter className="h-4 w-4" />
                <span>{filterOption.label}</span>
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:shadow-purple-500/25 transition-all duration-500 hover:-rotate-1 border border-gray-700/50 hover:border-purple-500/30 perspective-1000">
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Overlay actions */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="p-2 bg-purple-500/90 backdrop-blur-sm rounded-full hover:bg-purple-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-purple-300/30"
            >
              <ExternalLink className="h-4 w-4 text-white" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="p-2 bg-cyan-500/90 backdrop-blur-sm rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-cyan-300/30"
            >
              <Github className="h-4 w-4 text-white" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.category === 'mobile' ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30' :
            project.category === 'web' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' :
            'bg-pink-500/20 text-pink-300 border border-pink-400/30'
          }`}>
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600/30 backdrop-blur-sm hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-400/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600/30 backdrop-blur-sm">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;