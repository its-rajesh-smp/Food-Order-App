import React, { useContext } from 'react';
import "./App.css"
import ProductPage from '../ProductPage/ProductPage';
import CartPage from '../CartPage/CartPage';
import CartOpenClose_Context from '../Context/CartOpenClose/CartOpenCloseContext';




function App(props) {
    const cartOpenCloseCTX = useContext(CartOpenClose_Context)


    return (
        <div className=' App-div container '>

            {cartOpenCloseCTX.openCart && <CartPage />}

            {!cartOpenCloseCTX.openCart && <ProductPage />}

        </div>
    );
}

export default App;
