# Premium Incense Products Website

A modern, responsive React TypeScript website for promoting incense products, burners, accessories, and related items. Inspired by traditional incense culture and modern e-commerce design.

## Features

- **8 Complete Pages**: Home, Incense, Burner Accessories, Incense Burner, Incense Scene, Incense Bracelet, Incense Statue, and News
- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Modern UI Components**:
  - Interactive carousel for featured products
  - Product cards with hover effects
  - Customer reviews section
  - Search functionality
  - Navigation with mobile menu
- **TypeScript**: Full type safety throughout the application
- **Reusable Components**: Modular design with reusable UI components

## Design Inspiration

The website design is inspired by [dungcutram.com](https://dungcutram.com/) featuring:
- Clean, modern aesthetics
- Red color scheme (#b80d22) for brand consistency
- Professional typography using Roboto Condensed
- Grid-based product layouts
- Cultural elements reflecting incense traditions

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Carousel.tsx     # Product carousel
│   ├── ProductCard.tsx  # Individual product display
│   ├── ProductGrid.tsx  # Product listing grid
│   ├── SearchBar.tsx    # Search functionality
│   └── Reviews.tsx      # Customer reviews
├── pages/               # Main page components
│   ├── HomePage.tsx     # Landing page
│   ├── ProductPage.tsx  # Product category pages
│   └── NewsPage.tsx     # News and articles
├── types/               # TypeScript definitions
│   └── Product.ts       # Data models
├── data/                # Sample data
│   └── sampleData.ts    # Mock products, reviews, news
└── styles/              # CSS files for components
```

## Pages Overview

### 1. Home Page (`/`)
- Hero carousel with featured products
- Featured products grid
- Category showcase
- Customer reviews
- About section

### 2-7. Product Category Pages
- **Incense** (`/incense`) - Premium incense sticks and cones
- **Burner Accessories** (`/burner-accessories`) - Holders and storage
- **Incense Burner** (`/burner`) - Traditional and modern burners
- **Incense Scene** (`/scene`) - Decorative meditation setups
- **Incense Bracelet** (`/bracelet`) - Agarwood jewelry
- **Incense Statue** (`/statue`) - Decorative statues with holders

Each category page includes:
- Search functionality
- Sort options (name, price, newest)
- Product grid with filtering
- Responsive design

### 8. News Page (`/news`)
- Articles about agarwood knowledge
- Meditation and incense practices
- Newsletter subscription
- Author and date information

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd incense-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
# or
yarn build
```

The build folder will contain the optimized production files.

## Component Usage Examples

### Using ProductCard
```tsx
import ProductCard from './components/ProductCard';

const product = {
  id: '1',
  name: 'Sandalwood Incense',
  price: 24.99,
  originalPrice: 34.99,
  image: 'path/to/image.jpg',
  description: 'Premium sandalwood incense',
  category: 'incense'
};

<ProductCard
  product={product}
  onClick={(product) => console.log('Clicked:', product)}
/>
```

### Using Carousel
```tsx
import Carousel from './components/Carousel';

const featuredProducts = [...]; // Array of products

<Carousel products={featuredProducts} />
```

## Customization

### Color Scheme
Update the primary color in `src/index.css`:
```css
:root {
  --primary-color: #b80d22;
  --primary-hover: #a00c1f;
}
```

### Typography
Change fonts in `public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

### Sample Data
Modify `src/data/sampleData.ts` to use your product information, reviews, and news articles.

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **React Router DOM** - Client-side routing
- **CSS3** - Modern styling with Flexbox and Grid
- **Google Fonts** - Roboto Condensed typography
- **Unsplash** - High-quality sample images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email your-email@domain.com or create an issue in the repository.

---

Built with ❤️ for incense enthusiasts worldwide.