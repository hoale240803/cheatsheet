export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  category: ProductCategory;
  featured?: boolean;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  publishDate: string;
  author: string;
}

export type ProductCategory =
  | 'incense'
  | 'burner-accessories'
  | 'burner'
  | 'scene'
  | 'bracelet'
  | 'statue';