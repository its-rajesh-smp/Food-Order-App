import React from 'react';
import "./CartPage.css"
import DelivaryAddress from '../Components/DelivaryAddress/DelivaryAddress';
import CartProductsContainer from '../Components/CartProducts/CartProductsContainer';
import { BillDetails, CartOffersAndCoupons, SillyHeader } from '../Components/SillyComponents/SillyComponents';
import Order from '../Components/Order/Order';

function  CartPage (props) {
    return ( 
        <div className=' CartPage-div '>
            <SillyHeader/>
            <DelivaryAddress/>
            <CartProductsContainer/>
            <CartOffersAndCoupons/>
            <BillDetails/>
            <Order/>
        </div>
     );
}

export default CartPage;
