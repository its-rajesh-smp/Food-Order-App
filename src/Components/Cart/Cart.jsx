import React, { useContext } from 'react';
import "./Cart.css"
import CartOpenClose_Context from '../../Context/CartOpenClose/CartOpenCloseContext';

function Cart(props) {

    const cartOpenCloseCTX = useContext(CartOpenClose_Context)


    return (
        <div className='Cart-div container  '>
            <button className='Cart-div-button' onClick={() => { cartOpenCloseCTX.openCart_FUNC(true) }}>
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
