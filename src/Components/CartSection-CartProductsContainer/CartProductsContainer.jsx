import React, { useContext, useEffect, useState } from "react";
import "./CartProductsContainer.css";
import CartItem from "../UI/CartSection/CartItem/CartItem";
// import PageChangeCTX from "../../Context/PageChange/PageChangeCTX";

function CartProductsContainer(props) {

  // const renderOnPageChange = useContext(PageChangeCTX);
  /* -------------------------------------------------------------------------- */
  /*                         CREATING ARRAY OF CartItem                         */
  /* -------------------------------------------------------------------------- */

  //   State To Set The CartItems
  const [listOfItem, setListOfItem] = useState([]);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("LOCAL_CART_DATA"));
    if (localData !== null) {
      const keyFromLocalObj = Object.keys(localData);

      const newCartArrayFromLocal = keyFromLocalObj.map((val) => {
        const itemName = val;
        const itemPrice = localData[val].price;
        const itemQuantity = localData[val].quantity;

        return (
          <CartItem
            name={itemName}
            price={itemPrice}
            quantity={itemQuantity}
            key={Math.random()}
            removeFromList={removeFromList}
          />
        );
      });

      setListOfItem(newCartArrayFromLocal);
    }
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                        FUNCTION TO REMOVE FROM LIST                        */
  /* -------------------------------------------------------------------------- */
  function removeFromList(itemName) {
    setListOfItem((prev) => {
      return prev.filter((val) => {
        if (val.props.name !== itemName.name) {
          return val;
        }
      });
    });
  }

  return <div className=" CartProductsContainer-div ">{listOfItem}</div>;
}

export default CartProductsContainer;
