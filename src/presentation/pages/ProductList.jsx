import { useState, useEffect } from "react";
import { ProductUseCase } from "../../domain/usecases/productUseCases";
import ProductTable from "../components/ProductTable";
import AddProduct from "../components/AddProduct";
import * as uiAnt from "../themes/uiAnt";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    console.log("Fetching products...");
    ProductUseCase.getAllProducts().then((data) => {
      console.log("Products:", data);
      setProducts(data);
    });
  }, []);
  

  const handleAddProduct = async (newProduct) => {
    await ProductUseCase.createProduct(newProduct);
    ProductUseCase.getAllProducts().then(setProducts);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = async (updatedProduct) => {
    await ProductUseCase.updateProduct(updatedProduct.id, updatedProduct);
    setEditingProduct(null);
    ProductUseCase.getAllProducts().then(setProducts);
  };

  const handleDelete = async (productId) => {
    await ProductUseCase.deleteProduct(productId);
    ProductUseCase.getAllProducts().then(setProducts);
  };

  return (
    <div>
      <h2>จัดการสินค้า</h2>
      <AddProduct onAddProduct={handleAddProduct} />

      {editingProduct && (
        <div>
          <h3>แก้ไขสินค้า</h3>
          <input
            type="text"
            value={editingProduct.name}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, name: e.target.value })
            }
          />
          <input
            type="number"
            value={editingProduct.price}
            onChange={(e) =>
              setEditingProduct({
                ...editingProduct,
                price: Number(e.target.value),
              })
            }
          />
          <button onClick={() => handleUpdate(editingProduct)}>บันทึก</button>
          <button onClick={() => setEditingProduct(null)}>ยกเลิก</button>
        </div>
      )}

      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
        UI={uiAnt}
      />
    </div>
  );
};

export default ProductList;
