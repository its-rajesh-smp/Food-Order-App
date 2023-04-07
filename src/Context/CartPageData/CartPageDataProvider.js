import React, { useContext, useEffect, useState } from 'react';
import CartPageData_Context from './CartPageDataContext';
import AddToCartCTX from '../AddToCart/AddToCartCTX';

const CartPageData_Provider = (props) => {

    const updateData = useContext(AddToCartCTX)




    return (
        <CartPageData_Context.Provider value={{ updateData }}>
            {props.children}
        </CartPageData_Context.Provider>
    )
}


export default CartPageData_Provider