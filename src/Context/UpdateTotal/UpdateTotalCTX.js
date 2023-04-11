import React, { useContext, useEffect, useState } from "react";
import GetDataFromLocalCTX from "../GetDataFromLocal/GetDataFromLocal";

// Context
const UpdateTotalCTX = React.createContext({
    totalValues: { price: 0, quantity: 0 },
    updateTotalValues: () => { },
    sendToUpdateTotal: () => { }
});



// Provider
const UpdateTotalProvider = (props) => {

    //! MAIN PROBLEM
    //! This State Is Creating Problem just because when it update this context will render means every component
    //! That is under its consumer will render

    // State To Update The CartHoverBtn's Value
    const [totalValues, setTotalValues] = useState({ price: 0, quantity: 0 })


    /* -------------------------------------------------------------------------- */
    /*                                UPDATE TOTAL                                */
    /* -------------------------------------------------------------------------- */

    const sendToUpdateTotal = (clickedProduct, action) => {
        if (action === "_INCREAMENT_") {
            setTotalValues((prev) => {
                let newPrice = prev.price + clickedProduct.price
                let newQuantity = prev.quantity + 1
                let newTotal = { price: newPrice, quantity: newQuantity }
                updateToLocalStorage(newTotal)
                return newTotal
            })
        }
        if (action === "_DECREAMENT_") {
            setTotalValues((prev) => {
                let newPrice = prev.price - clickedProduct.price
                let newQuantity = prev.quantity - 1
                let newTotal = { price: newPrice, quantity: newQuantity }
                updateToLocalStorage(newTotal)
                return newTotal
            })
        }
    }


    /* -------------------------------------------------------------------------- */
    /*                           UPLOAD IN LOCALSTORAGE                           */
    /* -------------------------------------------------------------------------- */

    const updateToLocalStorage = (totalValue) => {
        localStorage.setItem("TOTAL_VALUE", JSON.stringify(totalValue))
    }

    //Context to update the total from local Storage
    /**
     * Due To UseEffect In Get Data From Local CTX
     * that will render once so this component will render once
     * so photobtns render once 
     * same after render in this useEffect this component also render once
     * so photo buttons are also render once
     */
    const updateTotalFromLocal = useContext(GetDataFromLocalCTX);
    // useEffect(() => {
    //     if (updateTotalFromLocal.localData !== "") {
    //         const localTotal = updateTotalFromLocal.localData.localTotalData
    //         const price = localTotal.price
    //         const quantity = localTotal.quantity
    //         // setTotalValues({ price: price, quantity: quantity })
    //     }

    // }, [updateTotalFromLocal.localData])




    return (
        <UpdateTotalCTX.Provider value={{ sendToUpdateTotal, totalValues, setTotalValues }}>{props.children}</UpdateTotalCTX.Provider>
    )
}


export default UpdateTotalCTX
export { UpdateTotalProvider }