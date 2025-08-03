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
        setError(null); 
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
       
        setError((err as Error).message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, loading, error };
};
