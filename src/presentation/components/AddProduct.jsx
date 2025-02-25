import React, { useState } from "react";

const AddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({ name: "", price: "", stock: "" });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({ name: "", price: "", stock: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} value={product.name} required />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} value={product.price} required />
      <input type="number" name="stock" placeholder="Stock" onChange={handleChange} value={product.stock} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
