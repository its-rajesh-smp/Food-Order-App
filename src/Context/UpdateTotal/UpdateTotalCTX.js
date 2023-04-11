import React, { useContext, useEffect, useState } from "react";
import PageChangeCTX from "../PageChange/PageChangeCTX";


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



    /* -------------------------------------------------------------------------- */
    /*                     UPDATE FROM LOCAL STORAGE WHEN LOAD                    */
    /* -------------------------------------------------------------------------- */

    const reloadWhenPagechange = useContext(PageChangeCTX)
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("TOTAL_VALUE"))
        if (localData !== null) {
            const price = localData.price
            const quantity = localData.quantity
            setTotalValues({ price: price, quantity: quantity })
        }
        else {
            setTotalValues({ price: 0, quantity: 0 })
        }

    }, [reloadWhenPagechange.currentPage])




    return (
        <UpdateTotalCTX.Provider value={{ sendToUpdateTotal, totalValues, setTotalValues }}>{props.children}</UpdateTotalCTX.Provider>
    )
}


export default UpdateTotalCTX
export { UpdateTotalProvider }