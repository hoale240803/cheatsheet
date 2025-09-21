import React from 'react';
import Carousel from '../components/Carousel';
import BestsellingProducts from '../components/BestsellingProducts';
import ThacKhoiSection from '../components/ThacKhoiSection';
import Reviews from '../components/Reviews';
import { sampleProducts, sampleReviews, thacKhoiProducts } from '../data/sampleData';
import './HomePage.css';

const HomePage: React.FC = () => {
  const featuredProducts = sampleProducts.filter(product => product.featured);
  const popularProducts = sampleProducts.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <Carousel products={featuredProducts} />
        </div>
      </section>

      <BestsellingProducts products={featuredProducts} />

      <ThacKhoiSection products={thacKhoiProducts} />

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title text-center mb-4">Danh Mục Sản Phẩm</h2>
          <div className="categories-grid grid grid-3">
            <div className="category-card card">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop" alt="Nhang Trầm Hương" />
              <div className="category-overlay">
                <h3>Nhang Trầm Hương</h3>
                <button className="btn btn-primary">Xem Sản Phẩm</button>
              </div>
            </div>
            <div className="category-card card">
              <img src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop" alt="Trầm Xông" />
              <div className="category-overlay">
                <h3>Trầm Xông</h3>
                <button className="btn btn-primary">Xem Sản Phẩm</button>
              </div>
            </div>
            <div className="category-card card">
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop" alt="Phụ Kiện" />
              <div className="category-overlay">
                <h3>Phụ Kiện Xông Đốt</h3>
                <button className="btn btn-primary">Xem Sản Phẩm</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews reviews={sampleReviews.slice(0, 3)} />

      <section className="about-section">
        <div className="container">
          <div className="about-content text-center">
            <h2 className="section-title mb-3">Về Trầm Hương Premium</h2>
            <p className="about-text">
              Chúng tôi chuyên cung cấp các sản phẩm trầm hương chất lượng cao từ khắp nơi trên thế giới.
              Bộ sưu tập của chúng tôi bao gồm trầm hương truyền thống, gỗ đàn hương và các hương liệu
              tự nhiên hoàn hảo cho việc thiền định, thư giãn và tạo không gian yên bình trong nhà hoặc văn phòng.
            </p>
            <button className="btn btn-primary mt-3">Tìm Hiểu Thêm</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;