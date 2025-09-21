import React, { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import './Carousel.css';

interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' ₫';
  };

  if (products.length === 0) return null;

  return (
    <div className="carousel">
      <div className="carousel-container">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="carousel-slide">
              <img src={product.image} alt={product.name} />
              <div className="carousel-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="price">
                  {product.originalPrice && (
                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  )}
                  <span className="current-price">{formatPrice(product.price)}</span>
                </div>
                <button className="btn btn-primary">Xem Sản Phẩm</button>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          &#8250;
        </button>

        <div className="carousel-indicators">
          {products.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;