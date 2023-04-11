import React, { useContext } from "react";
import "./CartHoverBtn.css";
// Page Change Context
import PageChangeCTX from "../../../../Context/PageChange/PageChangeCTX";
// Update Total Context
import UpdateTotalCTX from "../../../../Context/UpdateTotal/UpdateTotalCTX";

function CartHoverBtn(props) {
  // Context To Change Page
  const changePageToCart = useContext(PageChangeCTX);
  //Context to update the total
  const updateTotalValue = useContext(UpdateTotalCTX);

  function liftState(data) {
    console.log(data);
    console.log("HURRY");
  }

  updateTotalValue.liftState(liftState);

  // let totalPrice = updateTotalValue.totalValues.price;
  // let totalQuantity = updateTotalValue.totalValues.quantity;
  console.log("HOVER RENDER");
  return (
    <>
      {
        <div
          onClick={changePageToCart.goToCartPage}
          className="CartHoverBtn-div container  "
        >
          <button className="CartHoverBtn-div-button">
            <div className="CartHoverBtn-div-button-CartPrice">
              <p>
                <span>{20}</span> Item
              </p>
              <p>
                <span className="moneyType">₹</span>
                <span className="price"> {0}</span>
                <span className="taxes">+taxes</span>
              </p>
            </div>

            <div className="CartHoverBtn-div-button-ViewCart">
              <p>VIEW CART</p>
              <i className="bx bxs-right-arrow"></i>
            </div>
          </button>
        </div>
      }
    </>
  );
}

export default CartHoverBtn;
