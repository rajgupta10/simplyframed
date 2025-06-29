import React from 'react';
import { Users, Award, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      bio: "With over 10 years in design, Sarah leads our creative vision and ensures every product meets our high standards.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Lead Designer",
      bio: "Michael brings technical expertise and artistic flair to our vector art collections.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      bio: "Emily manages our product development and ensures we're always delivering what our customers need.",
      avatar: "ER"
    },
    {
      name: "David Park",
      role: "Customer Success",
      bio: "David leads our customer support team and helps ensure every customer has an amazing experience.",
      avatar: "DP"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "Every design is carefully crafted and reviewed to meet our premium standards."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "We listen to our community and create products that solve real design challenges."
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "We're passionate about design and helping creators bring their visions to life."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly explore new trends and techniques to stay ahead of the curve."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-cream via-white to-pastel-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-800 mb-6">
            About Simply Framed
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
            We're a passionate team of designers and creators dedicated to providing high-quality 
            vector art and invitation templates that inspire and empower creative professionals worldwide.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-neutral-800">Our Story</h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Founded in 2020, Simply Framed began as a small studio with a big dream: to make 
                professional-quality design resources accessible to creators everywhere. What started 
                as a passion project has grown into a trusted platform serving over 25,000 designers, 
                marketers, and creative professionals.
              </p>
              <p>
                Our journey started when our founder, Sarah Johnson, noticed the gap between expensive 
                custom design work and low-quality templates available online. She envisioned a platform 
                that would offer premium designs at affordable prices, with the flexibility and quality 
                that professionals demand.
              </p>
              <p>
                Today, we're proud to offer thousands of carefully curated vector graphics and invitation 
                templates, each designed with attention to detail and commercial use in mind. Our commitment 
                to quality and customer satisfaction has made us a go-to resource for creative professionals 
                around the world.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pastel-purple to-pastel-pink rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-serif font-bold mb-6">By the Numbers</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-white/80">Vector Graphics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15K+</div>
                <div className="text-white/80">Invitations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25K+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.9★</div>
                <div className="text-white/80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 soft-shadow text-center">
                  <div className="bg-pastel-purple/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-pastel-purple" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-neutral-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 soft-shadow text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-pastel-purple font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who trust Simply Framed for their design needs. 
            Start exploring our collection today.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-pastel-purple px-8 py-3 rounded-2xl font-semibold hover:bg-neutral-50 transition-colors">
              Browse Collection
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-pastel-purple transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;