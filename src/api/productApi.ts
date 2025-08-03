
import axios from 'axios';
import { Product } from '../types/product';

const API_BASE_URL = 'https://fakestoreapi.in/api'; 

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    
        const response = await axios.get<any>(`${API_BASE_URL}/products`);


   
         const productsArray = response.data?.products; 

    if (!Array.isArray(productsArray)) {
      console.error("API response data is not an array:", response.data);
      throw new Error("Invalid data format received from the product API.");
    }
    
    const parsedProducts: Product[] = productsArray.map((item: any) => ({
      id: item.id, 
      title: item.title,
      category: item.category,
      price: parseFloat(item.price), 
      description: item.description,
      image: item.image,
      ratings: parseFloat(item.ratings), 
      count: parseInt(item.count, 10), 
    })) as Product[]; 
    return parsedProducts;

  } catch (error) {
    console.error("Error fetching products from fakestoreapi.in:", error);
   
     if (error instanceof Error) {
      throw new Error(`Could not fetch products from fakestoreapi.in: ${error.message}. Please try again later.`);
    }
    throw new Error("Could not fetch products from fakestoreapi.in. An unknown error occurred. Please try again later.");
  }
};
