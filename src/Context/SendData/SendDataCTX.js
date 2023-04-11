import React, { useContext } from "react";

// Context
const SendDataCTX = React.createContext({ getProductDetails: () => { } });


// Provider
const SendDataProvier = (props) => {


    console.log("RENDER SEND DATA CTX");
    /* -------------------------------------------------------------------------- */
    /*                          GET QUANTITY WITH PRODUCT                         */
    /* -------------------------------------------------------------------------- */

    const getProductDetails = (clickedProduct, quantity) => {
        let newLocalObject = { [clickedProduct.name]: { price: clickedProduct.price, quantity: quantity } }
        // console.log(newLocalObject);
        updateToLocalStorage(newLocalObject, clickedProduct.name)
    }



    /* -------------------------------------------------------------------------- */
    /*                           UPDATE IN LOCAL STORAGE                          */
    /* -------------------------------------------------------------------------- */

    function updateToLocalStorage(newLocalObject, productName) {

        // If Nothing Present
        if (localStorage.getItem("LOCAL_CART_DATA") === null) {
            localStorage.setItem("LOCAL_CART_DATA", JSON.stringify(newLocalObject))
        }
        else {
            let getLocalData = JSON.parse(localStorage.getItem("LOCAL_CART_DATA"))
            let targetProduct = productName
            // If not Present Then Add
            if (getLocalData[targetProduct] === undefined) {
                let newUpdatedLocalObject = { ...getLocalData, ...newLocalObject }
                localStorage.setItem("LOCAL_CART_DATA", JSON.stringify(newUpdatedLocalObject))
            }
            // If Quantity===0 remove and again upload
            else if (newLocalObject[productName].quantity === 0) {
                delete getLocalData[targetProduct]
                localStorage.setItem("LOCAL_CART_DATA", JSON.stringify(getLocalData))
            }
            // Increase/decrease and again upload
            else {

                getLocalData[targetProduct].quantity = newLocalObject[productName].quantity
                localStorage.setItem("LOCAL_CART_DATA", JSON.stringify(getLocalData))
            }


        }
    }


    return (
        <SendDataCTX.Provider value={{ getProductDetails }}>
            {props.children}
        </SendDataCTX.Provider>
    )
}


export default SendDataCTX
export { SendDataProvier }