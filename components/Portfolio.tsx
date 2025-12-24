import React, { useState } from 'react';
import { Project } from '../types';
import ImageEditor from './ImageEditor';
import { useNavigate } from 'react-router-dom';

const projects: Project[] = [
  {
    id: 'used-car-price-prediction-model',
    title: 'Used Car Price Prediction',
    category: 'Model',
    imageUrl: '/images/used_car_code.png',
    description: 'A model that predicts used car prices and evaluates the performance of various machine learning methods.',
    link: "https://github.com/montage0921/CSE587-Project-UsedCarPricePrediction/tree/master"
  },
  {
    id: 'sign-language-recognition',
    title: 'Sign Language Recognition',
    category: 'Model',
    imageUrl: '/images/openpose.jpg',
    description: 'A sign language recognition model trained on the WLASL dataset.',
    link: 'https://github.com/JiabaoYao/Sign-Language-Recognition'
  },
  {
    id: 'movie-database',
    title: 'Movie Database',
    category: 'Database',
    imageUrl: '/images/supabase.png',
    description: 'A movie database built using data collected from IMDb and deployed on Supabase.',
    link: 'https://supabase.com/dashboard/project/rnxnnqsyjcircloxrryq/database/schemas'
  },
  {
    id: 'movie-database-dashboard',
    title: 'Movie Database Dashboard',
    category: 'Dashboard',
    imageUrl: '/images/database.png',
    description: 'A movie database built using data collected from IMDb and deployed on Supabase.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiMTBkZjg1NmMtNDVhNy00YTFkLTk4NTctMzRmNTdhZWRhYmYzIiwidCI6Ijk2NDY0YThhLWY4ZWQtNDBiMS05OWUyLTVmNmI1MGEyMDI1MCIsImMiOjN9'
  },
  {
  id: 'used-car-price-prediction-dashboard',
  title: 'Used Car Price Prediction',
  category: 'Dashboard',
  imageUrl: '/images/used_car_pred.png',
  description: 'An end-to-end platform that predicts used car prices and evaluates the performance of various machine learning methods.',
  link: "https://cse587-project-usedcarpriceprediction.onrender.com/"
},
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const handleProjLink = (project: Project) => {
    if (project.link && project.link !== "#") {
      window.open(project.link);
    }
  }

  return (
    <div className="pt-24 pb-20 px-8 max-w-7xl mx-auto relative z-10 min-h-screen">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-6">Portfolio</h1>
        <p className="text-gray-400 text-xl max-w-2xl">
          A collection of projects exploring the boundaries of web technology and AI.
        </p>
      </div>

      {/* If the AI Studio project is selected, show the tool */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group cursor-pointer bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-800/60"
            onClick={() => handleProjLink(project)}
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
      
    </div>
  );
};

export default Portfolio;