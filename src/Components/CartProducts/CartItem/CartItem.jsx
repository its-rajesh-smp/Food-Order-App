import React from 'react';
import "./CartItem.css"

function CartItem(props) {
    return (
        <div className=' CartItem-div '>

            <div className='CartItem-div-item'>
                <i className='bx bx-checkbox-square'></i>
                <p>{props.name}</p>
            </div>


            <div className='CartItem-div-item-price'>
                <p className='CartItem-div-item-quantity'>{props.quantity}</p>

                <p className='original'>{props.price}</p>
                <p className='discount'>{"DISCOUNT"}</p>
            </div>
        </div>
    );
}

export default CartItem;
