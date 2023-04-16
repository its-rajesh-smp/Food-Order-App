import React, { useState } from "react";
import "./ProductPhotoBtn.css";
import { addProductToServer } from "../../../../../../Actions/productsAction";
import { useDispatch } from "react-redux";
import { increamentTotalInServerACT, decreamentTotalInServerACT } from "../../../../../../Actions/cartTotalActions";

function ProductPhotoBtn(props) {

  console.log("PHOTOBTNRENDER");


  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(props.details.quantity)


  /* -------------------------------------------------------------------------- */
  /*                                 INCREAMENT                                 */
  /* -------------------------------------------------------------------------- */
  const increamentCount = () => {

    const newObject = {
      name: props.details.name,
      id: props.details.id,
      price: props.details.price,
      quantity: quantity + 1
    }

    dispatch(addProductToServer(newObject)).then((val) => {
      if (val === "SUCCESS") {
        dispatch(increamentTotalInServerACT(newObject))
        setQuantity((prev) => prev + 1)
      }
    })

  }

  /* -------------------------------------------------------------------------- */
  /*                                 DECREAMENT                                 */
  /* -------------------------------------------------------------------------- */
  const decreamentCount = () => {
    const newObject = {
      name: props.details.name,
      id: props.details.id,
      price: props.details.price,
      quantity: quantity - 1
    }

    if (quantity - 1 != -1) {
      dispatch(addProductToServer(newObject)).then((val) => {
        if (val === "SUCCESS") {
          dispatch(decreamentTotalInServerACT(newObject))
          setQuantity((prev) => prev - 1)
        }
      })
    }


  }



  return (
    <div className="ProductPhotoSide-div-button">

      {quantity !== 0 ? <button onClick={decreamentCount}>-</button> : ""}


      {quantity !== 0 ? <p style={{ cursor: "pointer" }}>{quantity}</p> : <p onClick={increamentCount} style={{ cursor: "pointer" }}>ADD🛒 </p>}


      {quantity !== 0 ? <button onClick={increamentCount}>+</button> : ""}

    </div>
  );
}

export default ProductPhotoBtn;
