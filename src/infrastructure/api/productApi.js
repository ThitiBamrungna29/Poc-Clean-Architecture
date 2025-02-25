import axios from "axios";

const API_URL = import.meta.env.VITE_API_DIRECT;

export const productApi = {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/api/products`);
    return response.data;
  },
  getById: async (id) => {
    const response = await axios.get(`${API_URL}/api/products/${id}`);
    return response.data;
  },
  create: async (product) => {
    const response = await axios.post(`${API_URL}/api/addProducts`, product);
    return response.data;
  },
  update: async (id, product) => {
    const response = await axios.put(`${API_URL}/api/updateProducts/${id}`, product);
    return response.data;
  },
  delete: async (id) => {
    await axios.delete(`${API_URL}/api/deleteProducts/${id}`);
  },
};

