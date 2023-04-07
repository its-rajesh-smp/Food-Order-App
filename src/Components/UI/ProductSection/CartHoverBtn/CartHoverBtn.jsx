import React, { useContext } from 'react';
import "./CartHoverBtn.css"
import CartOpenCloseCTX from '../../../../Context/CartOpenClose/CartOpenCloseContext';


function CartHoverBtn(props) {

    const cartOpenCTX = useContext(CartOpenCloseCTX)



    return (
        <>
            {


                <div onClick={cartOpenCTX.openCartPage} className='CartHoverBtn-div container  '>


                    <button className='CartHoverBtn-div-button'>
                        <div className='CartHoverBtn-div-button-CartPrice'>
                            <p><span>{20}</span> Item</p>
                            <p> <span className='moneyType'>₹</span><span className='price'> {20}</span> <span className='taxes'>+taxes</span></p>
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
