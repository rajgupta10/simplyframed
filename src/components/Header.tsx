import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-pastel-pink/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
              <img 
                src="/Simply framed.png" 
                alt="Simply Framed Logo" 
                className="h-10 w-10 object-contain"
              />
              <h1 className="text-xl sm:text-2xl font-serif font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
                Simply Framed
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium text-sm xl:text-base ${
                isActive('/') 
                  ? 'text-pastel-purple' 
                  : 'text-neutral-600 hover:text-pastel-purple'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/vector-art" 
              className={`transition-colors font-medium text-sm xl:text-base ${
                isActive('/vector-art') 
                  ? 'text-pastel-purple' 
                  : 'text-neutral-600 hover:text-pastel-purple'
              }`}
            >
              Vector Art
            </Link>
            <Link 
              to="/invitations" 
              className={`transition-colors font-medium text-sm xl:text-base ${
                isActive('/invitations') 
                  ? 'text-pastel-purple' 
                  : 'text-neutral-600 hover:text-pastel-purple'
              }`}
            >
              Invitations
            </Link>
            <Link 
              to="/free-samples" 
              className={`transition-colors font-medium text-sm xl:text-base ${
                isActive('/free-samples') 
                  ? 'text-pastel-purple' 
                  : 'text-neutral-600 hover:text-pastel-purple'
              }`}
            >
              Free Samples
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-medium text-sm xl:text-base ${
                isActive('/about') 
                  ? 'text-pastel-purple' 
                  : 'text-neutral-600 hover:text-pastel-purple'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors font-medium text-sm xl:text-base ${
                isActive('/contact') 
                  ? 'text-pastel-purple' 
                  : 'text-neutral-600 hover:text-pastel-purple'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="hidden lg:flex items-center">
            <button className="text-neutral-500 hover:text-pastel-purple transition-colors p-2">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-600 hover:text-neutral-800 transition-colors p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-pastel-pink/20 bg-white/95 backdrop-blur-md">
            <div className="pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-3 transition-colors text-base ${
                  isActive('/') 
                    ? 'text-pastel-purple bg-pastel-purple/10' 
                    : 'text-neutral-600 hover:text-pastel-purple hover:bg-pastel-purple/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/vector-art" 
                className={`block px-3 py-3 transition-colors text-base ${
                  isActive('/vector-art') 
                    ? 'text-pastel-purple bg-pastel-purple/10' 
                    : 'text-neutral-600 hover:text-pastel-purple hover:bg-pastel-purple/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Vector Art
              </Link>
              <Link 
                to="/invitations" 
                className={`block px-3 py-3 transition-colors text-base ${
                  isActive('/invitations') 
                    ? 'text-pastel-purple bg-pastel-purple/10' 
                    : 'text-neutral-600 hover:text-pastel-purple hover:bg-pastel-purple/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Invitations
              </Link>
              <Link 
                to="/free-samples" 
                className={`block px-3 py-3 transition-colors text-base ${
                  isActive('/free-samples') 
                    ? 'text-pastel-purple bg-pastel-purple/10' 
                    : 'text-neutral-600 hover:text-pastel-purple hover:bg-pastel-purple/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Free Samples
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-3 transition-colors text-base ${
                  isActive('/about') 
                    ? 'text-pastel-purple bg-pastel-purple/10' 
                    : 'text-neutral-600 hover:text-pastel-purple hover:bg-pastel-purple/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-3 transition-colors text-base ${
                  isActive('/contact') 
                    ? 'text-pastel-purple bg-pastel-purple/10' 
                    : 'text-neutral-600 hover:text-pastel-purple hover:bg-pastel-purple/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-pastel-pink/20">
              <div className="flex items-center justify-center">
                <button className="text-neutral-500 hover:text-pastel-purple transition-colors p-3">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;