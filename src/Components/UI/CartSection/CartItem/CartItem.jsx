import React, { useContext, useState } from "react";
import "./CartItem.css";
// Context To Send Data To SendDataCTX
import SendDataCTX from "../../../../Context/SendData/SendDataCTX";
//Context To Send Total To UpdateTotalCTX
import UpdateTotalCTX from "../../../../Context/UpdateTotal/UpdateTotalCTX";

function CartItem(props) {
  const sendData = useContext(SendDataCTX);
  const updateTotal = useContext(UpdateTotalCTX);

  const [quantity, setQuantity] = useState(props.quantity);

  /* -------------------------------------------------------------------------- */
  /*                                 INCREAMENT                                 */
  /* -------------------------------------------------------------------------- */
  const increamentQuantity = (clickedProduct) => {
    setQuantity((prev) => {
      sendData.getProductDetails(clickedProduct, prev + 1);
      return prev + 1;
    });
    updateTotal.sendToUpdateTotal(clickedProduct, "_INCREAMENT_", 1);
  };

  /* -------------------------------------------------------------------------- */
  /*                                 DECREAMENT                                 */
  /* -------------------------------------------------------------------------- */
  const decreamentQuantity = (clickedProduct) => {
    setQuantity((prev) => {
      sendData.getProductDetails(clickedProduct, prev - 1);
      return prev - 1;
    });
    updateTotal.sendToUpdateTotal(clickedProduct, "_DECREAMENT_", 1);
  };

  return (
    quantity !== 0 && (
      <div className=" CartItem-div ">
        <div className="CartItem-div-item">
          <i className="bx bx-checkbox-square"></i>
          <p>{props.name}</p>
        </div>

        <div className="CartItem-div-item-price">
          <div className="CartItem-div-item-quantity">
            <button
              onClick={() => {
                increamentQuantity(props);
              }}
            >
              +
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => {
                decreamentQuantity(props);
              }}
            >
              -
            </button>
          </div>

          <p className="original">
            <span>{quantity}</span> * <span>{props.price} =</span>
            <span>{Number(quantity) * Number(props.price)}</span>
          </p>
        </div>
      </div>
    )
  );
}

export default CartItem;
