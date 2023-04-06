import React, { useContext, useEffect, useState } from "react";
import "./SillyProductComponent.css";

import { img } from "../../../../DATA";
import VIEWCARTDATA_CONTEXT from "../../../../Context/ViewCartData/ViewCartDataContext";

function ProductPhoto(props) {

  const context = useContext(VIEWCARTDATA_CONTEXT);
  const [quantityCount, setQuantityCount] = useState(0);

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
  }, [context.updateCart, props.details])





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
    <div className=" ProductPhoto-div ">
      <div className="ProductPhoto-div-img">
        <img src={img} alt="" />
      </div>

      <div className="ProductPhoto-div-button">

        {/* If Quantity is Not 0 then we have to show the quantity and buttons otherwise i will show only ADD with onclick event */}
        {quantityCount !== 0 && <button onClick={decrement}>-</button>}

        {quantityCount === 0 && <p style={{ cursor: "pointer" }} onClick={increament}>{"ADD"}</p>}

        {quantityCount !== 0 && <p>{quantityCount}</p>}

        {quantityCount !== 0 && <button onClick={increament}>+</button>}

      </div>
    </div>
  );
}



/* -------------------------------------------------------------------------- */
/*                               PRODUCT DETAILS                              */
/* -------------------------------------------------------------------------- */

function ProductDetails(props) {
  return (
    <div className="ProductDetails-div">
      <div className="productName">
        <i className="bx bx-checkbox-square"></i>
        <p>{props.details.name}</p>
      </div>

      <p className="productDetails-price">
        ₹<span>{props.details.price}</span>
      </p>

      <p className="desc">{props.details.desc}</p>

      <div className="likeShare">
        <button>
          <i className="bx bx-heart"></i>
        </button>
        <button>
          <i className="bx bx-share"></i>
        </button>
      </div>
    </div>
  );
}

export { ProductPhoto, ProductDetails };
