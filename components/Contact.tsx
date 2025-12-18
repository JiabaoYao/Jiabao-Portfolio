import React, { useState } from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-8 max-w-7xl mx-auto h-full min-h-screen flex flex-col relative z-10">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-gray-400 text-xl max-w-2xl">
          Interested in working together? Let's connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1">
        {/* Contact Info & Form */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
               <h4 className="text-gray-500 uppercase text-xs tracking-wider mb-2">Email</h4>
               <a href="mailto:hello@jiabaoyao.com" className="text-xl text-white hover:text-indigo-400">hello@jiabaoyao.com</a>
             </div>
             <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
               <h4 className="text-gray-500 uppercase text-xs tracking-wider mb-2">Socials</h4>
               <div className="flex gap-4 text-white">
                 <a href="#" className="hover:text-indigo-400 transition-colors">Twitter</a>
                 <a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
                 <a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a>
               </div>
             </div>
          </div>

          <form className="space-y-6 bg-gray-800/30 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50">
             <div>
               <label className="block text-sm text-gray-400 mb-2">Name</label>
               <input type="text" className="w-full bg-gray-900/50 border-b border-gray-600 py-3 text-white focus:border-indigo-500 focus:outline-none transition-colors" placeholder="Jane Doe" />
             </div>
             <div>
               <label className="block text-sm text-gray-400 mb-2">Email</label>
               <input type="email" className="w-full bg-gray-900/50 border-b border-gray-600 py-3 text-white focus:border-indigo-500 focus:outline-none transition-colors" placeholder="jane@example.com" />
             </div>
             <div>
               <label className="block text-sm text-gray-400 mb-2">Project Details</label>
               <textarea className="w-full bg-gray-900/50 border-b border-gray-600 py-3 text-white focus:border-indigo-500 focus:outline-none transition-colors h-32 resize-none" placeholder="I have an idea for..." />
             </div>
             <button className="bg-white text-gray-900 font-bold px-10 py-4 rounded-full hover:bg-indigo-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
               Send Inquiry
             </button>
          </form>
        </div>

        {/* Map Visualization */}
        <div className="relative h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
          {/* Using a placeholder image styled to look like a dark mode map */}
          <img 
            src="https://picsum.photos/800/800?grayscale&blur=2" 
            alt="Map Location" 
            className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
          />
          
          <div className="absolute inset-0 bg-indigo-900/20 pointer-events-none"></div>
          
          {/* Animated Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
             <div className="relative">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
             </div>
             <div className="mt-4 bg-gray-900/90 backdrop-blur px-4 py-2 rounded-lg border border-gray-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
               <p className="text-white text-sm font-bold">San Francisco, CA</p>
               <p className="text-xs text-gray-400">Open for coffee & code</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;