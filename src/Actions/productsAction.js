import axios from "axios"


// ACTION CREATOR
export const showData = (response) => {
    return { type: "SHOW_PRODUCTS", payload: response }
}
const addOnCart = (data) => {
    return { type: "ADD_ON_CART", payload: data }
}
const updateOnCart = (data) => {
    return { type: "UPDATE_ON_CART", payload: data }
}
const removeFromCart = (data) => {
    return { type: "REMOVE_FROM_CART", payload: data }
}




// SHOW DATA ON SCREEN
export const getProductsFromServer = () => {
    return async (dispatch, getState) => {

        try {

            const productResponse = await axios.get("http://localhost:3000/products")
            const cartResponse = await axios.get("http://localhost:3000/cartItems")

            dispatch(showData({ products: productResponse.data, cartList: cartResponse.data }))

        }
        catch (e) {
            console.log(e);
        }
    }
}


// ADD PRODUCT TO SERVER
export const addProductToServer = (productData) => {
    return async (dispatch, getState) => {

        const currentCartData = getState().productsReducer.cartList

        try {
            if (productData.quantity === 0) {
                const { data } = await axios.delete(`http://localhost:3000/cartItems/${productData.id}`)

                dispatch(removeFromCart(productData))
                return "SUCCESS"
            }

            let isPresent = false

            for (let i = 0; i < currentCartData.length; i++) {
                if (currentCartData[i].id === productData.id) {
                    isPresent = true
                    break
                }
            }

            if (isPresent === true) {
                const { data } = await axios.put(`http://localhost:3000/cartItems/${productData.id}`, productData)

                dispatch(updateOnCart(data))
                return "SUCCESS"
            }

            else {
                const { data } = await axios.post(`http://localhost:3000/cartItems`, productData)

                dispatch(addOnCart(data))
                return "SUCCESS"
            }

        }
        catch (e) {
            console.log(e);
        }
    }
}



