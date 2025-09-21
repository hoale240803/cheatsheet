import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="text-white mb-2">Premium Incense</h3>
            <p className="footer-text">
              Experience the finest quality incense products, burners, and accessories
              for your spiritual and aromatic journey.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="text-white mb-2">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/incense">Incense</a></li>
              <li><a href="/burner">Burners</a></li>
              <li><a href="/accessories">Accessories</a></li>
              <li><a href="/news">News</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-white mb-2">Contact Info</h4>
            <div className="footer-text">
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@premiumincense.com</p>
              <p>Follow us on social media</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-text text-center">
            &copy; 2024 Premium Incense. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;