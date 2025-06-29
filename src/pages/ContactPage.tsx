import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-cream via-white to-pastel-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            Have a question, need support, or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 soft-shadow">
              <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pastel-purple/10 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-pastel-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Email</h3>
                    <p className="text-neutral-600">hello@simplyframed.com</p>
                    <p className="text-neutral-600">support@simplyframed.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pastel-pink/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-pastel-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Phone</h3>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                    <p className="text-neutral-600">Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pastel-mint/10 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-pastel-mint" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Address</h3>
                    <p className="text-neutral-600">123 Design Street</p>
                    <p className="text-neutral-600">San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 soft-shadow">
              <h3 className="text-xl font-serif font-semibold text-neutral-800 mb-4 flex items-center space-x-2">
                <Clock className="h-5 w-5 text-pastel-purple" />
                <span>Support Hours</span>
              </h3>
              <div className="space-y-2 text-neutral-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-2xl p-6 text-white">
              <h3 className="text-xl font-serif font-semibold mb-3 flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Quick Help</span>
              </h3>
              <p className="text-white/90 mb-4">
                Looking for quick answers? Check out our FAQ section for common questions and solutions.
              </p>
              <button className="bg-white text-pastel-purple px-4 py-2 rounded-xl hover:bg-neutral-50 transition-colors font-medium">
                View FAQ
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 soft-shadow">
              <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-pastel-purple transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-pastel-purple transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-pastel-purple transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="licensing">Licensing Questions</option>
                    <option value="custom">Custom Design Request</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-pastel-purple transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pastel-purple to-pastel-pink text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 text-lg font-semibold flex items-center justify-center space-x-3"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 soft-shadow">
            <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">
              We're Here to Help
            </h3>
            <p className="text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking for the perfect design, need technical support, or want to discuss 
              a custom project, our team is ready to assist you. We typically respond to all inquiries 
              within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;