import React from "react";
import "./EmptyCart.css";

function EmptyCart(props) {
  return (
    <div className=" EmptyCart-div ">
      <h1>OOps!</h1>
      <h1>Cart Become Empty</h1>
      <img
        src="https://cdn-icons-png.flaticon.com/512/412/412986.png"
        alt="emptyCart"
      />
    </div>
  );
}

export default EmptyCart;
