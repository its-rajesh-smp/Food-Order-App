import React, { useContext, useEffect } from "react";
import "./CartHoverBtn.css";
import PageChangeCTX from "../../../../Context/PageChange/PageChangeCTX"; // Page Change Context
import { useDispatch, useSelector } from "react-redux";
import { showCartTotalFromServerACT } from "../../../../Actions/cartTotalActions";


function CartHoverBtn(props) {
  // Context To Change Page
  const changePageToCart = useContext(PageChangeCTX);

  console.log("CART HOVER BTN RENDER");

  const myState = useSelector(state => state.cartTotalReducer.cartTotal)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(showCartTotalFromServerACT())
  }, [])





  return (
    myState.totalQuantity !== 0 &&
    <>
      {
        <div
          onClick={changePageToCart.goToCartPage}
          className="CartHoverBtn-div container  "
        >
          <button className="CartHoverBtn-div-button">
            <div className="CartHoverBtn-div-button-CartPrice">
              <p>
                <span>{myState.totalQuantity}</span> Item
              </p>
              <p>
                <span className="moneyType">₹</span>
                <span className="price"> {myState.totalPrice}</span>
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

export default React.memo(CartHoverBtn);
