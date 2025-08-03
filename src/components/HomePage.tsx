import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useProducts } from '../hooks/useProduct';
import ProductCard from './ProductCard';
import ProductList from './ProductList';
import appLayoutStyles from '../App.module.css'; 

const HomePage: React.FC = () => {
  const { currentTheme } = useTheme();
  const { products, loading, error } = useProducts();

  return (
    <section className={appLayoutStyles.contentSection}>
      <h2>Welcome to Our PixelForge!</h2>
      <p>Beyond just hearing the game, our wireless headset transforms your audio experience into a strategic advantage. It’s built for competitive play and total immersion, ensuring you never miss a critical cue and your voice is always heard. Step up your game, one sound at a time.Explore our wide range of products tailored just for you. Change themes to see different layouts!</p>
      <button>Shop Now</button>

      <h3>Featured Products</h3>
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && (
        currentTheme.layout === 'grid' ? (
          <div className={appLayoutStyles.cardGrid}> {/* Use appLayoutStyles for the grid container */}
            {products.slice(0, 7).map(product => ( 
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <ProductList products={products.slice(0, 4)} /> // Show first 4 for list
        )
      )}
    </section>
  );
};

export default HomePage;
