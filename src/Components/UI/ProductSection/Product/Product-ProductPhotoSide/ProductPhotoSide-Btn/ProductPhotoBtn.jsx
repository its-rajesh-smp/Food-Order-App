import React, { useContext, useEffect } from "react";

import "./ProductPhotoBtn.css";
import { useState } from "react";
import AddToCartCTX from "../../../../../../Context/AddToCart/AddToCartCTX";
import CartOpenCloseCTX from "../../../../../../Context/CartOpenClose/CartOpenCloseContext"
function ProductPhotoBtn(props) {
    // console.log("RENDER");

    // Context
    const updateQuantityCTX = useContext(AddToCartCTX);
    const renderWhenOpen = useContext(CartOpenCloseCTX)

    // State to change the Quanity value
    const [quanity, setQuanity] = useState(0);


    /* -------------------------------------------------------------------------- */
    /*                   UPDATE THE QUANTITY FROM LOCAL STORAGE                   */
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        const localCartData = updateQuantityCTX.localCartData
        // I am checking if anything present in the localCartData
        // In this way just because
        // if i try to check if localCartData is empty or not by localCartData !=={}
        // it will gives us true
        // ? console.log(localCartData !== {} )--> true
        // ? console.log(localCartData === {} )--> true
        if (Object.keys(localCartData).length !== 0) {
            // then i am updating the quantity of that particular product
            const name = props.details.name
            if (localCartData[name]) {
                // Updating the state of that particular quantity if it present in the cart
                setQuanity(localCartData[name].quantity)
            }
            else {
                // else updating it to 0
                setQuanity(0)
            }
        }
        else {
            // Else I am updating all product quantitys to 0
            console.log("RUNNING ELSE");
            setQuanity(0)
        }
    }, [updateQuantityCTX.localCartData, renderWhenOpen.openCartPage_BOOL])






    /* -------------------------------------------------------------------------- */
    /*                           function to increament                           */
    /* -------------------------------------------------------------------------- */
    const increament = () => {
        setQuanity((prev) => {
            // Send The Data When Button Is Clicked
            updateQuantityCTX.getDataWhenBTNclick(prev + 1, props.details);
            return prev + 1;
        });

        updateQuantityCTX.setTotalCart((prev) => {
            return { price: prev.price + props.details.price, quantity: prev.quantity + 1 }
        })

    };

    /* -------------------------------------------------------------------------- */
    /*                           function to decreament                           */
    /* -------------------------------------------------------------------------- */
    const decreament = () => {
        if (quanity > 0) {
            setQuanity((prev) => {
                // Send The Data When Button Is Clicked
                updateQuantityCTX.getDataWhenBTNclick(prev - 1, props.details);
                return prev - 1;
            });

            updateQuantityCTX.setTotalCart((prev) => {
                return { price: prev.price - props.details.price, quantity: prev.quantity - 1 }
            })
        }
    };



    return (
        <div className="ProductPhotoSide-div-button">

            {quanity !== 0 && <button onClick={decreament}>-</button>}


            {quanity !== 0 && <p>{quanity}</p>}
            {quanity === 0 && <p onClick={increament} style={{ cursor: "pointer" }}>ADD</p>}


            {quanity !== 0 && <button onClick={increament}>+</button>}
        </div>
    );
}

export default ProductPhotoBtn;
