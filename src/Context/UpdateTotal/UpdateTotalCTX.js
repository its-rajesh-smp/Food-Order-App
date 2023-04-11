import React, { useState } from "react";

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


    //function update the total
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


    // Function To Upload In LocalStorage 
    const updateToLocalStorage = (totalValue) => {
        localStorage.setItem("TOTAL_VALUE", JSON.stringify(totalValue))
    }





    return (
        <UpdateTotalCTX.Provider value={{ sendToUpdateTotal, totalValues, setTotalValues }}>{props.children}</UpdateTotalCTX.Provider>
    )
}


export default UpdateTotalCTX
export { UpdateTotalProvider }