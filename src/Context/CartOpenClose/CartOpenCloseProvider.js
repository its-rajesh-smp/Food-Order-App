import React, { useState } from 'react';
import CartOpenClose_Context from './CartOpenCloseContext';



const CartOpenClose_Provider = (props) => {


    const [openCart, openCart_FUNC] = useState(false)



    return (
        <CartOpenClose_Context.Provider value={{ openCart, openCart_FUNC }}>
            {props.children}
        </CartOpenClose_Context.Provider>
    )
}


export default CartOpenClose_Provider;