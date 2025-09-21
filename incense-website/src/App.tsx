import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NewsPage from './pages/NewsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/incense" element={<ProductPage category="incense" title="Nhang Trầm Hương" />} />
            <Route path="/burner-accessories" element={<ProductPage category="burner-accessories" title="Phụ Kiện Xông Đốt" />} />
            <Route path="/burner" element={<ProductPage category="burner" title="Trầm Xông" />} />
            <Route path="/scene" element={<ProductPage category="scene" title="Trầm Cả" />} />
            <Route path="/bracelet" element={<ProductPage category="bracelet" title="Vòng Tay Trầm Hương" />} />
            <Route path="/statue" element={<ProductPage category="statue" title="Tượng Trầm" />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;