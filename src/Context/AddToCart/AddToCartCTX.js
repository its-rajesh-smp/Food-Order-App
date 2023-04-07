import React from "react";

const AddToCartCTX = React.createContext({
  getDataWhenBTNclick: () => { },
  updateTotal: () => { },
});

export default AddToCartCTX;
