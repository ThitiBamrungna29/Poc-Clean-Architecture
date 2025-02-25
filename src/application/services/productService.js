import { productApi } from "../../infrastructure/api/productApi";

export const productService = {
  getAll: () => productApi.getAll(),
  getById: (id) => productApi.getById(id),
  create: (product) => productApi.create(product),
  update: (id, product) => productApi.update(id, product),
  delete: (id) => productApi.delete(id),
};
