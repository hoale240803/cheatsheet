import React from 'react';
import { sampleNews } from '../data/sampleData';
import './NewsPage.css';

const NewsPage: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="news-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Agarwood Knowledge & News</h1>
          <p className="page-subtitle">
            Discover the ancient wisdom and modern science behind agarwood and incense
          </p>
        </div>

        <div className="news-grid">
          {sampleNews.map((article) => (
            <article key={article.id} className="news-card card">
              <div className="news-image">
                <img src={article.image} alt={article.title} />
              </div>

              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">{formatDate(article.publishDate)}</span>
                  <span className="news-author">By {article.author}</span>
                </div>

                <h2 className="news-title">{article.title}</h2>
                <p className="news-excerpt">{article.excerpt}</p>

                <button className="btn btn-primary read-more-btn">
                  Read Full Article
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="newsletter-section">
          <div className="newsletter-card card">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest news about agarwood, incense, and meditation practices.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;