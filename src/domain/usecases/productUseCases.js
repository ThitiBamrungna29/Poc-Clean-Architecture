import { productService } from "../../application/services/productService";
import { Product } from "../entities/Product";

export class ProductUseCase {
  static async getAllProducts() {
    const products = await productService.getAll();
    return products.map(p => new Product(p.id, p.name, p.price, p.stock));
  }

  static async getProductById(id) {
    const p = await productService.getById(id);
    return new Product(p.id, p.name, p.price, p.stock);
  }

  static async createProduct(product) {
    const newProduct = await productService.create(product);
    return new Product(newProduct.id, newProduct.name, newProduct.price, newProduct.stock);
  }

  static async updateProduct(id, updatedProduct) {
    const updated = await productService.update(id, updatedProduct);
    return new Product(id, updated.name, updated.price, updated.stock);
  }

  static async deleteProduct(id) {
    return await productService.delete(id);
  }
}