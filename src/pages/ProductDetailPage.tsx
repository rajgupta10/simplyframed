import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Heart, Share2, Star, MessageCircle, Eye, Tag, FileText, Palette, Layers, Zap } from 'lucide-react';
import { allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  
  const product = allProducts.find(p => p.id === parseInt(id || '0'));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-4">Product Not Found</h2>
          <Link to="/" className="text-pastel-purple hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const contactWhatsApp = () => {
    const message = `Hi! I'm interested in "${product.title}" from your ${product.category} collection. Could you please provide more details about availability and customization options?`;
    const whatsappUrl = `https://wa.me/918511428999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-cream via-white to-pastel-blush relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to={product.id > 100 ? '/invitations' : '/vector-art'}
          className="inline-flex items-center space-x-2 text-neutral-600 hover:text-pastel-purple transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to {product.id > 100 ? 'Vector Art Invitations' : 'Vector Art Cards'}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className={`aspect-square bg-gradient-to-br ${product.gradient} rounded-3xl flex items-center justify-center relative overflow-hidden soft-shadow`}>
              <div className="text-white text-8xl font-serif font-bold opacity-90">
                {product.title.charAt(0)}
              </div>
              
              {product.onSale && (
                <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-2 rounded-full text-sm font-semibold">
                  Sale
                </div>
              )}
              
              {product.featured && (
                <div className="absolute top-6 right-6 bg-pastel-purple text-white px-3 py-2 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
            </div>

            {/* Product Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
                <Download className="h-6 w-6 text-pastel-purple mx-auto mb-2" />
                <div className="text-lg font-bold text-neutral-800">{product.downloads}</div>
                <div className="text-sm text-neutral-600">Downloads</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
                <Star className="h-6 w-6 text-pastel-peach mx-auto mb-2 fill-current" />
                <div className="text-lg font-bold text-neutral-800">{product.rating}</div>
                <div className="text-sm text-neutral-600">Rating</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
                <Layers className="h-6 w-6 text-pastel-mint mx-auto mb-2" />
                <div className="text-lg font-bold text-neutral-800">{product.specifications.itemsIncluded}</div>
                <div className="text-sm text-neutral-600">Items</div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-pastel-purple/10 text-pastel-purple px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                {product.onSale && (
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    On Sale
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-4">
                {product.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-pastel-peach fill-current' 
                          : 'text-neutral-300'
                      }`} 
                    />
                  ))}
                  <span className="text-neutral-600 ml-2">({product.rating})</span>
                </div>
                
                <div className="flex items-center space-x-1 text-neutral-500">
                  <Download className="h-4 w-4" />
                  <span>{product.downloads} downloads</span>
                </div>
              </div>
            </div>

            <p className="text-neutral-600 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
                >
                  <Tag className="h-3 w-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                onClick={contactWhatsApp}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl hover:shadow-lg transition-all duration-300 text-lg font-semibold flex items-center justify-center space-x-3"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Contact on WhatsApp</span>
              </button>
              
              <div className="grid grid-cols-3 gap-3">
                <button className="flex items-center justify-center space-x-2 bg-neutral-100 text-neutral-700 py-3 rounded-xl hover:bg-neutral-200 transition-colors">
                  <Heart className="h-4 w-4" />
                  <span>Save</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-neutral-100 text-neutral-700 py-3 rounded-xl hover:bg-neutral-200 transition-colors">
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-neutral-100 text-neutral-700 py-3 rounded-xl hover:bg-neutral-200 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <h3 className="font-serif font-semibold mb-3 flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Direct Contact</span>
              </h3>
              <p className="text-white/90 mb-4">
                Get instant responses and personalized service. Contact us directly on WhatsApp for customization, bulk orders, and special requests.
              </p>
              <div className="text-sm text-white/80">
                <p>📱 WhatsApp: +91 8511428999</p>
                <p>⏰ Available: 9 AM - 9 PM IST</p>
                <p>🚀 Quick Response Guaranteed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl soft-shadow overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-neutral-200">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-pastel-purple text-white'
                    : 'text-neutral-600 hover:text-pastel-purple'
                }`}
              >
                <FileText className="h-5 w-5 mx-auto mb-1" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'specifications'
                    ? 'bg-pastel-purple text-white'
                    : 'text-neutral-600 hover:text-pastel-purple'
                }`}
              >
                <Layers className="h-5 w-5 mx-auto mb-1" />
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('usage')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'usage'
                    ? 'bg-pastel-purple text-white'
                    : 'text-neutral-600 hover:text-pastel-purple'
                }`}
              >
                <Zap className="h-5 w-5 mx-auto mb-1" />
                Use Cases
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">What's Included:</h3>
                  <ul className="space-y-3 text-neutral-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pastel-purple rounded-full"></div>
                      <span>High-resolution vector files ({product.specifications.formats.join(', ')})</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pastel-purple rounded-full"></div>
                      <span>Commercial license included</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pastel-purple rounded-full"></div>
                      <span>Fully customizable colors and text</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pastel-purple rounded-full"></div>
                      <span>24/7 customer support via WhatsApp</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pastel-purple rounded-full"></div>
                      <span>{product.specifications.itemsIncluded} individual design items</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">Technical Specifications:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-neutral-50 rounded-xl p-4">
                        <h4 className="font-semibold text-neutral-800 mb-2">File Formats</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.specifications.formats.map((format) => (
                            <span key={format} className="bg-pastel-purple/10 text-pastel-purple px-2 py-1 rounded text-sm">
                              {format}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-neutral-50 rounded-xl p-4">
                        <h4 className="font-semibold text-neutral-800 mb-2">Resolution</h4>
                        <p className="text-neutral-600">{product.specifications.resolution}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-neutral-50 rounded-xl p-4">
                        <h4 className="font-semibold text-neutral-800 mb-2">Color Mode</h4>
                        <p className="text-neutral-600">{product.specifications.colorMode}</p>
                      </div>
                      <div className="bg-neutral-50 rounded-xl p-4">
                        <h4 className="font-semibold text-neutral-800 mb-2">File Size</h4>
                        <p className="text-neutral-600">{product.specifications.fileSize}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'usage' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">Perfect For:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.useCases.map((useCase, index) => (
                      <div key={index} className="bg-neutral-50 rounded-xl p-4 text-center">
                        <Palette className="h-8 w-8 text-pastel-purple mx-auto mb-2" />
                        <h4 className="font-semibold text-neutral-800">{useCase}</h4>
                      </div>
                    ))}
                  </div>
                  <div className="bg-pastel-purple/10 rounded-xl p-6">
                    <h4 className="font-semibold text-neutral-800 mb-3">Commercial License</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      This product comes with a commercial license, allowing you to use it in both personal and commercial projects. 
                      You can modify, customize, and incorporate these designs into your client work, products for sale, and marketing materials.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-8 text-center">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;