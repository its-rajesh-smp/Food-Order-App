import React, { useContext, useEffect, useState } from "react";
import "./SillyProductComponent.css";

import { img } from "../../../../DATA";
import VIEWCARTDATA_CONTEXT from "../../../../Context/ViewCartData/ViewCartDataContext";

function ProductPhoto(props) {
  const [quantityCount, setQuantityCount] = useState(0);

  const context = useContext(VIEWCARTDATA_CONTEXT);

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
        props.details.quantity == undefined
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
        price: props.details.price + props.details.price,
        quantity:
          props.details.quantity == undefined
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




  return (
    <div className=" ProductPhoto-div ">
      <div className="ProductPhoto-div-img">
        <img src={img} alt="" />
      </div>

      <div className="ProductPhoto-div-button">
        <button onClick={decrement}>-</button>

        <p>{quantityCount}</p>

        <button onClick={increament}>+</button>
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
