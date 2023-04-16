const initialState = {
    cartList: [],
    products: [],
}


export const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SHOW_PRODUCTS": {
            const newState = {
                cartList: action.payload.cartList,
                products: action.payload.products
            }
            return newState
        }

        case "ADD_ON_CART": {
            state.cartList.push(action.payload)
            console.log("%cNew Data Added", "color:yellow");
            return state
        }

        case "UPDATE_ON_CART": {
            state.cartList.forEach((val) => {
                if (val.name === action.payload.name) {
                    val.quantity = action.payload.quantity
                }
            })
            console.log("%cExisting Data Updated", "color:yellow");
            return state
        }
        case "REMOVE_FROM_CART": {
            const newCartList = state.cartList.filter((val) => {
                if (val.name !== action.payload.name) {
                    return val
                }
            })
            console.log("%cExisting Data Removed", "color:yellow");
            state.cartList = newCartList

            return state
        }


        default: return state
    }
}


