import React, { useContext } from "react";
import "./CartPage.css";
import ReactDOM from "react-dom";
import CartOpenClose_Context from "../Context/CartOpenClose/CartOpenCloseContext";

function CartPage(props) {

  const cartOpenCloseCTX = useContext(CartOpenClose_Context)

  return (
    <>
      {ReactDOM.createPortal(

        <div className=" CartPage-div ">
          <div className="CartContainer"></div>
          <p>Chicken</p>
          <p>Chicken</p>
          <p>Chicken</p>
          <p>Chicken</p>


          <h1>
            Total <span>256</span>
          </h1>
          <button>Order</button>
          <button onClick={() => { cartOpenCloseCTX.openCart_FUNC(false) }}>Close</button>


        </div>,
        document.querySelector("#root")
      )}
    </>
  );
}

export default CartPage;
