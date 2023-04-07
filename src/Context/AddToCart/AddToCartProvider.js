import React from "react";

import AddToCartCTX from "./AddToCartCTX";

const AddToCartProvider = (props) => {
    /* -------------------------------------------------------------------------- */
    /*                             INCREAMENT QUANTITY                            */
    /* -------------------------------------------------------------------------- */

    const getDataWhenBTNclick = (quantity, ProductDetails) => {
        // Create a object where item name is the key
        // @ {  FishCurry : {   quantity:5 , price: 10  } }
        // So that we can update the quantity of it by the key
        const newProductData = {
            [ProductDetails.name]: {
                price: ProductDetails.price,
                quantity: quantity,
            },
        };
        // Sending new Formed Product Data and the ProductDetails as an key
        // So that we can update it letter in ther server
        sendDataToServer(newProductData, ProductDetails.name);
    };

    /* -------------------------------------------------------------------------- */
    /*                       FUNCTION TO ADD IN LOCALSTORAGE                      */
    /* -------------------------------------------------------------------------- */
    const sendDataToServer = (ProductDetails, ProductKey) => {
        if (localStorage.getItem("USER_CART_PRODUCT_DATA") === null) {
            // If something present inside localStorage
            localStorage.setItem(
                "USER_CART_PRODUCT_DATA",
                JSON.stringify(ProductDetails)
            );
        } else {
            // If something present inside localStorage
            //* Get All the data ---> add/update new one--> Store agein
            const getAllCartProductData = JSON.parse(
                localStorage.getItem("USER_CART_PRODUCT_DATA")
            );




            if (getAllCartProductData[ProductKey] === undefined) {
                // If That ProductKey is not Present then create a object of existing items with new item
                const newData = { ...getAllCartProductData, ...ProductDetails }
                // Upload again
                localStorage.setItem("USER_CART_PRODUCT_DATA", JSON.stringify(newData))
            }
            else {
                // If Product key present
                // Update the target data of getAllCartProductData object
                getAllCartProductData[ProductKey] = ProductDetails[ProductKey]
                if (ProductDetails[ProductKey].quantity === 0) {
                    // if quantity become zero then delete that target data from getAllCartProductData object
                    // ? by using delete operator we can remove a key from an Object
                    delete getAllCartProductData[ProductKey]
                }
                // Upload getAllCartProductData object to localStorage
                localStorage.setItem("USER_CART_PRODUCT_DATA", JSON.stringify(getAllCartProductData))
            }

        }
    };

    return (
        <AddToCartCTX.Provider value={{ getDataWhenBTNclick }}>
            {props.children}
        </AddToCartCTX.Provider>
    );
};

export default AddToCartProvider;
