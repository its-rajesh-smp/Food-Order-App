import React from "react";
import "./ProductsContainer.css";
import Product from "../UI/ProductSection/Product/Product";
import DATA from "../../Assets/DATA";

function ProductContainer(props) {
  const productArray = DATA.map((val) => {
    return <Product details={val} key={Math.random()} />;
  });
  return <div className=" ProductContainer-div ">{productArray}</div>;
}

export default ProductContainer;
