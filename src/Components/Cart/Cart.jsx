import React from 'react';
import "./Cart.css"

function  Cart (props) {
    return ( 
        <div className='Cart-div container  '>
            <button className='Cart-div-button'>
                <div className='Cart-div-button-CartPrice'>
                    <p><span>10</span> Item</p>
                    <p> <span className='moneyType'>₹</span><span className='price'>290</span> <span className='taxes'>+taxes</span></p>
                </div>

                <div className='Cart-div-button-ViewCart' >
                    <p>VIEW CART</p>
                    <i class='bx bxs-right-arrow'></i>
                </div>
            </button>
        </div>
     );
}

export default Cart;
