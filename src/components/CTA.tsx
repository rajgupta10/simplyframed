import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="cta-section py-12 sm:py-20 bg-gradient-to-r from-pastel-purple via-pastel-pink to-pastel-coral relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm font-medium mb-6 sm:mb-8 text-reveal">
            <Gift className="h-4 w-4" />
            <span>Limited Time Offer</span>
          </div>
          
          <h2 className="text-reveal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6">
            Start Creating Amazing Designs Today
          </h2>
          
          <p className="text-reveal text-lg sm:text-xl opacity-90 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light">
            Join over 25,000 designers, marketers, and creators who trust Simply Framed 
            for their design needs. Get instant access to our entire collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 text-reveal">
            <Link 
              to="/vector-art"
              className="w-full sm:w-auto bg-white text-pastel-purple px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-neutral-50 transition-all duration-300 transform hover:scale-105 soft-shadow hover:shadow-xl flex items-center justify-center space-x-3 text-base sm:text-lg"
            >
              <span>Browse All Designs</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            
            <Link 
              to="/free-samples"
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-white hover:text-pastel-purple transition-all duration-300 flex items-center justify-center space-x-3 text-base sm:text-lg"
            >
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Get Free Samples</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center text-reveal">
              <div className="text-2xl sm:text-3xl font-bold mb-2">✨</div>
              <div className="font-semibold mb-1 text-sm sm:text-base">Premium Quality</div>
              <div className="text-xs sm:text-sm opacity-80">Professional designs by expert artists</div>
            </div>
            <div className="text-center text-reveal">
              <div className="text-2xl sm:text-3xl font-bold mb-2">⚡</div>
              <div className="font-semibold mb-1 text-sm sm:text-base">Instant Access</div>
              <div className="text-xs sm:text-sm opacity-80">Download immediately after purchase</div>
            </div>
            <div className="text-center text-reveal">
              <div className="text-2xl sm:text-3xl font-bold mb-2">🛡️</div>
              <div className="font-semibold mb-1 text-sm sm:text-base">Commercial License</div>
              <div className="text-xs sm:text-sm opacity-80">Use for personal and business projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;