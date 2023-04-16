import React from 'react';
import "./CartItem.css"
import CartItemBtn from './CartItemBtn/CartItemBtn';

function CartItem(props) {




    return (
        <div className=' CartItem-div '>

            <div className='CartItem-div-item'>
                <i className='bx bx-checkbox-square'></i>
                <p>{props.details.name}</p>
            </div>

            <CartItemBtn details={props.details} />

        </div>
    );
}

export default CartItem;
