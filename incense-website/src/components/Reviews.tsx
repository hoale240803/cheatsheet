import React from 'react';
import { Review } from '../types/Product';
import './Reviews.css';

interface ReviewsProps {
  reviews: Review[];
  title?: string;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews, title = "Đánh Giá Khách Hàng" }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (reviews.length === 0) {
    return (
      <section className="reviews-section">
        <div className="container">
          <h2 className="text-center mb-4">{title}</h2>
          <p className="text-center">Chưa có đánh giá nào. Hãy là người đầu tiên đánh giá!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="text-center mb-4">{title}</h2>

        <div className="reviews-grid grid grid-3">
          {reviews.map((review) => (
            <div key={review.id} className="review-card card">
              <div className="review-header">
                <div className="customer-info">
                  <h4 className="customer-name">{review.customerName}</h4>
                  <span className="review-date">{formatDate(review.date)}</span>
                </div>
                <div className="rating">
                  {renderStars(review.rating)}
                </div>
              </div>

              <div className="review-content">
                <p>{review.comment}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary">Xem Tất Cả Đánh Giá</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;