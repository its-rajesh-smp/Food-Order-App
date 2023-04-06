import React, { useContext, useEffect, useState } from 'react';
import "./Cart.css"
import CartOpenClose_CONTEXT from '../../Context/CartOpenClose/CartOpenCloseContext';
import VIEWCARTDATA_CONTEXT from '../../Context/ViewCartData/ViewCartDataContext';

function Cart(props) {


    // Context To OpenClose Cart
    const context_OpenCloseCart = useContext(CartOpenClose_CONTEXT)

    // Context To Update Totals
    const context_ViewCartData = useContext(VIEWCARTDATA_CONTEXT)



    // Function Run when cart button is clicked
    const OpenCartHandeler_Function = () => {
        context_OpenCloseCart.openCart_FUNC(true)
    }


    const quantity = context_ViewCartData.cartTotals.totalQuantity

    return (
        <>
            {
                quantity !== 0 &&

                <div className='Cart-div container  '>


                    <button onClick={OpenCartHandeler_Function} className='Cart-div-button'>
                        <div className='Cart-div-button-CartPrice'>
                            <p><span>{context_ViewCartData.cartTotals.totalQuantity}</span> Item</p>
                            <p> <span className='moneyType'>₹</span><span className='price'> {context_ViewCartData.cartTotals.totalPrice}</span> <span className='taxes'>+taxes</span></p>
                        </div>

                        <div className='Cart-div-button-ViewCart' >
                            <p>VIEW CART</p>
                            <i className='bx bxs-right-arrow'></i>
                        </div>
                    </button>
                </div>


            }
        </>
    );
}

export default Cart;
