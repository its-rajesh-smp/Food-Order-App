import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from "./App/App"
import CartOpenClose_PROVIDER from './Context/CartOpenClose/CartOpenCloseProvider';
import VIEWCARTDATA_PROVIDER from './Context/ViewCartData/ViewCartDataProvider';
import { OfferPromoProvider } from './Context/OfferPromoData/OfferPromoCtx';
ReactDOM.render(


    <CartOpenClose_PROVIDER>
        <OfferPromoProvider>

            <VIEWCARTDATA_PROVIDER>
                <App />
            </VIEWCARTDATA_PROVIDER>

        </OfferPromoProvider>
    </CartOpenClose_PROVIDER>,
    document.querySelector("#root")
)