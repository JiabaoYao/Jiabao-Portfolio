import React from 'react';

const workExperiences = [
  {
    role: "Software Development Engineer",
    company: "Huawei Technologies Co., Ltd",
    period: "2021 — 2024",
    achievements: [
      "Enhanced fault detection accuracy by 25% through optimized C/C++ modules and advanced logging mechanisms.",
      "Automated data export processes with Python, reducing manual effort by 30% and streamlining testing.",
      "Collaborated with cross-functional teams to design and deploy robust fault detection solutions, ensuring high system reliability and performance.",
      "Utilized Git, Shell Scripting, and Agile practices for streamlined development cycles."
    ]
  },
  {
    role: "Software Engineer Intern (Fullstack)",
    company: "", // Implied or Generic
    period: "2025 — 2025",
    achievements: [
      "Implemented resume analysis, job match, and recommendation pages, handling both frontend rendering and backend data fetching and processing via NestJS and Prisma.",
      "Integrated real-time data updates by connecting the frontend with a PostgreSQL database and ensuring smooth API communication.",
      "Optimized for responsiveness, scalability, and maintainability across all components, delivering a seamless user experience."
    ]
  }
];

// Icon data extracted from your specific skills list
const skillIcons = [
  // Programming
  { name: 'C/C++', color: '#00599C', path: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,7H9.5V9.5H7V11H9.5V13.5H11V11H13.5V9.5H11V7M17,7H15.5V9.5H13V11H15.5V13.5H17V11H19.5V9.5H17V7' }, // Custom C++ representation
  { name: 'Python', color: '#3776AB', path: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18C8.69,18 6,15.31 6,12C6,8.69 8.69,6 12,6Z M10,8H14V10H10V8M10,14H14V16H10V14' }, // Simplified
  { name: 'SQL', color: '#003B57', bg: 'white', path: 'M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z' },
  { name: 'Go', color: '#00ADD8', path: 'M2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12M6,12C6,9 8.5,6.5 11.5,6.5H12.5C15.5,6.5 18,9 18,12C18,15 15.5,17.5 12.5,17.5H11.5C8.5,17.5 6,15 6,12M8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12Z' },
  { name: 'MATLAB', color: '#e16737', path: 'M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M12,4L8,12L12,20L16,12L12,4M5,12H19M12,5V19' }, // Abstract grid
  { name: 'Javascript', color: '#F7DF1E', path: 'M3,3H21V21H3V3M5,5V19H19V5H5M13.4,15C13.6,15.6 14,16.1 14.6,16.4C15.2,16.7 15.9,16.7 16.5,16.5C17.1,16.3 17.5,15.8 17.5,15.2V13H16V15C16,15.2 15.9,15.3 15.7,15.4C15.5,15.5 15.3,15.5 15.1,15.4C14.9,15.3 14.8,15.2 14.8,15H13.4M9.5,12C8.6,12 8,12.7 8,13.5V15.5C8,16.3 8.6,17 9.5,17H11.5V15.5H9.5V13.5H11.5V12H9.5Z' },

  // Web
  { name: 'HTML', color: '#E34F26', path: 'M12,17.56L16.07,16.43L16.62,10.33H12V8.16H16.82L17.22,3.67H6.78L7.17,8.16H10.19L10.05,10.33H7.38L7.69,13.69L12,14.89V17.56M4.06,2L12,2L19.94,2L18.13,22L12,22L5.87,22L4.06,2Z' },
  { name: 'CSS', color: '#1572B6', path: 'M12,17.56L16.07,16.43L16.62,10.33H12V8.16H16.82L17.22,3.67H6.78L7.17,8.16H10.19L10.05,10.33H7.38L7.69,13.69L12,14.89V17.56M4.06,2L12,2L19.94,2L18.13,22L12,22L5.87,22L4.06,2Z' }, // Using similar shield shape
  { name: 'React', color: '#61DAFB', path: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4M12,7C10.5,7 9.15,7.66 8.35,8.7L10.35,10.7C10.6,10.27 11.23,9.8 12,9.8C13.2,9.8 14.2,10.8 14.2,12C14.2,13.2 13.2,14.2 12,14.2C11.23,14.2 10.6,13.73 10.35,13.3L8.35,15.3C9.15,16.34 10.5,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z' },
  { name: 'Streamlit', color: '#FF4B4B', path: 'M12,2L2,22H22L12,2M12,6.5L17.5,18H6.5L12,6.5Z' }, // Simplified Crown/Triangle

  // Backend
  { name: 'Node.js', color: '#339933', path: 'M12,2L3,7V17L12,22L21,17V7L12,2M16,16L12,18L8,16V11L12,13L16,11V16Z' },
  { name: 'NestJS', color: '#E0234E', path: 'M12 2L2 22H22L12 2M12 6.5L17.5 18H6.5L12 6.5Z' },
  { name: 'Prisma', color: '#2D3748', bg: 'white', path: 'M12,2L2,22H22L12,2M12,6L17,18H7L12,6Z' }, // Triangle Prism
  { name: 'PostgreSQL', color: '#336791', path: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18C8.69,18 6,15.31 6,12C6,8.69 8.69,6 12,6Z' },
  { name: 'Docker', color: '#2496ED', path: 'M2,11V16H22V11H2M2,18H22V20H2V18M4,4H8V9H4V4M10,4H14V9H10V4M16,4H20V9H16V4' }, // Simplified Container Ship

  // ML
  { name: 'PyTorch', color: '#EE4C2C', path: 'M12,2L2,7V17L12,22L22,17V7L12,2M12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15Z' }, // Simplified Flame/Gem
  { name: 'Scikit-Learn', color: '#F7931E', path: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M11,7H13V17H11V7M8,11H16V13H8V11Z' }, // Abstract
  { name: 'Spark', color: '#E25A1C', path: 'M12,2L14.5,9H22L16,14L18.5,21L12,16.5L5.5,21L8,14L2,9H9.5L12,2Z' }, // Star/Spark
  { name: 'Pandas', color: '#150458', bg: 'white', path: 'M4,4H10V10H4V4M14,4H20V10H14V4M4,14H10V20H4V14M14,14H20V20H14V14' }, // Abstract Blocks
  { name: 'NumPy', color: '#013243', bg: 'white', path: 'M4,4H20V20H4V4M8,8V16H16V8H8Z' }, // Abstract Box

  // DevOps
  { name: 'Git', color: '#F05032', path: 'M12,2L2,12L12,22L22,12L12,2M12,4L20,12L12,20L4,12L12,4M14,10H12V12H14V14H12V16H10V14H8V12H10V10H8V8H10V6H12V8H14V10Z' },
  { name: 'Linux', color: '#FCC624', path: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,6C13.66,6 15,7.34 15,9C15,10.66 13.66,12 12,12C10.34,12 9,10.66 9,9C9,7.34 10.34,6 12,6M12,18C9.5,18 7.5,16 7.5,13.5H16.5C16.5,16 14.5,18 12,18Z' }, // Tux simplified
  { name: 'CI/CD', color: '#4CAF50', path: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M15,9L12.5,13.5L15,18H10L12.5,13.5L10,9H15Z' }, // Loop/Cycle
];

const Work: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-8 max-w-7xl mx-auto relative z-10 min-h-screen">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-6">Experience</h1>
        <p className="text-gray-400 text-xl max-w-2xl">
          My professional journey and technical expertise.
        </p>
      </div>

      {/* Work Experience Section */}
      <section className="mt-10 max-w-5xl mx-auto mb-40">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="w-2 h-10 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)]"></span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-orange-500">
            Work Experience
          </span>
        </h2>
        
        <div className="space-y-16 border-l-2 border-gray-800 pl-8 ml-3 relative">
          {workExperiences.map((exp, index) => (
            <div key={index} className="relative group">
               {/* Timeline Node */}
               <span className="absolute -left-[43px] top-2 w-6 h-6 rounded-full bg-gray-900 border-2 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)] group-hover:scale-125 group-hover:bg-amber-500 transition-all duration-300"></span>
               
               <div className="bg-gray-800/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all duration-300 hover:bg-gray-800/40">
                 <h3 className="text-2xl font-bold text-white mb-1">
                   {exp.role} 
                   {exp.company && <span className="text-amber-500"> — {exp.company}</span>}
                 </h3>
                 <p className="text-amber-400/80 font-mono text-sm mb-6 inline-block bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                   {exp.period}
                 </p>
                 <ul className="space-y-4 text-gray-400 leading-relaxed">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-amber-500/60 rounded-full shrink-0 group-hover:bg-amber-400 transition-colors"></span>
                        <span className="group-hover:text-gray-300 transition-colors">{item}</span>
                      </li>
                    ))}
                 </ul>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Icons Section */}
      <section className="max-w-6xl mx-auto relative text-center">
         {/* Background Glow */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent blur-3xl -z-10" />
         
         <div className="inline-block px-4 py-1 rounded-full bg-gray-800/80 text-gray-300 text-sm mb-6 border border-gray-700">
            Skills
         </div>

         <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-16 max-w-2xl mx-auto leading-relaxed">
            The skills, tools and technologies I am really good at:
         </h2>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-6">
            {skillIcons.map((skill, index) => (
               <div key={index} className="flex flex-col items-center group">
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-amber-500/30 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] mb-4 overflow-hidden relative"
                  >
                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <svg 
                        className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110" 
                        viewBox="0 0 24 24"
                        style={{ fill: skill.bg ? 'black' : skill.color }}
                     >
                        {skill.bg && <circle cx="12" cy="12" r="11" fill={skill.bg} />}
                        <path d={skill.path} />
                     </svg>
                  </div>
                  <span className="text-gray-400 font-medium text-sm sm:text-base group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Work;