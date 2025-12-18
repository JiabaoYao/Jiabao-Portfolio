import React, { useState } from 'react';
import { Project } from '../types';
import ImageEditor from './ImageEditor';

const projects: Project[] = [
  {
    id: 'ai-studio',
    title: 'AI Image Studio',
    category: 'Generative AI',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    description: 'A React-based tool using Gemini 2.5 Flash Image to edit images via text prompts.',
    route: '/portfolio/ai-studio'
  },
  {
    id: 'ecommerce',
    title: 'Neon Shop',
    category: 'E-Commerce',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    description: 'A modern e-commerce platform with real-time inventory and 3D product previews.',
    link: '#'
  },
  {
    id: 'dashboard',
    title: 'Analytics Pro',
    category: 'Dashboard',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    description: 'High-performance data visualization dashboard using D3 and React.',
    link: '#'
  }
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-20 px-8 max-w-7xl mx-auto relative z-10 min-h-screen">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-6">Portfolio</h1>
        <p className="text-gray-400 text-xl max-w-2xl">
          A collection of projects exploring the boundaries of web technology and AI.
        </p>
      </div>

      {/* If the AI Studio project is selected, show the tool */}
      {selectedProject === 'ai-studio' ? (
        <div className="animate-fade-in-up">
           <button 
             onClick={() => setSelectedProject(null)}
             className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors"
           >
             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
             Back to Gallery
           </button>
           <ImageEditor />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-800/60"
              onClick={() => project.id === 'ai-studio' ? setSelectedProject('ai-studio') : null}
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                 {/* Image with zoom effect */}
                 <img 
                   src={project.imageUrl} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-black font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.id === 'ai-studio' ? 'Launch Tool' : 'View Project'}
                    </span>
                 </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                   <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                   <p className="text-gray-500 text-sm mt-1">{project.category}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed px-2 pb-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;