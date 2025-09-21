import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/Product';
import './BestsellingProducts.css';

interface BestsellingProductsProps {
  products: Product[];
  title?: string;
}

const BestsellingProducts: React.FC<BestsellingProductsProps> = ({ products, title = "Bán Chạy Nhất" }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const productsPerPage = 6;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const getCurrentProducts = () => {
    const startIndex = currentPage * productsPerPage;
    return products.slice(startIndex, startIndex + productsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

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
    <section className="bestselling-section">
      <div className="container">
        <h2 className="section-title text-center mb-4">{title}</h2>

        <div className="bestselling-container">
          <button
            className="nav-arrow prev-arrow"
            onClick={prevPage}
            disabled={totalPages <= 1}
          >
            ‹
          </button>

          <div className="bestselling-grid">
            {getCurrentProducts().map((product) => (
              <div
                key={product.id}
                className="bestselling-item card"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
                  {product.originalPrice && (
                    <div className="discount-badge">
                      -{calculateDiscount(product.originalPrice, product.price)}%
                    </div>
                  )}
                </div>

                <div className="product-info p-3">
                  <h3 className="product-name">{product.name}</h3>

                  <div className="price-container">
                    {product.originalPrice && (
                      <span className="original-price">{formatPrice(product.originalPrice)}</span>
                    )}
                    <span className="current-price">{formatPrice(product.price)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="nav-arrow next-arrow"
            onClick={nextPage}
            disabled={totalPages <= 1}
          >
            ›
          </button>
        </div>

        <div className="pagination-dots">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellingProducts;