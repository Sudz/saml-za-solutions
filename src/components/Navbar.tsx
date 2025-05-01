
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section if on homepage
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      return;
    }

    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`bg-white ${scrolled ? 'shadow-md' : 'shadow-sm'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo className={`h-8 w-auto transition-transform duration-300 ${scrolled ? 'scale-90' : ''}`} />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-saml-600 font-medium transition-colors duration-200">
              Home
            </Link>
            {location.pathname === '/' ? (
              <>
                <button 
                  onClick={() => scrollToSection('data-flow-section')} 
                  className="text-gray-700 hover:text-saml-600 font-medium transition-colors duration-200"
                >
                  Data Flow
                </button>
                <button 
                  onClick={() => scrollToSection('data-analytics-section')} 
                  className="text-gray-700 hover:text-saml-600 font-medium transition-colors duration-200"
                >
                  Analytics
                </button>
                <button 
                  onClick={() => scrollToSection('platform-section')} 
                  className="text-gray-700 hover:text-saml-600 font-medium transition-colors duration-200"
                >
                  Platforms
                </button>
              </>
            ) : null}
            <Link to="/services" className="text-gray-700 hover:text-saml-600 font-medium transition-colors duration-200">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-saml-600 font-medium transition-colors duration-200">
              Contact
            </Link>
            <Button 
              className="bg-saml-600 hover:bg-saml-700 text-white transition-all duration-200 transform hover:scale-105"
              onClick={() => window.open('https://github.com/gpt-omni/mini-omni', '_blank')}
            >
              View on GitHub
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-saml-600 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saml-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {location.pathname === '/' ? (
              <>
                <button
                  onClick={() => scrollToSection('data-flow-section')}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saml-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  Data Flow
                </button>
                <button
                  onClick={() => scrollToSection('data-analytics-section')}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saml-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  Analytics
                </button>
                <button
                  onClick={() => scrollToSection('platform-section')}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saml-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  Platforms
                </button>
              </>
            ) : null}
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saml-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saml-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-saml-600 hover:bg-saml-700 text-white transition-all duration-200 transform hover:scale-105"
                onClick={() => window.location.href = 'mailto:sudhir@saml.co.za'}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
