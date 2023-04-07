import React, { useEffect, useState } from 'react';
import "./CartProductsContainer.css"
import CartItem from "../UI/CartSection/CartItem/CartItem"


function CartProductsContainer(props) {

    // State for update array of cartItem
    const [localDataArray, setLocalDataArray] = useState([])

    /* -------------------------------------------------------------------------- */
    /*                     FETCH CART DATA FROM LOCAL STORAGE                     */
    /* -------------------------------------------------------------------------- */

    useEffect(() => {
        // Getign Data From LocalStorage
        const localStorageData = JSON.parse(localStorage.getItem("USER_CART_PRODUCT_DATA"))
        if (localStorageData !== null) {

            // extracting keys from it
            const newKeyArray = Object.keys(localStorageData)

            // Create component array 
            const newDataArray = newKeyArray.map((val) => {
                const productName = val
                const productPrice = localStorageData[val].price
                const productQuantity = localStorageData[val].quantity
                return (
                    <CartItem name={productName} price={productPrice} quantity={productQuantity} key={Math.random()} />
                )
            })
            //set inside container
            setLocalDataArray(newDataArray)
        }
    }, [])


    return (
        <div className=' CartProductsContainer-div '>
            {localDataArray}
        </div>
    );
}

export default CartProductsContainer;
