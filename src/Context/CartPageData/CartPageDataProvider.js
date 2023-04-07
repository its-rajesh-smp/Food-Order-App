import React, { useEffect, useState } from 'react';
import CartPageData_Context from './CartPageDataContext';


const CartPageData_Provider = (props) => {




    return (
        <CartPageData_Context.Provider value={{}}>
            {props.children}
        </CartPageData_Context.Provider>
    )
}


export default CartPageData_Provider