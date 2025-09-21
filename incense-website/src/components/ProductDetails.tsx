import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/Product';
import { sampleProducts, thacKhoiProducts } from '../data/sampleData';
import './ProductDetails.css';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const navigate = useNavigate();

  // Multiple different images for carousel
  const productImages = [
    product.image,
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' ₫';
  };

  const calculateDiscount = (originalPrice: number, currentPrice: number) => {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const getCategoryName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'incense': 'NHANG TRẦM HƯƠNG',
      'burner-accessories': 'PHỤ KIỆN XÔNG ĐỐT',
      'burner': 'TRẦM XÔNG',
      'scene': 'TRẦM CẢ',
      'bracelet': 'VÒNG TAY TRẦM HƯƠNG',
      'statue': 'TƯỢNG TRẦM'
    };
    return categoryMap[category] || 'SẢN PHẨM';
  };

  const getSimilarProducts = () => {
    const allProducts = [...sampleProducts, ...thacKhoiProducts];
    const similarProducts = allProducts
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, 4);

    // If not enough products in same category, fill with other products
    if (similarProducts.length < 4) {
      const otherProducts = allProducts
        .filter(p => p.id !== product.id && p.category !== product.category)
        .slice(0, 4 - similarProducts.length);
      similarProducts.push(...otherProducts);
    }

    return similarProducts;
  };

  const handleSimilarProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setSelectedImageIndex(0);
    setIsZoomed(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="product-details">
      <div className="container">
        <div className="product-details-grid">
          {/* Image Section */}
          <div className="product-images-section">
            <div className="main-image-container">
              {product.originalPrice && (
                <div className="discount-badge-large">
                  -{calculateDiscount(product.originalPrice, product.price)}%
                </div>
              )}

              <div className={`main-image ${isZoomed ? 'zoomed' : ''}`}>
                <img
                  src={productImages[selectedImageIndex]}
                  alt={product.name}
                  onClick={toggleZoom}
                />
                {!isZoomed && (
                  <>
                    <button className="image-nav-arrow prev" onClick={prevImage}>
                      ‹
                    </button>
                    <button className="image-nav-arrow next" onClick={nextImage}>
                      ›
                    </button>
                    <button className="zoom-button" onClick={toggleZoom}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19S2 15.194 2 10.5 5.806 2 10.5 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M10.5 7.5V13.5M7.5 10.5H13.5" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="thumbnail-images">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                  onClick={() => handleImageClick(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="product-info-section">
            <div className="breadcrumb">
              <a href="/">TRANG CHỦ</a>
              <span>/</span>
              <a href={`/${product.category}`}>{getCategoryName(product.category)}</a>
            </div>

            <h1 className="product-title">{product.name}</h1>

            <div className="price-section">
              {product.originalPrice && (
                <span className="original-price">{formatPrice(product.originalPrice)}</span>
              )}
              <span className="current-price">{formatPrice(product.price)}</span>
            </div>

            <div className="product-description">
              <p>{product.description}</p>

              <div className="product-features">
                <h3>Thông tin chi tiết:</h3>
                <ul>
                  <li><strong>Chất liệu:</strong> Nhựa cứng chịu nhiệt độ cao, an toàn cho người sử dụng.</li>
                  <li><strong>Sử dụng với:</strong> Bột, vụn trầm (các loại gỗ quý khác...)</li>
                  <li><strong>Trọng lượng:</strong> ~50 gram.</li>
                  <li><strong>Kích Thước:</strong> 14.5×5 cm</li>
                  <li><strong>Điện áp:</strong> 12V – Công suất 5W.</li>
                  <li><strong>Nhiệt độ:</strong> 180C-200C(Sai số ±8C).</li>
                  <li>Có đèn cảnh báo và tự ngắt khi điện áp thay đổi.</li>
                  <li>Gắp 180 độ phù hợp với nhiều loại xe.</li>
                  <li>Thiết kế sang trọng với nhiều màu sắc.</li>
                </ul>
              </div>

              <div className="quality-note">
                <p><strong>Giá chỉ mang tính chất tham khảo – Quý khách hàng mua sỉ, sau khi liên lạc shop sẽ chính sửa lại giá phù hợp.</strong></p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <h3>Liên Hệ</h3>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Số điện thoại:</strong>
                <a href="tel:0878322933">0878 322 933</a>
              </div>

              <div className="contact-item">
                <strong>Địa chỉ:</strong>
                <span>121 Nguyễn Duy Hiệu, An Hải, Đà Nẵng</span>
              </div>

              <div className="contact-social">
                <a href="mailto:info@tramhuong.com" className="contact-link gmail">
                  <span>Gmail</span>
                </a>
                <a href="#" className="contact-link facebook">
                  <span>Facebook</span>
                </a>
                <a href="#" className="contact-link zalo">
                  <span>Zalo</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="similar-products-section">
          <h2 className="similar-products-title">SẢN PHẨM TƯƠNG TỰ</h2>

          <div className="similar-products-grid">
            {getSimilarProducts().map((similarProduct) => (
              <div
                key={similarProduct.id}
                className="similar-product-card"
                onClick={() => handleSimilarProductClick(similarProduct.id)}
              >
                <div className="similar-product-image">
                  <img src={similarProduct.image} alt={similarProduct.name} />
                  {similarProduct.originalPrice && (
                    <div className="similar-discount-badge">
                      -{Math.round(((similarProduct.originalPrice - similarProduct.price) / similarProduct.originalPrice) * 100)}%
                    </div>
                  )}
                </div>

                <div className="similar-product-info">
                  <h3 className="similar-product-name">{similarProduct.name}</h3>

                  <div className="similar-product-price">
                    {similarProduct.originalPrice && (
                      <span className="similar-original-price">
                        {new Intl.NumberFormat('vi-VN').format(similarProduct.originalPrice)} ₫
                      </span>
                    )}
                    <span className="similar-current-price">
                      {formatPrice(similarProduct.price)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isZoomed && (
          <div className="zoom-overlay" onClick={toggleZoom}>
            <div className="zoom-image-container">
              <img src={productImages[selectedImageIndex]} alt={product.name} />
              <button className="close-zoom" onClick={toggleZoom}>×</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;