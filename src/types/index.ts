export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  downloads: string;
  rating: number;
  gradient: string;
  description: string;
  shortDescription: string;
  tags: string[];
  images: string[];
  featured?: boolean;
  onSale?: boolean;
  specifications: {
    formats: string[];
    resolution: string;
    colorMode: string;
    fileSize: string;
    itemsIncluded: number;
  };
  useCases: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}