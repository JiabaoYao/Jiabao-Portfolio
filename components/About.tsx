import React from 'react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Software (Full Stack) Engineer Intern',
    company: 'Blinkle AI',
    period: '2025 - 2025',
    description: 'Developing scalable web applications and optimizing frontend performance.'
  },
  {
    id: '2',
    role: 'Software Engineer',
    company: 'Huawei Technologies Co., Ltd',
    period: '2021 - 2024',
    description: 'Professional design and development of architectures, algorithms, and detection mechanisms.'
  }
];

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-8 max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Col: Profile */}
        <div className="md:col-span-4">
          <div className="sticky top-28 bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
            <img 
              src="https://techhq.com/wp-content/uploads/2020/10/shutterstock_1096975310.png" 
              alt="Profile" 
              className="w-full aspect-square object-cover rounded-xl mb-6 shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            <h2 className="text-3xl font-bold mb-2">Jiabao Yao</h2>
            <p className="text-indigo-400 mb-6">Software Engineer</p>
            <p className="text-gray-400 leading-relaxed mb-6">
              I build fast, reliable software in C/C++ and Python and break complex problems until they behave. Currently specializing in AI—because making machines smarter is more fun than debugging humans.
            </p>
            
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Location</span>
                <span className="text-gray-300">Buffalo, NY</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2 pt-2">
                <span>Experience</span>
                <span className="text-gray-300">3+ Years</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2 pt-2">
                <span>Availability</span>
                <span className="text-green-400">Open to work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Resume & Socials */}
        <div className="md:col-span-8 space-y-16">
          {/* Experience Section */}
          <section className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-gray-800/50">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-indigo-500 block"></span>
              Experience
            </h3>
            <div className="space-y-12 border-l border-gray-800 pl-8 ml-3">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-900 border-2 border-indigo-500"></span>
                  <span className="text-sm text-indigo-400 font-mono mb-1 block">{exp.period}</span>
                  <h4 className="text-xl font-bold text-white mb-2">{exp.role}</h4>
                  <h5 className="text-gray-400 mb-3">{exp.company}</h5>
                  <p className="text-gray-500 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Media Section - Artistic Redesign */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl rounded-full -z-10" />
            
            <h3 className="text-3xl font-bold mb-10 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Connect Online
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* GitHub */}
              <a 
                href="https://github.com/JiabaoYao" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-500 hover:to-white transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-gray-500/20"
              >
                <div className="relative h-full bg-gray-900 rounded-2xl p-6 overflow-hidden">
                   {/* Abstract BG Shape */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-white/10 transition-colors duration-500"></div>
                   
                   <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-inner">
                           <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-gray-200">GitHub</h4>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400">Explore my repositories</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                   </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/jiabao-yao-46287a287/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 hover:from-blue-600 hover:to-cyan-400 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20"
              >
                <div className="relative h-full bg-gray-900 rounded-2xl p-6 overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                   
                   <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                           <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-200">LinkedIn</h4>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400">Professional Network</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                   </div>
                </div>
              </a>

               {/* Twitter */}
               <a 
                href="https://x.com/Emma_yaogaga" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 hover:from-sky-500 hover:to-indigo-500 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-sky-500/20"
              >
                <div className="relative h-full bg-gray-900 rounded-2xl p-6 overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-sky-500/20 transition-colors duration-500"></div>
                   
                   <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-inner">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-sky-200">Twitter</h4>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400">Thoughts & Updates</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                   </div>
                </div>
              </a>

               {/* Email */}
               <a 
                href="mailto:yaogaga520@gmail.com" 
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 hover:from-emerald-500 hover:to-teal-400 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/20"
              >
                <div className="relative h-full bg-gray-900 rounded-2xl p-6 overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
                   
                   <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-inner">
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-200">Email</h4>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400">yaogaga520@gmail.com</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                   </div>
                </div>
              </a>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;