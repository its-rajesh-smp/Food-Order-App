import React, { useState } from "react";

// Context
const CartOpenCloseCTX = React.createContext({
  openCartPage_BOOL: false,
  closeCartPage: () => { },
  openCartPage: () => { },
});

// Context Provider
const CartOpenCloseProvider = (props) => {
  // State to Open Close Cart When Cart Button Is Clicked
  const [openCartPage_BOOL, openCartPage_FUNC] = useState(0);


  //function to open the cart
  const openCartPage = () => {
    openCartPage_FUNC(1);
  };
  //function to close the cart
  const closeCartPage = () => {
    openCartPage_FUNC(0);
  };

  const openPlaceOrderPage = () => {
    openCartPage_FUNC(2)
  }

  return (
    <CartOpenCloseCTX.Provider
      value={{ openCartPage_BOOL, closeCartPage, openCartPage, openPlaceOrderPage }}
    >
      {props.children}
    </CartOpenCloseCTX.Provider>
  );
};

export default CartOpenCloseCTX;
export { CartOpenCloseProvider };
