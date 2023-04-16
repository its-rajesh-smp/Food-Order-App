const initialState = {
    cartTotal: { totalPrice: 0, totalQuantity: 0 }

}



export const cartTotalReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SHOW_CART_TOTAL": {
            const newState = {
                cartTotal: action.payload
            }
            return newState
        }
        case "INCREAMENT_TOTAL": {
            const newState = {
                cartTotal: action.payload
            }
            return newState
        }
        case "DECREAMENT_TOTAL": {
            const newState = {
                cartTotal: action.payload
            }
            return newState
        }
        default: return state
    }

}

