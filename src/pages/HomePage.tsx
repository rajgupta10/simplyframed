import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import ScrollAnimations from '../components/ScrollAnimations';

const HomePage = () => {
  return (
    <div className="min-h-screen relative">
      <ScrollAnimations>
        <div className="relative z-20">
          <Hero />
          <ProductShowcase />
          <Features />
          <Testimonials />
          <CTA />
        </div>
      </ScrollAnimations>
    </div>
  );
};

export default HomePage;