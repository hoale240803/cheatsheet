import React from 'react';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';
import './ProductGrid.css';

interface ProductGridProps {
  products: Product[];
  title?: string;
  columns?: 2 | 3 | 4;
  onProductClick?: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  title,
  columns = 4,
  onProductClick
}) => {
  if (products.length === 0) {
    return (
      <div className="product-grid-section">
        <div className="container">
          {title && <h2 className="text-center mb-4">{title}</h2>}
          <p className="text-center">No products found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-grid-section">
      <div className="container">
        {title && <h2 className="text-center mb-4">{title}</h2>}

        <div className={`product-grid grid grid-${columns}`}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;