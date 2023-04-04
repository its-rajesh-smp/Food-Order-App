import React from "react";
import "./CartPage.css";
import ReactDOM from "react-dom";

function CartPage(props) {
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
          <button>Close</button>


        </div>,
        document.querySelector("#root")
      )}
    </>
  );
}

export default CartPage;
