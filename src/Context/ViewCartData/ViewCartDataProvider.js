import React, { useEffect, useState } from 'react';

import VIEWCARTDATA_CONTEXT from "./ViewCartDataContext";
import CartOpenClose_CONTEXT from '../CartOpenClose/CartOpenCloseContext';
import { useContext } from 'react';


const VIEWCARTDATA_PROVIDER = (props) => {
    // Load When CartOpenClose  Button is clickd


    // Get Cart Data
    const [cartData, setCartData] = useState({
        name: "",
        price: 0,
        quantity: 0
    })


    // State To Update CartTotals
    const [cartTotals, setCartTotals] = useState({ totalPrice: 0, totalQuantity: 0 })

    // State To Update Quantity From LocalStorage If Item Present In Cart When Screen Load
    const [updateCart, setUpdateCart] = useState()


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
            if (localStorage.getItem("CARTDATA") === null && localStorage.getItem("CARTTOTAL") === null) {
                // create a object of object
                // CARTNAME : {itemName:{price:50,quantity:5}}
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
            // Also Storing the CartTotal each time
            localStorage.setItem("CARTTOTAL", JSON.stringify(cartTotals))

        }
    }, [cartTotals, cartData])


    /* -------------------------------------------------------------------------- */
    /*                          GET DATA WHEN SCREEN LOAD                         */
    /* -------------------------------------------------------------------------- */

    const CartOpenCloseCTX = useContext(CartOpenClose_CONTEXT)

    useEffect(() => {
        if (localStorage.getItem("CARTDATA") !== null && localStorage.getItem("CARTTOTAL") !== null) {
            // Geting Cart From Localstorage
            const cartDataFromLocal = JSON.parse(localStorage.getItem("CARTDATA"))
            const cartTotalDataFromLocal = JSON.parse(localStorage.getItem("CARTTOTAL"))

            // Sending To SillyProductComponent to update quantitys
            setUpdateCart(cartDataFromLocal)

            // Update the hoverCartDetails totalAmount && totalQuantity
            setCartTotals(cartTotalDataFromLocal)
        }
    }, [CartOpenCloseCTX.openCart_BOOL])    //Run Whenever HoverCart Is Clicked


    return (
        <VIEWCARTDATA_CONTEXT.Provider value={{ setCartData, cartTotals, setCartTotals, updateCart }}>
            {props.children}
        </VIEWCARTDATA_CONTEXT.Provider>
    )
}

export default VIEWCARTDATA_PROVIDER