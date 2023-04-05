import React from 'react';
import "./CartProductsContainer.css"
import CartItem from './CartItem/CartItem';

function  CartProductsContainer (props) {





    
    return ( 
        <div className=' CartProductsContainer-div '>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
     );
}

export default CartProductsContainer;
