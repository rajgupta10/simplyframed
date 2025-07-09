import React, { useState } from 'react';
import { Download, Star, Eye, Heart, MessageCircle } from 'lucide-react';

const FreeSamplesPage = () => {
  const [downloadedSamples, setDownloadedSamples] = useState<number[]>([]);

  const freeSamples = [
    {
      id: 1,
      title: "Abstract Geometric Sample",
      category: "Abstract",
      gradient: "from-pastel-purple to-pastel-pink",
      downloads: "5.2k",
      rating: 4.9,
      description: "A beautiful abstract geometric pattern perfect for modern designs.",
      image: "/IMG-20250709-WA0015.jpg"
    },
    {
      id: 2,
      title: "Nature Elements Sample",
      category: "Nature",
      gradient: "from-pastel-mint to-pastel-sky",
      downloads: "3.8k",
      rating: 4.8,
      description: "Elegant nature elements including leaves and botanical illustrations.",
      image: "/IMG-20250709-WA0014.jpg"
    },
    {
      id: 3,
      title: "Wedding Invitation Sample",
      category: "Wedding",
      gradient: "from-pastel-blush to-pastel-pink",
      downloads: "2.1k",
      rating: 5.0,
      description: "A stunning wedding invitation template with elegant typography.",
      image: "/IMG-20250709-WA0013.jpg"
    },
    {
      id: 4,
      title: "Business Icons Sample",
      category: "Icons",
      gradient: "from-pastel-lavender to-pastel-purple",
      downloads: "4.5k",
      rating: 4.7,
      description: "Professional business and technology icons for your projects.",
      image: "/IMG-20250709-WA0010.jpg"
    },
    {
      id: 5,
      title: "Birthday Party Sample",
      category: "Birthday",
      gradient: "from-pastel-peach to-pastel-coral",
      downloads: "1.9k",
      rating: 4.6,
      description: "Fun and colorful birthday party invitation template.",
      image: "/IMG-20250709-WA0007.jpg"
    },
    {
      id: 6,
      title: "Minimalist Logo Sample",
      category: "Logos",
      gradient: "from-pastel-sage to-pastel-mint",
      downloads: "3.2k",
      rating: 4.8,
      description: "Clean and modern minimalist logo template.",
      image: "/IMG-20250709-WA0015.jpg"
    }
  ];

  const downloadSample = (sampleId: number) => {
    if (!downloadedSamples.includes(sampleId)) {
      setDownloadedSamples([...downloadedSamples, sampleId]);
      // Simulate download
      const link = document.createElement('a');
      link.href = '#';
      link.download = `sample-${sampleId}.zip`;
      link.click();
    }
  };

  const contactWhatsApp = () => {
    const message = "Hi! I'm interested in your free samples and would like to know more about your premium designs.";
    const whatsappUrl = `https://wa.me/919082306871?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-cream via-white to-pastel-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-800 mb-4">
            Free Samples
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            Try before you buy! Download these free samples to experience the quality of our designs.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 soft-shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-pastel-purple/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-pastel-purple" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-neutral-800 mb-2">Instant Download</h3>
              <p className="text-neutral-600">Download immediately, no registration required</p>
            </div>
            <div>
              <div className="bg-pastel-pink/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-pastel-pink" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-neutral-800 mb-2">Premium Quality</h3>
              <p className="text-neutral-600">Same quality as our paid products</p>
            </div>
            <div>
              <div className="bg-pastel-mint/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pastel-mint" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-neutral-800 mb-2">Commercial Use</h3>
              <p className="text-neutral-600">Use in personal and commercial projects</p>
            </div>
          </div>
        </div>

        {/* Free Samples Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {freeSamples.map((sample) => (
            <div key={sample.id} className="bg-white/80 backdrop-blur-sm rounded-3xl soft-shadow hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <div className={`h-48 bg-gradient-to-br ${sample.gradient} flex items-center justify-center`}>
                  {sample.image ? (
                    <img 
                      src={sample.image} 
                      alt={sample.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`${sample.image ? 'hidden' : 'flex'} absolute inset-0 items-center justify-center text-white text-4xl font-serif font-bold opacity-90`}>
                    {sample.title.charAt(0)}
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  FREE
                </div>
                
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Eye className="h-4 w-4 text-neutral-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-semibold text-neutral-800 text-lg leading-tight">
                    {sample.title}
                  </h3>
                  <span className="text-lg font-bold text-green-600">FREE</span>
                </div>
                
                <p className="text-sm text-neutral-500 mb-2">{sample.category}</p>
                <p className="text-sm text-neutral-600 mb-4">{sample.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 text-sm text-neutral-500">
                    <span className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{sample.downloads}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current text-pastel-peach" />
                      <span>{sample.rating}</span>
                    </span>
                  </div>
                  <button 
                    onClick={() => downloadSample(sample.id)}
                    disabled={downloadedSamples.includes(sample.id)}
                    className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium flex items-center space-x-2 ${
                      downloadedSamples.includes(sample.id)
                        ? 'bg-green-100 text-green-700 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-md'
                    }`}
                  >
                    <Download className="h-4 w-4" />
                    <span>{downloadedSamples.includes(sample.id) ? 'Downloaded' : 'Download'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Love What You See?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us on WhatsApp for custom designs, bulk orders, and premium collections.
          </p>
          <div className="space-y-4">
            <button 
              onClick={contactWhatsApp}
              className="bg-white text-green-600 px-8 py-3 rounded-2xl font-semibold hover:bg-neutral-50 transition-colors flex items-center space-x-2 mx-auto"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contact on WhatsApp</span>
            </button>
            <div className="text-sm text-white/80">
              <p>📱 +91 9082306871 | ⏰ 9 AM - 9 PM IST | 🚀 Quick Response</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeSamplesPage;