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
               <a href="yaogaga520@gmail.com" className="text-xl text-white hover:text-indigo-400">yaogaga520@gmail.com</a>
             </div>
             <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
               <h4 className="text-gray-500 uppercase text-xs tracking-wider mb-2">Socials</h4>
               <div className="flex gap-4 text-white">
                 <a href="https://x.com/Emma_yaogaga" className="hover:text-indigo-400 transition-colors">Twitter</a>
                 <a href="https://www.linkedin.com/in/jiabao-yao-46287a287/" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
                 <a href="https://github.com/JiabaoYao" className="hover:text-indigo-400 transition-colors">GitHub</a>
               </div>
             </div>
          </div>

          <form 
            className="space-y-6 bg-gray-800/30 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50"
            action="https://formspree.io/f/xldbzoqn"
            method="POST"
            data-form
          >
             <div>
               <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
               <input id="name" type="text" name="name" className="w-full bg-gray-900/50 border-b border-gray-600 py-3 text-white focus:border-indigo-500 focus:outline-none transition-colors" placeholder="Jane Doe" required />
             </div>
             <div>
               <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
               <input id="email" type="email" name="email" className="w-full bg-gray-900/50 border-b border-gray-600 py-3 text-white focus:border-indigo-500 focus:outline-none transition-colors" placeholder="jane@example.com" required />
             </div>
             <div>
               <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Project Details</label>
               <textarea id="message" name="message" className="w-full bg-gray-900/50 border-b border-gray-600 py-3 text-white focus:border-indigo-500 focus:outline-none transition-colors h-32 resize-none" placeholder="I have an idea for..." required />
             </div>
             <button type="submit" className="bg-white text-gray-900 font-bold px-10 py-4 rounded-full hover:bg-indigo-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
               Send Inquiry
             </button>
          </form>
        </div>

        {/* Map Visualization */}
        <div className="relative h-[660px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
          {/* Using a placeholder image styled to look like a dark mode map */}
          <div className="relative h-[660px] rounded-2xl overflow-hidden opacity-90">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.882385837854!2d-78.79209882381404!3d43.00181107114057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d373d2261b049f%3A0x2868694d4fc4f56f!2sUniversity%20at%20Buffalo!5e0!3m2!1sen!2sus!4v1747452470985!5m2!1sen!2sus"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="absolute inset-0 bg-indigo-900/20 pointer-events-none"></div>
          
          {/* Animated Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
             <div className="relative">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
             </div>
             <div className="mt-4 bg-gray-900/90 backdrop-blur px-4 py-2 rounded-lg border border-gray-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
               <p className="text-white text-sm font-bold">Buffalo, NY</p>
               <p className="text-xs text-gray-400">Open communication</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;