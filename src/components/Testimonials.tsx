import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Graphic Designer",
      company: "Design Studio Mumbai",
      content: "Simply Framed has been a game-changer for my design projects. The quality is exceptional and the variety is incredible. I've saved countless hours with their ready-to-use vectors.",
      rating: 5,
      avatar: "PS"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Marketing Director",
      company: "TechStart Bangalore",
      content: "The invitation templates are absolutely beautiful. We used them for our company events and received so many compliments. Professional quality at an affordable price.",
      rating: 5,
      avatar: "RK"
    },
    {
      id: 3,
      name: "Anita Patel",
      role: "Wedding Planner",
      company: "Elegant Events Delhi",
      content: "My clients love the wedding invitation designs. They're elegant, customizable, and always deliver on time. Simply Framed is now my go-to resource for all design needs.",
      rating: 5,
      avatar: "AP"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Small Business Owner",
      company: "Singh's Bakery",
      content: "As a small business owner, I needed professional designs without the professional price tag. Simply Framed delivered exactly what I needed for my branding and marketing materials.",
      rating: 5,
      avatar: "VS"
    },
    {
      id: 5,
      name: "Meera Gupta",
      role: "Freelance Designer",
      company: "Independent",
      content: "The commercial license gives me peace of mind when working with clients. High-quality vectors that I can customize and use professionally. Highly recommend!",
      rating: 5,
      avatar: "MG"
    },
    {
      id: 6,
      name: "Arjun Mehta",
      role: "Art Director",
      company: "Creative Agency Pune",
      content: "Impressive collection with fresh designs added regularly. The instant download feature is perfect for tight deadlines. Quality and convenience in one package.",
      rating: 5,
      avatar: "AM"
    }
  ];

  return (
    <section className="testimonials-section py-12 sm:py-20 organic-bg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-reveal text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-reveal text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            Join thousands of satisfied customers who trust Simply Framed for their design needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="testimonial-card bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 soft-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 h-6 w-6 sm:h-8 sm:w-8 text-pastel-purple/30" />
              
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-lg mr-3 sm:mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-neutral-600">{testimonial.role}</p>
                  <p className="text-xs sm:text-sm text-pastel-purple">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-pastel-peach fill-current" />
                ))}
              </div>

              <p className="text-neutral-700 leading-relaxed font-light text-sm sm:text-base">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-white/80 backdrop-blur-sm rounded-3xl px-6 sm:px-8 py-6 soft-shadow parallax-slow">
            <div className="text-center text-reveal">
              <div className="text-xl sm:text-2xl font-bold text-neutral-800">99%</div>
              <div className="text-xs sm:text-sm text-neutral-600">Customer Satisfaction</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-neutral-200"></div>
            <div className="text-center text-reveal">
              <div className="text-xl sm:text-2xl font-bold text-neutral-800">24/7</div>
              <div className="text-xs sm:text-sm text-neutral-600">Customer Support</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-neutral-200"></div>
            <div className="text-center text-reveal">
              <div className="text-xl sm:text-2xl font-bold text-neutral-800">Instant</div>
              <div className="text-xs sm:text-sm text-neutral-600">Download Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;