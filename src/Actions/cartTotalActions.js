import axios from "axios"

export const increamentTotal = (data) => {
    return { type: "INCREAMENT_TOTAL", payload: data }
}
const decreamentTotal = (data) => {
    return { type: "DECREAMENT_TOTAL", payload: data }
}

const showCartTotal = (data) => {
    return { type: "SHOW_CART_TOTAL", payload: data }
}



// Show Data From Server on Screen mount
export const showCartTotalFromServerACT = () => {
    return async (dispatch, getState) => {

        try {
            const { data } = await axios.get("http://localhost:3000/cartTotal")
            dispatch(showCartTotal(data))

        }
        catch (e) {
            console.log(e);
        }
    }
}

// Increament Total In Server
export const increamentTotalInServerACT = (productData) => {
    return async (dispatch, getState) => {
        try {
            const currentState = getState().cartTotalReducer.cartTotal

            const newTotal = { totalPrice: currentState.totalPrice + productData.price, totalQuantity: currentState.totalQuantity + 1 }

            const { data } = await axios.put("http://localhost:3000/cartTotal", newTotal)

            console.log(data);
            dispatch(increamentTotal(data))
        }
        catch (e) {
            console.log(e);
        }
    }
}

// Decreament Total In Server
export const decreamentTotalInServerACT = (productData) => {
    return async (dispatch, getState) => {
        try {
            const currentState = getState().cartTotalReducer.cartTotal

            const newTotal = { totalPrice: currentState.totalPrice - productData.price, totalQuantity: currentState.totalQuantity - 1 }

            const { data } = await axios.put("http://localhost:3000/cartTotal", newTotal)

            console.log(data);
            dispatch(decreamentTotal(data))
        }
        catch (e) {
            console.log(e);
        }
    }
}