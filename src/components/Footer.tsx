import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/Simply framed.png" 
                  alt="Simply Framed Logo" 
                  className="h-8 w-8 object-contain"
                />
                <h3 className="text-2xl font-serif font-bold text-white">Simply Framed</h3>
              </div>
              <p className="text-neutral-400 leading-relaxed font-light">
                Your trusted source for premium vector art and beautiful invitation templates. 
                Creating stunning designs made simple.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-neutral-700 p-3 rounded-xl hover:bg-pastel-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-neutral-700 p-3 rounded-xl hover:bg-pastel-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-neutral-700 p-3 rounded-xl hover:bg-pastel-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-neutral-700 p-3 rounded-xl hover:bg-pastel-purple transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/vector-art" className="hover:text-white transition-colors">Vector Art</Link></li>
              <li><Link to="/invitations" className="hover:text-white transition-colors">Invitations</Link></li>
              <li><Link to="/free-samples" className="hover:text-white transition-colors">Free Samples</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Categories</h4>
            <ul className="space-y-3">
              <li><Link to="/vector-art" className="hover:text-white transition-colors">Vector Art Cards</Link></li>
              <li><Link to="/invitations" className="hover:text-white transition-colors">Vector Art Invitations</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Business & Corporate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wedding & Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Abstract & Artistic</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nature & Animals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Icons & Symbols</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Patterns & Textures</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pastel-purple" />
                <span>hello@simplyframed.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pastel-purple" />
                <span>+91 8511428999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-pastel-purple" />
                <span>Mumbai, India</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold text-white mb-3">Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-l-xl focus:outline-none focus:border-pastel-purple"
                />
                <button className="bg-pastel-purple px-4 py-2 rounded-r-xl hover:bg-pastel-pink transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 Simply Framed. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;