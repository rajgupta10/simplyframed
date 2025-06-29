import React from 'react';
import { Download, Palette, Zap, Shield, Users, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Download,
      title: "Instant Download",
      description: "Get your files immediately after purchase. No waiting, no delays.",
      color: "text-pastel-purple",
      bgColor: "bg-pastel-purple/10"
    },
    {
      icon: Palette,
      title: "Fully Customizable",
      description: "Edit colors, text, and elements to match your brand perfectly.",
      color: "text-pastel-pink",
      bgColor: "bg-pastel-pink/10"
    },
    {
      icon: Zap,
      title: "High Resolution",
      description: "Vector files that scale to any size without losing quality.",
      color: "text-pastel-mint",
      bgColor: "bg-pastel-mint/10"
    },
    {
      icon: Shield,
      title: "Commercial License",
      description: "Use our designs for personal and commercial projects worry-free.",
      color: "text-pastel-sky",
      bgColor: "bg-pastel-sky/10"
    },
    {
      icon: Users,
      title: "Expert Designers",
      description: "Created by professional designers with years of experience.",
      color: "text-pastel-coral",
      bgColor: "bg-pastel-coral/10"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Every design is carefully crafted and quality-checked.",
      color: "text-pastel-peach",
      bgColor: "bg-pastel-peach/10"
    }
  ];

  return (
    <section className="features-section py-12 sm:py-20 bg-white/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-reveal text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
            Why Choose Simply Framed?
          </h2>
          <p className="text-reveal text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            We provide everything you need to create stunning designs with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="feature-card group p-6 sm:p-8 rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-neutral-200/50 hover:border-pastel-purple/30 bg-white/80 backdrop-blur-sm"
              >
                <div className={`${feature.bgColor} w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-neutral-800 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-3xl p-8 sm:p-12 text-white soft-shadow parallax-slow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="text-reveal">
              <div className="text-2xl sm:text-4xl font-bold mb-2">50K+</div>
              <div className="text-white/80 text-sm sm:text-base">Vector Graphics</div>
            </div>
            <div className="text-reveal">
              <div className="text-2xl sm:text-4xl font-bold mb-2">15K+</div>
              <div className="text-white/80 text-sm sm:text-base">Invitations</div>
            </div>
            <div className="text-reveal">
              <div className="text-2xl sm:text-4xl font-bold mb-2">25K+</div>
              <div className="text-white/80 text-sm sm:text-base">Happy Customers</div>
            </div>
            <div className="text-reveal">
              <div className="text-2xl sm:text-4xl font-bold mb-2">4.9★</div>
              <div className="text-white/80 text-sm sm:text-base">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;