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


    // Get Cart Data Only When Increment and decrement Button Is Clicked
    console.log(cartData);
    console.log(cartTotals);





    return (
        <VIEWCARTDATA_CONTEXT.Provider value={{ setCartData, cartTotals, setCartTotals }}>
            {props.children}
        </VIEWCARTDATA_CONTEXT.Provider>
    )
}

export default VIEWCARTDATA_PROVIDER