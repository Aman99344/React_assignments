import "./Product.css";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="productContainer">
      <div className="productCategory">
        <Link to="electronic">Electronics</Link>
        <Link to="Jewellary">Jewellary</Link>
        <Link to="Mens'Clothings">Mens'Clothing</Link>
        <Link to="Woman'sClothings">Woman's Clothings</Link>
      </div>
      <div className="productDetails">
         <Outlet />
      </div>
    </div>
  );
};

export default Product;
