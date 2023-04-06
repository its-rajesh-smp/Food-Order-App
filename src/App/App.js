import React, { useContext } from 'react';
import "./App.css"
import CartPage from '../CartPage/CartPage';
import ProductPage from '../ProductPage/ProductPage';
import CartOpenClose_CONTEXT from '../Context/CartOpenClose/CartOpenCloseContext';
import OrderSuccessPage from '../OrderSuccessPage/OrderSuccessPage';


function App(props) {

    // Context To OpenClose Cart
    const context_OpenCloseCart = useContext(CartOpenClose_CONTEXT)


    return (


        <div className=' App-div container '>


            {!context_OpenCloseCart.openCart_BOOL && <ProductPage />}
            {context_OpenCloseCart.openCart_BOOL && <CartPage />}
            {/* <OrderSuccessPage /> */}





        </div>
    );
}

export default App;
