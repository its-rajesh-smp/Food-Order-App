import React, { useContext, useState } from "react";

import "./ProductPhotoBtn.css";

import SendDataCTX from "../../../../../../Context/SendData/SendDataCTX";
import UpdateTotalCTX from "../../../../../../Context/UpdateTotal/UpdateTotalCTX";

function ProductPhotoBtn(props) {
  console.log("%cRENDER PHOTO", "color:yellow");
  // Context To Get Data in the SendDataCTX
  const sendData = useContext(SendDataCTX);
  const updateTotal = useContext(UpdateTotalCTX);

  //   State To Update the Quantity on increament decreament
  const [quantity, setQuantity] = useState(0);

  /* -------------------------------------------------------------------------- */
  /*                                 INCREAMENT                                 */
  /* -------------------------------------------------------------------------- */
  const increamentQuantity = (clickedProduct) => {
    sendData.getProductDetails(clickedProduct, quantity + 1);
    setQuantity((prev) => prev + 1);
    updateTotal.sendToUpdateTotal(clickedProduct, "_INCREAMENT_");
  };

  /* -------------------------------------------------------------------------- */
  /*                                 DECREAMENT                                 */
  /* -------------------------------------------------------------------------- */
  const decreamentQuantity = (clickedProduct) => {
    sendData.getProductDetails(clickedProduct, quantity - 1);
    setQuantity((prev) => prev - 1);
    updateTotal.sendToUpdateTotal(clickedProduct, "_DECREAMENT_");
  };

  return (
    <div className="ProductPhotoSide-div-button">
      <button
        onClick={() => {
          decreamentQuantity(props.details);
        }}
      >
        -
      </button>
      <p style={{ cursor: "pointer" }}>{quantity}</p>
      <button
        onClick={() => {
          increamentQuantity(props.details);
        }}
      >
        +
      </button>
    </div>
  );
}

export default ProductPhotoBtn;
