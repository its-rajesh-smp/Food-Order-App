import { combineReducers } from "redux"
import { productsReducer } from "../productsReducer"
import { cartTotalReducer } from "../cartTotalReducer"

import { offerReducer } from "../offerReducer"


export const rootReducer = combineReducers({
    productsReducer,
    cartTotalReducer,
    offerReducer
})