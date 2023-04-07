import React, { useContext } from 'react';
import "./SecondaryHeader.css"

import CartOpenClose_CONTEXT from '../../../../Context/CartOpenClose/CartOpenCloseContext';
import CartPageData_Context from '../../../../Context/CartPageData/CartPageDataContext';



function SecondaryHeader() {

    // Context To Close Cart
    const context_OpenCloseCart = useContext(CartOpenClose_CONTEXT)
    // Function Run when cart close button is clicked
    const CloseCartHandeler_Function = () => {
        context_OpenCloseCart.openCart_FUNC(false)
    }


    return (
        <div className='SecondaryHeader-div '>
            <div className='header'>
                <i className='bx bx-cart-alt'></i>
                <h1 className='header_name'>Cart</h1>
            </div>

            <div>
                <i onClick={CloseCartHandeler_Function} className='bx bx-x'></i>
            </div>
        </div>
    );
}



export default SecondaryHeader;
