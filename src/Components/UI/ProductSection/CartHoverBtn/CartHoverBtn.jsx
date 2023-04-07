import React, { useContext, useEffect, useState } from 'react';
import "./CartHoverBtn.css"
import CartOpenCloseCTX from '../../../../Context/CartOpenClose/CartOpenCloseContext';
import AddToCartCTX from '../../../../Context/AddToCart/AddToCartCTX';

function CartHoverBtn(props) {

    const cartOpenCTX = useContext(CartOpenCloseCTX)
    const updateTotalCTX = useContext(AddToCartCTX)






    const TotalQuantity = updateTotalCTX.totalCart.quantity
    const TotalPrice = updateTotalCTX.totalCart.price

    console.log("HoverBtnRender");

    return (
        <>
            {
                <div onClick={cartOpenCTX.openCartPage} className='CartHoverBtn-div container  '>


                    <button className='CartHoverBtn-div-button'>
                        <div className='CartHoverBtn-div-button-CartPrice'>
                            <p><span>{TotalQuantity}</span> Item</p>
                            <p> <span className='moneyType'>₹</span><span className='price'> {TotalPrice}</span> <span className='taxes'>+taxes</span></p>
                        </div>

                        <div className='CartHoverBtn-div-button-ViewCart' >
                            <p>VIEW CART</p>
                            <i className='bx bxs-right-arrow'></i>
                        </div>
                    </button>
                </div>


            }
        </>
    );
}

export default CartHoverBtn;
