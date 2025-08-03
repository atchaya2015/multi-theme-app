import React from 'react';
import { Product } from '../types/product';
import styles from './ProductList.module.css';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <li key={product.id} className={styles.productItem}>
          <img src={product.image} alt={product.title} className={styles.image} />
          <div className={styles.details}>
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            <p className={styles.description}>{product.description.substring(0, 150)}...</p>
            <button className={styles.button}>View Details</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;