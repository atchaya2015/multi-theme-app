import React from 'react';
import { Product } from '../types/product';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <p className={styles.description}>{product.description.substring(0, 100)}...</p>
      <button className={styles.button}>View Details</button>
    </div>
  );
};

export default ProductCard;