import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Experience', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <Link to="/" className="text-2xl font-bold tracking-tighter text-white hover:text-indigo-400 transition-colors">
        JIABAO.
      </Link>
      <div className="flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
              location.pathname === item.path || (item.path === '/work' && location.pathname.startsWith('/work')) || (item.path === '/portfolio' && location.pathname.startsWith('/portfolio'))
                ? 'text-indigo-400' 
                : 'text-gray-400'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;