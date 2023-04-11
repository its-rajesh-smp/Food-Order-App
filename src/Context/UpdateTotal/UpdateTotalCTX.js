import React, { useState } from "react";

// Context
const UpdateTotalCTX = React.createContext({
    totalValues: { price: 0, quantity: 0 },
    updateTotalValues: () => { },
    sendToUpdateTotal: () => { }
});



// Provider
const UpdateTotalProvider = (props) => {
    console.log("UPDATE CONTEXT TOTAL");


    console.log("SSs");

    function liftState(callBack) {
        callBack(55)
    }

    const sendToUpdateTotal = (clickedProduct) => {
        const price = clickedProduct.price
        const quantity = clickedProduct.quantity

    }



    return (
        <UpdateTotalCTX.Provider value={{ liftState }}>{props.children}</UpdateTotalCTX.Provider>
    )
}


export default UpdateTotalCTX
export { UpdateTotalProvider }