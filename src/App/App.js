import React, { useContext } from "react";
import "./App.css";
import CartPage from "../Pages/CartPage/CartPage";
import OrderSuccessPage from "../Pages/OrderSuccessPage/OrderSuccessPage";
import ProductPage from "../Pages/ProductPage/ProductPage";

import CartOpenCloseCTX from "../Context/CartOpenClose/CartOpenCloseContext";

function App(props) {
  // Context To OpenClose Cart
  const cartOpenCloseCTX = useContext(CartOpenCloseCTX);

  return (
    <div className=" App-div container ">
      {!cartOpenCloseCTX.openCartPage_BOOL && <ProductPage />}
      {cartOpenCloseCTX.openCartPage_BOOL && <CartPage />}
      {/* <OrderSuccessPage /> */}
    </div>
  );
}

export default App;
