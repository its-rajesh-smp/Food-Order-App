import React, { useContext } from 'react';
import "./CartProductsContainer.css"
import CartItem from './CartItem/CartItem';
import CartPageData_Context from '../../Context/CartPageData/CartPageDataContext';

function CartProductsContainer(props) {

    const cartDatCTX = useContext(CartPageData_Context)



    return (
        <div className=' CartProductsContainer-div '>
            {
                // Updating Dom
                cartDatCTX.cartDataArray.map((val) => {
                    return (
                        <CartItem name={val.name} price={val.price} quantity={val.quantity} key={Math.random()} />
                    )
                })
            }
        </div>
    );
}

export default CartProductsContainer;
