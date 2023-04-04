import React from 'react';
import "./CartItem.css"

function  CartItem (props) {
    return ( 
        <div className=' CartItem-div '>

            <div className='CartItem-div-item'>
                <i className='bx bx-checkbox-square'></i>
                <p>Chicken</p>
            </div>


            <div className='CartItem-div-item-price'>
                <p className='CartItem-div-item-quantity'>10</p>

                <p className='original'>250</p>
                <p className='discount'>150</p>
            </div>
        </div>
     );
}

export default CartItem;
