// src/api/productApi.ts
import axios from 'axios';
import { Product } from '../types/product';

const API_BASE_URL = 'https://fakestoreapi.in/api'; // Changed API base URL

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    // The endpoint is now /products under the new base URL
        const response = await axios.get<any>(`${API_BASE_URL}/products`);


    // The .in API often returns a 'data' key with the actual array.
    // Let's check the response structure. If it's like { data: [products] },
    // we need to return response.data.data.
    // If it's just [products] directly, then response.data is correct.
    // Based on my current check of fakestoreapi.in, it directly returns an array.
    // However, it's good practice to log and verify.
    console.log("API Response from fakestoreapi.in:", response.data);
         const productsArray = response.data?.products; // Use optional chaining for safety

    if (!Array.isArray(productsArray)) {
      console.error("API response data is not an array:", response.data);
      throw new Error("Invalid data format received from the product API.");
    }
    // Additionally, the .in API returns price, ratings, and count as strings.
    // We should parse them to numbers if our components expect numbers.
    const parsedProducts: Product[] = productsArray.map((item: any) => ({
      id: item.id, // Assuming ID is also a string here from .in
      title: item.title,
      category: item.category,
      price: parseFloat(item.price), // Convert price to number
      description: item.description,
      image: item.image,
      ratings: parseFloat(item.ratings), // Convert ratings to number
      count: parseInt(item.count, 10), // Convert count to integer
    })) as Product[]; // Assert the type after parsing

    return parsedProducts;

  } catch (error) {
    console.error("Error fetching products from fakestoreapi.in:", error);
    // Re-throw or return a specific error structure if you want more granular error handling upstream
     if (error instanceof Error) {
      throw new Error(`Could not fetch products from fakestoreapi.in: ${error.message}. Please try again later.`);
    }
    throw new Error("Could not fetch products from fakestoreapi.in. An unknown error occurred. Please try again later.");
  }
};