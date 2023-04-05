import React, { useEffect, useState } from 'react';

import VIEWCARTDATA_CONTEXT from "./ViewCartDataContext";


const VIEWCARTDATA_PROVIDER = (props) => {

    // Get Cart Data
    const [cartData, setCartData] = useState({
        name: "",
        price: 0,
        quantity: 0
    })


    // State To Update CartTotals
    const [cartTotals, setCartTotals] = useState({ totalPrice: 0, totalQuantity: 0 })


    /* -------------------------------------------------------------------------- */
    /*                            UPDATE LOCAL STORAGE                            */
    /* -------------------------------------------------------------------------- */
    // Get Cart Data Only When Increment and decrement Button Is Clicked
    useEffect(() => {
        if (cartData.name !== "") {

            // Create A Key by the name of that product
            const itemName = cartData.name
            // Create a object of price & quantity
            const details = { price: cartData.price, quantity: cartData.quantity }



            // If nothing is present in the localStorage
            if (localStorage.getItem("CARTDATA") === null) {
                // create a object of object
                // CARTNAME : {Product1:{price:50,quantity:5}}
                localStorage.setItem("CARTDATA", JSON.stringify({ [itemName]: details }))
            }
            // If CARTDATA object exist
            else {
                //todo Get all data and store in getData
                const getData = JSON.parse(localStorage.getItem("CARTDATA"))
                // Check if current items quantity is 0 or what
                if (details.quantity === 0) {
                    // If 0 then remove that object from getData
                    getData[itemName] = undefined
                }
                else {
                    // Else add that item or replace that item if already exist
                    getData[itemName] = details
                }
                //todo Upload getData again to localStorage
                localStorage.setItem("CARTDATA", JSON.stringify(getData))

            }

        }
    }, [cartTotals, cartData])





    return (
        <VIEWCARTDATA_CONTEXT.Provider value={{ setCartData, cartTotals, setCartTotals }}>
            {props.children}
        </VIEWCARTDATA_CONTEXT.Provider>
    )
}

export default VIEWCARTDATA_PROVIDER