import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { CartOpenCloseProvider } from "./Context/CartOpenClose/CartOpenCloseContext";
import AddToCartProvider from "./Context/AddToCart/AddToCartProvider";
import CartPageDataProvider from "./Context/CartPageData/CartPageDataProvider"


import { OfferPromoProvider } from "./Context/OfferPromoData/OfferPromoCtx";
ReactDOM.render(
  <CartOpenCloseProvider>
    <OfferPromoProvider>
      <AddToCartProvider>
        <CartPageDataProvider>
          <App />
        </CartPageDataProvider>
      </AddToCartProvider>
    </OfferPromoProvider>
  </CartOpenCloseProvider>,

  document.querySelector("#root")
);