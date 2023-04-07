import React from 'react';
import "./CartPage.css"
import DelivaryAddress from '../Components/DelivaryAddress/DelivaryAddress';
import CartProductsContainer from '../../Components/CartSection-CartProductsContainer/CartProductsContainer';
import { BillDetails, CartOffersAndCoupons, SillyHeader } from '../Components/SillyComponents/SillyComponents';
import Order from '../Components/Order/Order';
import CartPageData_Provider from '../../Context/CartPageData/CartPageDataProvider';

function CartPage(props) {
    return (

        <CartPageData_Provider>

            <div className=' CartPage-div '>
                <SillyHeader />
                <DelivaryAddress />
                <CartProductsContainer />
                <CartOffersAndCoupons />
                <BillDetails />
                <Order />
            </div>

        </CartPageData_Provider>

    );
}

export default CartPage;
