import React, { useContext, useEffect, useState } from "react";
import "./ProductPhotoSide.css";

import { img } from "../../../DATA";
import VIEWCARTDATA_CONTEXT from "../../../../../Context/ViewCartData/ViewCartDataContext";

function ProductPhoto(props) {

  const context = useContext(VIEWCARTDATA_CONTEXT);
  const [quantityCount, setQuantityCount] = useState(0);

  console.log(props.details.name);


  useEffect(() => {
    // Checking If the updateCart is undefined or not
    if (context.updateCart !== undefined) {
      // Checking If The Cart Product is available in Our Product List Or Not
      if (context.updateCart[props.details.name]) {

        // Quantity and price of that specific cart product
        const localQuantity = context.updateCart[props.details.name].quantity

        // Updating the product quantity
        setQuantityCount(localQuantity)

        // When user click to increase the quantity we have increament the stored quantity so initially i give the quantity attribute to that cart product
        // Next time when user click the button
        // todo props.details.quantity == undefined | become false and it will update the current product quantity by this | (props.details.quantity += 1) |
        props.details.quantity = context.updateCart[props.details.name].quantity
      }
    }
  }, [])





  /* -------------------------------------------------------------------------- */
  /*                            INCREAMENT DATA SEND                            */
  /* -------------------------------------------------------------------------- */

  const increament = () => {
    // Update The Product Count --> INCREAMENT
    setQuantityCount((prev) => {
      return prev + 1;
    });

    // Create Object To Pass for --> Konsa Item Kitna Quantity
    const cartData = {
      name: props.details.name,
      price: props.details.price,
      quantity:
        props.details.quantity === undefined
          ? (props.details.quantity = 1)
          : (props.details.quantity += 1),
    };

    // Pass the object to viewCartDataContext
    context.setCartData(cartData);

    // Update The Floating Cart Total Quantity & Total Price
    context.setCartTotals((prev) => {
      return { totalPrice: prev.totalPrice + props.details.price, totalQuantity: prev.totalQuantity + 1 }
    });



  };

  /* -------------------------------------------------------------------------- */
  /*                             DECREMENT DATASEND                             */
  /* -------------------------------------------------------------------------- */

  const decrement = () => {
    // Only if ProductCount > 0
    if (quantityCount > 0) {

      // Update The Product Count --> DECREMENT
      setQuantityCount((prev) => {
        return prev - 1;
      });

      // Create Object To Pass for --> Konsa Item Kitna Quantity
      const cartData = {
        name: props.details.name,
        price: props.details.price,
        quantity:
          props.details.quantity === undefined
            ? (props.details.quantity = 1)
            : (props.details.quantity -= 1),
      };



      // Pass the object to viewCartDataContext
      context.setCartData(cartData);

      // Update The Floating Cart Total Quantity & Total Price
      context.setCartTotals((prev) => {
        return { totalPrice: prev.totalPrice - props.details.price, totalQuantity: prev.totalQuantity - 1 }
      });

    }
  };

  /* -------------------------------------------------------------------------- */
  /*                     CHENGE BUTTON IF ITEM IS NOT ADDED                     */
  /* -------------------------------------------------------------------------- */







  return (
    <div className=" ProductPhotoSide-div ">
      <div className="ProductPhotoSide-div-img">
        <img src={img} alt="" />
      </div>


    </div>
  );
}



export default ProductPhoto;
