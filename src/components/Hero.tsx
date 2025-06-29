import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative organic-bg overflow-hidden hero-doodles min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 relative z-10 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-pastel-blush/50 text-pastel-purple px-3 sm:px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm text-reveal">
                <Star className="h-4 w-4 fill-current" />
                <span>Premium Quality Vector Art</span>
              </div>
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-800 leading-tight">
                Beautiful{' '}
                <span className="bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
                  Vector Art
                </span>{' '}
                & Invitations
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-light text-reveal max-w-2xl mx-auto lg:mx-0">
                Discover thousands of professionally designed vector graphics and stunning invitations. 
                Perfect for your creative projects, branding, and special occasions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-reveal justify-center lg:justify-start">
              <Link 
                to="/vector-art"
                className="bg-gradient-to-r from-pastel-purple to-pastel-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 soft-shadow flex items-center justify-center space-x-2 text-base sm:text-lg"
              >
                <span>Browse Collection</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link 
                to="/free-samples"
                className="border-2 border-pastel-purple/30 text-neutral-700 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:border-pastel-purple hover:text-pastel-purple transition-all duration-300 flex items-center justify-center space-x-2 bg-white/50 backdrop-blur-sm text-base sm:text-lg"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Free Samples</span>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 pt-4 text-reveal">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-neutral-800">50K+</div>
                <div className="text-sm text-neutral-600">Vector Graphics</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-neutral-800">10K+</div>
                <div className="text-sm text-neutral-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-neutral-800">4.9★</div>
                <div className="text-sm text-neutral-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative parallax-slow lg:order-last">
            <div className="relative z-10 max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl soft-shadow p-4 sm:p-6 lg:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square bg-gradient-to-br from-pastel-peach to-pastel-purple rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/Simply framed.png" 
                    alt="Simply Framed Logo" 
                    className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain opacity-90"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 lg:-top-6 lg:-left-6 bg-white/80 backdrop-blur-sm rounded-2xl soft-shadow p-2 sm:p-3 lg:p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-500 parallax-fast">
              <div className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 bg-gradient-to-r from-pastel-pink to-pastel-coral rounded-xl"></div>
            </div>
            
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 bg-white/80 backdrop-blur-sm rounded-2xl soft-shadow p-2 sm:p-3 lg:p-4 transform rotate-12 hover:rotate-0 transition-transform duration-500 parallax-fast">
              <div className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 bg-gradient-to-r from-pastel-mint to-pastel-sky rounded-xl"></div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-pastel-lavender/20 to-pastel-pink/20 rounded-full blur-3xl opacity-30 transform scale-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;