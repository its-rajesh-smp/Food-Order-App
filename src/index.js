import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from "./App/App"

import CartOpenClose_Provider from './Context/CartOpenClose/CartOpenCloseProvider';

ReactDOM.render(
    <CartOpenClose_Provider>
        <App />
    </CartOpenClose_Provider>,
    document.querySelector("#root")
)