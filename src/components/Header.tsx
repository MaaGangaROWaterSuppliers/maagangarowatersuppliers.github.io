import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
=======
import { Droplets } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
>>>>>>> 9fa226f1fbaf1e04cf2af06be70409b7cd038cbf

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
<<<<<<< HEAD
        isScrolled || location.pathname === '/documentation'
=======
        isScrolled 
>>>>>>> 9fa226f1fbaf1e04cf2af06be70409b7cd038cbf
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
<<<<<<< HEAD
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
=======
        <div className="flex items-center">
          <Droplets className="h-8 w-8 text-blue-600 mr-2" />
          <span className={`font-bold text-xl transition-colors ${
            isScrolled ? 'text-blue-600' : 'text-white'
          }`}>
            Maa Ganga RO
          </span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'Services', 'Areas', 'Pricing', 'Contact'].map((item) => (
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
            ))}
>>>>>>> 9fa226f1fbaf1e04cf2af06be70409b7cd038cbf
          </ul>
        </nav>

        <div className="md:hidden">
<<<<<<< HEAD
          <button className={`p-2 ${isScrolled || location.pathname === '/documentation' ? 'text-blue-600' : 'text-white'}`}>
=======
          <button className={`p-2 ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
>>>>>>> 9fa226f1fbaf1e04cf2af06be70409b7cd038cbf
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