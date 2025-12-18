import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Software Engineer & Developer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Professional and modern design and development of the highest quality.",
      // Icon: A mini browser window with typing code lines
      icon: (
        <div className="relative w-12 h-12 bg-gray-800 rounded-xl border border-indigo-500/30 flex items-center justify-center overflow-hidden group-hover:border-indigo-400 transition-colors shadow-lg shadow-indigo-500/10">
          <div className="absolute top-0 w-full h-3.5 bg-gray-700/50 border-b border-gray-600/50 flex items-center px-1.5 gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          </div>
          <div className="mt-3 space-y-1.5 w-7">
             <div className="h-1 w-full bg-indigo-400/80 rounded-full animate-pulse"></div>
             <div className="h-1 w-2/3 bg-indigo-400/60 rounded-full animate-pulse delay-75"></div>
             <div className="h-1 w-4/5 bg-indigo-400/70 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      )
    },
    {
      title: "Software Development",
      description: "Professional design and development of architectures, algorithms, and detection mechanisms.",
      // Icon: Abstract floating layers representing architecture
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
           <div className="absolute w-8 h-8 border-2 border-purple-500/30 rounded transform rotate-45 animate-[spin_8s_linear_infinite]"></div>
           <div className="absolute w-8 h-8 border-2 border-purple-400/50 rounded transform rotate-12 animate-[spin_12s_linear_reverse_infinite]"></div>
           <div className="w-4 h-4 bg-purple-500 rounded-sm shadow-[0_0_10px_rgba(168,85,247,0.5)] animate-bounce"></div>
        </div>
      )
    },
    {
      title: "ML-Powered Pricing Tool",
      description: "High-quality price estimation using machine learning.",
      // Icon: A network graph with pulsing nodes
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
           <svg className="absolute inset-0 w-full h-full text-pink-500/20" viewBox="0 0 48 48">
              <line x1="12" y1="12" x2="36" y2="36" stroke="currentColor" strokeWidth="1.5" />
              <line x1="36" y1="12" x2="12" y2="36" stroke="currentColor" strokeWidth="1.5" />
              <line x1="24" y1="12" x2="24" y2="36" stroke="currentColor" strokeWidth="1.5" />
           </svg>
           {/* Nodes */}
           <div className="absolute top-2 left-2 w-2.5 h-2.5 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50 animate-ping"></div>
           <div className="absolute top-2 left-2 w-2.5 h-2.5 bg-pink-500 rounded-full"></div>
           
           <div className="absolute bottom-2 right-2 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
           <div className="absolute top-2 right-2 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-75"></div>
           <div className="absolute bottom-2 left-2 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-150"></div>
           
           {/* Central Brain/Core */}
           <div className="relative w-4 h-4 bg-pink-600 rounded border border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.6)] z-10 animate-float-slow"></div>
        </div>
      )
    },
    {
      title: "Pattern Recognition",
      description: "Sign Language Recognition at the Word Level Using WLASL.",
      // Icon: A targeting reticle with a laser scan effect
      icon: (
        <div className="relative w-12 h-12 bg-gray-800/50 rounded-lg border border-cyan-500/30 overflow-hidden group-hover:border-cyan-400 transition-colors">
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-8 border-2 border-cyan-500/20 rounded-full"></div>
              <div className="absolute w-1 h-1 bg-cyan-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
           </div>
           
           {/* Corner markers */}
           <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-400"></div>
           <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-400"></div>
           <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-cyan-400"></div>
           <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-400"></div>
           
           {/* Scanning Laser */}
           <div className="absolute w-full h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-scan z-10"></div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-20 max-w-7xl mx-auto pt-20 relative z-10">
        <h2 className="text-indigo-400 font-medium tracking-widest mb-4 uppercase text-sm">Portfolio</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hello, I'm <br />
          <span className="text-white">Jiabao Yao.</span>
        </h1>
        <div className="h-12 md:h-20 mb-8 flex items-center">
           <span className={`text-2xl md:text-4xl text-gray-400 font-light ${isTyping ? 'animate-typing pr-2' : ''}`}>
             {text}
           </span>
        </div>
        
        <div className="flex gap-4">
          <Link to="/portfolio" className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
            View Work
          </Link>
          <Link to="/contact" className="border border-gray-600 text-white px-8 py-3 rounded-full font-bold hover:border-white transition-colors">
            Contact Me
          </Link>
        </div>
        
        <div className="absolute bottom-10 right-10 md:right-20 animate-bounce">
          <span className="text-gray-500 text-sm">Scroll Down</span>
        </div>
      </section>

      {/* What I'm Doing Section */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto w-full relative z-10">
         <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 blur-3xl rounded-full -z-10" />
         
         <h2 className="text-4xl font-bold mb-16 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              What I'm Doing
            </span>
            <span className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
         </h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <div 
                    key={index} 
                    className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 hover:from-indigo-500 hover:to-purple-500 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/20"
                >
                    <div className="relative h-full bg-gray-900 rounded-2xl p-8 overflow-hidden">
                        {/* Abstract BG Shape */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-indigo-500/10 transition-colors duration-500"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                            <div className="p-4 bg-gray-800 rounded-xl shadow-inner group-hover:scale-105 transition-transform duration-300 ring-1 ring-white/10 shrink-0">
                                 {service.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Hero;