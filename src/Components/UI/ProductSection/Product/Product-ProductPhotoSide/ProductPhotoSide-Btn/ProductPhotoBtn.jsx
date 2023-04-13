import React, { useContext, useEffect, useRef, useState } from "react";

import "./ProductPhotoBtn.css";

import SendDataCTX from "../../../../../../Context/SendData/SendDataCTX";
import UpdateTotalCTX from "../../../../../../Context/UpdateTotal/UpdateTotalCTX";

function ProductPhotoBtn(props) {
  console.log("RENDER");
  // Context To Get Data in the SendDataCTX
  const sendData = useContext(SendDataCTX);

  //!Problem With This UpdateTotal
  const updateTotal = useContext(UpdateTotalCTX);


  // Reference To Get Increament Quantity
  const [incQuantity, setIncQuantity] = useState(1)

  //   State To Update the Quantity on increament decreament
  const [quantity, setQuantity] = useState(0);
  /* -------------------------------------------------------------------------- */
  /*                        UPDATE QUANTITY FROM LOCAL                          */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("LOCAL_CART_DATA"));
    if (localData !== null && Object.keys(localData).length != 0) {
      const targetLocalProduct = localData[props.details.name];
      if (targetLocalProduct !== undefined) {
        setQuantity(targetLocalProduct.quantity);
      }
    } else {
      setQuantity(0);
    }
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                 INCREAMENT                                 */
  /* -------------------------------------------------------------------------- */
  const increamentQuantity = (clickedProduct) => {
    sendData.getProductDetails(clickedProduct, quantity + Number(incQuantity));
    setQuantity((prev) => prev + Number(incQuantity));
    updateTotal.sendToUpdateTotal(clickedProduct, "_INCREAMENT_", Number(incQuantity));
  };

  /* -------------------------------------------------------------------------- */
  /*                                 DECREAMENT                                 */
  /* -------------------------------------------------------------------------- */
  const decreamentQuantity = (clickedProduct) => {

    if (quantity > 0 && (quantity - Number(incQuantity)) >= 0) {
      sendData.getProductDetails(clickedProduct, quantity - Number(incQuantity));
      setQuantity((prev) => prev - Number(incQuantity));
      updateTotal.sendToUpdateTotal(clickedProduct, "_DECREAMENT_", Number(incQuantity));
    }
  };


  return (
    <div className="ProductPhotoSide-div-button">

      {quantity !== 0 && <button onClick={() => { decreamentQuantity(props.details); }}>-</button>}

      {quantity === 0 && <p onClick={() => { increamentQuantity(props.details); }} style={{ cursor: "pointer" }}>ADD🛍️</p>}
      {quantity !== 0 && <p >{quantity}</p>}

      {quantity !== 0 && <input type="number" min={1} className="incQuantityAmt" value={incQuantity} onChange={(e) => { setIncQuantity(e.target.value) }} />}

      {quantity !== 0 && <button onClick={() => { increamentQuantity(props.details); }}>+</button>}

    </div>
  );
}

export default ProductPhotoBtn;
