import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { sampleProducts, thacKhoiProducts } from '../data/sampleData';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/" replace />;
  }

  // Find product in both arrays
  const allProducts = [...sampleProducts, ...thacKhoiProducts];
  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Không tìm thấy sản phẩm</h2>
        <p>Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã được gỡ bỏ.</p>
        <a href="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Về Trang Chủ
        </a>
      </div>
    );
  }

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;