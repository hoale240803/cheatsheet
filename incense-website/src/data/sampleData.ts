import { NewsArticle, Product, Review } from '../types/Product';

export const sampleProducts: Product[] = [
  // Bestselling Products
  {
    id: '1',
    name: 'Nhang Trầm Hương Cao Cấp',
    price: 250000,
    originalPrice: 350000,
    image: './Carousel2.jpg',
    description: 'Nhang trầm hương chất lượng cao cho thiền định và thư giãn.',
    category: 'incense',
    featured: true
  },
  {
    id: '2',
    name: 'Nhang Nụ Huyết Long',
    price: 180000,
    originalPrice: 230000,
    image: './Carousel1.jpg',
    description: 'Nhang nụ huyết long với hương thơm đậm đà, huyền bí.',
    category: 'incense',
    featured: true
  },
  {
    id: '3',
    name: 'Lư Đồng Xông Trầm',
    price: 450000,
    originalPrice: 650000,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop',
    description: 'Lư đồng truyền thống với họa tiết tinh xảo.',
    category: 'burner',
    featured: true
  },
  {
    id: '4',
    name: 'Đế Gốm Cắm Nhang',
    price: 120000,
    originalPrice: 180000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: 'Đế gốm đẹp mắt để cắm nhang và nụ.',
    category: 'burner-accessories',
    featured: true
  },
  {
    id: '5',
    name: 'Hộp Gỗ Đựng Nhang',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    description: 'Hộp gỗ thủ công để bảo quản bộ sưu tập nhang.',
    category: 'burner-accessories',
    featured: true
  },
  {
    id: '6',
    name: 'Tượng Phật Thiền Định',
    price: 890000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    description: 'Tượng Phật yên bình với chỗ để nhang cho không gian thiền.',
    category: 'scene',
    featured: true
  },
  {
    id: '7',
    name: 'Vòng Tay Trầm Hương',
    price: 1560000,
    originalPrice: 1800000,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
    description: 'Vòng tay hạt trầm hương cao cấp với hương thơm tự nhiên.',
    category: 'bracelet',
    featured: true
  },
  {
    id: '8',
    name: 'Tượng Sư Tử Canh Gác',
    price: 780000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: 'Tượng sư tử canh gác truyền thống có chỗ đặt nhang.',
    category: 'statue',
    featured: true
  },
  {
    id: '9',
    name: 'Trầm Xông Kỳ Nam',
    price: 2200000,
    originalPrice: 2800000,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    description: 'Trầm xông kỳ nam loại 1, hương thơm quý hiếm.',
    category: 'burner',
    featured: true
  },
  {
    id: '10',
    name: 'Nhang Trầm Thiên Nhiên',
    price: 320000,
    originalPrice: 420000,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    description: 'Nhang trầm hương 100% thiên nhiên, không hóa chất.',
    category: 'incense',
    featured: true
  },
  {
    id: '11',
    name: 'Bộ Ấm Chén Xông Trầm',
    price: 680000,
    originalPrice: 850000,
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop',
    description: 'Bộ ấm chén gốm sứ cao cấp để xông trầm hương.',
    category: 'burner-accessories',
    featured: true
  },
  {
    id: '12',
    name: 'Tượng Quan Âm Bồ Tát',
    price: 1350000,
    originalPrice: 1650000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: 'Tượng Quan Âm Bồ Tát với bệ để nhang trang nghiêm.',
    category: 'statue',
    featured: true
  }
];

// Thác Khói Trầm Hương Products
export const thacKhoiProducts: Product[] = [
  {
    id: 'tk1',
    name: 'COMBO 100 Túi Líp L1 Viên Trắng Siêu Đại Đày Nhiều Size',
    price: 319000,
    originalPrice: 455000,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=180&h=180&fit=crop',
    description: 'Combo 100 túi líp L1 viên trắng siêu đại đày nhiều size.',
    category: 'incense'
  },
  {
    id: 'tk2',
    name: 'Thác Khói Đen Tràng Men Xông Trầm - Thác Gốm Sứ Cao Cấp',
    price: 38000,
    originalPrice: 52000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=180&h=180&fit=crop',
    description: 'Thác khói đen tráng men xông trầm cao cấp.',
    category: 'burner'
  },
  {
    id: 'tk3',
    name: 'Thác Nước Hương Ngầm Trầm - Thác Led Phong Thủy Cao Cấp',
    price: 950000,
    originalPrice: 1140000,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=180&h=180&fit=crop',
    description: 'Thác nước hương ngầm trầm với đèn LED phong thủy.',
    category: 'scene'
  },
  {
    id: 'tk4',
    name: 'Thác Song Ên Xông Trầm - Lư Hương Có Điện Phong Thủy',
    price: 68000,
    originalPrice: 105000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=180&h=180&fit=crop',
    description: 'Thác song ên xông trầm với lư hương có điện.',
    category: 'burner'
  },
  {
    id: 'tk5',
    name: 'Thác Khói Chú Tiểu Tử Không Xông Hương Khói Chảy Ngược',
    price: 355000,
    originalPrice: 405000,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=180&h=180&fit=crop',
    description: 'Thác khói chú tiểu tử không xông hương khói chảy ngược.',
    category: 'scene'
  },
  {
    id: 'tk6',
    name: 'Tượng Võ Điển Ngài Thiền Xông Trầm - Lư Xông Trầm Cao Cấp',
    price: 165000,
    originalPrice: 210000,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=180&h=180&fit=crop',
    description: 'Tượng võ điển ngài thiền xông trầm cao cấp.',
    category: 'statue'
  },
  {
    id: 'tk7',
    name: 'Thác Khói Mini Gốm Sứ Xông Trầm Hương Khói Ngược',
    price: 95000,
    originalPrice: 125000,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=180&h=180&fit=crop',
    description: 'Thác khói mini gốm sứ xông trầm hương khói ngược.',
    category: 'burner'
  },
  {
    id: 'tk8',
    name: 'Bộ Thác Khói Xông Trầm Phong Thủy Cao Cấp',
    price: 285000,
    originalPrice: 350000,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=180&h=180&fit=crop',
    description: 'Bộ thác khói xông trầm phong thủy cao cấp.',
    category: 'scene'
  },
  {
    id: 'tk9',
    name: 'Thác Khói Đơn Giản Gốm Sứ Trắng Xông Trầm',
    price: 75000,
    originalPrice: 95000,
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=180&h=180&fit=crop',
    description: 'Thác khói đơn giản gốm sứ trắng xông trầm.',
    category: 'burner'
  },
  {
    id: 'tk10',
    name: 'Thác Khói Rồng Phượng Hoàng Xông Trầm Hương',
    price: 450000,
    originalPrice: 580000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=180&h=180&fit=crop',
    description: 'Thác khói rồng phượng hoàng xông trầm hương.',
    category: 'scene'
  },
  {
    id: 'tk11',
    name: 'Lư Xông Trầm Hương Thác Khói Cổ Điển',
    price: 220000,
    originalPrice: 280000,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=180&h=180&fit=crop',
    description: 'Lư xông trầm hương thác khói cổ điển.',
    category: 'burner'
  },
  {
    id: 'tk12',
    name: 'Thác Khói Phong Thủy Núi Non Xông Trầm',
    price: 380000,
    originalPrice: 480000,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=180&h=180&fit=crop',
    description: 'Thác khói phong thủy núi non xông trầm.',
    category: 'scene'
  }
];

export const sampleReviews: Review[] = [
  {
    id: '1',
    customerName: 'Sarah Johnson',
    rating: 5,
    comment: 'The sandalwood incense has the most amazing fragrance. Perfect for my morning meditation routine.',
    date: '2024-01-15'
  },
  {
    id: '2',
    customerName: 'Michael Chen',
    rating: 5,
    comment: 'Fast shipping and excellent quality. The brass burner is exactly as described and beautifully crafted.',
    date: '2024-01-10'
  },
  {
    id: '3',
    customerName: 'Emily Rodriguez',
    rating: 4,
    comment: 'Love the variety of scents available. The dragon blood incense cones burn evenly and smell divine.',
    date: '2024-01-08'
  },
  {
    id: '4',
    customerName: 'David Kumar',
    rating: 5,
    comment: 'The agarwood bracelet exceeded my expectations. Subtle fragrance that lasts all day.',
    date: '2024-01-05'
  },
  {
    id: '5',
    customerName: 'Lisa Wang',
    rating: 5,
    comment: 'Beautiful Buddha statue! Creates such a peaceful atmosphere in my home office.',
    date: '2024-01-03'
  },
  {
    id: '6',
    customerName: 'James Miller',
    rating: 4,
    comment: 'Great quality products and reasonable prices. Will definitely order again.',
    date: '2024-01-01'
  }
];

export const sampleNews: NewsArticle[] = [
  {
    id: '1',
    title: 'The Ancient Art of Agarwood Cultivation',
    excerpt: 'Discover the centuries-old tradition of growing and harvesting premium agarwood for incense production.',
    content: 'Agarwood, also known as oud, is one of the most precious aromatic woods in the world...',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    publishDate: '2024-01-20',
    author: 'Master Li Wei'
  },
  {
    id: '2',
    title: 'Benefits of Daily Incense Meditation',
    excerpt: 'Learn how incorporating incense into your daily meditation practice can enhance mindfulness and inner peace.',
    content: 'Scientific studies have shown that certain fragrances can significantly impact our mental state...',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    publishDate: '2024-01-18',
    author: 'Dr. Maria Santos'
  },
  {
    id: '3',
    title: 'Choosing the Right Incense for Your Space',
    excerpt: 'A comprehensive guide to selecting incense types based on your environment and desired atmosphere.',
    content: 'Different spaces call for different aromatic experiences. Whether you are creating a meditation corner...',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop',
    publishDate: '2024-01-15',
    author: 'Chen Mei Ling'
  }
];