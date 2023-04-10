import React, { useContext } from "react";
import "./App.css";
import CartPage from "../Pages/CartPage/CartPage";
import OrderSuccessPage from "../Pages/OrderSuccessPage/OrderSuccessPage";
import ProductPage from "../Pages/ProductPage/ProductPage";

import CartOpenCloseCTX from "../Context/CartOpenClose/CartOpenCloseContext";
import AlertConfirm from "../Components/UI/Alert/Alert";
import OfferPromoCTX from "../Context/OfferPromoData/OfferPromoCtx";

function App(props) {
  // Context To OpenClose Cart
  const cartOpenCloseCTX = useContext(CartOpenCloseCTX);

  // Context to OpenClose Offer Alert Card
  const openOfferAlert = useContext(OfferPromoCTX)

  return (
    <div className=" App-div container ">
      {openOfferAlert.alertConfirm && <AlertConfirm />}

      {cartOpenCloseCTX.openCartPage_BOOL === 0 && <ProductPage />}

      {cartOpenCloseCTX.openCartPage_BOOL === 1 && <CartPage />}

      {cartOpenCloseCTX.openCartPage_BOOL === 2 && <OrderSuccessPage />}
    </div>
  );
}

export default App;
