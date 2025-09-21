import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/Product';
import './ThacKhoiSection.css';

interface ThacKhoiSectionProps {
  products: Product[];
  title?: string;
}

const ThacKhoiSection: React.FC<ThacKhoiSectionProps> = ({
  products,
  title = "THÁC KHÓI TRẦM HƯƠNG"
}) => {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' ₫';
  };

  const calculateDiscount = (originalPrice: number, currentPrice: number) => {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="thac-khoi-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <a href="/thac-khoi" className="view-more-link">
            Xem thêm <span className="arrow">›</span>
          </a>
        </div>

        <div className="thac-khoi-grid">
          {products.slice(0, 12).map((product) => (
            <div
              key={product.id}
              className="thac-khoi-card"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                {product.originalPrice && (
                  <div className="discount-badge">
                    -{calculateDiscount(product.originalPrice, product.price)}%
                  </div>
                )}
              </div>

              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>

                <div className="price-section">
                  {product.originalPrice && (
                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  )}
                  <span className="current-price">{formatPrice(product.price)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThacKhoiSection;