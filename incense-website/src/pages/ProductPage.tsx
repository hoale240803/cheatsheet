import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { sampleProducts } from '../data/sampleData';
import { ProductCategory } from '../types/Product';
import './ProductPage.css';

interface ProductPageProps {
  category?: ProductCategory;
  title: string;
}

const ProductPage: React.FC<ProductPageProps> = ({ category, title }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'newest'>('name');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = sampleProducts;

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return a.id.localeCompare(b.id);
        default:
          return 0;
      }
    });

    return sorted;
  }, [category, searchQuery, sortBy]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as 'name' | 'price-low' | 'price-high' | 'newest');
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">
            Khám phá bộ sưu tập {title.toLowerCase()} cao cấp của chúng tôi
          </p>
        </div>

        <div className="filters-section">
          <div className="sort-container">
            <label htmlFor="sort-select" className="sort-label">
              Sắp xếp:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={handleSortChange}
              className="sort-select"
            >
              <option value="name">Tên (A-Z)</option>
              <option value="price-low">Giá (Thấp đến Cao)</option>
              <option value="price-high">Giá (Cao đến Thấp)</option>
              <option value="newest">Mới nhất</option>
            </select>
          </div>
        </div>

        <div className="results-info">
          <p>Tìm thấy {filteredAndSortedProducts.length} sản phẩm</p>
        </div>

        <ProductGrid
          products={filteredAndSortedProducts}
          columns={4}
          onProductClick={(product) => {
            console.log('Product clicked:', product);
          }}
        />

        {filteredAndSortedProducts.length === 0 && searchQuery && (
          <div className="no-results">
            <h3>Không tìm thấy sản phẩm</h3>
            <p>Hãy thử điều chỉnh tìm kiếm hoặc xem tất cả {title.toLowerCase()}.</p>
            <button
              className="btn btn-primary"
              onClick={() => setSearchQuery('')}
            >
              Xóa Tìm Kiếm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;