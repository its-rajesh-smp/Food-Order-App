import React, { useState } from "react";

// Context
const CartOpenCloseCTX = React.createContext({
  openCartPage_BOOL: false,
  closeCartPage: () => {},
  openCartPage: () => {},
});

// Context Provider
const CartOpenCloseProvider = (props) => {
  // State to Open Close Cart When Cart Button Is Clicked
  const [openCartPage_BOOL, openCartPage_FUNC] = useState(false);

  //function to open the cart
  const openCartPage = () => {
    openCartPage_FUNC(true);
  };
  //function to close the cart
  const closeCartPage = () => {
    openCartPage_FUNC(false);
  };

  return (
    <CartOpenCloseCTX.Provider
      value={{ openCartPage_BOOL, closeCartPage, openCartPage }}
    >
      {props.children}
    </CartOpenCloseCTX.Provider>
  );
};

export default CartOpenCloseCTX;
export { CartOpenCloseProvider };
