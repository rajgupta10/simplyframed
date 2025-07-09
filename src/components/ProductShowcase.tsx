import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Heart, Eye, MessageCircle, Star, Info } from 'lucide-react';
import { vectorProducts, invitationProducts } from '../data/products';

const ProductShowcase = () => {
  const contactWhatsApp = (product: any) => {
    const message = `Hi! I'm interested in "${product.title}" from your ${product.category} collection. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/919082306871?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const ProductCard = ({ product }: { product: any }) => (
    <div className="product-card bg-white/80 backdrop-blur-sm rounded-3xl soft-shadow hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <div className={`h-40 sm:h-48 bg-gradient-to-br ${product.gradient || 'from-pastel-purple to-pastel-pink'} flex items-center justify-center relative overflow-hidden`}>
            {product.images && product.images.length > 0 ? (
              <img 
                src={product.images[0]} 
                alt={product.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            ) : null}
            <div className={`${product.images && product.images.length > 0 ? 'hidden' : 'flex'} absolute inset-0 items-center justify-center text-white text-3xl sm:text-4xl font-serif font-bold opacity-90`}>
              {product.title.charAt(0)}
            </div>
          </div>
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-600" />
            </button>
            <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
              <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-600" />
            </button>
          </div>
        </div>
      </Link>
      
      <div className="p-4 sm:p-6">
        <Link to={`/product/${product.id}`}>
          <div className="mb-2">
            <h3 className="font-serif font-semibold text-neutral-800 text-base sm:text-lg leading-tight hover:text-pastel-purple transition-colors">
              {product.title}
            </h3>
          </div>
        </Link>
        
        <p className="text-xs sm:text-sm text-neutral-500 mb-3">{product.category}</p>
        
        {/* Short Description */}
        <p className="text-xs sm:text-sm text-neutral-600 mb-4 leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>
        
        {/* Specifications Preview */}
        <div className="bg-neutral-50 rounded-xl p-3 mb-4">
          <div className="flex items-center justify-between text-xs text-neutral-600">
            <span className="flex items-center space-x-1">
              <Info className="h-3 w-3" />
              <span>{product.specifications.itemsIncluded} items</span>
            </span>
            <span className="hidden sm:inline">{product.specifications.formats.slice(0, 2).join(', ')}</span>
            <span className="hidden sm:inline">{product.specifications.resolution}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-neutral-500">
            <span className="flex items-center space-x-1">
              <Download className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{product.downloads}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-pastel-peach" />
              <span>{product.rating}</span>
            </span>
          </div>
          <button 
            onClick={() => contactWhatsApp(product)}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-2 rounded-xl hover:shadow-md transition-all duration-300 text-xs sm:text-sm font-medium flex items-center space-x-2"
          >
            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="products" className="product-showcase py-12 sm:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vector Art Cards Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-reveal text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Vector Art Cards Collection
            </h2>
            <p className="text-reveal text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto font-light mb-6">
              Explore our curated selection of high-quality vector art cards, perfect for any creative project
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-pastel-purple mb-1">100+</div>
                  <div className="text-xs sm:text-sm text-neutral-600">Vector Art Cards</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-pastel-purple mb-1">Multiple</div>
                  <div className="text-xs sm:text-sm text-neutral-600">File Formats</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-pastel-purple mb-1">Scalable</div>
                  <div className="text-xs sm:text-sm text-neutral-600">Vector Quality</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {vectorProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link 
              to="/vector-art"
              className="text-reveal bg-gradient-to-r from-pastel-purple to-pastel-pink text-white px-6 sm:px-8 py-3 rounded-2xl hover:shadow-lg transition-all duration-300 text-base sm:text-lg font-medium inline-block"
            >
              View All Vector Art Cards
            </Link>
          </div>
        </div>

        {/* Vector Art Invitations Section */}
        <div id="invitations">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-reveal text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Vector Art Invitations
            </h2>
            <p className="text-reveal text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto font-light mb-6">
              Make every occasion special with our professionally designed vector art invitation templates
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-pastel-pink mb-1">50+</div>
                  <div className="text-xs sm:text-sm text-neutral-600">Invitation Templates</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-pastel-pink mb-1">Print Ready</div>
                  <div className="text-xs sm:text-sm text-neutral-600">300 DPI Quality</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-pastel-pink mb-1">Fully</div>
                  <div className="text-xs sm:text-sm text-neutral-600">Customizable</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {invitationProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link 
              to="/invitations"
              className="text-reveal bg-gradient-to-r from-pastel-pink to-pastel-coral text-white px-6 sm:px-8 py-3 rounded-2xl hover:shadow-lg transition-all duration-300 text-base sm:text-lg font-medium inline-block"
            >
              View All Vector Art Invitations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;