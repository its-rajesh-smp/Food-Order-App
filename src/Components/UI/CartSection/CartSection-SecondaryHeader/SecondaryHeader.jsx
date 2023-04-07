import React, { useContext } from 'react';
import "./SecondaryHeader.css"
import CartOpenCloseCTX from '../../../../Context/CartOpenClose/CartOpenCloseContext';



function SecondaryHeader() {

    const cartCloseCTX = useContext(CartOpenCloseCTX)



    return (
        <div className='SecondaryHeader-div '>
            <div className='header'>
                <i className='bx bx-cart-alt'></i>
                <h1 className='header_name'>Cart</h1>
            </div>

            <div>
                <i onClick={cartCloseCTX.closeCartPage} className='bx bx-x'></i>
            </div>
        </div>
    );
}



export default SecondaryHeader;
