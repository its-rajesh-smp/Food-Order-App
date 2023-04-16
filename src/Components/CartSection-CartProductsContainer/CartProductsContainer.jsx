import React from 'react';
import "./CartProductsContainer.css"
import CartItem from "../UI/CartSection/CartItem/CartItem"
import { useSelector } from 'react-redux';


function CartProductsContainer(props) {

    const myCartList = useSelector(state => state.productsReducer.cartList)

    console.log("%cCART PRODUCT CONTAINER RENDER", "color:coral");



    return (
        <div className=' CartProductsContainer-div '>
            {
                myCartList.map((val) => {
                    return <CartItem details={{
                        name: val.name,
                        price: val.price,
                        quantity: val.quantity,
                        id: val.id
                    }} key={val.id} />
                })
            }
        </div>
    );
}

export default CartProductsContainer;
