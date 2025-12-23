import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white selection:bg-indigo-500 selection:text-white relative">
        <AnimatedBackground />
        <Navbar />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectId" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-800 mt-20 relative z-10">
          <p>© 2025 Jiabao Yao. Built with React, Tailwind & Gemini AI.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;