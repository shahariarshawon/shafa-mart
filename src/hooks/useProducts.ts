import { TProduct } from "@/types/product";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/data/productsData.ts");

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();

      console.log("API DATA:", data);

      setProducts(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error };
};
