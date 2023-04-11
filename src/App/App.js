import React, { useContext } from "react";
import "./App.css";
// Pages
import CartPage from "../Pages/CartPage/CartPage";
import ProductPage from "../Pages/ProductPage/ProductPage";

// Change Page Context
import PageChangeCTX from "../Context/PageChange/PageChangeCTX";

function App(props) {

  // Context To OpenClose Cart
  const changePage = useContext(PageChangeCTX);

  return (
    <div className=" App-div container ">
      {changePage.currentPage === 0 && <ProductPage />}
      {changePage.currentPage === 1 && <CartPage />}
    </div>
  );
}

export default App;
