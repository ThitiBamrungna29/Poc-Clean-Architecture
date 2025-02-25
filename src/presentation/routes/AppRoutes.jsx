import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductList";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
