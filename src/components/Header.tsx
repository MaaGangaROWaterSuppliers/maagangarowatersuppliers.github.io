import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname === '/documentation'
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="assets/maagangarowater.jpg"
            alt="Maa Ganga RO" 
            className="h-12 w-12 mr-2"
          />
          <span className={`font-bold text-xl transition-colors ${
            isScrolled || location.pathname === '/documentation' ? 'text-blue-600' : 'text-white'
          }`}>
            Maa Ganga RO
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {location.pathname === '/' ? (
              ['Home', 'Services', 'Areas', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className={`font-medium transition-colors hover:text-blue-500 ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))
            ) : (
              <li>
                <Link 
                  to="/" 
                  className="font-medium text-gray-700 transition-colors hover:text-blue-500"
                >
                  Back to Home
                </Link>
              </li>
            )}
            <li>
              <Link 
                to="/documentation"
                className={`font-medium transition-colors hover:text-blue-500 ${
                  isScrolled || location.pathname === '/documentation' ? 'text-gray-700' : 'text-white'
                }`}
              >
                Docs
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button className={`p-2 ${isScrolled || location.pathname === '/documentation' ? 'text-blue-600' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;