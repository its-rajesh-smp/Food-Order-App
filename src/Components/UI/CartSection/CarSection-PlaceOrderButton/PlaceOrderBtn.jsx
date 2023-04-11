import React, { useContext } from "react";
import "./PlaceOrderBtn.css";
import UpdateTotalCtx from "../../../../Context/UpdateTotal/UpdateTotalCTX";
import pageChangeCtx from "../../../../Context/PageChange/PageChangeCTX";
function PlaceOrderBtn(props) {
  // Context to get Total Quantity & Amount
  const totalCTX = useContext(UpdateTotalCtx);
  const changePage = useContext(pageChangeCtx);

  /* -------------------------------------------------------------------------- */
  /*                              THANKS FOR ORDER                              */
  /* -------------------------------------------------------------------------- */
  const takeToOrderSuccessPage = () => {
    const localData = JSON.parse(localStorage.getItem("LOCAL_CART_DATA"));

    printInConsole(localData);
    changePage.goToOrderSuccessPage();
  };

  /* -------------------------------------------------------------------------- */
  /*                          PRINT THE DATA IN CONSOLE                         */
  /* -------------------------------------------------------------------------- */
  const printInConsole = (localData) => {
    // Print Cart Data
    const key = Object.keys(localData);
    for (let i = 0; i < key.length; i++) {
      const name = key[i];
      const price = localData[name].price;
      const quantity = localData[name].quantity;
      console.log(
        `%c${name}--${price}--${quantity}`,
        "color:red;background-color:white;padding:15px;font-size:20px"
      );
    }
  };

  const totalQuantity = totalCTX.totalValues.quantity;
  return (
    totalQuantity !== 0 && (
      <div onClick={takeToOrderSuccessPage} className=" PlaceOrderBtn-div ">
        <h3>Place Order</h3>
        <i className="bx bx-cart-download"></i>
      </div>
    )
  );
}

export default PlaceOrderBtn;
