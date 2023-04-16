import { combineReducers } from "redux"
import { productsReducer } from "../productsReducer"
import { cartTotalReducer } from "../cartTotalReducer"


export const rootReducer = combineReducers({
    productsReducer,
    cartTotalReducer
})