// src/types/product.d.ts
export interface Product {
  id: string; // ID appears to be a string in .in API
  title: string; // 'name' instead of 'title'
  category: string;
  price: number; // Converted to number in API call
  description: string;
  image: string;
  ratings: number; // Converted to number in API call
  count: number; // Converted to number in API call
}