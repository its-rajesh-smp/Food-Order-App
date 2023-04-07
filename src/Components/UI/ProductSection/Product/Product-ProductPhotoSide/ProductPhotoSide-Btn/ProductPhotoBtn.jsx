import React, { useContext } from "react";

import "./ProductPhotoBtn.css";
import { useState } from "react";
import AddToCartCTX from "../../../../../../Context/AddToCart/AddToCartCTX";

function ProductPhotoBtn(props) {
    // Context
    const updateQuantityCTX = useContext(AddToCartCTX);

    // State to change the Quanity value
    const [quanity, setQuanity] = useState(0);

    console.log("RENDER");
    /* -------------------------------------------------------------------------- */
    /*                           function to increament                           */
    /* -------------------------------------------------------------------------- */
    const increament = () => {
        setQuanity((prev) => {
            // Send The Data When Button Is Clicked
            updateQuantityCTX.getDataWhenBTNclick(prev + 1, props.details);
            return prev + 1;
        });
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
        }
    };

    return (
        <div className="ProductPhotoSide-div-button">
            <button onClick={decreament}>-</button>
            <p style={{ cursor: "pointer" }}>{quanity}</p>
            <button onClick={increament}>+</button>
        </div>
    );
}

export default ProductPhotoBtn;
