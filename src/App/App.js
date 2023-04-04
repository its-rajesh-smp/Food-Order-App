import React from 'react';
import "./App.css"
import ProductPage from '../ProductPage/ProductPage';
import CartPage from '../CartPage/CartPage';




function  App (props) {
    return ( 
        <div className=' App-div container '>

            <CartPage/>
            
            <ProductPage/>
        </div>
     );
}

export default App;
