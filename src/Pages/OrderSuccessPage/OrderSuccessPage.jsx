import React, { useContext } from 'react';
import "./OrderSuccessPage.css"
import CartOpenCloseCTX from '../../Context/CartOpenClose/CartOpenCloseContext';


function OrderSuccessPage(props) {


    const hideAgain = useContext(CartOpenCloseCTX)
    // Removing from local Storage
    localStorage.removeItem("USER_CART_TOTAL")
    localStorage.removeItem("USER_CART_PRODUCT_DATA")
    localStorage.removeItem("APPLIED_OFFER")

    setTimeout(function () {
        // Go Back to landing page after some second
        hideAgain.closeCartPage()
    }, 4000);

    return (
        <div className=' OrderSuccessPage-div '>
            <h1>Order Successfull</h1>
            <p>Order details will send to your mobile..</p>
        </div>
    );
}

export default OrderSuccessPage;
