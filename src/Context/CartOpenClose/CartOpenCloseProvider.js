import React, { useState } from 'react';
import CartOpenClose_CONTEXT from './CartOpenCloseContext';


const CartOpenClose_PROVIDER=(props)=>{

    // State to Open Close Cart When Cart Button Is Clicked
    const[openCart_BOOL,openCart_FUNC]=useState(false)


    return (
        <CartOpenClose_CONTEXT.Provider value={{openCart_BOOL,openCart_FUNC}}>
            {props.children}
        </CartOpenClose_CONTEXT.Provider>
    )
}



export default CartOpenClose_PROVIDER