import React, { useEffect, useState } from 'react';
import CartPageData_Context from './CartPageDataContext';


const CartPageData_Provider = (props) => {

    /* -------------------------------------------------------------------------- */
    /*                       GET CART DATA FROM LOCALSTORAGE                      */
    /* -------------------------------------------------------------------------- */
    const [cartDataArray, setCartDataArray] = useState([])
    const [cartTotal, setCartTotal] = useState({ totalPrice: 0, totalQuantity: 0 })


    useEffect(() => {
        // Geting The LocalStorage Object
        const localData = JSON.parse(localStorage.getItem("CARTDATA"))
        const localCartTotal = JSON.parse(localStorage.getItem("CARTTOTAL"))
        const localOfferData = JSON.parse(localStorage.getItem("APPLIEDOFFER"))


        // If CARTDATA is present
        if (localData !== undefined && localCartTotal !== undefined) {

            // Generating Cart Product Array
            const localDataArray = []

            for (let i in localData) {
                let name = i
                let price = localData[name].price
                let quantity = localData[name].quantity
                localDataArray.push({ name: name, price: price, quantity: quantity })
            }
            // Sending array of object to the CartProductContainer.jsx
            setCartDataArray(localDataArray)

            if (localOfferData !== null) {
                localCartTotal.discount = localOfferData.discount
                setCartTotal(localCartTotal)
                console.log(localCartTotal.discount);
            }
            else {
                localCartTotal.discount = 0
                setCartTotal(localCartTotal)
            }

        }
    }, [])




    return (
        <CartPageData_Context.Provider value={{ cartDataArray, cartTotal }}>
            {props.children}
        </CartPageData_Context.Provider>
    )
}


export default CartPageData_Provider