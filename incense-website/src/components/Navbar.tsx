import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';

interface NavbarProps {
  onSearch?: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (query: string) => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="container">
          <div className="navbar-top-content">
            <Link to="/" className="navbar-brand">
              <img src="/logo.png" alt="Trầm Hương Premium" className="navbar-logo" />
            </Link>

            <div className="navbar-search">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Tìm Kiếm Sản Phẩm"
              />
            </div>

            <div className="navbar-contact">
              <div className="phone-numbers">
                <a href="tel:037.929.6886" className="phone-number">037.929.6886</a>
                <a href="tel:0978.691.196" className="phone-number">0978.691.196</a>
              </div>
            </div>

            <button className="navbar-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div className="navbar-menu-section">
        <div className="container">
          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/incense" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Nhang Trầm Hương
            </Link>
            <Link to="/burner-accessories" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Phụ Kiện Xông Đốt
            </Link>
            <Link to="/burner" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Trầm Xông
            </Link>
            <Link to="/scene" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Trầm Cả
            </Link>
            <Link to="/bracelet" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Vòng Tay Trầm Hương
            </Link>
            <Link to="/statue" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Tượng Trầm
            </Link>
            <Link to="/news" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Tin Tức
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;