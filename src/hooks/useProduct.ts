import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/productApi';
import { Product } from '../types/product';

interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const useProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        // Type assertion for error is good practice with unknown catch errors
        setError((err as Error).message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []); // Empty dependency array means this runs once on mount

  return { products, loading, error };
};