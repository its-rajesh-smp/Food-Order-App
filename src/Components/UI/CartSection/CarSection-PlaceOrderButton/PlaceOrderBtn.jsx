import React, { useContext } from 'react';
import "./PlaceOrderBtn.css"
import AddToCartCTX from '../../../../Context/AddToCart/AddToCartCTX';
import CartOpenCloseCTX from '../../../../Context/CartOpenClose/CartOpenCloseContext';
function PlaceOrderBtn(props) {

    const OrderCTX = useContext(AddToCartCTX)
    const openThanksForOrder = useContext(CartOpenCloseCTX)

    const orderDetails = OrderCTX.localCartData
    const thanksForOrder = () => {
        console.log(orderDetails);
        openThanksForOrder.openPlaceOrderPage()
    }


    // We have to show if any item is in the cart
    const total = OrderCTX.totalCart.price

    return (
        total > 0 ?
            <div onClick={thanksForOrder} className=' PlaceOrderBtn-div '>
                <h3>Place Order</h3>
                <i className='bx bx-cart-download'></i>
            </div>

            :
            <>
                <h1 className='oopsCartEmpty'>OOps Cart Become Empty 🥑</h1>
                <p className='oopsCartEmpty'>🍚 Add Something To Proceed 🥫</p>
            </>
    );
}

export default PlaceOrderBtn;
