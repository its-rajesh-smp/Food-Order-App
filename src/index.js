import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from "./App/App"
import CartOpenClose_PROVIDER from './Context/CartOpenClose/CartOpenCloseProvider';
import VIEWCARTDATA_PROVIDER from './Context/ViewCartData/ViewCartDataProvider';

ReactDOM.render(

    <CartOpenClose_PROVIDER>
        <VIEWCARTDATA_PROVIDER>
            <App />
        </VIEWCARTDATA_PROVIDER>
    </CartOpenClose_PROVIDER>,
    document.querySelector("#root")
)