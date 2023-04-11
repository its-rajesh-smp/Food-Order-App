import React, { useEffect, useState } from 'react';
// CONTEXT
const GetDataFromLocalCTX = React.createContext();



// PROVIDER
const GetDataFromLocalProvider = (props) => {

    // State To Send Data
    const [localData, setLocalData] = useState("")
    console.log("%cDATA GET FROM LOCAL", "color:red");

    /* -------------------------------------------------------------------------- */
    /*                       GET ALL DATA FROM LOCAL STORAGE                      */
    /* -------------------------------------------------------------------------- */

    // useEffect(() => {
    //     const localCartData = JSON.parse(localStorage.getItem("LOCAL_CART_DATA"))
    //     const localTotalData = JSON.parse(localStorage.getItem("TOTAL_VALUE"))
    //     setLocalData({ localCartData: localCartData, localTotalData: localTotalData })
    // }, [])


    return (
        <GetDataFromLocalCTX.Provider value={{ localData }}>
            {props.children}
        </GetDataFromLocalCTX.Provider>
    )
}




export default GetDataFromLocalCTX
export { GetDataFromLocalProvider }