import { useState, useEffect } from "react";
import { ProductUseCase } from "../../domain/usecases/productUseCases";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await ProductUseCase.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    try {
      const newProduct = await ProductUseCase.createProduct(product);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const updated = await ProductUseCase.updateProduct(id, updatedProduct);
      setProducts(products.map((p) => (p.id === id ? updated : p)));
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await ProductUseCase.deleteProduct(id);
      setProducts(products.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return { products, loading, addProduct, updateProduct, deleteProduct, fetchProducts };
};
