import React, { useContext, useEffect } from "react";

import "./ProductPhotoBtn.css";
import { useState } from "react";
import AddToCartCTX from "../../../../../../Context/AddToCart/AddToCartCTX";

function ProductPhotoBtn(props) {
    console.log("RENDER");

    // Context
    const updateQuantityCTX = useContext(AddToCartCTX);

    // State to change the Quanity value
    const [quanity, setQuanity] = useState(0);


    /* -------------------------------------------------------------------------- */
    /*                   UPDATE THE QUANTITY FROM LOCAL STORAGE                   */
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        const localCartData = updateQuantityCTX.localCartData
        if (localCartData != {}) {
            const name = props.details.name
            if (localCartData[name]) {
                setQuanity(localCartData[name].quantity)
            }
        }
    }, [updateQuantityCTX.localCartData])







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
