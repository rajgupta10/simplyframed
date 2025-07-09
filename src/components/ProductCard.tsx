import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Heart, Eye, MessageCircle, Star, Info } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const contactWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `Hi! I'm interested in "${product.title}" from your ${product.category} collection. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/919082306871?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="product-card bg-white/80 backdrop-blur-sm rounded-3xl soft-shadow hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
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
            <div className={`${product.images && product.images.length > 0 ? 'hidden' : 'flex'} absolute inset-0 items-center justify-center text-white text-4xl font-serif font-bold opacity-90`}>
              {product.title.charAt(0)}
            </div>
            
            {product.onSale && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Sale
              </div>
            )}
            
            {product.featured && (
              <div className="absolute top-3 right-3 bg-pastel-purple text-white px-2 py-1 rounded-full text-xs font-semibold">
                Featured
              </div>
            )}
          </div>
          
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
              <Heart className="h-4 w-4 text-neutral-600" />
            </button>
            <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
              <Eye className="h-4 w-4 text-neutral-600" />
            </button>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/product/${product.id}`}>
          <div className="mb-2">
            <h3 className="font-serif font-semibold text-neutral-800 text-lg leading-tight hover:text-pastel-purple transition-colors">
              {product.title}
            </h3>
          </div>
        </Link>
        
        <p className="text-sm text-neutral-500 mb-3">{product.category}</p>
        
        {/* Short Description */}
        <p className="text-sm text-neutral-600 mb-4 leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>
        
        {/* Specifications Preview */}
        <div className="bg-neutral-50 rounded-xl p-3 mb-4">
          <div className="flex items-center justify-between text-xs text-neutral-600">
            <span className="flex items-center space-x-1">
              <Info className="h-3 w-3" />
              <span>{product.specifications.itemsIncluded} items</span>
            </span>
            <span>{product.specifications.formats.slice(0, 2).join(', ')}</span>
            <span>{product.specifications.resolution}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-neutral-500">
            <span className="flex items-center space-x-1">
              <Download className="h-4 w-4" />
              <span>{product.downloads}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-current text-pastel-peach" />
              <span>{product.rating}</span>
            </span>
          </div>
          <button 
            onClick={contactWhatsApp}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl hover:shadow-md transition-all duration-300 text-sm font-medium flex items-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;