import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate header on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="container">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
                            <img src="/assets/logo_discursa.png" alt="Discursa" className="h-24 w-auto" />
          </a>
          
          {/* Desktop Navigation */}
                      <nav className="hidden md:flex items-center space-x-12">
            <a href="#platform" className="text-gray-300 hover:text-white transition-all duration-300 text-lg font-medium">Platform</a>
            <a href="#use-cases" className="text-gray-300 hover:text-white transition-all duration-300 text-lg font-medium">Use Cases</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-all duration-300 text-lg font-medium">Pricing</a>
            <a href="#resources" className="text-gray-300 hover:text-white transition-all duration-300 text-lg font-medium">Resources</a>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 font-semibold transition-all duration-300">
              Schedule Demo
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white hover:scale-110 transition-transform duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-black/90 backdrop-blur-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <nav className="container py-6">
          <div className="flex flex-col space-y-4">
            <a href="#platform" className="text-gray-300 hover:text-white transition-colors py-2">Platform</a>
            <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors py-2">Use Cases</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors py-2">Pricing</a>
            <a href="#resources" className="text-gray-300 hover:text-white transition-colors py-2">Resources</a>
            <button className="btn-primary mt-4 w-full">
              Schedule Demo
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 