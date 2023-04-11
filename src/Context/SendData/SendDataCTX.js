import React, { useContext } from "react";

// Context
const SendDataCTX = React.createContext({ getProductDetails: () => { } });


// Provider
const SendDataProvier = (props) => {


    console.log("RENDER SEND DATA CTX");
    /* -------------------------------------------------------------------------- */
    /*                          GET QUANTITY WITH PRODUCT                         */
    /* -------------------------------------------------------------------------- */

    const getProductDetails = (clickedProduct, action) => {
        console.log(clickedProduct);
    }




    return (
        <SendDataCTX.Provider value={{ getProductDetails }}>
            {props.children}
        </SendDataCTX.Provider>
    )
}


export default SendDataCTX
export { SendDataProvier }